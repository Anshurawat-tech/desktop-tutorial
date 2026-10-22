import React, { useMemo, useState } from 'react'
import { faqs } from '../data/faq'
import { faqTa } from '../data/faqTa'

export default function ChatHelper({ open, onClose, lang, t, progress, update }) {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const quick = t.chat.quick
  const nextStep = t.home.map[Math.min(progress.stage || 0, t.home.map.length - 1)]
  const answer = useMemo(() => (query) => {
    const q = query.toLowerCase()
    const found = faqs.find(f => [...f.slice(0, 3), faqTa[f[0]]?.[0] || ''].some(value => value.toLowerCase().split(/\s+/).some(word => word.length > 3 && q.includes(word))))
    if (found) return lang === 'en' ? found[3] : lang === 'hi' ? found[4] : faqTa[found[0]]?.[1]
    return t.chat.notSure
  }, [lang])
  function ask(text) { if (!text.trim()) return; setMessages(m => [...m, { from:'user', text }, { from:'bot', text: answer(text) }]); setInput('') }
  if (!open) return null
  return <div className="chat-panel" role="dialog" aria-label={t.chat.title}>
    <div className="chat-head"><div><strong>{t.chat.title}</strong><small>{t.chat.subtitle}</small></div><button onClick={onClose} aria-label={t.common.close}>×</button></div>
    <div className="chat-messages"><div className="chat-bubble bot">{t.chat.welcome}</div><div className="chat-next"><strong>{t.chat.nextStep}</strong><span>{nextStep}</span></div>{messages.map((m,i) => <div key={i} className={`chat-bubble ${m.from}`}>{m.text}</div>)}</div>
    <div className="quick-replies">{quick.map(q => <button key={q} onClick={() => ask(q)}>{q}</button>)}</div>
    <div className="chat-input"><input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && ask(input)} placeholder={t.chat.placeholder} aria-label={t.chat.questionLabel}/><button onClick={() => ask(input)} aria-label={t.chat.send}>➜</button></div>
  </div>
}
