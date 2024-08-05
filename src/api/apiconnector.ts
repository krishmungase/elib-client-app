import axios from "axios";

export const axiosInstace = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const apiconnector = () => {
  return {
    fetchbooklist : async ({ method, url, bodyData, headers, params }: { method: string, url: string, bodyData?: any, headers?: any, params?: any }) => await axiosInstace({
      method: method,
      url: url,
      data: bodyData ? bodyData : null,
      params: params ? params : null,
    })
  }
}