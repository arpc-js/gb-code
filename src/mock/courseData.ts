import type { Course, NavItem } from '@/types/course'

// 顶部导航
export const navItems: NavItem[] = [
  { id: 'java', name: 'Java', path: '/learn/java-basic' },
  { id: 'python', name: 'Python', path: '/learn/python-basic' },
  { id: 'go', name: 'Go', path: '/learn/go-basic' },
  { id: 'frontend', name: '前端', path: '/learn/frontend-basic' },
  { id: 'database', name: '数据库', path: '/learn/mysql-basic' },
  { id: 'devops', name: '运维', path: '/learn/docker-basic' },
  { id: 'ai', name: 'AI', path: '/learn/ai-basic' },
  { id: 'mobile', name: '移动端', path: '/learn/mobile-basic' },
  { id: 'security', name: '安全', path: '/learn/security-basic' },
  { id: 'arch', name: '架构', path: '/learn/arch-basic' },
]

// 视频占位
const video = 'https://www.w3schools.com/html/mov_bbb.mp4'
const img = (s: string) => `https://picsum.photos/seed/${s}/800/400`

// ========== 所有课程数据 ==========
export const courses: Course[] = [
  {
    "id": "java-basic",
    "pathId": "java",
    "title": "Java基础",
    "desc": "计算+存储：理解计算机本质",
    "icon": "📚",
    "chapters": [
      {
        "id": "ch1",
        "title": "环境安装",
        "video": video,
        "lessons": [
          {
            "id": "l1",
            "title": "JDK下载安装",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "JDK是Java开发工具包，包含编译器和运行环境。" },
              { "id": "b2", "type": "list", "items": ["访问Oracle官网或使用OpenJDK", "下载对应系统版本", "运行安装程序"] },
              { "id": "b3", "type": "tip", "content": "推荐JDK 17或21 LTS版本" }
            ]
          },
          {
            "id": "l2",
            "title": "环境变量配置",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "bash", "code": "# Windows\nJAVA_HOME=C:\\Program Files\\Java\\jdk-17\nPath=%JAVA_HOME%\\bin" },
              { "id": "b2", "type": "code", "language": "bash", "code": "# 验证安装\njava -version\njavac -version" }
            ]
          },
          {
            "id": "l3",
            "title": "第一个程序",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "filename": "main.java", "code": "void main() {\n    IO.println(\"Hello Java\");\n}" },
              { "id": "b2", "type": "text", "content": "void main() 是程序的入口，计算机从这里开始执行指令。" }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "计算",
        "video": video,
        "lessons": [
          {
            "id": "l1",
            "title": "算术运算",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "对数值进行加减乘除取余运算。" },
              { "id": "b2", "type": "table", "headers": ["运算符", "含义", "示例", "结果"], "rows": [
                ["+", "加法", "10 + 3", "13"],
                ["-", "减法", "10 - 3", "7"],
                ["*", "乘法", "10 * 3", "30"],
                ["/", "除法", "10 / 3", "3 (整除)"],
                ["%", "取余", "10 % 3", "1"]
              ]},
              { "id": "b3", "type": "code", "language": "java", "filename": "main.java", "code": "void main() {\n    IO.println(10 + 3);   // 13\n    IO.println(10 - 3);   // 7\n    IO.println(10 * 3);   // 30\n    IO.println(10 / 3);   // 3\n    IO.println(10 % 3);   // 1\n}" }
            ]
          },
          {
            "id": "l2",
            "title": "比较运算",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "比较两个值的大小关系，返回布尔值。" },
              { "id": "b2", "type": "text", "content": "布尔值(boolean)：只有两种取值——true(真)和false(假)。" },
              { "id": "b3", "type": "table", "headers": ["运算符", "含义", "示例", "结果"], "rows": [
                [">", "大于", "5 > 3", "true"],
                ["<", "小于", "5 < 3", "false"],
                ["==", "等于", "5 == 3", "false"],
                ["!=", "不等于", "5 != 3", "true"]
              ]},
              { "id": "b4", "type": "code", "language": "java", "filename": "main.java", "code": "void main() {\n    IO.println(5 > 3);    // true\n    IO.println(5 < 3);    // false\n    IO.println(5 == 3);   // false\n    IO.println(5 != 3);   // true\n}" }
            ]
          },
          {
            "id": "l3",
            "title": "逻辑运算",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "对布尔值进行与、或、非运算，用于组合多个条件。" },
              { "id": "b2", "type": "table", "headers": ["A", "B", "A && B (与)", "A || B (或)", "!A (非)"], "rows": [
                ["true", "true", "true", "true", "false"],
                ["true", "false", "false", "true", "false"],
                ["false", "false", "false", "false", "true"]
              ]},
              { "id": "b3", "type": "code", "language": "java", "filename": "main.java", "code": "void main() {\n    IO.println(true && false); // false\n    IO.println(true || false);  // true\n    IO.println(!true);          // false\n}" }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "存储",
        "video": video,
        "lessons": [
          {
            "id": "l1",
            "title": "变量",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "变量是计算机存储数据的容器，通过名字来访问数据。" },
              { "id": "b2", "type": "text", "content": "定义语法：类型 变量名 = 初始值;" },
              { "id": "b3", "type": "code", "language": "java", "filename": "main.java", "code": "void main() {\n    int age = 25;       // 类型(int) 名字(age) 值(25)\n    IO.println(age);\n\n    age = 26;           // 重新赋值（不需要再写类型）\n    IO.println(age);\n}" }
            ]
          },
          {
            "id": "l2",
            "title": "基本类型",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "Java内置的最基础的数据容器。" },
              { "id": "b2", "type": "table", "headers": ["类型", "含义", "定义语法示例"], "rows": [
                ["int", "整数", "int count = 10;"],
                ["double", "小数", "double price = 9.9;"],
                ["boolean", "布尔", "boolean b = true;"],
                ["char", "单字符", "char grade = 'A';"]
              ]},
              { "id": "b3", "type": "code", "language": "java", "filename": "main.java", "code": "void main() {\n    int num = 100;\n    double pi = 3.14;\n    boolean flag = true;\n    IO.println(num);\n    IO.println(pi);\n}" }
            ]
          },
          {
            "id": "l3",
            "title": "字符串",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "String用于存储文本内容，必须使用双引号包裹。" },
              { "id": "b2", "type": "text", "content": "定义语法：String 变量名 = \"内容\";" },
              { "id": "b3", "type": "list", "items": ["拼接：使用+号连接字符串", "获取长度：.length()", "获取字符：.charAt(索引)"] },
              { "id": "b4", "type": "code", "language": "java", "filename": "main.java", "code": "void main() {\n    String name = \"Java\";\n    String msg = \"Hello \" + name;  // 拼接\n    IO.println(msg);\n    IO.println(name.length());      // 4\n    IO.println(name.charAt(0));     // J\n}" }
            ]
          },
          {
            "id": "l4",
            "title": "数组",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "存储固定数量同类型元素的容器。" },
              { "id": "b2", "type": "text", "content": "定义语法：类型[] 变量名 = {值1, 值2, ...};" },
              { "id": "b3", "type": "list", "items": ["访问：数组[索引]", "修改：数组[索引] = 新值", "长度：数组.length", "遍历：使用for循环"] },
              { "id": "b4", "type": "code", "language": "java", "filename": "main.java", "code": "void main() {\n    int[] nums = {10, 20, 30};\n    \n    IO.println(nums[0]);      // 访问：10\n    nums[1] = 25;             // 修改\n    IO.println(nums.length);  // 长度：3\n    \n    // 遍历\n    for (int i = 0; i < nums.length; i++) {\n        IO.println(nums[i]);\n    }\n}" }
            ]
          },
          {
            "id": "l5",
            "title": "动态数组",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "长度可以自动伸缩的容器，适合存储数量不确定的数据。" },
              { "id": "b2", "type": "text", "content": "定义语法：List<类型> 变量名 = new ArrayList<>();" },
              { "id": "b3", "type": "list", "items": ["增：.add(元素)", "删：.remove(索引)", "改：.set(索引, 新值)", "查：.get(索引)", "遍历：使用for循环"] },
              { "id": "b4", "type": "code", "language": "java", "filename": "main.java", "code": "import java.util.*;\n\nvoid main() {\n    List<String> list = new ArrayList<>();\n    \n    list.add(\"A\");           // 增\n    list.add(\"B\");\n    list.add(\"C\");\n    \n    IO.println(list.get(0));  // 查：A\n    list.set(1, \"BB\");       // 改\n    list.remove(2);           // 删：移除索引2\n    \n    // 遍历\n    for (int i = 0; i < list.size(); i++) {\n        IO.println(list.get(i));\n    }\n}" }
            ]
          },
          {
            "id": "l6",
            "title": "类",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "类是自定义的复杂容器，可以包含属性和方法。" },
              { "id": "b2", "type": "list", "items": ["定义：class 类名 { 属性; }", "实例化：类名 变量 = new 类名();", "赋值：对象.属性 = 值", "取值：对象.属性"] },
              { "id": "b3", "type": "code", "language": "java", "filename": "main.java", "code": "class User {\n    String name;\n    int age;\n}\n\nvoid main() {\n    User u = new User();  // 实例化\n    \n    u.name = \"小白\";        // 赋值\n    u.age = 18;\n    \n    IO.println(u.name);   // 取值\n    IO.println(u.age);\n}" }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "if分支",
        "video": video,
        "lessons": [
          {
            "id": "l1",
            "title": "if语句",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "根据条件选择执行路径。" },
              { "id": "b2", "type": "code", "language": "java", "code": "int score = 85;\nif (score >= 60) {\n    System.out.println(\"及格\");\n}" }
            ]
          },
          {
            "id": "l2",
            "title": "if-else",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "int age = 20;\nif (age >= 18) {\n    System.out.println(\"成年\");\n} else {\n    System.out.println(\"未成年\");\n}" }
            ]
          },
          {
            "id": "l3",
            "title": "多条件分支",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "int score = 85;\nif (score >= 90) {\n    System.out.println(\"优秀\");\n} else if (score >= 80) {\n    System.out.println(\"良好\");\n} else if (score >= 60) {\n    System.out.println(\"及格\");\n} else {\n    System.out.println(\"不及格\");\n}" }
            ]
          },
          {
            "id": "l4",
            "title": "switch语句",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "int day = 3;\nswitch (day) {\n    case 1: System.out.println(\"周一\"); break;\n    case 2: System.out.println(\"周二\"); break;\n    case 3: System.out.println(\"周三\"); break;\n    default: System.out.println(\"其他\");\n}" },
              { "id": "b2", "type": "tip", "content": "别忘了break，否则会穿透执行" }
            ]
          },
          {
            "id": "l5",
            "title": "三元表达式",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "int a = 10, b = 20;\nint max = a > b ? a : b;  // 20\n// 等价于\nif (a > b) { max = a; } else { max = b; }" }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "for循环",
        "video": video,
        "lessons": [
          {
            "id": "l1",
            "title": "基本for循环",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "重复执行代码块。" },
              { "id": "b2", "type": "code", "language": "java", "code": "// for(初始化; 条件; 更新)\nfor (int i = 0; i < 5; i++) {\n    System.out.println(i);  // 0 1 2 3 4\n}" }
            ]
          },
          {
            "id": "l2",
            "title": "增强for循环",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "int[] nums = {1, 2, 3};\nfor (int n : nums) {\n    System.out.println(n);\n}\n\nList<String> list = List.of(\"A\", \"B\");\nfor (String s : list) {\n    System.out.println(s);\n}" },
              { "id": "b2", "type": "tip", "content": "适合遍历数组和集合" }
            ]
          },
          {
            "id": "l3",
            "title": "while循环",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "int i = 0;\nwhile (i < 5) {\n    System.out.println(i);\n    i++;\n}\n\n// do-while：至少执行一次\ndo {\n    System.out.println(i);\n    i--;\n} while (i > 0);" }
            ]
          },
          {
            "id": "l4",
            "title": "break和continue",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "for (int i = 0; i < 10; i++) {\n    if (i == 3) continue; // 跳过本次\n    if (i == 7) break;    // 终止循环\n    System.out.println(i); // 0 1 2 4 5 6\n}" }
            ]
          },
          {
            "id": "l5",
            "title": "嵌套循环",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "// 九九乘法表\nfor (int i = 1; i <= 9; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + \"×\" + i + \"=\" + i*j + \" \");\n    }\n    System.out.println();\n}" }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "函数",
        "video": video,
        "lessons": [
          {
            "id": "l1",
            "title": "方法定义",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "方法是可复用的代码块。" },
              { "id": "b2", "type": "code", "language": "java", "code": "// 修饰符 返回类型 方法名(参数列表)\npublic static int add(int a, int b) {\n    return a + b;\n}\n\n// 无返回值\npublic static void sayHello() {\n    System.out.println(\"Hello\");\n}" }
            ]
          },
          {
            "id": "l2",
            "title": "方法调用",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "int result = add(3, 5);  // 8\nsayHello();              // 输出Hello" }
            ]
          },
          {
            "id": "l3",
            "title": "方法重载",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "同名方法，参数不同。" },
              { "id": "b2", "type": "code", "language": "java", "code": "public static int add(int a, int b) {\n    return a + b;\n}\npublic static double add(double a, double b) {\n    return a + b;\n}\npublic static int add(int a, int b, int c) {\n    return a + b + c;\n}" }
            ]
          },
          {
            "id": "l4",
            "title": "递归",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "方法调用自身。" },
              { "id": "b2", "type": "code", "language": "java", "code": "// 阶乘：n! = n × (n-1)!\npublic static int factorial(int n) {\n    if (n <= 1) return 1;  // 终止条件\n    return n * factorial(n - 1);\n}\n// factorial(5) → 120" },
              { "id": "b3", "type": "warning", "content": "递归必须有终止条件，否则栈溢出" }
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "面向对象",
        "video": video,
        "lessons": [
          {
            "id": "l1",
            "title": "类与对象",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "类是模板，对象是实例。" },
              { "id": "b2", "type": "code", "language": "java", "code": "public class User {\n    String name;  // 属性\n    int age;\n    \n    void sayHello() {  // 方法\n        System.out.println(\"我是\" + name);\n    }\n}\n\n// 创建对象\nUser u = new User();\nu.name = \"张三\";\nu.sayHello();" }
            ]
          },
          {
            "id": "l2",
            "title": "构造方法",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "code", "language": "java", "code": "public class User {\n    String name;\n    int age;\n    \n    // 构造方法：初始化对象\n    public User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n}\n\nUser u = new User(\"张三\", 25);" }
            ]
          },
          {
            "id": "l3",
            "title": "封装",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "隐藏内部实现，暴露安全接口。" },
              { "id": "b2", "type": "code", "language": "java", "code": "public class User {\n    private int age;  // 私有属性\n    \n    public int getAge() {  // getter\n        return age;\n    }\n    public void setAge(int age) {  // setter\n        if (age > 0) this.age = age;\n    }\n}" }
            ]
          },
          {
            "id": "l4",
            "title": "继承",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "子类复用父类代码。" },
              { "id": "b2", "type": "code", "language": "java", "code": "public class Animal {\n    void eat() { System.out.println(\"吃东西\"); }\n}\n\npublic class Dog extends Animal {\n    void bark() { System.out.println(\"汪汪\"); }\n}\n\nDog d = new Dog();\nd.eat();   // 继承的方法\nd.bark();  // 自己的方法" }
            ]
          },
          {
            "id": "l5",
            "title": "多态",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "同一接口，不同实现。" },
              { "id": "b2", "type": "code", "language": "java", "code": "public class Animal {\n    void speak() { System.out.println(\"...\"); }\n}\npublic class Dog extends Animal {\n    @Override\n    void speak() { System.out.println(\"汪汪\"); }\n}\npublic class Cat extends Animal {\n    @Override\n    void speak() { System.out.println(\"喵喵\"); }\n}\n\nAnimal a = new Dog();\na.speak();  // 汪汪（运行时决定）" }
            ]
          },
          {
            "id": "l6",
            "title": "接口",
            "video": video,
            "blocks": [
              { "id": "b1", "type": "text", "content": "定义行为规范。" },
              { "id": "b2", "type": "code", "language": "java", "code": "public interface Flyable {\n    void fly();\n}\n\npublic class Bird implements Flyable {\n    @Override\n    public void fly() {\n        System.out.println(\"鸟在飞\");\n    }\n}" }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-oop",
    "pathId": "java",
    "title": "Java面向对象",
    "desc": "类、对象、继承、多态",
    "icon": "🎯",
    "chapters": [
      {
        "id": "ch1",
        "title": "类与对象",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "类的定义",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "java",
                "code": "public class User {\n    private String name;\n    private int age;\n    \n    public User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public void sayHello() {\n        System.out.println(\"你好，我是\" + name);\n    }\n}"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-web",
    "pathId": "java",
    "title": "JavaWeb",
    "desc": "Servlet、Web开发基础",
    "icon": "🌐",
    "chapters": [
      {
        "id": "ch1",
        "title": "Servlet基础",
        "lessons": [
          {
            "id": "l1",
            "title": "Servlet入门",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "java",
                "code": "@WebServlet(\"/hello\")\npublic class HelloServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {\n        resp.getWriter().println(\"Hello!\");\n    }\n}"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-project",
    "pathId": "java",
    "title": "项目实战",
    "desc": "SpringBoot商城项目",
    "icon": "🛒",
    "chapters": [
      {
        "id": "ch1",
        "title": "项目搭建",
        "lessons": [
          {
            "id": "l1",
            "title": "技术选型",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "SpringBoot + MyBatis + MySQL + Redis"
              },
              {
                "id": "b2",
                "type": "image",
                "src": "https://picsum.photos/seed/project-arch/800/400"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "python-basic",
    "pathId": "python",
    "title": "Python基础",
    "icon": "🐍",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "go-basic",
    "pathId": "go",
    "title": "Go基础",
    "icon": "🐹",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-basic",
    "pathId": "frontend",
    "title": "前端基础",
    "icon": "💻",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mysql-basic",
    "pathId": "database",
    "title": "MySQL基础",
    "icon": "🗄️",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "docker-basic",
    "pathId": "devops",
    "title": "Docker入门",
    "icon": "🐳",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-basic",
    "pathId": "ai",
    "title": "AI入门",
    "icon": "🤖",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "mobile-basic",
    "pathId": "mobile",
    "title": "移动端入门",
    "icon": "📱",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "security-basic",
    "pathId": "security",
    "title": "安全入门",
    "icon": "🔒",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "arch-basic",
    "pathId": "arch",
    "title": "架构入门",
    "icon": "🏗️",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      }
    ]
  }
]

// 根据ID获取课程（优先从localStorage）
const STORAGE_KEY = 'gb-course-data'
const VERSION_KEY = 'gb-course-version'
const CURRENT_VERSION = '1.0.1' // 版本号变更会强制刷新

function getStoredCourses(): Course[] {
  if (typeof window === 'undefined') return courses
  
  // 版本检查：如果版本不匹配，清空旧数据
  const storedVersion = localStorage.getItem(VERSION_KEY)
  if (storedVersion !== CURRENT_VERSION) {
    localStorage.removeItem(STORAGE_KEY)
    localStorage.setItem(VERSION_KEY, CURRENT_VERSION)
  }
  
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved) {
    try { return JSON.parse(saved) } catch { return courses }
  }
  return courses
}

export function getCourse(id: string): Course | undefined {
  return getStoredCourses().find(c => c.id === id)
}

// 根据pathId获取同路线的所有课程
export function getPathCourses(pathId: string): Course[] {
  return getStoredCourses().filter(c => c.pathId === pathId)
}

// 首页课程卡片
export const homeCoursesData = [
  { id: 1, theme: 0, icon: '☕', title: 'Java基础', name: 'Java入门到精通', desc: '系统学习Java核心语法、面向对象、集合框架', views: 1582, courseId: 'java-basic' },
  { id: 2, theme: 1, icon: '🐍', title: 'Python', name: 'Python编程入门', desc: 'Python语法简洁，适合初学者快速入门', views: 3210, courseId: 'python-basic' },
  { id: 3, theme: 2, icon: '🐹', title: 'Go语言', name: 'Go语言入门', desc: 'Go简洁高效，云原生首选', views: 2341, courseId: 'go-basic' },
  { id: 4, theme: 3, icon: '💻', title: '前端', name: 'Web前端入门', desc: 'HTML/CSS/JS，Vue/React技术栈', views: 4521, courseId: 'frontend-basic' },
  { id: 5, theme: 4, icon: '🗄️', title: '数据库', name: 'MySQL入门', desc: 'SQL语法、索引优化、事务处理', views: 2890, courseId: 'mysql-basic' },
  { id: 6, theme: 5, icon: '🐳', title: '运维', name: 'Docker与K8s', desc: '容器化部署、DevOps实践', views: 1876, courseId: 'docker-basic' },
]
