import ExperienceDisplay from "./resume-components/ExperienceDisplay"
import HeaderDisplay from "./resume-components/HeaderDisplay"
import SkillsDisplay from "./resume-components/SkillsDisplay"
import SummaryDisplay from "./resume-components/SummaryDisplay"

export default function Resume({ personalFormData, summaryData, skillsData, experienceFormData }) {

    return (
        <div className="resume-container">

            <HeaderDisplay personalFormData={personalFormData}/>
            
            <SummaryDisplay summaryData={summaryData} />

            <SkillsDisplay skillsData={skillsData} />

            <ExperienceDisplay experienceFormData={experienceFormData} />


        </div>
    )
}