import axios from "axios"

class provinceService{
    GetProvinces(){
        return axios.get("http://185.110.189.68:8080/v1/address/province")
    }
    GetCities(provinceId:number){
        return axios.get(`http://185.110.189.68:8080/v1/address/province/${provinceId}/city`)
    }
}

export default new provinceService();