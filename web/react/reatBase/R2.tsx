
import React, { useState } from "react";

function R2() { 
    const [msg, setMsg] = useState("");
    const change = (e: React.ChangeEvent<HTMLInputElement>) => { 
        console.log(e.target);
        
        setMsg(e.target.value)
    }

    return (
        <>
            <input type="text" onChange={change} value={msg}/>
            <p>你输入的内容是：{ msg }</p>
        </>
    )
}


export default R2;