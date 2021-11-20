import {createContext} from 'react';

export interface AppContextState {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  theme: string
}

export const defaultAppContext: AppContextState = {
  isLoading: false,
  setIsLoading: () => null,
  theme: 'light',
};

export const AppContext = createContext<AppContextState>(defaultAppContext);
