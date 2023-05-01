import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function Prices(){
    const[Increment,setIncreament] = useState(0);

    function handleIncrement(){
        setIncreament(Increment + 1);
    }

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>Prices per unit:</Text>
      </View >

      <View style={styles.item}>
        <Text>Quantity:</Text>
        <View style={styles.Price}>
            <TouchableOpacity onPress={handleIncrement}>
                <View style={styles.buttun}>
                 <FontAwesome name="plus" size={24} color="black" />
                </View>
            </TouchableOpacity>
        <View/>
     </View>

      </View>
      <View style={styles.item}>
        <Text>Total Price:</Text>
      </View>   
    </View>
  )
}


const styles = StyleSheet.create({
container: {
    marginLeft: 10,
    paddingTop: 20
},
item: {
    margin: 20
}
});