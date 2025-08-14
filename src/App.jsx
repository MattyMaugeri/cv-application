import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import './styles/App.css'
import Resume from './components/main-content/Resume'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  return (
    <>
      <Sidebar formData={formData} setFormData={setFormData}/>

      <Resume formData={formData}/>

    </>
  )
}

export default App
