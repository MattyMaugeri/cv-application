import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import './styles/App.css'
import Resume from './components/main-content/Resume'

function App() {

  const [personalFormData, setPersonalFormData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    address: ''
  });

  const [summaryData, setSummaryData] = useState('');

  const [skillsData, setSkillsData] = useState([]);

  const [experienceFormData, setExperienceFormData] = useState ({
    title: '',
    company: '',
    start: '',
    end: '',
    description: ''
  });

  return (
    <>
      <Sidebar
        personalFormData={personalFormData} setPersonalFormData={setPersonalFormData}
        summaryData={summaryData} setSummaryData={setSummaryData}
        skillsData={skillsData} setSkillsData={setSkillsData}
        experienceFormData={experienceFormData} setExperienceFormData={setExperienceFormData}
      />

      <Resume
        personalFormData={personalFormData}
        summaryData={summaryData}
        skillsData={skillsData}
        experienceFormData={experienceFormData}
      />


    </>
  )
}

export default App
