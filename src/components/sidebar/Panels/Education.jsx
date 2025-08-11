import Button from "../Button.jsx";

export default function Education({ isToggled, onShow }) {

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header="Education" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="education-content">
                    <div className="education-list"></div>
                    <form className="panels-form" id="education-form">
                        <label>Degree</label>
                        <input type="text" placeholder="Enter your degree"></input>

                        <label>University</label>
                        <input type="text" placeholder="Enter School/ University"></input>

                        <label>Start Date</label>
                        <input type="date"></input>

                        <label>End Date</label>
                        <input type="date"></input>
                    </form>

                    <button>Add Education</button>
                </div>
            ) : ""}



        </div>
    )
}