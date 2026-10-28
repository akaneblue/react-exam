import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layouts/Header'
import ProductList from './pages/ProductList'
import Notice from './pages/Notice'
import LikeButton from './components/LikeButton'
import LiveInput from './components/LiveInput'
import Page from './components/Page'

function App() {

  return (
  <>
    <div>
      {/* <LikeButton />
      <LiveInput />
      <Page /> */}
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<ProductList />} />
            <Route path='/notice' element={<Notice />} />
          </Routes>
        </main>
    </BrowserRouter>
    </div>
  </>
    
  )
}

export default App
