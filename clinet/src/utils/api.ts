import axios from "axios";
import Cookies from "js-cookie";

const base_url = `http://localhost:3000`;
const base_url_transferMarket = `https://transfermarkt-api.fly.dev`;

interface userLogin {
  username: string;
  password: string;
}

export type Role = "user" | "owner";

export interface User {
  firstName: string;
  lastName: string;
  username: string;
  phone: string;
  email: string;
  password?: string;
}

const RAPIDAPI_HOST = "transfermarket.p.rapidapi.com";
const RAPIDAPI_KEY = "33cb9405dbmsh9f8f012503ce134p146775jsn436ccb2ae8b5";

interface DataProps {
  data: {
    players: Array<any>;
    clubs: Array<any>;
    coaches: Array<any>;
    agents: Array<any>;
    referees: Array<any>;
  };
}
export const fetchTransferMarketData = async (
  query: string,
  page: string = "1",
  domain: string = "de"
): Promise<DataProps> => {
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
