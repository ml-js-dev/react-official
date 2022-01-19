import React from "react";

export const BoilingVerdict = (props) => {
    if (props.celsius >= 100) {
        return <p>Water will boil.</p>;
    }
    return <p>Water won't boil.</p>;
};
