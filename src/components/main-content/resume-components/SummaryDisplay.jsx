
export default function SummaryDisplay({ summaryData }) {

    return (
        <div className="sections" id="summary-section">
            <h2 className="resume-subheader">Summary</h2>

            <div className="resume-subcontent-display">


                <div className="summary-description">
                    {summaryData}
                </div>
            </div>

        </div>

    )
}