
export default function Header({ formData }) {

    return (
        <div className="resume-header">

            <div className="header-left">
                <h2 className="user-name">{formData.name}</h2>

                <h4 className="job-title">Unemployed</h4>
            </div>


            <div className="header-right">
                <ul className="contact-list">
                    <li className="contact-list-item" id="email">Email</li>
                    <li className="contact-list-item" id="phone">Phone</li>
                    <li className="contact-list-item" id="address">Address</li>
                </ul>

            </div>

        </div>
    )
}