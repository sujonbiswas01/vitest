import './App.css'
import PrimaryButton from './components/PrimaryButton'
import UserForm from './components/users/User'

function App() {


  return (
    <div>
   <h1>sujon biswas</h1>
   <PrimaryButton action='Add'/>
   <PrimaryButton action='delete'/>
   <UserForm/>
    </div>
  )
}

export default App
