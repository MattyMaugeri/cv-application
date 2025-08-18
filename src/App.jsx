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
    id: crypto.randomUUID(),
    title: '',
    company: '',
    start: '',
    end: '',
    description: ''
  });

  const [educationData, setEducationData] = useState({
    id: crypto.randomUUID(),
    degree: '',
    university: '',
    start: '',
    end: '',
    location: ''
  });

  const [experienceList, setExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);

  return (
    <>
      <Sidebar
        personalDetailsData={personalDetailsData} setPersonalDetailsData={setPersonalDetailsData}
        summaryData={summaryData} setSummaryData={setSummaryData}
        skillsData={skillsData} setSkillsData={setSkillsData}
        experienceData={experienceData} setExperienceData={setExperienceData} experienceList={experienceList} setExperienceList={setExperienceList}
        educationData={educationData} setEducationData={setEducationData} educationList={educationList} setEducationList={setEducationList}
      />

      <Resume
        personalDetailsData={personalDetailsData}
        summaryData={summaryData}
        skillsData={skillsData}
        experienceData={experienceData} experienceList={experienceList}
        educationData={educationData} educationList={educationList}
      />
    </>
  )
}

export default App
