import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Home = () => {
  const [photo, setPhoto] = useState();

  const _uploadPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();
    console.log("TCL: _uploadPhoto -> result", result);
    const photo = new FormData();
    photo.append("file", result);

    if (result.uri) {
      setPhoto(result);
      fetch(`${env.API_URL}/photo`, {
        method: "POST",
        // headers: {
        //   Accept: "application/json",
        //   "Content-Type": "application/json"
        // },
        body: JSON.stringify({
          photo_contents: "123123213",
          file: photo,
          // photo_binary: `data:image/jpeg;base64,${base64}`,
          photo_location: "@Seoul",
          tags: "123123",
          user_seq: 1
        })
      })
        .then(res => {
          console.log(res);
          res.json();
        })
        .then(res => {
          console.log("TCL: _uploadPhoto -> res", res);
        });
    }
  };
  return (
    <View style={styles.container}>
      {photo && (
        <Image
          source={{ uri: photo.uri }}
          style={{ width: 300, height: 300 }}
        />
      )}
      <Text>This is super simple photo album example!</Text>
      <Button onPress={_uploadPhoto} title="Upload" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
