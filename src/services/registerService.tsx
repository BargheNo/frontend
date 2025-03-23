import axios from "axios";

interface signupInfo{  
    firstName:string;
    lastName:string;
    phone:string;
    password:string;
    confirmPassword:string;
    isAcceptTerms:boolean;
}

interface phonenumberVerification{
    phone: string;
    otp:string;
}

class registerService {
    createUser(user:signupInfo) {
        return axios.post('http://185.110.189.68:8080/v1/auth/register/basic',user)
    }

    phonenumberVerification(phone:phonenumberVerification){
        return axios.post('http://185.110.189.68:8080/v1/auth/verify/phone',phone)
    }
}

export default new registerService();