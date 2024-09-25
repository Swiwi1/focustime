import {
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from './src/utils/colors';

import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer'
import {FocusHistory} from './src/features/FocusHistory'
import { Card } from 'react-native-paper';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory]= useState([])
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject={setCurrentSubject} />
        <FocusHistory history={history}/>
        </>
      ) : (
        <Timer focusSubject={currentSubject}
        onTimerEnd={(sunject) => {
          setHistory([...history, sunject])
        }}
        clearSubject={() => setCurrentSubject(null)} 
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.green,
  },
});
