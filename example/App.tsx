import React, { useRef, useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import {
  Badge,
  Box,
  BoxList,
  Button,
  CheckBox,
  Container,
  ContextWrapper,
  Empty,
  ErrorState,
  IconButton,
  Image,
  KeyboardAvoiding,
  Loading,
  MiscField,
  Modal,
  Options,
  Pill,
  PillList,
  RadioBox,
  Sheet,
  Status,
  SwitchField,
  Text,
  ThemeProvider,
  useTheme,
  useUtils,
} from 'react-native-innovant'

const genres = ['Hip-Hop', 'R&B', 'Pop', 'Electro']

const instruments = [
  { title: 'Guitar', icon: { uri: 'https://placehold.co/24/151515/FFFFFF?text=G' } },
  { title: 'Piano', icon: { uri: 'https://placehold.co/24/151515/FFFFFF?text=P' } },
  { title: 'Drums', icon: { uri: 'https://placehold.co/24/151515/FFFFFF?text=D' } },
]

const App = () => {
  return (
    <ThemeProvider>
      <ContextWrapper>
        <KeyboardAvoiding>
          <Container>
            <Status barStyle='light-content' />
            <DemoScreen />
          </Container>
        </KeyboardAvoiding>
      </ContextWrapper>
    </ThemeProvider>
  )
}

export default App

const DemoScreen = () => {
  const theme = useTheme()
  const { dispatch } = useUtils()
  const sheetRef = useRef<any>(null)

  const [selectedGenres, setSelectedGenres] = useState<string[]>(['Pop'])
  const [selectedInstruments, setSelectedInstruments] = useState<string[]>(['Piano'])
  const [switchOn, setSwitchOn] = useState(false)
  const [checkboxChecked, setCheckboxChecked] = useState(false)
  const [radioChecked, setRadioChecked] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const toggleGenre = (item: string) =>
    setSelectedGenres((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))

  const toggleInstrument = (item: any) =>
    setSelectedInstruments((prev) =>
      prev.includes(item.title) ? prev.filter((i) => i !== item.title) : [...prev, item.title]
    )

  const showToast = () =>
    dispatch({ type: 'SET_TOAST', payload: { message: 'Hello from a toast!', visible: true, postion: 'top' } })

  const section = (title: string) => (
    <Text font='bold' size={16} style={styles.section}>
      {title}
    </Text>
  )

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text font='bold' size={22}>
        react-native-innovant
      </Text>
      <Text>A showcase of every component in the library.</Text>

      {section('Feedback')}
      <View style={styles.row}>
        <Badge text='New' bgColor={theme?.colors.primary} />
        <Badge text='Beta' bgColor={theme?.colors.light} />
      </View>
      <Loading center />
      <Button title='Show Toast' onPress={showToast} />
      <Button title='Loading Button' isLoading={loading} onPress={() => setLoading((prev) => !prev)} />

      {section('Selection')}
      <Pill
        title={genres[0]}
        isChecked={selectedGenres.includes(genres[0])}
        handlePress={() => toggleGenre(genres[0])}
      />
      <PillList items={genres} selectedItems={selectedGenres} handleChange={toggleGenre} />
      <BoxList items={instruments} selectedItems={selectedInstruments} handleChange={toggleInstrument} />
      <Text>Selected: {selectedGenres.join(', ') || 'none'}</Text>

      {section('Fields')}
      <SwitchField label='Notifications' value={switchOn} onValueChange={setSwitchOn} />
      <MiscField label='Version' value='0.3.1' primary />
      <View style={styles.row}>
        <CheckBox color={theme?.colors.primary} checked={checkboxChecked} />
        <RadioBox color={theme?.colors.primary} checked={radioChecked} />
        <Button title={checkboxChecked ? 'Checked' : 'Check'} onPress={() => setCheckboxChecked((prev) => !prev)} />
      </View>
      <Box title='Guitar' pic={instruments[0].icon} isChecked handlePress={() => {}} />

      {section('Info & Media')}
      <Empty message='Nothing found' subMessage='Try another search' />
      <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.image as any} />
      <MiscField label='Profile' primary onPress={() => {}} />
      <IconButton icon='heart' onPress={() => {}} color='#ED1E46' />

      {section('Overlays')}
      <Button title='Open Modal' onPress={() => setModalVisible(true)} />
      <Button title='Open Bottom Sheet' onPress={() => sheetRef.current?.open()} />
      <Button title='Open Error State' onPress={() => {}} />
      <View style={styles.row}>
        <Options
          options={[
            { title: 'Edit Profile', icon: 'edit', onPress: () => {} },
            { title: 'Report a bug', icon: 'exclamationcircleo', onPress: () => {} },
          ]}
        />
      </View>

      <ErrorState error='Network request failed' />

      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} title='Settings'>
        <Text>This is a fully customizable modal.</Text>
        <Button title='Close' onPress={() => setModalVisible(false)} />
      </Modal>

      <Sheet ref={sheetRef} title='Choose an option' onClose={() => sheetRef.current?.close()}>
        <PillList items={genres} selectedItems={selectedGenres} handleChange={toggleGenre} />
      </Sheet>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16, paddingBottom: 80 },
  section: { marginTop: 16, marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center', marginVertical: 4 },
  image: { width: 120, height: 120 },
})
