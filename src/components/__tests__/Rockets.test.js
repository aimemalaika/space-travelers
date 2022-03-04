import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Rockets from '../Rockets';
import store from '../../redux/configureStore';

describe('Test the Rockets list', () => {
  it('Rockets section renders correctly', () => {
    const rockets = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();

    expect(rockets).toMatchSnapshot();
  });
});
