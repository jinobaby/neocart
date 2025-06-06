import React, { useState } from 'react'
import AdminNavbar from '../Components/AdminNavbar'
import '../style/AdminLogin.css'

function AdminaddProduct() {

    var [productImage, setProductImage] = useState('')
    var [imagePreview, setImagePreview] = useState('')
    var [product, setProduct] = useState({
        productname:'',
        productprice:'',
        productcompany:'',
        productdescription:''
    })
    console.log(product);
    

    function handleImagePrev(e) {
        var file = e.target.files[0]

        if(file) {
            const reader = new FileReader()
            reader.onload = () => {
                setImagePreview(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    function adddata(e) {
        var {name, value} = e.target
        setProduct((preview) => ({
            ...preview,
            [name]:value
        }))
    }

  return (
    <div className='login-main'>
        <AdminNavbar/>
        <h1>Admin Add Product</h1>
        <section className='main-login-form'>
            {
                imagePreview ? (
                    <img src={imagePreview} alt="preview" style={{
                        height:'300px',
                        width: '300px'
                    }} />
                ) : (
                    <div className='image-preview-section' style={{
                        height:'300px',
                        width: '300px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center',
                        border: '1px solid #000000',
                        borderRadius: '38px'
                    }}>+</div>
                )
            }
            <input type="file" onChange={handleImagePrev}/>

            <div>
                <label htmlFor="productname">PRODUCT NAME</label>
                <input 
                className='login-input' 
                type="text" 
                placeholder='Enter product name'
                name='productname' 
                onChange={adddata} />
            </div>

            <div>
                <label htmlFor="productprice">PRODUCT PRICE</label>
                <input 
                className='login-input' 
                type="number" 
                placeholder='Enter product price'
                name='productprice'
                onChange={adddata} />
            </div>

            <div>
                <label htmlFor="productcompany">PRODUCT COMPANY</label>
                <input 
                className='login-input' 
                type="text" 
                placeholder='Enter brand name'
                name='productcompany'
                onChange={adddata} />
            </div>

            <div>
                <label htmlFor="productdescription">PRODUCT DESCRIPTION</label>
                <input 
                className='login-input' 
                type="text" 
                placeholder='Enter product description'
                name = 'productdescription' 
                onChange={adddata} />
            </div>

            <button className='login-btn'>Submit</button>
        </section>
    </div>
  )
}

export default AdminaddProduct