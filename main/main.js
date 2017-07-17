'use strict'
//返回字符串
function game(numA, numB) {
    let a = [];
    a = numA.split("");
    let b = [];
    b = numB.split("");
    let s = [];
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] == b[i]) {
            count1++;
        }
    }
    s.push(count1, "A");
    for (let i = 0; i < b.length; i++) {
        if (numA.indexOf(b[i]) != -1) {
            count2++;
        }
    }
    console.log(count2);
    s.push(count2 - count1, "B");
    return s.join("");
}
//生成随机数
function Random() {
    let b = "";
    for (let i = 0; ; i++) {
        let num = parseInt(Math.random() * 10);
        if (b.indexOf(num) == -1) {
            b += num;
            if (b.length == 4) {
                break;
            }
        }
    }
    console.log(b);
    return b;
}
//用户输入
function input() {
    let a = "";
    a += prompt();
    return a;
}