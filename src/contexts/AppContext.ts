import {createContext} from 'react';

export interface AppContextState {
  isAuthed: boolean
  isLoading: boolean
  setIsAuthed: (isAuthed: boolean) => void
  setIsLoading: (isLoading: boolean) => void
  theme: string
}

export const defaultAppContext: AppContextState = {
  isAuthed: false,
  isLoading: false,
  setIsLoading: () => null,
  setIsAuthed: () => null,
  theme: 'light',
};

export const AppContext = createContext<AppContextState>(defaultAppContext);
