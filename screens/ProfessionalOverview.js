import { InstitutionsContext } from '../store/institutions-context';
import { ProfessionalsContext } from '../store/professionals-context';
import { useContext, useLayoutEffect, useEffect, useState } from 'react';
import ProfessionalList from '../components/ProfessionalList/ProfessionalList';
import { fetchProfessionals } from '../util/http';

function ProfessionalOverview({route, navigation}){
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    const professionalsCtx = useContext(ProfessionalsContext);
    const institutionsCtx = useContext(InstitutionsContext);
    const institutionId = route.params.institutionId;

    useEffect(() => {
        async function getProfessionals(){
            setIsFetching(true);
            try {
                const profs = await fetchProfessionals();
                professionalsCtx.addProfessionals(profs);
            } catch (error) {
                setError('Could not fetch Professionals');
                console.log(error)
            }
            setIsFetching(false);
        }
        getProfessionals();
    }, []);


    const displayedProfessionals = professionalsCtx.professionals.filter((profItem) => {
        console.log("--------------------------")
        console.log(profItem.institutionIds)
        console.log("..........................")
        console.log(institutionId);
        console.log("---------------------------")
        console.log(profItem.institutionIds.indexOf(institutionId));
        return profItem.institutionIds.indexOf(institutionId) >= 0;
    });

    useLayoutEffect(() => {
        const institutionName = institutionsCtx.institutions.find((institution) => institution.id === institutionId).name;

        navigation.setOptions({
            title: institutionName
        });
    }, [institutionId, navigation]);

    return(
        <ProfessionalList items={displayedProfessionals} />
    );
}

export default ProfessionalOverview;