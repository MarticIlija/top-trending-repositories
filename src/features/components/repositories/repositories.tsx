import { CardList } from "../../../framework/components/card-list/card-list";
import { RepositoriesProps } from "./types";

export const Repositories = ({ repositories }: RepositoriesProps) => {
  return <CardList elements={repositories} />;
};
