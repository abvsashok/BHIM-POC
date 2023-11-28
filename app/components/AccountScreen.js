import React, { useContext } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";

import colors from "../config/colors";
import AppButton from "./Button";
import CScreen from "./Screen";
import AuthContext from "../storage/Context";


const menuItems = [
    {
        title: "Logout"
    }
];
const ListItem = ({ item }) => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
        <Text>{item.title}</Text>
    </View>
);
function AccountScreen({ navigation }) {

    const { data, setData } = useContext(AuthContext);

    return (
        <CScreen style={styles.screen} >
            <View style={styles.container}>
                <ListItem item={{ title: data?.user?.email || "" }} />
            </View>
            {/* <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={(menuItem) => menuItem.title}
                    // ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) => (
                        <ListItem item={item} ></ListItem>
                    )}
                />
            </View> */}
            <AppButton title={"Logout"} onPress={() => {
                navigation.navigate("Login");
            }} />

        </CScreen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    },
});

export default AccountScreen;
