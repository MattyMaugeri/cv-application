import Button from "../Button.jsx";

export default function Summary({ isToggled, onShow, summaryData, setSummaryData }) {

    function handleSummaryChange(e) {
        setSummaryData(e.target.value);
    }

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header="Summary" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="summary-content">
                    <textarea
                        id="summary-input"
                        placeholder="Enter your summary here"
                        value={summaryData}
                        onChange={handleSummaryChange}>
                    </textarea>

                    <button id="delete-summary-btn" className="delete-btns">Delete Summary</button>
                </div>
            ) : ""}
        </div>
    )
}