// flag用于重定向是时候，多个=号漏参数的问题
export default (name = '', _url, flag) => {
    var url = _url || window.location.search;
    if (url.indexOf('?') === 1) { return false; }
    url = url.substr(1);
    url = url.split('&');
    let nameres;
    // 获取全部参数及其值
    for(let i=0;i<url.length;i++) {
        let info;
        let obj = {};
        if (flag) {
            info = url[i].split(/^([a-zA-Z]*)=?/);
            obj[info[1]] = decodeURI(info[2]);
        } else {
            info = url[i].split('=');
            obj[info[0]] = decodeURI(info[1]);
        }
        url[i] = obj;
    }
    // 如果传入一个参数名称，就匹配其值
    if (name) {
        for(let i=0;i<url.length;i++) {
            for (const key in url[i]) {
                if (key === name) {
                    nameres = url[i][key];
                }
            }
        }
    } else {
        nameres = url;
    }
    // 返回结果
    return nameres;
}