import { Pressable, View, Text, StyleSheet, Platform, Image } from 'react-native';

function InstitutionGridTile({ name, color, image, onPress}){
    return(
        <View style = {styles.griditem}>
            <Pressable android_ripple={{color: '#ccc'}} style={({pressed}) => [styles.buttonPressable, 
                                                                                pressed ? styles.buttonPressed : null]}
                        onPress={onPress} >
                <View style={[styles.innerContainer, {backgroundColor: color}]}>
                    <Image style={styles.image} source={{uri: image}}/>
                    <Text style={styles.title}>{name}</Text>
                </View>
            </Pressable>
        </View>
    );
 }

 export default InstitutionGridTile;
 
 const styles = StyleSheet.create({
    image:{ 
        width: '100%',
        height: '79%',
    },
    title:{
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        margin: 8,
    },
    griditem: {
        flex: 1,
        margin: 16,
        height: 180, 
        borderRadius: 8,
        backgroundColor: 'white',
        //Android shadow
        elevation: 4,

        //iOS shadow
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8, 
        
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonPressable:{
        flex:1,
    },
    titleContainer:{
        width: '100%',
    },
    buttonPressed: {
        opacity: 0.5,
    }
 });