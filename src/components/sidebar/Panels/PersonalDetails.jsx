import Button from "../Button.jsx";

function CustomInput({ value, onChange, placeholder }) {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}


export default function PersonalDetails({ isToggled, onShow, formData, setFormData }) {

    function handleNameChange(e) {
        setFormData(prev => ({ ...prev, name: e.target.value }))
    }

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header='Personal Details' handleClick={onShow} />
            </div>

            {isToggled ? (
                <form className="panels-form" id="personal-form">
                    <label>Full Name</label>
                    <CustomInput
                        value={formData.name}
                        onChange={handleNameChange}
                        placeholder="Enter Full Name" />

                    <label>Email</label>
                    
                    <input name="email" placeholder="Enter Email" />

                    <label>Phone Number</label>
                    <input name="phone" placeholder="Enter Phone Number" />

                    <label>Address</label>
                    <input name="address" placeholder="Enter Address" />
                </form>
            ) : ""}

        </div>

    )
}