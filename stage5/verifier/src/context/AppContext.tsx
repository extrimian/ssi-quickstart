import { createContext, Reducer, useReducer, ReactNode } from 'react';
import { createDid } from '../services/did';
import { initializeDwnClient } from '../dwn-client';
import { DID_STORAGE_KEY, DWN_URL } from '../config';
import { DWNClient } from '@extrimian/dwn-client';

enum ActionType {
  SET_DID = 'SET_DID',
  INIT_DWN_CLIENT = 'INIT_DWN_CLIENT',
}

const initialState: AppState = {
  did: '',
  dwnClient: undefined as any,
};

type AppState = {
  did: string;
  dwnClient: DWNClient;
};
type Action = { type: ActionType; payload?: any };

const reducer: Reducer<AppState, Action> = (
  state: AppState,
  action: Action
): AppState => {
  switch (action.type) {
    case ActionType.SET_DID:
      return {
        ...state,
        did: action?.payload.did,
      };

    case ActionType.INIT_DWN_CLIENT:
      return {
        ...state,
        dwnClient: action?.payload.dwnClient,
      };

    default:
      return state;
  }
};

export const Context = createContext<{
  state: AppState;
  setDid: () => Promise<void>;
  initDwnClient: () => void;
}>({
  state: initialState,
} as any);

export const ContextProvider = ({
  children,
  ...otherProps
}: {
  children: ReactNode[] | ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setDid = async (): Promise<void> => {
    let did = localStorage.getItem(DID_STORAGE_KEY);
    if (!did) {
      did = await createDid();
      localStorage.setItem(DID_STORAGE_KEY, did);
    }
    console.log(did);
    dispatch({
      type: ActionType.SET_DID,
      payload: {
        did,
      },
    });
  };

  const initDwnClient = (): void => {
    const dwnClient = initializeDwnClient(state.did, DWN_URL);

    dispatch({
      type: ActionType.INIT_DWN_CLIENT,
      payload: {
        dwnClient,
      },
    });
  };

  return (
    <Context.Provider value={{ state, setDid, initDwnClient }} {...otherProps}>
      {children}
    </Context.Provider>
  );
};
