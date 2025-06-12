import { AdminRequest } from '../axios/AxiosCreate';

export const adminApi = async (data) => {
    try {
        var response = await AdminRequest.post('/Admin/Admin-login', data)
        return response;
    } 
    catch (error) {
        console.error("Error in adminApi:", error);
    }
}

// adding product api
export const AddProductAPI = async (data) => {
    try {
        var response = await AdminRequest.post('/Product/addproduct',data)
        return response.data;
        
    } catch (error) {
        console.log("error from product adding api", error);
        
    }
}
