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

  const [skillsData, setSkillsData] = useState([]);

  return (
    <>
      <Sidebar
        formData={formData} setFormData={setFormData}
        summaryData={summaryData} setSummaryData={setSummaryData}
        skillsData={skillsData} setSkillsData={setSkillsData}
      />

      <Resume
        formData={formData}
        summaryData={summaryData}
        skillsData={skillsData}
      />


    </>
  )
}

export default App
