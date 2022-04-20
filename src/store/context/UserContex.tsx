import React, {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { useWeb3React } from "@web3-react/core";

type IUserContext = {
  isLoading: boolean;
};

export const UserContext = createContext<IUserContext>({ isLoading: false });

const UserContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { account, library } = useWeb3React();

  const handleGetUserData = useCallback(async () => {
    if (account) {
      try {
        setIsLoading(true);

        setIsLoading(false);
      } catch (error: any) {
        console.log(error);
        setIsLoading(false);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, library]);

  useEffect(() => {
    handleGetUserData();
  }, [handleGetUserData]);

  return (
    <UserContext.Provider value={{ isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
