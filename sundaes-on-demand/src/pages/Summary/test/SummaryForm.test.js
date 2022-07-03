
import { screen, render, fireEvent } from '@testing-library/react'
import SummaryForm from '../SummaryForm'


describe('Summary form is rendered and interactive', () => {

  test('Summary form is present', () => { 
    render(<SummaryForm />)
    expect(screen.getByRole('form', { name: /place order/i})).toBeInTheDocument()
  })

  test('Summary form has correct initial state', () => {
    render(<SummaryForm />)
    expect(screen.getByRole('checkbox', {name: /accept terms and conditons/i})).not.toBeChecked()
    expect(screen.getByRole('button', {name: /place order/i})).toBeDisabled()
  })

  test('Terms and conditions checkbox is checked when clicked', () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {name: /accept terms and conditons/i})
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
  })

  test('Button is disabled when checkbox is not checked', () => {
    render(<SummaryForm />)
    const checkbox = screen.getByRole('checkbox', {name: /accept terms and conditons/i})
    const button = screen.getByRole('button', {name: /place order/i})
    fireEvent.click(checkbox)
    expect(checkbox).toBeChecked()
    expect(button).toBeEnabled()
    fireEvent.click(checkbox)
    expect(checkbox).not.toBeChecked()
    expect(button).toBeDisabled()
  })
}) 