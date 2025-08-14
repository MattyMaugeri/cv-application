
export default function HeaderDisPersonalDetailsDisplayplay({ personalDetailsData }) {

    return (
        <div className="sections" id="header-section">

            <div className="header-left">
                <h1 className="user-name">
                    {personalDetailsData.name <= 0 ? 'Your Name' : personalDetailsData.name}
                </h1>

                <h2 className="job-title">
                    {personalDetailsData.title <= 0 ? 'Your Title' : personalDetailsData.title}
                </h2>
            </div>

            <div className="header-right">
                <ul className="contact-list">
                    <li className="contact-list-item" id="email">
                        {personalDetailsData.email.length <= 0 ? 'Your Email' : personalDetailsData.email}
                    </li>

                    <li className="contact-list-item" id="phone">
                        {personalDetailsData.phone.length <= 0 ? 'Your Phone Number' : personalDetailsData.phone}
                    </li>

                    <li className="contact-list-item" id="address">
                        {personalDetailsData.address.length <= 0 ? 'Your Address' : personalDetailsData.address}
                    </li>
                </ul>

            </div>

        </div>
    )
}