import React from "react";
import { createBrowserRouter, RouterProvider, Outlet, useNavigate, useLocation, useParams } from 'react-router-dom'

function R7O() {

    const NavigateDom = () => { 
        const navigate = useNavigate()
        const loacation = useLocation()
        const params = useParams()
        // useNavigate编程式导航路由
        const clickNavigateGo = () => navigate('/list2')
        const clickNavigateGoBack = () => navigate(-1)
        const clickNavigateGoForward = () => navigate(1)
        const clickNavigateGoReload = () => navigate(0)
        const clickNavigateReplace = () => navigate('/list3', { replace: true })
        const clickNavigateProps = () => { 
            console.log(params);
            
            return navigate('/list3', { state: { form: "跳转传递的参数" } })
        }
        // 获取状态参数
        const state = loacation.state;
        
        
        const clickNavigateID = () => { 
            // 假设有个动态参数
            const params = '555';
            return navigate(`/list2/${params}`)
            
        }

        const clickNavigateID2 = () => { 
            // 获取动态路由的参数
            console.log(params); 
            return navigate('/list2/box1/234asdoifasiodfjo')
        }

        
        return (
            <>
                <button onClick={ clickNavigateGo }>跳转</button>
                <button onClick={ clickNavigateGoBack }>后退</button>
                <button onClick={ clickNavigateGoForward }>前进</button>
                <button onClick={ clickNavigateGoReload }>刷新</button>
                <button onClick={ clickNavigateReplace }>替换</button>
                <button onClick={clickNavigateProps}>传递状态参数：{state?.form ? state?.form : 'none'}</button>
                <button onClick={ clickNavigateID }>动态参数</button>
                <button onClick={ clickNavigateID2 }>动态路由</button>
            </>
        )
    }

    // 子组件
    const ChildComp1 = () => <h2>子组件1</h2>;
    const ChildComp2 = () => <h2>子组件2</h2>;
    const ChildComp3 = () => <h2>子组件3</h2>;
    const ChildComp4 = () => <h2>子组件-动态路由</h2>;
    const ChildComp5 = () => <h2>子组件-动态路由22222</h2>;

    // 父组件
    function Comp() { 
        return (
            <>
                <p>父组件p</p>
                {/* 子组件占位符 */}
                <Outlet />
                <NavigateDom />
            </>
        )
    }

    
    // 集中配置路由
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Comp />,
            children: [
                {path: "list1", element: <ChildComp1 />},
                {
                    path: "/list2",
                    element: <ChildComp2 />,
                    children: [
                        { path: "box1/:userId", element: <ChildComp3 /> },
                        { path: ":box2", element: <ChildComp4 /> },
                        { path: "box3:userId", element: <ChildComp5 /> },
                    ]
                },
                {path: "list3", element: <ChildComp3 />}
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