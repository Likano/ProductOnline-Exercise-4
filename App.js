import { StyleSheet, Text, View,StatusBar,ScrollView} from 'react-native';
import Picture from './Components/Picture';
import Prices from './Components/Prices';
import Header from './Components/Header';



export default function App (){
  
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header />
    <ScrollView>
      <Picture />
      <Prices />
    </ScrollView>
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#e3f2fd"
  },
});
