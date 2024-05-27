import axios from 'axios';
import axiosInstance from './axiosInstance';


export const UserRequests =()=> {

    function registerUser(data){

        return axiosInstance.post('/um/users', data);
    }
}


