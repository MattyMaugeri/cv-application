import Button from "../Button.jsx";

export default function Education({ isToggled, onShow }) {

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header="Education" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="education-content">
                    <form className="panels-form" id="education-form">
                        <label>Degree</label>
                        <input type="text" placeholder="Enter your degree"></input>

                        <label>University</label>
                        <input type="text" placeholder="Enter School/ University"></input>

                        <div className="date-spans">
                            <span className="date-span">
                                <label>Start Date</label>
                                <input type="date"></input>
                            </span>

                            <span className="date-span">
                                <label>End Date</label>
                                <input type="date"></input>
                            </span>
                        </div>

                        <label>Location</label>
                        <input type="text" placeholder="Enter Country" />
                    </form>

                    <button className="add-btns" id="add-education-btn">Add Education</button>

                    <div className="education-list"></div>

                </div>
            ) : ""}



        </div>
    )
}