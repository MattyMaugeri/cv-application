import Button from "../Button.jsx";

export default function PersonalDetailsPanel({ isToggled, onShow }) {

    return (
        <div className="sidebar-card">
            <div className="sidebar-headers">
                <Button header='Personal Details' handleClick={onShow} />
            </div>

            {isToggled ? (
                <form className="sidebar-form" id="personal-form">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter Full Name" />

                    <label>Email</label>
                    <input type="text" placeholder="Enter Email" />

                    <label>Phone Number</label>
                    <input type="text" placeholder="Enter Phone Number" />

                    <label>Address</label>
                    <input type="text" placeholder="Enter Address" />
                </form>
            ) : ""}

        </div>

    )
}