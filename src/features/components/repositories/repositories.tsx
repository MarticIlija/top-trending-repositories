import { RepositoriesProps } from "./types";
import { getRepositoriesActions } from "../../../features/components/repositories/actions";
import { Card } from "../../../framework/components/card/card";
import { DescriptionItem } from "../../../framework/components/description-item/description-item";
import { isEmpty } from "lodash";
import { StarFullIcon } from "../../../framework/icons/star-full-icon";
import { RepositoryStar } from "../repository-star/repository-star";

const { getLogoForLanguage, checkIfRepositoryIsStarred } =
  getRepositoriesActions();

export const Repositories = ({
  repositories,
  addStarredHandler,
  removeStarredHandler,
}: RepositoriesProps) => {
  return (
    <>
      {isEmpty(repositories) && (
        <div className="flex w-full prose text-lg font-bold justify-center">
          No results found for selected filter parameters
        </div>
      )}
      {!isEmpty(repositories) && (
        <div className="flex flex-col w-full gap-8">
          {repositories?.map((repository) => {
            const logo = getLogoForLanguage(repository?.language as string);
            const isStarred = checkIfRepositoryIsStarred(repository);
            return (
              <Card key={repository.id}>
                <div className="flex flex-row flex-wrap lg:flex-nowrap w-full gap-4 md:gap-8 lg:gap-6 self-start items-center p-4">
                  <div className="flex flex-row w-full lg:w-fit justify-between items-center">
                    <div className="flex bg-white min-w-[96px] w-[96px] h-24 justify-center rounded-full">
                      <img
                        src={logo}
                        className="mt-4 min-w-[64px] w-[64px] h-16"
                      />
                    </div>
                    <RepositoryStar
                      id="1"
                      repository={repository}
                      isStarred={isStarred}
                      addStarredHandler={addStarredHandler}
                      removeStarredHandler={removeStarredHandler}
                      className="flex lg:hidden"
                    />
                  </div>
                  <div className="flex flex-row w-full items-center justify-between gap-4">
                    <div className="flex flex-col lg:flex-row gap-2 lg:flex-row lg:flex-col lg:gap-4">
                      <DescriptionItem
                        title="Name:"
                        content={repository?.name}
                      />
                      {repository?.description && (
                        <DescriptionItem
                          title="Description:"
                          content={repository?.description}
                        />
                      )}
                      <DescriptionItem
                        title="URL:"
                        content={repository?.html_url}
                      />
                      <div className="flex flex-row gap-3 items-center">
                        <DescriptionItem
                          title="Stars:"
                          content={repository?.stargazers_count.toString()}
                        />
                        <StarFullIcon
                          iconSize={24}
                          className="min-h-[24px] min-w-[24px]"
                        />
                      </div>
                    </div>
                    <RepositoryStar
                      id="2"
                      repository={repository}
                      isStarred={isStarred}
                      addStarredHandler={addStarredHandler}
                      removeStarredHandler={removeStarredHandler}
                      className="hidden lg:flex"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};
