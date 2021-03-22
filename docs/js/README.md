## Event Loop
 - js事件循环
 ```vue
  当访问浏览器时会启动js引擎，首先会执行主线程的代码，
  等主线程的代码执行完毕后，
  会检查微任务队列是否为空，
  如果有微任务则将微任务放到主线程中进行执行，然后会检查宏任务队列是否为空，
  如果不为空则将宏任务放到主线程中进行执行。先执行微任务后执行宏任务
   宏任务（script全部代码、setTimeout、setInterval、setImmediate）
   微任务（Process.nextTick（Node独有）、Promise、Object.observe(废弃)、MutationObserver）
 ```