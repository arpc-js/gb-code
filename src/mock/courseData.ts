import type { Course, NavItem } from '@/types/course'

// 顶部导航
export const navItems: NavItem[] = [
  { id: 'java', name: 'Java', path: '/learn/java-basic' },
  { id: 'interview', name: '面试', path: '/learn/java-interview' },
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
export const courses: Course[] =[
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
        "video": "http://gb-code.com/assets/jisuan.webm",
        "lessons": [
          {
            "id": "l1",
            "title": "JDK下载安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "JDK是Java开发工具包，包含编译器和运行环境。"
              },
              {
                "id": "b2",
                "type": "list",
                "items": [
                  "访问Oracle官网或使用OpenJDK",
                  "下载对应系统版本",
                  "运行安装程序"
                ]
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "推荐JDK 17或21 LTS版本"
              }
            ]
          },
          {
            "id": "l2",
            "title": "环境变量配置",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "bash",
                "code": "# Windows\nJAVA_HOME=C:\\Program Files\\Java\\jdk-17\nPath=%JAVA_HOME%\\bin"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "bash",
                "code": "# 验证安装\njava -version\njavac -version"
              }
            ]
          },
          {
            "id": "l3",
            "title": "第一个程序",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    IO.println(\"Hello Java\");//第一个程序\n}"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "void main() 是程序的入口"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "IO.println()是输出函数，输出内容"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "每行程序以分号结尾"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "//后面的内容是注释，只给人看，程序不执行。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "计算",
        "video": "http://gb-code.com/assets/jisuan.webm",
        "lessons": [
          {
            "id": "l1",
            "title": "算术运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "对数值进行加减乘除运算"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": [
                  "运算符",
                  "含义",
                  "示例",
                  "结果"
                ],
                "rows": [
                  [
                    "+",
                    "加法",
                    "1 + 1",
                    "2"
                  ],
                  [
                    "-",
                    "减法",
                    "2 - 1",
                    "1"
                  ],
                  [
                    "*",
                    "乘法",
                    "2 * 2",
                    "4"
                  ],
                  [
                    "/",
                    "除法",
                    "4 / 2",
                    "2"
                  ]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    IO.println(1 + 1);   // 2\n    IO.println(2 - 1);   // 1\n    IO.println(2 * 2);   // 4\n    IO.println(4 / 2);   // 2\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "比较运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "><=比较两个数的大小，判断是否满足条件，满足就是true，不满足就是false"
              },
              {
                "id": "b3",
                "type": "table",
                "headers": [
                  "运算符",
                  "含义",
                  "示例",
                  "结果"
                ],
                "rows": [
                  [
                    ">",
                    "大于",
                    "5 > 3",
                    "true(满足)"
                  ],
                  [
                    "<",
                    "小于",
                    "5 < 3",
                    "false(不满足)"
                  ],
                  [
                    "==",
                    "等于",
                    "5 == 3",
                    "false(不满足)"
                  ],
                  [
                    "!=",
                    "不等于",
                    "5 != 3",
                    "true(满足)"
                  ]
                ]
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    IO.println(5 > 3);    // true\n    IO.println(5 < 3);    // false\n    IO.println(5 == 3);   // false\n    IO.println(5 != 3);   // true\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "逻辑运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "将两个比较计算的结果组合起来，进行与或非逻辑运算"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": [
                  "名称",
                  "运算符",
                  "规则",
                  "示例"
                ],
                "rows": [
                  [
                    "与 (并且)",
                    "&&",
                    "两边同时满足才为true",
                    "5 > 3 && 2 > 1 // true"
                  ],
                  [
                    "或 (或者)",
                    "||",
                    "满足一个就为true",
                    "5 > 3 || 1 > 2 // true"
                  ],
                  [
                    "非 (取反)",
                    "!",
                    "true变false，false变true",
                    "!5 > 3 // false"
                  ]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    // 与：必须同时满足\n    IO.println(5 > 3 && 2 > 1); // true，两个都为真，结果为真\n    IO.println(5 > 3 && 1 > 2); // false，第一个为真，第二个为假，结果为假\n\n    // 或：满足其中一个即可\n    IO.println(5 > 3 || 1 > 2); // true\n\n    // 非：结果取反\n    IO.println(!5 > 3);           // false\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "存储",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "变量",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "变量是用来存储数据的容器"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "类型 变量名 = 值;"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    int price = 1; //定义price变量存价格为1块钱\n    IO.println(price);//输出1\n    price = 2;//修改价格为2块钱\n    IO.println(price);//输出2\n }"
              }
            ]
          },
          {
            "id": "l2",
            "title": "数据类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "数据有不同类型,整数，小数，字符串等"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": [
                  "类型",
                  "含义",
                  "定义语法示例"
                ],
                "rows": [
                  [
                    "int",
                    "整数类型",
                    "int spuCount = 3;(购买数量)"
                  ],
                  [
                    "double",
                    "小数类型",
                    "double spuPrice = 2.5; (商品单价)"
                  ],
                  [
                    "String",
                    "字符串(要加双引号)",
                    "String spuName = \"牛奶\";(商品名称)"
                  ],
                  [
                    "boolean",
                    "布尔类型(存真假true,false)",
                    "boolean status = true; (支付状态)"
                  ]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "//不同类型变量存储订单信息\nvoid main() {\n    String userName = \"张三\";         //用户名称，字符串注意加双引号\n    String spuName = \"牛奶\";         //商品名称\n    double spuPrice = 2.5;         //商品单价\n    int spuCount = 3;              //购买数量\n    double total = 7.5;            //订单总价\n    boolean status = true;         //支付状态（true已支付/false未支付）\n    \n    IO.println(\"用户名称：\" + userName);\n    IO.println(\"商品名称：\" + spuName);\n    IO.println(\"商品单价：\" + spuPrice + \" 元\");\n    IO.println(\"购买数量：\" + spuCount);\n    IO.println(\"订单总价：\" + total + \" 元\");\n    IO.println(\"支付状态：\" + status);\n}"
              }
            ]
          },
          {
            "id": "l6",
            "title": "类",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "类：把多个变量打包成一类整体，方便管理和使用。是一种特殊数据类型"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "//1.定义类\npublic class 类名 {\n    public 类型 属性1;\n    public 类型 属性2;\n}\n\n//2.实例化（创建对象）\n类名 变量名 = new 类名();\n\n//3.访问属性\n变量名.属性名 = 值;  //赋值\n变量名.属性名;     //取值"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "//定义订单类\npublic class Order {\n    public String userName;\n    public String spuName;\n    public double spuPrice;\n    public int spuCount;\n    public double total;\n    public boolean status;\n}\n\nvoid main() {\n    //创建对象\n    Order order = new Order();\n    order.userName = \"张三\"; //字符串注意加双引号\n    order.spuName = \"牛奶\";\n    order.spuPrice = 2.5;\n    order.spuCount = 3;\n    order.total = 7.5;\n    order.status = true;\n    \n    //输出信息\n    IO.println(\"用户名称：\" + order.userName);\n    IO.println(\"商品名称：\" + order.spuName);\n    IO.println(\"商品单价：\" + order.spuPrice + \" 元\");\n    IO.println(\"购买数量：\" + order.spuCount);\n    IO.println(\"订单总价：\" + order.total + \" 元\");\n    IO.println(\"支付状态：\" + order.status);\n}"
              }
            ]
          },
          {
            "id": "l5",
            "title": "数组",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "数组：存储多个数据。是一种特殊数据类型"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "//1.定义数组\nList<类型> 变量名 = new ArrayList<>();\n\n//2.新增元素\n变量名.add(元素);\n\n//3.增强for遍历元素\nfor (类型 变量 : 变量名) {\n    //使用变量\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\n\npublic class Order {\n    public String userName;\n    public String spuName;\n    public double spuPrice;\n    public int spuCount;\n    public double total;\n    public boolean status;\n}\n\nvoid main() {\n    //创建数组存储多个Order\n    List<Order> list = new ArrayList<>();\n    \n    //创建第1个订单并添加到数组\n    Order order1 = new Order();\n    order1.userName = \"张三\";\n    order1.spuName = \"牛奶\";\n    order1.spuPrice = 2.5;\n    order1.spuCount = 3;\n    order1.total = 7.5;\n    order1.status = true;\n    list.add(order1);\n    \n    //创建第2个订单并添加到数组\n    Order order2 = new Order();\n    order2.userName = \"李四\";\n    order2.spuName = \"面包\";\n    order2.spuPrice = 5.5;\n    order2.spuCount = 2;\n    order2.total = 11.0;\n    order2.status = false;\n    list.add(order2);\n    \n    //遍历数组查看所有订单信息\n    for (Order order : list) {\n        IO.println(\"用户名称：\" + order.userName);\n        IO.println(\"商品名称：\" + order.spuName);\n        IO.println(\"商品单价：\" + order.spuPrice + \" 元\");\n        IO.println(\"购买数量：\" + order.spuCount);\n        IO.println(\"订单总价：\" + order.total + \" 元\");\n        IO.println(\"支付状态：\" + order.status);\n        IO.println(\"————————\");\n    }\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "if分支",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "if语句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "if语句：执行不同分支的代码,条件为true时执行代码块，比如判断是否要打折。"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "if(条件判断) {\n    //如果布尔表达式为true将执行的语句\n}"
              },
              {
                "id": "b1-2",
                "type": "flowchart-if",
                "steps": [
                  { "text": "判断条件", "type": "decision" },
                  { "text": "执行代码块", "branch": "yes" },
                  { "text": "继续执行", "type": "end" }
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    double total = 21;\n    //判断满20打8折\n    if (total >= 20) {\n        total = total * 0.8;\n        IO.println(\"满20打8折，实付：\" + total + \"元\");\n    }\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "if-else",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "二选一：满足条件执行if，否则执行else。"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "if(条件判断) {\n    //如果布尔表达式为true将执行的语句\n} else {\n    //如果布尔表达式为false将执行的语句\n}"
              },
              {
                "id": "b1-2",
                "type": "flowchart-if-else",
                "steps": [
                  { "text": "判断条件", "type": "decision" },
                  { "text": "if代码块", "branch": "yes" },
                  { "text": "else代码块", "branch": "no" },
                  { "text": "继续执行", "type": "end" }
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    double total = 21;\n    //判断是否大满20打8折\n    if (total >= 20) {\n        total = total * 0.8;\n        IO.println(\"满20打8折，实付：\" + total + \"元\");\n    } else {\n        IO.println(\"不满折扣条件，实付：\" + total + \"元\");\n    }\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "if-else if-else",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "多选一：满20打8折，满10打9折，否则不打折。"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "if(条件判断1) {\n    //条件1为true执行\n} else if(条件判断2) {\n    //条件2为true执行\n} else {\n    //以上都不满足执行\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    double total = 21;\n    if (total >= 20) {\n        total = total * 0.8;\n        IO.println(\"满20打8折，实付：\" + total + \"元\");\n    } else if (total >= 10) {\n        total = total * 0.9;\n        IO.println(\"满10打9折，实付：\" + total + \"元\");\n    } else {\n        IO.println(\"不满折扣条件，实付：\" + total + \"元\");\n    }\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "for循环",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "基本for循环",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "filename": "语法",
                "content": "for循环：循环执行n次。语法："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "for (int i =1; i <=n; i++) {\n    //代码语句\n}"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "例1：循环打印5次"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    //快捷键：fori然后填入1开始,5结束,代表执行5次\n    for (int i = 1; i <= 5; i++) {\n        IO.println(\"第\" + i + \"次执行\");\n    }\n}"
              },
              {
                "id": "b2-1",
                "type": "flowchart",
                "steps": [
                  { "text": "1.初始值i=1", "type": "start" },
                  { "text": "2.是否到第5次", "type": "decision" },
                  { "text": "3.执行代码块", "branch": "yes" },
                  { "text": "4.执行i++增加1" },
                  { "text": "结束循环", "type": "end", "branch": "no" }
                ]
              },
              {
                "id": "b5",
                "type": "text",
                "content": "例2：计算从1加到5"
              },
              {
                "id": "b6",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    int total = 0;\n    for (int i = 1; i <= 5; i++) {\n        total = total + i;\n        IO.println(\"第\" + i + \"次累计，total = \" + total);\n    }\n    IO.println(\"最终结果：\" + total);\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "break结束循环",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "break：结束循环。如加到第3次时达标，就不再继续了。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    int total = 0;\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) {\n            IO.println(\"第\" + i + \"次达标，停止累计\");\n            break;\n        }\n        total = total + i;\n        IO.println(\"第\" + i + \"次累计，total = \" + total);\n    }\n    IO.println(\"最终结果：\" + total);\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "continue跳过本次",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "continue：跳过本次迭代，继续执行下一次。如第3次跳过，不累计。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    int total = 0;\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) {\n            IO.println(\"第\" + i + \"次跳过，不累计\");\n            continue;\n        }\n        total = total + i;\n        IO.println(\"第\" + i + \"次累计，total = \" + total);\n    }\n    IO.println(\"最终结果：\" + total);\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "增强for循环",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "遍历数组，获取每一个元素。快捷键：数组变量.for"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "for (类型 变量 : 数组变量名) {\n    //使用变量\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    String[] names = {\"牛奶\", \"面包\", \"鸡蛋\"};\n    for (String name : names) {\n        IO.println(\"商品名称：\" + name);\n    }\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "面向对象",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "类和对象",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "类：把多个变量打包成一个整体。\n对象：类的实例，存储具体数据。"
              },
              {
                "id": "b1-tip",
                "type": "tip",
                "content": "Order是类（模板），new Order()创建的是对象（实例）。\n类只有一个，对象可以创建多个。"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "//定义类\nclass 类名 {\n    类型 属性名;\n}\n\n//创建对象\n类名 变量名 = new 类名();\n变量名.属性名 = 值;"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "class Order {\n    String userName;    //用户名称\n    String spuName;     //商品名称，字符串注意加双引号\n    double spuPrice;    //商品单价\n    int spuCount;       //购买数量\n    double total;       //订单总价\n    boolean status;     //支付状态\n}\n\nvoid main() {\n    Order order = new Order();\n    order.userName = \"张三\";\n    order.spuName = \"牛奶\";\n    order.spuPrice = 2.5;\n    order.spuCount = 3;\n    order.total = 7.5;\n    order.status = true;\n    \n    IO.println(\"用户名称：\" + order.userName);\n    IO.println(\"商品名称：\" + order.spuName);\n    IO.println(\"商品单价：\" + order.spuPrice + \" 元\");\n    IO.println(\"购买数量：\" + order.spuCount);\n    IO.println(\"订单总价：\" + order.total + \" 元\");\n    IO.println(\"支付状态：\" + order.status);\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "方法",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "方法：把代码打包起来，通过对象调用。"
              },
              {
                "id": "b1-tip",
                "type": "tip",
                "content": "方法必须通过对象调用：order.insert()\n不能直接调用：insert() ✗"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "class 类名 {\n    返回类型 方法名() {\n        //代码语句\n    }\n}\n\n//调用方法\n对象.方法名();"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "class Order {\n    String userName;\n    String spuName;\n    double spuPrice;\n    int spuCount;\n    double total;\n    boolean status;\n    \n    void insert() {\n        IO.println(\"保存订单：\" + userName + \", \" + spuName + \", 总价\" + total + \"元\");\n    }\n}\n\nvoid main() {\n    Order order = new Order();\n    order.userName = \"张三\";\n    order.spuName = \"牛奶\";\n    order.spuPrice = 2.5;\n    order.spuCount = 3;\n    order.total = 7.5;\n    order.status = true;\n    order.insert();\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "this关键字",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "this：指当前对象，用于区分属性和参数同名的情况。"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "class 类名 {\n    类型 属性名;\n    \n    void 方法名(类型 属性名) {\n        this.属性名 = 属性名;\n    }\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "class Order {\n    String userName;\n    String spuName;\n    double spuPrice;\n    int spuCount;\n    double total;\n    boolean status;\n    \n    void insert(String userName, String spuName, double spuPrice, int spuCount, double total, boolean status) {\n        this.userName = userName;\n        this.spuName = spuName;\n        this.spuPrice = spuPrice;\n        this.spuCount = spuCount;\n        this.total = total;\n        this.status = status;\n        IO.println(\"保存订单：\" + this.userName + \", \" + this.spuName);\n    }\n}\n\nvoid main() {\n    Order order = new Order();\n    order.insert(\"张三\", \"牛奶\", 2.5, 3, 7.5, true);\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "方法参数和返回值",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "参数：传入数据。\n返回值：返回结果，void表示无返回值。"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "返回类型 方法名(类型 参数名) {\n    return 返回值;\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "class Order {\n    String userName;\n    String spuName;\n    double spuPrice;\n    int spuCount;\n    double total;\n    boolean status;\n    \n    boolean insert(String userName, String spuName, double spuPrice, int spuCount, double total, boolean status) {\n        this.userName = userName;\n        this.spuName = spuName;\n        this.spuPrice = spuPrice;\n        this.spuCount = spuCount;\n        this.total = total;\n        this.status = status;\n        IO.println(\"保存订单：\" + userName);\n        return true;\n    }\n}\n\nvoid main() {\n    Order order = new Order();\n    boolean ok = order.insert(\"张三\", \"牛奶\", 2.5, 3, 7.5, true);\n    IO.println(\"保存结果：\" + ok);\n}"
              }
            ]
          },
          {
            "id": "l5",
            "title": "static静态",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "static：类级别属性/方法，所有对象共享，用于存储全局数据。"
              },
              {
                "id": "b1-tip",
                "type": "tip",
                "content": "静态 vs 非静态：\n• 静态：类名.方法() → Order.selectList()\n• 非静态：对象.方法() → order.insert()"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "class 类名 {\n    static 类型 属性名;           //静态属性\n    static 返回类型 方法名() {}    //静态方法\n}\n\n//通过类名访问\n类名.属性名;\n类名.方法名();"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\n\nclass Order {\n    String userName;\n    String spuName;\n    double spuPrice;\n    int spuCount;\n    double total;\n    boolean status;\n    static List<Order> list = new ArrayList<>();\n    \n    void insert() {\n        Order.list.add(this);\n        IO.println(\"保存订单：\" + userName + \", \" + spuName);\n    }\n    \n    static void selectList() {\n        for (Order order : Order.list) {\n            IO.println(\"用户：\" + order.userName + \", 商品：\" + order.spuName + \", 总价：\" + order.total + \"元\");\n        }\n    }\n}\n\nvoid main() {\n    Order order1 = new Order();\n    order1.userName = \"张三\";\n    order1.spuName = \"牛奶\";\n    order1.spuPrice = 2.5;\n    order1.spuCount = 3;\n    order1.total = 7.5;\n    order1.status = true;\n    order1.insert();\n    \n    Order order2 = new Order();\n    order2.userName = \"李四\";\n    order2.spuName = \"面包\";\n    order2.spuPrice = 5.5;\n    order2.spuCount = 2;\n    order2.total = 11.0;\n    order2.status = false;\n    order2.insert();\n    \n    Order.selectList();\n}"
              }
            ]
          },
          {
            "id": "l6",
            "title": "继承",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "extends：子类继承父类，拥有父类的属性和方法。"
              },
              {
                "id": "b1-1",
                "type": "code",
                "language": "java",
                "filename": "语法",
                "code": "class 父类 {\n    void 方法() {}\n}\n\nclass 子类 extends 父类 {\n    //自动拥有父类的方法\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\n\nclass Base<T> {\n    static List list = new ArrayList<>();\n    \n    void insert() {\n        Base.list.add(this);\n    }\n    \n    static List selectList() {\n        return Base.list;\n    }\n}\n\nclass Order extends Base<Order> {\n    String userName;\n    String spuName;\n    double spuPrice;\n    int spuCount;\n    double total;\n    boolean status;\n}\n\nvoid main() {\n    Order order = new Order();\n    order.userName = \"张三\";\n    order.spuName = \"牛奶\";\n    order.spuPrice = 2.5;\n    order.spuCount = 3;\n    order.total = 7.5;\n    order.status = true;\n    order.insert();\n    \n    IO.println(\"订单数：\" + Order.selectList().size());\n}"
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
    "desc": "HTTP接口、远程调用",
    "icon": "🌐",
    "chapters": [
      {
        "id": "ch1",
        "title": "HTTP接口",
        "lessons": [
          {
            "id": "l1",
            "title": "为什么需要HTTP",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "程序能下单保存了，但无法通过网页操作。\nHTTP接口 = 远程调函数。用户通过网页远程下单。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "创建SpringBoot Web项目",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "SpringBoot是Java Web开发框架，自动配置了Web服务器、HTTP处理等功能。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "创建SpringBoot Web项目的步骤："
              },
              {
                "id": "b3",
                "type": "list",
                "items": [
                  "第1步：打开IDEA，点击创建项目",
                  "第2步：选择 Springboot maven项目，点下一步",
                  "第4步：勾选 Spring Web 依赖（提供HTTP接口功能）",
                  "第5步：点击创建",
                ]
              }
            ]
          },
          {
            "id": "l2-5",
            "title": "GET接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "HTTP分为GET和POST接口，GET用来获取数据，创建GET接口："
              },
              {
                "id": "b2",
                "type": "text",
                "content": "第1步：在DemoApplication.java中添加@RestController注解"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "第2步：@GetMapping定义GET接口，@RequestParam定义请求参数"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "import org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.web.bind.annotation.*;\n\n@SpringBootApplication\n@RestController\npublic class DemoApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n    // GET请求：查询问候语\n    @GetMapping(\"/hello\")\n    public String hello(@RequestParam String name, @RequestParam int age) {\n        return \"你好，\" + name + \"，你\" + age + \"岁了！\";\n    }\n}"
              },
              {
                "id": "b5",
                "type": "text",
                "content": "第3步：启动项目，浏览器访问"
              },
              {
                "id": "b6",
                "type": "list",
                "items": [
                  "点击main方法左侧绿色箭头启动",
                  "浏览器访问：http://localhost:8080/hello?name=张三&age=18",
                  "页面显示：你好，张三，你18岁了！"
                ]
              },
              {
                "id": "b7",
                "type": "tip",
                "content": "URL结构说明：\nhttp://localhost:8080是服务器地址\n/hello是接口路径\n?name=张三&age=18是参数（用?开始，多个参数用&连接）"
              }
            ]
          },
          {
            "id": "l2-6",
            "title": "POST接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "POST接口用来创建数据，参数用JSON格式传递。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "第1步：定义请求对象和响应对象"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "HelloReq.java",
                "code": "// 请求对象\npublic class HelloReq {\n    public String name;\n    public int age;\n}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "HelloResp.java",
                "code": "// 响应对象\npublic class HelloResp {\n    public String message;\n}"
              },
              {
                "id": "b5",
                "type": "text",
                "content": "第2步：@PostMapping定义POST接口，@RequestBody接收JSON参数"
              },
              {
                "id": "b6",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "    // POST请求：创建问候语\n    @PostMapping(\"/hello\")\n    public HelloResp createHello(@RequestBody HelloReq req) {\n        HelloResp resp = new HelloResp();\n        resp.message = \"你好，\" + req.name + \"，你\" + req.age + \"岁了！\";\n        return resp;\n    }"
              },
              {
                "id": "b7",
                "type": "text",
                "content": "第3步：创建 test.http 文件测试 (post无法浏览器url访问,用http文件访问)"
              },
              {
                "id": "b8",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### POST请求\nPOST http://localhost:8080/hello\nContent-Type: application/json\n\n{\"name\": \"张三\", \"age\": 18}"
              },
              {
                "id": "b9",
                "type": "tip",
                "content": "JSON和请求对象的映射关系：\n{\"name\": \"张三\", \"age\": 18}\nname → HelloReq.name = \"张三\"\nage → HelloReq.age = 18"
              },
              {
                "id": "b10",
                "type": "text",
                "content": "点击绿色箭头发送请求，响应结果："
              },
              {
                "id": "b11",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\"message\": \"你好，张三，你18岁了！\"}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "下单接口",
        "lessons": [
          {
            "id": "l1",
            "title": "下单接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "上一章我们用 order.insert() 保存订单。\n现在通过HTTP接口，让用户从网页远程调用这些方法。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "定义请求对象和响应对象"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "CreateOrderReq.java",
                "code": "// 请求对象：与Order属性一致\npublic class CreateOrderReq {\n    public String userName;\n    public String spuName;\n    public double spuPrice;\n    public int spuCount;\n    public double total;\n    public boolean status;\n}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "CreateOrderResp.java",
                "code": "// 响应对象\npublic class CreateOrderResp {\n    public int orderId;\n}"
              },
              {
                "id": "b5",
                "type": "text",
                "content": "定义公共响应对象BaseResp（统一返回格式）"
              },
              {
                "id": "b6",
                "type": "code",
                "language": "java",
                "filename": "BaseResp.java",
                "code": "// 公共响应对象\npublic class BaseResp<T> {\n    public int code;      // 0成功，非0失败\n    public String msg;\n    public T data;        // 业务数据\n    \n    public static <T> BaseResp<T> ok(T data) {\n        BaseResp<T> resp = new BaseResp<>();\n        resp.code = 0;\n        resp.msg = \"success\";\n        resp.data = data;\n        return resp;\n    }\n}"
              },
              {
                "id": "b7",
                "type": "text",
                "content": "下单接口实现"
              },
              {
                "id": "b8",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@SpringBootApplication\n@RestController\npublic class DemoApplication {\n    \n    static List<Order> orders = new ArrayList<>();\n    static int idCounter = 1;\n\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n\n    // 下单接口\n    @PostMapping(\"/createOrder\")\n    public BaseResp<CreateOrderResp> createOrder(@RequestBody CreateOrderReq req) {\n        Order order = new Order();\n        order.id = idCounter++;\n        order.userName = req.userName;\n        order.spuName = req.spuName;\n        order.spuPrice = req.spuPrice;\n        order.spuCount = req.spuCount;\n        order.total = req.total;\n        order.status = req.status;\n        orders.add(order);\n        \n        CreateOrderResp data = new CreateOrderResp();\n        data.orderId = order.id;\n        return BaseResp.ok(data);\n    }\n}"
              },
              {
                "id": "b9",
                "type": "text",
                "content": "test.http测试下单："
              },
              {
                "id": "b10",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 下单\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\n\n{\"userName\": \"张三\", \"spuName\": \"牛奶\", \"spuPrice\": 2.5, \"spuCount\": 3, \"total\": 7.5, \"status\": true}"
              },
              {
                "id": "b11",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\"code\": 0, \"msg\": \"success\", \"data\": {\"orderId\": 1}}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "查询接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "定义请求对象和接口实现"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "GetOrdersReq.java",
                "code": "// 请求对象（无参数）\npublic class GetOrdersReq {\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "    // 查询接口\n    @PostMapping(\"/getOrders\")\n    public BaseResp<List<Order>> getOrders(@RequestBody GetOrdersReq req) {\n        return BaseResp.ok(orders);\n    }"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "test.http测试查询："
              },
              {
                "id": "b5",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 查询订单\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\n\n{}"
              },
              {
                "id": "b6",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\n  \"code\": 0,\n  \"msg\": \"success\",\n  \"data\": [\n    {\"userName\": \"张三\", \"spuName\": \"牛奶\", \"spuPrice\": 2.5, \"spuCount\": 3, \"total\": 7.5, \"status\": true}\n  ]\n}"
              },
              {
                "id": "b7",
                "type": "tip",
                "content": "data是JSON数组，用[]包裹多个订单对象"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-database",
    "pathId": "java",
    "title": "Java数据库",
    "desc": "SQLite、MyBatis、数据库操作",
    "icon": "🗄️",
    "chapters": [
      {
        "id": "ch1",
        "title": "SQLite数据库基础",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "为什么需要数据库",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "之前的订单数据存在内存里，程序重启就丢失了。\n数据库 = 持久化存储数据的仓库。程序关闭后数据还在。"
              },
              {
                "id": "b2",
                "type": "list",
                "items": [
                  "内存存储：程序运行时有效，重启丢失",
                  "数据库存储：永久保存在磁盘，随时读取"
                ]
              },
              {
                "id": "b3",
                "type": "text",
                "content": "SQLite是什么？\n最简单的数据库，一个文件就是一个数据库。\n不需要安装服务器，适合学习和小型项目。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "IDEA创建SQLite数据库",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用IDEA的Database工具直接创建SQLite数据库文件。"
              },
              {
                "id": "b2",
                "type": "list",
                "items": [
                  "第1步：打开IDEA右侧 Database 面板",
                  "第2步：点击 + 号 → Data Source → SQLite",
                  "第3步：下载缺少的驱动文件",
                  "第4步：点击 Test Connection 测试连接",
                  "第5步：点击确定,项目中生成identifier.sqlite数据库"
                ]
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "如果提示缺少驱动，点击 Download 下载即可。确定后自动创建identifier.sqlite数据库。"
              }
            ]
          },
          {
            "id": "l3",
            "title": "SQL脚本建表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "在IDEA中新建SQL文件，编写建表语句。\n右键项目 → New → File → 输入 init.sql"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "sql",
                "filename": "init.sql",
                "code": "-- 创建订单表\ncreate table if not exists orders (\n    id integer primary key autoincrement,\n    user_name text,\n    spu_name text,\n    spu_price real,\n    spu_count integer,\n    total real,\n    status integer,\n    created_at text\n);"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "表结构说明："
              },
              {
                "id": "b4",
                "type": "table",
                "headers": ["字段名", "类型", "说明"],
                "rows": [
                  ["id", "integer(整数)", "主键，自动递增"],
                  ["user_name", "text(字符串)", "用户名称"],
                  ["spu_name", "text(字符串)", "商品名称"],
                  ["spu_price", "real(小数)", "商品单价"],
                  ["spu_count", "integer(整数)", "购买数量"],
                  ["total", "real(小数)", "订单总价"],
                  ["status", "integer(整数)", "支付状态(0未支付/1已支付)"],
                  ["created_at", "text(字符串)", "创建时间"]
                ]
              },
              {
                "id": "b5",
                "type": "text",
                "content": "执行SQL：在init.sql文件上右键 → Run 'init.sql' → 选择刚创建的shop数据源\n或者选中SQL语句，按 Ctrl+Enter 执行"
              }
            ]
          },
          {
            "id": "l4",
            "title": "insert语法",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "insert语句：向表中插入一条数据。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "sql",
                "filename": "insert语法",
                "code": "insert into 表名 values (值1, 值2, 值3, ...);"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "在IDEA的Database控制台执行：右键数据库 → 新建查询控制台 → 输入SQL语句 → 点击执行"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "sql",
                "filename": "在控制台执行",
                "code": "-- 插入一条订单（id自增，填写null）\ninsert into orders values (null, '张三', '牛奶', 2.5, 3, 7.5, 1, '2026-01-28');\n\n-- 再插入一条\ninsert into orders values (null, '李四', '面包', 5.5, 2, 11.0, 0, '2026-01-28');"
              },
              {
                "id": "b5",
                "type": "tip",
                "content": "id自增，填写null自动生成。执行后双击orders表查看数据。"
              }
            ]
          },
          {
            "id": "l5",
            "title": "select语法",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "select语句：从表中查询数据。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "完整语法："
              },
              {
                "id": "b3",
                "type": "code",
                "language": "sql",
                "filename": "select语法",
                "code": "select 字段1, 字段2, ... from 表名;\nselect * from 表名;                    -- *表示所有字段\nselect 字段1, 字段2 from 表名 where 条件;"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "sql",
                "filename": "在控制台执行",
                "code": "-- 查询所有订单（所有字段）\nselect * from orders;\n\n-- 只查询用户名和商品名\nselect user_name, spu_name from orders;"
              }
            ]
          },
          {
            "id": "l6",
            "title": "update语法",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "update语句：修改表中已有的数据。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "完整语法："
              },
              {
                "id": "b3",
                "type": "code",
                "language": "sql",
                "filename": "update语法",
                "code": "update 表名 set 字段1 = 值1, 字段2 = 值2, ... where 条件;"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "sql",
                "filename": "在控制台执行",
                "code": "-- 把id=1的订单改为已支付\nupdate orders set status = 1 where id = 1;\n\n-- 修改多个字段\nupdate orders set spu_price = 3.0, status = 1 where id = 1;"
              },
              {
                "id": "b5",
                "type": "tip",
                "content": "update必须带where条件，否则会修改所有数据！"
              }
            ]
          },
          {
            "id": "l7",
            "title": "delete语法",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "delete语句：从表中删除数据。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "完整语法："
              },
              {
                "id": "b3",
                "type": "code",
                "language": "sql",
                "filename": "delete语法",
                "code": "delete from 表名 where 条件;"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "sql",
                "filename": "在控制台执行",
                "code": "-- 删除id=1的订单\ndelete from orders where id = 1;\n\n-- 删除所有未支付订单\ndelete from orders where status = 0;"
              },
              {
                "id": "b5",
                "type": "tip",
                "content": "delete必须带where条件，否则会删除所有数据！"
              }
            ]
          },
          {
            "id": "l8",
            "title": "where条件详解",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "where子句：用于筛选满足条件的数据。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "语法："
              },
              {
                "id": "b3",
                "type": "code",
                "language": "sql",
                "filename": "where语法",
                "code": "select ... from 表名 where 条件;\nupdate 表名 set ... where 条件;\ndelete from 表名 where 条件;"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "常用比较运算符："
              },
              {
                "id": "b5",
                "type": "table",
                "headers": ["运算符", "含义", "示例"],
                "rows": [
                  ["=", "等于", "where id = 1"],
                  ["!= 或 <>", "不等于", "where paid != 1"],
                  [">", "大于", "where total > 10"],
                  ["<", "小于", "where total < 5"],
                  [">=", "大于等于", "where total >= 10"],
                  ["<=", "小于等于", "where total <= 3"]
                ]
              },
              {
                "id": "b6",
                "type": "code",
                "language": "sql",
                "filename": "在控制台执行",
                "code": "-- 查询单价大于3元的订单\nselect * from orders where spu_price > 3;\n\n-- 查询已支付的订单\nselect * from orders where status = 1;\n\n-- 查询未支付的订单\nselect * from orders where status = 0;"
              }
            ]
          },
          {
            "id": "l9",
            "title": "and/or逻辑运算符",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "当需要多个条件组合时，使用and和or逻辑运算符。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "and（与）：两个条件必须同时满足。"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "sql",
                "filename": "and语法",
                "code": "select ... from 表名 where 条件1 and 条件2;"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "sql",
                "filename": "在控制台执行",
                "code": "-- 查询张三的已支付订单\nselect * from orders where user_name = '张三' and paid = 1;\n\n-- 查询总价大于10 并且 已支付的订单\nselect * from orders where total > 10 and paid = 1;"
              },
              {
                "id": "b5",
                "type": "text",
                "content": "or（或）：两个条件满足其中一个即可。"
              },
              {
                "id": "b6",
                "type": "code",
                "language": "sql",
                "filename": "or语法",
                "code": "select ... from 表名 where 条件1 or 条件2;"
              },
              {
                "id": "b7",
                "type": "code",
                "language": "sql",
                "filename": "在控制台执行",
                "code": "-- 查询张三 或者 李四的订单\nselect * from orders where user_name = '张三' or user_name = '李四';\n\n-- 查询总价小于5 或者 总价大于20的订单\nselect * from orders where total < 5 or total > 20;"
              },
              {
                "id": "b10",
                "type": "tip",
                "content": "and优先级高于or，复杂条件建议用括号明确优先级，避免逻辑错误。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "MyBatis操作数据库",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "添加依赖和配置",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用Java代码操作数据库，需要MyBatis框架。\n第1步：在pom.xml添加依赖"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "xml",
                "filename": "pom.xml",
                "code": "<dependencies>\n    <!-- MyBatis -->\n    <dependency>\n        <groupId>org.mybatis.spring.boot</groupId>\n        <artifactId>mybatis-spring-boot-starter</artifactId>\n        <version>3.0.3</version>\n    </dependency>\n    \n    <!-- SQLite驱动 -->\n    <dependency>\n        <groupId>org.xerial</groupId>\n        <artifactId>sqlite-jdbc</artifactId>\n        <version>3.45.1.0</version>\n    </dependency>\n</dependencies>"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "第2步：配置application.yml\n指定数据库文件路径（用IDEA创建的那个shop.db）"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "yaml",
                "filename": "application.yml",
                "code": "spring:\n  datasource:\n    url: jdbc:sqlite:D:/demo/shop.db\n    driver-class-name: org.sqlite.JDBC\n\nmybatis:\n  configuration:\n    map-underscore-to-camel-case: true"
              },
              {
                "id": "b5",
                "type": "tip",
                "content": "url路径改成你的shop.db实际路径"
              }
            ]
          },
          {
            "id": "l2",
            "title": "定义实体类",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "定义订单实体类，对应数据库表的字段。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Order.java",
                "code": "public class Order {\n    public Integer id;        // 对应 id 字段\n    public String userName;   // 对应 user_name 字段\n    public String item;       // 对应 item 字段\n    public Double total;      // 对应 total 字段\n    public Integer paid;      // 对应 paid 字段(0未支付/1已支付)\n    public String createdAt;  // 对应 created_at 字段\n}"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "userName 自动映射到 user_name（驼峰转下划线）"
              }
            ]
          },
          {
            "id": "l3",
            "title": "定义Mapper接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Mapper接口声明数据库操作方法。\n@Mapper注解让Spring自动创建实现类。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "OrderMapper.java",
                "code": "import org.apache.ibatis.annotations.*;\nimport java.util.List;\n\n@Mapper\npublic interface OrderMapper {\n\n    // 查询所有订单\n    @Select(\"select * from orders\")\n    List<Order> findAll();\n\n    // 根据ID查询\n    @Select(\"select * from orders where id = #{id}\")\n    Order findById(Integer id);\n\n    // 插入订单\n    @Insert(\"insert into orders (user_name, item, total, paid, created_at) values (#{userName}, #{item}, #{total}, #{paid}, #{createdAt})\")\n    void insert(Order order);\n\n    // 更新订单\n    @Update(\"update orders set user_name=#{userName}, item=#{item}, total=#{total}, paid=#{paid} where id=#{id}\")\n    void update(Order order);\n\n    // 删除订单\n    @Delete(\"delete from orders where id = #{id}\")\n    void delete(Integer id);\n}"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "#{userName} 表示取Order对象的userName属性值\nMyBatis自动把对象属性填入SQL"
              }
            ]
          },
          {
            "id": "l4",
            "title": "MyBatis查询订单",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "在接口中注入Mapper，调用数据库操作。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@Autowired\nOrderMapper orderMapper;  // 注入Mapper\n\n// 查询所有订单接口\n@PostMapping(\"/getOrders\")\npublic BaseResp<List<Order>> getOrders() {\n    List<Order> orders = orderMapper.findAll();\n    return BaseResp.ok(orders);\n}\n\n// 根据ID查询订单\n@PostMapping(\"/getOrder\")\npublic BaseResp<Order> getOrder(@RequestBody Map<String, Integer> req) {\n    Order order = orderMapper.findById(req.get(\"id\"));\n    return BaseResp.ok(order);\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 查询所有订单\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\n\n{}\n\n### 根据ID查询订单\nPOST http://localhost:8080/getOrder\nContent-Type: application/json\n\n{\"id\": 1}"
              }
            ]
          },
          {
            "id": "l5",
            "title": "MyBatis增删改",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "插入、更新、删除操作："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "// 新增订单\n@PostMapping(\"/addOrder\")\npublic BaseResp<String> addOrder(@RequestBody Order order) {\n    orderMapper.insert(order);\n    return BaseResp.ok(\"新增成功\");\n}\n\n// 更新订单\n@PostMapping(\"/updateOrder\")\npublic BaseResp<String> updateOrder(@RequestBody Order order) {\n    orderMapper.update(order);\n    return BaseResp.ok(\"更新成功\");\n}\n\n// 删除订单\n@PostMapping(\"/deleteOrder\")\npublic BaseResp<String> deleteOrder(@RequestBody Map<String, Integer> req) {\n    orderMapper.delete(req.get(\"id\"));\n    return BaseResp.ok(\"删除成功\");\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 新增订单\nPOST http://localhost:8080/addOrder\nContent-Type: application/json\n\n{\"userName\": \"张三\", \"item\": \"可乐x5\", \"total\": 15.0, \"paid\": 0, \"createdAt\": \"2026-01-28\"}\n\n### 更新订单\nPOST http://localhost:8080/updateOrder\nContent-Type: application/json\n\n{\"id\": 1, \"userName\": \"张三\", \"item\": \"牛奶x10\", \"total\": 25.0, \"paid\": 1}\n\n### 删除订单\nPOST http://localhost:8080/deleteOrder\nContent-Type: application/json\n\n{\"id\": 1}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "MyBatis保存下单",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "改写下单接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "之前HTTP章节的下单接口把订单存到内存List，重启就丢失了。\n现在用MyBatis把订单保存到数据库，永久存储。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "改写下单接口：计算总价后，调用Mapper插入数据库"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@Autowired\nOrderMapper orderMapper;\n\n// 商品单价\nstatic Map<String, Double> prices = new HashMap<>();\nstatic {\n    prices.put(\"牛奶\", 2.5);\n    prices.put(\"面包\", 5.5);\n    prices.put(\"可乐\", 3.0);\n}\n\n// 下单接口（保存到数据库）\n@PostMapping(\"/createOrder\")\npublic BaseResp<CreateOrderResp> createOrder(@RequestBody CreateOrderReq req) {\n    // 计算总价\n    double total = 0;\n    StringBuilder itemStr = new StringBuilder();\n    for (listItem item : req.items) {\n        Double price = prices.get(item.name);\n        if (price == null) {\n            return BaseResp.error(1, \"商品不存在: \" + item.name);\n        }\n        total = total + price * item.count;\n        itemStr.append(item.name).append(\"x\").append(item.count).append(\",\");\n    }\n    \n    // 保存订单到数据库\n    Order order = new Order();\n    order.userName = req.userName;\n    order.item = itemStr.toString();\n    order.total = total;\n    order.paid = 0;  // 默认未支付\n    order.createdAt = \"2026-01-28\";\n    orderMapper.insert(order);  // 插入数据库\n    \n    CreateOrderResp data = new CreateOrderResp();\n    data.total = total;\n    return BaseResp.ok(data);\n}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 下单（保存到数据库）\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\n\n{\"userName\": \"张三\", \"items\": [{\"name\": \"牛奶\", \"count\": 3}, {\"name\": \"面包\", \"count\": 2}]}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "改写查询订单接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "改写查询订单接口：从数据库查询订单列表"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "// 查询所有订单（从数据库）\n@PostMapping(\"/getOrders\")\npublic BaseResp<List<Order>> getOrders(@RequestBody GetOrdersReq req) {\n    List<Order> orders = orderMapper.findAll();  // 从数据库查询\n    return BaseResp.ok(orders);\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 查询所有订单（从数据库）\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\n\n{}"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "重启程序后再次查询，数据还在！因为已经保存到数据库文件了。"
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
        "title": "登录与拦截",
        "lessons": [
          {
            "id": "l1",
            "title": "为什么需要登录",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "之前的下单接口，任何人都可以调用。\n实际业务中，必须登录后才能下单，才知道是谁在买。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "登录流程：\n1、用户输入用户名+密码（+验证码）\n2、服务器验证用户名密码\n3、验证成功，颁发JWT令牌给用户\n4、用户每次请求携带JWT令牌\n5、服务器验证令牌，确认用户身份"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "JWT是什么？\nJSON Web Token，一个加密字符串，包含用户信息。\n优点：无状态，服务器不用存储会话，适合跨端（APP/小程序/Web）。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "添加JWT依赖",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "在pom.xml添加JWT依赖："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "xml",
                "filename": "pom.xml",
                "code": "<!-- JWT -->\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-api</artifactId>\n    <version>0.12.5</version>\n</dependency>\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-impl</artifactId>\n    <version>0.12.5</version>\n</dependency>\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-jackson</artifactId>\n    <version>0.12.5</version>\n</dependency>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "JWT工具类",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "编写JWT工具类，用于生成和验证令牌。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "JwtUtil.java",
                "code": "import io.jsonwebtoken.*;\nimport io.jsonwebtoken.security.Keys;\nimport javax.crypto.SecretKey;\nimport java.util.Date;\n\npublic class JwtUtil {\n    // 秘钥（生产环境应放配置文件）\n    static String SECRET = \"my-secret-key-1234567890-abcdefghijk\";\n    static SecretKey KEY = Keys.hmacShaKeyFor(SECRET.getBytes());\n    \n    // 生成JWT令牌\n    public static String createToken(Integer userId) {\n        return Jwts.builder()\n            .subject(String.valueOf(userId))  // 存放用户ID\n            .issuedAt(new Date())             // 签发时间\n            .expiration(new Date(System.currentTimeMillis() + 7 * 24 * 3600 * 1000))  // 7天过期\n            .signWith(KEY)                    // 签名\n            .compact();\n    }\n    \n    // 验证JWT令牌，返回用户ID\n    public static Integer parseToken(String token) {\n        try {\n            Claims claims = Jwts.parser()\n                .verifyWith(KEY)\n                .build()\n                .parseSignedClaims(token)\n                .getPayload();\n            return Integer.parseInt(claims.getSubject());\n        } catch (Exception e) {\n            return null;  // 令牌无效或过期\n        }\n    }\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "用户表设计",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "创建用户表存储用户信息："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "sql",
                "filename": "init.sql",
                "code": "create table if not exists users (\n    id integer primary key autoincrement,\n    username text,\n    password text\n);\n\n-- 插入测试用户\ninsert into users (username, password) values ('admin', '123456');"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "定义用户实体类和Mapper："
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "User.java",
                "code": "public class User {\n    public Integer id;\n    public String username;\n    public String password;\n}"
              },
              {
                "id": "b5",
                "type": "code",
                "language": "java",
                "filename": "UserMapper.java",
                "code": "@Mapper\npublic interface UserMapper {\n    @Select(\"select * from users where username = #{username}\")\n    User findByUsername(String username);\n}"
              }
            ]
          },
          {
            "id": "l5",
            "title": "登录接口",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "定义登录请求/响应对象："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "LoginReq.java",
                "code": "public class LoginReq {\n    public String username;\n    public String password;\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "LoginResp.java",
                "code": "public class LoginResp {\n    public String token;  // JWT令牌\n}"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "登录接口实现：验证用户名密码，成功后颁发JWT"
              },
              {
                "id": "b5",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@Autowired\nUserMapper userMapper;\n\n@PostMapping(\"/login\")\npublic BaseResp<LoginResp> login(@RequestBody LoginReq req) {\n    // 查询用户\n    User user = userMapper.findByUsername(req.username);\n    if (user == null) {\n        return BaseResp.error(1, \"用户不存在\");\n    }\n    \n    // 验证密码\n    if (!user.password.equals(req.password)) {\n        return BaseResp.error(2, \"密码错误\");\n    }\n    \n    // 登录成功，颁发JWT令牌\n    String token = JwtUtil.createToken(user.id);\n    \n    LoginResp resp = new LoginResp();\n    resp.token = token;\n    return BaseResp.ok(resp);\n}"
              },
              {
                "id": "b6",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 登录\nPOST http://localhost:8080/login\nContent-Type: application/json\n\n{\"username\": \"admin\", \"password\": \"123456\"}"
              },
              {
                "id": "b7",
                "type": "text",
                "content": "登录成功后返回："
              },
              {
                "id": "b8",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\n  \"code\": 0,\n  \"msg\": \"success\",\n  \"data\": {\n    \"token\": \"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA...\"\n  }\n}"
              }
            ]
          },
          {
            "id": "l6",
            "title": "登录拦截器",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "拦截器：统一验证所有请求的JWT令牌。\n用户每次请求在Header中携带token，拦截器验证后放行。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "AuthInterceptor.java",
                "code": "import org.springframework.web.servlet.HandlerInterceptor;\nimport jakarta.servlet.http.*;\n\npublic class AuthInterceptor implements HandlerInterceptor {\n    \n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {\n        // 从 Header 获取 token\n        String token = request.getHeader(\"token\");\n        \n        // 验证 token\n        Integer userId = JwtUtil.parseToken(token);\n        if (userId == null) {\n            response.setContentType(\"application/json;charset=UTF-8\");\n            response.getWriter().write(\"{\\\"code\\\": 401, \\\"msg\\\": \\\"未登录\\\"}\");\n            return false;  // 拦截，不放行\n        }\n        \n        // 将用户ID存入request，后续接口可以获取\n        request.setAttribute(\"userId\", userId);\n        return true;  // 放行\n    }\n}"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "注册拦截器，排除登录接口："
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "WebConfig.java",
                "code": "import org.springframework.context.annotation.Configuration;\nimport org.springframework.web.servlet.config.annotation.*;\n\n@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    \n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(new AuthInterceptor())\n            .addPathPatterns(\"/**\")           // 拦截所有请求\n            .excludePathPatterns(\"/login\");   // 排除登录接口\n    }\n}"
              },
              {
                "id": "b5",
                "type": "text",
                "content": "请求时携带token："
              },
              {
                "id": "b6",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 下单（携带token）\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\ntoken: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA...\n\n{\"userName\": \"张三\", \"items\": [{\"name\": \"牛奶\", \"count\": 3}]}\n\n### 查询订单（携带token）\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\ntoken: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA...\n\n{}"
              },
              {
                "id": "b7",
                "type": "tip",
                "content": "不携带token或token无效，返回401未登录。\n携带有效token，正常调用接口。"
              }
            ]
          },
          {
            "id": "l7",
            "title": "接口获取当前用户",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "拦截器验证后，将userId存入request。\n接口中可以获取当前登录用户："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/createOrder\")\npublic BaseResp<CreateOrderResp> createOrder(@RequestBody CreateOrderReq req, HttpServletRequest request) {\n    // 获取当前登录用户ID\n    Integer userId = (Integer) request.getAttribute(\"userId\");\n    \n    // ... 计算总价 ...\n    \n    // 订单关联当前用户\n    Order order = new Order();\n    order.userId = userId;  // 存储用户ID\n    order.item = itemStr.toString();\n    order.total = total;\n    order.paid = 0;\n    orderMapper.insert(order);\n    \n    // ...\n}"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "JWT优势：无状态，不用存Session，APP/小程序/Web都能用。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "下单功能",
        "lessons": [
          {
            "id": "l1",
            "title": "下单接口",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          },
          {
            "id": "l2",
            "title": "查询订单接口",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "微信支付",
        "lessons": [
          {
            "id": "l1",
            "title": "支付接口对接",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "商品表",
        "lessons": [
          {
            "id": "l1",
            "title": "商品表设计",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "Linux部署",
        "lessons": [
          {
            "id": "l1",
            "title": "服务器部署",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "Git版本控制",
        "lessons": [
          {
            "id": "l1",
            "title": "为什么需要Git",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "代码写错了想回退怎么办？多人协作如何管理代码？\nGit = 代码版本管理工具，记录每次修改，随时回退。"
              },
              {
                "id": "b2",
                "type": "list",
                "items": [
                  "保存代码历史，随时回退到任意版本",
                  "多人协作，不会互相覆盖代码",
                  "分支开发，新功能单独开发不影响主线"
                ]
              }
            ]
          },
          {
            "id": "l2",
            "title": "IDEA初始化Git仓库",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "IDEA内置了Git可视化工具，无需命令行。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "初始化Git仓库：\n菜单栏 VCS → Create Git Repository → 选择项目根目录 → OK"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "初始化后，项目根目录会生成.git文件夹（隐藏）。\n文件名变红色表示未跟踪，变绿色表示已添加。"
              }
            ]
          },
          {
            "id": "l3",
            "title": "提交代码",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "提交 = 保存当前版本到Git历史记录。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "提交步骤：\n1、快捷键 Ctrl+K 或点击左下角 Commit 按钮\n2、勾选要提交的文件\n3、填写提交信息（描述这次修改了什么）\n4、点击 Commit 按钮"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "提交信息要清晰，例如：“完成下单接口”“修复登录bug”"
              }
            ]
          },
          {
            "id": "l4",
            "title": "查看历史记录",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "查看所有提交历史：\n左下角 Git 面板 → Log 标签页"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "在Log面板可以：\n• 查看每次提交的信息\n• 查看每次修改了哪些文件\n• 对比两个版本的差异"
              }
            ]
          },
          {
            "id": "l5",
            "title": "回退版本",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "代码写错了，想回到之前的版本："
              },
              {
                "id": "b2",
                "type": "text",
                "content": "回退步骤：\n1、在 Git Log 中找到要回退的提交\n2、右键 → Reset Current Branch to Here\n3、选择 Hard（彻底回退）或 Soft（保留修改）"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "Hard会丢失未提交的修改，谨慎使用！"
              }
            ]
          },
          {
            "id": "l6",
            "title": "推送到远程仓库",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "推送 = 把本地代码上传到远程服务器（GitHub/Gitee）。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "推送步骤：\n1、在GitHub/Gitee创建远程仓库\n2、IDEA中 Git → Manage Remotes → 添加远程地址\n3、Ctrl+Shift+K 或 Git → Push\n4、输入账号密码，推送成功"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "推送后代码保存在云端，换电脑也能拉取代码继续开发。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-interview",
    "pathId": "interview",
    "title": "面试八股文",
    "desc": "Java面试必背知识点",
    "icon": "📝",
    "chapters": [
      {
        "id": "ch1",
        "title": "Java基础",
        "lessons": [
          {
            "id": "l1",
            "title": "Java基础面试题",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "heading",
                "content": "1. ==和equals的区别？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "==比较的是内存地址，equals比较的是内容。\n• 基本类型：==比较值\n• 引用类型：==比较地址，equals默认也比较地址，但String等类重写了equals比较内容"
              },
              {
                "id": "b3",
                "type": "heading",
                "content": "2. String、StringBuilder、StringBuffer区别？"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "• String：不可变，每次修改都创建新对象\n• StringBuilder：可变，线程不安全，性能高\n• StringBuffer：可变，线程安全（synchronized），性能略低"
              },
              {
                "id": "b5",
                "type": "heading",
                "content": "3. final关键字的作用？"
              },
              {
                "id": "b6",
                "type": "text",
                "content": "• 修饰类：类不能被继承\n• 修饰方法：方法不能被重写\n• 修饰变量：变量不能被修改（引用类型是地址不能变）"
              },
              {
                "id": "b7",
                "type": "heading",
                "content": "4. 接口和抽象类的区别？"
              },
              {
                "id": "b8",
                "type": "text",
                "content": "• 接口：只能定义抽象方法，支持多继承\n• 抽象类：可以有普通方法和成员变量，只能单继承\n• Java8后接口可以有default方法"
              },
              {
                "id": "b9",
                "type": "heading",
                "content": "5. 重载和重写的区别？"
              },
              {
                "id": "b10",
                "type": "text",
                "content": "• 重载（Overload）：同一个类中，方法名相同，参数不同\n• 重写（Override）：子类重新实现父类方法，方法签名必须相同"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "集合框架",
        "lessons": [
          {
            "id": "l1",
            "title": "集合框架面试题",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "heading",
                "content": "1. ArrayList和LinkedList的区别？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "• ArrayList：基于数组，查询快O(1)，增删慢O(n)\n• LinkedList：基于双向链表，查询慢O(n)，增删快O(1)"
              },
              {
                "id": "b3",
                "type": "heading",
                "content": "2. HashMap的底层实现？"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "JDK1.8：数组 + 链表 + 红黑树\n• 默认容量16，负载因子0.75\n• 链表长度>8且数组长度>=64时转红黑树\n• 红黑树节点<6时退化为链表"
              },
              {
                "id": "b5",
                "type": "heading",
                "content": "3. HashMap和Hashtable的区别？"
              },
              {
                "id": "b6",
                "type": "text",
                "content": "• HashMap：线程不安全，允许null键值\n• Hashtable：线程安全（synchronized），不允许null\n• 推荐用ConcurrentHashMap替代Hashtable"
              },
              {
                "id": "b7",
                "type": "heading",
                "content": "4. ConcurrentHashMap线程安全原理？"
              },
              {
                "id": "b8",
                "type": "text",
                "content": "JDK1.8：CAS + synchronized\n• put时如果桶为空，用CAS插入\n• 如果桶不为空，用synchronized锁住头节点\n• 放弃了分段锁，改为锁桶头节点"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "多线程",
        "lessons": [
          {
            "id": "l1",
            "title": "多线程面试题",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "heading",
                "content": "1. 创建线程的方式？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "• 继承Thread类\n• 实现Runnable接口\n• 实现Callable接口（有返回值）\n• 线程池ExecutorService"
              },
              {
                "id": "b3",
                "type": "heading",
                "content": "2. 线程池核心参数？"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "• corePoolSize：核心线程数\n• maximumPoolSize：最大线程数\n• keepAliveTime：空闲线程存活时间\n• workQueue：任务队列\n• handler：拒绝策略"
              },
              {
                "id": "b5",
                "type": "heading",
                "content": "3. synchronized和Lock的区别？"
              },
              {
                "id": "b6",
                "type": "text",
                "content": "• synchronized：JVM层面，自动释放锁\n• Lock：API层面，需手动unlock\n• Lock更灵活：可中断、可超时、可公平锁"
              },
              {
                "id": "b7",
                "type": "heading",
                "content": "4. volatile的作用？"
              },
              {
                "id": "b8",
                "type": "text",
                "content": "• 保证可见性：一个线程修改，其他线程立即可见\n• 禁止指令重排序\n• 不保证原子性（i++不是原子操作）"
              },
              {
                "id": "b9",
                "type": "heading",
                "content": "5. 线程状态有哪些？"
              },
              {
                "id": "b10",
                "type": "text",
                "content": "NEW → RUNNABLE → BLOCKED/WAITING/TIMED_WAITING → TERMINATED"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "Spring框架",
        "lessons": [
          {
            "id": "l1",
            "title": "Spring面试题",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "heading",
                "content": "1. Spring IOC是什么？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "IOC（控制反转）：将对象的创建和管理交给Spring容器\n• 不再手动new对象，而是通过注入获取\n• 降低类之间的耦合度"
              },
              {
                "id": "b3",
                "type": "heading",
                "content": "2. Spring AOP是什么？"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "AOP（面向切面编程）：在不修改原代码的情况下增强功能\n• 常用场景：日志、事务、权限控制\n• 实现方式：JDK动态代理、CGLIB代理"
              },
              {
                "id": "b5",
                "type": "heading",
                "content": "3. @Autowired和@Resource的区别？"
              },
              {
                "id": "b6",
                "type": "text",
                "content": "• @Autowired：Spring注解，按类型注入\n• @Resource：JDK注解，默认按名称注入\n• 同类型多个Bean时，@Autowired需配合@Qualifier"
              },
              {
                "id": "b7",
                "type": "heading",
                "content": "4. Spring Bean的作用域？"
              },
              {
                "id": "b8",
                "type": "text",
                "content": "• singleton：单例（默认）\n• prototype：每次请求创建新实例\n• request/session/application：Web环境专用"
              },
              {
                "id": "b9",
                "type": "heading",
                "content": "5. SpringBoot自动配置原理？"
              },
              {
                "id": "b10",
                "type": "text",
                "content": "• @SpringBootApplication = @Configuration + @EnableAutoConfiguration + @ComponentScan\n• 加载META-INF/spring.factories中的自动配置类\n• 根据条件注解决定是否生效"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "MySQL",
        "lessons": [
          {
            "id": "l1",
            "title": "MySQL面试题",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "heading",
                "content": "1. 索引的作用和类型？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "作用：加快查询速度\n• 主键索引：唯一且不为空\n• 唯一索引：值唯一，允许为空\n• 普通索引：无限制\n• 组合索引：多列组合"
              },
              {
                "id": "b3",
                "type": "heading",
                "content": "2. 为什么用B+树而不是B树？"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "• B+树叶子节点存数据，非叶子只存索引\n• 叶子节点有链表，范围查询更快\n• 树更矮，磁盘IO更少"
              },
              {
                "id": "b5",
                "type": "heading",
                "content": "3. 事务的ACID是什么？"
              },
              {
                "id": "b6",
                "type": "text",
                "content": "• 原子性（Atomicity）：要么全成功，要么全失败\n• 一致性（Consistency）：事务前后数据一致\n• 隔离性（Isolation）：事务之间互不干扰\n• 持久性（Durability）：提交后永久保存"
              },
              {
                "id": "b7",
                "type": "heading",
                "content": "4. 事务隔离级别？"
              },
              {
                "id": "b8",
                "type": "text",
                "content": "• 读未提交：能读到未提交数据（脏读）\n• 读已提交：只读提交数据（不可重复读）\n• 可重复读：同一事务读取结果一致（MySQL默认）\n• 串行化：完全隔离，性能最差"
              },
              {
                "id": "b9",
                "type": "heading",
                "content": "5. 如何优化慢SQL？"
              },
              {
                "id": "b10",
                "type": "text",
                "content": "• EXPLAIN分析执行计划\n• 添加合适的索引\n• 避免 SELECT *\n• 避免在索引列上计算"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "Redis",
        "lessons": [
          {
            "id": "l1",
            "title": "Redis面试题",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "heading",
                "content": "1. Redis支持哪些数据类型？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "• String：字符串，最常用\n• Hash：哈希表，存对象\n• List：列表，消息队列\n• Set：集合，去重\n• ZSet：有序集合，排行榜"
              },
              {
                "id": "b3",
                "type": "heading",
                "content": "2. 缓存穿透、击穿、雪崩？"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "• 穿透：查询不存在的数据，缓存和数据库都没有 → 布隆过滤器\n• 击穿：热点key过期，大量请求直接打到数据库 → 互斥锁/永不过期\n• 雪崩：大量key同时过期 → 过期时间加随机值"
              },
              {
                "id": "b5",
                "type": "heading",
                "content": "3. Redis持久化方式？"
              },
              {
                "id": "b6",
                "type": "text",
                "content": "• RDB：快照，定时备份，恢复快，可能丢失数据\n• AOF：追加日志，数据更安全，文件大\n• 生产环境建议两者都开启"
              },
              {
                "id": "b7",
                "type": "heading",
                "content": "4. Redis为什么这么快？"
              },
              {
                "id": "b8",
                "type": "text",
                "content": "• 内存操作，读写速度快\n• 单线程，避免上下文切换\n• IO多路复用，一个线程处理多个连接"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-interview-guide",
    "pathId": "interview",
    "title": "面试教程",
    "desc": "项目介绍、话术、简历模板",
    "icon": "🎯",
    "chapters": [
      {
        "id": "ch1",
        "title": "面试介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "面试流程概述",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "面试一般分为以下几个环节：\n1、简历筛选\n2、技术面试（一面/二面）\n3、HR面试\n4、Offer沟通"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "技术面试内容：\n• 自我介绍\n• 项目介绍\n• 八股文拷问\n• 手写代码\n• 反问环节"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "项目介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "商城项目介绍",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "项目名称：XX商城\n技术栈：SpringBoot + MyBatis + SQLite/MySQL + JWT"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "核心功能："
              },
              {
                "id": "b3",
                "type": "list",
                "items": [
                  "JWT登录：用户名密码登录，颁发JWT令牌，拦截器统一验证",
                  "创建订单：接收商品列表，计算总价，写入数据库",
                  "支付回调：微信支付回调通知，更新订单状态",
                  "减库存：乐观锁防止超卖，UPDATE stock SET num=num-1 WHERE id=? AND num>0"
                ]
              },
              {
                "id": "b4",
                "type": "text",
                "content": "主要表结构：\n• users表：用户信息\n• orders表：订单信息\n• products表：商品信息、库存"
              }
            ]
          },
          {
            "id": "l2",
            "title": "JWT登录详解",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "面试官问：你们项目登录怎么实现的？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "回答要点：\n1、用户输入用户名密码\n2、后端查询数据库验证\n3、验证成功后，生成JWT令牌返回前端\n4、前端保存token，每次请求在Header中携带\n5、后端拦截器统一验证token有效性"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "JWT优势：\n• 无状态，服务器不用存Session\n• 跨端支持，APP/小程序/Web都能用\n• 扩展性好，分布式架构友好"
              }
            ]
          },
          {
            "id": "l3",
            "title": "减库存乐观锁详解",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "面试官问：你们怎么防止超卖的？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "回答要点：\n我们用乐观锁解决超卖问题。\n在UPDATE语句中加上WHERE num>0条件，\n只有库存大于0才能减库存。"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "sql",
                "filename": "减库存SQL",
                "code": "-- 乐观锁减库存\nupdate products set stock = stock - 1\nwhere id = #{productId} and stock > 0;"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "返回影响行数=0表示库存不足，下单失败。\n这样即使并发请求，数据库也能保证不会超卖。"
              }
            ]
          },
          {
            "id": "l4",
            "title": "支付回调详解",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "面试官问：支付流程是怎么实现的？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "回答要点：\n1、用户点击支付，后端调用微信支付API创建订单\n2、返回支付参数，前端调起微信支付\n3、用户支付完成后，微信服务器回调我们的接口\n4、回调接口验证签名，更新订单状态为已支付"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "注意事项：\n• 回调接口要做幂等处理，防止重复回调\n• 必须验证微信签名，防止伪造请求"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "面试话术",
        "lessons": [
          {
            "id": "l1",
            "title": "自我介绍话术",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "自我介绍模板："
              },
              {
                "id": "b2",
                "type": "text",
                "content": "面试官您好，我叫XXX，毕业于XX学校XX专业。\n\n我主要使用Java进行后端开发，熟悉SpringBoot、MyBatis等框架。\n\n之前做过一个商城项目，主要负责用户登录、订单模块的开发。\n\n以上是我的自我介绍，谢谢。"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "控制在1分钟内，突出技术栈和项目经验。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "项目介绍话术",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "项目介绍模板："
              },
              {
                "id": "b2",
                "type": "text",
                "content": "这个项目是一个电商商城系统，技术栈是SpringBoot + MyBatis + MySQL。\n\n我主要负责用户模块和订单模块：\n• 用户模块：实现了JWT登录，拦截器统一验证\n• 订单模块：实现了下单、支付回调、乐观锁减库存\n\n项目中遇到的难点是并发减库存的超卖问题，\n最终用数据库乐观锁解决了这个问题。"
              }
            ]
          },
          {
            "id": "l3",
            "title": "反问环节话术",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "面试官问：你有什么问题想问我？"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "推荐问题：\n• 请问团队目前的技术栈是什么？\n• 如果我入职，主要负责哪个模块？\n• 团队的开发流程是怎样的？"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "不要问薪资、加班等敏感问题，显得不够专业。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "简历模板",
        "lessons": [
          {
            "id": "l1",
            "title": "简历写作要点",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "简历结构：\n1、基本信息（姓名、电话、邮箱）\n2、技术栈（Java/SpringBoot/MyBatis/MySQL）\n3、项目经验（项目名称、技术栈、职责、亮点）\n4、教育背景"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "写作要点：\n• 突出技术栈，和JD匹配\n• 项目用STAR法则（情境-任务-行动-结果）\n• 突出量化成果（优化了XX%、支撑XX并发）\n• 控制在1页，重点突出"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "简历是面试的引导，写什么就问什么，突出自己擅长的。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "下载简历模板",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "点击下方按钮下载简历模板（PDF格式）："
              },
              {
                "id": "b2",
                "type": "download",
                "text": "下载简历模板",
                "url": "/my.pdf"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "模板仅供参考，请根据自身情况修改。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-mock-interview",
    "pathId": "interview",
    "title": "AI模拟面试",
    "desc": "语音提问，AI实时回答",
    "icon": "🤖",
    "interactivePage": "/aiinterview",
    "chapters": [
      {
        "id": "ch1",
        "title": "开始面试",
        "lessons": [
          {
            "id": "l1",
            "title": "进入AI模拟面试",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "🎙️ 语音提问，AI实时回答\n\n功能介绍：\n• 点击录音按钮，说出你的面试问题\n• AI自动识别问题并给出简洁答案\n• 支持Java基础、集合、多线程、Spring、MySQL、Redis等高频面试题"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "点击上方“开始面试”按钮进入AI模拟面试页面"
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
    "title": "HTML基础",
    "desc": "写商品文章页面",
    "icon": "🌐",
    "chapters": [
      {
        "id": "ch1",
        "title": "第一个网页",
        "lessons": [
          {
            "id": "l1",
            "title": "网页是什么",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "网页 = HTML文件，浏览器打开后渲染显示。\n\n学习目标：写一个商品详情页（文字、图片、下单表单）"
              }
            ]
          },
          {
            "id": "l2",
            "title": "创建HTML文件",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "新建 index.html 文件："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "index.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title></title>\n</head>\n<body>\n    第一个网页,我们即将做一个商城网站\n</body>\n</html>"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "双击html文件即可在浏览器中打开"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "商品文章内容",
        "lessons": [
          {
            "id": "l1",
            "title": "标题和段落",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<h1>iPhone 15 Pro</h1>\n<p>这是一段商品介绍文字</p>\n<p>价格：¥9999</p>"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "• h1-h6：标题，数字越大字越小\n• p：段落，普通文字"
              }
            ]
          },
          {
            "id": "l2",
            "title": "链接",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<a href=\"https://taobao.com\">查看更多商品</a>\n<a href=\"order.html\">去下单</a>"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "a标签创建链接，href指定跳转地址"
              }
            ]
          },
          {
            "id": "l3",
            "title": "图片",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<img src=\"iphone.jpg\" alt=\"商品图片\">\n<img src=\"https://xxx.com/img.jpg\" alt=\"网络图片\">"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "• src：图片地址（本地或网络）\n• alt：图片加载失败时的文字"
              }
            ]
          },
          {
            "id": "l4",
            "title": "列表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<ul>\n    <li>128G ¥7999</li>\n    <li>256G ¥8999</li>\n    <li>512G ¥9999</li>\n</ul>"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "ul无序列表，li列表项"
              }
            ]
          },
          {
            "id": "l5",
            "title": "表格",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "同样的商品规格，用表格展示更清晰："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<table>\n    <tr>\n        <th>容量</th>\n        <th>价格</th>\n    </tr>\n    <tr>\n        <td>128G</td>\n        <td>¥7999</td>\n    </tr>\n    <tr>\n        <td>256G</td>\n        <td>¥8999</td>\n    </tr>\n    <tr>\n        <td>512G</td>\n        <td>¥9999</td>\n    </tr>\n</table>"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "• table：表格容器\n• tr：表格行\n• th：表头单元格（加粗）\n• td：普通单元格"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "下单表单",
        "lessons": [
          {
            "id": "l1",
            "title": "表单结构",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<form>\n    <input type=\"text\" placeholder=\"收货人\">\n    <input type=\"text\" placeholder=\"收货地址\">\n    <input type=\"number\" placeholder=\"购买数量\">\n    <button type=\"submit\">立即下单</button>\n</form>"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "• form：表单容器\n• input：输入框\n• button：按钮"
              }
            ]
          },
          {
            "id": "l2",
            "title": "输入框类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["type", "用途", "示例"],
                "rows": [
                  ["text", "普通文字", "姓名、地址"],
                  ["number", "数字", "数量、价格"],
                  ["password", "密码", "登录密码"],
                  ["tel", "电话", "手机号"]
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "div和span",
        "lessons": [
          {
            "id": "l1",
            "title": "div块级容器",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "div是块级元素，独占一行，用来划分页面区域"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<div>商品图片区域</div>\n<div>商品信息区域</div>\n<div>下单表单区域</div>"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "div本身没样式，配合CSS使用"
              }
            ]
          },
          {
            "id": "l2",
            "title": "span行内元素",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "span是行内元素，不换行，用来包裹一小段文字"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<p>价格：<span>¥9999</span></p>\n<p>库存：<span>100</span>件</p>"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "span常用于给部分文字加样式（如价格红色）"
              }
            ]
          },
          {
            "id": "l3",
            "title": "div和span区别",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<!-- div独占一行 -->\n<div>第一块</div>\n<div>第二块</div>\n\n<!-- span不换行 -->\n<span>同一行</span>\n<span>同一行</span>"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["", "div", "span"],
                "rows": [
                  ["类型", "块级", "行内"],
                  ["换行", "独占一行", "不换行"],
                  ["用途", "划分区域", "包裹文字"]
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "css-basic",
    "pathId": "frontend",
    "title": "CSS样式",
    "desc": "美化页面+Flex布局",
    "icon": "🎨",
    "chapters": [
      {
        "id": "ch1",
        "title": "引入CSS",
        "lessons": [
          {
            "id": "l1",
            "title": "style标签",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<head>\n    <style>\n        h1 { color: red; }\n    </style>\n</head>"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "在style标签内写CSS样式"
              }
            ]
          },
          {
            "id": "l2",
            "title": "选择器",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": "/* 标签选择器 */\nh1 { color: red; }\n\n/* class选择器（最常用） */\n.price { color: #f00; }\n\n/* id选择器 */\n#title { font-size: 20px; }"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<h1 id=\"title\">iPhone</h1>\n<p class=\"price\">¥9999</p>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "文字样式",
        "lessons": [
          {
            "id": "l1",
            "title": "颜色和字号",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": ".title {\n    color: #333;         /* 颜色 */\n    font-size: 24px;     /* 字号 */\n    font-weight: bold;   /* 加粗 */\n}\n.desc {\n    color: #666;\n    font-size: 14px;\n    line-height: 1.6;    /* 行高 */\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "文字对齐",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": ".center {\n    text-align: center;  /* 居中 */\n}\n.right {\n    text-align: right;   /* 右对齐 */\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "盒子模型",
        "lessons": [
          {
            "id": "l1",
            "title": "宽高",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": ".card {\n    width: 200px;        /* 宽度 */\n    height: 300px;       /* 高度 */\n    width: 100%;         /* 百分比宽度 */\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "内边距和外边距",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": ".card {\n    padding: 16px;       /* 内边距：内容到边框 */\n    margin: 12px;        /* 外边距：元素之间 */\n    \n    /* 分别设置四个方向 */\n    padding: 10px 20px;  /* 上下10 左右20 */\n    margin-top: 20px;    /* 只设置上边距 */\n}"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "padding向内擑，margin向外推"
              }
            ]
          },
          {
            "id": "l3",
            "title": "背景和边框",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": ".card {\n    background: #fff;       /* 背景色 */\n    border: 1px solid #eee; /* 边框 */\n    border-radius: 8px;     /* 圆角 */\n    box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* 阴影 */\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "显示和隐藏",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": ".hidden {\n    display: none;       /* 隐藏元素 */\n}\n.show {\n    display: block;      /* 显示为块级 */\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "Flex布局",
        "lessons": [
          {
            "id": "l1",
            "title": "开启Flex",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Flex是最常用的布局方式"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "css",
                "code": ".container {\n    display: flex;    /* 开启Flex布局 */\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "row水平排列",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "默认flex-direction: row，子元素水平排列"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "css",
                "code": "/* 导航栏：logo左边，菜单右边 */\n.nav {\n    display: flex;\n    flex-direction: row;            /* 水平（默认） */\n    justify-content: space-between; /* 两端对齐 */\n    align-items: center;            /* 垂直居中 */\n}"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "justify-content常用值：\n• flex-start 左对齐\n• center 居中\n• flex-end 右对齐\n• space-between 两端对齐"
              }
            ]
          },
          {
            "id": "l3",
            "title": "column垂直排列",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "flex-direction: column，子元素垂直排列"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "css",
                "code": "/* 商品详情：图片、标题、价格上下排列 */\n.product-detail {\n    display: flex;\n    flex-direction: column;  /* 垂直排列 */\n    align-items: center;     /* 水平居中 */\n    gap: 16px;               /* 间距 */\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "商品列表布局",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": "/* 商品卡片水平排列，自动换行 */\n.product-list {\n    display: flex;\n    flex-wrap: wrap;  /* 换行 */\n    gap: 16px;        /* 间距 */\n}\n.product-card {\n    width: 200px;\n}"
              }
            ]
          },
          {
            "id": "l5",
            "title": "元素占比",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": "/* 侧边栏固定宽度，内容区占满剩余 */\n.sidebar {\n    width: 200px;\n}\n.content {\n    flex: 1;  /* 占满剩余空间 */\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "常用样式",
        "lessons": [
          {
            "id": "l1",
            "title": "鼠标样式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": ".btn {\n    cursor: pointer;     /* 鼠标手型 */\n}\n.btn:hover {\n    background: #0066cc; /* 鼠标悬停样式 */\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "图片自适应",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": "img {\n    width: 100%;         /* 宽度占满容器 */\n    height: auto;        /* 高度自动 */\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "按钮样式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "css",
                "code": ".btn {\n    background: #007bff;\n    color: #fff;\n    border: none;\n    padding: 10px 20px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n.btn:hover {\n    background: #0056b3;\n}"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "js-basic",
    "pathId": "frontend",
    "title": "JavaScript",
    "desc": "计算+存储+事件+异步",
    "icon": "⚡",
    "chapters": [
      {
        "id": "ch1",
        "title": "计算",
        "lessons": [
          {
            "id": "l1",
            "title": "第一个程序",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<script type=\"module\">\n    console.log(10 + 3)  // 输出13\n</script>"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "F12打开控制台查看输出"
              }
            ]
          },
          {
            "id": "l2",
            "title": "算术运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "对数值进行加减乘除运算"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["运算符", "含义", "示例", "结果"],
                "rows": [
                  ["+", "加法", "1 + 1", "2"],
                  ["-", "减法", "2 - 1", "1"],
                  ["*", "乘法", "2 * 2", "4"],
                  ["/", "除法", "4 / 2", "2"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "code": "console.log(1 + 1)   // 2\nconsole.log(2 - 1)   // 1\nconsole.log(2 * 2)   // 4\nconsole.log(4 / 2)   // 2"
              }
            ]
          },
          {
            "id": "l3",
            "title": "比较运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "比较两个值的大小关系，返回布尔值。\n\n布尔值(boolean)：只有两种取值——true(真)和false(假)。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["运算符", "含义", "示例", "结果"],
                "rows": [
                  [">", "大于", "5 > 3", "true"],
                  ["<", "小于", "5 < 3", "false"],
                  ["==", "等于", "5 == 3", "false"],
                  ["!=", "不等于", "5 != 3", "true"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "code": "console.log(5 > 3)    // true\nconsole.log(5 < 3)    // false\nconsole.log(5 == 3)   // false\nconsole.log(5 != 3)   // true"
              }
            ]
          },
          {
            "id": "l4",
            "title": "逻辑运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "将两个比较计算的结果组合起来，进行逻辑运算"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["名称", "运算符", "规则", "示例"],
                "rows": [
                  ["与(并且)", "&&", "两边都满足才为真", "5>3 && 2>1 // true"],
                  ["或(或者)", "||", "满足一个就为真", "5>3 || 1>2 // true"],
                  ["非(取反)", "!", "真变假，假变真", "!(5>3) // false"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "code": "// 与：必须同时满足\nconsole.log((10 > 5) && (3 < 1))  // false\n\n// 或：满足其中一个即可\nconsole.log((10 > 5) || (3 < 1))  // true\n\n// 非：结果取反\nconsole.log(!(10 > 5))            // false"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "存储",
        "lessons": [
          {
            "id": "l1",
            "title": "变量",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "let total = 0          // 定义变量，存储总价\nconsole.log(total)     // 输出0\n\ntotal = total + 2      // 计算牛奶价格，存储到总价\nconsole.log(total)     // 输出2\n\ntotal = total + 5      // 计算面包价格，存储到总价\nconsole.log(total)     // 输出7"
              }
            ]
          },
          {
            "id": "l2",
            "title": "数据类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "数据有不同类型：数字、字符串、布尔等"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["类型", "含义", "定义示例"],
                "rows": [
                  ["数字", "整数或小数", "let price = 9.9"],
                  ["字符串", "文本内容", "let name = '张三'"],
                  ["布尔", "真/假", "let status = true"]
                ]
              },
              {
                "id": "b3",
                "type": "text",
                "content": "业务模拟：张三买了3袋2.5元牛奶和2袋5.5元面包，请算账并记账"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "javascript",
                "code": "let userName = '张三'       // 保存用户姓名\n\nlet spu1 = '牛奶'            // 商品名称\nlet spu1_price = 2.5         // 价格\nlet spu1_count = 3           // 数量\n\nlet spu2 = '面包'\nlet spu2_price = 5.5\nlet spu2_count = 2\n\nlet total = spu1_price * spu1_count + spu2_price * spu2_count\nlet status = true            // 支付状态\n\nconsole.log('购物车:', spu1, spu1_price + '元', spu2, spu2_price + '元')\nconsole.log('总价:', total + '元')\nconsole.log('已支付:', status)"
              }
            ]
          },
          {
            "id": "l3",
            "title": "对象",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "上面代码太乱！每个商品要定义3个变量，10个商品就是30个变量。\n\n解决方案：用对象{}把商品的名称、价格、数量打包成一个整体"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "let spu1 = { name: '牛奶', price: 2.5, count: 3 }\nlet spu2 = { name: '面包', price: 5.5, count: 2 }\n\nlet total = spu1.price * spu1.count + spu2.price * spu2.count\n\nconsole.log('购物清单：')\nconsole.log(spu1.name + ' x ' + spu1.count + ' = ' + spu1.price * spu1.count + '元')\nconsole.log(spu2.name + ' x ' + spu2.count + ' = ' + spu2.price * spu2.count + '元')\nconsole.log('总价：' + total + '元')"
              }
            ]
          },
          {
            "id": "l4",
            "title": "数组",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "上面只能存固定数量的商品，如果用户买了50个商品怎么办？\n\n解决方案：用数组[]存储多个商品对象"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "let list = [\n    { name: '牛奶', price: 2.5, count: 3 },\n    { name: '面包', price: 5.5, count: 2 },\n    { name: '可乐', price: 3.0, count: 5 }\n]\n\nconsole.log('购物清单：')\nlet total = 0\nfor (let spu of list) {\n    let subtotal = spu.price * spu.count\n    console.log(spu.name + ' x ' + spu.count + ' = ' + subtotal + '元')\n    total = total + subtotal\n}\nconsole.log('总价：' + total + '元')\nconsole.log('共' + list.length + '件商品')"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "流程控制",
        "lessons": [
          {
            "id": "l1",
            "title": "if判断",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "根据条件执行不同的代码"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "let stock = 10\n\n// 如果有货\nif (stock > 0) {\n    console.log('有货，可下单')\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "if-else",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "两种情况二选一"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "let stock = 0\n\nif (stock > 0) {\n    console.log('有货')\n} else {\n    console.log('无货')  // 执行这行\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "for循环",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "重复执行代码N次"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "// 输出1到5\nfor (let i = 1; i <= 5; i++) {\n    console.log(i)\n}\n// 1, 2, 3, 4, 5"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "i=1：从1开始\ni<=5：到5结束\ni++：每次加1"
              }
            ]
          },
          {
            "id": "l4",
            "title": "遍历数组",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用for...of遍历数组更简洁"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "let list = [\n    { name: 'iPhone', price: 9999 },\n    { name: '小米', price: 3999 }\n]\n\nfor (let spu of list) {\n    console.log(spu.name, spu.price)\n}\n// iPhone 9999\n// 小米 3999"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "每次循环spu就是数组中的一个元素"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "事件",
        "lessons": [
          {
            "id": "l1",
            "title": "onclick点击",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用户点击时触发"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<button onclick=\"order()\">立即下单</button>\n\n<script>\nfunction order() {\n    alert('下单成功!')\n}\n</script>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "oninput输入",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用户输入时实时触发"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<input oninput=\"search(this.value)\" placeholder=\"搜索商品\">\n\n<script>\nfunction search(keyword) {\n    console.log('搜索:', keyword)\n}\n</script>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "onsubmit提交",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "表单提交时触发"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<form onsubmit=\"login(); return false\">\n    <input id=\"username\" placeholder=\"用户名\">\n    <input id=\"password\" type=\"password\" placeholder=\"密码\">\n    <button type=\"submit\">登录</button>\n</form>\n\n<script>\nfunction login() {\n    let user = document.getElementById('username').value\n    let pwd = document.getElementById('password').value\n    console.log('登录:', user, pwd)\n}\n</script>"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "return false 阻止页面刷新"
              }
            ]
          },
          {
            "id": "l4",
            "title": "计算总价案例",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<p>单价: <span id=\"price\">9999</span></p>\n<input id=\"count\" type=\"number\" value=\"1\">\n<button onclick=\"calc()\">计算总价</button>\n<p>总价: <span id=\"total\">9999</span></p>\n\n<script>\nfunction calc() {\n    let price = 9999\n    let count = document.getElementById('count').value\n    let total = price * count\n    document.getElementById('total').innerText = total\n}\n</script>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "本地存储",
        "lessons": [
          {
            "id": "l1",
            "title": "localStorage",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "localStorage在浏览器本地存储，关闭浏览器也不丢失"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "// 存储\nlocalStorage.setItem('token', 'xxx123')\n\n// 读取\nlet token = localStorage.getItem('token')\n\n// 删除\nlocalStorage.removeItem('token')"
              }
            ]
          },
          {
            "id": "l2",
            "title": "存储JSON对象",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "code": "// 存储对象需转字符串\nlet user = { id: 1, name: '张三' }\nlocalStorage.setItem('user', JSON.stringify(user))\n\n// 读取时转回对象\nlet saved = JSON.parse(localStorage.getItem('user'))\nconsole.log(saved.name)  // '张三'"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "同步异步",
        "lessons": [
          {
            "id": "l1",
            "title": "定义异步函数",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "在function前加async关键字"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "// 定义异步函数\nasync function getData() {\n    return '数据'\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "不等待的效果",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "直接调用异步函数，不会等待结果，继续执行下一行"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "console.log('1')\ngetData()  // 调用后不等待，继续执行\nconsole.log('2')\n// 输出顺序: 1, 2"
              }
            ]
          },
          {
            "id": "l3",
            "title": "await等待结果",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "await等待异步函数执行完毕，拿到结果后才继续"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "console.log('1')\nlet data = await getData()  // 等待结果\nconsole.log(data)           // '数据'\nconsole.log('2')\n// 输出顺序: 1, 数据, 2"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "script type=\"module\"才能直接用await"
              }
            ]
          },
          {
            "id": "l4",
            "title": "Promise和.then",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "异步函数返回值是Promise类型，可以用.then或await获取结果"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "// .then方式（了解即可）\ngetData().then(data => {\n    console.log(data)  // '数据'\n})\n\n// await方式（推荐）\nlet data = await getData()\nconsole.log(data)  // '数据'"
              }
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "fetch请求",
        "lessons": [
          {
            "id": "l1",
            "title": "GET请求",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "fetch用于向服务器发请求，它是异步函数"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "// GET请求 - 查询商品列表\nlet res = await fetch('/api/products')\nlet data = await res.json()  // 解析JSON\nconsole.log(data)"
              }
            ]
          },
          {
            "id": "l2",
            "title": "GET带参数",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "code": "// GET请求参数放在URL上\nlet productId = 123\nlet res = await fetch(`/api/product?id=${productId}`)\nlet product = await res.json()"
              }
            ]
          },
          {
            "id": "l3",
            "title": "POST提交JSON",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "code": "// POST请求 - 提交订单\nlet order = {\n    productId: 1,\n    count: 2,\n    address: '北京市xxx'\n}\n\nlet res = await fetch('/api/order', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(order)\n})\nlet result = await res.json()\nconsole.log(result)"
              }
            ]
          },
          {
            "id": "l4",
            "title": "完整示例",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "code": "<button onclick=\"loadProducts()\">加载商品</button>\n<div id=\"list\"></div>\n\n<script type=\"module\">\nasync function loadProducts() {\n    let res = await fetch('/api/products')\n    let products = await res.json()\n    \n    let html = ''\n    for (let p of products) {\n        html += `<div>${p.name} - ¥${p.price}</div>`\n    }\n    document.getElementById('list').innerHTML = html\n}\n</script>"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "学完JS基础，即可用Vue更高效地开发前端"
              }
            ]
          }
        ]
      },
      {
        "id": "ch8",
        "title": "DOM操作",
        "lessons": [
          {
            "id": "l1",
            "title": "获取元素",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "code": "// 通过id获取\nlet title = document.getElementById('title')\n\n// 通过选择器获取\nlet price = document.querySelector('.price')"
              }
            ]
          },
          {
            "id": "l2",
            "title": "修改内容",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "code": "// 修改文字\ndocument.getElementById('price').innerText = '¥19998'\n\n// 修改样式\ndocument.getElementById('btn').style.background = 'red'"
              }
            ]
          },
          {
            "id": "l3",
            "title": "痛点演示",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "问题：每次数据变化，都要手动更新页面，非常麻烦！"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<p>数量: <span id=\"count\">1</span></p>\n<button onclick=\"add()\">加一</button>\n\n<script>\nlet count = 1\n\nfunction add() {\n    count++  // ① 数据变了\n    // ② 还要手动更新页面！\n    document.getElementById('count').innerText = count\n}\n</script>"
              },
              {
                "id": "b3",
                "type": "warning",
                "content": "每次数据变化都要写一遍 DOM 更新代码，复杂页面会非常繁琐"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "Vue解决了这个问题：数据变化 → 页面自动更新"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "vue-basic",
    "pathId": "frontend",
    "title": "Vue开发",
    "desc": "响应式+组件+路由",
    "icon": "🗼",
    "chapters": [
      {
        "id": "ch1",
        "title": "为什么用Vue",
        "lessons": [
          {
            "id": "l1",
            "title": "JS的痛点",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "JS原生开发：每次数据变化，都要手动更新DOM"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<!DOCTYPE html>\n<html>\n<body>\n  <p id=\"count\">1</p>\n  <button onclick=\"add()\">加一</button>\n  <script>\n    let count = 1\n    function add() {\n      count++\n      document.getElementById('count').innerText = count\n    }\n  </script>\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "Vue解决痛点",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Vue响应式：数据变化 → 页面自动更新"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "code": "<!DOCTYPE html>\n<html>\n<body>\n  <script src=\"https://unpkg.com/vue@3/dist/vue.global.js\"></script>\n  <div id=\"app\">\n    <p>{{ count }}</p>\n    <button @click=\"count++\">+1</button>\n  </div>\n  <script>\n    const { createApp, ref } = Vue\n    createApp({\n      setup: () => ({ count: ref(1) })\n    }).mount('#app')\n  </script>\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "创建工程化项目",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "bash",
                "code": "npm create vite@latest my-shop -- --template vue\ncd my-shop\nnpm install\nnpm run dev"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "my-shop/\n├── src/\n│   ├── App.vue\n│   └── main.js\n└── package.json"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "指令",
        "lessons": [
          {
            "id": "l1",
            "title": "{{}}插值",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <h1>{{ title }}</h1>\n  <p>价格: {{ price }}</p>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst title = ref('iPhone 15')\nconst price = ref(9999)\n</script>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "v-bind和:缩写",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <img :src=\"imgUrl\">\n  <a :href=\"link\">查看详情</a>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst imgUrl = ref('/product.jpg')\nconst link = ref('/detail/1')\n</script>"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": ":src 等于 v-bind:src"
              }
            ]
          },
          {
            "id": "l3",
            "title": "ref响应式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "ref：数字/字符串"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <p>数量: {{ count }}</p>\n  <button @click=\"count++\">+1</button>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst count = ref(1)\n</script>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "reactive响应式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "reactive：对象/数组"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <p>商品: {{ product.name }} - {{ product.price }}元</p>\n  <button @click=\"product.price -= 100\">降价</button>\n</template>\n\n<script setup>\nimport { reactive } from 'vue'\nconst product = reactive({ name: 'iPhone', price: 9999 })\n</script>"
              }
            ]
          },
          {
            "id": "l5",
            "title": "v-model双向绑定",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <input v-model=\"address\" placeholder=\"收货地址\">\n  <p>地址: {{ address }}</p>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst address = ref('')\n</script>"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "输入框改 → 数据变 → 页面变"
              }
            ]
          },
          {
            "id": "l6",
            "title": "@click事件缩写",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <button @click=\"handleClick\">点击</button>\n  <button @click=\"count++\">+1</button>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst count = ref(0)\nfunction handleClick() {\n  alert('点击了')\n}\n</script>"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "@click 等于 v-on:click"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "条件渲染",
        "lessons": [
          {
            "id": "l1",
            "title": "v-if",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <p v-if=\"stock > 0\">有货</p>\n  <p v-else>无货</p>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst stock = ref(10)\n</script>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "v-show",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <p v-show=\"visible\">显示内容</p>\n  <button @click=\"visible = !visible\">切换</button>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst visible = ref(true)\n</script>"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "v-if删除元素，v-show只隐藏(display:none)"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "列表渲染",
        "lessons": [
          {
            "id": "l1",
            "title": "v-for",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <div v-for=\"item in products\" :key=\"item.id\">\n    <h3>{{ item.name }}</h3>\n    <p>{{ item.price }}</p>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst products = ref([\n  { id: 1, name: 'iPhone', price: 9999 },\n  { id: 2, name: '小米', price: 3999 }\n])\n</script>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "带索引的v-for",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <div v-for=\"(item, index) in products\" :key=\"item.id\">\n    <p>{{ index + 1 }}. {{ item.name }}</p>\n  </div>\n</template>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "组件化",
        "lessons": [
          {
            "id": "l1",
            "title": "创建组件",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "ProductCard.vue",
                "code": "<template>\n  <div class=\"card\">\n    <h3>{{ name }}</h3>\n    <p>{{ price }}</p>\n  </div>\n</template>\n\n<script setup>\ndefineProps(['name', 'price'])\n</script>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "使用组件",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "App.vue",
                "code": "<template>\n  <ProductCard name=\"iPhone\" :price=\"9999\" />\n  <ProductCard name=\"小米\" :price=\"3999\" />\n</template>\n\n<script setup>\nimport ProductCard from './ProductCard.vue'\n</script>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "组件传值props",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "父组件 → 子组件：通过props传数据"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "Child.vue",
                "code": "<template>\n  <p>收到: {{ msg }}</p>\n</template>\n\n<script setup>\ndefineProps(['msg'])\n</script>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "Parent.vue",
                "code": "<template>\n  <Child msg=\"你好\" />\n</template>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "子传父emit",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "子组件 → 父组件：通过emit发事件"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "Child.vue",
                "code": "<template>\n  <button @click=\"emit('add')\">加一</button>\n</template>\n\n<script setup>\nconst emit = defineEmits(['add'])\n</script>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "Parent.vue",
                "code": "<template>\n  <p>{{ count }}</p>\n  <Child @add=\"count++\" />\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst count = ref(0)\n</script>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "路由",
        "lessons": [
          {
            "id": "l1",
            "title": "安装路由",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "bash",
                "code": "npm install vue-router"
              }
            ]
          },
          {
            "id": "l2",
            "title": "配置路由",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "router.js",
                "code": "import { createRouter, createWebHistory } from 'vue-router'\nimport Home from './views/Home.vue'\nimport Detail from './views/Detail.vue'\n\nexport const router = createRouter({\n  history: createWebHistory(),\n  routes: [\n    { path: '/', component: Home },\n    { path: '/detail', component: Detail }\n  ]\n})"
              }
            ]
          },
          {
            "id": "l3",
            "title": "路由跳转",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "code": "<template>\n  <router-link to=\"/\">首页</router-link>\n  <router-link to=\"/detail?id=1\">商品详情</router-link>\n  <router-view />\n</template>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "页面传值",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "query参数：/detail?id=1"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "Detail.vue",
                "code": "<template>\n  <p>商品ID: {{ id }}</p>\n</template>\n\n<script setup>\nimport { useRoute } from 'vue-router'\nconst route = useRoute()\nconst id = route.query.id\n</script>"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "route.query.参数名 获取查询参数"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "project-practice",
    "pathId": "frontend",
    "title": "项目实战",
    "desc": "商城首页+详情+登录",
    "icon": "🛍",
    "chapters": [
      {
        "id": "ch1",
        "title": "创建项目",
        "lessons": [
          {
            "id": "l1",
            "title": "Vite初始化",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "bash",
                "code": "npm create vite@latest my-shop -- --template vue\ncd my-shop\nnpm install\nnpm install vue-router\nnpm run dev"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "访问http://localhost:5173查看"
              }
            ]
          },
          {
            "id": "l2",
            "title": "项目结构",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "my-shop/\n├── src/\n│   ├── views/       页面组件\n│   ├── router/      路由配置\n│   ├── App.vue      根组件\n│   └── main.js      入口\n└── package.json"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "商城首页",
        "lessons": [
          {
            "id": "l1",
            "title": "商品列表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "views/Home.vue",
                "code": "<template>\n  <h1>商城首页</h1>\n  <div v-for=\"p in products\" :key=\"p.id\" @click=\"goDetail(p.id)\">\n    <h3>{{ p.name }}</h3>\n    <p>¥{{ p.price }}</p>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nimport { useRouter } from 'vue-router'\n\nconst router = useRouter()\nconst products = ref([\n  { id: 1, name: 'iPhone 15', price: 9999 },\n  { id: 2, name: '小米 14', price: 3999 }\n])\n\nfunction goDetail(id) {\n  router.push(`/detail/${id}`)\n}\n</script>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "商品详情",
        "lessons": [
          {
            "id": "l1",
            "title": "详情页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "views/Detail.vue",
                "code": "<template>\n  <h1>{{ product.name }}</h1>\n  <p>价格: ¥{{ product.price }}</p>\n  <button @click=\"addlist\">加入购物车</button>\n</template>\n\n<script setup>\nimport { ref, onMounted } from 'vue'\nimport { useRoute } from 'vue-router'\n\nconst route = useRoute()\nconst product = ref({})\n\nonMounted(async () => {\n  let id = route.params.id\n  let res = await fetch(`/api/product?id=${id}`)\n  product.value = await res.json()\n})\n\nfunction addlist() {\n  alert('已加入购物车')\n}\n</script>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "登录认证",
        "lessons": [
          {
            "id": "l1",
            "title": "登录页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "views/Login.vue",
                "code": "<template>\n  <h1>登录</h1>\n  <input v-model=\"username\" placeholder=\"用户名\">\n  <input v-model=\"password\" type=\"password\" placeholder=\"密码\">\n  <button @click=\"login\">登录</button>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nimport { useRouter } from 'vue-router'\n\nconst router = useRouter()\nconst username = ref('')\nconst password = ref('')\n\nasync function login() {\n  let res = await fetch('/api/login', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({\n      username: username.value,\n      password: password.value\n    })\n  })\n  let data = await res.json()\n  \n  // 保存token到本地\n  localStorage.setItem('token', data.token)\n  router.push('/')  // 跳转首页\n}\n</script>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "携带token请求",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "登录后请求需要带上token"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "code": "// 携带token发请求\nlet token = localStorage.getItem('token')\nlet res = await fetch('/api/list', {\n  headers: {\n    'Authorization': `Bearer ${token}`\n  }\n})\nlet list = await res.json()"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "路由配置",
        "lessons": [
          {
            "id": "l1",
            "title": "router配置",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "router/index.js",
                "code": "import { createRouter, createWebHistory } from 'vue-router'\nimport Home from '../views/Home.vue'\nimport Detail from '../views/Detail.vue'\nimport Login from '../views/Login.vue'\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes: [\n    { path: '/', component: Home },\n    { path: '/detail/:id', component: Detail },\n    { path: '/login', component: Login }\n  ]\n})\n\nexport default router"
              }
            ]
          },
          {
            "id": "l2",
            "title": "main.js入口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "main.js",
                "code": "import { createApp } from 'vue'\nimport App from './App.vue'\nimport router from './router'\n\ncreateApp(App).use(router).mount('#app')"
              }
            ]
          },
          {
            "id": "l3",
            "title": "App.vue",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "App.vue",
                "code": "<template>\n  <router-view />\n</template>"
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
const CURRENT_VERSION = '1.1.6' // 版本号变更会强制刷新

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
