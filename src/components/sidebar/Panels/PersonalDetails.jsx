import Button from "../Button.jsx";

export default function PersonalDetails({ isToggled, onShow, personalDetailsData, setPersonalDetailsData }) {

    function handleNameChange(e) {
        setPersonalDetailsData(prev => ({ ...prev, name: e.target.value }));
    }

    function handleTitleChange(e) {
        setPersonalDetailsData(prev => ({ ...prev, title: e.target.value }));
    }

    function handleEmailChange(e) {
        setPersonalDetailsData(prev => ({ ...prev, email: e.target.value }));
    }

    function handlePhoneChange(e) {
        setPersonalDetailsData(prev => ({ ...prev, phone: e.target.value }));
    }

    function handleAddressChange(e) {
        setPersonalDetailsData(prev => ({ ...prev, address: e.target.value }));
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
                        value={personalDetailsData.name}
                        onChange={handleNameChange}
                        placeholder="Enter Full Name" />

                    <label>Title</label>
                    <CustomInput
                        value={personalDetailsData.title}
                        onChange={handleTitleChange}
                        placeholder="Enter Title / Tag Line"
                    />

                    <label>Email</label>
                    <CustomInput
                        value={personalDetailsData.email}
                        onChange={handleEmailChange}
                        placeholder="Enter Email"
                    />

                    <label>Phone Number</label>
                    <CustomInput
                        value={personalDetailsData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter Phone Number"
                    />

                    <label>Address</label>
                    <CustomInput
                        value={personalDetailsData.address}
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