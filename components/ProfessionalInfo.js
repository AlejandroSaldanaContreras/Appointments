import { Text, View, StyleSheet } from "react-native";

function ProfessionalInfo({ sector, rating, address }){
    return(
        <View style={styles.details}>
            <Text style={styles.textHeader}>{sector}</Text>
            <Text style={styles.textHeader}>{rating}/5</Text>
            <Text style={styles.textAddres}>{address}</Text>
        </View>
    );
}

export default ProfessionalInfo;

const styles = StyleSheet.create({
    details:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailsHeader:{
        flexDirection: 'row',
    },
    textHeader: {
        //marginRight: 20,
        fontSize: 20,
        fontWeight: '300',
        marginBottom: 4
    },
    textAddres:{
        //paddingTop:8,
        fontSize: 16,
        fontWeight: '300',
        marginBottom: 4
    }
})