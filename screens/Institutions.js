import { FlatList } from 'react-native';
import { INSTITUTIONS } from '../data/dummy-data'
import InstitutionGridTile from '../components/InstitutionGridTile';

function Institution({ navigation }){

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
        <FlatList data={INSTITUTIONS} keyExtractor={(item) => item.id}
                    renderItem={renderInstitutionItem}
                    numColumns={2}>
        </FlatList>
    );
}

export default Institution;
 