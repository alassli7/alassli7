import React from 'react';
import { Text, TouchableOpacity, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import GlobalStyles from './styles/GlobalStyles';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../assets/background.png')} 
      style={[GlobalStyles.container, { justifyContent: 'center', alignItems: 'center' }]}>
      
      <Animatable.View animation="fadeIn" duration={1500} style={GlobalStyles.container}>
        <Text style={GlobalStyles.title}>مرحبا بك في تطبيق السلة</Text>

        <Animatable.View animation="bounceIn" duration={2000}>
          <TouchableOpacity
            style={GlobalStyles.button}
            onPress={() => navigation.navigate('NextScreen')}>
            <Text style={GlobalStyles.buttonText}>ابدأ الآن</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </ImageBackground>
  );
};

export default StartScreen;
