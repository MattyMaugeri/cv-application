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

                    </form>
                </div>
            ) : ""}



        </div>
    )
}