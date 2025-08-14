import EducationDisplay from "./resume-components/EducationDisplay"
import ExperienceDisplay from "./resume-components/ExperienceDisplay"
import PersonalDetailsDisplay from "./resume-components/PersonalDetailsDisplay"
import SkillsDisplay from "./resume-components/SkillsDisplay"
import SummaryDisplay from "./resume-components/SummaryDisplay"

export default function Resume({ personalDetailsData, summaryData, skillsData, experienceData, educationData }) {

    return (
        <div className="resume-container">

            <PersonalDetailsDisplay personalDetailsData={personalDetailsData} />

            <SummaryDisplay summaryData={summaryData} />

            <SkillsDisplay skillsData={skillsData} />

            <ExperienceDisplay experienceData={experienceData} />

            <EducationDisplay educationData={educationData} />



        </div>
    )
}