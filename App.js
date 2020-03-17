import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import { Colors } from "react-native/Libraries/NewAppScreen";
import Header from './Header';
import Albumlist from './Albumlist';

const App = () => {
  return (
    <View>
  <Header />
  <Albumlist/>
  </View>
  );
};

export default App;
