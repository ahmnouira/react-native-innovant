import * as React from 'react'
import { Sheet } from './Sheet'
import { render } from '@testing-library/react-native'
import { Options } from '../Options'

describe('Sheet', () => {
  test('render Sheet', async () => {
    const { container } = await render(
      <Sheet title='Options' onClose={() => {}} onConfirm={() => {}}>
        <Options options={[]} />
      </Sheet>
    )
    expect(container).toBeDefined()
  })
})
