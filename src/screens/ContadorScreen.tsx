import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
  const [contador, setContador] = useState(0);
  const [currentImage, setCurrentImage] = useState('image1'); // Inicialmente carga la imagen 'image1'

  const changeImage = () => {
    // Puedes cambiar las imágenes según lo desees
    if (currentImage === 'image1') {
      setCurrentImage('image2');
    } else if (currentImage === 'image2') {
      setCurrentImage('image3');
    } else {
      setCurrentImage('image1');
    }
  };

  // Obtiene la ruta de la imagen actual
  const getImageSource = () => {6
    switch (currentImage) {
      case 'image1':
        return require('C:/Users/nathe/Documents/Clases_R2-20233/PROGRAMACION_DE_DISPOSITIVOS_MOVILES/movil_design_final/prueba2/RN-HolaMundo-Contador-0.5.0/imagenes/mar1.jpg');
      case 'image2':
        return require('C:/Users/nathe/Documents/Clases_R2-20233/PROGRAMACION_DE_DISPOSITIVOS_MOVILES/movil_design_final/prueba2/RN-HolaMundo-Contador-0.5.0/imagenes/mar2.jpg');
      case 'image3':
        return require('C:/Users/nathe/Documents/Clases_R2-20233/PROGRAMACION_DE_DISPOSITIVOS_MOVILES/movil_design_final/prueba2/RN-HolaMundo-Contador-0.5.0/imagenes/mar3.jpg');
      default:
        return require('C:/Users/nathe/Documents/Clases_R2-20233/PROGRAMACION_DE_DISPOSITIVOS_MOVILES/movil_design_final/prueba2/RN-HolaMundo-Contador-0.5.0/imagenes/mar1.jpg'); // Imagen por defecto
    }
  };

  return (
    <ImageBackground source={getImageSource()} style={styles.container}>
      <TouchableOpacity
        style={styles.changeColorButton}
        onPress={changeImage}
      >
        <View style={styles.changeColorButtonContent}>
          <Text style={styles.changeColorButtonText}>
            Fondo
          </Text>
        </View>
      </TouchableOpacity>

      <Text
        style={{
          top: -150,
          color: 'white',
          fontSize: 40,
          textAlign: 'center',
        }}
      >
        Nathaly Esther Rodrifuez Polanco 2019-1174
      </Text>
      <Text style={styles.title}>Contador: {contador}</Text>

      <Fab title="+1" onPress={() => setContador(contador + 1)} />

      <Fab title="-1" position="bl" onPress={() => setContador(contador - 1)} />

      <Fab title="0" position="bc" onPress={() => setContador(0)} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor
  },
  title: {
    color: 'white',
    fontSize: 40,
    top: -115,
    textAlign: 'center',
  },
  changeColorButton: {
    position: 'absolute',
    top: '60%', // Centra verticalmente
    right: '50%', // Centra horizontalmente
    transform: [{ translateX: 45 }, { translateY: -45 }], // Ajusta el botón al centro
    width: 90,
    height: 90,
    backgroundColor: '#60ADFF',
    borderRadius: 45,
    borderWidth: 7,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeColorButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
