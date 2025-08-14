import HeaderDisplay from "./resume-components/HeaderDisplay"
import SkillsDisplay from "./resume-components/SkillsDisplay"
import SummaryDisplay from "./resume-components/SummaryDisplay"

export default function Resume({ formData, summaryData, skillsData }) {

    return (
        <div className="resume-container">

            <HeaderDisplay formData={formData}/>
            
            <SummaryDisplay summaryData={summaryData} />

            <SkillsDisplay skillsData={skillsData} />


        </div>
    )
}