import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute({ children }) {
  const { user, loading, dbReady } = useAuth()
  const location = useLocation()
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-surface">
        <div className="flex items-center gap-2 text-[14px] text-on-surface-variant">
          <span className="material-symbols-outlined animate-spin text-[20px] text-primary">progress_activity</span>
          Memuat sesi...
        </div>
      </div>
    )
  }
  if (!dbReady || !user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />
  }
  return children
}
