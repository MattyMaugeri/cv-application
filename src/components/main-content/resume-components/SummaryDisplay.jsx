
export default function SummaryDisplay({ summaryData }) {

    return (
        <div className="resume-summary">

            <h2 className="summary-header">Summary</h2>

            <div className="summary-description">
                {summaryData.length <= 0 ? 'Professional Summary' : summaryData}
            </div>
        </div>
    )
}