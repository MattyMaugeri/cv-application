
export default function ExperienceDisplay({ experienceData }) {

    return (

        <div className="sections" id="experience-section">

            <h2 className="resume-subheader">Experience</h2>

            <div className="resume-subcontent">

                <nav className="subcontent-nav">
                    <h3 className="subcontent-title" id="experience-job-title">{experienceData.title.length <= 0 ? 'Job Title' : experienceData.title}</h3>

                    <div className="subcontent-date-containers">
                        {experienceData.start === "" ? 'Start Date' : experienceData.start} - {experienceData.end === "" ? 'End Date' : experienceData.end}
                    </div>
                </nav>

                <h5 className="subcontent-subtitle" id="experience-company-name">{experienceData.company.length <= 0 ? 'Company' : experienceData.company}</h5>

                <div className="subcontent-description" id="experience-description">{experienceData.description.length <= 0 ? 'Brief job description' : experienceData.description}</div>

            </div>
        </div>
    )
}