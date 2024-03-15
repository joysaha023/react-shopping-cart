import { useEffect, useState } from 'react'
import Cards from './components/cards/Cards'
import Cart from './components/cart/Cart'
import './App.css'

function App() {
 const [cartsData, setCartsData] = useState([])
 const [cartItems, setCartItems] = useState([])

 useEffect(() => {
  fetch('fakeapi.json')
  .then(res => res.json())
  .then(data => setCartsData(data))
 },[])

 const handleClick = (singleCart) => {
  const isExist = cartItems.find((pd) => pd.id == singleCart.id);
  if(!isExist) {
    setCartItems([...cartItems, singleCart])
  }
  else{
    alert("already in cart")
  }
 }

  return (
    <>
      <div className='flex justify-center gap-3'>
        <div className='basis-[75%]'>
             <Cards cartsData={cartsData} handleClick={handleClick}></Cards>
        </div>
        <div className='basis-[25%]'>
              <Cart></Cart>
        </div>
      </div>
    </>
  )
}

export default App
