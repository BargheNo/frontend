import axios from "axios"

class provinceService{
    GetProvinces(){
        return axios.get("https://260d-141-11-250-179.ngrok-free.app/v1/address/province", {
            headers: {
                "ngrok-skip-browser-warning":"69420"
            }})
    }
    GetCities(provinceId:number){
        return axios.get(`https://260d-141-11-250-179.ngrok-free.app/v1/address/province/${provinceId}/city`, {
            headers: {
                "ngrok-skip-browser-warning":"69420"
            }})
    }
}

export default new provinceService();