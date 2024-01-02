import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import MainNavigation from "./src/navigations/MainNavigation";

import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/roboto-v30-cyrillic_latin-regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/roboto-v30-cyrillic_latin-500.ttf"),
    "Roboto-Bold": require("./assets/fonts/roboto-v30-cyrillic_latin-700.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  return <Provider store={store.store}>
    <PersistGate loading={<Text>Loading...</Text> >} persistor={store.persistor}>
      <MainNavigation />
    </PersistGate>
  </Provider>;
}
