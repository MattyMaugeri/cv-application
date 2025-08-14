import Button from "../Button.jsx";

export default function Experience({ isToggled, onShow, experienceFormData, setExperienceFormData }) {

    function handleTitleChange(e) {
        setExperienceFormData(prev => ({ ...prev, title: e.target.value }));
    }

    function handleCompanyChange(e) {
        setExperienceFormData(prev => ({ ...prev, company: e.target.value }));
    }

    function handleStartDateChange(e) {
        setExperienceFormData(prev => ({ ...prev, start: e.target.value }));
    }

    function handleEndDateChange(e) {
        setExperienceFormData(prev => ({ ...prev, end: e.target.value }));
    }

    function handleDescriptionChange(e) {
        setExperienceFormData(prev => ({ ...prev, description: e.target.value }));
    }

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header='Experience' handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="experience-content">

                    <form className="panels-form" id="experience-form">
                        <label>Position Title</label>
                        {/* <input type="text" placeholder="Enter Position Title"></input> */}
                        <CustomInput
                            type="text"
                            value={experienceFormData.title}
                            onChange={handleTitleChange}
                            placeholder="Enter Position Title"
                        />

                        <label>Company Name</label>
                        <CustomInput
                            type="text"
                            value={experienceFormData.company}
                            onChange={handleCompanyChange}
                            placeholder="Enter Company Name"
                        />

                        <div className="date-spans">
                            <span className="date-span">
                                <label>Start Date</label>
                                <CustomInput
                                    type="date"
                                    value={experienceFormData.start}
                                    onChange={handleStartDateChange}
                                />
                            </span>

                            <span className="date-span">
                                <label>End Date</label>
                                <CustomInput
                                    type="date"
                                    value={experienceFormData.end}
                                    onChange={handleEndDateChange}
                                />
                            </span>
                        </div>

                        <label>Description</label>
                        <CustomTextarea
                            value={experienceFormData.description}
                            onChange={handleDescriptionChange}
                            id="experience-description"
                            placeholder="Enter Brief Job Description"
                        />
                    </form>

                    <button className="add-btns" id="add-experience-btn">Add Experience</button>

                    <div id="experience-list"></div>

                </div>
            ) : ""}


        </div>
    )
}

function CustomInput({ type, value, onChange, placeholder }) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

function CustomTextarea({ value, onChange, id, placeholder }) {

    return (
        <textarea
            value={value}
            onChange={onChange}
            id={id}
            placeholder={placeholder}
        />
    )
}