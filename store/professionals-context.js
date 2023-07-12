import { createContext, useState } from "react";


export const ProfessionalsContext = createContext({
    professionals: [],
    addProfessionals: (profs) => {},
});

function ProfessionalsContextProvider({children}) {
    const [profs, setProfs] = useState([]);

    function addProfs(professionals){
        setProfs(professionals);
    }

    const value = {
        professionals: profs,
        addProfessionals: addProfs,
    }
    return <ProfessionalsContext.Provider value={value}>{children}</ProfessionalsContext.Provider>
}

export default ProfessionalsContextProvider;