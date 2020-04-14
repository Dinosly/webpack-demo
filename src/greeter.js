//依据CommonJS规范导出这个函数为一个模块
let config = require("./greeter.json")
module.exports = function() {
    var greet = document.createElement('div');
    // greet.textContent = "Hi there and greetings!";
    greet.textContent = config.greet;
    return greet;
};