import axios from 'axios';
import { useNavigate } from "react-router-dom";

const login = async (data) => {
    const LOGIN_ENDPOINT = `${process.env.REACT_APP_FRONT_URL}/customer/login`;
    try {
        let response = await axios.post(LOGIN_ENDPOINT, data);
        console.log(response)
        if (response.data.data.token) {
            localStorage.setItem("front_access_token",response.data.data.token);
            localStorage.setItem("front_userdata", JSON.stringify(response.data.data.data));
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
    const SIGNUP_ENDPOINT = `${process.env.REACT_APP_FRONT_URL}/register`;
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
    localStorage.removeItem("front_access_token");
    localStorage.removeItem("front_userdata");
}
export { login, register, logout }