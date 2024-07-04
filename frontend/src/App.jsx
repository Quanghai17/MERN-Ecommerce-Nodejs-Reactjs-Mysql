import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className="app">
        <Header />
        <main className='min-h-[calc(50vh-120px)] pt-16'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
