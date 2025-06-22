import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getCartProduct, removeCartApi } from '../services/userApi'
import { useState } from 'react'

function UserCart() {

    var [cart, setCart] = useState([])

    var LoginInfo = useSelector((state) => state.UserLogin?.UserLoginStore)
    var Id = LoginInfo?.id

    useEffect(() => {
        async function getProductCart() {
            var response = await getCartProduct(Id)
            // If your API returns { data: [...] }
            if (response && response.data) {
                setCart(response.data)
            } else {
                setCart([])
            }
        }
        getProductCart()
    }, [])

    async function handleRemove(cartId) {
        await removeCartApi(cartId);
        setCart(cart.filter(item => item._id !== cartId));
    }

    return (
        <div>
            <section className='section-home'>
                {cart.map((item) => (
                    <div className='main-area-home' key={item._id}>
                        <img src={`/images/${item.productImage}`} alt={item.productImage} height="300px" width="300px" />
                        <div className='home-text'>{item.productName}</div>
                        <div className='home-text'>{item.productPrice}</div>
                        <button onClick={() => handleRemove(item._id)} className='button-cart'>Remove</button>
                        <button className='button-cart'>Buy Now</button>
                    </div>
                ))}
            </section>
        </div>
    )
}

export default UserCart