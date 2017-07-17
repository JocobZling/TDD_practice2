'use strict'
//let choose_no_common_elements = require(".../.../ut_workshop/main/main.js");
describe('game', function () {
    //对用户输入进行测试
    it("when input num string,should print correct length and it's type is num and " +
        "no repetition", function () {
        let b = input();
        let c = b.split("");
        expect(b.length).toEqual(4);//长度
        let e = [];
        //找种类
        for (let i = 0; i < c.length; i++) {
            for (let j = i + 1; j < c.length; j++) {
                if (c[i] === c[j]) {
                    j = ++i;
                }
            }
            e.push(c[i]);
        }
        expect(e.length).toEqual(4);//不重复
        expect(parseInt(b).toString().length).toEqual(4);//判断类型是否为数字
    })
    //对重复函数进行测试
    it("when Random num string,should print correct length and it's type is num and " +
        "no repetition", function () {
        let b = Random();
        let c = b.split("");
        let count = 0;
        expect(b.length).toEqual(4);//长度
        for (let i = 0; i < c.length; i++) {
            if (b.indexOf(c[i]) != -1) {
                count++;
            }
        }
        expect(count).toEqual(4);//不重复
        expect(parseInt(b).toString().length).toEqual(4);//判断类型是否为数字
    })
    //对生成字符串函数进行测试
    let a = "1234";
    it("when give four number,should print correct number", function () {
        let b = "1234";
        let result = game(a, b);
        expect(result).toEqual("4A0B");
    })
    it("when give four number,should print correct number", function () {
        let b = "2134";
        let result = game(a, b);
        expect(result).toEqual("2A2B");
    })
    it("when give four number,should print correct number", function () {
        let b = "4321";
        let result = game(a, b);
        expect(result).toEqual("0A4B");
    })
    it("when give four number,should print correct number", function () {
        let b = "1245";
        let result = game(a, b);
        expect(result).toEqual("2A1B");
    })
    it("when give four number,should print correct number", function () {
        let b = "2156";
        let result = game(a, b);
        expect(result).toEqual("0A2B");
    })
    it("when give four number,should print correct number", function () {
        let b = "5678";
        let result = game(a, b);
        expect(result).toEqual("0A0B");
    })

});
