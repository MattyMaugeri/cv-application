import Button from "../Button.jsx";

export default function Skills({ isToggled, onShow }) {

    return (

        <div className="sidebar-card">
            <div className="sidebar-headers">
                <Button header="Skills" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="skills-container">
                    <input placeholder="Add new skill..."></input>

                    <button>Add Skill</button>
                </div>
            ) : ""}



        </div>
    )
}