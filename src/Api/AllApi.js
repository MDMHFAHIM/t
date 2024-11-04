import axios from 'axios';
import { useNavigate } from "react-router-dom";

const login = async (data) => {
    const LOGIN_ENDPOINT = `${process.env.REACT_APP_API_URL}/login`;
    try {
        let response = await axios.post(LOGIN_ENDPOINT, data);
        if (response.data.jwt) {
            localStorage.setItem("front_access_token", response.data.jwt);
            localStorage.setItem("front_userdata", JSON.stringify(response.data.datas));
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
        console.log(e);
    }
}
const register = async (data) => {
    const SIGNUP_ENDPOINT = `${process.env.REACT_APP_API_URL}/register`;
    try {
        let response = await axios({
            method: 'post',
            responsiveTYpe: 'json',
            url: SIGNUP_ENDPOINT,
            data: data
        });
        console.log(response);
    }
    catch (e) {
        console.log(e);
    }
}
const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("userdata");
}
export { login, register, logout }