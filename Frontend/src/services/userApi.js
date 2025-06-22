import { basicRequest, UserRequest } from "../axios/AxiosCreate";

export const userSignupApi = async ( data ) => {
    try {
        var response = await basicRequest.post('/User/Signup', data)
        console.log(response.data);
        alert(response.data.message)
        
    } catch  (error) {
        console.log('Error from user signup API', error);
        
    }
}

export const userLoginApi = async ( data ) => {
    try {
        var response = await basicRequest.post('User/login', data)
        console.log(response);
        return response;
    } catch (error) {
        console.log('Error from user login API', error);
    }
}

// get all product 
export const allProduct = async () => {
    try {
        var response = await basicRequest.get('/product/All-product')
        return response.data;
    } catch (error) {
        console.log('Error from getting all products API', error);
    }
}

//add to cart
export const addcartApi = async (data) => {
    try {
        var response = await UserRequest.post('/Cart/add-to-cart', data)
        console.log(response);
        
    } catch (error) {
        console.log('Error from add to cart API', error);
    }
}