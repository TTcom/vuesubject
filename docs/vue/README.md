
## vue响应式原理

- 在vue2中当数据发生变化时通过object.defineproperty对数据进行劫持
- defineproperty性能差需要对每个属性进行get和set,新增属性无法监测，层级深的属性需要递归进行监测
- 在vue3中当数据发生变化时通过proxy对象对数据进行劫持
- vue响应式原理 监听对象的变化，数组则是通过重写数组的方法实现监听变化的

```js
  //监听对象的变化
    let state = {
        count: 1
    };

   let active;

    function definereactive(obj) {
        for (key in obj) {
            let value = obj[key]
            let deep = [];
            Object.defineProperty(obj, key, {
               
                get() {
                    deep.push(active)
                    return value
                },
                set(newval){
                  value = newval
                  deep.forEach(val=>{
                      val()
                  })
                }

            })
        }
    }

    definereactive(state)
    const watcher = (fn) => {
        active = fn;
        fn()
        active = null
    }


    watcher(() => {
        app.innerHTML = state.count
    })

    watcher(() => {
        console.log(state.count)
    })
  //监听数组的变化

let state = [1,2,5,4];

   let originalarray = Array.prototype; //数组原来的方法
   let arraymethods = Object.create(originalarray)
    function definereactive(obj) {
       
        arraymethods.push = function(...args){
            originalarray.push.call(this,...args)
            render()
        }
        obj.__proto__ = arraymethods
    }
    definereactive(state)
    function render(){
        app.innerHTML = state
    }

```


## 模板编译原理

- template ——> ast 语法树 -> codegen 生成代码 -> with + function 实现生成render方法


## 生命周期钩子函数如何实现的
```js
vue的生命周期钩子就是回调函数而已，当创建组件实例时会调用对应的钩子函数;
内部主要是通过callHook方法进行调用，核心是使用发布订阅模式;
将钩子函数订阅好（内部采用数组的方式进行存储），在对应的阶段进行发布
```
## vue.mixin的使用场景和原理
```js
vue.mixin的作用就是抽离公共的业务逻辑，原理类似对象的继承;
如果混入的数据和本身组件的数据冲突，会采用就近原则以组件的数据为准
```
## nextTick的使用场景和原理
```js
nextTick中的回调是在下次DOM更新循环结束之后执行的延迟回调，在修改数据后
立即使用这个方法获取更新后的DOM，原理就是使用异步方法（promise,mutationObserver,setimmediate,setTimeout）经常会和事件循环一起来问（宏任务和微任务）
```
## 为什么需要虚拟DOM
```js
     virtual dom 就是用js对象来描述真实的DOM，因为直接操作DOM性能会非常低，但是通过js层操作效率高，可以将DOM操作转化为对象操作，最终通过diff算法对比差异进行更新DOM 

```
