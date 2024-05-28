import axiosInstance  from './axiosInstance';


class UserRequests  {

    registerUser(data){

        return axiosInstance.post('/um/users', data);
    }
}

export default new UserRequests();