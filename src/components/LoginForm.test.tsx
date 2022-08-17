

import { describe, test, vi } from 'vitest'
import { render, screen, userEvent, waitFor } from "../utils/test-utils";
import LoginForm from "./LoginForm";

describe("Count", () => {
  const submit = vi.fn();
  
  beforeEach(() => {
    submit.mockClear();
    render(<LoginForm onSubmit={submit} />);
  });

  test('click submit with wrong email', async () => {
    await userEvent.type(getEmail(), 'a');
    await userEvent.click(getSubmit());
    expect(submit).toHaveBeenCalledTimes(0);
  });

  test('click submit with correct email and password', async () => {
    await userEvent.type(getEmail(), 'test@email.com');
    await userEvent.type(getPassword(), 'test');
    await userEvent.click(getSubmit());
    await waitFor(() => {
      expect(submit).toHaveBeenCalledWith({'email': 'test@email.com', "password": 'test'});
    });
    expect(submit).toHaveBeenCalledTimes(1)
  });
});

function getEmail() {
  return screen.getByRole('textbox', {
    name: /enter email/i
  });
}

function getPassword() {
  return screen.getByLabelText(/enter password/i);
}

function getSubmit() {
  return screen.getByRole('button', {
    name: /login/i
  })
}

function getForm() {
  return screen.getByTestId('form');
}

