import React, { useState } from 'react';
import { SafeAreaView, View, Picker } from 'react-native';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';
import { Bcolor } from './src/screens/Bcolor';

export const App = () => {
  const [selectedScreen, setSelectedScreen] = useState(null);

  const screens = [
    { key: '1', label: 'Hola Mundo', component: <HolaMundoScreen /> },
    { key: '2', label: 'Contador', component: <ContadorScreen /> },
    { key: '3', label: 'Box Object Model', component: <BoxObjectModelScreen /> },
    { key: '4', label: 'Dimensiones', component: <DimensionesScreen /> },
    { key: '5', label: 'Position', component: <PositionScreen /> },
    { key: '6', label: 'Flex', component: <FlexScreen /> },
    { key: '7', label: 'Tarea', component: <TareaScreen /> },
  ];

  const handleChangeScreen = (itemValue) => {
    setSelectedScreen(itemValue);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }}>
      <View>
        <Picker
          selectedValue={selectedScreen}
          onValueChange={handleChangeScreen}
          style={{ color: 'white', backgroundColor: '#333', borderRadius: 8 }}
        >
          <Picker.Item label="Menu" value={null} />
          {screens.map((screen) => (
            <Picker.Item key={screen.key} label={screen.label} value={screen.key} />
          ))}
        </Picker>
      </View>
      {selectedScreen && (
        <View style={{ flex: 1 }}>
          {screens.find((screen) => screen.key === selectedScreen).component}
        </View>
      )}
    </SafeAreaView>
  );
};
