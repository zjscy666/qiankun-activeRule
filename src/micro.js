
import {
    registerMicroApps, // 注册子应用
    // runAfterFirstMounted, // 第一个子应用装载完毕
    // setDefaultMountApp, // 设置默认装载子应用
    start, // 启动
    initGlobalState,
    addGlobalUncaughtErrorHandler
} from "qiankun";
import {
    message
} from 'antd';
/**
    * 路由监听
    * @param {*} routerPrefix 前缀
    */
//    function genActiveRule(routerPrefix) {
//     return location => location.pathname.startsWith(routerPrefix);
// }

// 注册子应用
export default (params) => {
    registerMicroApps(
        [...params],
        {
            beforeLoad: [
                app => {
                    console.log("before load", app);
                }
            ], // 挂载前回调
            beforeMount: [
                app => {
                    console.log("before mount", app);
                }
            ], // 挂载后回调
            afterUnmount: [
                app => {
                    console.log("after unload", app);
                }
            ] // 卸载后回调
        }
    )
    const { onGlobalStateChange, setGlobalState } = initGlobalState({
        user: 'qiankun',
    });
    onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

    setGlobalState({
        ignore: 'master',
        user: {
            name: 'master',
        },
    });

    // setDefaultMountApp("/vue");

    // runAfterFirstMounted(() => { });
    addGlobalUncaughtErrorHandler((event) => {
        console.error(event);
        const { message: msg } = event;
        // 加载失败时提示
        if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
            message.error("微应用加载失败，请检查应用是否可运行");
        }
    });

    start({
        // sandbox: { strictStyleIsolation: true },
        // sandbox: true
    });

}