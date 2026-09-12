import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeType } from 'react-native-innovant';
import {
  Badge,
  Box,
  Button,
  Loading,
  Modal,
  Options,
  Pill,
  RadioBox,
  Status,
  Text,
} from 'react-native-innovant';

export default function App() {
  const items = [
    { title: 'Guitar', icon: require('./assets/double-bass.png') },
    { title: 'Piano', icon: require('./assets/piano.png') },
  ];

  const genres = ['Hip-Hop', 'R&B', 'Pop', 'Electro'];

  const [selected, setSelected] = useState<any>(items[0]);
  const [visible, setVisible] = useState(false);
  const [on, setOn] = useState(false);

  const theme: ThemeType = {
    fonts: {
      primary: { regular: 'Poppins-Regular', bold: 'Poppins-Bold' },
      secondary: {
        regular: 'Montserrat-Regular',
        bold: 'Montserrat-Bold',
        medium: 'Montserrat-Medium',
      },
    },
    colors: {
      primary: '#ED1E46',
      light: '#F68955',
      secondary: 'rgba(0, 0, 0, .5)',
      tertiary: 'rgba(0, 0, 0, .2)',
      black: '#151515',
      white: '#FFF',
    },
    sizes: { xm: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24 },
  };

  return (
    <View style={styles.container}>
      <Status />
      <Text font="bold" size={16}>
        Bold header
      </Text>
      <Text>Regular body</Text>
      <Badge text="New" bgColor="#ED1E46" />
      <Badge text="Beta" bgColor="#F68955" textColor="#FFFFFF" />
      <View style={styles.center}>
        <Box
          title="Guitar"
          pic={require('./assets/violin.png')}
          isChecked
          handlePress={() => {}}
        />
      </View>

      <Button title="Submit" isLoading={false} onPress={() => {}} />
      <Button title="Loading…" isLoading />
      <Loading size="large" />

      <Modal
        visible={visible}
        onClose={() => setVisible(false)}
        title="Settings"
      >
        <Text>Modal content goes here.</Text>
      </Modal>
      <Options
        options={[
          { title: 'Edit Profile', icon: 'edit', onPress: () => {} },
          { title: 'Report', icon: 'exclamationcircleo', onPress: () => {} },
        ]}
      />
      <Pill title="Hip-Hop" isChecked handlePress={() => {}} />
      <RadioBox color="#ED1E46" checked />
    </View>
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
