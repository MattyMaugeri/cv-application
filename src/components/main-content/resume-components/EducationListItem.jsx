
export default function EducationListitem({ education }) {

    return (
        <li className="education-list-item">
            <div className="resume-subcontent">

                <nav className="subcontent-nav">
                    <h3 className="subcontent-title">{education.degree}</h3>

                    <div className="subcontent-date-containers">
                        {education.start} - {education.end}
                    </div>
                </nav>

                <h4>{education.university}</h4>

                <h4 className="education-location">{education.location}</h4>

                <div className="subcontent-description" id="education-location"></div>

            </div>
        </li >
    )

}