import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'
import UserRoute from './routes/User'

function App() {

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col items-center">


        <BrowserRouter>

          <Header />

          <section className='mt-30 max-w-7xl w-full '>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/*" element={<UserRoute/>} />
          </Routes>
          </section>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
