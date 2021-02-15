import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import { TextInput, RadioButton } from "react-native-paper";

import { Ionicons } from "@expo/vector-icons";

const Seperator = () => <View style={styles.seperator} />;

const App = () => {
  const [newsType, setNewType ] = React.useState(0);
  const [text, setText] = React.useState('');
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.box}>
          <Text style={styles.title}>เลือกประเภท</Text>
          <View style={{justifyContent:'center',flexDirection:'row'}}>
            
            <View style={{flexDirection:'row'}}>
              <View style={{justifyContent:'center'}}>
                <TouchableOpacity
                  onPress={()=>setNewType(0)}
                >
              <Text >ข่าวสาร</Text>
              </TouchableOpacity>
              </View>
            <RadioButton
              value="0"
              status={newsType === 0 ? "checked" : "unchecked"}
              onPress={() => setNewType(0)}
            />
            </View>

            <View style={{flexDirection:'row',marginLeft:10}}>
              <View style={{justifyContent:'center'}}>
              <TouchableOpacity
                onPress={()=>setNewType(1)}
              >
              <Text >กิจกรรม</Text>
              </TouchableOpacity>
              </View>
            <RadioButton
              value="1"
              status={newsType === 1 ? "checked" : "unchecked"}
              onPress={() => setNewType(1)}
            />
            </View>

            <View style={{flexDirection:'row',marginLeft:10}}>
              <View style={{justifyContent:'center'}}>
              <TouchableOpacity
                onPress={()=>setNewType(2)}
              >
              <Text >ประกาศ</Text>
              </TouchableOpacity>
              </View>
            <RadioButton
              value="2"
              status={newsType === 2 ? "checked" : "unchecked"}
              onPress={() => setNewType(2)}
            />
            </View>

          </View>
          <Seperator />
        </View>

        <View style={styles.box}>
          <Text style={styles.title}>กิจกรรม</Text>
          <View style={styles.imageBox}>
            <Text style={styles.imageText}>รูปภาพ</Text>
          </View>
          <View style={styles.seeMoreBox}>
            <Text style={styles.seeMoreText}>ดูทั้งหมด</Text>
          </View>
          <Seperator />
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>กิจกรรม</Text>
          <View style={styles.imageBox}>
            <Text style={styles.imageText}>รูปภาพ</Text>
          </View>
          <View style={styles.seeMoreBox}>
            <Text style={styles.seeMoreText}>ดูทั้งหมด</Text>
          </View>
          <Seperator />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    margin: 10,
  },
  header: {
    height: 50,
    backgroundColor: "#00BF74",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 18,
    color: "white",
    fontFamily: "",
    fontWeight: "bold",
  },
  box: {
    paddingTop: 5,
    marginBottom: 0,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  imageBox: {
    backgroundColor: "#F0F0F0",
    height: 100,
    borderRadius: 7,
  },
  imageText: {
    margin: "auto",
    color: "#7CC5A8",
    fontSize: 25,
  },
  imageMap: {
    width: "100%",
    height: 240,
    backgroundColor: "black",
  },
  seeMoreBox: {
    marginTop: 5,
    borderRadius: 7,
  },
  seeMoreText: {
    paddingTop: 10,
    fontSize: 15,
    color: "#41A77F",
    marginBottom: 10,
  },
  seperator: {
    marginVertical: 8,
    borderBottomColor: "#00BF74",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
