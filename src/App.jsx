import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'
import UserRoute from './routes/User'

function App() {

  return (
    <>
      <div className="bg-gray-900 min-h-screen">


        <BrowserRouter>

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/*" element={<UserRoute/>} />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
