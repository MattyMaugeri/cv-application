import { useState } from 'react'
import Sidebar from './components/sidebar/Sidebar'
import './styles/App.css'
import Resume from './components/main-content/Resume'

function App() {

  const [personalDetailsData, setPersonalDetailsData] = useState({
    name: '',
    title: '',
    email: '',
    phone: '',
    address: ''
  });

  const [summaryData, setSummaryData] = useState('');

  const [skillsData, setSkillsData] = useState([]);

  const [experienceData, setExperienceData] = useState({
    title: '',
    company: '',
    start: '',
    end: '',
    description: ''
  });

  const [educationData, setEducationData] = useState({
    degree: '',
    university: '',
    start: '',
    end: '',
    location: ''
  })

  return (
    <>

      <Sidebar
        personalDetailsData={personalDetailsData} setPersonalDetailsData={setPersonalDetailsData}
        summaryData={summaryData} setSummaryData={setSummaryData}
        skillsData={skillsData} setSkillsData={setSkillsData}
        experienceData={experienceData} setExperienceData={setExperienceData}
        educationData={educationData} setEducationData={setEducationData}
      />

      <Resume
        personalDetailsData={personalDetailsData}
        summaryData={summaryData}
        skillsData={skillsData}
        experienceData={experienceData}
        educationData={educationData}
      />

    </>
  )
}

export default App
