import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import firebase from "firebase";
import MyStack from "./src/navigation/MyStacks";
import MyTabs from "./src/navigation/MyTabs";
import { View } from "react-native";
import { Button } from "react-native-elements";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDVFE-qnL0WB6mmy1SAVN_3CjyicY6cCLw",
  authDomain: "sabicode-804fa.firebaseapp.com",
  databaseURL: "https://sabicode-804fa-default-rtdb.firebaseio.com",
  projectId: "sabicode-804fa",
  storageBucket: "sabicode-804fa.appspot.com",
  messagingSenderId: "171975975242",
  appId: "1:171975975242:web:787ab657bb2a548bc121b3",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  const [loaded, setLoaded] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        setLoggedIn(false);
        setLoaded(true);
      } else {
        setLoggedIn(true);
        setLoaded(true);
      }
    });
  }, []);

  if (!loaded) {
    return (
      <View>
        <Button loading={true} type="clear" />
      </View>
    );
  }

  if (!loggedIn) {
    return (
      <SafeAreaProvider>
        <MyStack />
      </SafeAreaProvider>
    );
  } else {
    return (
      <SafeAreaProvider>
        <MyTabs />
      </SafeAreaProvider>
    );
  }
}
