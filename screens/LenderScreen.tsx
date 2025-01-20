import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native';

const LenderScreen = () => {
  const [reminderTime, setReminderTime] = useState('');

  const setReminder = () => {
    if (!reminderTime) {
      Alert.alert('خطأ', 'يرجى إدخال وقت صحيح.');
      return;
    }
    Alert.alert(
      'تم الإعداد',
      `تم تعيين المنبه لتذكيرك في ${reminderTime}.`,
      [{ text: 'موافق' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>حساب المسلف</Text>
      <View style={styles.section}>
        <Text style={styles.infoText}>قم بتعيين منبه لتذكيرك بمواعيد الأقساط:</Text>
        <TextInput
          style={styles.input}
          placeholder="أدخل الوقت (مثال: 10:00 AM)"
          value={reminderTime}
          onChangeText={setReminderTime}
        />
        <Button title="تعيين المنبه" onPress={setReminder} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginTop: 20,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default LenderScreen;
