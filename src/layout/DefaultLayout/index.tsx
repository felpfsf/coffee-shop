import { Header } from "@components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./style";

export const DefaulLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};