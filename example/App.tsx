import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import {
  Badge,
  Box,
  Button,
  Loading,
  Options,
  Pill,
  RadioBox,
  ThemeProvider,
} from 'react-native-innovant';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const handlePress = () => {
    Alert.alert('Pressed');
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <Badge text="New" bgColor="#ED1E46" />
          <Badge text="Beta" bgColor="#F68955" textColor="#FFFFFF" />
          <View style={styles.center}>
            <Box
              title="Guitar"
              pic={require('./assets/violin.png')}
              isChecked
              handlePress={handlePress}
            />
          </View>
          <Button title="Submit" isLoading={false} onPress={handlePress} />
          <Button title="Loading…" isLoading />
          <Loading size="large" />
          <Options
            options={[
              { title: 'Edit Profile', icon: 'edit', onPress: handlePress },
              {
                title: 'Report',
                icon: 'exclamationcircleo',
                onPress: handlePress,
              },
            ]}
          />
          <Pill title="Hip-Hop" isChecked handlePress={handlePress} />
          <RadioBox color="#ED1E46" checked />
        </View>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 32,
    marginTop: 64,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    marginHorizontal: 16,
    marginVertical: 32,
  },
});
