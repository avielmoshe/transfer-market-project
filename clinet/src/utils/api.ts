import axios from "axios";
import Cookies from "js-cookie";
import {
  ClubData,
  ClubProfile,
  clubsDataFromCom,
  DataStructure,
  DataType,
  HeroData,
  SquadFromClub,
  User,
  userLogin,
} from "../types/types";

const RAPIDAPI_HOST = "transfermarket.p.rapidapi.com";
const RAPIDAPI_KEY = "33cb9405dbmsh9f8f012503ce134p146775jsn436ccb2ae8b5";
const base_url = `http://localhost:3000`;

export const fetchTransferMarketData = async (
  query: string,
  page: string = "1",
  domain: string = "com"
): Promise<DataType> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/search`,
    params: {
      query,
      page,
      domain,
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

export const fetchDataOfOnePlayerForRow = async (
  id: string,
  domain: string = "com"
): Promise<HeroData> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/players/get-profile`,
    params: {
      id,
      domain,
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

export const fetchDataOfOnePlayerAchievements = async (
  id: string,
  domain: string = "com"
): Promise<HeroData> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/players/get-achievements`,
    params: {
      id,
      domain,
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

export const fetchDataOfOneClubRow = async (
  id: string | undefined,
  domain: string = "com"
): Promise<ClubData> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/clubs/get-header-info`,
    params: {
      id,
      domain,
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

export const fetchDataOfClubsFromTable = async (
  id: string | undefined,
  seasonID: string | undefined,
  domain: string = "com"
): Promise<DataStructure> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/competitions/get-table`,
    params: {
      id,
      domain,
      seasonID,
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

export const fetchDataOfOneClubProfile = async (
  id: string | undefined,
  domain: string = "com"
): Promise<ClubProfile> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/clubs/get-profile`,
    params: {
      id,
      domain,
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

export const fetchDataOfSquadFromClub = async (
  id: string,
  domain: string = "com",
  saison_id: string = "2025"
): Promise<SquadFromClub> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/clubs/get-squad`,
    params: {
      domain,
      id,
      saison_id,
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

export const fetchDataOfClubsFromCom = async (
  id: string | undefined,
  domain: string = "com"
): Promise<clubsDataFromCom> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/clubs/list-by-competition`,
    params: {
      id,
      domain,
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

export const fetchLiveTable = async (
  id: string | undefined,
  seasonId: String,
  domain: string = "com"
): Promise<clubsDataFromCom> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/competitions/get-table`,
    params: {
      id,
      seasonId,
      domain,
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

export const fetchDataOfOneComRow = async (
  id: String | undefined,
  domain: string = "com"
): Promise<any> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/competitions/get-header-info`,
    params: {
      id,
      domain,
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

export const fetchDataOfOneCoachRow = async (
  id: string,
  domain: string = "com"
): Promise<any> => {
  const options = {
    method: "GET",
    url: `https://${RAPIDAPI_HOST}/staffs/get-profile`,
    params: {
      id,
      domain,
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

export const signUp = async (user: User) => {
  try {
    const response = await axios.post(`${base_url}/api/user/signup`, user);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export const signIn = async (user: userLogin) => {
  try {
    const response = await axios.post(`${base_url}/api/user/signIn`, user, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export const isUserValid = async () => {
  try {
    const jwt = Cookies.get("jwt");
    const response = await axios.get(`${base_url}/api/user/validateToken`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    return response.data;
  } catch (error: any) {
    return null;
  }
};

export const deleteCookie = async () => {
  try {
    Cookies.remove("jwt");
  } catch (error) {
    console.log(error);
  }
};

export const toggleBusinessInSaved = async (
  businessId: string
): Promise<string> => {
  const jwt = Cookies.get("jwt");
  try {
    const response = await axios.post(
      `${base_url}/api/user/add-business`,
      { businessId }, // This is the request body
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
        withCredentials: true, // Ensure cookies are included for authentication
      }
    );

    return response.data.message; // Return the success message
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};
