import axios from 'axios';
import { ImgRespons } from './types';

interface ApiResponse {
  results: ImgRespons[];
  total: number;
}


export const Api = async (search: string, page: number, perPage: number):Promise<ApiResponse> => {
    const response = await axios.get<ApiResponse>(`https://api.unsplash.com/search/photos`, {
        params: {
            query: search,
            client_id: "KUafA-j1bs6_l5WGI_2Pg2GqC_AOllf5Jl20QU1ncJc",
            page: page,
            per_page: perPage
        },
    });

    return response.data;
};