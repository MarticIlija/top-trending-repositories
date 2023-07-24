import { Loader } from "../loader/loader";

export const ApplicationLoader = (props: { show: boolean }) => {
  return props.show ? (
    <div className="w-full h-screen flex justify-center items-center">
      <Loader />
    </div>
  ) : null;
};
