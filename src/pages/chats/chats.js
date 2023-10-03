
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useFonts } from 'expo-font';

export default function Chats() {
  const [fontsLoaded] = useFonts({
    'DelaGothicOne-Regular': require('../../../assets/fonts/DelaGothicOne-Regular.ttf'),
  });

  /*if (!fontsLoaded) {
    return null;
  }*/

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? '#dbffc6' : 'none';
    const color = item.id === selectedId ? 'black' : 'black';
    return (
      <Item
        style={styles.customizeItem}
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
      <View style={styles.List}>
        <Image style={styles.tinyLogo}
          source={require('../../../img/user.png')}
        />
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.titlePageContainer}>
          <Text style={styles.titlePage}>Chats</Text>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  'harlequin': {
    '50': '#efffe5',
    '100': '#dbffc6',
    '200': '#b8ff93',
    '300': '#89ff55',
    '400': '#60f823',
    '500': '#3bd303',
    '600': '#2cb300',
    '700': '#238704',
    '800': '#206a0a',
    '900': '#1d5a0d',
    '950': '#0a3201',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "#89ff55",
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  List: {
    flexDirection: "row",
  },
  customizeItem: {
    borderRadius: 30,
  },
  titlePageContainer: {
    marginTop: 29,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3bd303",
  },
  titlePage: {
    fontSize: 45,
    width: "100%",
    textAlign: "center",
    fontFamily: "DelaGothicOne-Regular",
  }
});