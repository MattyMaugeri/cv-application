
export default function ExperienceDisplay({ experienceFormData }) {

    return (

        <div className="sections" id="experience-section">

            <h2 className="experience-header">Experience</h2>

            <div className="experience-content">

                <nav className="content-nav">
                    <h3 className="content-title" id="experience-job-title">{experienceFormData.title.length <= 0 ? 'Job Title' : experienceFormData.title}</h3>

                    <div className="date-containers">
                        {experienceFormData.start === "" ? 'Start Date' : experienceFormData.start} - {experienceFormData.end === "" ? 'End Date' : experienceFormData.end}
                    </div>
                </nav>

                <h5 className="content-subtitle" id="experience-company-title">{experienceFormData.company.length <= 0 ? 'Company' : experienceFormData.company}</h5>

                <div className="content-description" id="experience-description">{experienceFormData.description.length <= 0 ? 'Brief job description' : experienceFormData.description}</div>

            </div>
        </div>
    )
}