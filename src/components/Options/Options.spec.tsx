import * as React from 'react'
import { Options, OptionType } from './Options'
import { render } from '@testing-library/react-native'

describe('Options', () => {
  test('it render empty Options', async () => {
    const { container } = await render(<Options options={[]} />)
    expect(container).toBeDefined()
  })

  test('it render Options with icon', async () => {
    const options: OptionType[] = [
      {
        icon: 'edit',
        title: 'Edit book',
        onPress: () => {},
      },
    ]
    const { container } = await render(<Options options={options} />)
    expect(container).toBeDefined()
  })

  test('it render Options with icon and without icon', async () => {
    const options: OptionType[] = [
      {
        icon: 'edit',
        title: 'Edit book',
        onPress: () => {},
      },
      {
        title: 'delete book',
        onPress: () => {},
      },
    ]
    const { container } = await render(<Options options={options} />)
    expect(container).toBeDefined()
  })
})
