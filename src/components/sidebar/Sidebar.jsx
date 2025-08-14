import { useState } from "react";
import PersonalDetails from "./Panels/PersonalDetails.jsx"
import Summary from "./Panels/Summary.jsx";
import Skills from "./Panels/Skills.jsx";
import Education from "./Panels/Education.jsx";
import Experience from "./Panels/Experience.jsx";

export default function Sidebar({
    personalFormData, setPersonalFormData,
    summaryData, setSummaryData,
    skillsData, setSkillsData,
    experienceFormData, setExperienceFormData
}) {

    const [activePanel, setActivePanel] = useState(0);

    return (
        <div className="sidebar">
            <h2 children className="sidebar-title">Edit your CV</h2>

            <PersonalDetails
                isToggled={activePanel === 0}
                onShow={() => setActivePanel(0)}
                personalFormData={personalFormData}
                setPersonalFormData={setPersonalFormData}
            />

            <Summary
                isToggled={activePanel === 1}
                onShow={() => setActivePanel(1)}
                summaryData={summaryData}
                setSummaryData={setSummaryData}
            />

            <Skills
                isToggled={activePanel === 2}
                onShow={() => setActivePanel(2)}
                skillsData={skillsData}
                setSkillsData={setSkillsData}
            />

            <Experience
                isToggled={activePanel === 4}
                onShow={() => setActivePanel(4)}
                experienceFormData={experienceFormData}
                setExperienceFormData={setExperienceFormData}
            />

            {/* <Education
                isToggled={activePanel === 3}
                onShow={() => setActivePanel(3)}
            /> */}




        </div>
    )
}