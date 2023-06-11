import { useQuery } from "@tanstack/react-query";
import {API} from '../utils'

export const starWarsQueryKey = ['starWars']

export const useStarWars = () => {
  const starWarsQueryData = useQuery({
        queryKey: starWarsQueryKey,
        queryFn: fetchData,
      });
    return starWarsQueryData;
}
const fetchData = async () => {
  try {
    const response = await API.get('people');
    return response.data.results;

  } catch (e) {
    console.log('Error occurred', e.message);
  }
};