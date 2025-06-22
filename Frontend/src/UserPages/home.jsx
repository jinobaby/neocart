import React, { useEffect, useState } from 'react'
import { addcartApi, allProduct } from '../services/userApi'
import { useSelector } from 'react-redux'

function Home() {
  const [products, setProducts] = useState([])

  // Get login info as an object, not array
  var LoginInfo = useSelector((state) => state.UserLogin?.UserLoginStore)
  var Id = LoginInfo?.id // Use optional chaining to avoid crash

  useEffect(() => {
    async function getData() {
      const response = await allProduct()
      if (response) {
        setProducts(response)
      } else {
        setProducts([])
      }
    }
    getData()
  }, [])

  function addToCart(product) {
    if (!Id) {
      alert("User not logged in!")
      return
    }
    addcartApi({ Id, product })
  }

  return (
    <div>
      <section className='section-home'>
        {products.map((item) => (
          <div className='main-area-home' key={item._id}>
            <img src={`/images/${item.productImage}`} alt={item.productImage} height="300px" width="300px" />
            <div className='home-text'>{item.productName}</div>
            <div className='home-text'>{item.productPrice}</div>
            <button onClick={() => { addToCart(item) }} className='button-cart'>Add to Cart</button>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home