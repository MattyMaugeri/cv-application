import Button from "../Button.jsx";

export default function PersonalDetails({ isToggled, onShow, formData, setFormData }) {

    function handleNameChange(e) {
        setFormData(prev => ({ ...prev, name: e.target.value }));
    }

    function handleTitleChange(e) {
        setFormData(prev => ({ ...prev, title: e.target.value }));
    }

    function handleEmailChange(e) {
        setFormData(prev => ({ ...prev, email: e.target.value }));
    }

    function handlePhoneChange(e) {
        setFormData(prev => ({ ...prev, phone: e.target.value }));
    }

    function handleAddressChange(e) {
        setFormData(prev => ({ ...prev, address: e.target.value }));
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

                    <label>Title</label>
                    <CustomInput
                        value={formData.title}
                        onChange={handleTitleChange}
                        placeholder="Enter Title / Tag Line"
                    />

                    <label>Email</label>
                    <CustomInput
                        value={formData.email}
                        onChange={handleEmailChange}
                        placeholder="Enter Email"
                    />

                    <label>Phone Number</label>
                    <CustomInput
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="Enter Phone Number"
                    />

                    <label>Address</label>
                    <CustomInput
                        value={formData.address}
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