import { useState, useEffect, useCallback } from "react";
import { Items, SearchResponse } from "../../../api";
import { getRepositories } from "../../server/api-handlers";
import { Repositories } from "../repositories/repositories";
import { isEmpty } from "lodash";
import { ApplicationLoader } from "../../../framework/components/application-loader/application-loader";
import { Filter } from "../../../framework/components/filter/filter";
import { getRepositoriesActions } from "../repositories/actions";
import { FilterChips } from "../../../framework/components/filter-chips/filter-chips";
import { Divider } from "../../../framework/components/divider/divider";
import { filterOrder } from "../../../common/constants/filter-order";
import { Order } from "../../../common/enums/Order";
import { filterOptions } from "../../../common/constants/filter-options";
import { Options } from "../../../common/enums/Options";

const { getFilterLanguages } = getRepositoriesActions();

export const TopRatedRepositories = () => {
  const [repositories, setRepositories] = useState<SearchResponse>();
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedOrder, setSelectedOrder] = useState(Order.ASCENDING);
  const [selectedOption, setSelectedOption] = useState(Options.ALL);

  useEffect(() => {
    getRepositories({
      searchParams: {
        language: "python",
        order: selectedOrder,
      },
      setter: setRepositories,
    });
  }, [selectedOrder]);

  const filterLanguages = getFilterLanguages(repositories?.items as Items[]);

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
      <div className="flex flex-col gap-6 w-full h-full pb-28 pt-20 px-44 xl:px-48">
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
        <Repositories repositories={repositories} />
      </div>
    </>
  );
};
