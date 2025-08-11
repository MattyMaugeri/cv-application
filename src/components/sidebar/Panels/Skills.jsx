import Button from "../Button.jsx";

export default function Skills({ isToggled, onShow }) {

    return (

        <div className="panels">
            <div className="panels-headers">
                <Button header="Skills" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="skills-content">
                    <input placeholder="Add new skill..."></input>

                    <button>Add Skill</button>
                </div>
            ) : ""}


        </div>
    )
}