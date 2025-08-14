import HeaderDisplay from "./resume-components/HeaderDisplay"
import SummaryDisplay from "./resume-components/SummaryDisplay"

export default function Resume({ formData, summaryData }) {

    return (
        <div className="resume-container">

            <HeaderDisplay formData={formData}/>
            
            <SummaryDisplay summaryData={summaryData} />


        </div>
    )
}