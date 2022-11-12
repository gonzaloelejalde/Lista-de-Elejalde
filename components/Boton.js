import React from 'react';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

export default function Boton() {

    var [isPress, setIsPress] = React.useState(false);

    var touchProps = {
        activeOpacity: 1,
        underlayColor: 'green',
        style: isPress ? styles.btnPress : styles.btnNormal,
        onHideUnderlay: () => setIsPress(true),
        onShowUnderlay: () => setIsPress(true),
        onPress: () => console.log('HELLO'),
    };

    return (
        <View style={styles.container}>
            <TouchableHighlight {...touchProps}>
                <Text>Toque para marcar como Completado</Text>
            </TouchableHighlight>
        </View>
    );
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNormal: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        height: 30,
        width: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnPress: {
        borderColor: 'green',
        borderWidth: 1,
        height: 50,
        width: 130,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});