/** 模块 **/ 
// 此模块也可也引入其他模块

let b = 'this is B! '; // 模块改了值,引入文件也会被改值,不像'common.js‘只引入一次,缓存了,无法更改
const c = 'this is C! '; // const无法改值,即使引入引入文件也无法更改 
const d = 'this is D! '; 

// 导出 导入文件的时候要加{}
export const a ='this is A! '; // 将模块导出
export {
    // 定义别名
    b as bb,
    c,
    d
};

// 导出默认 这样导入文件的时候不用{}
export default{
    a
}