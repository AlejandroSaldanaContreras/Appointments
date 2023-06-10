import { View, FlatList, StyleSheet } from "react-native";
import ProfessionalItem from './ProfessionalItem';

function ProfessionalList({ items }){
    
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
        return(
            <ProfessionalItem {...profItemProps}></ProfessionalItem>
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