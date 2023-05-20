import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

const RecoleccionScreen = () => {
  const [selectedDate, setSelectedDate] = useState(moment().format('YYYY-MM-DD'));
  const [materiales, setMateriales] = useState('');

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
  };

  const handleMaterialesChange = (text) => {
    setMateriales(text);
  };

  const handleGuardarRecoleccion = () => {
    if (selectedDate && materiales) {
      // Guardar la recolección en la base de datos o realizar otras acciones
      enviarNotificacion();
      Alert.alert('Recolección guardada');
    } else {
      Alert.alert('Por favor, seleccione una fecha y describa los materiales');
    }
  };

  const enviarNotificacion = () => {
    // Simular el envío de una notificación
    setTimeout(() => {
      Alert.alert('¡Ha sido programada su recolección!');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Calendar
        style={styles.calendar}
        onDayPress={handleDateSelect}
        markedDates={{ [selectedDate]: { selected: true } }}
        theme={{
          calendarBackground: '#F5F5F5',
          textSectionTitleColor: '#000',
          dayTextColor: '#000',
          todayTextColor: '#FF4081',
          selectedDayTextColor: '#FFF',
          selectedDayBackgroundColor: '#FF4081',
          arrowColor: '#FF4081',
          monthTextColor: '#000',
          textDisabledColor: '#BFBFBF',
          'stylesheet.calendar.header': {
            week: {
              marginTop: 5,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
        }}
        current={selectedDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Descripción de materiales a reciclar"
        value={materiales}
        onChangeText={handleMaterialesChange}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Guardar"
          onPress={handleGuardarRecoleccion}
          color="#00CC00"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    paddingTop: 50,
  },
  calendar: {
    marginBottom: 20,
    width: '90%',
    aspectRatio: 1,
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
  },
  buttonContainer: {
    marginTop: 40,
    width: '90%',
  },
});

export default RecoleccionScreen;
