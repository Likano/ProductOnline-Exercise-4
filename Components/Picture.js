import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Picture = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Product}>
      </View>
    </View>
  )
}

export default Picture

const styles = StyleSheet.create({
container: {
    flexDirection: "row"
},
Product: {
    margin: 10,
    borderWidth: 5,
    height: 400,
    width: 350
},
});