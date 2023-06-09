const os = require("os");

console.log(os.cpus());
console.log(os.freemem());
console.log(os.totalmem());

console.log("user info", os.userInfo());

// const fs = require("fs");

// const readStream = fs.createReadStream("./NodeJs/1. node 有哪些全局对象.md", {
//   encoding: "utf8",
// });
// const writeStream = fs.createWriteStream("./1.axios.copy.js");

// readStream.on("data", (chunk) => {
//   console.log("data", chunk);
//   writeStream.write(chunk);
// });

// readStream.on("end", () => {
//   console.log("end");
//   writeStream.end();
// });

// writeStream.on("finish", () => {
//   console.log("finish");
// });

/**
 * @class
 * @classdesc 自定义事件
 */
class MyEventEmitter {
  constructor() {
    /**
     * @type { Object.<string, (e: any) => void> }
     */
    this.events = {};
  }

  /**
   *  触发事件
   * @param {string} type
   * @param  {any[]} args
   */
  emit(type, ...args) {
    this.events[type].forEach((fn) => {
      Reflect.apply(fn, this, args);
    });
  }

  /**
   *  添加事件监听
   * @param {string} type
   * @param { (e?: any) => void } fn
   */
  on(type, fn) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(fn);
  }

  /**
   * 移除事件
   * @param {string} type 事件类型
   * @param { (e?: any) => void } fn 事件处理函数
   */
  removeListener(type, fn) {}
}

/**
 * script start
 * script end
 * promise1
 * promise2
 * async1 start
 * async2
 * async1 end
 *
 * nextTick1
 * nextTick2
 * setImmediate
 *
 * promise3
 *
 * setTineout0
 * setTimeout2
 */

/**
 * @typedef { Object } User
 * @property { string } name
 * @property { number } age
 */

/**
 * @type { User }
 */
const user = {};
