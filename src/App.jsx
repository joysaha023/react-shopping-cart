import { useEffect, useState } from 'react'
import Cards from './components/cards/Cards'
import Cart from './components/cart/Cart'
import './App.css'

function App() {
 const [cartsData, setCartsData] = useState([])

 useEffect(() => {
  fetch('fakeapi.json')
  .then(res => res.json())
  .then(data => setCartsData(data))
 },[])

  return (
    <>
      <div className='flex justify-center gap-3'>
        <div className='basis-[75%]'>
             <Cards cartsData={cartsData}></Cards>
        </div>
        <div className='basis-[25%]'>
              <Cart></Cart>
        </div>
      </div>
    </>
  )
}

export default App
