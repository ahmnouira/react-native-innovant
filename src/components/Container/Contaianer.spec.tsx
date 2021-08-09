import * as React from 'react'
import { render } from '@testing-library/react-native'
import { Container } from './Container'
import { ThemeProvider } from '../../context/theme.context'
import { theme } from '../../shared/theme'

describe('Container', () => {
  it('render Container', () => {
    const {} = render(<Container />)
  })
  it('render secondary contianer', () => {
    const {} = render(<Container secondary />)
  })

  it('should render correctly with theme provider', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Container />
      </ThemeProvider>
    )
    expect(container).toBeDefined()
  })
})
