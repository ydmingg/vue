import React, { useState } from "react";

function R4() {
	const [state] = useState({ type: 1, isLogin: false });

	const { type, isLogin } = state;

	const showMsg = () => {
		console.log("type: ", type);
		if (type === 1) {
			return <p>第一种写法：type值等于1</p>;
		} else {
			return <p>第一种写法：type值不等于1</p>;
		}
	};

	let welcome,
		btnText = "";
	if (isLogin) {
		welcome = "欢迎回来";
		btnText = "退出";
	} else {
		welcome = "请先登录~";
		btnText = "登录";
    }
    
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) => <li>{number}</li>);

    const o1 = { a: 1, b: 1, c: 1, d: 1 }
    const o2 = { ...o1 };
    console.log(Array.from({ length: 1000 }, (v,i) => `User ${i + 1}`)
);
    
	return (
		<div>
			{type}
			<hr />
			{showMsg()}
			<hr />
			<h2>{welcome}</h2>
            <button>{btnText}</button>
            <hr />
            { 
                type === 1 ? (<strong>三目判断</strong>):(<span>三目判断不等于1</span>)
            }
            <hr />
            <div className="">
                {listItems}
            </div>
            <hr />
            <pre>{JSON.stringify(o2)}</pre>
		</div>
	);
}

export default R4;
