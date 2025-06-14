import React, { useState } from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import { AddProductAPI } from '../services/adminApi'
import '../style/AdminLogin.css'

function AdminaddProduct() {

    var [productImage, setProductImage] = useState()
    var [imagePreview, setImagePreview] = useState('')
    var [product, setProduct] = useState({
        productName: '',
        productPrice: '',
        productCompany: '',
        productDescription: ''
    })

    function handleImagePrev(e) {
        setProductImage(e.target.files[0])
        var file = e.target.files[0]

        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    function addData(e) {
        var { name, value } = e.target
        setProduct((preview) => ({
            ...preview,
            [name]: value
        }))
    }

    async function addProduct() {
        const formdata = new FormData()

        formdata.append('productImage', productImage)
        formdata.append('productName', product.productName)
        formdata.append('productPrice', product.productPrice)
        formdata.append('productDescription', product.productDescription)
        formdata.append('productCompany', product.productCompany)

        var response = await AddProductAPI(formdata)
        console.log(response.data);
        alert(response.message)
        setProduct('')
        setImagePreview('')
        setProduct({
            productCompany:'',
            productDescription: '',
            productName: '',
            productPrice: ''
        })
    }

    return (
        <div className='login-main'>
            <h1>Admin Add Product</h1>
            <section className='main-login-form'>
                {
                    imagePreview ? (
                        <img src={imagePreview} alt="preview" style={{
                            height: '300px',
                            width: '300px'
                        }} />
                    ) : (
                        <div className='image-preview-section' style={{
                            height: '300px',
                            width: '300px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '1px solid #000000',
                            borderRadius: '38px'
                        }}>+</div>
                    )
                }
                <input type="file" onChange={handleImagePrev} />

                <div>
                    <label htmlFor="productName">PRODUCT NAME</label>
                    <input
                        className='login-input'
                        type="text"
                        placeholder='Enter product name'
                        name='productName'
                        onChange={addData}
                        value={product.productName} />
                </div>

                <div>
                    <label htmlFor="productPrice">PRODUCT PRICE</label>
                    <input
                        className='login-input'
                        type="number"
                        placeholder='Enter product price'
                        name='productPrice'
                        onChange={addData}
                        value={product.productPrice} />
                </div>

                <div>
                    <label htmlFor="productCompany">PRODUCT COMPANY</label>
                    <input
                        className='login-input'
                        type="text"
                        placeholder='Enter brand name'
                        name='productCompany'
                        onChange={addData}
                        value={product.productCompany} />
                </div>

                <div>
                    <label htmlFor="productDescription">PRODUCT DESCRIPTION</label>
                    <input
                        className='login-input'
                        type="text"
                        placeholder='Enter product description'
                        name='productDescription'
                        onChange={addData}
                        value={product.productDescription} />
                </div>

                <button onClick={addProduct} className='login-btn'>Submit</button>
            </section>
        </div>
    )
}

export default AdminaddProduct