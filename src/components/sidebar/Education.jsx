
export default function Education() {

    return (
        <div className="sidebar-card">
            <div className="sidebar-headers">
                <h3>Education</h3>
                <div className="dropdown-arrow-container">X</div>
            </div>

            <div className="education-list"></div>

            <form >
                <label>Degree</label>
                <input type="text" placeholder="Enter your degree"></input>

                <label>University</label>
                <input type="text" placeholder="Enter School/ University"></input>

                <label>Start Date</label>
                <input type="date"></input>

                <label>End Date</label>
                <input type="date"></input>
            </form>

            <button>Add Education</button>

        </div>
    )
}