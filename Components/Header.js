import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
       <View>
         <MaterialCommunityIcons name="menu" size={25} color="black" />
       </View>      
       <View>
        <Text style={styles.logo}>Order Now</Text>
      </View>
      <View>
      <MaterialCommunityIcons name="cart-outline" size={24} color="black" />
       </View>

    </View>

    
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: '#90caf9',
        height: 50,
        marginBottom: 10
    },
    logo: {
        fontWeight: "bold",
        marginLeft: 20,
        fontSize: 20,
        marginRight: 160
    },
});