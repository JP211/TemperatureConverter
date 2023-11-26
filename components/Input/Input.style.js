import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  root: {
    alignSelf: 'stretch',
    justifyContent: "center,"
  },
  input: {
    backgroundColor: 'black',
    height: 50,
    borderRadius: 20,
    paddingLeft: 25,
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    color: "white",
    paddingRight: 25,
    paddingTop: 7,
    fontSize: 30,
  },
});
