import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import './styles/App.css'
import Resume from './components/main-content/Resume'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    address: ''
  });

  const [summaryData, setSummaryData] = useState('');

  return (
    <>
      <Sidebar 
      formData={formData} setFormData={setFormData} 
      summaryData={summaryData} setSummaryData={setSummaryData}/>

      <Resume formData={formData} summaryData={summaryData}/>

    </>
  )
}

export default App
