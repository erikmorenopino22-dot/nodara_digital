import { Navigate, Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { LanguageProvider, getStoredLang } from './context/LanguageContext.jsx'
import { DEFAULT_LANG, isLang } from './utils/routes.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import Home from './pages/Home.jsx'
import Legal from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

/** "/" → idioma guardado en la última visita o, si no hay, español. */
function RootRedirect() {
  const stored = getStoredLang()
  const { hash } = useLocation()
  return <Navigate to={`/${isLang(stored) ? stored : DEFAULT_LANG}/${hash}`} replace />
}

/** Estructura común a todas las páginas de un idioma. */
function LangLayout() {
  const { lang } = useParams()

  // Una URL con un idioma que no existe (p. ej. /fr/) muestra el 404 en español.
  const activeLang = isLang(lang) ? lang : DEFAULT_LANG

  return (
    <LanguageProvider lang={activeLang}>
      <ScrollManager />
      <Header />
      <main id="main">{isLang(lang) ? <Outlet /> : <NotFound />}</main>
      <Footer />
    </LanguageProvider>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootRedirect />} />
      <Route path="/:lang" element={<LangLayout />}>
        <Route index element={<Home />} />
        <Route path=":slug" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
