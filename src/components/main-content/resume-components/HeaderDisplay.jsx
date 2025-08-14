
export default function HeaderDisplay({ personalFormData }) {

    return (
        <div className="sections" id="header-section">

            <div className="header-left">
                <h1 className="user-name">
                    {personalFormData.name <= 0 ? 'Your Name' : personalFormData.name}
                </h1>

                <h2 className="job-title">
                    {personalFormData.title <= 0 ? 'Your Title' : personalFormData.title}
                </h2>
            </div>

            <div className="header-right">
                <ul className="contact-list">
                    <li className="contact-list-item" id="email">
                        {personalFormData.email.length <= 0 ? 'Your Email' : personalFormData.email}
                    </li>

                    <li className="contact-list-item" id="phone">
                        {personalFormData.phone.length <= 0 ? 'Your Phone Number' : personalFormData.phone}
                    </li>

                    <li className="contact-list-item" id="address">
                        {personalFormData.address.length <= 0 ? 'Your Address' : personalFormData.address}
                    </li>
                </ul>

            </div>

        </div>
    )
}