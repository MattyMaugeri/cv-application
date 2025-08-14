import { useState } from "react";
import Button from "../Button.jsx";

export default function Skills({ isToggled, onShow }) {
    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');

    function handleAddSkill() {
        setSkills([...skills, { id: crypto.randomUUID(), value: inputValue }]);
        setInputValue('');
    }

    function handleDeleteSkill(id) {
        const newSkills = skills.filter(skill => skill.id !== id);
        setSkills(newSkills);
    }

    return (
        <div className="panels">
            <div className="panels-headers">
                <Button header="Skills" handleClick={onShow} />
            </div>

            {isToggled ? (
                <div className="panels-content" id="skills-content">
                    <div className="skills-nav">

                        <input
                            type="text"
                            placeholder="Enter a skill..."
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                        />

                        <button
                            className="add-btns"
                            id="add-skills-btn"
                            onClick={handleAddSkill}
                        >
                            Add Skill</button>
                    </div>

                    <SkillsList skills={skills} handleDelete={handleDeleteSkill} />

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