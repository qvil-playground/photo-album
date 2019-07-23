import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import styled from "styled-components/native";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const Card = styled.View`
  border-width: 1;
  border-radius: 2;
  border-color: #ddd;
  border-bottom-width: 0;
  shadow-color: #000;
  shadow-offset: {width: 0, height: 2};
  shadow-opacity: 0.8;
  shadow-radius: 2;
  elevation: 1;
  margin: 8px;
  background-color: white;
  border-radius: 4px;
  padding: 16px;
  background: white;
`;

const CardLayout = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {array.map((value, index) => (
          <Card key={index}>
            <Text>{value}</Text>
          </Card>
          // <View key={index} style={styles.card}>
          //   <Text>{value}</Text>
          // </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center"
  },
  scrollView: {
    padding: 16,
    backgroundColor: "skyblue",
    alignSelf: "stretch"
  },
  card: {
    alignSelf: "stretch",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    padding: 16,
    backgroundColor: "white"
  }
});

export default CardLayout;
