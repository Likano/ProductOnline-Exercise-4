import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Prices (){
    const[ProductQuantity,setIncreament] = useState(1);
    const[TotalPrice,setTotalPrice] = useState(900);

    const IncrementQuantity = () =>{
      setIncreament(ProductQuantity + 1);
      setTotalPrice(TotalPrice + 900);
    }

    const DecrementQuantity = () =>{
      setIncreament(ProductQuantity - 1);
        setTotalPrice(TotalPrice - 900);   
  }
    
  return (
    <View style={styles.container}>
        <View>
          <Text style={styles.titles}>Prices per unit</Text>
          <Text style={styles.Amount}>M900.00</Text>
        </View >

        <View>
          <Text style={styles.titles}>Quantity </Text>
        <View/>

        <View style={styles.Prices}>
          <View style={styles.button}>
            <TouchableOpacity onPress={DecrementQuantity}>
              <FontAwesome name="minus" size={24} color="black"/>
            </TouchableOpacity>
          </View>

        <Text style={styles.value}>{ProductQuantity}</Text>

        <View style={styles.button}>
          <TouchableOpacity onPress={IncrementQuantity}>
            <FontAwesome name="plus" size={24} color="black"/>
          </TouchableOpacity>
        </View>
      <View/>

    </View>

      </View>
      <View>
        <Text style={styles.titles}>Total Price</Text>
        <Text style={styles.Amount}>{"M"+TotalPrice+".00"}</Text>
      </View>   
    </View>
  )
}


const styles = StyleSheet.create({
container: {
  marginLeft: 10   
},
titles: {
  paddingBottom: 5,
  fontSize: 18,
  fontWeight: 'bold'
},
Prices: {
  marginLeft: 10,
  flexDirection: 'row',
  marginRight: 40
},
value: {
  height:30,
  width: 30,
  borderWidth: 2,
  padding: 5,
  marginLeft: 20,
  marginRight: 20
},
Amount: {
  fontSize: 20
}
});