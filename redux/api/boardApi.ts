import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
  "Content-Type": "application/json",
  Authorization: "JWT fefege..."
}

export interface PostType {
  areaName: string;
  parkingName: string;
  divisionCount: string;
  charge: string;
  adressLotNumber: string;
  adressRoadName: string;
  operDay: string;
}

// async는 넣어야함(서버도 마찬가지)
export const postAddApi = async (payload : {
  areaName: string;
  parkingName: string;
  divisionCount: string;
  charge: string;
  adressLotNumber: string;
  adressRoadName: string;
  operDay: string;
}) => {
  try {
    alert('진행 4 : API 진입 ## (5번은 server에 있음)')
    const response: AxiosResponse<unknown, PostType[]> = await axios.post(
      `${SERVER}/post/add`,
      payload,
      {headers}
    )
    alert('진행 6 : 응답성공 ' + JSON.stringify(response.data))
    return response.data
  } catch (err) {
    return err;
  }
}

export const postEditApi = async (payload : {
  _id: string;
  areaName: string;
  parkingName: string;
  divisionCount: string;
  charge: string;
  adressLotNumber: string;
  adressRoadName: string;
  operDay: string;
}) => {
  try {
    alert('진행 4 : API 진입 ## (5번은 server에 있음)')
    const response: AxiosResponse<unknown, PostType[]> =
      await axios.post(`${SERVER}/post/update`, payload, {headers});
    alert('진행 6 : 응답성공 ' + JSON.stringify(response.data))
    return response.data
  } catch (err) {
    return err;
  }
}

export const postDelApi = async () => {
  try {
    const response: AxiosResponse<unknown, PostType[]> =
      await axios.delete(`${SERVER}/post/:id`, {headers})

  } catch (err) {
    return err;
  }
}

