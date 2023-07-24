import { Matches } from "./Matches";

export interface TextMatches {
  object_url: string;
  object_type?: string;
  property: string;
  fragment: string;
  matches: Matches;
}
