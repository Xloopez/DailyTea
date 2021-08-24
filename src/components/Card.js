import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';



const Card = () => {
    let img = require('../images/news-img.jpg') 


    return (
        <View style={styles.card}>

            <View style={styles.imageWrapper}>
                <Image 
                source={{uri: 'https://img.freepik.com/free-vector/news-concept-landing-page_52683-20522.jpg?size=626&ext=jpg'}}
                //source={img} 
                style={styles.image}
                /> 
            </View>

            <View style={styles.titleWrapper}>
                <Text style={styles.title}>
                    Default Title
                </Text>

                <MaterialIcons name="favorite-border" color="#111a27" size={24}/>
            </View>

            <View style={styles.descriptionWrapper}>
                <Text style={styles.description}>
                    Default Description
                </Text>
                
            </View>
            
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        height: 300,
        marginTop: 20,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.15,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5
    },
    imageWrapper: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    titleWrapper: {
        height: '10%',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    title: {
        fontFamily: 'Barlow-Regular',
        fontSize: 20,
    },
    descriptionWrapper: {
        paddingHorizontal: 15
    },
    description: {
        fontFamily: 'Barlow-Light',
        fontSize: 15,
        marginTop: 10

    }
    
});

export default Card; 