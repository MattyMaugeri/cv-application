import ExperienceListItem from "./ExperienceListItem.jsx"

export default function ExperienceDisplay({ experienceData, experienceList }) {

    return (

        <div className="sections" id="experience-section">
            <h2 className="resume-subheader">Experience</h2>

            <div className="resume-subcontent-display">

                <nav className="subcontent-nav">
                    <h3 className="subcontent-title" id="experience-job-title">{experienceData.title}</h3>

                    <div className="subcontent-date-containers">
                        {experienceData.start} - {experienceData.end}
                    </div>
                </nav>

                <h5 className="subcontent-subtitle" id="experience-company-name">{experienceData.company}</h5>

                <div className="subcontent-description" id="experience-description">{experienceData.description}</div>
            </div>

            <ul className="resume-experience-list">
                {experienceList.map((experience) => {
                    return <ExperienceListItem key={experience.id} experience={experience} />
                })}
            </ul>

        </div>
    )
}