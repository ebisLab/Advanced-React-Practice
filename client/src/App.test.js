  import React from 'react';
import ReactDOM from 'react-dom';
import {render} from '@testing-library/react'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Nav title render correctly', () =>{
  //arrange
  const {getByText} = render(<App />)
  //act
  const title = getByText(/Soccer Player/i)
  //assert
  expect(title).toBeInTheDocument();
})

