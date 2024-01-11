import { server } from "../../store";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// action login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({
            type: "loginRequest",
        });
        // hitting node login api request
        const { data } = await axios.post(
            `${server}/user/login`,
            { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({
            type: "loginSuccess",
            payload: data,
        });
        await AsyncStorage.setItem("@auth", data?.token);
    } catch (error) {
        dispatch({
            type: "loginFail",
            payload: error.response.data.message,
        });
    }
};

// register action
export const register = (formDat)