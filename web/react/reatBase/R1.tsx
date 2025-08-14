// 类式组件
// import { Component } from "react";
// class App extends Component {  
//     handleClick() { 
//         console.log(this);
//     }
//     render() { 
//         return <button onClick={this.handleClick.bind(this)}>click me</button>
//     }
// }

import React, { useState } from "react";

// 函数式组件
function R1() {
    // 调用 useState Hook 就拥有了 state状态
    const [count, setCount ]= useState(0);

    const handleClick = () => {
        console.log("asdfasdf");
        // 设置 count 状态值+1
        setCount(count + 1)
    }

    return (
        <button onClick={handleClick}>{count}</button>
    )
}

export default R1;
