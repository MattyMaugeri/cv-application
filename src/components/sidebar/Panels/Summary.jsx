import Button from "../Button.jsx";

export default function Summary({ isToggled, onShow }) {

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header="Summary" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="summary-content">
                    <textarea id="summary-input" placeholder="Enter your summary here"></textarea>

                    <button id="summary-delete-btn">Delete Summary</button>
                </div>
            ) : ""}
        </div>
    )
}