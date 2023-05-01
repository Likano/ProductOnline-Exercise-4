import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Picture from './Components/Picture';
import Prices from './Components/Prices';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Picture />
      <Prices />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
});
