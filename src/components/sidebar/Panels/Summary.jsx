import Button from "../Button.jsx";

export default function Summary({ isToggled, onShow }) {

    return (
        <div className="sidebar-card">
            <div className="sidebar-headers">
                <Button header="Summary" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="summary-content">
                    <textarea placeholder="Enter your summary here"></textarea>

                    <button>Delete Summary</button>
                </div>
            ) : ""}
        </div>
    )
}