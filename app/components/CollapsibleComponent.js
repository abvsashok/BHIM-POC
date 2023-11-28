import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ListItem from './ListItem';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CollapsibleComponent = ({ item, children, defaultState }) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultState == undefined ? true : defaultState);

  const toggleCollapsible = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleCollapsible} style={{ padding: 0 }}>
        {/* style={styles.header} */}
        {/* <Text style={styles.headerText}>Click to {isCollapsed ? 'expand' : 'collapse'}</Text> */}
        <ListItem item={item} icon={isCollapsed ? <MaterialCommunityIcons name="arrow-down-bold" size={20} color="lightgray" /> : <MaterialCommunityIcons name="arrow-up-bold" size={20} color="lightgray" />} ></ListItem>
      </TouchableOpacity>

      {!isCollapsed && (
        <View style={styles.content}>
          {children}
          {/* <Text>This is the collapsible content.</Text> */}
          {/* Add more content here */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 10,
  },
  header: {
    padding: 6,
    backgroundColor: '#f0f0f0',
  },
  headerText: {
    fontWeight: 'bold',
  },
  content: {
    padding: 7,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'lightgrey'
  },
});

export default CollapsibleComponent;