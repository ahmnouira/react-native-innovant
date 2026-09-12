import {
  Container,
  Button,
  ThemeProvider,
  ContextWrapper,
} from 'react-native-innovant';

export const OldDemo = () => {
  return (
    <ThemeProvider>
      <ContextWrapper>
        <Container>
          <Button title="Submit" />
        </Container>
      </ContextWrapper>
    </ThemeProvider>
  );
};
