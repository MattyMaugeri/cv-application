import Button from "../Button.jsx";

export default function Education({ isToggled, onShow }) {

    return (
        <div className="sidebar-card">
            <div className="sidebar-headers">
                <Button header="Education" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="education-content">
                    <div className="education-list"></div>
                    <form >
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