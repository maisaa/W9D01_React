import React from "react";

export const ListItem =({id, todo}) =>{

    const logTodo = (e) =>{
        // console.log("target...",e.target.id);
        console.log("id...",id);
        console.log("todo is...",todo);
    }

    return(
        <>
            <li onClick={logTodo}>Id ({id})  :   todo({todo})</li>
        </>
    )
}

