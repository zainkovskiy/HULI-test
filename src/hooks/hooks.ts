import { checkToken } from "Api";
import { useMediaQuery } from "react-responsive";

export const useCheckAuth = async () => {
  const localToken = localStorage.getItem("token");
  if (localToken){
    const token = await checkToken(localToken);
    if(token?.auth){
      return token.auth;
    }
  }
  return false;
}

export const useIsTablet = () => {
  return useMediaQuery({ query: '(max-width: 768px)' });
}
export const useIsMobile = () => {
  return useMediaQuery({ query: '(max-width: 768px)' });
}