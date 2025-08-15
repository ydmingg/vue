import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

function R7O() {
    // 子组件
    const ChildComp = () => <h2>子组件</h2>;

    // 父组件
    function Comp() { 
        return (
            <>
                <p>父组件p</p>
                <Outlet />
            </>
        )
    }

    
    // 集中配置路由
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Comp />,
            children: [
                {path: "list", element: <ChildComp />}
            ]
        }
    ], {
        future: { v7_relativeSplatPath: true }
    })

    return (
        <>
            <RouterProvider future={{v7_startTransition: true}} router={router} />
        </>
    )
}

export default R7O;