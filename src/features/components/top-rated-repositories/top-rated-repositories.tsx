import { useState, useEffect } from "react";
import { getRepositoriesActions } from "../repositories/actions";
import { Items, SearchResponse } from "../../../api";
import { getRepositories } from "../../server/api-handlers";
import { Repositories } from "../repositories/repositories";

export const TopRatedRepositories = () => {
  const [repositories, setRepositories] = useState<SearchResponse>();

  useEffect(() => {
    getRepositories({
      searchParams: {
        language: "python",
        order: "asc",
      },
      setter: setRepositories,
    });
  }, []);

  return (
    <div className="w-full h-full p-28">
      <Repositories repositories={repositories} />
    </div>
  );
};
