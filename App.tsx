import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import HackerScreen from './src/components/screens/HackerScreen/HackerScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='#000000'
        translucent={false}
      />
      <HackerScreen />
    </>
  );
}


export default App;
