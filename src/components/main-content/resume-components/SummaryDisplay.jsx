
export default function SummaryDisplay({ summaryData }) {

    return (
        <div className="resume-summary">

            <h3 className="summary-header">Summary</h3>

            <div className="summary-description">
                {summaryData.length <= 0 ? 'Professional Summary' : summaryData}
            </div>
        </div>
    )
}