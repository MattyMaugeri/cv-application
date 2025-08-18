import EducationListitem from "../../main-content/resume-components/EducationListItem.jsx";
import Button from "../Button.jsx";

export default function Education({ isToggled, onShow, educationData, setEducationData, educationList, setEducationList }) {

    function handleDegreeChange(e) {
        setEducationData(prev => ({ ...prev, degree: e.target.value }));
    }

    function handleUniversityChange(e) {
        setEducationData(prev => ({ ...prev, university: e.target.value }));
    }

    function handleStartChange(e) {
        setEducationData(prev => ({ ...prev, start: e.target.value }));
    }

    function handleEndChange(e) {
        setEducationData(prev => ({ ...prev, end: e.target.value }));
    }

    function handleLocationChange(e) {
        setEducationData(prev => ({ ...prev, location: e.target.value }));
    }

    function handleAddEducation() {
        setEducationList(prev => ([...prev, { ...educationData, id: crypto.randomUUID() }]));
    }

    function handleRemoveEducation(id) {
        const newList = educationList.filter(education => education.id !== id);
        setEducationList(newList);
    }


    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header="Education" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="education-content">

                    <form className="panels-form" id="education-form">
                        <label>Degree</label>
                        <CustomInput
                            type="text"
                            value={educationData.degree}
                            onChange={handleDegreeChange}
                            placeholder="Enter your degree"
                        />

                        <label>University</label>
                        <CustomInput
                            type="text"
                            value={educationData.university}
                            onChange={handleUniversityChange}
                            placeholder="Enter School/ University"
                        />

                        <div className="date-spans">
                            <span className="date-span">
                                <label>Start Date</label>
                                <CustomInput
                                    type="date"
                                    value={educationData.start}
                                    onChange={handleStartChange}
                                />
                            </span>

                            <span className="date-span">
                                <label>End Date</label>
                                <CustomInput
                                    type="date"
                                    value={educationData.end}
                                    onChange={handleEndChange}
                                />
                            </span>
                        </div>

                        <label>Location</label>
                        <CustomInput
                            type="text"
                            value={educationData.location}
                            onChange={handleLocationChange}
                            placeholder="Enter Country"
                        />

                    </form>

                    <button className="add-btns" id="add-education-btn" onClick={handleAddEducation}>Add Education</button>

                    <div className="sidebar-education-list-container">
                        {educationList.map((education) => {
                            return (
                                <ul key={education.id} className="sidebar-education-list">
                                    <EducationListitem education={education} />
                                    <button className="remove-education-btn" onClick={() => handleRemoveEducation(education.id)}>Delete</button>
                                </ul>
                            )
                        })}
                    </div>

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

