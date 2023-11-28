import React, { useContext } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import colors from "../config/colors";
import CScreen from "./Screen";
import AuthContext from "../storage/Context";
import { FontAwesome5 } from '@expo/vector-icons';
import CollapsibleComponent from "./CollapsibleComponent";


const ItemBody = ({ item }) => {
    let entries = item ? Object.entries(item) : [];
    return <View >
        {entries?.map((ent, index) => {
            return <View key={`body-${index}`} style={{
                flexDirection: 'row',

            }}>
                <Text style={{ textTransform: 'capitalize', fontWeight: 'bold' }} key={`index-${index}`}>{ent[0]} : </Text>
                <Text> {ent[1]}</Text>
            </View>
        })}
    </View>
}

const Card = ({ title }) => (
    <View
        style={{
            backgroundColor: '#ffffff',
            borderRadius: 8,

            margin: 16,
            padding: 16,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 3,
        }}
    >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </View>
);

function Dashboard({ navigation }) {

    const { data, setData } = useContext(AuthContext);


    return (
        <CScreen style={styles.screen} >
            <View style={styles.welContainer}>
                <Text style={styles.welcomeText}>Welcome Back</Text>
            </View>
            <Card title={"Latest Data"}></Card>
            <View style={styles.container}>
                <FlatList
                    data={data?.listing || []}
                    keyExtractor={(menuItem) => menuItem.title}
                    ListEmptyComponent={() => (
                        <View style={{ alignItems: 'center', marginTop: 50 }}>
                            <FontAwesome5 name="exclamation-circle" size={40} color="#aaa" />
                            <Text style={{ marginTop: 10, fontSize: 18, color: '#aaa' }}>
                                No Records
                            </Text>
                        </View>
                    )}
                    renderItem={({ item }) => (
                        <CollapsibleComponent item={item} >
                            <ItemBody item={item}></ItemBody>
                        </CollapsibleComponent>
                    )}
                />
            </View>
        </CScreen>
    );
}

const styles = StyleSheet.create({
    welContainer: {
        marginTop: 15,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Adjust the color as needed
        textAlign: 'center',
        textTransform: 'capitalize',
        // Add any additional styles or decorations here
    },
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});

export default Dashboard;
