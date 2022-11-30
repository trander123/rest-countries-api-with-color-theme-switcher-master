import { ReactNode } from "react";
import { useCountryContext } from "../context/CountryContext";

interface IContainerProps {
  children: ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
  const {isDark} = useCountryContext()
  return (
    <div className={isDark ? "dark": ""}>
      <div className=" min-w-full min-h-screen pb-10 bg-slate-200 dark:bg-gray-900 dark:text-white font-serif">{children}</div>
    </div>
  );
};
