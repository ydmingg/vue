// 创建一个对象
const obj = {
    name: "asdfa",
    age: 20
}

/*
    如果直接修改了对象的属性，那么就是仅仅修改了属性，没有做其他的事情
        这种操作只会影响对象自身，不会导致元素的重新渲染
    希望在修改一个属性时，可以进行一些操作，比如触发元素重新渲染
        要实现着操作，必须要对对象进行改造，vue3中使用的是，代理模式来完成对对象的改造



*/


//
// obj.name = "asfdadfssdf"

// 给对象创建一个代理
const handler = { // 用来指定代理的行为
    //get()用来指定读取数据时的行为，他的返回值就是最终读取的数据
        // 指定get()之后，在通过代理读取对象属性时，就会调用git的方法来获取值
    // get(...args) { 
    //     console.log(args);
    //     return "66666666666"
    // }
    get(target, prop, receiver) {
        // 返回值之前做一些操作。。。。
        // 在vue中，data()返回的对象会被vue所代理
        // 当我们通过代理去修改属性时，修改后，会通知之前所有用到该值的地方全部更新



        // track() 追踪谁用了这个代理

        /*
            target: 被代理的对象
            prop: 读取的数据
            receiver: 代理对象
        */
        // targget 
        return target[prop]
    },
    // set()会在通过代理，修改对象时调用
    set(target, prop, value, receiver) { 
        return target[prop] = value
    }

}

// 创建代理对象（组件实例就是一个代理对象）
// 代理没有数据，实际改动的是原对象
const proxy = new Proxy(obj, handler)


console.log("proxy代理：",proxy);

proxy.age = 88

console.log(proxy.name);
console.log(obj.age);