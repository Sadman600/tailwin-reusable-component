import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen w-full max-w-[1250px] m-auto ">{children}</div>
  );
};

export default Container;
