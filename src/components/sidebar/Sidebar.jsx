import { useState } from "react";
import PersonalDetails from "./Panels/PersonalDetails.jsx"
import Summary from "./Panels/Summary.jsx";
import Skills from "./Panels/Skills.jsx";
import Education from "./Panels/Education.jsx";
import Experience from "./Panels/Experience.jsx";

export default function Sidebar({ formData, setFormData, summaryData, setSummaryData }) {
    const [activePanel, setActivePanel] = useState(0);


    return (
        <div className="sidebar">
            <h2 children className="sidebar-title">Edit your CV</h2>

            <PersonalDetails
                isToggled={activePanel === 0}
                onShow={() => setActivePanel(0)}
                formData={formData}
                setFormData={setFormData}
            />

            <Summary
                isToggled={activePanel === 1}
                onShow={() => setActivePanel(1)}
                summaryData={summaryData}
                setSummaryData={setSummaryData}
            />

            {/* <Skills
                isToggled={activePanel === 2}
                onShow={() => setActivePanel(2)}
            /> */}

            {/* <Education
                isToggled={activePanel === 3}
                onShow={() => setActivePanel(3)}
            /> */}

            {/* <Experience
                isToggled={activePanel === 4}
                onShow={() => setActivePanel(4)}
            /> */}


        </div>
    )
}