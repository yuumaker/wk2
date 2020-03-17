import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
const Header = () => {
    return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>ALBUMS</Text>
      </View>
        );
      };
      const styles = StyleSheet.create({
        container: {
          backgroundColor: '#000000',
        },
        headerStyle: {
          backgroundColor: "#5555FF",
          justifyContent: "center",
          alignItems: "center",
          height: 90,
          paddingTop: 30,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          opacity:0.8,
        },
        textStyle: {
          fontSize: 20,
          fontWeight:"bold",
          color:'#FFFFFF',
        },
    });
        export default Header;