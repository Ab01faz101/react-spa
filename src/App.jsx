import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'

function App() {

  return (
    <>
      <div className="bg-gray-900 min-h-screen">


        <BrowserRouter>

          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<Home />} />

          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
