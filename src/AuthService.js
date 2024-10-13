import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth"

export const signupAPICall = (signupObj) => axios.post(AUTH_REST_API_BASE_URL + '/signup', signupObj);
export const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { usernameOrEmail, password});