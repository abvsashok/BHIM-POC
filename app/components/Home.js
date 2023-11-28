import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from './NewListingButton';
import ListingEditScreen from './ListingEditScreen';
import AccountScreen from './AccountScreen';
import Dashboard from './Dashboard';

const Tab = createBottomTabNavigator();

export default function Home() {
    return (
        <Tab.Navigator initialRouteName="Dashboard" screenOptions={{
            gestureEnabled: false, // Disable swipe back gesture
        }}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="ListingEdit"
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    headerShown: false,
                    tabBarButton: () => (
                        <NewListingButton
                            onPress={() => navigation.navigate("ListingEdit")}
                        />
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="plus-circle"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="Account"
                component={AccountScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />


        </Tab.Navigator>
    )
}