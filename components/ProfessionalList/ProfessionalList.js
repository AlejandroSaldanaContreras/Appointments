import { View, FlatList, StyleSheet } from "react-native";
import ProfessionalItem from './ProfessionalItem';
import { useNavigation } from '@react-navigation/native';

function ProfessionalList({ items }){
    const navigation = useNavigation();

    function renderProfItem(itemData){
        const item = itemData.item;

        const profItemProps = {
            name: item.name,
            id: item.id,
            image: item.image,
            sector: item.sector,
            address: item. address,
            rating: item.rating,
            schedule: item.schedule,
        }

        function pressHandler(){
            navigation.navigate("ProfessionalDetail", {professionalId: profItemProps.id});
        }

        return(
            <ProfessionalItem {...profItemProps} onPress={pressHandler}></ProfessionalItem>
        );
    }

    return(
        <View style={styles.container}>
            <FlatList data={items}
                        keyExtractor={(item) => item.id}
                        renderItem={renderProfItem}/>
        </View>
    );
}

export default ProfessionalList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16
    }
});