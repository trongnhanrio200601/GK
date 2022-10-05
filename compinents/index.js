import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View , TextInput , Button ,FlatList } from 'react-native';
import Item from './item';



export default Index  = (props) =>  {
    const data ="";
    const [newValue, setNewValue] = useState("");

    const onDelete = (item) => {
        console.log(item)
        const tmpArr = [...props.data]
        var index = tmpArr.indexOf(item);
        if (index !== -1) {
            tmpArr.splice(index, 1);
        }
        props.setData(tmpArr)
    }
  return (
    <View>
        <TextInput style={{
          borderWidth: 1,
          padding: 10
        }}
                value={newValue}
              onChangeText={(val) => {
                setNewValue(val);
              }}>
        </TextInput>
        <Button title='Thêm' onPress={() => {
            
                props.setData([...props.data, {id: props.id+1, title: newValue}])
                setNewValue("")
                props.setId(props.id+1)
        }}></Button>

        <View>
        
        <FlatList 
                data={props.data}
                renderItem={({item}) => {
                    return <Item item={item} onDelete={() => onDelete(item)}/>
                }}
            />
            </View>
        
      </View>
      
  );
}


