
export default function ExperienceListItem({ experience }) {

    return (
        <li className="experience-list-item">
            <div className="resume-subcontent">

                <nav className="subcontent-nav">
                    <h3 className="subcontent-title" id="experience-job-title">{experience.title}</h3>

                    <div className="subcontent-date-containers">
                        {experience.start} - {experience.end}
                    </div>
                </nav>

                <h5 className="subcontent-subtitle" id="experience-company-name">{experience.company}</h5>

                <div className="subcontent-description" id="experience-description">{experience.description}</div>
            </div>

        </li>
    )

}