export const INTAKE_DEFAULTS = {
  company: 'PT Biofarmaka Nusantara Farma',
  contract: 'KTR-2025/BFN-IV/0821',
  contact: 'Ir. Wahyu Pratama (+62 811-2399-4012)',
  email: 'qa-assurance@biofarmaka-nusantara.co.id',
  sampleName: 'Ekstrak Cair Curcuma Purified Batch IV-A',
  matrix: 'Bahan Baku Farmasi',
  volume: '500',
  volumeUnit: 'mL',
  container: 'Botol Kaca Amber + Segel Foil',
  temp: '3.8'
}

export const MATRIX_OPTIONS = [
  'Bahan Baku Farmasi',
  'Makanan & Minuman Kemasan',
  'Air Bersih / Limbah Industri',
  'Udara Ambien & Emisi',
  'Tanah & Sedimen Geoteknik'
]

export const INTEGRITY_DEFAULTS = {
  seal: true,
  coldChain: true,
  label: true,
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

export const LABEL_DEFAULTS = {
  sampleId: 'SMP-2025-0892',
  revision: 'R-01',
  location: 'COLD STORAGE A-03',
  received: '24/10/25 10:15',
  printer: 'Zebra ZD621 (Direct Thermal - Online)'
}

export const COC_STEPS = [
  {
    no: 1,
    title: 'Diterima oleh Petugas Penerimaan',
    time: '10:15 WIB',
    holder: 'Pemegang: Budi Santoso (Staff Sample Reception)',
    note: 'Kondisi diterima dingin (3.8°C), segel pabrikan terverifikasi',
    icon: 'done',
    tone: 'done'
  },
  {
    no: 2,
    title: 'Penyimpanan Sementara (Cold Buffer)',
    time: '10:45 WIB',
    holder: 'Fasilitas: Cool Storage Rack B (Compartment #03)',
    note: 'Sensor IoT Log: 3.9°C konstan, RH 55%',
    icon: 'done',
    tone: 'done'
  },
  {
    no: 3,
    title: 'Serah Terima ke Analis Kimia Instrumen',
    time: '11:30 WIB',
    holder: 'Pemegang Saat Ini: Dr. Anjali Sharma, M.Sc',
    room: 'Ruang Pengujian: Lab Spektroskopi & Kromatografi Gedung B',
    icon: 'biotech',
    tone: 'active'
  },
  {
    no: 4,
    title: 'Verifikasi Supervisor & Retensi Sampel',
    time: 'Est. 27 Okt',
    holder: 'Rencana Arsip: Retensi 30 Hari di Cold Vault C-01 setelah pengujian selesai',
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
