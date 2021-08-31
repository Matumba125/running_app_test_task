import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://jogtracker.herokuapp.com/api/v1/",
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer eb8cdf9e61521369da24ab55f0095f5da870881990d9b75daefef50333178daf'
    }
})

export const UserAPI ={
    getUserData:()=>{
        return instance.get(`auth/user`)
    }
}