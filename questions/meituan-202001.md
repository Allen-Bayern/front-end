# 美团2020前端第一场面试题目

## 第一题 

```JavaScript
class A {
    String i = "op";
    void func(String s) {
        s = ""+9;
    }
    static void test() {
        A a = new A();
       a.func(a.i);
    }
} 
```

[code is here](src/mt202001_1.js)

问：

1. 变量i,s,a在堆还是在栈中？
2. 第8行执行完后a.i的值是什么？

链接：https://www.nowcoder.com/questionTerminal/354d1b54dfe74e469b0660ee088b1e09

### 答案

1. i和s在栈中，a在堆中。
2. `"op"`

## 第二题

请按顺序输出打印结果，并说明原因。

```JavaScript
var name = 'global';
var obj = {
    name: 'local',
    foo: function(){
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();
setTimeout(function() {
    console.log(window.name);
}, 0);
console.log(bar.name);
 
var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);
```

[code is here](src/mt202001_2.js)

### 答案

foo