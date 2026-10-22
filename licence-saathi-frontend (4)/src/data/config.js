export const CONFIG = {
  appName: 'Licence Saathi',
  minAge: { gearless: 16, motorcycle: 18, car: 18, commercial: 20 },
  fees: { learnerLicence: 150, learnerTest: 50, drivingTest: 300, licenceIssue: 200 },
  learnerTest: { questions: 15, passMark: 9, secondsPerQuestion: 30 },
  learnerValidityMonths: 6,
  permanentWaitDays: 30,
  sampleStates: ['Delhi', 'Maharashtra', 'Karnataka', 'Uttar Pradesh', 'Rajasthan'],
  sampleStateLabels: {
    Delhi: { en:'Delhi', hi:'दिल्ली', ta:'டெல்லி' }, Maharashtra: { en:'Maharashtra', hi:'महाराष्ट्र', ta:'மகாராஷ்டிரா' },
    Karnataka: { en:'Karnataka', hi:'कर्नाटक', ta:'கர்நாடகா' }, 'Uttar Pradesh': { en:'Uttar Pradesh', hi:'उत्तर प्रदेश', ta:'உத்தரப் பிரதேசம்' }, Rajasthan: { en:'Rajasthan', hi:'राजस्थान', ta:'ராஜஸ்தான்' }
  },
  storageKey: 'licence-saathi-progress-v1'
}

export const vehicleTypes = [
  { id: 'gearless', en: 'Gearless two-wheeler up to 50cc', hi: '50cc तक बिना गियर वाला दोपहिया', ta: '50cc வரை கியர் இல்லாத இருசக்கர வாகனம்' },
  { id: 'motorcycle', en: 'Motorcycle with gears', hi: 'गियर वाली मोटरसाइकिल', ta: 'கியர் கொண்ட மோட்டார் சைக்கிள்' },
  { id: 'car', en: 'Car', hi: 'कार', ta: 'கார்' },
  { id: 'commercial', en: 'Commercial / transport vehicle', hi: 'कमर्शियल / परिवहन वाहन', ta: 'வணிக / போக்குவரத்து வாகனம்' }
]

export const defaultProgress = {
  language: 'en', textSize: 'normal', highContrast: false, readAloud: false,
  stage: 0, eligibility: { age: '', vehicle: 'motorcycle', state: 'Delhi' },
  documents: {}, llForm: {}, llPaid: false, llApplication: '', learnerDate: '',
  rto: '', slotDate: '', slotTime: '', attempts: [], mockState: { mode: null, index: 0, answers: [], time: 30 }, chatOpen: false
}

export function loadProgress() {
  try { return { ...defaultProgress, ...JSON.parse(localStorage.getItem(CONFIG.storageKey) || '{}') } } catch { return defaultProgress }
}

export function addDays(dateString, days) {
  const date = new Date(`${dateString}T00:00:00`)
  if (Number.isNaN(date.getTime())) return null
  date.setDate(date.getDate() + days)
  return date.toISOString().slice(0, 10)
}

export function addMonths(dateString, months) {
  const date = new Date(`${dateString}T00:00:00`)
  if (Number.isNaN(date.getTime())) return null
  date.setMonth(date.getMonth() + months)
  return date.toISOString().slice(0, 10)
}

export function money(value) { return `₹${value}` }
