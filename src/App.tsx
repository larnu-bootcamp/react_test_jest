import './App.css'
import Count from './components/Count'
import LoginForm from './components/LoginForm'

function App() {

  function submit(data: any) {
    console.log('submit')
  }
  return (
    <div className="App">
      <Count />
      <LoginForm onSubmit={submit}/>
    </div>
  )
}

export default App
