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
import { Pagination } from "../../../framework/components/pagination/pagination";
import { getTopRatedRepositoriesActions } from "./actions";

const { getFilterLanguages, getRepositoriesByLanguage } =
  getTopRatedRepositoriesActions();

export const TopRatedRepositories = () => {
  const [repositories, setRepositories] = useState<SearchResponse>();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedOrder, setSelectedOrder] = useState(Order.DESCENDING);
  const [page, setPage] = useState("1");
  const [selectedOption, setSelectedOption] = useState(Options.ALL);
  const [filterLanguages, setFilterLanguages] = useState<string[]>([]);

  useEffect(() => {
    getRepositories({
      searchParams: {
        order: selectedOrder,
        page: page,
      },
      setter: setRepositories,
    });
  }, [selectedOrder, page]);

  useEffect(() => {
    const filterLanguages = getFilterLanguages(repositories?.items as Items[]);
    setFilterLanguages(filterLanguages);
    setSelectedLanguages(filterLanguages);
  }, [repositories]);

  const filteredRepositories = useMemo(() => {
    if (repositories)
      return getRepositoriesByLanguage(selectedLanguages, repositories.items);
  }, [selectedLanguages]);

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

  return (
    <>
      <ApplicationLoader show={isEmpty(repositories)} />
      <div className="flex flex-col gap-6 w-full h-full pb-28 pt-20 px-44 xl:px-48 items-center justify-center">
        <Pagination numberOfResults={repositories?.total_count as number} />
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
        <Repositories repositories={filteredRepositories} />
      </div>
    </>
  );
};
