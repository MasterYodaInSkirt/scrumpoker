import * as React from "react";

export const Planningpoker = () => {
    return (
        <div className="col-md-4">
            <img
                src={`${process.env.PUBLIC_URL}/images/planning-poker.png`}
                className="card-img img-planning-poker"
            />
        </div>
    );
};