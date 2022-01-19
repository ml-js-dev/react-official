import React from "react";

export const NumberList = (props) => {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((num) => (
                <ListItem key={num.toString()} value={num} />
            ))}
        </ul>
    );
};

const ListItem = (props) => {
    return <li>{props.value}</li>;
};
