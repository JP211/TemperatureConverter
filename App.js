import { s } from './App.style';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { View, Text, ImageBackground } from 'react-native';
import hotBackground from './assets/hot.jpg';
import coldBackground from './assets/cold.jpg';

import { useState, useEffect } from 'react';

import { Input } from './components/Input/Input.jsx';
import { DisplayTemperature } from './components/DisplayTemperature/DisplayTemperature.jsx';
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert.jsx';

import {
  UNITS,
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from './components/utils/temperature';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState('°C');
  const [currentBackground, setCurrentBackground] = useState(coldBackground);
  const oppositeUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    const isCold = isIceTemperature(inputValue, currentUnit);
    setCurrentBackground(isCold ? coldBackground : hotBackground);
  }, [inputValue, currentUnit]);

  function getConvertedTemperature() {
    if (isNaN(inputValue)) {
      return '';
    } else {
      return convertTemperatureTo(inputValue, oppositeUnit).toFixed(1);
    }
  }
  return (
    <>
      <ImageBackground style={s.backgroundImg} source={currentBackground}>
        <SafeAreaProvider>
          <SafeAreaView style={s.root}>
            <View style={s.workspace}>
              <DisplayTemperature
                unit={oppositeUnit}
                temperature={getConvertedTemperature()}
              />
              <Input
                unit={currentUnit}
                onChange={setInputValue}
                defaultValue={0}
              />
              <ButtonConvert
                onPress={() => {
                  setCurrentUnit(oppositeUnit);
                }}
                unit={currentUnit}
              />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      </ImageBackground>
    </>
  );
}
