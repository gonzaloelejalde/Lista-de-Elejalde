import { useState} from 'react';
import { StyleSheet, TextInput, View, Button, Text, FlatList, Alert, TouchableOpacity, Pressable} from 'react-native';
import Modal from './components/Modal';
import Boton from './components/Boton';

export default function App() {
  const [textItem, setTextItem] = useState("")
  const [itemList, setItemList] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState({})

  const onHandleChangeItem = (t) => {
    setTextItem(t)
  }

  const addItem = () => {
    setItemList(currentItems => [
      ...currentItems, 
      {id: Math.random().toString(), value: textItem}
    ])
    setTextItem("")
  }

  const selectedItem = (id) => {
    setItemSelected(itemList.filter(item => item.id === id)[0])
    setModalVisible(true)
  }

  const deleteItem = () => {
    setItemList(currentState => currentState.filter(item => item.id !== itemSelected.id))
    setItemSelected({})
    setModalVisible(false)
  }


  const renderItem = ({item}) => (
    <TouchableOpacity style = {styles.renderItem} onPress = {() => selectedItem(item.id)}>
      <Text style = {styles.itemList}>- {item.value}</Text>
      <Boton/>
    </TouchableOpacity>
  )

  return (
    <View style = {styles.container}>
      <View style={styles.itemContainer}>
        <TextInput value = {textItem} placeholder='Agregar item a la lista' style={styles.text} onChangeText = {onHandleChangeItem}/>
        <Button title="Agregar" color = "purple" onPress = {addItem}/>
      </View>
      <View>
        <Text style = {styles.textoEliminar}>Tocar sobre un elemento para eliminarlo</Text>
        <FlatList 
          data = {itemList}
          renderItem = {renderItem}
          keyExtractor = {(item) => item.id}
        />
      </View>
      <Modal isVisible = {modalVisible} actionDeleteItem = {deleteItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white", 
    flex: 1, 
    padding: 30, 
    marginTop: 50,
  },
  itemContainer: {
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
    margin: 10,
  },
  text: {
    backgroundColor: "white", 
    borderBottomColor: "black", 
    borderBottomWidth: 1, 
    width: 200,
  },
  textoEliminar: {
    marginLeft: 15,
    marginBottom: 25,
  },
  itemList: {
    fontSize: 25,
    marginBottom: 20
  },
  green: {
    
  }
});

