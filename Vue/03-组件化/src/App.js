// 引入子组件
import MyButton from "./components/MyButton"

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
    /* 
        template 是用字符串的形式编写模板（不推荐）
            1.这些字符串会在项目运行时，在浏览器中被编译为js函数（性能不好）
            2.在字符串中编写代码，体验很差

        为了解决着问题，Vue提供了一种文件组件（SFC）xxx.vue
            1.单文件组件的格式为.vue，需要安装插件Vue Official
            2.vue文件用来编写单文件组件，vue文件本身斌不能被浏览器所识别
                所以她必须要用构建工具打包后使用
            3.同时vue文件在打包时，构建工具会直接将template模板转为函数
                无需在浏览器中再去编译，这样一来性能也会有所提升
                
    */
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






