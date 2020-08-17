import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Searchbar } from "react-native-paper";

export class Map extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
      onChangeSearch: this.onChangeSearch,
    };
  }
  onChangeSearch = (text) => {
    console.log(text);
  };
  render() {
    const { searchQuery, onChangeSearch } = this.state;
    return (
      <View
        style={{
          position: "relative",
        }}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={{
            position: 'absolute',
            top: 20,
            left: '2%',
            width: '96%'
          }}
        />
        <MapView
          initialRegion={{
            latitude: 39.2652, // 纬度
            longitude: 115.443, // 经度
            latitudeDelta: 0.0922, // 纬度值
            longitudeDelta: 0.0421, // 经度值
          }}
          style={styles.mapStyle}
        >
          {/* <Marker coordinate={10} draggable /> */}
        </MapView>
      </View>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
