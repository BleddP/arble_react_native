import * as WebBrowser from 'expo-web-browser';
import {useState} from 'react'
import { TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import { MonoText } from '../StyledText';
import { Text, View } from '../Themed';

export default function EditScreenInfo({ path }: { path: string }) {

    const [lastName, setLastName] = useState('')
    const [confirmation, setConfirmation] = useState('')
  return (
    <View>
      <View style={styles.getStartedContainer}>

      <TextInput
        style={styles.input}
        onChangeText={setLastName}
        value={lastName}
        placeholder="Last Name"
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        onChangeText={setConfirmation}
        value={confirmation}
        placeholder="Confirmation Number"
        keyboardType="default"
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  input: {
    borderBottomColor: 'teal',
    borderBottomWidth: 1,
    width: 300,
    height: 48,
    color: 'whitesmoke'
  }
});
