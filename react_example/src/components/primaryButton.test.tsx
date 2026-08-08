import {render, screen} from '@testing-library/react'
import {it,test,expect} from 'vitest'
import PrimaryButton from './PrimaryButton';

test('renders primary button with correct action', () => {
  render(<PrimaryButton action="Add" />);
  const buttonElement = screen.getByText("click to Add");
  expect(buttonElement).toBeInTheDocument();
});

test('renders primary button with correct action', () => {
  render(<PrimaryButton action="delete" />);
  const buttonElement = screen.getByText("click to delete");
  expect(buttonElement).toBeInTheDocument();
});