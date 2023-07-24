import { ApplicationLoader } from "../application-loader/application-loader";
import { Card } from "../card/card";
import { DescriptionItem } from "../description-item/description-item";
import { CardListProps } from "./types";
import { isEmpty } from "lodash";

export const CardList = ({ elements }: CardListProps) => {
  return (
    <>
      <ApplicationLoader show={isEmpty(elements)} />
      <div className="flex flex-col gap-8">
        {elements?.items.map((element) => {
          return (
            <Card key={element.id}>
              <div className="flex flex-row gap-4 md:gap-8 lg:gap-6 self-start items-center">
                <div className="flex bg-white w-18 h-16 justify-center rounded-full">
                  <img className={"logo class"} src={"logo"} />
                </div>
                <div className="flex flex-row gap-2 md:mr-52 lg:flex-row lg:flex-col lg:gap-4 lg:mr-0">
                  <DescriptionItem title="Name:" content={element?.name} />
                  {element?.description && (
                    <DescriptionItem
                      title="Description:"
                      content={element?.description}
                    />
                  )}
                  <DescriptionItem title="URL:" content={element?.html_url} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </>
  );
};
