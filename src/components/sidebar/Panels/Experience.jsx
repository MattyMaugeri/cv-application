import Button from "../Button.jsx";

export default function Experience({ isToggled, onShow }) {

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header='Experience' handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="experience-content">
                    <form className="panels-form" id="experience-form">
                        <label>Position Title</label>
                        <input type="text" placeholder="Enter Position Title"></input>

                        <label>Company Name</label>
                        <input type="text" placeholder="Enter Company Name"></input>

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

                        <label>Description</label>
                        <textarea name="experience-desc" id="experience-desc" placeholder="Enter Brief Job Description"></textarea>
                    </form>

                    <button className="add-btns" id="add-experience-btn">Add Experience</button>

                    <div id="experience-list"></div>

                </div>
            ) : ""}


        </div>
    )
}