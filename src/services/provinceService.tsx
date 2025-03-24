import axios from "axios"

class provinceService{
    GetProvinces(){
        return axios.get("https://260d-141-11-250-179.ngrok-free.app/v1/address/province")
    }
    GetCities(provinceId:number){
        return axios.get(`https://260d-141-11-250-179.ngrok-free.app/v1/address/province/${provinceId}/city`)
    }
}

export default new provinceService();