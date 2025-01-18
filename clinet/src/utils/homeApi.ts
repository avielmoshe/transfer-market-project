import { Player, Players, Teams } from "@/types/types";
import axios from "axios";
const RAPIDAPI_HOST = "transfermarket.p.rapidapi.com";
const RAPIDAPI_KEY = "33cb9405dbmsh9f8f012503ce134p146775jsn436ccb2ae8b5";
const base_url = `http://localhost:3000`;

export const getMostValuableTeam = async (
  domain: string = "com"
): Promise<Players> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/statistic/list-most-valuable-team`,
    params: {
      domain : "com",
    },
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": RAPIDAPI_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data; // Return the data to the caller
  } catch (error: any) {
    console.error("Error fetching data:", error.message || error);
    throw error; // Rethrow the error for the caller to handle
  }
};
export const getMostValuableClub = async (
  domain: string = "com"
): Promise<Teams> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/statistic/list-most-valuable-clubs`,
    params: {
      domain : "com",
    },
    headers: {
      "x-rapidapi-key": RAPIDAPI_KEY,
      "x-rapidapi-host": RAPIDAPI_HOST,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data; // Return the data to the caller
  } catch (error: any) {
    console.error("Error fetching data:", error.message || error);
    throw error; // Rethrow the error for the caller to handle
  }
};
