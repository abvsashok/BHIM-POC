import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

function AppTextInput({ icon, extraStyles, width = "100%", ...otherProps }) {
    return (<View>
        {/* <Text>{otherProps?.placeholder}</Text> */}
        <View style={[styles.container, { width }, { ...extraStyles }]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={defaultStyles.colors.medium}
                    style={styles.icon}
                />
            )}
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium}
                style={[defaultStyles.text, styles.text]}
                {...otherProps}
            />
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 10,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
    },
    text: {
        flexGrow: 1
    }
});

export default AppTextInput;
