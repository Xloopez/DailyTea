import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';





const Card = () => {


    return (
        <View style={styles.card}>

            <View style={styles.imageWrapper}>

            </View>

            <View style={styles.titleWrapper}>
                <Text>
                    Default Title
                </Text>
                
            </View>

            <View style={styles.descriptionWrapper}>
            <Text>
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
    imageWrapper: {},
    titleWrapper: {},
    descriptionWrapper: {}
    
});

export default Card; 