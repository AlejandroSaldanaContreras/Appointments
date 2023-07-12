import { StyleSheet, Text, Button, View } from 'react-native';
import { storeInst, storeProf } from '../util/http';

function Profile(){

    function pressable(){
        const prof = {
            institutionIds: ["NZcg_0TjPct4bjIVh5Q"],
            name: "Pedro Paramo",
            sector: "Fisioterapeuta",
            schedule: "L-J 8:00am - 6:00pm",
            image: "https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", 
            rating: "4.9",
            address: "Ave, Ferrocarril Central 709, Col. Los Laureles",
        }
        storeProf(prof);
    }

    return(
        <View>
            <Text>MY PROFILE</Text>
            <Button title='Post' onPress={pressable}></Button>
        </View>
    );
}

export default Profile;