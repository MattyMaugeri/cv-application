
export default function EducationDisplay({ educationData }) {

    return (

        <div className="sections" id="education-section">

            <h2 className="resume-subheader">Education</h2>

            <div className="resume-subcontent">

                <nav className="subcontent-nav">
                    <h3 className="subcontent-title">{educationData.degree === "" ? 'Degree' : educationData.degree}</h3>

                    <div className="subcontent-date-containers">
                        {educationData.start === "" ? 'Start Date' : educationData.start} - {educationData.end === "" ? 'End Date' : educationData.end}
                    </div>
                </nav>

                <h4>
                    {educationData.university === "" ? 'University' : educationData.university}
                </h4>

                <h4 className="education-location">
                    {educationData.location === "" ? 'Location' : educationData.location}
                </h4>

                <div className="subcontent-description" id="education-location">
                </div>

            </div>
        </div>
    )
}