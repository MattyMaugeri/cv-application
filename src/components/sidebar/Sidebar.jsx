import PersonalDetails from "./PersonalDetails";

export default function Sidebar() {

    return (
        <div className="sidebar">
            <h2 children className="sidebar-title">Edit your CV</h2>

            <PersonalDetails />

        </div>
    )
}