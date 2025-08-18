
export default function SummaryDisplay({ summaryData }) {

    return (
        <div className="sections" id="summary-section">

            <div className="resume-subcontent-display">


                <h2 className="summary-header">Summary</h2>

                <div className="summary-description">
                    {summaryData.length <= 0 ? 'Professional Summary' : summaryData}
                </div>
            </div>
            
        </div>

    )
}