import axios from "axios";
import { baseURL, postData, usePostData } from "./apiHub";

interface signupInfo {
	firstName: string;
	lastName: string;
	phone: string;
	password: string;
	isAcceptTerms: boolean;
}

interface corpInfo {
	name: string;
	cin: string;
	password: string;
	acceptedTerms: boolean;
}

interface phonenumberVerification {
	phone: string;
	otp: string;
}

class registerService {

    createUser(user:signupInfo) {
        return axios.post('http://185.110.189.68:8080/v1/auth/register/basic',user)
    }

    phonenumberVerification(phone:phonenumberVerification){
        return axios.post('http://185.110.189.68:8080/v1/auth/verify/phone',phone)
    }

	
	async createCorp(corp: corpInfo) {
        return await postData({endPoint: `${baseURL}/v1/auth/corporation/register/`, data: corp});
		// return axios.post(
		// 	`${baseURL}/v1/auth/corporation/register/`,
		// 	corp
		// );
	}

}

export default new registerService();
