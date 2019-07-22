import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { ImagePicker } from "expo";

export default function App() {
  const [photo, setPhoto] = useState();

  const _uploadPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync();

    if (result.uri) {
      setPhoto(result);
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
