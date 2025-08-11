import { useState } from "react";
import Button from "../Button.jsx";

function CustomInput({ placeholder }) {
    const [value, setValue] = useState("");

    return (
        <input
            type="text"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={placeholder}
        />
    );
}


export default function PersonalDetailsPanel({ isToggled, onShow }) {
    const [name, setName] = useState('');

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header='Personal Details' handleClick={onShow} />
            </div>

            {isToggled ? (
                <form className="panels-form" id="personal-form">
                    <label>Full Name</label>
                    <CustomInput placeholder="Enter Full Name" />

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