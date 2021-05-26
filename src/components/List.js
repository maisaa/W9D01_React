import React from "react";
import { ListItem } from './ListItem'


export const List = ({ collection }) => {
    console.log("{ collection },,,,,,", { collection })

    // const id=0 ;
    // const todo='';
    const l = collection.map((element, index) => {
        return (<ListItem key={index} id={element.id} todo={element.todo}></ListItem>);
    });

    return (
        <>
            <ul>
                {l}
            </ul>
        </>
    );
}


