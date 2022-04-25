import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export interface UserType {
    userid: string;
    password: string;
    email: string;
    name: string;
    phone: string;
    birth: string;
    address: string;
}
// async는 넣어야함(서버도 마찬가지)
export const joinApi = async (payload : {
    userid: string,
    password: string,
    email: string,
    name: string,
    phone: string,
    birth: string,
    address: string
}) => {
    try {
        alert('진행 4 : API 진입 ## (5번은 server에 있음)')
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/user/join`,
            payload,
            {headers}
        )
        alert('진행 6 : 응답성공 ' + JSON.stringify(response.data))
        return response.data
    } catch (err) {
        return err;
    }
}

export const loginApi = async (payload : {
    userid: string,
    password: string
}) => {
    try {
        alert('진행 4 : 로그인 API 진입 ## (5번은 server에 있음)')
        const response: AxiosResponse<unknown, UserType[]> = await axios.post(
            `${SERVER}/user/login`,
            payload,
            {headers}
        )
        const loginUser = JSON.stringify(response.data)
        alert('진행 6 : 로그인 응답성공 ' + JSON.stringify(loginUser))
        localStorage.setItem("loginUser", loginUser)
        return response.data
    } catch (err) {
        return err;
    }
}

export const logoutApi = async () => {
    try {
        const response: AxiosResponse<unknown, UserType[]> = await axios.get(
            `${SERVER}/user/logout`,
            {headers}
        )
       
    } catch (err) {
        return err;
    }
}

export const delUserApi = async () => {
    try {
        const response: AxiosResponse<unknown, UserType[]> = await axios.delete(
            `${SERVER}/user/delUser`,
            {headers}
        )
       
    } catch (err) {
        return err;
    }
}

