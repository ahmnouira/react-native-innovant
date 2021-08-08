import * as React from 'react'
import { fireEvent, render } from '@testing-library/react-native'
import { PillList } from './PillList'
import { DANCES } from '../../utils/consts'

describe('PillList', () => {
  test('should render PillList', async () => {
    let selected2RandomDances = []
    for (let index = 0; index < Math.floor(DANCES.length / 2); index++) {
      const item = DANCES[Math.floor(Math.random() * DANCES.length)]
      selected2RandomDances.push(item)
    }
    selected2RandomDances = [...new Set(selected2RandomDances)]
    const { getByTestId } = render(
      <PillList items={DANCES} selectedItems={selected2RandomDances} handleChange={console.log} />
    )
    const pill = getByTestId(`title-${selected2RandomDances[0]}`)
    expect(pill).toBeTruthy()
    fireEvent.press(pill)
  })
})
