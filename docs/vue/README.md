
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

