import React from "react";
// import App from 'App.js';

const List = ({ collection }) => {
    console.log(",,,,,,", { collection })

    return (
        <>
            <ul>
                {collection.map((element, index) => {
                    return <li key={index}> {element.todo} </li>;
                })}
            </ul>
        </>
    );
}

export default List
