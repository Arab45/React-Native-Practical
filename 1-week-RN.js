import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "#3B1E54", justifyContent: "flex-start", padding: 70, alignItems: "center", gap: 50}}>
      <View style={{backgroundColor: "#EEEEEE", justifyContent: "center", alignItems: "center", height: 100, width: 300}}>
      <Text style={{backgroundColor: "yellow", padding: 8}}>Welcome to coodegeeks9ja!</Text>
      </View>
      <View style={{backgroundColor: "#EEEEEE", justifyContent: "center", alignItems: "center", height: 100, width: 300}}>
      <Text style={{backgroundColor: "yellow", padding: 8}}>Open up App.js to start working on your app!</Text>
      </View>
      <View style={{backgroundColor: "#EEEEEE", alignItems: "center"}}>
      <Text>Open up App.js to start working on your app!</Text>
      </View>
    </View>
  );
}

//space-between