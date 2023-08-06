import React from 'react'
import { TouchableOpacity, View, Text, Image ,StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';


interface Props {
    title: string;
    position?: 'br' | 'bl'| 'bc';
    onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br' }: Props ) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                activeOpacity={ 0.75 }
                onPress={ onPress }
                activeOpacity={ 0.75 }
                style={[
                    styles.fabLocation,
                    position === 'bl' ? styles.left :
                    position === 'br' ? styles.right :
                    position === 'bc' ? styles.center :
                    null
                ]}
            >
                <View style={ styles.fab }>
                    <Text style={ styles.fabText }> { title } </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                onPress={ onPress }
                activeOpacity={ 0.75 }
                style={[
                    styles.fabLocation,
                    position === 'bl' ? styles.left :
                    position === 'br' ? styles.right :
                    position === 'bc' ? styles.center :
                    null
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 100 ) }
                    >
                    <View style={ styles.fab }>
                        <Image source={require('C:/Users/nathe/Documents/Clases_R2-20233/PROGRAMACION_DE_DISPOSITIVOS_MOVILES/movil_design_final/prueba2/RN-HolaMundo-Contador-0.5.0/imagenes/875011.png') }
                            style={styles.Bimagen} />
                        <Text style={ styles.fabText }> { title } </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }



    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    right: {

        right: 25
    },
    left: {
        left: 25
    },
    center:{
            left: '40%'
        },
    fab: {
        backgroundColor: '#60ADFF',
        width: 80,
        height: 90,
        borderRadius: 20,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 10,
            height: 14,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
    fabText: {
        top:-5,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    Bimagen: {
        width: 70,
        height: 70,
        top: 5,
        left: 3,
        resizeMode: 'cover',

    }
})