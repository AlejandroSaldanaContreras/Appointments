import { FlatList } from 'react-native';
import { InstitutionsContext } from '../store/institutions-context';
import InstitutionGridTile from '../components/InstitutionGridTile';
import { useContext, useEffect, useState } from 'react';
import { fetchInstitutions } from '../util/http';

function Institution({ navigation }){
    const [isFetching, setIsFetching] = useState(true);
    const [error, setError] = useState();
    const institutionsCtx= useContext(InstitutionsContext);

    useEffect(() => {
        async function getInstitutions(){
            setIsFetching(true);
            try{
                const instis = await fetchInstitutions();
                institutionsCtx.addInstis(instis);
            } catch(error){
                setError('Could not fetch Institutions');
                console.log(error)
            }
            setIsFetching(false);
        }
        getInstitutions();
    }, []);

        function renderInstitutionItem(itemData){
            function pressHandler(){
                navigation.navigate("ProfessionalOverview", {institutionId: itemData.item.id});
            }

            return(
                <InstitutionGridTile name={itemData.item.name}
                                    color={itemData.item.color}
                                    image ={itemData.item.image}
                                    onPress={pressHandler}>    
                </InstitutionGridTile>
            );
        }

    return(
        <FlatList data={institutionsCtx.institutions} keyExtractor={(item) => item.id}
                    renderItem={renderInstitutionItem}
                    numColumns={2}>
        </FlatList>
    );
}

export default Institution;