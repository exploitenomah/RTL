import { render, screen, fireEvent  } from '@testing-library/react';
import App from './App';

test('Button is present and has correct initial text', () => {
  render(<App />);
  const buttonElement = screen.getByRole('button', {name: 'Change to red'});
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toHaveStyle({backgroundColor: 'blue'})
  fireEvent.click(buttonElement)
  expect(buttonElement).toHaveStyle({backgroundColor: 'red'})
  expect(buttonElement.textContent).toBe('Change to blue')
}); 