import { basicRequest } from '../axios/AxiosCreate';

export const adminApi = async (data) => {
    try {
        var response = await basicRequest.post('/Admin/Admin-login', data)
        console.log("Admin login successful");
        return response;
    } 
    catch (error) {
        console.error("Error in adminApi:", error);
    }
}