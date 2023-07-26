import { useState, useEffect, useCallback, useMemo } from "react";
import { Items, SearchResponse } from "../../../api";
import { getRepositories } from "../../server/api-handlers";
import { Repositories } from "../repositories/repositories";
import { isEmpty } from "lodash";
import { ApplicationLoader } from "../../../framework/components/application-loader/application-loader";
import { Filter } from "../../../framework/components/filter/filter";
import { FilterChips } from "../../../framework/components/filter-chips/filter-chips";
import { Divider } from "../../../framework/components/divider/divider";
import { filterOrder } from "../../../common/constants/filter-order";
import { Order } from "../../../common/enums/Order";
import { filterOptions } from "../../../common/constants/filter-options";
import { Options } from "../../../common/enums/Options";
import { PaginationControlled } from "../../../framework/components/pagination/pagination";
import { getTopRatedRepositoriesActions } from "./actions";
import { setStarredRepositories } from "../../lib/set-starred-repositories";
import { deleteStarredRepositories } from "../../lib/delete-starred-repositories";
import { getStarredRepositories } from "../../lib/get-starred-repositories";

const { getFilterLanguages, getRepositoriesByLanguage } =
  getTopRatedRepositoriesActions();

export const TopRatedRepositories = () => {
  const [repositories, setRepositories] = useState<SearchResponse>();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedOrder, setSelectedOrder] = useState(Order.DESCENDING);
  const [page, setPage] = useState(1);
  const [selectedOption, setSelectedOption] = useState(Options.ALL);
  const [filterLanguages, setFilterLanguages] = useState<string[]>([]);
  const [selectedRepositories, setSelectedRepositories] = useState<Items[]>([]);
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const starredRepositories = getStarredRepositories();

  useEffect(() => {
    getRepositories({
      searchParams: {
        order: selectedOrder,
        page: page.toString(),
      },
      setter: setRepositories,
    });
  }, [page]);

  useEffect(() => {
    const filterLanguages = getFilterLanguages(repositories?.items as Items[]);
    setFilterLanguages(filterLanguages);
    setSelectedLanguages(filterLanguages);
    setSelectedRepositories(repositories?.items as Items[]);
  }, [repositories]);

  const filteredRepositories = useMemo(() => {
    if (selectedRepositories)
      return getRepositoriesByLanguage(selectedLanguages, selectedRepositories);
  }, [selectedLanguages, selectedRepositories, fetchTrigger]);

  useEffect(() => {
    if (selectedOption === "All")
      setSelectedRepositories(repositories?.items as Items[]);
    else if (selectedOption === "Starred only")
      setSelectedRepositories(starredRepositories);
  }, [selectedOption, fetchTrigger]);

  const languageClickHandler = useCallback(
    (language: string) => {
      const _selectedLanguages = [...selectedLanguages];
      const isLanguageAlreadySelected = _selectedLanguages.includes(language);
      if (isLanguageAlreadySelected) {
        _selectedLanguages.splice(_selectedLanguages.indexOf(language), 1);
      } else if (!isLanguageAlreadySelected) {
        _selectedLanguages.push(language);
      }
      setSelectedLanguages(_selectedLanguages);
    },
    [selectedLanguages]
  );

  const orderClickHandler = (order: Order) => {
    setSelectedOrder(order);
  };

  const repositoriesFilterClickHandler = (option: Options) => {
    setSelectedOption(option);
  };

  const addStarredHandler = (repository: Items) => {
    setStarredRepositories(repository);
    setFetchTrigger(!fetchTrigger);
  };

  const removeStarredHandler = (repository: Items) => {
    deleteStarredRepositories(repository);
    setFetchTrigger(!fetchTrigger);
  };

  return (
    <>
      <ApplicationLoader show={isEmpty(repositories)} />
      <div className="flex flex-col gap-6 w-full h-full pb-28 pt-6 px-44 xl:px-48 items-center justify-center">
        <PaginationControlled
          totalCount={repositories?.total_count as number}
          page={page}
          setPage={setPage}
        />
        <Filter>
          <FilterChips
            title="Languages:"
            elements={filterLanguages}
            selectedElements={selectedLanguages}
            clickHandler={languageClickHandler}
          />
          <Divider />
          <FilterChips
            title="Order:"
            elements={filterOrder}
            selectedElements={[selectedOrder]}
            clickHandler={orderClickHandler}
          />
          <Divider />
          <FilterChips
            title="Repositories:"
            elements={filterOptions}
            selectedElements={[selectedOption]}
            clickHandler={repositoriesFilterClickHandler}
          />
        </Filter>
        <Repositories
          repositories={filteredRepositories}
          addStarredHandler={addStarredHandler}
          removeStarredHandler={removeStarredHandler}
        />
      </div>
    </>
  );
};
