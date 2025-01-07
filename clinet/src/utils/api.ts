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

export const getLeagueByName = async (search: string, page: string | "1") => {
  try {
    const response = await axios.get(
      `${base_url_transferMarket}/search/${search}?page_number=${page}`
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
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
