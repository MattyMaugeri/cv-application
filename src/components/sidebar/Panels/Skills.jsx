import { useState } from "react";
import Button from "../Button.jsx";

export default function Skills({ isToggled, onShow, skillsData, setSkillsData }) {
    const [inputValue, setInputValue] = useState('');

    function handleAddSkill() {
        setSkillsData([...skillsData, { id: crypto.randomUUID(), value: inputValue }]);
        setInputValue('');
    }

    function handleDeleteSkill(id) {
        const newSkills = skillsData.filter(skill => skill.id !== id);
        setSkillsData(newSkills);
    }

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header="Skills" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="skills-content">
                    <div className="skills-nav">

                        <CustomInput
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Enter a skill..."
                        />

                        <button
                            className="add-btns"
                            id="add-skills-btn"
                            onClick={handleAddSkill}
                        >
                            Add Skill</button>
                    </div>

                    <SkillsList skills={skillsData} handleDelete={handleDeleteSkill} />

                </div>
            ) : ""}


        </div>
    )
}

function SkillsList({ skills, handleDelete }) {

    return (
        <ul className="skills-list">
            {skills.map((skill) => {
                return (
                    <li key={skill.id} className="skills-list-item">
                        <p className="skill-value">{skill.value}</p>
                        <button className="delete-btns" id="delete-skill-btn" onClick={() => handleDelete(skill.id)}>Remove</button>
                    </li>

                )
            })}
        </ul>
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