import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://sport-highlights-api.p.rapidapi.com/football/countries?name=France' 

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    "x-rapidapi-key": API_KEY,
  },
});


export const fetchLeagueStandings = async (leagueId, season) => {
  try {
    const response = await apiClient.get(`/standings`, {
      params: { league: leagueId, season },
    });
    return response.data.response;
  } catch (error) {
    console.error("Error fetching league standings:", error);
    return null;
  }
};

export const fetchPlayerStats = async (teamId, season) => {
  try {
    const response = await apiClient.get(`/players`, {
      params: { team: teamId, season },
    });
    return response.data.response;
  } catch (error) {
    console.error("Error fetching player stats:", error);
    return null;
  }
};
