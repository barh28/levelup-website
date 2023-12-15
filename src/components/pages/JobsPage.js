import React from "react";
import "./JobsPage.css"
import JobsFrame from "../scrollFrames/JobsFrame";
import JobsForm from "../Form/JobsForm";

function JobsPage(){
    return (
        <div className="jobs-page-frame">
            <JobsFrame/>
            <JobsForm/>
        </div>
    )
}

export default JobsPage;