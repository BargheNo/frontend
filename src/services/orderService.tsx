import OrderHistory from "@/components/OrderHistory/OrderHistory";
import axios from "axios"

interface Orderinfo{
    
    name: string,
    area:number,
    power: number,
    maxCost: number,
    buildingType: string,
    description: string,
    provinceID: number,
    cityID: number,
    streetAddress: string,
    postalCode:string,
    houseNumber: string,
    unit: number
}
interface Orderhistory{
  page:number,
  pageSize:number,
}

class order{
    orderRequest(Orderinfo:Orderinfo,token:string){
        return axios.post("http://185.110.189.68:8080/v1/installation/request",Orderinfo, {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          })
    }

    orderHistory(pageinfo: Orderhistory, token: string) {
      return axios.get("http://185.110.189.68:8080/v1/installation/request", {
          headers: {
              Authorization: `Bearer ${token}`,
          },
          params: pageinfo, 
      });
  }
}

export default new order();