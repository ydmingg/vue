import React from 'react'
import R6Child from './R6Child'

const a = (i: number) => console.log(i + 1)
a(1)

const b = <T,>(i:T, x: (i:T) => void): void=> x(i)
b(1, (i)=> console.log(i + 1))



// 状态提升：将子组件的状态转移到父组件进行管理
function R6() {
    // 转换函数：摄氏度 → 华氏度
    const toFahrenheit = (input: number) => input * 9 / 5 + 32;
    // 转换函数：华氏度 → 摄氏度
    const toCelsius = (input: number) => (input - 32) * 5 / 9;
    
    
    // 温度值转换（处理无效输入）
    const tryConvert = (temperature: number, convertFunc: (input: number)=> number) => { 
        if (Number.isNaN(temperature)) {
            return 0;
        }
        const output = convertFunc(temperature);
        const rounded = Math.round(output * 1000) / 1000;   
        return rounded;
    }

    //fieldset标签：分组标签,一般用作布局，其内容在显示时会自动的占据浏览器所有的空间，它也可以嵌套 <legend>
    const [celsius, setCelsius] = React.useState(0)
    const [fahrenheit, setFahrenheit] = React.useState(0)


    const shandleChange = (value: number) => { 
        setCelsius(value)
        setFahrenheit(tryConvert(value, toFahrenheit))
    }

    const onFahrenheitChange = (value: number) => { 
        setFahrenheit(value)
        setCelsius(tryConvert(value, toCelsius))
    }
    
	return (
        <>
            <R6Child scale='c' temperature={celsius} onTemperatureChange={ shandleChange } />
            <R6Child scale='f' temperature={fahrenheit} onTemperatureChange={ onFahrenheitChange } />
        </>
	)
}

export default R6