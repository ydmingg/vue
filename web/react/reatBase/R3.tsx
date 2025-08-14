import React, { useState } from 'react'

function R3() { 
    const [name, setUserName] = useState('');
    const [pwd, setPwd] = useState('');

    const changeType = (types: string) => {
        return (e: React.ChangeEvent<HTMLInputElement>) => { 
            if (types === "name") {
                setUserName(e.target.value);
            } else if(types === "pwd") { 
                setPwd(e.target.value);
            }
        }
    }

    return (
        <>
            <input type="text" onChange={changeType("name")} value={name}/>
            <input type="text" onChange={changeType("pwd")} value={pwd}/>
            <button>登录</button>
        </>
    )
}

export default R3;