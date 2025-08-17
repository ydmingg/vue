import React, { useState } from "react";

// 函数式组件
function R1() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <button onClick={handleClick}>点击我: {count}</button>
    );
}

export default R1;
