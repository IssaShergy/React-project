import  {Routes, Route } from 'react-router'
import { HomePage } from './Pages/HomePage'
import './App.css'
import { CheckoutPage } from './Pages/CheckoutPage'
import { OrderPage } from './Pages/OrderPage'
import { TrackingPage } from './Pages/trackingPage'

function App() {
  return (
    <>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/Checkout" element={ <CheckoutPage/> } />
      <Route path="/orders" element={ <OrderPage/> } />
      <Route path="/tracking" element={ <TrackingPage/> } />
    </Routes>
   
    </>
  )
}

export default App
