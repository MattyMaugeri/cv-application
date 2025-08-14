
export default function Header({ formData }) {

    return (
        <div className="resume-header">

            <div className="header-left">
                <h2 className="user-name">{formData.name}</h2>

                <h4 className="job-title">Unemployed</h4>
            </div>


            <div className="header-right">
                <ul className="contact-list">
                    <li className="contact-list-item" id="email">{formData.email}</li>
                    <li className="contact-list-item" id="phone">{formData.phone}</li>
                    <li className="contact-list-item" id="address">{formData.address}</li>
                </ul>

            </div>

        </div>
    )
}