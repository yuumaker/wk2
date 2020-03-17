import React from "react";
import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import Albumdata from "./Albumdata.json";

const Albumlist = () => {
    return (
        <ScrollView style={styles.scroview}>
            <View>
            <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
            style={styles.thumbnailStyle}
            source={{
            uri: Albumdata[0].url
            }}
        />
        <View style={styles.headerContentStyle}>
        <Text style={styles.textStyle2}>{Albumdata[0].title}</Text>
            <Text style={styles.textStyle3}>{Albumdata[0].artist}</Text>
        </View>
        </View>
        <View style={styles.cardSectionStyle}>
        <Image style={styles.imageStyle} 
        source={require("./image/wild.jpg")}/>
        </View>
    </View>

    <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <Image
            style={styles.thumbnailStyle}
            source={{
                uri: Albumdata[1].url
            }}
        />
        <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle2}>{Albumdata[1].title}</Text>
            <Text style={styles.textStyle3}>{Albumdata[1].artist}</Text>
        </View>
        </View>
        <View style={styles.cardSectionStyle}>
        <Image style={styles.imageStyle} 
        source={require("./image/blue.jpg")}/>
        </View>

        <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
                uri: Albumdata[2].url
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle2}>{Albumdata[2].title}</Text>
            <Text style={styles.textStyle3}>{Albumdata[2].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image style={styles.imageStyle} 
          source={require("./image/bloom.jpg")}/>
        </View>
    </View>

        <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
                uri: Albumdata[3].url
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle2}>{Albumdata[3].title}</Text>
            <Text style={styles.textStyle3}>{Albumdata[3].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image style={styles.imageStyle} 
          source={require("./image/600x600.jpg")}/>
        </View>
    </View>

    <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
                 uri: Albumdata[4].url
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle2}>{Albumdata[4].title}</Text>
            <Text style={styles.textStyle3}>{Albumdata[4].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image style={styles.imageStyle} 
          source={require("./image/lucky.jpg")}/>
        </View>
    </View>

    <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
                uri: Albumdata[5].url
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle2}>{Albumdata[5].title}</Text>
            <Text style={styles.textStyle3}>{Albumdata[5].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image style={styles.imageStyle} 
          source={require("./image/youth.jpg")}/>
        </View>
    </View>

      </View>

    </View>
    </ScrollView>
        );
    };
    
    const styles = StyleSheet.create({
        scroview:{
        backgroundColor:"#000000",
        },
        container: {
          backgroundColor: '#444444',
        },
        headerStyle: {
          backgroundColor: "#444444",
          justifyContent: "center",
          alignItems: "center",
          height: 90,
          paddingTop: 30,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
        },
        textStyle: {
          fontSize: 20,
          fontWeight:"bold",
          color:'#FFFFFF',
        },
        thumbnailContainerStyle: {
          flexDirection: "row",
          justifyContent: "flex-start"
        },
        thumbnailStyle: {
          height: 70,
          width: 70,
          margin: 1
        },
        headerContentStyle: {
          flexDirection: "column",
          justifyContent: "space-around",
          paddingLeft: 10,
        },
        textStyle2:{
          fontSize: 17,
          fontWeight:"bold",
          color:'#FFFFFF',
        },
        textStyle3:{
          fontSize: 13,
          color:'#FFFFFF',
        },
        cardContainerStyle: {
          borderWidth: 1,
          borderRadius: 3,
          borderColor: "#444444",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 2,
          elevation: 1,
          marginLeft: 5,
          marginRight: 5,
          marginTop: 10,
        },
        cardSectionStyle: {
          padding: 5,
          backgroundColor: "#444444",
          borderColor: "#444444",
          borderBottomWidth: 5
        },
        imageStyle: {
          height: 390,
          width: null
        }
      });

      export default Albumlist;