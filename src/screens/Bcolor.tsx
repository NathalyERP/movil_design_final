import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const Bcolor = () => {
  const colors = ['#FF5733', 'black', 'white'];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const currentColor = colors[currentColorIndex];

  const changeBackgroundColor = () => {
    const nextColorIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(nextColorIndex);
  };

  return (
    <View style={[styles.container, { backgroundColor: currentColor }]}>
      <TouchableOpacity style={styles.cajaMorada} onPress={changeBackgroundColor}>
        <Text style={styles.cubText}>Color</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  cajaMorada: {
    width: 80,
    height: 80,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    top: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cubText: {
    color: 'white',
    fontSize: 25,
  },
});
