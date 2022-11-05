import { StyleSheet, Text, View, Pressable, Button, Modal as NewModal } from 'react-native'
import React from 'react'

const Modal = ({isVisible, actionDeleteItem}) => {
    // const {isVisible} = props
    return (
        <NewModal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.")
                setModalVisible(!modalVisible)
            }}
        >
            <View>
                <View>
                    <Text style={styles.eliminar} >¿Eliminar el elemento seleccionado? </Text>
                    <Pressable>
                        <Button title="Eliminar" color="red" onPress={() => actionDeleteItem()} />
                    </Pressable>
                </View>
            </View>
        </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    eliminar: {
        marginLeft: 70,
        marginBottom: 15,
        marginTop: 300,
    },
})

