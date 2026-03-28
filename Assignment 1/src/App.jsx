import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ImageSection from './components/ImageSection'
import ContentSection from './components/ContentSection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="bmw-layout">
        <Sidebar />
        <ImageSection />
        <ContentSection />
      </main>
      <Footer />
    </>
  )
}

export default App
