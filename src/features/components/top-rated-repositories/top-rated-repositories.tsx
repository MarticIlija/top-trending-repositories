import { useState, useEffect, useCallback } from "react";
import { Items, SearchResponse } from "../../../api";
import { getRepositories } from "../../server/api-handlers";
import { Repositories } from "../repositories/repositories";
import { isEmpty } from "lodash";
import { ApplicationLoader } from "../../../framework/components/application-loader/application-loader";
import { Filter } from "../../../framework/components/filter/filter";
import { getRepositoriesActions } from "../repositories/actions";

const { getFilterLanguages } = getRepositoriesActions();

export const TopRatedRepositories = () => {
  const [repositories, setRepositories] = useState<SearchResponse>();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

  useEffect(() => {
    getRepositories({
      searchParams: {
        language: "python",
        order: "asc",
      },
      setter: setRepositories,
    });
  }, []);

  const filterLanguages = getFilterLanguages(repositories?.items as Items[]);

  const languageClickHandler = useCallback(
    (language: string) => {
      const _selectedLanguages = [...selectedLanguages];
      const isCompanyAlreadySelected = _selectedLanguages.includes(language);
      if (isCompanyAlreadySelected) {
        _selectedLanguages.splice(_selectedLanguages.indexOf(language), 1);
      } else if (!isCompanyAlreadySelected) {
        _selectedLanguages.push(language);
      }
      setSelectedLanguages(_selectedLanguages);
    },
    [selectedLanguages]
  );

  return (
    <>
      <ApplicationLoader show={isEmpty(repositories)} />
      <div className="flex flex-col gap-6 w-full h-full pb-28 pt-20 px-44 xl:px-48">
        <Filter
          elements={filterLanguages as string[]}
          selectedElements={selectedLanguages}
          clickHandler={languageClickHandler}
        />
        <Repositories repositories={repositories} />
      </div>
    </>
  );
};
