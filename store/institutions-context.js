import { createContext, useState } from "react";


export const InstitutionsContext = createContext({
    institutions: [],
    addInstis: (institutions) => {},
});

function InstitutionsContextProvider({children}){
    const [instis, setInstis] = useState([]);

    function addInstis(institutions) {
        setInstis(institutions);
    }

    const value = {
        institutions: instis,
        addInstis: addInstis,
    }
    return <InstitutionsContext.Provider value={value}>{children}</InstitutionsContext.Provider>
}

export default InstitutionsContextProvider;