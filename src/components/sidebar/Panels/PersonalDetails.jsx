import Button from "../Button.jsx";

export default function PersonalDetails({ isToggled, onShow, personalFormData, setPersonalFormData }) {

    function handleNameChange(e) {
        setPersonalFormData(prev => ({ ...prev, name: e.target.value }));
    }

    function handleTitleChange(e) {
        setPersonalFormData(prev => ({ ...prev, title: e.target.value }));
    }

    function handleEmailChange(e) {
        setPersonalFormData(prev => ({ ...prev, email: e.target.value }));
    }

    function handlePhoneChange(e) {
        setPersonalFormData(prev => ({ ...prev, phone: e.target.value }));
    }

    function handleAddressChange(e) {
        setPersonalFormData(prev => ({ ...prev, address: e.target.value }));
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
                        value={personalFormData.name}
                        onChange={handleNameChange}
                        placeholder="Enter Full Name" />

                    <label>Title</label>
                    <CustomInput
                        value={personalFormData.title}
                        onChange={handleTitleChange}
                        placeholder="Enter Title / Tag Line"
                    />

                    <label>Email</label>
                    <CustomInput
                        value={personalFormData.email}
                        onChange={handleEmailChange}
                        placeholder="Enter Email"
                    />

                    <label>Phone Number</label>
                    <CustomInput
                        value={personalFormData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter Phone Number"
                    />

                    <label>Address</label>
                    <CustomInput
                        value={personalFormData.address}
                        onChange={handleAddressChange}
                        placeholder="Enter Address"
                    />

                </form>
            ) : ""}

        </div>

    )
}


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