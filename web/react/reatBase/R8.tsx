import React, { useState, useEffect, useMemo } from 'react'

function R8() {
    const [state, setState] = useState(0);
    const onLoad = () => {
        setState(state + 1);
    }

    // 目标组件
    function TargetComponent() { 
        return <div>目标组件</div>
    }
    
    useEffect(() => { 
        document.title = `当前值${state}`
        
    }, [state])
    
    
    function Apsp() {
      const [count, setCount] = useState(0);
      const [value, setValue] = useState("");
    
      // 假设这是个耗时计算
      const expensiveCalculation = (num) => {
        console.log("执行了耗时计算");
        let total = 0;
        for (let i = 0; i < 1e7; i++) {
          total += num;
        }
        return total;
      };
        
        const hhh = (e) => {
            return setValue(e.target.value)
        }
        
    
      // 用 useMemo 缓存结果
      const result = useMemo(() => expensiveCalculation(count), [count]);
    //   const result = expensiveCalculation(count);
    
      return (
        <div>
          <p>计算结果: {result}</p>
          <button onClick={() => setCount(count + 1)}>增加</button>
          <input value={value} onChange={hhh} />
        </div>
      );
    }

    return (
        <>
            <h1>R8</h1>
            <button onClick={onLoad}>加载</button>
            <hr />
            <TargetComponent></TargetComponent>
            <Apsp></Apsp>
        </>
    )
}
export default R8