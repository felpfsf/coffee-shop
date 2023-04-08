import { useLocation } from "react-router-dom";
import { SuccessContainer } from "./style";

export const Success = () => {
  const location = useLocation()
  console.log(location.state)
  return (
    <SuccessContainer>
      <h1>Success</h1>
    </SuccessContainer>
  );
};
