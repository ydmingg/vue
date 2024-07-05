// 引入子组件
import MyButton from "./myBtn"

// 创建一个跟组件
export default { 
    data() { 
        return {
            msg: "2222"
        }
    },
    // 在组件中注册子组件
    components: {
        // MyButton(要用的名字): MyButton
        // // MyButton
        // 如果模板template是写在网页当中，那么你的组件名称都要小写
        // mybutton: MyButton
        "my-button": MyButton
        
    },
    // // template: "aasdfasd{{msg}}fasdfasdfa"
    // template: `
    //     <h2>根组件</h2>
    //     aasdfasd{{msg}}fasdfasdfa
    //     <MyButton></MyButton>
    //     <MyButton></MyButton>
    //     <MyButton></MyButton>
    //     <MyButton></MyButton>
    //     <MyButton></MyButton>
    // `
     
}






