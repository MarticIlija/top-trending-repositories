import { SearchParameters, SearchResponse } from "..";

export interface QueryParameters {
  searchParams: SearchParameters;
  setter: React.Dispatch<React.SetStateAction<SearchResponse | undefined>>;
}
