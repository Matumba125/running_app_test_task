import axios from "axios";

export const setTokenToLS = (token) => (
    localStorage.setItem("token", JSON.stringify(token))
);
export const getTokenFromLS = () => (
    JSON.parse(localStorage.getItem("token"))
);

const instance = axios.create({
    baseURL: "https://jogtracker.herokuapp.com/api/v1/",
    withCredentials: true,
    headers: {
        'Authorization': `Bearer ` + getTokenFromLS(),
        'Content-Type': 'application/x-www-form-urlencoded'

    }
})


export const JogAPI = {
    getJogs: () => {
        return instance.get('data/sync').then((response) => response.data.response.jogs)
    },
    addJog: (date, time, distance) => {
        return instance.post('data/jog', `date=${date}&time=${time}&distance=${distance}`)
    },
    editJog: (date, time, distance, jogId, user_id) => {
        return instance.put('data/jog', `date=${date}&time=${time}&distance=${distance}&jog_id=${jogId}&user_id=${user_id}`)
    }
}

export const AuthAPI = {
    getToken: (hello) => {
        return axios.post(`https://jogtracker.herokuapp.com/api/v1/auth/uuidLogin`, `uuid=${hello}`);
    }
}