import { StyleSheet, View, FlatList, Text } from "react-native";


const ListItem = ({ item, icon }) => (
    <View style={{
        padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd', backgroundColor: "#fff", flexDirection: 'row',
        justifyContent: 'space-between',
    }}>
        <Text>{item.title}</Text>
        {icon}
    </View>
);

export default ListItem;