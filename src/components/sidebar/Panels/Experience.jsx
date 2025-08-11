import Button from "../Button.jsx";

export default function Experience({ isToggled, onShow }) {

    return (
        <div className="sidebar-card">
            <div className="sidebar-headers">
                <Button header='Experience' handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="experience-content">
                    <form>

                    </form>
                </div>
            ) : ""}



        </div>
    )
}