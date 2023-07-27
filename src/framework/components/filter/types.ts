export interface FilterProps {
  children: JSX.Element | JSX.Element[];
  refreshList: React.Dispatch<React.SetStateAction<boolean>>;
  fetchTrigger: boolean;
}
