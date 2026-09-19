export const INTAKE_EMPTY = {
  company: '',
  contract: '',
  contact: '',
  email: '',
  sampleName: '',
  matrix: '',
  volume: '',
  volumeUnit: 'mL',
  container: '',
  temp: ''
}

export const MATRIX_OPTIONS = [
  'Bahan Baku Farmasi',
  'Makanan & Minuman Kemasan',
  'Air Bersih / Limbah Industri',
  'Udara Ambien & Emisi',
  'Tanah & Sedimen Geoteknik'
]

export const INTEGRITY_EMPTY = {
  seal: false,
  coldChain: false,
  label: false,
  preservasi: false
}

export const PARAMETERS = [
  {
    id: 'pb',
    name: 'Kadar Logam Berat Timbal (Pb)',
    desc: 'Deteksi trace level <0.001 mg/kg',
    method: 'SNI 19-2896-1998',
    instrument: 'ICP-MS Agilent 7850',
    price: 350000,
    accredited: true
  },
  {
    id: 'alt',
    name: 'Angka Lempeng Total (ALT Mikrobiologi)',
    desc: 'Inkubasi 48 jam aerob 30°C',
    method: 'ISO 4833-1:2013',
    instrument: 'Incubator Shaker Memmert',
    price: 225000,
    accredited: true
  },
  {
    id: 'ph',
    name: 'Derajat Keasaman (pH Elektrometri)',
    desc: 'Kompensasi suhu otomatis 25°C',
    method: 'ASTM D1293-18',
    instrument: 'Mettler Toledo SevenDirect',
    price: 85000,
    accredited: true
  },
  {
    id: 'kurkuminoid',
    name: 'Kadar Kurkuminoid Total (Spektrofotometri)',
    desc: 'Assay kuantitatif absorbansi 425 nm',
    method: 'FHI Edisi II:2017',
    instrument: 'UV-Vis Shimadzu UV-2600i',
    price: 420000,
    accredited: false
  }
]

export const LABEL_EMPTY = {
  sampleId: '— (terbit otomatis saat konfirmasi) —',
  revision: 'R-01',
  location: 'COLD STORAGE A-03',
  received: '—',
  printer: 'Zebra ZD621 (Direct Thermal - Online)'
}

export const COC_STEPS = [
  {
    no: 1,
    title: 'Diterima oleh Petugas Penerimaan',
    time: '—',
    holder: 'Pemegang: — belum dicatat —',
    note: 'Catat kondisi & segel saat penerimaan oleh admin',
    icon: 'schedule',
    tone: 'future'
  },
  {
    no: 2,
    title: 'Penyimpanan Sementara (Cold Buffer)',
    time: '—',
    holder: 'Fasilitas: — belum dicatat —',
    note: 'Catat rak & suhu penyimpanan oleh admin',
    icon: 'schedule',
    tone: 'future'
  },
  {
    no: 3,
    title: 'Serah Terima ke Analis',
    time: '—',
    holder: 'Pemegang Saat Ini: — belum diserahkan —',
    icon: 'schedule',
    tone: 'future'
  },
  {
    no: 4,
    title: 'Verifikasi Supervisor & Retensi Sampel',
    time: '—',
    holder: 'Rencana arsip dicatat setelah pengujian selesai',
    icon: 'schedule',
    tone: 'future'
  }
]

export const HANDOVER_RECIPIENTS = [
  'Hendrik Pratama, S.Si (Analis Mikrobiologi)',
  'Siti Nurhaliza, M.Biotech (Supervisor Laboratorium)',
  'Cold Storage Vault Keeper (Rak C-02)',
  'Courier Driver Ekspedisi Spesimen Khusus'
]

export const BARCODE_BARS = [
  [0, 3], [5, 2], [9, 4], [16, 1], [19, 3], [25, 2], [30, 5], [38, 2],
  [42, 3], [48, 1], [52, 4], [59, 3], [64, 2], [68, 5], [76, 1],
  [80, 3], [85, 2], [90, 4], [97, 2], [102, 3], [108, 2], [113, 5],
  [121, 1], [125, 3], [130, 4], [137, 2], [142, 3], [147, 1],
  [151, 4], [158, 2], [163, 5], [171, 2], [176, 3], [182, 1],
  [186, 4], [193, 2], [198, 3], [204, 4], [211, 1], [215, 3],
  [221, 2], [226, 4], [233, 2], [238, 2]
]

export function formatIDR(n) {
  return 'IDR ' + n.toLocaleString('id-ID')
}
