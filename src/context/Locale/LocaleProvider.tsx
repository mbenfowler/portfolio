import { createContext, useContext, useReducer } from "react"
import { LOCALE_STRINGS, REGIONS } from "./constants"

const initialState = {
    strings: LOCALE_STRINGS[REGIONS.EN]
}

type InitialContext = {
    state: typeof initialState;
    dispatch: React.Dispatch<any>;
}

const LocaleContext = createContext<InitialContext>({state: initialState, dispatch: () => {}});

const reducer = (state: typeof initialState, action: any) => {
    switch (action.type) {
        case "CHANGE_LOCALE": {
            return {
                ...state,
                strings: LOCALE_STRINGS[action.payload.region],
            //   constants: COUNTRY_CONSTANTS[action.payload.region]
            }
        }
        case "RESET_LOCALE": {
            return {
                ...state,
                strings: LOCALE_STRINGS[REGIONS.EN],
            //   constants: COUNTRY_CONSTANTS[REGIONS.EN]
            }
        }
        default:
            return state
    }
};

export const LocaleProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <LocaleContext.Provider value={{ state, dispatch }}>
            {children}
        </LocaleContext.Provider>
    );
};
  
export const useLocale = () => useContext(LocaleContext);