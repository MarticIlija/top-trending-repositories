import { useState, useEffect } from "react";
import { SearchResponse } from "../../../api";
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
    <div className="w-full h-full py-28 px-44 xl:px-48">
      <Repositories repositories={repositories} />
    </div>
  );
};
