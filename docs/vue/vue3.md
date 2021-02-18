### Vue3的一些新特性

### vue2与vue3的对比
- 1、vue3源码全部采用typescript开发，对typescript支持友好
- 2、Vue 3 源代码体积优化，使用函数api ,支持 tree-shaking
- 3、数据劫持优化，使用Proxy
- 3、编译优化，vue3实现了静态模板分析，重写diff算法
- 4、新增了一些内置组件




::: tip <span style="color:#999;font-weight: initial;"><a href="https://github.com/TTcom/vue3_learn">vue3_learn demo链接</a></span> 🎉 💯
&ensp;                     				  
:::

数据劫持使用proxy对象（原使用defineProperty）;Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）。

```js
var a={
    c:1
}

var proxya = new proxy(a,{
     get:function(){

     },
     set:function(){
         
     }

})

```
重新定义vdom对比思路
借鉴svelte框架--模板解析采用以指令切分的方式进行解析，切分为静态块和动态块，对比时只对动态块进行对比


函数式编程一切皆函数,更灵活方便组合逻辑，体积更小，在打包时使用tree-shaking它会过滤掉没有使用过的函数，更好压缩
```js
vue2.0中如果要在所有的vue文件中使用一些共同的方法的时候的写法
vue.mixin({
    mounted:function(){
        window.addEventListener('mousemove'function(){
            this.x = e.pageX;
            this.y = e.pageY;
        })
    }
});


在vue3.0中的写法我们可以将vue中的方法引入
import {onMounted,watch} from 'vue'
var app = {
    setup(){
        onMounted(()=>{

        })
        watch(()=>{

        })
    }
};

function useMouse(){
    const x;
    const y;
    const update=e=>{
        x=e.pageX;
        y=e.pageY;
    }
    onMounted(()=>{
         window.addEventListener('mousemove',update)
    });

}


```

支持typescript写法