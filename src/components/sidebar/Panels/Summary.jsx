import Button from "../Button.jsx";

export default function Summary({ isToggled, onShow, summaryData, setSummaryData }) {

    function handleSummaryChange(e) {
        setSummaryData(e.target.value);
    }

    function handleDeleteSummary() {
        setSummaryData('');
    }

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header="Summary" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="summary-content">
                    <CustomTextarea
                        value={summaryData}
                        onChange={handleSummaryChange}
                        id="summary-input"
                        placeholder="Enter your summary here"
                    />
                    
                    <button id="delete-summary-btn" className="delete-btns" onClick={handleDeleteSummary}>Delete Summary</button>
                </div>
            ) : ""}
        </div>
    )
}

function CustomTextarea({ value, onChange, id, placeholder }) {

    return (
        <textarea
            value={value}
            onChange={onChange}
            id={id}
            placeholder={placeholder}
        />
    )
}