
export default function SkillsDisplay({ skillsData }) {

    return (
        <div className="sections" id="skills-section">

            <h2 className="skills-header">Skills</h2>

            <ul className="resume-skills-list">
                {skillsData.map((skill) => {
                    return (
                        <li key={skill.id} className="resume-skills-list-item">
                            {skill.value}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}