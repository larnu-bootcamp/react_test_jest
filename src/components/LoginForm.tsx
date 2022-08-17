import { useState } from "react"


export default function LoginForm({ onSubmit }: { onSubmit: (values: any) => void }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues({ ...values, [name]: value });
  }

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    onSubmit(values);
  }

  return (
    <form data-testid="login-form" onSubmit={submit}>
      <label htmlFor="email">Enter email</label>
      <input id="email" name="email" type="email" placeholder="Enter email" onChange={handleChange} required/>
      <label htmlFor="password">Enter password</label>
      <input type="password" name="password" id="password" onChange={handleChange} required/>
      <button type="submit"> Login</button>
    </form>
  )
}