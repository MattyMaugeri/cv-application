
export default function HeaderDisplay({ formData }) {

    return (
        <div className="resume-header">

            <div className="header-left">
                <h1 className="user-name">
                    {formData.name <= 0 ? 'Your Name' : formData.name}
                </h1>

                <h2 className="job-title">
                    {formData.title <= 0 ? 'Your Title' : formData.title}
                </h2>
            </div>

            <div className="header-right">
                <ul className="contact-list">
                    <li className="contact-list-item" id="email">
                        {formData.email.length <= 0 ? 'Your Email' : formData.email}
                    </li>

                    <li className="contact-list-item" id="phone">
                        {formData.phone.length <= 0 ? 'Your Phone Number' : formData.phone}
                    </li>

                    <li className="contact-list-item" id="address">
                        {formData.address.length <= 0 ? 'Your Address' : formData.address}
                    </li>
                </ul>

            </div>

        </div>
    )
}