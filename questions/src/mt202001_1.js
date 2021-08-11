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