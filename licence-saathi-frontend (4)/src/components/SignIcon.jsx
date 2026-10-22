import React from 'react'

export default function SignIcon({ sign, size = 96, lang = 'en' }) {
  const c = sign.colour || '#df4034'
  const common = { width: size, height: size, viewBox: '0 0 100 100', role: 'img', 'aria-label': sign[lang] || sign.en }
  if (sign.shape === 'octagon') return <svg {...common}><polygon points="30,4 70,4 96,30 96,70 70,96 30,96 4,70 4,30" fill={c}/><text x="50" y="56" textAnchor="middle" fontSize="14" fontWeight="800" fill="white">STOP</text></svg>
  if (sign.shape === 'circle') return <svg {...common}><circle cx="50" cy="50" r="43" fill="white" stroke={sign.id === 'keep-left' || sign.id === 'helmet' || sign.id === 'seatbelt' ? c : '#df4034'} strokeWidth="11"/><text x="50" y="58" textAnchor="middle" fontSize="30" fontWeight="800" fill={sign.id === 'keep-left' || sign.id === 'helmet' || sign.id === 'seatbelt' ? c : '#df4034'}>{sign.symbol}</text>{['no-entry','no-parking','no-horn','speed-40'].includes(sign.id) && <line x1="17" y1="17" x2="83" y2="83" stroke="#df4034" strokeWidth="8"/>}</svg>
  if (sign.shape === 'triangle-down') return <svg {...common}><polygon points="50,94 5,10 95,10" fill="white" stroke={c} strokeWidth="8"/><text x="50" y="67" textAnchor="middle" fontSize="34" fontWeight="800" fill="#45515b">{sign.symbol}</text></svg>
  if (sign.shape === 'triangle') return <svg {...common}><polygon points="50,6 96,90 4,90" fill="#fff" stroke={c} strokeWidth="8"/><text x="50" y="67" textAnchor="middle" fontSize="34" fontWeight="800" fill="#45515b">{sign.symbol}</text></svg>
  return <svg {...common}><rect x="9" y="9" width="82" height="82" rx="5" fill={c}/><text x="50" y="64" textAnchor="middle" fontSize="37" fontWeight="800" fill="white">{sign.symbol}</text></svg>
}
