
export default function PersonalDetails() {

    return (
        <div className="sidebar-card">
            <div className="sidebar-headers">
                <h3>Personal Details</h3>
                <div className="dropdown-arrow-container">X</div>
            </div>

            <form class="sidebar-form" id="personal-form">
                <label>Full Name</label>
                <input type="text" placeholder="Enter Full Name"/>

                <label>Email</label>
                <input type="text" placeholder="Enter Email"/>

                <label>Phone Number</label>
                <input type="text" placeholder="Enter Phone Number"/>

                <label>Address</label>
                <input type="text" placeholder="Enter Address"/>
            </form>
        </div>
    )
}