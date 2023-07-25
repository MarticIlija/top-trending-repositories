import { RepositoriesProps } from "./types";
import { getRepositoriesActions } from "../../../features/components/repositories/actions";
import { Card } from "../../../framework/components/card/card";
import { StarEmptyIcon, StarFullIcon } from "../../../framework/icons";
import { DescriptionItem } from "../../../framework/components/description-item/description-item";

const { getLogoForLanguage } = getRepositoriesActions();

export const Repositories = ({ repositories }: RepositoriesProps) => {
  return (
    <>
      <div className="flex flex-col gap-8">
        {repositories?.items.map((element) => {
          const logo = getLogoForLanguage(element?.language as string);
          return (
            <Card key={element.id}>
              <div className="flex flex-row flex-wrap lg:flex-nowrap w-full gap-4 md:gap-8 lg:gap-6 self-start items-center p-4">
                <div className="flex flex-row w-full lg:w-fit justify-between items-center">
                  <div className="flex bg-white min-w-[96px] w-[96px] h-24 justify-center rounded-full">
                    <img
                      src={logo}
                      className="mt-4 min-w-[64px] w-[64px] h-16"
                    />
                  </div>
                  <StarEmptyIcon
                    iconSize={56}
                    className="flex lg:hidden min-h-[56px] min-w-[56px]"
                  />
                </div>
                <div className="flex flex-row w-full items-center justify-between">
                  <div className="flex flex-col lg:flex-row gap-2 lg:flex-row lg:flex-col lg:gap-4">
                    <DescriptionItem title="Name:" content={element?.name} />
                    {element?.description && (
                      <DescriptionItem
                        title="Description:"
                        content={element?.description}
                      />
                    )}
                    <DescriptionItem title="URL:" content={element?.html_url} />
                    <div className="flex flex-row gap-4 items-center">
                      <DescriptionItem
                        title="Stars:"
                        content={element?.score.toString()}
                      />
                      <StarFullIcon
                        iconSize={24}
                        className="min-h-[24px] min-w-[24px]"
                      />
                    </div>
                  </div>
                  <StarEmptyIcon
                    iconSize={56}
                    className="hidden lg:flex min-h-[56px] min-w-[56px]"
                  />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};
