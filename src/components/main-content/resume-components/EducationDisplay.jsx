import EducationListitem from "./EducationListItem.jsx";

export default function EducationDisplay({ educationData, educationList }) {

    return (

        <div className="sections" id="education-section">

            <h2 className="resume-subheader">Education</h2>

            <div className="resume-subcontent-display">

                <nav className="subcontent-nav">
                    <h3 className="subcontent-title">{educationData.degree}</h3>

                    <div className="subcontent-date-containers">
                        {educationData.start} - {educationData.end}
                    </div>
                </nav>

                <h4 className="subcontent-subtitle">
                    {educationData.university}
                </h4>

                <h4 className="education-location">
                    {educationData.location}
                </h4>

                <div className="subcontent-description" id="education-location"></div>

            </div>

            <ul className="resume-education-list">
                {educationList.map((education) => {
                    return <EducationListitem key={education.id} education={education} />
                })}
            </ul>



        </div>
    )
}