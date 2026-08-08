import { render, screen } from '@testing-library/react';
import App from './App';
import {it,test,expect} from 'vitest'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("sujon biswas");
  expect(linkElement).toBeInTheDocument();
});

