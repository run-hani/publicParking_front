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
    const response: AxiosResponse<unknown, PostType[]> = await axios.post(
      `${SERVER}/board/post/add`,
      payload,
      {headers}
    )
    return response.data
  } catch (err) {
    return err;
  }
}

export const postUpdateApi = async (payload : {
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
    const response: AxiosResponse<unknown, PostType[]> =
      await axios.post(`${SERVER}/board/post/update`, payload, {headers});
    return response.data
  } catch (err) {
    return err;
  }
}

export const postDelApi = async () => {
  try {
    const response: AxiosResponse<unknown, PostType[]> =
      await axios.delete(`${SERVER}/board/post/:id`, {headers})

  } catch (err) {
    return err;
  }
}

