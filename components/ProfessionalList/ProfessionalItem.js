import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';

function ProfessionalItem({ image, name, sector, rating, address, schedule, onPress }){
    return(
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color: '#ccc'}} 
                    style={({pressed}) => pressed ? styles.buttonPressed : null}
                    onPress={onPress}
                    >
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{uri: image}}/>
                        <Text style={styles.title}>{name}</Text>
                    </View>
                    <View style={styles.professionalDetail}>
                        <Text>{sector}                 {rating}/5</Text>
                        <Text>{address}</Text>
                        <Text>{schedule}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );
}

export default ProfessionalItem;

const styles = StyleSheet.create({
    professionalDetail:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        margin: 10,
    },
    image:{ 
        width: '100%',
        height: 300,
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8,
    },
    mealItem:{
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        
        //ANDROID SHADOW
        elevation: 4,

        //iOS SHADOW
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8, 
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    buttonPressed: {
        opacity: 0.5,
    }
});