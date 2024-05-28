import axiosInstance  from './axiosInstance';


class UserRequests  {

    registerUser(data){

        return axiosInstance.post('/um/users', data);
    }

    getUserById(userId) {
        return axiosInstance.get("um/users/" + userId);
    }
}

export default new UserRequests();