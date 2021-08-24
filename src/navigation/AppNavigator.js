import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailScreen from '../screens/NewdsDetailScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NewsList"
                component={NewsListScreen}
                options={{ title: 'Daily Tea' }}
            />

            <Stack.Screen
                name="NewsDetails"
                component={NewsDetailScreen}
                options={{ title: 'News Details' }}
            />
        </Stack.Navigator>
    );
}

function FavoriteNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Favorites" component={FavoriteScreen} />
        </Stack.Navigator>
    );
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Tabs.Navigator screenOptions={(route) => ({
                tabBarIcon: () => {
                    let iconName;
                    if(route.name == "Home") {
                        iconName = "home"
                    } else if (route.name == "favorites"){
                        iconName= "favorite"
                    }
                    return <MaterialIcons name={iconName} size={24} /> 
                }
            })}>
                <Tabs.Screen name="Homes" component={HomeNavigator} />
                <Tabs.Screen name="Favorite" component={FavoriteNavigator} /> 
            </Tabs.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;