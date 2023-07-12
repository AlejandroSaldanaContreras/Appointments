import { StyleSheet, Text, ScrollView, Image, View } from 'react-native';
import { ProfessionalsContext } from '../store/professionals-context';
import { useContext, useLayoutEffect } from 'react';
import ProfessionalInfo from '../components/ProfessionalInfo';
import Button from '../ui/Button';


function ProfessionalDetail({ route, navigation }){
    const professionalsCtx = useContext(ProfessionalsContext);
    const profId = route.params.professionalId;
    const selectedProf = professionalsCtx.professionals.find((professional) => professional.id === profId);


    useLayoutEffect(() => {

        navigation.setOptions({
            title: selectedProf.sector,
        });
    }, [selectedProf.sector, navigation]);

    
    return(
        <ScrollView style={styles.root}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:selectedProf.image}}/>
                <Text style={styles.title}>{selectedProf.name}</Text>
                <ProfessionalInfo sector={selectedProf.sector} 
                                address={selectedProf.address} 
                                rating={selectedProf.rating}/>
                <Button style={styles.button}>Agendar cita</Button>
            </View>
        </ScrollView>
    );
}


export default ProfessionalDetail;

const styles = StyleSheet.create({
    root:{
        marginBottom: 32,
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold', 
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
    },
    button:{    
        marginTop: 10,
        minWidth: 200,
    }
})