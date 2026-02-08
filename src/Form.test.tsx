import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Form from './form'
import { vi } from 'vitest'
import '@testing-library/jest-dom'


describe('Form component', () => {
  it('renders all inputs and button', () => {
    render(<Form setIsSubmitted={vi.fn()} />)

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /confirm registration/i }))
      .toBeInTheDocument()
  })

  it('shows validation errors when submitting empty form', async () => {
    render(<Form setIsSubmitted={vi.fn()} />)

    await userEvent.click(
      screen.getByRole('button', { name: /confirm registration/i })
    )

    expect(
      screen.getByText(/please enter at least 2 characters/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/please enter your email address/i)
    ).toBeInTheDocument()

    expect(
      screen.getByText(/phone number is required/i)
    ).toBeInTheDocument()
  })

  it('submits form when data is valid', async () => {
    const setIsSubmitted = vi.fn()

    render(<Form setIsSubmitted={setIsSubmitted} />)

    await userEvent.type(
      screen.getByLabelText(/full name/i),
      'John Doe'
    )
    await userEvent.type(
      screen.getByLabelText(/email/i),
      'john@example.com'
    )
    await userEvent.type(
      screen.getByLabelText(/phone/i),
      '1551234567'
    )

    await userEvent.click(
      screen.getByRole('button', { name: /confirm registration/i })
    )

    expect(setIsSubmitted).toHaveBeenCalledWith(true)
  })
})
