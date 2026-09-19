export const NAV_ITEMS = [
  { label: 'Dashboard & Lab Ops', icon: 'dashboard', path: 'dashboard-and-lab-ops', active: true },
  { label: 'Registrasi & Rantai Sampel', icon: 'biotech', path: 'registrasi-and-rantai-sampel' },
  { label: 'Validasi & Sertifikat LHU/CoA', icon: 'verified', path: 'validasi-and-sertifikat-lhu-coa' },
  { label: 'Portal Pelanggan Eksternal', icon: 'group', path: 'portal-pelanggan-eksternal' },
  { label: 'Inventaris Reagen & Alat Lab', icon: 'inventory_2', path: 'inventaris-reagen-and-alat-lab' },
  { label: 'Tagihan & Billing', icon: 'receipt_long', path: 'tagihan-and-billing' },
  { label: 'Audit Trail & Settings', icon: 'history_edu', path: 'audit-trail-and-settings' }
]

export const TREND_DATA = [
  { day: 'Sen', received: 24, inTesting: 14, verified: 6, bars: { v: 24, t: 56, r: 64 } },
  { day: 'Sel', received: 28, inTesting: 16, verified: 8, bars: { v: 32, t: 64, r: 80 } },
  { day: 'Rab', received: 35, inTesting: 20, verified: 10, bars: { v: 40, t: 80, r: 96 } },
  { day: 'Kam', received: 30, inTesting: 16, verified: 12, bars: { v: 48, t: 64, r: 80 } },
  { day: 'Jum', received: 42, inTesting: 26, verified: 14, bars: { v: 56, t: 96, r: 112 } },
  { day: 'Sab', received: 18, inTesting: 10, verified: 8, bars: { v: 32, t: 40, r: 48 } },
  { day: 'Min', received: 10, inTesting: 6, verified: 4, bars: { v: 16, t: 24, r: 32 } }
]

export const SAMPLES = [
  {
    id: 'SMP-2025-0891',
    sub: 'Chain ID: #COC-9941',
    subTone: 'normal',
    icon: 'qr_code_2',
    iconTone: 'text-primary',
    idTone: 'text-primary',
    matrix: 'Air Limbah Outlet IPAL',
    client: 'PT Cahaya Indo Perkasa',
    division: 'Kimia Lingkungan',
    divisionClass: 'bg-surface-container text-on-surface',
    tests: 'BOD, COD, Logam Berat',
    date: '28 Feb 2025',
    time: '08:14 WIB',
    analyst: 'Rina S., S.Si',
    analystMeta: 'Inst: ICP-OES',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCIcwNVkviZP4gnBW_avYKxA2zM1S3eaLMAw3w5qzPmurTYISH4lx55wF_jAk3xEdVy2VNzDAa58NCJ7vwgih2LQXZQ5bwwYj6L15U5XhYC6e-4HWmBPuvG4Z90-6DGLhU8B_evGuI8A2nfNusuZsUnRO3LGsjBTO-8KVaGRrVsJc1y6i_Hw7-JDHD7jXa_DcEubl1nuFCBkCDoDt74kKLxImg928T7UvxLpb-o2MJQ',
    status: 'in-testing',
    rowClass: 'bg-surface-container-lowest'
  },
  {
    id: 'SMP-2025-0892',
    sub: 'Deviasi Regulasi Baku',
    subTone: 'error',
    icon: 'warning',
    iconTone: 'text-error',
    idTone: 'text-error',
    matrix: 'Tepung Terigu Fortifikasi Batch 4',
    client: 'PT Pangan Sejahtera Makmur',
    division: 'Kimia Pangan',
    divisionClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    tests: 'Kadar Air & Fe Total',
    date: '27 Feb 2025',
    time: '14:20 WIB',
    analyst: 'Budi Hartono, M.T',
    analystMeta: 'Inst: AAS PinAAcle',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCnIEuovMYdELkokm6nVUvAlMqrfIzBSpq7_4mCRXEPQrha_PlgjW9lXhKYjXQ2UUZd96zv_WnbVmvHcQ0GduqljHF0Oqg6KmcPVKY8RCmY3WgldwLAJTNTyNzBxRxnw4xC3D0Rjk0HDv2bDDxVNedeZPjaYl32cxaagFYrIxy1siLIOFW17J3bKogVMAyFwppOSZbZJNXJ8xulv9BjbX6ElciF8JiNEDdEmDj7Viu',
    status: 'oos',
    rowClass: 'bg-tertiary-fixed/10'
  },
  {
    id: 'SMP-2025-0893',
    sub: 'Chain ID: #COC-9943',
    subTone: 'normal',
    icon: 'qr_code_2',
    iconTone: 'text-primary',
    idTone: 'text-primary',
    matrix: 'Minuman Sari Apel Kemasan',
    client: 'PT Agronusa Flora Prima',
    division: 'Mikrobiologi',
    divisionClass: 'bg-secondary-container/40 text-on-secondary-container',
    tests: 'TPC, E. Coli, Salmonella',
    date: '27 Feb 2025',
    time: '16:45 WIB',
    analyst: 'Dewi Lestari, S.Farm',
    analystMeta: 'Inkubasi: 48 Jam',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA7Qxzf3FKS-_ulW7DRVsx7Vlu3uJ2nfc3I6byW_wfIQXOxJg9nHBQxmA-XgA823kpPrVoPxQjcGDEobqJfqsWDKbCGG-lctu_ARAr4th1OPfXP-KoiQpSPolalxFC6tvjjpxPOdterfoQjlrPqhsV-d4_70mTPGZ5CiwhzkoJ5gH7WVn554VOh1FXR8EpK6ZQpw4fnIqfDFyN1ED5sdPitCsXfa1ZQ9awfxM-ftnVc',
    status: 'verification',
    rowClass: 'bg-surface-container-lowest'
  },
  {
    id: 'SMP-2025-0894',
    sub: 'CoA Released: #LHU-02-184',
    subTone: 'normal',
    icon: 'qr_code_2',
    iconTone: 'text-primary',
    idTone: 'text-primary',
    matrix: 'Minyak Kelapa Sawit Mentah (CPO)',
    client: 'PT Sawit Jaya Lestari',
    division: 'Kimia Industri',
    divisionClass: 'bg-surface-container text-on-surface',
    tests: 'FFA, DOBI, M&I',
    date: '26 Feb 2025',
    time: '11:10 WIB',
    analyst: 'Dr. Anjali Sharma',
    analystMeta: 'Sign-off Validator',
    avatar: null,
    initials: 'AS',
    status: 'approved',
    rowClass: 'bg-surface-container-lowest'
  }
]

export const QC_POINTS = [
  { x: 20, y: 74 },
  { x: 60, y: 62 },
  { x: 100, y: 78 },
  { x: 140, y: 52 },
  { x: 180, y: 68 },
  { x: 220, y: 72 },
  { x: 260, y: 58 },
  { x: 300, y: 66 },
  { x: 340, y: 64, last: true }
]
