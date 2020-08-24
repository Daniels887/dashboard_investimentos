import React from 'react'
import renderer from 'react-test-renderer'
import Infos from '../src/components/Infos'
import { store } from '../src/store'
import { Provider } from 'react-redux'

it('Infos renders correctly', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <Infos showValues={true} />
      </Provider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
