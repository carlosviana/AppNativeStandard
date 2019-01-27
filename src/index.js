import React from "react";
import { Provider } from "react-redux";
import { View, Text } from "react-native";

import "./config/ReactotronConfig";

import store from "./store";

const App = () => (
    <Provider store={store}>
        <View>
            <Text>Modelo básico</Text>
        </View>
    </Provider>
);

export default App;
