import { createContext } from "react";


export const InstitutionsContext = createContext({
    institutions: [],
});

function InstitutionsContextProvider({children}){
    return <InstitutionsContext.Provider>{children}</InstitutionsContext.Provider>
}

export default InstitutionsContextProvider;