import React from 'react';
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom'

function One(props) {
    // console.log(props);

 return (
    <div>{props.children}</div>
    //特殊的children props
  );
}

// %PUBLIC_URL% 相对路径前缀，public/index.html中的%PUBLIC_URL%将被自动替换为绝对路径

// 路由1组件
const Rot0 = () => <h2>初始状态</h2>;
// 路由1组件
const Rot1 = () => <h2>路由1</h2>;
// 路由2组件
const Rot2 = () => <h2>路由2</h2>;

const RotLink = () => { 
    const border = { flex: 1, height: '100px', padding: '10px', border: 'solid 2px' }
    return (
        <div style={{ width: '600px'}}>
            <header style={{ border: 'solid 2px'}}>
                <div><Link to="/">显示初始状态</Link></div>
            </header>
            <section style={{ display: 'flex', gap: '10px', marginTop: '10px'}}>
                <aside style={border}>
                    <div><Link to="/route1">显示路由1</Link></div>
                    <div><Link to="/route2">显示路由2</Link></div>
                </aside>
                <main style={border}>
                    <Routes>
                        <Route path="/" element={<Rot0 />}></Route>
                        <Route path="/route1" element={<Rot1 />}></Route>
                        <Route path="/route2" element={<Rot2 />}></Route>
                    </Routes>
                </main>
            </section>
        </div>
    )
}

function R7() { 
    return (
        <div>
            <One>
                <p>aaa</p>
                <p>aaa</p>
            </One>
            
                

                
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                }}
            >
                <RotLink />
            </BrowserRouter>
            
        </div>
    )
}

export default R7