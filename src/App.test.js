import { render, screen, fireEvent  } from '@testing-library/react';
import App, { camelCaseToSpaced } from './App';

test('Button is present and has correct initial text', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {name: 'Change to red'});
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'})
  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveStyle({backgroundColor: 'red'})
  expect(buttonElement.textContent).toBe('Change to blue')
});

test('Checkbox and Button are present with correct initial state', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: 'Checkbutton'})
  const checkbox = screen.getByRole('checkbox')
  expect(button).toBeInTheDocument()
  expect(checkbox).toBeInTheDocument()
  expect(button).toBeEnabled()
  expect(checkbox).not.toBeChecked()
})

test('Button is disabled and appropriate color when checkbox is checked', () => {
  render(<App />)
  const button = screen.getByRole('button', {name: 'Checkbutton'})
  const checkbox = screen.getByRole('checkbox')
  fireEvent.click(checkbox)
  expect(checkbox).toBeChecked()
  expect(button).toBeDisabled()
  expect(button).toHaveStyle({background: 'gray'})
  fireEvent.click(checkbox)
  expect(checkbox).not.toBeChecked()
  expect(button).toBeEnabled()
  expect(button).toHaveStyle({background: 'blue'})
})

describe('Change camel cased string to space seperated string', () => {
  test('Works for non camel cased string', () => {
    expect(camelCaseToSpaced('red')).toBe('red')
  })
  test('Works for camel cased string with one inner upper cased letter', () => {
    expect(camelCaseToSpaced('midnightBlue')).toBe('midnight Blue')
  })
  test('Works for camel cased string with multiple inner upper cased letter', () => {
    expect(camelCaseToSpaced('darkVioletRed')).toBe('dark Violet Red')
  })
})