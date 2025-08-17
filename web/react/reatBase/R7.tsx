import React from 'react';
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom'

// function One(props) {
//     // console.log(props);

//  return (
//     <div>{props.children}</div>
//     //特殊的children props
//   );
// }

// RouterInit 组件
// const RouterInit = () => { 
//     return (
//         <Routes>
//             <Route path="/route1" element={<Rot1 />}></Route>
//             <Route path="/route2" element={<Rot2 />}></Route>
//         </Routes>
//     )
// }

// 路由1组件
// const Rot1 = () => <h2>路由1</h2>;
// // 路由2组件
// const Rot2 = () => <h2>路由2</h2>;

const RotLink = () => { 
    return (
        <>
            <div><Link to="/route1">显示路由1</Link></div>
            <div><Link to="/route2">显示路由2</Link></div>

        </>
    )
}

function R7() { 
    return (
        <div>
            {/* <One>
                <p>aaa</p>
                <p>aaa</p>
            </One> */}

            {/* <Link to="/123">to App1A1</Link>

            <Route path="/123" component={App1A1}></Route> */}
            
                

                
            <BrowserRouter
                future={{
                    v7_startTransition: true,
                    v7_relativeSplatPath: true
                }}
            >
                <Routes>
                    <Route path="/" element={<RotLink />}></Route>
                    {/* <Route path="/route1" element={<Rot1 />}></Route>
                    <Route path="/route2" element={<Rot2 />}></Route> */}
                </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default R7