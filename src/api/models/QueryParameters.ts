import { SearchParameters } from "..";

export interface QueryParameters {
  searchParams: SearchParameters;
  setter: React.Dispatch<React.SetStateAction<undefined>>;
}
