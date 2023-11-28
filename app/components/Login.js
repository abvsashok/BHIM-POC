import React, { useContext, useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";
import CScreen from "./Screen";
import { ErrorMessage, Form, FormField, SubmitButton } from "./forms";
import AuthContext from "../storage/Context";

// import authApi from "../api/auth";
// import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password"),
});

function Login({ navigation }) {
    const [loginFailed, setLoginFailed] = useState(false);
    const { data, setData } = useContext(AuthContext);

    const handleSubmit = async ({ email, password }) => {
        setData({ ...data, user: { email } });
        navigation.navigate('Home');
    };

    return (
        <CScreen style={styles.container}>
            <Form
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error="Invalid email and/or password."
                    visible={loginFailed}
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    keyboardType="email-address"
                    name="email"
                    placeholder="Email"
                    textContentType="emailAddress"
                />
                <FormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />
                <SubmitButton title="Login" />
                {/* <AppButton onPress={handleSubmit} title={"Login"} > Login </AppButton> */}
            </Form>
        </CScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'lightgray'
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20,
    },
});

export default Login;
