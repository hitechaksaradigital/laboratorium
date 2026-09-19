import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { supabase, supabaseConfigured } from '../lib/supabase'

const AuthContext = createContext({
  user: null,
  session: null,
  loading: true,
  dbReady: false,
  signIn: async () => {},
  signUp: async () => {},
  signOut: async () => {}
})

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [session, setSession] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!supabaseConfigured) {
      setLoading(false)
      return
    }
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session || null)
      setUser(data.session?.user || null)
      setLoading(false)
    })
    const { data: sub } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess)
      setUser(sess?.user || null)
    })
    return () => sub?.subscription?.unsubscribe()
  }, [])

  const value = useMemo(
    () => ({
      user,
      session,
      loading,
      dbReady: supabaseConfigured,
      signIn: async (email, password) => {
        if (!supabaseConfigured) throw new Error('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di .env.')
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        return data
      },
      signUp: async ({ name, email, password }) => {
        if (!supabaseConfigured) throw new Error('Supabase belum dikonfigurasi. Isi VITE_SUPABASE_URL dan VITE_SUPABASE_ANON_KEY di .env.')
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: name } }
        })
        if (error) throw error
        return data
      },
      signOut: async () => {
        if (!supabaseConfigured) return
        await supabase.auth.signOut()
      }
    }),
    [user, session, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
