import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Index from './compinents/index';


export default function App() {
  const [id, setId] = useState(1)
  const [data, setData] = useState([{
    id: 1,
    title: "Test"
  }])

  return (
    <View style={{
      padding: 20,
      paddingTop: 50,
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <Index data={data} setData={setData} id={id} setId={setId}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})