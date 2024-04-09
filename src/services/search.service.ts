// packages
import axios, { AxiosResponse } from "axios";

// config
import {
  VITE_API_ACCESS_TOKEN,
  VITE_API_BASE_URL,
  VITE_API_KEY,
} from "@config/index";

//models
import { SearchWithPagination } from "@models/index";
import { MovieModel } from "@models/movie.model";

export const fetchSearchMovies = async ({
  search,
  index,
}: SearchWithPagination): Promise<{
  statusCode: number;
  data: MovieModel | object;
}> => {
  try {
    const response: AxiosResponse = await axios({
      method: "GET",
      url: `${VITE_API_BASE_URL}/search/movie?query=${search}&page=${index}&api_key=${VITE_API_KEY}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
      },
      timeout: 5000,
    });

    return { statusCode: response.status, data: response.data };
  } catch (err) {
    return { statusCode: 500, data: {} };
  }
};
