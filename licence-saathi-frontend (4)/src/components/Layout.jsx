import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CONFIG } from '../data/config'

export default function Layout({ children, t, lang, setLang, progress, update, onChat, online }) {
  const navigate = useNavigate()
  const nav = [{to:'/', key:'home', icon:'⌂'}, {to:'/learn', key:'learn', icon:'◈'}, {to:'/mock-test', key:'test', icon:'✓'}, {to:'/track', key:'track', icon:'◷'}]
  function toggleLanguage() { const next = lang === 'en' ? 'hi' : lang === 'hi' ? 'ta' : 'en'; setLang(next); update({ language: next }) }
  const nextLanguage = lang === 'en' ? t.settings.hindi : lang === 'hi' ? t.settings.tamil : t.settings.english
  return <div className={`app-shell ${progress.highContrast ? 'high-contrast' : ''} text-${progress.textSize}`}>
    <header className="topbar">
      <Link to="/" className="brand" aria-label={t.layout.home}><span className="brand-mark">LS</span><span>{CONFIG.appName}</span></Link>
      <div className="top-actions"><button className="lang-toggle" onClick={toggleLanguage} aria-label={t.layout.changeLanguage}>{nextLanguage}</button><button className="icon-button" onClick={() => navigate('/settings')} aria-label={t.nav.settings}>⚙</button></div>
    </header>
    {!online && <div className="offline-line" role="status">{t.offline.message}</div>}
    <main className="main-content">{children}</main>
    <button className="chat-fab" onClick={onChat} aria-label={t.layout.ask}>☵ <span>{t.layout.ask}</span></button>
    <nav className="bottom-nav" aria-label={t.layout.mainNavigation}>{nav.map(item => <NavLink key={item.to} to={item.to} className={({isActive}) => isActive ? 'active' : ''}><span aria-hidden="true">{item.icon}</span><small>{t.nav[item.key]}</small></NavLink>)}</nav>
    <footer className="site-footer">{t.footer}</footer>
  </div>
}
