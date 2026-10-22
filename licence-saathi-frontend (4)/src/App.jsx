import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ChatHelper from './components/ChatHelper'
import en from './i18n/en'
import hi from './i18n/hi'
import ta from './i18n/ta'
import { CONFIG, loadProgress } from './data/config'
import { Home, ApplyCheck, Documents, LLApplication, Learn, MockTest, TestDay, Permanent, DrivingTest, Track, Settings } from './pages/Pages'

export default function App() {
  const [progress, setProgress] = useState(loadProgress)
  const [chat, setChat] = useState(false)
  const [online, setOnline] = useState(() => typeof navigator === 'undefined' ? true : navigator.onLine)
  const [installPrompt, setInstallPrompt] = useState(null)
  const lang = ['en', 'hi', 'ta'].includes(progress.language) ? progress.language : 'en'
  const t = { en, hi, ta }[lang]
  useEffect(() => { localStorage.setItem(CONFIG.storageKey, JSON.stringify(progress)) }, [progress])
  useEffect(() => {
    const goOnline = () => setOnline(true); const goOffline = () => setOnline(false)
    const offerInstall = event => { event.preventDefault(); setInstallPrompt(event) }
    const installed = () => setInstallPrompt(null)
    window.addEventListener('online', goOnline); window.addEventListener('offline', goOffline)
    window.addEventListener('beforeinstallprompt', offerInstall); window.addEventListener('appinstalled', installed)
    return () => { window.removeEventListener('online', goOnline); window.removeEventListener('offline', goOffline); window.removeEventListener('beforeinstallprompt', offerInstall); window.removeEventListener('appinstalled', installed) }
  }, [])
  function update(patch) {
    setProgress(p => { const next = { ...p, ...patch }; localStorage.setItem(CONFIG.storageKey, JSON.stringify(next)); return next })
  }
  function setLang(value) { update({ language: value }) }
  async function installApp() { if (!installPrompt) return; await installPrompt.prompt(); setInstallPrompt(null) }
  const context = { t, lang, progress, update, setLang, online, installAvailable: !!installPrompt, installApp }
  return <Layout {...context} onChat={() => setChat(true)}>
    <Routes>
      <Route path="/" element={<Home {...context}/>}/>
      <Route path="/apply-check" element={<ApplyCheck {...context}/>}/>
      <Route path="/documents" element={<Documents {...context}/>}/>
      <Route path="/ll-application" element={<LLApplication {...context}/>}/>
      <Route path="/learn" element={<Learn {...context}/>}/>
      <Route path="/mock-test" element={<MockTest {...context}/>}/>
      <Route path="/test-day" element={<TestDay {...context}/>}/>
      <Route path="/permanent" element={<Permanent {...context}/>}/>
      <Route path="/driving-test" element={<DrivingTest {...context}/>}/>
      <Route path="/track" element={<Track {...context}/>}/>
      <Route path="/settings" element={<Settings {...context}/>}/>
      <Route path="*" element={<Navigate to="/" replace/>}/>
    </Routes>
    <ChatHelper open={chat} onClose={() => setChat(false)} {...context}/>
  </Layout>
}
