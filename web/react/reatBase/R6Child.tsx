import React from 'react'

// 状态提升：将子组件的状态转移到父组件进行管理
function R6Child({ scale, temperature=0, onTemperatureChange }) {
    //fieldset标签：分组标签,一般用作布局，其内容在显示时会自动的占据浏览器所有的空间，它也可以嵌套 <legend>
    const scaleNames = {
        c: '摄氏度',
        f: '华氏度'
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
        const value = parseFloat(e.target.value)
        onTemperatureChange(value)
    }
    
	return (
        <>
            <fieldset> 
                <legend>输入{scaleNames[scale]}:</legend>
                <input type="number" value={temperature} onChange={handleChange}/>
            </fieldset>
        </>
	)
}

export default R6Child