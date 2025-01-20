import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent } from 'react-native';
import GlobalStyles from '../styles/GlobalStyles';  // استيراد الأنماط العامة

type CustomButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={GlobalStyles.button}
      onPress={onPress}
      activeOpacity={0.7}  // تأثير اللمس عند الضغط
    >
      <Text style={GlobalStyles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
