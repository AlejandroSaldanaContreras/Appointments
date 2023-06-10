import { FlatList, StyleSheet, Text } from 'react-native';
import { INSTITUTIONS, PROFESSIONALS} from '../data/dummy-data';
import { useLayoutEffect } from 'react';
import ProfessionalList from '../components/ProfessionalList/ProfessionalList';


function ProfessionalOverview({route, navigation}){
    const institutionId = route.params.institutionId;
    const displayedProfessionals = PROFESSIONALS.filter((profItem) => {
        return profItem.institutionIds.indexOf(institutionId) >= 0;
    });

    useLayoutEffect(() => {
        const institutionName = INSTITUTIONS.find((institution) => institution.id === institutionId).name;

        navigation.setOptions({
            title: institutionName
        });
    }, [institutionId, navigation]);

    return(
        <ProfessionalList items={displayedProfessionals} />
    );
}

export default ProfessionalOverview;