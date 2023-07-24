import { Items } from "./Items";

export interface SearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: Items[];
}
