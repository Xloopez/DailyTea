import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import * as newsAction from '../redux/actions/newsAction';


const Card = props => {
    let img = require('../images/news-img.jpg')
    //console.log(props)
    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => {props.navigation.navigate('NewsDetails')}}>
            <View style={styles.card}>

                <View style={styles.imageWrapper}>
                    <Image
                        source={{ uri: props.image}}
                        //source={img} 
                        style={styles.image}
                    />
                </View>

                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>
                        {props.title.length > 22 ? props.title.slice(0, 22) + '...' : props.title}
                    </Text>

                    <MaterialIcons 
                        name="favorite-border" 
                        color="#111a27" size={24} 
                        onPress={() => {
                            dispatch(newsAction.toggleFavorites(props.url))
                        }}
                        />
                </View>

                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                        {props.description.length > 170 ? props.description.slice(0, 170) + '...' : props.description}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
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
        shadowOffset: { width: 0, height: 2 },
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