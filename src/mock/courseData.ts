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
  { 
    id: 'ai', 
    name: 'AI', 
    path: '/learn/ai-frontend-basic',
    children: [
      { 
        id: 'ai-programming', 
        name: 'AI编程', 
        path: '/learn/ai-frontend-basic',
        children: [
          { id: 'ai-frontend-basic', name: 'AI前端基础', path: '/learn/ai-frontend-basic' },
          { id: 'ai-backend-basic', name: 'AI后端基础', path: '/learn/ai-backend-basic' },
          { id: 'ai-database-basic', name: 'AI数据库基础', path: '/learn/ai-database-basic' },
          { id: 'ai-project-basic', name: 'AI项目实战', path: '/learn/ai-project-basic' },
          { id: 'ai-frontend-advanced', name: 'AI前端进阶', path: '/learn/ai-frontend-advanced' },
          { id: 'ai-backend-advanced', name: 'AI后端进阶', path: '/learn/ai-backend-advanced' },
          { id: 'ai-database-advanced', name: 'AI数据库进阶', path: '/learn/ai-database-advanced' },
          { id: 'ai-project-advanced', name: 'AI项目实战进阶', path: '/learn/ai-project-advanced' },
        ]
      },
      { id: 'ai-workflow', name: 'AI工作流', path: '/learn/ai-workflow' },
      { id: 'ai-video', name: 'AI视频', path: '/learn/ai-video' },
    ]
  },
  { id: 'mobile', name: '移动端', path: '/learn/mobile-basic' },
  { id: 'security', name: '安全', path: '/learn/security-basic' },
  { id: 'arch', name: '架构', path: '/learn/arch-basic' },
  { id: 'grammar', name: '语法', path: '/learn/grammar-basic' },
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
                "code": "//不同类型变量存储订单信息\nvoid main() {\n    String userName = \"张三\";         //用户名称，字符串注意加双引号\n    String spuName = \"牛奶\";         //商品名称\n    double spuPrice = 2.5;         //商品单价\n    int spuCount = 3;              //购买数量\n    double total = 7.5;            //订单总价\n    boolean status = true;         //支付状态（true已支付/false未支付）\n    String createdAt = \"2024-01-01 12:30:00\"; //创建时间\n    \n    IO.println(\"用户名称：\" + userName);\n    IO.println(\"商品名称：\" + spuName);\n    IO.println(\"商品单价：\" + spuPrice + \" 元\");\n    IO.println(\"购买数量：\" + spuCount);\n    IO.println(\"订单总价：\" + total + \" 元\");\n    IO.println(\"支付状态：\" + status);\n    IO.println(\"创建时间：\" + createdAt);\n}"
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
                "code": "//1.定义数组\nList<类型> 变量名 = new ArrayList<>();\n\n//2.新增元素\n变量名.add(元素);\n\n//3.增强for遍历元素\nfor (String 变量 : 变量名) {\n    //使用变量\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\n\nvoid main() {\n    //1.定义字符串类型数组\n    List<String> list = new ArrayList<>();\n    \n    //2.添加元素\n    list.add(\"张三\");\n    list.add(\"李四\");\n    list.add(\"王五\");\n    \n    //3.遍历数组\n    for (String name : list) {\n        IO.println(name);\n    }\n}"
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
                "code": "//定义类\npublic class 类名 {\n    public 类型 属性名;\n}\n\n//创建对象\n类名 变量名 = new 类名();\n变量名.属性名 = 值;"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "public class Order {\n    public String userName;    //用户名称\n    public String spuName;     //商品名称，字符串注意加双引号\n    public double spuPrice;    //商品单价\n    public int spuCount;       //购买数量\n    public double total;       //订单总价\n    public boolean status;     //支付状态\n    public String createdAt;   //创建时间\n}\n\nvoid main() {\n    Order order = new Order();\n    order.userName = \"张三\";\n    order.spuName = \"牛奶\";\n    order.spuPrice = 2.5;\n    order.spuCount = 3;\n    order.total = 7.5;\n    order.status = true;\n    order.createdAt = \"2024-01-01 12:30:00\";\n    \n    IO.println(\"用户名称：\" + order.userName);\n    IO.println(\"商品名称：\" + order.spuName);\n    IO.println(\"商品单价：\" + order.spuPrice + \" 元\");\n    IO.println(\"购买数量：\" + order.spuCount);\n    IO.println(\"订单总价：\" + order.total + \" 元\");\n    IO.println(\"支付状态：\" + order.status);\n    IO.println(\"创建时间：\" + order.createdAt);\n}"
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
                "code": "public class 类名 {\n    public 返回类型 方法名() {\n        //代码语句\n    }\n}\n\n//调用方法\n对象.方法名();"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "public class Order {\n    public String userName;\n    public String spuName;\n    public double spuPrice;\n    public int spuCount;\n    public double total;\n    public boolean status;\n    public String createdAt;\n    \n    public void insert() {\n        IO.println(\"保存订单：\" + userName + \", \" + spuName + \", 总价\" + total + \"元\");\n    }\n}\n\nvoid main() {\n    Order order = new Order();\n    order.userName = \"张三\";\n    order.spuName = \"牛奶\";\n    order.spuPrice = 2.5;\n    order.spuCount = 3;\n    order.total = 7.5;\n    order.status = true;\n    order.createdAt = \"2024-01-01 12:30:00\";\n    order.insert();\n}"
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
                "code": "public class 类名 {\n    public 类型 属性名;\n    \n    public void 方法名(类型 属性名) {\n        this.属性名 = 属性名;\n    }\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "public class Order {\n    public String userName;\n    public String spuName;\n    public double spuPrice;\n    public int spuCount;\n    public double total;\n    public boolean status;\n    public String createdAt;\n    \n    public void insert(String userName, String spuName, double spuPrice, int spuCount, double total, boolean status, String createdAt) {\n        this.userName = userName;\n        this.spuName = spuName;\n        this.spuPrice = spuPrice;\n        this.spuCount = spuCount;\n        this.total = total;\n        this.status = status;\n        this.createdAt = createdAt;\n        IO.println(\"保存订单：\" + this.userName + \", \" + this.spuName);\n    }\n}\n\nvoid main() {\n    Order order = new Order();\n    order.insert(\"张三\", \"牛奶\", 2.5, 3, 7.5, true, \"2024-01-01 12:30:00\");\n}"
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
                "code": "public 返回类型 方法名(类型 参数名) {\n    return 返回值;\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "public class Order {\n    public String userName;\n    public String spuName;\n    public double spuPrice;\n    public int spuCount;\n    public double total;\n    public boolean status;\n    public String createdAt;\n    \n    public boolean insert(String userName, String spuName, double spuPrice, int spuCount, double total, boolean status, String createdAt) {\n        this.userName = userName;\n        this.spuName = spuName;\n        this.spuPrice = spuPrice;\n        this.spuCount = spuCount;\n        this.total = total;\n        this.status = status;\n        this.createdAt = createdAt;\n        IO.println(\"保存订单：\" + userName);\n        return true;\n    }\n}\n\nvoid main() {\n    Order order = new Order();\n    boolean ok = order.insert(\"张三\", \"牛奶\", 2.5, 3, 7.5, true, \"2024-01-01 12:30:00\");\n    IO.println(\"保存结果：\" + ok);\n}"
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
                "code": "public class 类名 {\n    public static 类型 属性名;           //静态属性\n    public static 返回类型 方法名() {}    //静态方法\n}\n\n//通过类名访问\n类名.属性名;\n类名.方法名();"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\n\npublic class Order {\n    public String userName;\n    public String spuName;\n    public double spuPrice;\n    public int spuCount;\n    public double total;\n    public boolean status;\n    public String createdAt;\n    public static List<Order> list = new ArrayList<>();\n    \n    public void insert() {\n        Order.list.add(this);\n        IO.println(\"保存订单：\" + userName + \", \" + spuName);\n    }\n    \n    public static void selectList() {\n        for (Order order : Order.list) {\n            IO.println(\"用户：\" + order.userName + \", 商品：\" + order.spuName + \", 总价：\" + order.total + \"元\");\n        }\n    }\n}\n\nvoid main() {\n    Order order1 = new Order();\n    order1.userName = \"张三\";\n    order1.spuName = \"牛奶\";\n    order1.spuPrice = 2.5;\n    order1.spuCount = 3;\n    order1.total = 7.5;\n    order1.status = true;\n    order1.createdAt = \"2024-01-01 12:30:00\";\n    order1.insert();\n    \n    Order order2 = new Order();\n    order2.userName = \"李四\";\n    order2.spuName = \"面包\";\n    order2.spuPrice = 5.5;\n    order2.spuCount = 2;\n    order2.total = 11.0;\n    order2.status = false;\n    order2.createdAt = \"2024-01-01 13:00:00\";\n    order2.insert();\n    \n    Order.selectList();\n}"
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
                "code": "public class 父类 {\n    public int id;\n    public void 方法() {}\n}\n\npublic class 子类 extends 父类 {\n    //自动拥有父类的id和方法\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\n\npublic class Base<T> {\n    public int id;\n    public static List list = new ArrayList<>();\n    \n    public void insert() {\n        Base.list.add(this);\n    }\n    \n    public static List selectList() {\n        return Base.list;\n    }\n}\n\npublic class Order extends Base<Order> {\n    public String userName;\n    public String spuName;\n    public double spuPrice;\n    public int spuCount;\n    public double total;\n    public boolean status;\n    public String createdAt;\n}\n\nvoid main() {\n    Order order = new Order();\n    order.id = 1;           //继承自Base的id\n    order.userName = \"张三\";\n    order.spuName = \"牛奶\";\n    order.spuPrice = 2.5;\n    order.spuCount = 3;\n    order.total = 7.5;\n    order.status = true;\n    order.createdAt = \"2024-01-01 12:30:00\";\n    order.insert();\n    \n    IO.println(\"订单数：\" + Order.selectList().size());\n}"
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
                "content": "之前程序能下单保存了，但无法通过网页操作。\nHTTP接口 = 远程调函数。用户通过网页远程下单。"
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
                "code": "// 请求对象：与Order属性一致\npublic class CreateOrderReq {\n    public String userName;\n    public String spuName;\n    public double spuPrice;\n    public int spuCount;\n    public double total;\n    public boolean status;\n    public String createdAt;\n}"
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
                "code": "// 公共响应对象\npublic class BaseResp<T> {\n    public int code;      // 状态码：0成功，1失败\n    public String msg;    // 提示信息\n    public T data;        // 业务数据\n    \n    public static <T> BaseResp<T> ok(T data) {\n        BaseResp<T> resp = new BaseResp<>();\n        resp.code = 0;\n        resp.msg = \"success\";\n        resp.data = data;\n        return resp;\n    }\n    \n    public static <T> BaseResp<T> err(String msg) {\n        BaseResp<T> resp = new BaseResp<>();\n        resp.code = 1;\n        resp.msg = msg;\n        resp.data = null;\n        return resp;\n    }\n}"
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
                "code": "@SpringBootApplication\n@RestController\npublic class DemoApplication {\n    \n    static List<Order> orders = new ArrayList<>();\n    static int idCounter = 1;\n\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n\n    // 下单接口\n    @PostMapping(\"/createOrder\")\n    public BaseResp<CreateOrderResp> createOrder(@RequestBody CreateOrderReq req) {\n        // 参数校验\n        if (req.spuName == null || req.spuName.isEmpty()) {\n            return BaseResp.err(\"商品名称不能为空\");\n        }\n        if (req.spuPrice <= 0) {\n            return BaseResp.err(\"商品价格必须大于0\");\n        }\n        \n        Order order = new Order();\n        order.id = idCounter++;\n        order.userName = req.userName;\n        order.spuName = req.spuName;\n        order.spuPrice = req.spuPrice;\n        order.spuCount = req.spuCount;\n        order.total = req.total;\n        order.status = req.status;\n        order.createdAt = req.createdAt;\n        orders.add(order);\n        \n        CreateOrderResp data = new CreateOrderResp();\n        data.orderId = order.id;\n        return BaseResp.ok(data);\n    }\n}"
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
                "code": "### 下单（成功）\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\n\n{\"userName\": \"张三\", \"spuName\": \"牛奶\", \"spuPrice\": 2.5, \"spuCount\": 3, \"total\": 7.5, \"status\": true, \"createdAt\": \"2024-01-01 12:30:00\"}\n\n### 下单（失败-商品名称为空）\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\n\n{\"userName\": \"张三\", \"spuName\": \"\", \"spuPrice\": 2.5, \"spuCount\": 3, \"total\": 7.5, \"status\": true, \"createdAt\": \"2024-01-01 12:30:00\"}\n\n### 下单（失败-价格为0）\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\n\n{\"userName\": \"张三\", \"spuName\": \"牛奶\", \"spuPrice\": 0, \"spuCount\": 3, \"total\": 0, \"status\": true, \"createdAt\": \"2024-01-01 12:30:00\"}"
              },
              {
                "id": "b11",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "// 成功响应\n{\"code\": 0, \"msg\": \"success\", \"data\": {\"orderId\": 1}}\n\n// 失败响应-商品名称为空\n{\"code\": 1, \"msg\": \"商品名称不能为空\", \"data\": null}\n\n// 失败响应-价格为0\n{\"code\": 1, \"msg\": \"商品价格必须大于0\", \"data\": null}"
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
                "code": "public class GetOrdersReq {\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/getOrders\")\npublic BaseResp<List<Order>> getOrders(@RequestBody GetOrdersReq req) {\n    return BaseResp.ok(orders);\n}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 查询订单\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\n\n{}"
              },
              {
                "id": "b5",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\n  \"code\": 0,\n  \"msg\": \"success\",\n  \"data\": [\n    {\"userName\": \"张三\", \"spuName\": \"牛奶\", \"spuPrice\": 2.5, \"spuCount\": 3, \"total\": 7.5, \"status\": true, \"createdAt\": \"2024-01-01 12:30:00\"}\n  ]\n}"
              },
              {
                "id": "b6",
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
        "title": "MyBatis-Plus操作数据库",
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
                "content": "用Java代码操作数据库，需要MyBatis-Plus框架。\n第1步：在pom.xml添加依赖"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "xml",
                "filename": "pom.xml",
                "code": "<dependencies>\n    <!-- MyBatis-Plus -->\n    <dependency>\n        <groupId>com.baomidou</groupId>\n        <artifactId>mybatis-plus-spring-boot3-starter</artifactId>\n        <version>3.5.7</version>\n    </dependency>\n    \n    <!-- SQLite驱动 -->\n    <dependency>\n        <groupId>org.xerial</groupId>\n        <artifactId>sqlite-jdbc</artifactId>\n        <version>3.45.1.0</version>\n    </dependency>\n</dependencies>"
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
                "code": "spring:\n  datasource:\n    url: jdbc:sqlite:D:/demo/shop.db\n    driver-class-name: org.sqlite.JDBC\n\nmybatis-plus:\n  configuration:\n    map-underscore-to-camel-case: true"
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
                "content": "定义订单实体类，继承 Model<Order> 后可直接调用数据库方法。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Order.java",
                "code": "import com.baomidou.mybatisplus.annotation.*;\nimport com.baomidou.mybatisplus.extension.activerecord.Model;\n\n@TableName(\"orders\")\npublic class Order extends Model<Order> {\n    @TableId(type = IdType.AUTO)\n    public Integer id;\n    public Integer userId;\n    public Integer spuId;\n    public String spuName;\n    public String spuImage;\n    public Double spuPrice;\n    public Integer spuCount;\n    public Double total;\n    public Integer status;\n    public String createdAt;\n}"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "继承 Model<Order> 后，order.insert()、order.selectList() 等方法自动可用"
              }
            ]
          },
          {
            "id": "l3",
            "title": "AR模式增删改查",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "直接用 Order 对象操作数据库，像调用普通方法一样简单："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "// 新增\nOrder order = new Order();\norder.userId = 1;\norder.spuId = 1;\norder.spuName = \"牛奶\";\norder.spuImage = \"https://example.com/milk.jpg\";\norder.spuPrice = 2.5;\norder.spuCount = 3;\norder.total = 7.5;\norder.status = 0;\norder.createdAt = \"2026-01-28\";\norder.insert();\n\n// 查询所有\nList<Order> list = new Order().selectList(null);\n\n// 根据ID查询\nOrder o = new Order().selectById(1);\n\n// 更新\norder.id = 1;\norder.status = 1;\norder.updateById();\n\n// 删除\nnew Order().deleteById(1);"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 新增订单\nPOST http://localhost:8080/addOrder\nContent-Type: application/json\n\n{\"userId\": 1, \"spuId\": 1, \"spuName\": \"牛奶\", \"spuImage\": \"https://example.com/milk.jpg\", \"spuPrice\": 2.5, \"spuCount\": 3, \"total\": 7.5, \"status\": 0, \"createdAt\": \"2026-01-28\"}\n\n### 查询所有订单\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\n\n{}\n\n### 删除订单\nPOST http://localhost:8080/deleteOrder\nContent-Type: application/json\n\n{\"id\": 1}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "MyBatis-Plus保存下单",
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
                "content": "之前HTTP章节的下单接口把订单存到内存List，重启就丢失了。\n现在用 AR 模式把订单保存到数据库，永久存储。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "// 下单接口（保存到数据库）\n@PostMapping(\"/createOrder\")\npublic BaseResp<String> createOrder(@RequestBody CreateOrderReq req) {\n    // 参数校验\n    if (req.spuId == null || req.spuId <= 0) {\n        return BaseResp.err(\"商品ID不能为空\");\n    }\n    \n    Order order = new Order();\n    order.spuId = req.spuId;\n    order.spuName = req.spuName;\n    order.spuImage = req.spuImage;\n    order.spuPrice = req.spuPrice;\n    order.spuCount = req.spuCount;\n    order.total = req.total;\n    order.status = req.status;\n    order.createdAt = req.createdAt;\n    order.insert();\n    \n    return BaseResp.ok(\"下单成功\");\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 下单（保存到数据库）\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\n\n{\"spuId\": 1, \"spuName\": \"牛奶\", \"spuPrice\": 2.5, \"spuCount\": 3, \"total\": 7.5, \"status\": 0, \"createdAt\": \"2024-01-01 12:30:00\"}"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "对比HTTP章节：orders.add(order) → order.insert()\n其他代码完全一样，只是存储位置从内存变成数据库"
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
                "content": "传入userId查询该用户订单，不传查询所有订单"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "GetOrdersReq.java",
                "code": "public class GetOrdersReq {\n    public int userId;  // 0查全部，传id查该用户\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/getOrders\")\npublic BaseResp<List<Order>> getOrders(@RequestBody GetOrdersReq req) {\n    List<Order> list;\n    if (req.userId == 0) {\n        // 查询所有\n        list = new Order().selectList(null);\n    } else {\n        // 按用户查询\n        list = new Order().selectList(\n            new QueryWrapper<Order>().eq(\"user_id\", req.userId)\n        );\n    }\n    return BaseResp.ok(list);\n}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 查询所有订单\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\n\n{}\n\n### 查询用户1的订单\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\n\n{\"userId\": 1}"
              },
              {
                "id": "b5",
                "type": "tip",
                "content": "QueryWrapper用于构建查询条件\n.eq(\"user_id\", userId) 表示 where user_id = ?"
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
    "title": "基础项目-gb商城",
    "desc": "SpringBoot商城项目",
    "icon": "🛒",
    "chapters": [
      {
        "id": "ch1",
        "title": "登录与拦截",
        "lessons": [
          {
            "id": "l1",
            "title": "为什么要登录",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "之前的下单接口，任何人都可以调用。\n实际业务中，必须登录后才能下单，才知道是谁在买。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "登录流程："
              },
              {
                "id": "b3",
                "type": "list",
                "items": [
                  "用户输入用户名+密码",
                  "服务器验证用户名密码",
                  "验证成功，颁发JWT令牌给用户(通过用户id颁发令牌)",
                  "用户每次请求携带JWT令牌",
                  "服务器验证令牌，确认用户身份"
                ]
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "JWT（JSON Web Token）相当于令牌,\n用户登录成功后获得令牌，之后所有请求都携带这个令牌\n有令牌 = 已登录，能访问接口\n无令牌 = 未登录，被拦截，令牌里有用户id代表是哪个用户"
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
                "code": "import io.jsonwebtoken.*;\nimport io.jsonwebtoken.security.Keys;\nimport javax.crypto.SecretKey;\nimport java.util.Date;\n\npublic class JwtUtil {\n    // 秘钥（生产环境应放配置文件）\n    static String SECRET = \"my-secret-key-1234567890-abcdefghijk\";\n    static SecretKey KEY = Keys.hmacShaKeyFor(SECRET.getBytes());\n    \n    // 生成JWT令牌(传入用户id给该用户颁发令牌)\n    public static String createToken(Integer userId) {\n        return Jwts.builder()\n            .claim(\"userId\", userId)      // key-value存放用户ID\n            .issuedAt(new Date())          // 签发时间\n            .expiration(new Date(System.currentTimeMillis() + 7 * 24 * 3600 * 1000))  // 7天过期\n            .signWith(KEY)                 // 签名\n            .compact();\n    }\n    \n    // 验证JWT令牌，令牌没问题返回用户ID\n    public static Integer verifyToken(String token) {\n        try {\n            Claims claims = Jwts.parser()\n                .verifyWith(KEY)\n                .build()\n                .parseSignedClaims(token)\n                .getPayload();\n            return claims.get(\"userId\", Integer.class);\n        } catch (Exception e) {\n            return null;  // 令牌无效或过期\n        }\n    }\n}"
              }
            ]
          },
          {
            "id": "l3b",
            "title": "JWT生成/验证",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用main方法测试JWT工具类："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java",
                "code": "void main() {\n    // 给用户ID=1生成令牌\n    String token = JwtUtil.createToken(1);\n    IO.println(\"生成的令牌: \" + token);\n    \n    // 验证令牌，拿到用户ID\n    Integer userId = JwtUtil.verifyToken(token);\n    IO.println(\"验证结果，用户ID: \" + userId);\n    \n    // 测试无效令牌\n    Integer result = JwtUtil.verifyToken(\"abc123\");\n    IO.println(\"无效令牌验证结果: \" + result);  // null\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "text",
                "filename": "运行结果",
                "code": "生成的令牌: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA...\n验证结果，用户ID: 1\n无效令牌验证结果: null"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "createToken：用户登录成功后调用，生成令牌返回给前端\nverifyToken：每次请求时调用，验证令牌是否有效"
              }
            ]
          },
          {
            "id": "l4",
            "title": "用户表设计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
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
                "code": "create table if not exists users (\n    id integer primary key autoincrement,\n    username text,\n    password text,\n    created_at text\n);"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "定义用户实体类（AR模式）："
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "User.java",
                "code": "import com.baomidou.mybatisplus.annotation.*;\nimport com.baomidou.mybatisplus.extension.activerecord.Model;\n\n@TableName(\"users\")\npublic class User extends Model<User> {\n    @TableId(type = IdType.AUTO)\n    public Integer id;\n    public String username;\n    public String password;\n    public String createdAt;\n}"
              }
            ]
          },
          {
            "id": "l5",
            "title": "登录/注册接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "登录注册合一：用户不存在自动注册，存在则验证密码"
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
                "code": "public class LoginResp {\n    public String token;\n}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/login\")\npublic BaseResp<LoginResp> login(@RequestBody LoginReq req) {\n    // 查询用户是否存在\n    User user = new User().selectOne(\n        new QueryWrapper<User>().eq(\"username\", req.username)\n    );\n    \n    if (user == null) {\n        // 用户不存在，自动注册\n        user = new User();\n        user.username = req.username;\n        user.password = req.password;\n        user.createdAt = \"2024-01-01 12:00:00\";\n        user.insert();\n    } else {\n        // 用户存在，验证密码\n        if (!user.password.equals(req.password)) {\n            return BaseResp.err(\"密码错误\");\n        }\n    }\n    \n    // 颁发JWT令牌\n    LoginResp resp = new LoginResp();\n    resp.token = JwtUtil.createToken(user.id);\n    return BaseResp.ok(resp);\n}"
              },
              {
                "id": "b5",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 登录/注册（用户不存在自动注册）\nPOST http://localhost:8080/login\nContent-Type: application/json\n\n{\"username\": \"zhangsan\", \"password\": \"123456\"}"
              },
              {
                "id": "b6",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\n  \"code\": 0,\n  \"msg\": \"success\",\n  \"data\": {\n    \"token\": \"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA...\"\n  }\n}"
              },
              {
                "id": "b7",
                "type": "tip",
                "content": "登录注册合一的好处：用户体验更简单，不用区分登录还是注册\n适合小程序、APP等场景"
              }
            ]
          },
          {
            "id": "l6",
            "title": "登录拦截器",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "拦截器：统一验证所有请求的JWT令牌"
              },
              {
                "id": "b2",
                "type": "list",
                "items": [
                  "用户每次请求在Header中携带token",
                  "拦截器验证token是否有效",
                  "有效则放行，无效则返回401"
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "WebConfig.java",
                "code": "@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    \n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(new HandlerInterceptor() {\n            @Override\n            public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {\n                // 从Header获取token\n                String token = request.getHeader(\"token\");\n                if (token == null) {\n                    response.setContentType(\"application/json;charset=UTF-8\");\n                    response.getWriter().write(\"{\\\"code\\\": 401, \\\"msg\\\": \\\"未登录\\\"}\");\n                    return false;\n                }\n                \n                // 验证token\n                Integer userId = JwtUtil.verifyToken(token);\n                if (userId == null) {\n                    response.setContentType(\"application/json;charset=UTF-8\");\n                    response.getWriter().write(\"{\\\"code\\\": 401, \\\"msg\\\": \\\"token无效\\\"}\");\n                    return false;\n                }\n                \n                request.setAttribute(\"userId\", userId);\n                return true;\n            }\n        })\n        .addPathPatterns(\"/**\")\n        .excludePathPatterns(\"/login\");\n    }\n}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 下单（header携带token参数）\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\ntoken: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIi...\n\n{\"spuName\": \"牛奶\", \"spuPrice\": 2.5, \"spuCount\": 3}"
              },
              {
                "id": "b5",
                "type": "text",
                "content": "HTTP请求有两个传参位置：\n· Header（请求头）- 放token等认证信息\n· Body（请求体）- 放业务数据如商品信息\n\ntoken放Header而不是Body，因为认证信息和业务数据要分开"
              },
              {
                "id": "b6",
                "type": "tip",
                "content": "不携带token或token无效 → 401未登录\n携带有效token → 正常访问接口\n\n更标准的写法是 Authorization: Bearer <token>"
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
            "title": "Order表改动",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "订单需要关联商品，新增spuId和spuImage字段：\n· spuId - 商品ID，知道买的是哪个商品\n· spuImage - 商品图片，查订单时直接显示，不用再查商品表"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "修改订单表，添加字段："
              },
              {
                "id": "b3",
                "type": "code",
                "language": "sql",
                "filename": "init.sql",
                "code": "create table if not exists orders (\n    id integer primary key autoincrement,\n    user_id integer,\n    spu_id integer,       -- 新增\n    spu_name text,\n    spu_image text,       -- 新增\n    spu_price real,\n    spu_count integer,\n    total real,\n    status integer,\n    created_at text\n);"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "修改Order实体类："
              },
              {
                "id": "b5",
                "type": "code",
                "language": "java",
                "filename": "Order.java",
                "code": "@TableName(\"orders\")\npublic class Order extends Model<Order> {\n    @TableId(type = IdType.AUTO)\n    public Integer id;\n    public Integer userId;\n    public Integer spuId;      // 新增\n    public String spuName;\n    public String spuImage;    // 新增\n    public Double spuPrice;\n    public Integer spuCount;\n    public Double total;\n    public Integer status;\n    public String createdAt;\n}"
              },
              {
                "id": "b6",
                "type": "tip",
                "content": "spuImage是冗余字段，但避免了联查商品表\n查订单直接就有图片，性能更好"
              }
            ]
          },
          {
            "id": "l2",
            "title": "下单接口改写",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "登录拦截器验证token后，把userId存入request。\n下单接口从request获取当前登录用户，关联到订单："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/createOrder\")\npublic BaseResp<String> createOrder(@RequestBody CreateOrderReq req, HttpServletRequest request) {\n    // 参数校验\n    if (req.spuId == null || req.spuId <= 0) {\n        return BaseResp.err(\"商品ID不能为空\");\n    }\n    \n    // 获取当前登录用户ID\n    Integer userId = (Integer) request.getAttribute(\"userId\");\n    \n    Order order = new Order();\n    order.userId = userId;\n    order.spuId = req.spuId;\n    order.spuName = req.spuName;\n    order.spuImage = req.spuImage;\n    order.spuPrice = req.spuPrice;\n    order.spuCount = req.spuCount;\n    order.total = req.total;\n    order.status = req.status;\n    order.createdAt = req.createdAt;\n    order.insert();\n    \n    return BaseResp.ok(\"下单成功\");\n}"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "之前下单不知道是谁买的\n现在通过userId关联，每个订单都有归属用户"
              }
            ]
          },
          {
            "id": "l2",
            "title": "查询订单接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "和之前一样，传入userId查询该用户订单，不传查询所有订单"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/getOrders\")\npublic BaseResp<List<Order>> getOrders(@RequestBody GetOrdersReq req) {\n    List<Order> list;\n    if (req.userId == 0) {\n        // 查询所有\n        list = new Order().selectList(null);\n    } else {\n        // 按用户查询\n        list = new Order().selectList(\n            new QueryWrapper<Order>().eq(\"user_id\", req.userId)\n        );\n    }\n    return BaseResp.ok(list);\n}"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "查询接口不需要改写，复用之前MyBatis-Plus章节的代码即可"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "商品模块",
        "lessons": [
          {
            "id": "l1",
            "title": "商品表设计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "创建商品表存储商品信息："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "sql",
                "filename": "init.sql",
                "code": "create table if not exists spu (\n    id integer primary key autoincrement,\n    name text,\n    image text,\n    price real,\n    stock integer,\n    created_at text\n);"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "定义商品实体类（AR模式）："
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "Spu.java",
                "code": "import com.baomidou.mybatisplus.annotation.*;\nimport com.baomidou.mybatisplus.extension.activerecord.Model;\n\n@TableName(\"spu\")\npublic class Spu extends Model<Spu> {\n    @TableId(type = IdType.AUTO)\n    public Integer id;\n    public String name;\n    public String image;\n    public Double price;\n    public Integer stock;\n    public String createdAt;\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "创建商品接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "java",
                "filename": "CreateSpuReq.java",
                "code": "public class CreateSpuReq {\n    public String name;\n    public String image;\n    public Double price;\n    public Integer stock;\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/createSpu\")\npublic BaseResp<String> createSpu(@RequestBody CreateSpuReq req) {\n    if (req.name == null || req.name.isEmpty()) {\n        return BaseResp.err(\"商品名称不能为空\");\n    }\n    if (req.price == null || req.price <= 0) {\n        return BaseResp.err(\"商品价格必须大于0\");\n    }\n    \n    Spu spu = new Spu();\n    spu.name = req.name;\n    spu.image = req.image;\n    spu.price = req.price;\n    spu.stock = req.stock;\n    spu.createdAt = \"2024-01-01 12:00:00\";\n    spu.insert();\n    \n    return BaseResp.ok(\"创建成功\");\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 创建商品\nPOST http://localhost:8080/createSpu\nContent-Type: application/json\ntoken: eyJhbGciOiJIUzI1NiJ9...\n\n{\"name\": \"牛奶\", \"image\": \"https://example.com/milk.jpg\", \"price\": 5.5, \"stock\": 100}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "修改商品接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "java",
                "filename": "UpdateSpuReq.java",
                "code": "public class UpdateSpuReq {\n    public Integer id;\n    public String name;\n    public String image;\n    public Double price;\n    public Integer stock;\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/updateSpu\")\npublic BaseResp<String> updateSpu(@RequestBody UpdateSpuReq req) {\n    if (req.id == null || req.id <= 0) {\n        return BaseResp.err(\"商品ID不能为空\");\n    }\n    \n    Spu spu = new Spu().selectById(req.id);\n    if (spu == null) {\n        return BaseResp.err(\"商品不存在\");\n    }\n    \n    spu.name = req.name;\n    spu.image = req.image;\n    spu.price = req.price;\n    spu.stock = req.stock;\n    spu.updateById();\n    \n    return BaseResp.ok(\"修改成功\");\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 修改商品\nPOST http://localhost:8080/updateSpu\nContent-Type: application/json\ntoken: eyJhbGciOiJIUzI1NiJ9...\n\n{\"id\": 1, \"name\": \"纯牛奶\", \"price\": 6.0, \"stock\": 80}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "查询商品接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "java",
                "filename": "GetSpuListReq.java",
                "code": "public class GetSpuListReq {\n    public int id;  // 0查全部，传id查单个\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/getSpuList\")\npublic BaseResp<List<Spu>> getSpuList(@RequestBody GetSpuListReq req) {\n    List<Spu> list;\n    if (req.id == 0) {\n        list = new Spu().selectList(null);\n    } else {\n        Spu spu = new Spu().selectById(req.id);\n        list = spu != null ? List.of(spu) : List.of();\n    }\n    return BaseResp.ok(list);\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 查询所有商品\nPOST http://localhost:8080/getSpuList\nContent-Type: application/json\ntoken: eyJhbGciOiJIUzI1NiJ9...\n\n{}\n\n### 查询单个商品\nPOST http://localhost:8080/getSpuList\nContent-Type: application/json\ntoken: eyJhbGciOiJIUzI1NiJ9...\n\n{\"id\": 1}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\n  \"code\": 0,\n  \"msg\": \"success\",\n  \"data\": [\n    {\"id\": 1, \"name\": \"牛奶\", \"image\": \"https://example.com/milk.jpg\", \"price\": 5.5, \"stock\": 100, \"createdAt\": \"2024-01-01 12:00:00\"}\n  ]\n}"
              },
              {
                "id": "b5",
                "type": "tip",
                "content": "商品模块完成！和订单模块一样，都是基于AR模式的增删改查"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "前后端联调",
        "lessons": [
          {
            "id": "l1",
            "title": "业务流程测试",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用test.http测试完整业务流程："
              },
              {
                "id": "b2",
                "type": "list",
                "items": [
                  "登录 → 获取token",
                  "查询商品列表",
                  "选择商品下单（必须登录）",
                  "查询我的订单"
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 1.登录获取token\nPOST http://localhost:8080/login\nContent-Type: application/json\n\n{\"username\": \"zhangsan\", \"password\": \"123456\"}\n\n### 2.查询商品列表\nPOST http://localhost:8080/getSpuList\nContent-Type: application/json\ntoken: 复制上面返回的token\n\n{}\n\n### 3.下单（选择商品id=1）\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\ntoken: 复制上面返回的token\n\n{\"spuId\": 1, \"spuName\": \"牛奶\", \"spuImage\": \"https://example.com/milk.jpg\", \"spuPrice\": 5.5, \"spuCount\": 2, \"total\": 11.0, \"status\": 0, \"createdAt\": \"2024-01-01 12:00:00\"}\n\n### 4.查询我的订单\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\ntoken: 复制上面返回的token\n\n{\"userId\": 0}"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "后端业务跑通！\n前端代码可以让AI生成，调用这些接口即可"
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
            "title": "SSH登录服务器",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "购买云服务器后，用SSH连接服务器"},
              {"id": "b2", "type": "text", "content": "Windows用户推荐使用工具：\n· Tabby（推荐，界面美观）\n· MobaXterm\n· PowerShell内置ssh命令"},
              {"id": "b3", "type": "code", "language": "bash", "filename": "终端", "code": "# SSH登录命令\nssh root@你的服务器IP\n\n# 输入密码后回车\n# 看到命令提示符变为 root@xxx 表示登录成功"},
              {"id": "b4", "type": "tip", "content": "服务器默认用户是root，端口是22\n首次登录会提示“是否信任”，输入yes即可"}
            ]
          },
          {
            "id": "l2",
            "title": "Linux基础命令",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["命令", "说明", "示例"], "rows": [["ls", "列出文件", "ls -la"], ["cd", "切换目录", "cd /home"], ["pwd", "显示当前路径", "pwd"], ["mkdir", "创建文件夹", "mkdir app"], ["rm", "删除文件", "rm -rf app"], ["cp", "复制文件", "cp a.txt b.txt"], ["mv", "移动/重命名", "mv a.txt b.txt"], ["cat", "查看文件内容", "cat app.log"], ["tail", "实时查看日志", "tail -f app.log"]]},
              {"id": "b2", "type": "code", "language": "bash", "filename": "终端", "code": "# 查看当前目录文件\nls -la\n\n# 创建应用目录\nmkdir -p /home/app\n\n# 进入目录\ncd /home/app\n\n# 实时查看日志（Ctrl+C退出）\ntail -f app.log"}
            ]
          },
          {
            "id": "l3",
            "title": "安装JDK",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "SpringBoot需要JDK运行环境"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "终端", "code": "# Ubuntu/Debian\napt update\napt install openjdk-21-jdk -y\n\n# CentOS\nyum install java-21-openjdk -y\n\n# 验证安装\njava -version"},
              {"id": "b3", "type": "tip", "content": "看到 openjdk version \"21.x.x\" 表示安装成功"}
            ]
          },
          {
            "id": "l4",
            "title": "部署SpringBoot",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "1. IDEA打包项目：Maven → package → 生成xxx.jar"},
              {"id": "b2", "type": "text", "content": "2. 上传jar到服务器：\n· Tabby直接拖拽上传\n· 或用scp命令"},
              {"id": "b3", "type": "code", "language": "bash", "filename": "终端", "code": "# 进入应用目录\ncd /home/app\n\n# 前台运行（关闭终端就停）\njava -jar demo.jar\n\n# 后台运行（关闭终端也不停）\nnohup java -jar demo.jar > app.log 2>&1 &\n\n# 查看日志\ntail -f app.log\n\n# 查看进程\nps aux | grep java\n\n# 停止进程\nkill -9 进程ID"},
              {"id": "b4", "type": "tip", "content": "nohup后台运行，日志输出到app.log\n用tail -f实时查看日志"}
            ]
          },
          {
            "id": "l5",
            "title": "安装Nginx",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Nginx用于部署前端Vue静态资源 + 反向代理后端API"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "终端", "code": "# Ubuntu/Debian\napt install nginx -y\n\n# CentOS\nyum install nginx -y\n\n# 启动Nginx\nsystemctl start nginx\nsystemctl enable nginx\n\n# 查看状态\nsystemctl status nginx"},
              {"id": "b3", "type": "tip", "content": "浏览器访问服务器IP，看到Nginx欢迎页表示安装成功"}
            ]
          },
          {
            "id": "l6",
            "title": "部署Vue前端",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "1. 本地打包Vue项目：npm run build → 生成dist文件夹"},
              {"id": "b2", "type": "text", "content": "2. 上传dist到服务器 /home/app/dist"},
              {"id": "b3", "type": "text", "content": "3. 配置Nginx："},
              {"id": "b4", "type": "code", "language": "nginx", "filename": "/etc/nginx/nginx.conf", "code": "server {\n    listen 80;\n    server_name 你的域名或IP;\n    \n    # 前端静态资源\n    location / {\n        root /home/app/dist;\n        index index.html;\n        try_files $uri $uri/ /index.html;\n    }\n    \n    # 后端API代理\n    location /api {\n        proxy_pass http://127.0.0.1:8080;\n    }\n}"},
              {"id": "b5", "type": "code", "language": "bash", "filename": "终端", "code": "# 检查配置语法\nnginx -t\n\n# 重新加载配置\nnginx -s reload"},
              {"id": "b6", "type": "tip", "content": "try_files解决Vue路由刷新404问题\n/api请求会代理到后端8080端口"}
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "Docker容器化部署",
        "lessons": [
          {
            "id": "l1",
            "title": "手动部署vs Docker",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "上一节手动部署步骤：\n1. 安装JDK\n2. 配置环境\n3. 上传jar\n4. nohup启动\n\n每换一台服务器都要重新配置，很麻烦！"},
              {"id": "b2", "type": "table", "headers": ["部署方式", "步骤", "问题"], "rows": [["手动部署", "装JDK→配环境→上传jar→nohup启动", "每台机器都要配置"], ["Docker部署", "打包镜像→docker run", "一次打包，处处运行"]]},
              {"id": "b3", "type": "tip", "content": "Docker把应用+环境打包成镜像\n不用装JDK，不用配环境，一行命令启动"}
            ]
          },
          {
            "id": "l2",
            "title": "安装Docker",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "服务器安装Docker", "code": "# Ubuntu\napt update\napt install -y docker.io\nsystemctl start docker\nsystemctl enable docker\n\n# CentOS\nyum install -y docker\nsystemctl start docker\n\n# 验证安装\ndocker --version"},
              {"id": "b2", "type": "tip", "content": "Windows/Mac安装Docker Desktop\n看到 Docker version xx.xx 表示安装成功"}
            ]
          },
          {
            "id": "l3",
            "title": "编写Dockerfile",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "在项目根目录创建 Dockerfile 文件（无后缀）"},
              {"id": "b2", "type": "code", "language": "dockerfile", "filename": "Dockerfile", "code": "# 基础镜像（已包含JDK，不用自己装）\nFROM eclipse-temurin:21-jre\n\n# 工作目录\nWORKDIR /app\n\n# 复制jar包到镜像\nCOPY target/*.jar app.jar\n\n# 声明端口\nEXPOSE 8080\n\n# 启动命令\nCMD [\"java\", \"-jar\", \"app.jar\"]"},
              {"id": "b3", "type": "table", "headers": ["指令", "说明"], "rows": [["FROM", "基础镜像，这里用带JDK21的镜像"], ["WORKDIR", "工作目录"], ["COPY", "复制文件到镜像"], ["EXPOSE", "声明端口"], ["CMD", "启动命令"]]},
              {"id": "b4", "type": "tip", "content": "FROM eclipse-temurin:21-jre 已包含JDK\n不用在服务器上手动安装JDK了！"}
            ]
          },
          {
            "id": "l4",
            "title": "构建与运行",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "本地打包", "code": "# 1. 先打包项目\nmvn package -DskipTests\n\n# 2. 构建镜像\ndocker build -t demo-app:1.0 .\n\n# 查看镜像\ndocker images"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "运行容器", "code": "# 启动容器\ndocker run -d -p 8080:8080 --name demo demo-app:1.0\n\n# 查看运行中的容器\ndocker ps\n\n# 查看日志\ndocker logs -f demo"},
              {"id": "b3", "type": "table", "headers": ["参数", "说明"], "rows": [["-d", "后台运行"], ["-p 8080:8080", "端口映射，主机:容器"], ["--name demo", "容器名称"]]},
              {"id": "b4", "type": "tip", "content": "浏览器访问 http://服务器IP:8080 测试\n一行 docker run 就跑起来了！"}
            ]
          },
          {
            "id": "l5",
            "title": "常用命令",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "Docker常用命令", "code": "# 查看所有容器\ndocker ps -a\n\n# 停止容器\ndocker stop demo\n\n# 启动容器\ndocker start demo\n\n# 删除容器\ndocker rm demo\n\n# 删除镜像\ndocker rmi demo-app:1.0\n\n# 进入容器\ndocker exec -it demo bash"},
              {"id": "b2", "type": "tip", "content": "更新应用：重新 build 镜像 → 停止旧容器 → 删除旧容器 → run新镜像"}
            ]
          },
          {
            "id": "l6",
            "title": "部署方式对比",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["", "手动部署", "Docker部署"], "rows": [["安装JDK", "需要", "不需要（镜像自带）"], ["配置环境", "每台机器都配", "一次打包，处处运行"], ["启动命令", "nohup java -jar", "docker run"], ["查看日志", "tail -f app.log", "docker logs -f"], ["停止应用", "kill -9 进程ID", "docker stop"]]},
              {"id": "b2", "type": "tip", "content": "Docker优势：\n· 环境一致，不会出现\"6我电脑能跑，服务器不能跑\"\n· 部署简单，一行命令\n· 便于扩容，多跑几个容器即可"}
            ]
          }
        ]
      },
      {
        "id": "ch7",
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
      },
      {
        "id": "ch8",
        "title": "微信支付（可选）",
        "lessons": [
          {
            "id": "l1",
            "title": "支付接口对接",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "课程建设中..."
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "微信支付需要企业资质，个人学习可跳过此章节"
              }
            ]
          }
        ]
      },
      {
        "id": "ch9",
        "title": "三层架构",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "三层架构概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "之前AR模式：Controller直接操作数据库，简单直接\n企业常用三层架构：Controller → Service → Mapper"},
              {"id": "b2", "type": "table", "headers": ["层", "职责", "命名"], "rows": [["Controller", "接收请求、返回响应", "XxxController"], ["Service", "业务逻辑", "XxxService"], ["Mapper", "数据库操作", "XxxMapper"]]},
              {"id": "b3", "type": "tip", "content": "AR模式适合小项目/快速开发\n三层架构适合中大型项目/团队协作"}
            ]
          },
          {
            "id": "l2",
            "title": "创建Mapper接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Mapper接口继承BaseMapper，自动拥有增删改查方法"},
              {"id": "b2", "type": "code", "language": "java", "filename": "OrderMapper.java", "code": "import com.baomidou.mybatisplus.core.mapper.BaseMapper;\nimport org.apache.ibatis.annotations.Mapper;\n\n@Mapper\npublic interface OrderMapper extends BaseMapper<Order> {\n    // 继承BaseMapper后自动拥有：\n    // insert(order)\n    // selectById(id)\n    // selectList(wrapper)\n    // updateById(order)\n    // deleteById(id)\n}"},
              {"id": "b3", "type": "tip", "content": "@Mapper注解让Spring自动创建实现类\n不需要写任何SQL，MyBatis-Plus自动生成"}
            ]
          },
          {
            "id": "l3",
            "title": "创建Service层",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Service层处理业务逻辑，调用Mapper操作数据库"},
              {"id": "b2", "type": "code", "language": "java", "filename": "OrderService.java", "code": "import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.stereotype.Service;\nimport java.util.List;\n\n@Service\npublic class OrderService {\n    \n    @Autowired\n    public OrderMapper orderMapper;\n    \n    // 创建订单\n    public void createOrder(Order order) {\n        order.total = order.spuPrice * order.spuCount;\n        order.status = 0;\n        orderMapper.insert(order);\n    }\n    \n    // 查询所有订单\n    public List<Order> getOrders() {\n        return orderMapper.selectList(null);\n    }\n    \n    // 根据ID查询\n    public Order getOrderById(Integer id) {\n        return orderMapper.selectById(id);\n    }\n}"},
              {"id": "b3", "type": "tip", "content": "@Service标记为服务层组件\n@Autowired自动注入Mapper"}
            ]
          },
          {
            "id": "l4",
            "title": "Controller调用Service",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Controller调用Service，不再直接操作数据库"},
              {"id": "b2", "type": "code", "language": "java", "filename": "OrderController.java", "code": "import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.*;\nimport java.util.List;\n\n@RestController\npublic class OrderController {\n    \n    @Autowired\n    public OrderService orderService;\n    \n    @PostMapping(\"/createOrder\")\n    public BaseResp<String> createOrder(@RequestBody Order order) {\n        orderService.createOrder(order);\n        return BaseResp.ok(\"下单成功\");\n    }\n    \n    @GetMapping(\"/orders\")\n    public BaseResp<List<Order>> getOrders() {\n        List<Order> list = orderService.getOrders();\n        return BaseResp.ok(list);\n    }\n    \n    @GetMapping(\"/order/{id}\")\n    public BaseResp<Order> getOrder(@PathVariable Integer id) {\n        Order order = orderService.getOrderById(id);\n        return BaseResp.ok(order);\n    }\n}"},
              {"id": "b3", "type": "tip", "content": "Controller只做Request/Response处理\n业务逻辑全部放在Service"}
            ]
          },
          {
            "id": "l5",
            "title": "代码分层对比",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "AR模式 vs 三层架构"},
              {"id": "b2", "type": "table", "headers": ["", "AR模式", "三层架构"], "rows": [["代码量", "少", "多"], ["结构", "Controller + Model", "Controller + Service + Mapper"], ["复杂业务", "不适合", "适合"], ["团队协作", "一般", "好"], ["适用场景", "小项目/快速开发", "中大型项目"]]},
              {"id": "b3", "type": "tip", "content": "个人项目用AR更简单\n入职企业后大概率用三层架构"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-advanced",
    "pathId": "java",
    "title": "Java进阶",
    "desc": "深入理解Java核心特性",
    "icon": "🚀",
    "chapters": [
      {
        "id": "ch1",
        "title": "异常处理",
        "lessons": [
          {
            "id": "l1",
            "title": "异常类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Java异常分为两类：Checked异常和Unchecked异常"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["类型", "说明", "示例"],
                "rows": [
                  ["Checked异常", "编译时强制检查，必须处理", "IOException, SQLException"],
                  ["Unchecked异常", "运行时异常，可不处理", "NullPointerException, ArrayIndexOutOfBoundsException"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    try {\n        int[] arr = {1, 2, 3};\n        IO.println(arr[5]);  // 数组越界\n    } catch (ArrayIndexOutOfBoundsException e) {\n        IO.println(\"数组越界：\" + e.getMessage());\n    }\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "try-catch-finally",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "try捕获异常，catch处理异常，finally一定执行（用于释放资源）"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    try {\n        IO.println(\"执行业务代码\");\n        int result = 10 / 0;  // 异常\n    } catch (ArithmeticException e) {\n        IO.println(\"捕获异常：\" + e.getMessage());\n    } finally {\n        IO.println(\"finally一定执行，用于清理资源\");\n    }\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "自定义异常",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "定义业务异常类，继承RuntimeException"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "public class BusinessException extends RuntimeException {\n    public int code;\n    public BusinessException(int code, String message) {\n        super(message);\n        this.code = code;\n    }\n}\n\nvoid main() {\n    try {\n        throw new BusinessException(400, \"参数错误\");\n    } catch (BusinessException e) {\n        IO.println(\"错误码：\" + e.code + \", 消息：\" + e.getMessage());\n    }\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "泛型",
        "lessons": [
          {
            "id": "l1",
            "title": "泛型类",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "泛型让类支持多种类型，用<T>表示类型参数"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "public class Result<T> {\n    public int code;\n    public String msg;\n    public T data;\n    \n    public static <T> Result<T> ok(T data) {\n        Result<T> r = new Result<>();\n        r.code = 0;\n        r.msg = \"success\";\n        r.data = data;\n        return r;\n    }\n}\n\nvoid main() {\n    Result<String> r1 = Result.ok(\"字符串数据\");\n    IO.println(r1.data);\n    \n    Result<Integer> r2 = Result.ok(100);\n    IO.println(r2.data);\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "泛型方法",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "方法也可以定义泛型，在返回类型前加<T>"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "public class Utils {\n    public static <T> void printList(List<T> list) {\n        for (T item : list) {\n            IO.println(item);\n        }\n    }\n}\n\nvoid main() {\n    List<String> names = List.of(\"张三\", \"李四\");\n    Utils.printList(names);\n    \n    List<Integer> nums = List.of(1, 2, 3);\n    Utils.printList(nums);\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "Lambda表达式",
        "lessons": [
          {
            "id": "l1",
            "title": "Lambda基础",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Lambda是匿名函数的简写，语法：(参数) -> {代码}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\n\nvoid main() {\n    List<String> names = new ArrayList<>(List.of(\"张三\", \"李四\", \"王五\"));\n    \n    // 传统写法\n    names.sort(new Comparator<String>() {\n        public int compare(String a, String b) {\n            return a.compareTo(b);\n        }\n    });\n    \n    // Lambda写法\n    names.sort((a, b) -> a.compareTo(b));\n    \n    names.forEach(name -> IO.println(name));\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "方法引用",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "方法引用是Lambda的简写，语法：类名::方法名"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\n\nvoid main() {\n    List<String> names = List.of(\"张三\", \"李四\", \"王五\");\n    \n    // Lambda\n    names.forEach(name -> IO.println(name));\n    \n    // 方法引用\n    names.forEach(IO::println);\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "Stream流",
        "lessons": [
          {
            "id": "l1",
            "title": "Stream基础",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Stream用于处理集合数据，支持链式操作"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\n\nvoid main() {\n    List<Integer> nums = List.of(1, 2, 3, 4, 5);\n    \n    // 过滤偶数，乘以2，求和\n    int sum = nums.stream()\n        .filter(n -> n % 2 == 0)  // 过滤：保留偶数\n        .map(n -> n * 2)          // 映射：每个乘以2\n        .reduce(0, Integer::sum); // 归约：求和\n    \n    IO.println(\"结果：\" + sum);  // 12\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "常用Stream操作",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["方法", "作用", "示例"],
                "rows": [
                  ["filter", "过滤元素", ".filter(n -> n > 0)"],
                  ["map", "转换元素", ".map(n -> n * 2)"],
                  ["sorted", "排序", ".sorted()"],
                  ["distinct", "去重", ".distinct()"],
                  ["limit", "取前n个", ".limit(5)"],
                  ["collect", "收集结果", ".collect(Collectors.toList())"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.*;\nimport java.util.stream.*;\n\nvoid main() {\n    List<String> names = List.of(\"张三\", \"李四\", \"张五\", \"张三\");\n    \n    List<String> result = names.stream()\n        .filter(n -> n.startsWith(\"张\"))  // 过滤姓张\n        .distinct()                        // 去重\n        .sorted()                          // 排序\n        .collect(Collectors.toList());     // 收集为List\n    \n    IO.println(result);  // [张三, 张五]\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "多线程基础",
        "lessons": [
          {
            "id": "l1",
            "title": "创建线程",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "线程让程序同时执行多个任务"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() throws InterruptedException {\n    // 方式1：Lambda创建线程\n    Thread t1 = new Thread(() -> {\n        IO.println(\"线程1执行\");\n    });\n    t1.start();\n    \n    // 方式2：继承Thread\n    Thread t2 = new Thread() {\n        public void run() {\n            IO.println(\"线程2执行\");\n        }\n    };\n    t2.start();\n    \n    // 等待线程执行完成\n    t1.join();\n    t2.join();\n    IO.println(\"主线程结束\");\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "线程池",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "线程池复用线程，避免频繁创建销毁"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "import java.util.concurrent.*;\n\nvoid main() throws InterruptedException {\n    // 创建固定大小线程池\n    ExecutorService pool = Executors.newFixedThreadPool(3);\n    \n    // 提交5个任务\n    for (int i = 1; i <= 5; i++) {\n        int taskId = i;\n        pool.submit(() -> {\n            IO.println(\"任务\" + taskId + \"执行，线程：\" + Thread.currentThread().getName());\n        });\n    }\n    \n    pool.shutdown();\n    pool.awaitTermination(1, TimeUnit.MINUTES);\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "TCP/UDP/WS协议",
        "lessons": [
          {
            "id": "l1",
            "title": "协议对比",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "HTTP是应用层协议，底层基于TCP\n了解TCP/UDP/WebSocket有助于理解网络通信"},
              {"id": "b2", "type": "table", "headers": ["协议", "特点", "场景"], "rows": [["TCP", "可靠、有连接、有序", "HTTP、文件传输、数据库连接"], ["UDP", "快速、无连接、可能丢包", "视频直播、游戏、DNS"], ["WebSocket", "全双工、持久连接", "实时聊天、消息推送"]]},
              {"id": "b3", "type": "tip", "content": "TCP像EMS：可靠但慢\nUDP像平邮：快但可能丢\nWebSocket像电话：双向实时通信"}
            ]
          },
          {
            "id": "l2",
            "title": "TCP通信",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "TCP服务端监听端口，客户端连接后可双向通信"},
              {"id": "b2", "type": "code", "language": "java", "filename": "TcpServer.java", "code": "import java.net.*;\nimport java.io.*;\n\nvoid main() throws IOException {\n    // 1. 创建服务端，监听8888端口\n    ServerSocket server = new ServerSocket(8888);\n    IO.println(\"服务端启动，等待连接...\");\n    \n    // 2. 接受客户端连接（阻塞）\n    Socket client = server.accept();\n    IO.println(\"客户端已连接: \" + client.getInetAddress());\n    \n    // 3. 读取客户端消息\n    BufferedReader in = new BufferedReader(\n        new InputStreamReader(client.getInputStream()));\n    String msg = in.readLine();\n    IO.println(\"收到: \" + msg);\n    \n    // 4. 发送响应\n    PrintWriter out = new PrintWriter(client.getOutputStream(), true);\n    out.println(\"服务端收到: \" + msg);\n    \n    client.close();\n    server.close();\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "TcpClient.java", "code": "import java.net.*;\nimport java.io.*;\n\nvoid main() throws IOException {\n    // 1. 连接服务端\n    Socket socket = new Socket(\"localhost\", 8888);\n    \n    // 2. 发送消息\n    PrintWriter out = new PrintWriter(socket.getOutputStream(), true);\n    out.println(\"Hello TCP\");\n    \n    // 3. 接收响应\n    BufferedReader in = new BufferedReader(\n        new InputStreamReader(socket.getInputStream()));\n    String resp = in.readLine();\n    IO.println(\"响应: \" + resp);\n    \n    socket.close();\n}"},
              {"id": "b4", "type": "tip", "content": "先运行Server再Client\nServerSocket.accept()会阻塞等待连接"}
            ]
          },
          {
            "id": "l3",
            "title": "UDP通信",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "UDP无连接，直接发送数据包"},
              {"id": "b2", "type": "code", "language": "java", "filename": "UdpServer.java", "code": "import java.net.*;\n\nvoid main() throws IOException {\n    // 1. 创建服务端，监听9999端口\n    DatagramSocket server = new DatagramSocket(9999);\n    IO.println(\"UDP服务端启动...\");\n    \n    // 2. 接收数据包\n    byte[] buf = new byte[1024];\n    DatagramPacket packet = new DatagramPacket(buf, buf.length);\n    server.receive(packet);  // 阻塞\n    \n    String msg = new String(packet.getData(), 0, packet.getLength());\n    IO.println(\"收到: \" + msg);\n    \n    // 3. 发送响应\n    byte[] resp = (\"Echo: \" + msg).getBytes();\n    DatagramPacket respPacket = new DatagramPacket(\n        resp, resp.length, packet.getAddress(), packet.getPort());\n    server.send(respPacket);\n    \n    server.close();\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "UdpClient.java", "code": "import java.net.*;\n\nvoid main() throws IOException {\n    DatagramSocket client = new DatagramSocket();\n    \n    // 1. 发送数据包\n    byte[] data = \"Hello UDP\".getBytes();\n    DatagramPacket packet = new DatagramPacket(\n        data, data.length, \n        InetAddress.getByName(\"localhost\"), 9999);\n    client.send(packet);\n    \n    // 2. 接收响应\n    byte[] buf = new byte[1024];\n    DatagramPacket resp = new DatagramPacket(buf, buf.length);\n    client.receive(resp);\n    \n    IO.println(\"响应: \" + new String(resp.getData(), 0, resp.getLength()));\n    client.close();\n}"},
              {"id": "b4", "type": "tip", "content": "UDP无连接，直接发包\n数据包可能丢失或乱序，适合实时性要求高的场景"}
            ]
          },
          {
            "id": "l4",
            "title": "WebSocket通信",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "WebSocket是全双工协议，服务端可主动推送消息\nSpringBoot集成WebSocket非常简单"},
              {"id": "b2", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-websocket</artifactId>\n</dependency>"},
              {"id": "b3", "type": "code", "language": "java", "filename": "WebSocketConfig.java", "code": "@Configuration\n@EnableWebSocket\npublic class WebSocketConfig implements WebSocketConfigurer {\n    @Override\n    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {\n        registry.addHandler(new MyHandler(), \"/ws\").setAllowedOrigins(\"*\");\n    }\n}"},
              {"id": "b4", "type": "code", "language": "java", "filename": "MyHandler.java", "code": "public class MyHandler extends TextWebSocketHandler {\n    \n    @Override\n    public void afterConnectionEstablished(WebSocketSession session) {\n        IO.println(\"客户端连接: \" + session.getId());\n    }\n    \n    @Override\n    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {\n        IO.println(\"收到: \" + message.getPayload());\n        // 回复消息\n        session.sendMessage(new TextMessage(\"Echo: \" + message.getPayload()));\n    }\n    \n    @Override\n    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) {\n        IO.println(\"客户端断开: \" + session.getId());\n    }\n}"},
              {"id": "b5", "type": "code", "language": "javascript", "filename": "前端JS", "code": "// 浏览器连接WebSocket\nconst ws = new WebSocket('ws://localhost:8080/ws');\n\nws.onopen = () => {\n    console.log('连接成功');\n    ws.send('Hello WebSocket');\n};\n\nws.onmessage = (e) => {\n    console.log('收到:', e.data);\n};\n\nws.onclose = () => {\n    console.log('连接关闭');\n};"},
              {"id": "b6", "type": "tip", "content": "WebSocket用于实时通信：聊天室、消息推送、股票行情\nHTTP是请求-响应模式，WS是双向主动推送"}
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "Java新版本特性",
        "lessons": [
          {
            "id": "l1",
            "title": "Lambda表达式(8+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Lambda是匿名函数的简写，让代码更简洁"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() {\n    // 传统写法：匿名内部类\n    Runnable r1 = new Runnable() {\n        @Override\n        public void run() {\n            IO.println(\"Hello\");\n        }\n    };\n    \n    // Lambda写法（Java 8+）\n    Runnable r2 = () -> IO.println(\"Hello\");\n    \n    // 带参数的Lambda\n    Comparator<String> comp = (a, b) -> a.length() - b.length();\n    \n    // 多行Lambda\n    Runnable r3 = () -> {\n        IO.println(\"第一行\");\n        IO.println(\"第二行\");\n    };\n}"},
              {"id": "b3", "type": "table", "headers": ["Lambda语法", "说明"], "rows": [["() -> 表达式", "无参数"], ["x -> 表达式", "单参数（可省括号）"], ["(x, y) -> 表达式", "多参数"], ["(x, y) -> { 语句 }", "多行语句"]]},
              {"id": "b4", "type": "tip", "content": "Lambda只能用于函数式接口（只有一个抽象方法的接口）\n常见：Runnable, Comparator, Consumer, Function"}
            ]
          },
          {
            "id": "l2",
            "title": "Stream流(8+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Stream是集合的流式处理，链式调用更优雅"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() {\n    var list = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);\n    \n    // 传统写法\n    List<Integer> result1 = new ArrayList<>();\n    for (int n : list) {\n        if (n % 2 == 0) {\n            result1.add(n * 2);\n        }\n    }\n    \n    // Stream写法（Java 8+）\n    var result = list.stream()\n        .filter(n -> n % 2 == 0)    // 过滤偶数\n        .map(n -> n * 2)            // 乘2\n        .toList();                  // 收集结果\n    \n    IO.println(result);  // [4, 8, 12, 16, 20]\n}"},
              {"id": "b3", "type": "table", "headers": ["常用方法", "作用"], "rows": [["filter()", "过滤元素"], ["map()", "转换元素"], ["sorted()", "排序"], ["limit(n)", "取前n个"], ["distinct()", "去重"], ["forEach()", "遍历"], ["collect()/toList()", "收集结果"], ["count()", "计数"], ["findFirst()", "取第一个"]]},
              {"id": "b4", "type": "code", "language": "java", "filename": "实战示例.java", "code": "// 找出价格>100的商品名称，按价格排序\nvar names = spuList.stream()\n    .filter(spu -> spu.price > 100)\n    .sorted((a, b) -> Double.compare(a.price, b.price))\n    .map(spu -> spu.name)\n    .toList();\n\n// 计算总价\ndouble total = orderList.stream()\n    .mapToDouble(o -> o.price)\n    .sum();"},
              {"id": "b5", "type": "tip", "content": "Stream是惰性求值，只有终端操作才会执行\n不修改原集合，返回新结果"}
            ]
          },
          {
            "id": "l3",
            "title": "Optional空值处理(8+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Optional用于处理可能为null的值，避免NullPointerException"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() {\n    // 传统写法：处处判断null\n    User user = findUser(1);\n    if (user != null) {\n        String name = user.name;\n        if (name != null) {\n            IO.println(name.toUpperCase());\n        }\n    }\n    \n    // Optional写法（Java 8+）\n    Optional.ofNullable(findUser(1))\n        .map(u -> u.name)\n        .map(String::toUpperCase)\n        .ifPresent(IO::println);\n    \n    // 常用方法\n    var opt = Optional.ofNullable(findUser(1));\n    opt.orElse(new User(\"默认\"));          // 空时返回默认值\n    opt.orElseThrow();                       // 空时抛异常\n    opt.ifPresent(u -> IO.println(u.name));  // 有值时执行\n}"},
              {"id": "b3", "type": "tip", "content": "Optional避免显式null检查\n不要滥用，简单场景直接判断null即可"}
            ]
          },
          {
            "id": "l4",
            "title": "新日期API(8+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Java 8引入了全新的日期时间API，替代Date和Calendar"},
              {"id": "b2", "type": "table", "headers": ["类", "说明"], "rows": [["LocalDate", "日期（2024-01-15）"], ["LocalTime", "时间（14:30:00）"], ["LocalDateTime", "日期+时间"], ["Instant", "时间戳"], ["Duration", "时间间隔"], ["DateTimeFormatter", "格式化"]]},
              {"id": "b3", "type": "code", "language": "java", "filename": "Main.java", "code": "import java.time.*;\nimport java.time.format.*;\n\nvoid main() {\n    // 获取当前日期/时间\n    var date = LocalDate.now();\n    var time = LocalTime.now();\n    var dateTime = LocalDateTime.now();\n    \n    IO.println(\"今天: \" + date);      // 2024-01-15\n    IO.println(\"现在: \" + time);      // 14:30:00\n    IO.println(\"完整: \" + dateTime);  // 2024-01-15T14:30:00\n    \n    // 日期计算\n    var tomorrow = date.plusDays(1);\n    var nextWeek = date.plusWeeks(1);\n    var lastMonth = date.minusMonths(1);\n    \n    // 格式化\n    var formatter = DateTimeFormatter.ofPattern(\"yyyy年MM月dd日 HH:mm\");\n    IO.println(dateTime.format(formatter));  // 2024年01月15日 14:30\n    \n    // 解析\n    var parsed = LocalDate.parse(\"2024-01-15\");\n}"},
              {"id": "b4", "type": "tip", "content": "新API不可变、线程安全\n旧的Date和Calendar已不推荐使用"}
            ]
          },
          {
            "id": "l5",
            "title": "集合工厂方法(9+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "一行代码创建不可变集合"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() {\n    // 传统写法\n    List<String> list1 = new ArrayList<>();\n    list1.add(\"张三\");\n    list1.add(\"李四\");\n    \n    // 工厂方法（Java 9+）\n    var list = List.of(\"张三\", \"李四\", \"王五\");\n    var set = Set.of(1, 2, 3);\n    var map = Map.of(\"a\", 1, \"b\", 2);\n    \n    IO.println(list);  // [张三, 李四, 王五]\n    IO.println(set);   // [1, 2, 3]\n    IO.println(map);   // {a=1, b=2}\n    \n    // 注意：List.of创建的是不可变集合\n    // list.add(\"赵六\");  // 运行时报错\n}"},
              {"id": "b3", "type": "tip", "content": "List.of/Set.of/Map.of创建不可变集合\n需要可变集合用new ArrayList<>(List.of(...))"}
            ]
          },
          {
            "id": "l6",
            "title": "var类型推断(10+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "var让编译器自动推断类型，减少冗余代码"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() {\n    // 传统写法\n    List<String> names1 = new ArrayList<String>();\n    Map<String, Integer> map1 = new HashMap<String, Integer>();\n    \n    // var写法（Java 10+）\n    var names = new ArrayList<String>();\n    var map = new HashMap<String, Integer>();\n    var count = 10;        // int\n    var price = 2.5;       // double\n    var name = \"张三\";    // String\n    \n    names.add(\"张三\");\n    IO.println(names);\n}"},
              {"id": "b3", "type": "tip", "content": "var只能用于局部变量，不能用于类属性\n必须有初始值，编译器才能推断类型"}
            ]
          },
          {
            "id": "l7",
            "title": "Switch表达式(14+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Switch可以作为表达式返回值，箭头语法更简洁"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() {\n    int day = 3;\n    \n    // 传统写法\n    String name1;\n    switch (day) {\n        case 1: name1 = \"周一\"; break;\n        case 2: name1 = \"周二\"; break;\n        default: name1 = \"其他\";\n    }\n    \n    // Switch表达式（Java 14+）\n    String name = switch (day) {\n        case 1 -> \"周一\";\n        case 2 -> \"周二\";\n        case 3, 4, 5 -> \"工作日\";  // 多值匹配\n        case 6, 7 -> \"周末\";\n        default -> \"未知\";\n    };\n    \n    IO.println(name);  // 工作日\n}"},
              {"id": "b3", "type": "tip", "content": "箭头语法不需要break，不会穿透\ncase可以匹配多个值"}
            ]
          },
          {
            "id": "l8",
            "title": "文本块(15+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "三引号定义多行字符串，写SQL、JSON、HTML更清晰"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() {\n    // 传统写法：拼接多行\n    String sql1 = \"SELECT * FROM users \" +\n                  \"WHERE status = 1 \" +\n                  \"ORDER BY created_at\";\n    \n    // 文本块写法（Java 15+）\n    String sql = \"\"\"\n        SELECT * FROM users\n        WHERE status = 1\n        ORDER BY created_at\n        \"\"\";\n    \n    String json = \"\"\"\n        {\n            \"name\": \"张三\",\n            \"age\": 18\n        }\n        \"\"\";\n    \n    IO.println(sql);\n    IO.println(json);\n}"},
              {"id": "b3", "type": "tip", "content": "文本块自动处理缩进，保持代码美观\n内部可以直接写双引号，无需转义"}
            ]
          },
          {
            "id": "l9",
            "title": "Record类(16+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Record是不可变数据类，自动生成构造器、getter、equals、hashCode、toString"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "// 传统写法：写一堆样板代码\npublic class User {\n    public String name;\n    public int age;\n    // 还要写构造器、getter、equals、toString...\n}\n\n// Record写法（Java 16+）\npublic record User(String name, int age) {}\n\nvoid main() {\n    var user = new User(\"张三\", 18);\n    IO.println(user.name());  // 张三\n    IO.println(user.age());   // 18\n    IO.println(user);         // User[name=张三, age=18]\n    \n    // Record是不可变的\n    // user.name = \"李四\";  // 编译报错\n}"},
              {"id": "b3", "type": "tip", "content": "Record适合定义DTO、请求/响应对象\n属性不可修改，保证线程安全"}
            ]
          },
          {
            "id": "l10",
            "title": "instanceof模式匹配(16+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "instanceof后直接声明变量，无需强转"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() {\n    Object obj = \"张三\";\n    \n    // 传统写法\n    if (obj instanceof String) {\n        String s = (String) obj;  // 需要强转\n        IO.println(s.length());\n    }\n    \n    // 模式匹配（Java 16+）\n    if (obj instanceof String s) {  // 直接声明变量\n        IO.println(s.length());\n    }\n    \n    // 配合取反\n    if (!(obj instanceof String s)) {\n        return;\n    }\n    // 这里s已可用\n    IO.println(s.toUpperCase());\n}"},
              {"id": "b3", "type": "tip", "content": "减少强转代码，更安全\n变量作用域在if块内"}
            ]
          },
          {
            "id": "l11",
            "title": "sealed密封类(17+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "sealed限制哪些类可以继承，结合Switch实现穷尽性检查"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "// 密封接口，只允许指定类实现\npublic sealed interface Shape permits Circle, Rectangle {}\n\npublic record Circle(double radius) implements Shape {}\npublic record Rectangle(double width, double height) implements Shape {}\n\nvoid main() {\n    Shape shape = new Circle(5.0);\n    \n    // 编译器知道只有这两种情况\n    double area = switch (shape) {\n        case Circle c -> Math.PI * c.radius() * c.radius();\n        case Rectangle r -> r.width() * r.height();\n        // 不需要default，已穷尽\n    };\n    \n    IO.println(\"面积：\" + area);\n}"},
              {"id": "b3", "type": "tip", "content": "sealed + record + switch模式匹配\n实现安全的代数数据类型"}
            ]
          },
          {
            "id": "l12",
            "title": "虚拟线程(21+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "虚拟线程是轻量级线程，可以创建数百万个，简化高并发开发"},
              {"id": "b2", "type": "table", "headers": ["对比项", "平台线程", "虚拟线程"], "rows": [["内存占用", "~1MB", "~几KB"], ["创建数量", "千级", "百万级"], ["调度开销", "高", "低"], ["适用场景", "CPU密集", "IO密集"]]},
              {"id": "b3", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() throws InterruptedException {\n    // 创建虚拟线程\n    Thread vt = Thread.startVirtualThread(() -> {\n        IO.println(\"虚拟线程执行\");\n    });\n    vt.join();\n    \n    // 虚拟线程池\n    try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {\n        for (int i = 0; i < 10000; i++) {\n            int taskId = i;\n            executor.submit(() -> {\n                // 每个任务一个虚拟线程\n                IO.println(\"任务\" + taskId);\n            });\n        }\n    }\n}"},
              {"id": "b4", "type": "tip", "content": "虚拟线程适合IO密集场景（数据库、HTTP请求）\n不适合CPU密集计算"}
            ]
          },
          {
            "id": "l13",
            "title": "switch模式匹配(21+)",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "switch支持类型匹配和Record解构"},
              {"id": "b2", "type": "code", "language": "java", "filename": "Main.java", "code": "public record Point(int x, int y) {}\n\nvoid main() {\n    Object obj = new Point(3, 4);\n    \n    // 类型匹配 + 解构\n    String result = switch (obj) {\n        case Integer i -> \"整数: \" + i;\n        case String s -> \"字符串长度: \" + s.length();\n        case Point(int x, int y) -> \"坐标: (\" + x + \", \" + y + \")\";  // 解构Record\n        case null -> \"空值\";\n        default -> \"其他类型\";\n    };\n    \n    IO.println(result);  // 坐标: (3, 4)\n}"},
              {"id": "b3", "type": "tip", "content": "case可以匹配类型、解构Record、处理null\n结合sealed类实现穷尽性检查"}
            ]
          },
          {
            "id": "l14",
            "title": "版本特性总览",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["版本", "主要特性"], "rows": [["Java 8", "Lambda, Stream, Optional, 新日期API"], ["Java 9", "List.of/Set.of/Map.of, 接口私有方法"], ["Java 10", "var类型推断"], ["Java 11", "HttpClient, String新方法(isBlank/lines/strip)"], ["Java 14", "Switch表达式"], ["Java 15", "文本块"], ["Java 16", "Record, instanceof模式匹配"], ["Java 17", "sealed密封类"], ["Java 21", "虚拟线程, switch模式匹配"]]},
              {"id": "b2", "type": "tip", "content": "LTS版本：Java 8, 11, 17, 21\n生产环境优先选择LTS版本"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-web-advanced",
    "pathId": "java",
    "title": "Java Web进阶",
    "desc": "深入Web开发核心技术",
    "icon": "🌐",
    "chapters": [
      {
        "id": "ch1",
        "title": "统一响应",
        "lessons": [
          {
            "id": "l1",
            "title": "统一响应封装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "所有接口返回统一格式：code + msg + data"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Result.java",
                "code": "public class Result<T> {\n    public int code;\n    public String msg;\n    public T data;\n    \n    public static <T> Result<T> ok(T data) {\n        Result<T> r = new Result<>();\n        r.code = 0;\n        r.msg = \"success\";\n        r.data = data;\n        return r;\n    }\n    \n    public static <T> Result<T> err(String msg) {\n        Result<T> r = new Result<>();\n        r.code = -1;\n        r.msg = msg;\n        return r;\n    }\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@GetMapping(\"/user/{id}\")\npublic Result<User> getUser(@PathVariable Integer id) {\n    User user = new User().selectById(id);\n    if (user == null) {\n        return Result.err(\"用户不存在\");\n    }\n    return Result.ok(user);\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "全局异常处理",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "统一捕获异常，返回友好错误信息"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "GlobalExceptionHandler.java",
                "code": "@RestControllerAdvice\npublic class GlobalExceptionHandler {\n    \n    @ExceptionHandler(BusinessException.class)\n    public Result<Void> handleBusiness(BusinessException e) {\n        return Result.err(e.getMessage());\n    }\n    \n    @ExceptionHandler(Exception.class)\n    public Result<Void> handleException(Exception e) {\n        return Result.err(\"系统异常，请稍后重试\");\n    }\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "参数校验",
        "lessons": [
          {
            "id": "l1",
            "title": "Validation校验",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "使用注解校验参数，避免手写if判断"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "CreateOrderReq.java",
                "code": "import jakarta.validation.constraints.*;\n\npublic class CreateOrderReq {\n    @NotBlank(message = \"商品名不能为空\")\n    public String spuName;\n    \n    @Min(value = 0, message = \"价格不能为负\")\n    public double spuPrice;\n    \n    @Min(value = 1, message = \"数量至少1\")\n    public int spuCount;\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/createOrder\")\npublic Result<Order> createOrder(@Valid @RequestBody CreateOrderReq req) {\n    // 校验不通过会自动报错\n    // ...业务代码\n}"
              },
              {
                "id": "b4",
                "type": "table",
                "headers": ["注解", "作用"],
                "rows": [
                  ["@NotNull", "不能为null"],
                  ["@NotBlank", "字符串不能为空"],
                  ["@Min/@Max", "数值范围"],
                  ["@Size", "集合/字符串长度"],
                  ["@Email", "邮箱格式"]
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "文件上传",
        "lessons": [
          {
            "id": "l1",
            "title": "文件上传接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "处理文件上传，保存到服务器"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@PostMapping(\"/upload\")\npublic Result<String> upload(@RequestParam MultipartFile file) throws IOException {\n    // 生成文件名\n    String fileName = System.currentTimeMillis() + \"_\" + file.getOriginalFilename();\n    \n    // 保存文件\n    Path path = Paths.get(\"uploads/\" + fileName);\n    Files.createDirectories(path.getParent());\n    file.transferTo(path);\n    \n    return Result.ok(\"/uploads/\" + fileName);\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 上传文件\nPOST http://localhost:8080/upload\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundary\n\n------WebKitFormBoundary\nContent-Disposition: form-data; name=\"file\"; filename=\"test.jpg\"\nContent-Type: image/jpeg\n\n< ./test.jpg\n------WebKitFormBoundary--"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "JWT鉴权",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "JWT原理",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "之前的接口任何人都可以调用，实际业务中必须登录后才能访问"},
              {"id": "b2", "type": "list", "items": ["用户输入用户名+密码", "服务器验证成功，颁发JWT令牌", "用户每次请求携带JWT令牌", "服务器验证令牌，确认用户身份"]},
              {"id": "b3", "type": "tip", "content": "JWT（JSON Web Token）相当于令牌/通行证\n有令牌 = 已登录，能访问接口\n无令牌 = 未登录，被拦截"}
            ]
          },
          {
            "id": "l2",
            "title": "JWT依赖",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<!-- JWT -->\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-api</artifactId>\n    <version>0.12.5</version>\n</dependency>\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-impl</artifactId>\n    <version>0.12.5</version>\n</dependency>\n<dependency>\n    <groupId>io.jsonwebtoken</groupId>\n    <artifactId>jjwt-jackson</artifactId>\n    <version>0.12.5</version>\n</dependency>"}
            ]
          },
          {
            "id": "l3",
            "title": "JWT工具类",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "编写JWT工具类，用于生成和验证令牌"},
              {"id": "b2", "type": "code", "language": "java", "filename": "JwtUtil.java", "code": "import io.jsonwebtoken.*;\nimport io.jsonwebtoken.security.Keys;\nimport javax.crypto.SecretKey;\nimport java.util.Date;\n\npublic class JwtUtil {\n    // 秘钥（生产环境应放配置文件）\n    static String SECRET = \"my-secret-key-1234567890-abcdefghijk\";\n    static SecretKey KEY = Keys.hmacShaKeyFor(SECRET.getBytes());\n    \n    // 生成JWT令牌\n    public static String createToken(Integer userId) {\n        return Jwts.builder()\n            .claim(\"userId\", userId)\n            .issuedAt(new Date())\n            .expiration(new Date(System.currentTimeMillis() + 7 * 24 * 3600 * 1000))  // 7天过期\n            .signWith(KEY)\n            .compact();\n    }\n    \n    // 验证JWT令牌，返回用户ID\n    public static Integer verifyToken(String token) {\n        try {\n            Claims claims = Jwts.parser()\n                .verifyWith(KEY)\n                .build()\n                .parseSignedClaims(token)\n                .getPayload();\n            return claims.get(\"userId\", Integer.class);\n        } catch (Exception e) {\n            return null;  // 令牌无效或过期\n        }\n    }\n}"},
              {"id": "b3", "type": "tip", "content": "createToken：登录成功后调用，生成令牌返回给前端\nverifyToken：每次请求时调用，验证令牌是否有效"}
            ]
          },
          {
            "id": "l4",
            "title": "JWT生成/验证测试",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "Main.java", "code": "void main() {\n    // 给用户ID=1生成令牌\n    String token = JwtUtil.createToken(1);\n    IO.println(\"\u751f\u6210\u7684\u4ee4\u724c: \" + token);\n    \n    // 验证令牌，拿到用户ID\n    Integer userId = JwtUtil.verifyToken(token);\n    IO.println(\"\u9a8c\u8bc1\u7ed3\u679c\uff0c\u7528\u6237ID: \" + userId);\n    \n    // 测试无效令牌\n    Integer result = JwtUtil.verifyToken(\"abc123\");\n    IO.println(\"\u65e0\u6548\u4ee4\u724c\u9a8c\u8bc1\u7ed3\u679c: \" + result);  // null\n}"},
              {"id": "b2", "type": "code", "language": "text", "filename": "运行结果", "code": "生成的令牌: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNzA...\n验证结果，用户ID: 1\n无效令牌验证结果: null"}
            ]
          },
          {
            "id": "l5",
            "title": "登录接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@PostMapping(\"/login\")\npublic Result<LoginResp> login(@RequestBody LoginReq req) {\n    // 查询用户\n    User user = new User().selectOne(\n        new QueryWrapper<User>().eq(\"username\", req.username)\n    );\n    \n    if (user == null) {\n        return Result.err(\"用户不存在\");\n    }\n    if (!user.password.equals(req.password)) {\n        return Result.err(\"密码错误\");\n    }\n    \n    // 颁发JWT令牌\n    LoginResp resp = new LoginResp();\n    resp.token = JwtUtil.createToken(user.id);\n    return Result.ok(resp);\n}"},
              {"id": "b2", "type": "code", "language": "http", "filename": "test.http", "code": "### 登录\nPOST http://localhost:8080/login\nContent-Type: application/json\n\n{\"username\": \"zhangsan\", \"password\": \"123456\"}"}
            ]
          },
          {
            "id": "l6",
            "title": "拦截器鉴权",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "拦截器统一验证所有请求的JWT令牌"},
              {"id": "b2", "type": "code", "language": "java", "filename": "WebConfig.java", "code": "@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    \n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(new HandlerInterceptor() {\n            @Override\n            public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {\n                String token = request.getHeader(\"token\");\n                if (token == null) {\n                    response.setContentType(\"application/json;charset=UTF-8\");\n                    response.getWriter().write(\"{\\\"code\\\": 401, \\\"msg\\\": \\\"未登录\\\"}\");\n                    return false;\n                }\n                \n                Integer userId = JwtUtil.verifyToken(token);\n                if (userId == null) {\n                    response.setContentType(\"application/json;charset=UTF-8\");\n                    response.getWriter().write(\"{\\\"code\\\": 401, \\\"msg\\\": \\\"token无效\\\"}\");\n                    return false;\n                }\n                \n                request.setAttribute(\"userId\", userId);\n                return true;\n            }\n        })\n        .addPathPatterns(\"/**\")\n        .excludePathPatterns(\"/login\");\n    }\n}"},
              {"id": "b3", "type": "code", "language": "http", "filename": "test.http", "code": "### 下单（header携带token）\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\ntoken: eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIi...\n\n{\"spuName\": \"牛奶\", \"spuPrice\": 2.5, \"spuCount\": 3}"},
              {"id": "b4", "type": "tip", "content": "不携带token或token无效 → 401未登录\n携带有效token → 正常访问接口\n\n更标准的写法是 Authorization: Bearer <token>"}
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "RBAC权限",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "RBAC概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "JWT解决了'你是谁'，RBAC解决'你能干什么'"},
              {"id": "b2", "type": "text", "content": "RBAC = Role-Based Access Control，基于角色的访问控制"},
              {"id": "b3", "type": "list", "items": ["用户拥有角色（如：admin、user）", "角色拥有权限（如：user:add、order:delete）", "查询用户角色 → 查询角色权限 → 判断是否有接口权限"]},
              {"id": "b4", "type": "tip", "content": "用户 → 角色 → 权限\n一个用户可以有多个角色，一个角色可以有多个权限"}
            ]
          },
          {
            "id": "l2",
            "title": "5表设计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["表名", "说明"], "rows": [["users", "用户表"], ["roles", "角色表"], ["permissions", "权限表"], ["user_role", "用户-角色关联表"], ["role_permission", "角色-权限关联表"]]},
              {"id": "b2", "type": "code", "language": "sql", "filename": "init.sql", "code": "-- 角色表\ncreate table roles (\n    id integer primary key autoincrement,\n    name text  -- admin, user, vip\n);\n\n-- 权限表\ncreate table permissions (\n    id integer primary key autoincrement,\n    code text  -- user:add, order:delete\n);\n\n-- 用户-角色关联\ncreate table user_role (\n    user_id integer,\n    role_id integer\n);\n\n-- 角色-权限关联\ncreate table role_permission (\n    role_id integer,\n    permission_id integer\n);"}
            ]
          },
          {
            "id": "l3",
            "title": "权限查询",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "根据用户ID查询所有权限（多表关联）"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "query.sql", "code": "-- 查询用户的所有权限\nSELECT DISTINCT p.code\nFROM user_role ur\nJOIN role_permission rp ON ur.role_id = rp.role_id\nJOIN permissions p ON rp.permission_id = p.id\nWHERE ur.user_id = 1;"},
              {"id": "b3", "type": "code", "language": "java", "filename": "PermissionUtil.java", "code": "public class PermissionUtil {\n    \n    // 查询用户的所有权限\n    public static List<String> getPermissions(Integer userId) {\n        // 执行上面的SQL查询\n        return permissionList;\n    }\n    \n    // 判断是否有权限\n    public static boolean hasPermission(Integer userId, String permCode) {\n        List<String> perms = getPermissions(userId);\n        return perms.contains(permCode);\n    }\n}"}
            ]
          },
          {
            "id": "l4",
            "title": "权限注解",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "自定义注解标记接口需要的权限"},
              {"id": "b2", "type": "code", "language": "java", "filename": "RequirePermission.java", "code": "import java.lang.annotation.*;\n\n@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.RUNTIME)\npublic @interface RequirePermission {\n    String value();  // 权限码，如 \"order:delete\"\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "// 删除订单需要 order:delete 权限\n@RequirePermission(\"order:delete\")\n@DeleteMapping(\"/order/{id}\")\npublic Result<String> deleteOrder(@PathVariable Integer id) {\n    new Order().deleteById(id);\n    return Result.ok(\"删除成功\");\n}\n\n// 用户管理需要 user:add 权限\n@RequirePermission(\"user:add\")\n@PostMapping(\"/user\")\npublic Result<User> addUser(@RequestBody User user) {\n    user.insert();\n    return Result.ok(user);\n}"}
            ]
          },
          {
            "id": "l5",
            "title": "权限拦截器",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "拦截器检查用户是否有接口所需权限"},
              {"id": "b2", "type": "code", "language": "java", "filename": "PermissionInterceptor.java", "code": "@Component\npublic class PermissionInterceptor implements HandlerInterceptor {\n    \n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {\n        // 1. 获取当前用户ID（从request中取，JWT拦截器已设置）\n        Integer userId = (Integer) request.getAttribute(\"userId\");\n        \n        // 2. 获取接口上的权限注解\n        HandlerMethod method = (HandlerMethod) handler;\n        RequirePermission anno = method.getMethodAnnotation(RequirePermission.class);\n        if (anno == null) {\n            return true;  // 无权限注解，直接放行\n        }\n        \n        // 3. 查询用户权限，判断是否包含所需权限\n        String needPerm = anno.value();\n        if (!PermissionUtil.hasPermission(userId, needPerm)) {\n            response.setContentType(\"application/json;charset=UTF-8\");\n            response.getWriter().write(\"{\\\"code\\\": 403, \\\"msg\\\": \\\"无权限\\\"}\");\n            return false;\n        }\n        \n        return true;\n    }\n}"},
              {"id": "b3", "type": "tip", "content": "每次请求都查询权限，权限变更实时生效\n生产环境可用Redis缓存权限，提升性能"}
            ]
          }
        ]
      },





      {
        "id": "ch6",
        "title": "集群基础",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "Nginx负载均衡",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "多个相同的服务实例组成集群，Nginx将请求分发到不同实例"},
              {"id": "b2", "type": "code", "language": "nginx", "filename": "nginx.conf", "code": "upstream backend {\n    server 192.168.1.10:8080;\n    server 192.168.1.11:8080;\n    server 192.168.1.12:8080;\n}\n\nserver {\n    listen 80;\n    location / {\n        proxy_pass http://backend;\n    }\n}"},
              {"id": "b3", "type": "table", "headers": ["策略", "说明"], "rows": [["轮询(round-robin)", "默认，按顺序分配"], ["weight", "按权重分配，性能好的服务器权重高"], ["ip_hash", "相同IP始终访问同一服务器"], ["least_conn", "分配给连接数最少的服务器"]]}
            ]
          },
          {
            "id": "l2",
            "title": "集群Session共享",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "集群环境下Session需要共享，否则用户登录状态丢失"},
              {"id": "b2", "type": "table", "headers": ["方案", "说明"], "rows": [["Redis存储Session", "Spring Session + Redis，推荐"], ["ip_hash", "固定用户访问同一服务器"], ["Token无状态", "JWT方案，不依赖Session"]]},
              {"id": "b3", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>org.springframework.session</groupId>\n    <artifactId>spring-session-data-redis</artifactId>\n</dependency>"}
            ]
          },
          {
            "id": "l3",
            "title": "应用无状态化",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "无状态应用可以随意扩缩容，状态存储在外部"},
              {"id": "b2", "type": "table", "headers": ["状态类型", "外部化方案"], "rows": [["Session", "Redis"], ["文件", "对象存储(OSS/MinIO)"], ["定时任务", "分布式调度(XXL-Job)"], ["缓存", "Redis集中缓存"]]}
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "分布式基础",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "服务间调用",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "分布式系统中，服务A需要调用服务B，用RestTemplate发HTTP请求"},
              {"id": "b2", "type": "code", "language": "java", "filename": "OrderService.java", "code": "// 订单服务调用用户服务\nRestTemplate rest = new RestTemplate();\n\n// 问题：IP地址写死了！\nUser user = rest.getForObject(\n    \"http://192.168.1.10:8081/user/1\",\n    User.class\n);\n\n// 如果用户服务换IP或扩容，这里就完了"},
              {"id": "b3", "type": "tip", "content": "痛点：IP写死、服务挂了不知道、扩容后无法负载均衡\n→ 微服务的注册中心就是解决这个问题"}
            ]
          },
          {
            "id": "l2",
            "title": "分布式ID",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "分布式环境无法用数据库自增作ID，需要全局唯一ID"},
              {"id": "b2", "type": "table", "headers": ["方案", "特点"], "rows": [["UUID", "简单，但无序、较长"], ["Snowflake雪花", "有序、高性能，推荐"], ["Redis自增", "简单，有Redis依赖"]]},
              {"id": "b3", "type": "code", "language": "java", "filename": "Snowflake.java", "code": "// MyBatis-Plus内置雪花\n@TableId(type = IdType.ASSIGN_ID)\npublic Long id;"}
            ]
          },
          {
            "id": "l3",
            "title": "分布式锁",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "多实例操作同一资源需要分布式锁保证互斥\n单机sychronized失效，需要用Redis实现分布式锁"},
              {"id": "b2", "type": "text", "content": "方式1：SETNX手写实现"},
              {"id": "b3", "type": "code", "language": "java", "filename": "SetnxLock.java", "code": "@Autowired\nStringRedisTemplate redis;\n\npublic void doWithLock(String lockKey) {\n    // 1. 尝试加锁（SETNX = SET if Not eXists）\n    Boolean locked = redis.opsForValue()\n        .setIfAbsent(lockKey, \"1\", 30, TimeUnit.SECONDS);\n    \n    if (!locked) {\n        throw new RuntimeException(\"获取锁失败\");\n    }\n    \n    try {\n        // 2. 执行业务代码...\n    } finally {\n        // 3. 释放锁\n        redis.delete(lockKey);\n    }\n}"},
              {"id": "b4", "type": "tip", "content": "SETNX原理：key不存在才设置，存在则返回false\n设置过期时间防止审机后锁永不释放"},
              {"id": "b5", "type": "text", "content": "方式2：Redisson框架实现（推荐）"},
              {"id": "b6", "type": "code", "language": "java", "filename": "RedissonLock.java", "code": "@Autowired\nRedissonClient redisson;\n\npublic void doWithLock(String lockKey) {\n    RLock lock = redisson.getLock(lockKey);\n    try {\n        lock.lock();  // 加锁\n        // 执行业务代码...\n    } finally {\n        lock.unlock();  // 释放锁\n    }\n}"},
              {"id": "b7", "type": "table", "headers": ["", "SETNX手写", "Redisson"], "rows": [["实现难度", "简单", "更简单"], ["重入锁", "不支持", "支持"], ["自动续期", "不支持", "支持（看门狗）"], ["生产推荐", "不推荐", "推荐"]]},
              {"id": "b8", "type": "tip", "content": "Redisson内置看门狗机制，自动续期防止锁提前过期\n生产环境用Redisson，手写用于理解原理"}
            ]
          },
          {
            "id": "l4",
            "title": "分布式事务",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "跨服务操作需要分布式事务保证数据一致性"},
              {"id": "b2", "type": "table", "headers": ["方案", "说明"], "rows": [["Seata AT", "无侵入，自动回滚"], ["TCC", "手动实现Try/Confirm/Cancel"], ["本地消息表", "最终一致性，通过MQ"], ["Saga", "长事务，补偿机制"]]}
            ]
          },
          {
            "id": "l5",
            "title": "CAP与BASE",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["CAP", "说明"], "rows": [["C (一致性)", "所有节点数据一致"], ["A (可用性)", "服务始终可用"], ["P (分区容错)", "网络分区时系统继续运行"]]},
              {"id": "b2", "type": "text", "content": "CAP三选二，分布式系统通常选择AP+最终一致性(BASE)"}
            ]
          }
        ]
      },
      {
        "id": "ch8",
        "title": "微服务基础",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "注册中心Nacos",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "解决分布式IP写死的痛点！服务启动时自动注册到Nacos，调用方从注册中心获取服务地址"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "xml",
                "filename": "pom.xml",
                "code": "<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n</dependency>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "yaml",
                "filename": "application.yml",
                "code": "spring:\n  application:\n    name: order-service\n  cloud:\n    nacos:\n      discovery:\n        server-addr: localhost:8848"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "启动后访问http://localhost:8848/nacos\n可以看到注册的服务列表"
              }
            ]
          },
          {
            "id": "l2",
            "title": "远程调用OpenFeign",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "OpenFeign让调用其他服务像调用本地方法一样简单"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "xml",
                "filename": "pom.xml",
                "code": "<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-openfeign</artifactId>\n</dependency>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "UserClient.java",
                "code": "// 定义远程调用接口\n@FeignClient(name = \"user-service\")\npublic interface UserClient {\n    \n    @GetMapping(\"/user/{id}\")\n    User getUser(@PathVariable Integer id);\n}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@Autowired\nUserClient userClient;\n\n@GetMapping(\"/order/{id}\")\npublic Result<OrderVO> getOrder(@PathVariable Integer id) {\n    Order order = new Order().selectById(id);\n    \n    // 调用用户服务获取用户信息\n    User user = userClient.getUser(order.userId);\n    \n    OrderVO vo = new OrderVO();\n    vo.order = order;\n    vo.user = user;\n    return Result.ok(vo);\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "网关Gateway",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "网关是微服务的统一入口，处理路由、鉴权、限流"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "xml",
                "filename": "pom.xml",
                "code": "<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-gateway</artifactId>\n</dependency>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "yaml",
                "filename": "application.yml",
                "code": "spring:\n  cloud:\n    gateway:\n      routes:\n        - id: order-service\n          uri: lb://order-service\n          predicates:\n            - Path=/order/**\n        - id: user-service\n          uri: lb://user-service\n          predicates:\n            - Path=/user/**"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "访问网关的/order/**会转发到order-service\n访问/user/**会转发到user-service"
              }
            ]
          }
        ]
      },
      {
        "id": "ch9",
        "title": "K8s与服务网格",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "K8s概念简介",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Kubernetes是容器编排平台，自动化部署、扩缩容、服务发现"},
              {"id": "b2", "type": "table", "headers": ["核心概念", "说明"], "rows": [["Pod", "最小部署单元，包含一个或多个容器"], ["Deployment", "管理Pod副本数和滚动更新"], ["Service", "服务发现与负载均衡，给Pod分配稳定IP"], ["Ingress", "外部访问入口，域名路由"], ["ConfigMap/Secret", "配置与密钥管理"], ["HPA", "水平自动扩缩容"]]}
            ]
          },
          {
            "id": "l2",
            "title": "K3s安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "K3s是轻量级K8s，单机即可运行，适合学习和开发环境"},
              {"id": "b2", "type": "code", "language": "bash", "code": "# 一键安装K3s\ncurl -sfL https://get.k3s.io | sh -\n\n# 查看节点\nkubectl get nodes\n\n# 查看所有Pod\nkubectl get pods -A"},
              {"id": "b3", "type": "tip", "content": "K3s内置了Traefik作Ingress控制器\n生产环境用完整版K8s或云厂商K8s"}
            ]
          },
          {
            "id": "l3",
            "title": "制作Docker镜像",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "K8s部署的是容器镜像，先把Java应用打包成镜像"},
              {"id": "b2", "type": "code", "language": "dockerfile", "filename": "Dockerfile", "code": "FROM eclipse-temurin:21-jre\nWORKDIR /app\nCOPY target/order-service.jar app.jar\nEXPOSE 8080\nENTRYPOINT [\"java\", \"-jar\", \"app.jar\"]"},
              {"id": "b3", "type": "code", "language": "bash", "code": "# 构建镜像\ndocker build -t order-service:1.0 .\n\n# 本地测试\ndocker run -p 8080:8080 order-service:1.0\n\n# 推送到镜像仓库\ndocker push registry.example.com/order-service:1.0"}
            ]
          },
          {
            "id": "l4",
            "title": "启动Pod",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用Deployment创建Pod，管理副本数和滚动更新"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "deployment.yaml", "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: order-service\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: order-service\n  template:\n    metadata:\n      labels:\n        app: order-service\n    spec:\n      containers:\n      - name: order-service\n        image: order-service:1.0\n        ports:\n        - containerPort: 8080\n        resources:\n          requests:\n            memory: \"256Mi\"\n          limits:\n            memory: \"512Mi\""},
              {"id": "b3", "type": "code", "language": "bash", "code": "# 应用部署\nkubectl apply -f deployment.yaml\n\n# 查看Pod状态\nkubectl get pods\n\n# 查看Pod日志\nkubectl logs -f <pod-name>"}
            ]
          },
          {
            "id": "l5",
            "title": "K8s Service",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Pod IP会变，Service提供稳定的访问入口和负载均衡"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "service.yaml", "code": "apiVersion: v1\nkind: Service\nmetadata:\n  name: order-service\nspec:\n  selector:\n    app: order-service\n  ports:\n  - port: 80\n    targetPort: 8080\n  type: ClusterIP"},
              {"id": "b3", "type": "tip", "content": "ClusterIP: 集群内部访问\nNodePort: 节点端口暴露\nLoadBalancer: 云厂商负载均衡器"}
            ]
          },
          {
            "id": "l6",
            "title": "Ingress网关",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Ingress是集群统一入口，域名路由到不同Service"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "ingress.yaml", "code": "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: api-ingress\nspec:\n  rules:\n  - host: api.example.com\n    http:\n      paths:\n      - path: /order\n        pathType: Prefix\n        backend:\n          service:\n            name: order-service\n            port:\n              number: 80\n      - path: /user\n        pathType: Prefix\n        backend:\n          service:\n            name: user-service\n            port:\n              number: 80"},
              {"id": "b3", "type": "tip", "content": "访问api.example.com/order → order-service\n访问api.example.com/user → user-service"}
            ]
          },
          {
            "id": "l7",
            "title": "HPA自动扩缩容",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "HPA根据CPU/内存自动调整Pod数量，应对流量高峰"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "hpa.yaml", "code": "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: order-service-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: order-service\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n  - type: Resource\n    resource:\n      name: cpu\n      target:\n        type: Utilization\n        averageUtilization: 70"},
              {"id": "b3", "type": "tip", "content": "CPU超过70%自动扩容，低于70%自动缩容\n最少2个Pod，最多10个Pod"}
            ]
          },
          {
            "id": "l8",
            "title": "Istio服务网格",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Istio是服务网格，不修改代码实现流量管理、安全、可观测性"},
              {"id": "b2", "type": "table", "headers": ["功能", "说明"], "rows": [["灰度发布", "新版本先分流10%流量，逐步增加"], ["熔断降级", "服务异常时自动熔断"], ["链路追踪", "分布式调用可视化"], ["mTLS", "服务间自动加密"]]}
            ]
          },
          {
            "id": "l9",
            "title": "Istio灰度发布",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "灰度发布：新版本先分流10%流量，观察无问题后逐步增加"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "virtual-service.yaml", "code": "apiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: order-service\nspec:\n  hosts:\n  - order-service\n  http:\n  - route:\n    - destination:\n        host: order-service\n        subset: v1\n      weight: 90\n    - destination:\n        host: order-service\n        subset: v2\n      weight: 10"}
            ]
          }
        ]
      },
      {
        "id": "ch10",
        "title": "Knative无服务",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "Serverless概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Serverless无需管理服务器，按请求计费，自动扩缩容"},
              {"id": "b2", "type": "table", "headers": ["特点", "说明"], "rows": [["缩容到05", "无请求时实例数为0，不产生费用"], ["弹性扩展", "根据请求量自动扩容"], ["事件驱动", "HTTP、定时任务、MQ等触发"]]}
            ]
          },
          {
            "id": "l2",
            "title": "Knative Serving",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Knative是基于K8s的Serverless平台，Serving管理无状态服务"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "service.yaml", "code": "apiVersion: serving.knative.dev/v1\nkind: Service\nmetadata:\n  name: order-service\nspec:\n  template:\n    spec:\n      containers:\n      - image: order-service:1.0\n        ports:\n        - containerPort: 8080\n        resources:\n          limits:\n            memory: 512Mi"},
              {"id": "b3", "type": "tip", "content": "Knative自动处理负载均衡、扩缩容、版本管理"}
            ]
          },
          {
            "id": "l3",
            "title": "Knative Eventing",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Eventing处理事件驱动，连接事件源和服务"},
              {"id": "b2", "type": "table", "headers": ["组件", "说明"], "rows": [["Source", "事件源，如Kafka、GitHub、定时器"], ["Broker", "事件中心，接收和分发事件"], ["Trigger", "订阅规则，将事件路由到服务"]]}
            ]
          },
          {
            "id": "l4",
            "title": "云厂商Serverless",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["云厂商", "产品"], "rows": [["阿里云", "FC函数计算 / SAE应用引擎"], ["腾讯云", "SCF云函数"], ["AWS", "Lambda"], ["Google", "Cloud Functions / Cloud Run"]]},
              {"id": "b2", "type": "tip", "content": "Knative可以私有化部署，避免云厂商锁定"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-database-advanced",
    "pathId": "java",
    "title": "Java数据库进阶",
    "desc": "深入数据库操作与优化",
    "icon": "🗄️",
    "chapters": [
      {
        "id": "ch1",
        "title": "复杂查询",
        "lessons": [
          {
            "id": "l1",
            "title": "多表关联查询",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "使用JOIN查询多表关联数据"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "sql",
                "filename": "query.sql",
                "code": "-- 查询订单和用户信息\nSELECT o.*, u.username\nFROM orders o\nLEFT JOIN users u ON o.user_id = u.id\nWHERE o.status = 1;"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "OrderMapper.java",
                "code": "@Select(\"SELECT o.*, u.username FROM orders o LEFT JOIN users u ON o.user_id = u.id WHERE o.status = #{status}\")\nList<OrderVO> selectWithUser(@Param(\"status\") Integer status);"
              }
            ]
          },
          {
            "id": "l2",
            "title": "动态SQL",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "根据条件动态拼接SQL"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "Main.java示例",
                "code": "void main() {\n    QueryWrapper<Order> query = new QueryWrapper<>();\n    \n    // 动态条件\n    String spuName = \"牛奶\";\n    Integer status = 1;\n    \n    if (spuName != null) {\n        query.like(\"spu_name\", spuName);\n    }\n    if (status != null) {\n        query.eq(\"status\", status);\n    }\n    \n    List<Order> orders = new Order().selectList(query);\n    IO.println(\"查询结果：\" + orders.size());\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "事务管理",
        "lessons": [
          {
            "id": "l1",
            "title": "事务基础",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "事务保证多个操作要么全成功，要么全失败"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@Transactional\n@PostMapping(\"/transfer\")\npublic Result<String> transfer(@RequestBody TransferReq req) {\n    // 扣除转出方余额\n    Account from = new Account().selectById(req.fromId);\n    from.balance = from.balance - req.amount;\n    from.updateById();\n    \n    // 如果这里出错，上面的操作会回滚\n    if (req.amount > 10000) {\n        throw new BusinessException(\"单笔转账不能超过1万\");\n    }\n    \n    // 增加转入方余额\n    Account to = new Account().selectById(req.toId);\n    to.balance = to.balance + req.amount;\n    to.updateById();\n    \n    return Result.ok(\"转账成功\");\n}"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "@Transactional注解加在方法上\n方法内任何异常都会触发回滚"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "分页查询",
        "lessons": [
          {
            "id": "l1",
            "title": "MyBatis-Plus分页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "配置分页插件，实现自动分页"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "MybatisPlusConfig.java",
                "code": "@Configuration\npublic class MybatisPlusConfig {\n    @Bean\n    public MybatisPlusInterceptor mybatisPlusInterceptor() {\n        MybatisPlusInterceptor interceptor = new MybatisPlusInterceptor();\n        interceptor.addInnerInterceptor(new PaginationInnerInterceptor());\n        return interceptor;\n    }\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@GetMapping(\"/orders\")\npublic Result<Page<Order>> listOrders(\n    @RequestParam(defaultValue = \"1\") Integer pageNum,\n    @RequestParam(defaultValue = \"10\") Integer pageSize\n) {\n    Page<Order> page = new Page<>(pageNum, pageSize);\n    Page<Order> result = new Order().selectPage(page, null);\n    return Result.ok(result);\n}"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\n  \"code\": 0,\n  \"data\": {\n    \"records\": [...],\n    \"total\": 100,\n    \"size\": 10,\n    \"current\": 1,\n    \"pages\": 10\n  }\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "索引优化",
        "lessons": [
          {
            "id": "l1",
            "title": "创建索引",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "索引加速查询，常用于WHERE、ORDER BY的字段"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "sql",
                "filename": "index.sql",
                "code": "-- 单列索引\nCREATE INDEX idx_user_id ON orders(user_id);\n\n-- 复合索引\nCREATE INDEX idx_status_created ON orders(status, created_at);\n\n-- 查看执行计划\nEXPLAIN SELECT * FROM orders WHERE user_id = 1;"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "索引设计原则：\n• 高频查询字段加索引\n• 复合索引遵循最左前缀原则\n• 不要过度索引，影响写入性能"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "Redis缓存",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "Redis安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Redis是内存数据库，用于缓存热点数据，加速访问"},
              {"id": "b2", "type": "code", "language": "bash", "code": "# Ubuntu/Debian安装\nsudo apt update\nsudo apt install redis-server\n\n# 启动Redis\nsudo systemctl start redis\nsudo systemctl enable redis\n\n# 连接测试\nredis-cli ping\n# 返回 PONG 表示成功"},
              {"id": "b3", "type": "tip", "content": "Docker方式：docker run -d -p 6379:6379 redis"}
            ]
          },
          {
            "id": "l2",
            "title": "5种数据类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["类型", "说明", "常用场景"], "rows": [["String", "字符串，最常用", "缓存、计数器、分布式锁"], ["List", "列表，有序", "消息队列、最新列表"], ["Hash", "哈希表", "存储对象，如用户信息"], ["Set", "集合，无序不重复", "标签、共同关注"], ["ZSet", "有序集合，带分数", "排行榜、延迟队列"]]},
              {"id": "b2", "type": "code", "language": "bash", "filename": "redis-cli", "code": "# String\nSET name \"张三\"\nGET name\nINCR counter\n\n# List\nLPUSH queue \"msg1\" \"msg2\"\nRPOP queue\n\n# Hash\nHSET user:1 name \"张三\" age 25\nHGET user:1 name\nHGETALL user:1\n\n# Set\nSADD tags \"java\" \"redis\"\nSMEMBERS tags\n\n# ZSet\nZADD rank 100 \"张三\" 90 \"李四\"\nZRANGE rank 0 -1 WITHSCORES"}
            ]
          },
          {
            "id": "l3",
            "title": "SpringBoot集成",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n</dependency>"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "application.yml", "code": "spring:\n  redis:\n    host: localhost\n    port: 6379"},
              {"id": "b3", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@Autowired\nStringRedisTemplate redis;\n\n@GetMapping(\"/spu/{id}\")\npublic Result<Spu> getSpu(@PathVariable Integer id) {\n    String key = \"spu:\" + id;\n    \n    // 1. 先查缓存\n    String json = redis.opsForValue().get(key);\n    if (json != null) {\n        return Result.ok(JSON.parseObject(json, Spu.class));\n    }\n    \n    // 2. 缓存没有，查数据库\n    Spu spu = new Spu().selectById(id);\n    if (spu != null) {\n        // 3. 写入缓存，10分钟过期\n        redis.opsForValue().set(key, JSON.toJSONString(spu), 10, TimeUnit.MINUTES);\n    }\n    return Result.ok(spu);\n}"}
            ]
          },
          {
            "id": "l4",
            "title": "分布式锁",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Redis实现分布式锁，SETNX保证原子性"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "redis-cli", "code": "# 加锁：SETNX + 过期时间\nSET lock:order:123 \"1\" NX EX 30\n\n# 解锁\nDEL lock:order:123"},
              {"id": "b3", "type": "code", "language": "java", "filename": "RedisLock.java", "code": "// Redisson分布式锁（推荐）\nRLock lock = redisson.getLock(\"order:\" + orderId);\ntry {\n    lock.lock();\n    // 业务代码...\n} finally {\n    lock.unlock();\n}"},
              {"id": "b4", "type": "tip", "content": "Redisson内置看门狗机制，自动续期防止锁提前过期"}
            ]
          },
          {
            "id": "l5",
            "title": "List消息队列",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "List实现简单消息队列，LPUSH生产，RPOP/BRPOP消费"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "redis-cli", "code": "# 生产者：从左边推入\nLPUSH order-queue \"order:1001\"\nLPUSH order-queue \"order:1002\"\n\n# 消费者：从右边弹出\nRPOP order-queue\n\n# 阻塞式消费（推荐）\nBRPOP order-queue 0"},
              {"id": "b3", "type": "code", "language": "java", "filename": "RedisQueue.java", "code": "// 生产消息\nredis.opsForList().leftPush(\"order-queue\", orderId.toString());\n\n// 消费消息（阻塞）\nString orderId = redis.opsForList().rightPop(\"order-queue\", 0, TimeUnit.SECONDS);"},
              {"id": "b4", "type": "tip", "content": "简单场景用Redis List，复杂场景用RabbitMQ/Kafka"}
            ]
          },
          {
            "id": "l6",
            "title": "缓存穿透/击穿/雪崩",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["问题", "原因", "解决方案"], "rows": [["缓存穿透", "查询不存在的数据，绕过缓存直击DB", "缓存空值 / 布隆过滤器"], ["缓存击穿", "热点key过期，大量请求同时打到DB", "互斥锁 / 永不过期+后台刷新"], ["缓存雪崩", "大量key同时过期", "过期时间加随机值"]]},
              {"id": "b2", "type": "code", "language": "java", "filename": "缓存穿透解决.java", "code": "// 缓存空值解决穿透\nSpu spu = new Spu().selectById(id);\nif (spu == null) {\n    // 数据库也没有，缓存空值5分钟\n    redis.opsForValue().set(key, \"\", 5, TimeUnit.MINUTES);\n    return Result.err(\"商品不存在\");\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "缓存雪崩解决.java", "code": "// 过期时间加随机值\nint expire = 600 + new Random().nextInt(300); // 10-15分钟\nredis.opsForValue().set(key, json, expire, TimeUnit.SECONDS);"}
            ]
          },
          {
            "id": "l7",
            "title": "AOF与RDB持久化",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["方式", "原理", "优缺点"], "rows": [["RDB", "定时快照，保存某时刻数据", "恢复快，但可能丢失数据"], ["AOF", "记录每次写操作日志", "数据安全，但文件大、恢复慢"]]},
              {"id": "b2", "type": "code", "language": "bash", "filename": "redis.conf", "code": "# RDB配置：900秒内有1次写入则保存\nsave 900 1\nsave 300 10\nsave 60 10000\n\n# AOF配置\nappendonly yes\nappendfsync everysec"},
              {"id": "b3", "type": "tip", "content": "生产环境建议同时开启RDB+AOF\n重启时优先用AOF恢复"}
            ]
          },
          {
            "id": "l8",
            "title": "LRU淘汰策略",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "内存不足时，Redis淘汰老旧数据"},
              {"id": "b2", "type": "table", "headers": ["策略", "说明"], "rows": [["noeviction", "不淘汰，内存满报错"], ["allkeys-lru", "所有key中淘汰最久未用（推荐）"], ["volatile-lru", "有过期时间的key中淘汰最久未用"], ["allkeys-random", "随机淘汰"], ["volatile-ttl", "淘汰即将过期的key"]]},
              {"id": "b3", "type": "code", "language": "bash", "filename": "redis.conf", "code": "# 设置最大内存\nmaxmemory 2gb\n\n# 设置淘汰策略\nmaxmemory-policy allkeys-lru"},
              {"id": "b4", "type": "tip", "content": "LRU = Least Recently Used，最近最少使用\nRedis用近似LRU算法，随机采样淘汰"}
            ]
          },
          {
            "id": "l9",
            "title": "IO多路复用",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Redis单线程为什么这么快？内存操作 + IO多路复用"},
              {"id": "b2", "type": "table", "headers": ["概念", "说明"], "rows": [["单线程", "避免线程切换、无锁竞争"], ["多路复用", "一个线程监听多个连接，不阻塞等待"], ["epoll", "Linux下的多路复用实现"]]},
              {"id": "b3", "type": "tip", "content": "Redis 6.0开始支持多线程处理网络IO\n但命令执行仍然是单线程"}
            ]
          },
          {
            "id": "l10",
            "title": "Redis集群",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["模式", "说明"], "rows": [["主从复制", "主节点写，从节点读，读写分离"], ["哨兵模式", "监控主节点，自动故障转移"], ["Cluster集群", "数据分片+高可用，生产推荐"]]},
              {"id": "b2", "type": "code", "language": "bash", "code": "# 创建集群(3主3从)\nredis-cli --cluster create \\\n    192.168.1.1:6379 192.168.1.2:6379 192.168.1.3:6379 \\\n    192.168.1.4:6379 192.168.1.5:6379 192.168.1.6:6379 \\\n    --cluster-replicas 1\n\n# 查看集群状态\nredis-cli cluster info"},
              {"id": "b3", "type": "tip", "content": "Cluster使用16384个槽分片数据\n客户端自动路由到正确节点"}
            ]
          },
          {
            "id": "l11",
            "title": "Redis作注册中心",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Redis可以作简单注册中心，服务启动时注册到Redis"},
              {"id": "b2", "type": "code", "language": "java", "filename": "服务注册.java", "code": "// 服务启动时注册\n@PostConstruct\npublic void register() {\n    String key = \"service:order-service\";\n    String value = \"192.168.1.10:8080\";\n    // 注册服务，30秒过期\n    redis.opsForValue().set(key, value, 30, TimeUnit.SECONDS);\n}\n\n// 定时续期（15秒一次）\n@Scheduled(fixedRate = 15000)\npublic void heartbeat() {\n    redis.expire(\"service:order-service\", 30, TimeUnit.SECONDS);\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "服务发现.java", "code": "// 发现服务\npublic String getServiceUrl(String serviceName) {\n    return redis.opsForValue().get(\"service:\" + serviceName);\n}\n\n// 调用服务\nString url = getServiceUrl(\"order-service\");\nUser user = rest.getForObject(\"http://\" + url + \"/user/1\", User.class);"},
              {"id": "b4", "type": "tip", "content": "简单场景可用Redis作注册中心\n生产环境推荐Nacos/Consul/etcd"}
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "消息队列",
        "lessons": [
          {
            "id": "l1",
            "title": "RabbitMQ入门",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "消息队列用于异步处理、解耦、削峰填谷"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "xml",
                "filename": "pom.xml",
                "code": "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-amqp</artifactId>\n</dependency>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "yaml",
                "filename": "application.yml",
                "code": "spring:\n  rabbitmq:\n    host: localhost\n    port: 5672\n    username: guest\n    password: guest"
              }
            ]
          },
          {
            "id": "l2",
            "title": "生产者与消费者",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "生产者发送消息，消费者接收消息"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "生产者.java",
                "code": "@Autowired\nRabbitTemplate rabbitTemplate;\n\n// 下单后发送消息\n@PostMapping(\"/createOrder\")\npublic Result<Order> createOrder(@RequestBody CreateOrderReq req) {\n    // ...创建订单\n    order.insert();\n    \n    // 发送消息到队列\n    rabbitTemplate.convertAndSend(\"order-queue\", order.id);\n    return Result.ok(order);\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "消费者.java",
                "code": "@Component\npublic class OrderConsumer {\n    \n    @RabbitListener(queues = \"order-queue\")\n    public void handleOrder(Integer orderId) {\n        IO.println(\"收到订单：\" + orderId);\n        // 异步处理：发短信、推送通知等\n    }\n}"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "MQ常见场景：\n• 订单创建后异步发短信\n• 批量数据异步处理\n• 服务间解耦通信"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-project-advanced",
    "pathId": "java",
    "title": "进阶项目-gb商城",
    "desc": "商城项目进阶功能（9大业务模块）",
    "icon": "🎯",
    "chapters": [
      {
        "id": "ch1",
        "title": "用户模块",
        "lessons": [
          {
            "id": "l1",
            "title": "手机号+验证码登录",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "商城登录方式：手机号 + 短信验证码\n比传统账号密码更安全、更便捷"},
              {"id": "b2", "type": "list", "items": ["1. 用户输入手机号，点击发送验证码", "2. 后端生成随机验证码，存Redis（5分钟过期）", "3. 调用短信服务发送验证码", "4. 用户输入验证码，后端校验", "5. 校验通过，签发JWT Token"]},
              {"id": "b3", "type": "code", "language": "sql", "filename": "user.sql", "code": "-- 用户表\ncreate table user (\n    id bigint primary key auto_increment,\n    phone varchar(20) not null unique,  -- 手机号（唯一）\n    nickname varchar(50),               -- 昵称\n    avatar varchar(255),                 -- 头像URL\n    status int default 1,                -- 状态：1正常 0禁用\n    created_at text                      -- 注册时间\n);"},
              {"id": "b4", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@Autowired StringRedisTemplate redis;\n\n// 发送验证码\n@PostMapping(\"/sms/send\")\npublic Result<String> sendSms(@RequestParam String phone) {\n    // 1. 生成6位随机验证码\n    String code = String.valueOf((int)((Math.random() * 9 + 1) * 100000));\n    \n    // 2. 存Redis，5分钟过期\n    redis.opsForValue().set(\"sms:code:\" + phone, code, 5, TimeUnit.MINUTES);\n    \n    // 3. 发送短信（开发阶段打印到控制台）\n    IO.println(\"发送验证码到 \" + phone + \": \" + code);\n    \n    return Result.ok(\"验证码已发送\");\n}\n\n// 验证码登录\n@PostMapping(\"/login/sms\")\npublic Result<LoginResp> loginBySms(@RequestParam String phone, @RequestParam String code) {\n    // 1. 校验验证码\n    String savedCode = redis.opsForValue().get(\"sms:code:\" + phone);\n    if (savedCode == null) {\n        return Result.err(\"验证码已过期\");\n    }\n    if (!savedCode.equals(code)) {\n        return Result.err(\"验证码错误\");\n    }\n    redis.delete(\"sms:code:\" + phone);\n    \n    // 2. 查询或创建用户\n    User user = new User().selectOne(\n        new QueryWrapper<User>().eq(\"phone\", phone)\n    );\n    if (user == null) {\n        user = new User();\n        user.phone = phone;\n        user.nickname = \"用户\" + phone.substring(7);\n        user.insert();\n    }\n    \n    // 3. 签发JWT\n    String token = JwtUtil.createToken(user.id);\n    return Result.ok(new LoginResp(token, user));\n}"},
              {"id": "b5", "type": "tip", "content": "防刷：10秒内重复发送验证码直接返回\n生产环境要防止短信轰炸攻击"}
            ]
          },
          {
            "id": "l2",
            "title": "第三方登录（微信）",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "微信登录流程（OAuth2.0）：\n用户点击微信登录 → 跳转微信授权页 → 用户同意 → 获取code → 换取openid → 绑定/登录"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "user_auth.sql", "code": "-- 第三方登录绑定表\ncreate table user_auth (\n    id bigint primary key auto_increment,\n    user_id bigint not null,             -- 关联用户ID\n    auth_type varchar(20) not null,      -- 类型：wechat/alipay\n    openid varchar(100) not null,        -- 第三方openid\n    created_at text\n);"},
              {"id": "b3", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "// 微信登录回调\n@GetMapping(\"/login/wechat/callback\")\npublic Result<LoginResp> wechatCallback(@RequestParam String code) {\n    // 1. 用code换取access_token和openid\n    String url = \"https://api.weixin.qq.com/sns/oauth2/access_token\" +\n        \"?appid=\" + appId + \"&secret=\" + appSecret +\n        \"&code=\" + code + \"&grant_type=authorization_code\";\n    WechatTokenResp resp = restTemplate.getForObject(url, WechatTokenResp.class);\n    String openid = resp.openid;\n    \n    // 2. 查询是否已绑定\n    UserAuth auth = new UserAuth().selectOne(\n        new QueryWrapper<UserAuth>()\n            .eq(\"auth_type\", \"wechat\")\n            .eq(\"openid\", openid)\n    );\n    \n    if (auth != null) {\n        // 已绑定，直接登录\n        User user = new User().selectById(auth.userId);\n        String token = JwtUtil.createToken(user.id);\n        return Result.ok(new LoginResp(token, user));\n    }\n    \n    // 3. 未绑定，创建新用户\n    User user = new User();\n    user.nickname = \"微信用户\";\n    user.insert();\n    \n    // 4. 保存绑定关系\n    auth = new UserAuth();\n    auth.userId = user.id;\n    auth.authType = \"wechat\";\n    auth.openid = openid;\n    auth.insert();\n    \n    String token = JwtUtil.createToken(user.id);\n    return Result.ok(new LoginResp(token, user));\n}"},
              {"id": "b4", "type": "tip", "content": "微信登录需要先在微信开放平台注册应用\n获取appId和appSecret"}
            ]
          },
          {
            "id": "l3",
            "title": "收货地址管理",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "sql", "filename": "user_address.sql", "code": "-- 收货地址表\ncreate table user_address (\n    id bigint primary key auto_increment,\n    user_id bigint not null,\n    name varchar(50),                    -- 收货人姓名\n    phone varchar(20),                   -- 手机号\n    province varchar(50),                -- 省\n    city varchar(50),                    -- 市\n    district varchar(50),                -- 区\n    address varchar(200),                -- 详细地址\n    is_default int default 0             -- 是否默认：1是 0否\n);"},
              {"id": "b2", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "// 获取地址列表\n@GetMapping(\"/address/list\")\npublic Result<List<UserAddress>> addressList(HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    List<UserAddress> list = new UserAddress().selectList(\n        new QueryWrapper<UserAddress>()\n            .eq(\"user_id\", userId)\n            .orderByDesc(\"is_default\")\n    );\n    return Result.ok(list);\n}\n\n// 新增地址\n@PostMapping(\"/address/add\")\npublic Result<UserAddress> addAddress(@RequestBody UserAddress address, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    address.userId = userId;\n    \n    // 如果是第一个地址，设为默认\n    long count = new UserAddress().selectCount(\n        new QueryWrapper<UserAddress>().eq(\"user_id\", userId)\n    );\n    if (count == 0) {\n        address.isDefault = 1;\n    }\n    \n    address.insert();\n    return Result.ok(address);\n}\n\n// 设为默认地址\n@PostMapping(\"/address/default/{id}\")\npublic Result<String> setDefault(@PathVariable Long id, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 先取消所有默认\n    new UserAddress().update(\n        new UserAddress() {{ isDefault = 0; }},\n        new QueryWrapper<UserAddress>().eq(\"user_id\", userId)\n    );\n    \n    // 设置新默认\n    UserAddress address = new UserAddress().selectById(id);\n    address.isDefault = 1;\n    address.updateById();\n    \n    return Result.ok(\"设置成功\");\n}"},
              {"id": "b3", "type": "tip", "content": "下单时会自动带出默认地址\n用户也可以在下单页选择其他地址"}
            ]
          },
          {
            "id": "l4",
            "title": "收藏与足迹",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "sql", "filename": "favorite_footprint.sql", "code": "-- 收藏表\ncreate table user_favorite (\n    id bigint primary key auto_increment,\n    user_id bigint not null,\n    spu_id bigint not null,\n    created_at text\n);\n\n-- 浏览足迹表\ncreate table user_footprint (\n    id bigint primary key auto_increment,\n    user_id bigint not null,\n    spu_id bigint not null,\n    created_at text\n);"},
              {"id": "b2", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "// 收藏/取消收藏\n@PostMapping(\"/favorite/toggle/{spuId}\")\npublic Result<String> toggleFavorite(@PathVariable Long spuId, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    UserFavorite exist = new UserFavorite().selectOne(\n        new QueryWrapper<UserFavorite>()\n            .eq(\"user_id\", userId)\n            .eq(\"spu_id\", spuId)\n    );\n    \n    if (exist != null) {\n        exist.deleteById();\n        return Result.ok(\"取消收藏\");\n    } else {\n        UserFavorite fav = new UserFavorite();\n        fav.userId = userId;\n        fav.spuId = spuId;\n        fav.insert();\n        return Result.ok(\"收藏成功\");\n    }\n}\n\n// 记录浏览足迹\n@PostMapping(\"/footprint/{spuId}\")\npublic Result<String> recordFootprint(@PathVariable Long spuId, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 删除旧记录，保证最新在前\n    new UserFootprint().delete(\n        new QueryWrapper<UserFootprint>()\n            .eq(\"user_id\", userId)\n            .eq(\"spu_id\", spuId)\n    );\n    \n    UserFootprint fp = new UserFootprint();\n    fp.userId = userId;\n    fp.spuId = spuId;\n    fp.insert();\n    return Result.ok(\"记录成功\");\n}"},
              {"id": "b3", "type": "tip", "content": "足迹可以用于推荐算法：猜你喜欢\n收藏列表方便用户快速找到想买的商品"}
            ]
          },
          {
            "id": "l5",
            "title": "实名认证",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "实名认证场景：\n1. 海淘商品需要身份证清关\n2. 大额支付风控\n3. 虚拟商品发票"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "user_realname.sql", "code": "-- 实名认证表\ncreate table user_realname (\n    id bigint primary key auto_increment,\n    user_id bigint not null unique,\n    real_name varchar(50),               -- 真实姓名\n    id_card varchar(20),                 -- 身份证号\n    status int default 0,                -- 0待审核 1通过 2拒绝\n    created_at text\n);"},
              {"id": "b3", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "// 提交实名认证\n@PostMapping(\"/realname/submit\")\npublic Result<String> submitRealname(@RequestBody RealnameReq req, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 校验身份证格式\n    if (!IdCardUtil.isValid(req.idCard)) {\n        return Result.err(\"身份证号格式错误\");\n    }\n    \n    // 检查是否已认证\n    UserRealname exist = new UserRealname().selectOne(\n        new QueryWrapper<UserRealname>().eq(\"user_id\", userId)\n    );\n    if (exist != null && exist.status == 1) {\n        return Result.err(\"已完成实名认证\");\n    }\n    \n    // 保存认证信息\n    UserRealname realname = new UserRealname();\n    realname.userId = userId;\n    realname.realName = req.realName;\n    realname.idCard = req.idCard;\n    realname.status = 0;  // 待审核\n    realname.insertOrUpdate();\n    \n    return Result.ok(\"提交成功，等待审核\");\n}"},
              {"id": "b4", "type": "tip", "content": "生产环境可对接第三方实名认证服务\n如：阿里云身份证二要素验证"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "商品模块",
        "lessons": [
          {
            "id": "l1",
            "title": "多级分类",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "商品分类支持多级结构：\n一级：服装 / 数码 / 食品\n二级：男装 / 女装 / 童装\n三级：T恤 / 衬衫 / 外套"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "category.sql", "code": "-- 分类表（自关联）\ncreate table category (\n    id bigint primary key auto_increment,\n    parent_id bigint default 0,          -- 父分类ID，0为顶级\n    name varchar(50) not null,           -- 分类名称\n    icon varchar(255),                   -- 分类图标\n    sort int default 0,                  -- 排序\n    level int default 1                  -- 层级：1/2/3\n);"},
              {"id": "b3", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "// 获取分类树\n@GetMapping(\"/category/tree\")\npublic Result<List<CategoryVO>> categoryTree() {\n    List<Category> all = new Category().selectList(\n        new QueryWrapper<Category>().orderByAsc(\"sort\")\n    );\n    List<CategoryVO> tree = buildTree(all, 0L);\n    return Result.ok(tree);\n}\n\nprivate List<CategoryVO> buildTree(List<Category> all, Long parentId) {\n    return all.stream()\n        .filter(c -> c.parentId.equals(parentId))\n        .map(c -> {\n            CategoryVO vo = new CategoryVO();\n            vo.id = c.id;\n            vo.name = c.name;\n            vo.children = buildTree(all, c.id);\n            return vo;\n        }).toList();\n}"},
              {"id": "b4", "type": "tip", "content": "一次查询所有分类，内存中构建树\n避免递归查询数据库"}
            ]
          },
          {
            "id": "l2",
            "title": "SPU与SKU设计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "SPU = Standard Product Unit（标准产品单元）\n代表一类商品，如：iPhone 15\n\nSKU = Stock Keeping Unit（库存量单位）\n代表具体规格，如：iPhone 15 蓝色 256G"},
              {"id": "b2", "type": "table", "headers": ["SPU", "SKU"], "rows": [["iPhone 15", "iPhone 15 蓝色 128G"], ["iPhone 15", "iPhone 15 蓝色 256G"], ["iPhone 15", "iPhone 15 白色 128G"]]},
              {"id": "b3", "type": "code", "language": "sql", "filename": "spu_sku.sql", "code": "-- SPU表（标准产品单元）\ncreate table spu (\n    id bigint primary key auto_increment comment '主键ID',\n    shop_id bigint not null comment '商家ID',\n    category_id bigint comment '分类ID',\n    spu_name varchar(200) not null comment '商品名称',\n    description text comment '商品描述',\n    main_image varchar(255) comment '主图URL',\n    price_min int comment '最低价（分）',\n    price_max int comment '最高价（分）',\n    sales int default 0 comment '销量',\n    status int default 0 comment '状态：0下架 1上架',\n    created_at datetime comment '创建时间'\n);\n\n-- SKU表（库存单元）\ncreate table sku (\n    id bigint primary key auto_increment comment '主键ID',\n    spu_id bigint not null comment '所属SPU ID',\n    sku_name varchar(100) comment 'SKU名称（如：红色-XL）',\n    price int not null comment '价格（分）',\n    stock int default 0 comment '库存数量',\n    image varchar(255) comment 'SKU图片URL'\n);"},
              {"id": "b4", "type": "tip", "content": "价格用分存储，避免小数精度问题\n99.9元 → 存储为 9990"}
            ]
          },
          {
            "id": "l3",
            "title": "商品列表与筛选",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@GetMapping(\"/spu/list\")\npublic Result<Page<Spu>> spuList(\n    @RequestParam(required = false) Long categoryId,\n    @RequestParam(defaultValue = \"default\") String sort,\n    @RequestParam(defaultValue = \"1\") Integer pageNum,\n    @RequestParam(defaultValue = \"10\") Integer pageSize\n) {\n    QueryWrapper<Spu> query = new QueryWrapper<Spu>().eq(\"status\", 1);\n    \n    if (categoryId != null) {\n        query.eq(\"category_id\", categoryId);\n    }\n    \n    switch (sort) {\n        case \"sales\" -> query.orderByDesc(\"sales\");\n        case \"price_asc\" -> query.orderByAsc(\"price_min\");\n        case \"price_desc\" -> query.orderByDesc(\"price_min\");\n        default -> query.orderByDesc(\"sales\");\n    }\n    \n    Page<Spu> page = new Spu().selectPage(new Page<>(pageNum, pageSize), query);\n    return Result.ok(page);\n}"},
              {"id": "b2", "type": "tip", "content": "常见排序：综合/销量/价格/新品"}
            ]
          },
          {
            "id": "l4",
            "title": "LIKE模糊搜索",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "最简单的搜索方式：LIKE模糊匹配\n缺点：性能差，不走索引，不支持分词"},
              {"id": "b2", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@GetMapping(\"/search\")\npublic Result<List<Spu>> search(\n    @RequestParam String keyword,\n    @RequestParam(defaultValue = \"1\") Integer pageNum,\n    @RequestParam(defaultValue = \"10\") Integer pageSize\n) {\n    Page<Spu> page = new Page<>(pageNum, pageSize);\n    QueryWrapper<Spu> query = new QueryWrapper<Spu>()\n        .like(\"spu_name\", keyword)\n        .or()\n        .like(\"description\", keyword)\n        .orderByDesc(\"created_at\");\n    \n    Page<Spu> result = new Spu().selectPage(page, query);\n    return Result.ok(result.getRecords());\n}"},
              {"id": "b3", "type": "code", "language": "http", "filename": "test.http", "code": "### 搜索商品\nGET http://localhost:8080/search?keyword=牛奶&pageNum=1&pageSize=10"},
              {"id": "b4", "type": "tip", "content": "LIKE '%关键词%'不走索引，数据量大时性能差\n适合小数据量或开发测试"}
            ]
          },
          {
            "id": "l1",
            "title": "分词与倒排索引原理",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "LIKE的问题：搜\"蒙牛牛奶\"无法匹配\"蒙牛纯牛奶\"（不连续）\n解决方案：分词 + 倒排索引"},
              {"id": "b2", "type": "text", "content": "知识点1：分词（Tokenization）\n把商品名称拆成多个词，方便后续匹配"},
              {"id": "b3", "type": "code", "language": "text", "filename": "分词示例", "code": "原文：\"蒙牛纯牛奶250ml\"\n\n分词结果：\n→ [\"蒙牛\", \"纯牛奶\", \"牛奶\", \"250ml\"]\n\n用户搜\"牛奶\"就能匹配上这个商品"},
              {"id": "b4", "type": "tip", "content": "英文按空格分词简单\n中文没空格，需要分词器（如：ik分词器）智能切分"},
              {"id": "b5", "type": "text", "content": "知识点2：倒排索引（Inverted Index）\n分词后建立 词 → 商品ID列表 的映射表"},
              {"id": "b6", "type": "text", "content": "第1步：对每个商品名称分词"},
              {"id": "b7", "type": "table", "headers": ["商品ID", "商品名称", "分词结果"], "rows": [["1", "蒙牛纯牛奶250ml", "蒙牛, 纯牛奶, 牛奶, 250ml"], ["2", "伊利纯牛奶500ml", "伊利, 纯牛奶, 牛奶, 500ml"], ["3", "蒙牛酸奶200ml", "蒙牛, 酸奶, 200ml"]]},
              {"id": "b8", "type": "text", "content": "第2步：建立 词 → 商品ID 的映射（倒排索引）"},
              {"id": "b9", "type": "table", "headers": ["分词", "商品ID列表"], "rows": [["蒙牛", "1, 3"], ["伊利", "2"], ["纯牛奶", "1, 2"], ["牛奶", "1, 2"], ["酸奶", "3"], ["250ml", "1"], ["500ml", "2"], ["200ml", "3"]]},
              {"id": "b10", "type": "text", "content": "搜索过程：用户搜\"蒙牛 牛奶\""},
              {"id": "b11", "type": "list", "items": ["第1步：对搜索词分词 → [蒙牛, 牛奶]", "第2步：查倒排索引 → 蒙牛[1,3] 牛奶[1,2]", "第3步：取交集[1] 或 并集[1,2,3]", "第4步：根据ID查商品详情返回"]},
              {"id": "b12", "type": "table", "headers": ["对比项", "LIKE模糊搜索", "倒排索引搜索"], "rows": [["原理", "逐行扫描匹配", "查索引表直接定位"], ["性能", "O(n) 全表扫描", "O(1) 索引查找"], ["搜\"蒙牛牛奶\"匹配效果", "必须连续出现", "分词后分别匹配"]]},
              {"id": "b13", "type": "tip", "content": "MySQL全文索引、PostgreSQL全文索引、Elasticsearch\n底层都是分词+倒排索引原理，只是实现细节不同"}
            ]
          },
          {
            "id": "l2",
            "title": "MySQL全文搜索",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "MySQL 5.6+支持FULLTEXT全文索引\n不需要额外组件，性能比LIKE好很多"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "创建全文索引", "code": "-- 添加全文索引\nALTER TABLE spu ADD FULLTEXT INDEX ft_name_desc (spu_name, description);\n\n-- 查看索引\nSHOW INDEX FROM spu;"},
              {"id": "b3", "type": "code", "language": "java", "filename": "SpuMapper.java", "code": "public interface SpuMapper extends BaseMapper<Spu> {\n    // MySQL全文搜索\n    @Select(\"SELECT * FROM spu \" +\n            \"WHERE MATCH(spu_name, description) AGAINST(#{keyword} IN NATURAL LANGUAGE MODE) \" +\n            \"ORDER BY MATCH(spu_name, description) AGAINST(#{keyword}) DESC \" +\n            \"LIMIT #{offset}, #{size}\")\n    List<Spu> searchFulltext(@Param(\"keyword\") String keyword,\n                             @Param(\"offset\") Integer offset,\n                             @Param(\"size\") Integer size);\n}"},
              {"id": "b4", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@Autowired\nSpuMapper spuMapper;\n\n@GetMapping(\"/search/mysql\")\npublic Result<List<Spu>> searchMySQL(\n    @RequestParam String keyword,\n    @RequestParam(defaultValue = \"1\") Integer pageNum,\n    @RequestParam(defaultValue = \"10\") Integer pageSize\n) {\n    int offset = (pageNum - 1) * pageSize;\n    List<Spu> list = spuMapper.searchFulltext(keyword, offset, pageSize);\n    return Result.ok(list);\n}"},
              {"id": "b5", "type": "tip", "content": "MATCH AGAINST走全文索引，性能比LIKE好\n中文需要MySQL 5.7.6+并设置 ngram 分词器"}
            ]
          },
          {
            "id": "l3",
            "title": "PostgreSQL全文搜索",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "PostgreSQL内置全文搜索，使用tsvector和tsquery\n中文需要安装zhparser扩展"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "创建全文索引", "code": "-- 添加tsvector列\nALTER TABLE spu ADD COLUMN tsv tsvector;\n\n-- 生成全文索引内容\nUPDATE spu SET tsv = to_tsvector('simple', coalesce(spu_name,'') || ' ' || coalesce(description,''));\n\n-- 创建GIN索引\nCREATE INDEX idx_spu_tsv ON spu USING GIN(tsv);"},
              {"id": "b3", "type": "code", "language": "java", "filename": "SpuMapper.java", "code": "public interface SpuMapper extends BaseMapper<Spu> {\n    // PostgreSQL全文搜索\n    @Select(\"SELECT * FROM spu \" +\n            \"WHERE tsv @@ plainto_tsquery('simple', #{keyword}) \" +\n            \"ORDER BY ts_rank(tsv, plainto_tsquery('simple', #{keyword})) DESC \" +\n            \"LIMIT #{size} OFFSET #{offset}\")\n    List<Spu> searchPgFulltext(@Param(\"keyword\") String keyword,\n                               @Param(\"offset\") Integer offset,\n                               @Param(\"size\") Integer size);\n}"},
              {"id": "b4", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@GetMapping(\"/search/pg\")\npublic Result<List<Spu>> searchPg(\n    @RequestParam String keyword,\n    @RequestParam(defaultValue = \"1\") Integer pageNum,\n    @RequestParam(defaultValue = \"10\") Integer pageSize\n) {\n    int offset = (pageNum - 1) * pageSize;\n    List<Spu> list = spuMapper.searchPgFulltext(keyword, offset, pageSize);\n    return Result.ok(list);\n}"},
              {"id": "b5", "type": "tip", "content": "ts_rank返回相关度分数，可排序\nGIN索引查询快，但更新慢"}
            ]
          },
          {
            "id": "l4",
            "title": "Elasticsearch搜索",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Elasticsearch是专业搜索引擎\n支持分词、高亮、聘合、远超数据库全文搜索"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "Docker启动ES", "code": "docker run -d --name elasticsearch \\\n  -p 9200:9200 -p 9300:9300 \\\n  -e \"discovery.type=single-node\" \\\n  -e \"ES_JAVA_OPTS=-Xms512m -Xmx512m\" \\\n  elasticsearch:8.11.0\n\n# 验证\ncurl http://localhost:9200"},
              {"id": "b3", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>\n</dependency>"},
              {"id": "b4", "type": "code", "language": "yaml", "filename": "application.yml", "code": "spring:\n  elasticsearch:\n    uris: http://localhost:9200"},
              {"id": "b5", "type": "code", "language": "java", "filename": "SpuDoc.java", "code": "@Document(indexName = \"spu\")\npublic class SpuDoc {\n    @Id\n    public Integer id;\n    \n    @Field(type = FieldType.Text, analyzer = \"ik_max_word\")\n    public String spuName;\n    \n    @Field(type = FieldType.Text, analyzer = \"ik_max_word\")\n    public String description;\n    \n    @Field(type = FieldType.Double)\n    public Double spuPrice;\n}"},
              {"id": "b6", "type": "code", "language": "java", "filename": "SpuRepository.java", "code": "public interface SpuRepository extends ElasticsearchRepository<SpuDoc, Integer> {\n    // 根据关键词搜索\n    List<SpuDoc> findBySpuNameOrDescription(String spuName, String description);\n}"},
              {"id": "b7", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@Autowired\nSpuRepository spuRepository;\n\n@GetMapping(\"/search/es\")\npublic Result<List<SpuDoc>> searchES(@RequestParam String keyword) {\n    List<SpuDoc> list = spuRepository.findBySpuNameOrDescription(keyword, keyword);\n    return Result.ok(list);\n}\n\n// 同步数据到ES\n@PostMapping(\"/spu/sync\")\npublic Result<String> syncToES() {\n    List<Spu> spuList = new Spu().selectAll();\n    for (Spu spu : spuList) {\n        SpuDoc doc = new SpuDoc();\n        doc.id = spu.id;\n        doc.spuName = spu.spuName;\n        doc.description = spu.description;\n        doc.spuPrice = spu.spuPrice;\n        spuRepository.save(doc);\n    }\n    return Result.ok(\"同步成功\");\n}"},
              {"id": "b8", "type": "tip", "content": "ES中文分词用ik插件\n数据需要同步到ES，可用MQ异步同步"}
            ]
          },
          {
            "id": "l5",
            "title": "三种方式对比",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["", "LIKE模糊", "MySQL/PG全文", "Elasticsearch"], "rows": [["性能", "差", "中", "高"], ["分词", "不支持", "需配置", "内置支持"], ["部署复杂度", "无", "低", "中"], ["中文支持", "支持", "需配置", "ik插件"], ["高亮/聘合", "不支持", "需写SQL", "内置支持"], ["适用场景", "开发测试", "中小数据量", "生产环境"]]},
              {"id": "b2", "type": "tip", "content": "小项目/简单场景 → 数据库全文搜索\n生产环境/复杂需求 → Elasticsearch"}
            ]
          },
          {
            "id": "l6",
            "title": "商品详情页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "商品详情页展示：\n• 商品轮播图\n• SKU规格选择\n• 价格和库存\n• 商品描述"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "spu_images.sql", "code": "-- 商品图片表\ncreate table spu_image (\n    id bigint primary key auto_increment,\n    spu_id bigint not null,\n    image_url varchar(255) not null,\n    sort int default 0,              -- 排序\n    is_main int default 0            -- 是否主图\n);\n\n-- SKU规格表\ncreate table sku_spec (\n    id bigint primary key auto_increment,\n    sku_id bigint not null,\n    spec_name varchar(50),           -- 规格名：颜色/尺码\n    spec_value varchar(50)           -- 规格值：红色/XL\n);"},
              {"id": "b3", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "// 获取商品详情\n@GetMapping(\"/spu/detail/{id}\")\npublic Result<SpuDetailVO> spuDetail(@PathVariable Long id) {\n    // 1. 查询SPU基本信息\n    Spu spu = new Spu().selectById(id);\n    if (spu == null) {\n        return Result.err(\"商品不存在\");\n    }\n    \n    // 2. 查询商品图片\n    List<SpuImage> images = new SpuImage().selectList(\n        new QueryWrapper<SpuImage>()\n            .eq(\"spu_id\", id)\n            .orderByAsc(\"sort\")\n    );\n    \n    // 3. 查询所有SKU\n    List<Sku> skuList = new Sku().selectList(\n        new QueryWrapper<Sku>().eq(\"spu_id\", id)\n    );\n    \n    // 4. 查询SKU规格\n    for (Sku sku : skuList) {\n        List<SkuSpec> specs = new SkuSpec().selectList(\n            new QueryWrapper<SkuSpec>().eq(\"sku_id\", sku.id)\n        );\n        sku.specs = specs;\n    }\n    \n    // 5. 组装返回\n    SpuDetailVO vo = new SpuDetailVO();\n    vo.spu = spu;\n    vo.images = images;\n    vo.skuList = skuList;\n    return Result.ok(vo);\n}"},
              {"id": "b4", "type": "tip", "content": "前端根据用户选择的规格，找到对应SKU\n展示该SKU的价格和库存"}
            ]
          },
          {
            "id": "l7",
            "title": "商品评价",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "sql", "filename": "comment.sql", "code": "-- 商品评价表\ncreate table spu_comment (\n    id bigint primary key auto_increment,\n    spu_id bigint not null,\n    sku_id bigint,\n    order_id bigint not null,         -- 关联订单\n    user_id bigint not null,\n    content text,                     -- 评价内容\n    images text,                      -- 评价图片（JSON数组）\n    rating int default 5,             -- 评分：1-5\n    is_anonymous int default 0,       -- 是否匿名\n    created_at datetime\n);\n\n-- 商品问答表\ncreate table spu_qa (\n    id bigint primary key auto_increment,\n    spu_id bigint not null,\n    user_id bigint not null,\n    question text,                    -- 问题\n    answer text,                      -- 商家回答\n    created_at datetime\n);"},
              {"id": "b2", "type": "code", "language": "java", "filename": "CommentController.java", "code": "// 提交评价（订单完成后）\n@PostMapping(\"/comment/submit\")\npublic Result<String> submitComment(@RequestBody CommentReq req, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 检查订单状态\n    Order order = new Order().selectById(req.orderId);\n    if (order == null || order.status != 3) {\n        return Result.err(\"订单状态不允许评价\");\n    }\n    \n    // 检查是否已评价\n    SpuComment exist = new SpuComment().selectOne(\n        new QueryWrapper<SpuComment>().eq(\"order_id\", req.orderId)\n    );\n    if (exist != null) {\n        return Result.err(\"已评价过\");\n    }\n    \n    SpuComment comment = new SpuComment();\n    comment.spuId = order.spuId;\n    comment.skuId = order.skuId;\n    comment.orderId = req.orderId;\n    comment.userId = userId;\n    comment.content = req.content;\n    comment.images = JSON.toJSONString(req.images);\n    comment.rating = req.rating;\n    comment.insert();\n    \n    return Result.ok(\"评价成功\");\n}\n\n// 获取商品评价列表\n@GetMapping(\"/comment/list/{spuId}\")\npublic Result<Page<SpuComment>> commentList(\n    @PathVariable Long spuId,\n    @RequestParam(defaultValue = \"1\") Integer pageNum,\n    @RequestParam(defaultValue = \"10\") Integer pageSize\n) {\n    Page<SpuComment> page = new SpuComment().selectPage(\n        new Page<>(pageNum, pageSize),\n        new QueryWrapper<SpuComment>()\n            .eq(\"spu_id\", spuId)\n            .orderByDesc(\"created_at\")\n    );\n    return Result.ok(page);\n}"},
              {"id": "b3", "type": "tip", "content": "好评率 = 4-5星评价数 / 总评价数\n可以在商品列表页展示好评率"}
            ]
          },
          {
            "id": "l8",
            "title": "购物车",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "sql", "filename": "cart.sql", "code": "-- 购物车表\ncreate table cart (\n    id bigint primary key auto_increment,\n    user_id bigint not null,\n    spu_id bigint not null,\n    sku_id bigint not null,\n    quantity int default 1,           -- 数量\n    checked int default 1,            -- 是否选中\n    created_at datetime\n);"},
              {"id": "b2", "type": "code", "language": "java", "filename": "CartController.java", "code": "// 添加购物车\n@PostMapping(\"/cart/add\")\npublic Result<String> addCart(@RequestBody CartAddReq req, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 检查SKU库存\n    Sku sku = new Sku().selectById(req.skuId);\n    if (sku == null || sku.stock < req.quantity) {\n        return Result.err(\"库存不足\");\n    }\n    \n    // 查询是否已在购物车\n    Cart exist = new Cart().selectOne(\n        new QueryWrapper<Cart>()\n            .eq(\"user_id\", userId)\n            .eq(\"sku_id\", req.skuId)\n    );\n    \n    if (exist != null) {\n        // 已存在，增加数量\n        exist.quantity += req.quantity;\n        exist.updateById();\n    } else {\n        // 不存在，新增\n        Cart cart = new Cart();\n        cart.userId = userId;\n        cart.spuId = req.spuId;\n        cart.skuId = req.skuId;\n        cart.quantity = req.quantity;\n        cart.insert();\n    }\n    return Result.ok(\"添加成功\");\n}\n\n// 购物车列表\n@GetMapping(\"/cart/list\")\npublic Result<List<CartVO>> cartList(HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    List<Cart> cartList = new Cart().selectList(\n        new QueryWrapper<Cart>().eq(\"user_id\", userId)\n    );\n    \n    // 关联查询商品信息\n    List<CartVO> voList = new ArrayList<>();\n    for (Cart cart : cartList) {\n        CartVO vo = new CartVO();\n        vo.cart = cart;\n        vo.spu = new Spu().selectById(cart.spuId);\n        vo.sku = new Sku().selectById(cart.skuId);\n        voList.add(vo);\n    }\n    return Result.ok(voList);\n}\n\n// 修改数量\n@PostMapping(\"/cart/update/{id}\")\npublic Result<String> updateCart(@PathVariable Long id, @RequestParam Integer quantity) {\n    Cart cart = new Cart().selectById(id);\n    if (cart == null) {\n        return Result.err(\"购物车项不存在\");\n    }\n    cart.quantity = quantity;\n    cart.updateById();\n    return Result.ok(\"修改成功\");\n}"},
              {"id": "b3", "type": "tip", "content": "购物车选中状态：\n• 全选/取消全选\n• 单个选中/取消\n• 只结算选中的商品"}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "订单模块",
        "lessons": [
          {
            "id": "l0",
            "title": "订单表设计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "订单是商城核心表，需要关联用户、商品、商家、活动、优惠券等"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "orders.sql", "code": "-- 订单表\ncreate table orders (\n    id bigint primary key auto_increment,\n    order_no varchar(32) not null,      -- 订单号（雪花ID或时间戳+随机数）\n    user_id bigint not null,            -- 用户ID\n    shop_id bigint,                     -- 商家ID\n    spu_id bigint,                      -- 商品ID\n    sku_id bigint,                      -- SKU ID\n    spu_name varchar(200),              -- 商品名称（冗余）\n    spu_image varchar(255),             -- 商品图片（冗余）\n    spu_price decimal(10,2),            -- 商品单价\n    spu_count int,                      -- 购买数量\n    total decimal(10,2),                -- 订单总金额\n    pay_amount decimal(10,2),           -- 实付金额（扣券后）\n    activity_id bigint,                 -- 活动ID（秒杀/拼团）\n    activity_type int,                  -- 活动类型：1秒杀 2折扣 3拼团\n    coupon_id bigint,                   -- 优惠券ID\n    status int default 0,               -- 状态：0待支付 1已支付 2已发货 3已完成 4已取消\n    created_at datetime,\n    pay_time datetime,                  -- 支付时间\n    ship_time datetime,                 -- 发货时间\n    complete_time datetime              -- 完成时间\n);\n\n-- 订单号唯一索引\ncreate unique index uk_order_no on orders(order_no);\n-- 用户订单查询索引\ncreate index idx_user_id on orders(user_id);"},
              {"id": "b3", "type": "tip", "content": "为什么冗余商品名称和图片？\n商品可能修改或删除，订单需要保留下单时的快照"}
            ]
          },
          {
            "id": "l1",
            "title": "订单状态流转",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "订单状态：待支付(0) → 已支付(1) → 已发货(2) → 已完成(3)"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "// 支付订单\n@PostMapping(\"/order/pay/{id}\")\npublic Result<String> payOrder(@PathVariable Integer id) {\n    Order order = new Order().selectById(id);\n    if (order == null) {\n        return Result.err(\"订单不存在\");\n    }\n    if (order.status != 0) {\n        return Result.err(\"订单状态异常\");\n    }\n    \n    order.status = 1;  // 已支付\n    order.updateById();\n    return Result.ok(\"支付成功\");\n}\n\n// 发货\n@PostMapping(\"/order/ship/{id}\")\npublic Result<String> shipOrder(@PathVariable Integer id) {\n    Order order = new Order().selectById(id);\n    if (order == null || order.status != 1) {\n        return Result.err(\"订单状态异常\");\n    }\n    \n    order.status = 2;  // 已发货\n    order.updateById();\n    return Result.ok(\"发货成功\");\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "支付流程",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "商城核心功能：用户下单后调起微信/支付宝支付"},
              {"id": "b2", "type": "list", "items": ["1. 用户点击支付", "2. 后端调用支付平台API创建订单", "3. 返回支付链接/二维码", "4. 用户完成支付", "5. 支付平台回调通知", "6. 后端更新订单状态"]},
              {"id": "b3", "type": "code", "language": "text", "filename": "支付流程图", "code": "用户 → 后端 → 微信/支付宝 API\n                  ← 返回支付二维码/链接\n用户 → 微信/支付宝 APP → 完成支付\n                           ↓\n                    回调后端接口\n                           ↓\n                    更新订单状态"}
            ]
          },
          {
            "id": "l3",
            "title": "支付宝沙箱",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "支付宝提供沙箱环境，无需真实付款即可测试"},
              {"id": "b2", "type": "list", "items": ["1. 访问 open.alipay.com 注册开发者账号", "2. 创建沙箱应用", "3. 获取AppID、私钥、支付宝公钥"]},
              {"id": "b3", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<!-- 支付宝SDK -->\n<dependency>\n    <groupId>com.alipay.sdk</groupId>\n    <artifactId>alipay-sdk-java</artifactId>\n    <version>4.38.0.ALL</version>\n</dependency>"},
              {"id": "b4", "type": "code", "language": "yaml", "filename": "application.yml", "code": "alipay:\n  app-id: 2021000xxxxx\n  private-key: MIIEvQIBADANBg...\n  alipay-public-key: MIIBIjANBg...\n  gateway: https://openapi-sandbox.dl.alipaydev.com/gateway.do\n  notify-url: https://your-domain.com/pay/notify"}
            ]
          },
          {
            "id": "l4",
            "title": "创建支付订单",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "AlipayConfig.java", "code": "@Configuration\npublic class AlipayConfig {\n    @Value(\"${alipay.app-id}\") public String appId;\n    @Value(\"${alipay.private-key}\") public String privateKey;\n    @Value(\"${alipay.alipay-public-key}\") public String alipayPublicKey;\n    @Value(\"${alipay.gateway}\") public String gateway;\n    @Value(\"${alipay.notify-url}\") public String notifyUrl;\n    \n    @Bean\n    public AlipayClient alipayClient() {\n        return new DefaultAlipayClient(gateway, appId, privateKey,\n            \"json\", \"UTF-8\", alipayPublicKey, \"RSA2\");\n    }\n}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@Autowired AlipayClient alipayClient;\n@Autowired AlipayConfig alipayConfig;\n\n@PostMapping(\"/pay/{orderId}\")\npublic Result<String> pay(@PathVariable Integer orderId) throws Exception {\n    Order order = new Order().selectById(orderId);\n    if (order == null || order.status != 0) {\n        return Result.err(\"订单不存在或已支付\");\n    }\n    \n    AlipayTradePagePayRequest request = new AlipayTradePagePayRequest();\n    request.setNotifyUrl(alipayConfig.notifyUrl);\n    request.setReturnUrl(\"http://localhost:5173/order\");\n    \n    JSONObject bizContent = new JSONObject();\n    bizContent.put(\"out_trade_no\", order.id.toString());\n    bizContent.put(\"total_amount\", order.total);\n    bizContent.put(\"subject\", order.spuName);\n    bizContent.put(\"product_code\", \"FAST_INSTANT_TRADE_PAY\");\n    request.setBizContent(bizContent.toString());\n    \n    String form = alipayClient.pageExecute(request).getBody();\n    return Result.ok(form);\n}"},
              {"id": "b3", "type": "tip", "content": "pageExecute返回一个HTML表单\n前端直接渲染即可跳转支付宝支付页"}
            ]
          },
          {
            "id": "l5",
            "title": "支付回调",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用户支付成功后，支付宝会回调我们的接口"},
              {"id": "b2", "type": "code", "language": "java", "filename": "DemoApplication.java", "code": "@PostMapping(\"/pay/notify\")\npublic String payNotify(HttpServletRequest request) throws Exception {\n    // 1. 获取支付宝回调参数\n    Map<String, String> params = new HashMap<>();\n    Map<String, String[]> requestParams = request.getParameterMap();\n    for (String name : requestParams.keySet()) {\n        params.put(name, String.join(\",\", requestParams.get(name)));\n    }\n    \n    // 2. 验签（重要！防止伪造回调）\n    boolean signVerified = AlipaySignature.rsaCheckV1(\n        params, alipayConfig.alipayPublicKey, \"UTF-8\", \"RSA2\");\n    if (!signVerified) return \"fail\";\n    \n    // 3. 更新订单状态\n    String outTradeNo = params.get(\"out_trade_no\");\n    String tradeStatus = params.get(\"trade_status\");\n    if (\"TRADE_SUCCESS\".equals(tradeStatus)) {\n        Order order = new Order().selectById(Integer.parseInt(outTradeNo));\n        if (order != null && order.status == 0) {\n            order.status = 1;\n            order.updateById();\n        }\n    }\n    return \"success\";\n}"},
              {"id": "b3", "type": "tip", "content": "验签必须做！不然任何人都可以伪造回调\n返回success告诉支付宝不用重试"}
            ]
          },
          {
            "id": "l6",
            "title": "微信支付",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["对比项", "支付宝", "微信支付"], "rows": [["沙箱", "免费，开箱即用", "需要企业资质"], ["证书", "无需", "需要API证书"], ["调试难度", "简单", "较复杂"], ["适合场景", "第三方应用", "小程序/公众号"]]},
              {"id": "b2", "type": "tip", "content": "学习阶段用支付宝沙箱\n真实项目再对接微信支付"}
            ]
          },
          {
            "id": "l7",
            "title": "库存扣减",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "下单时检查并扣减库存，防止超卖"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "@Transactional\n@PostMapping(\"/createOrder\")\npublic Result<Order> createOrder(@RequestBody CreateOrderReq req, HttpServletRequest request) {\n    // 1. 查询商品\n    Spu spu = new Spu().selectById(req.spuId);\n    if (spu == null) {\n        return Result.err(\"商品不存在\");\n    }\n    \n    // 2. 检查库存\n    if (spu.stock < req.count) {\n        return Result.err(\"库存不足\");\n    }\n    \n    // 3. 扣减库存\n    spu.stock = spu.stock - req.count;\n    spu.updateById();\n    \n    // 4. 创建订单\n    Integer userId = (Integer) request.getAttribute(\"userId\");\n    Order order = new Order();\n    order.userId = userId;\n    order.spuId = spu.id;\n    order.spuName = spu.spuName;\n    order.spuPrice = spu.spuPrice;\n    order.spuCount = req.count;\n    order.total = spu.spuPrice * req.count;\n    order.status = 0;\n    order.createdAt = LocalDateTime.now().toString();\n    order.insert();\n    \n    return Result.ok(order);\n}"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "@Transactional保证扣库存和创建订单是原子操作\n任何一步失败都会回滚"
              }
            ]
          },
          {
            "id": "l8",
            "title": "悲观锁",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "上面代码在高并发时有问题：\n线程A查库存=10 → 线程B查库存=10 → 都扣减 → 库存变负数"},
              {"id": "b2", "type": "text", "content": "悲观锁思想：假设会冲突，先加锁再操作\n适用场景：写多读少、冲突高"},
              {"id": "b3", "type": "text", "content": "方式1：数据库FOR UPDATE（单数据库）"},
              {"id": "b4", "type": "code", "language": "java", "filename": "SpuMapper.java", "code": "public interface SpuMapper extends BaseMapper<Spu> {\n    // 悲观锁查询，锁定这行数据\n    @Select(\"SELECT * FROM spu WHERE id = #{id} FOR UPDATE\")\n    Spu selectForUpdate(Integer id);\n}"},
              {"id": "b5", "type": "code", "language": "java", "filename": "DemoApplication.java(数据库悲观锁)", "code": "@Transactional\n@PostMapping(\"/createOrder\")\npublic Result<Order> createOrder(@RequestBody CreateOrderReq req) {\n    // 1. 悲观锁查询（其他线程会等待）\n    Spu spu = spuMapper.selectForUpdate(req.spuId);\n    \n    // 2. 检查库存\n    if (spu.stock < req.count) {\n        return Result.err(\"库存不足\");\n    }\n    \n    // 3. 扣减库存\n    spu.stock = spu.stock - req.count;\n    spu.updateById();\n    \n    // 4. 创建订单...\n    return Result.ok(order);\n}"},
              {"id": "b6", "type": "tip", "content": "FOR UPDATE只能锁同一数据库的连接\n多实例部署时，不同实例可能连不同数据库，锁失效"},
              {"id": "b7", "type": "text", "content": "方式2：Redis分布式锁（多实例）"},
              {"id": "b8", "type": "code", "language": "java", "filename": "DemoApplication.java(Redis分布式锁)", "code": "@Autowired\nStringRedisTemplate redis;\n\n@PostMapping(\"/createOrder\")\npublic Result<Order> createOrder(@RequestBody CreateOrderReq req) {\n    String lockKey = \"lock:stock:\" + req.spuId;\n    \n    // 1. 获取分布式锁\n    Boolean locked = redis.opsForValue()\n        .setIfAbsent(lockKey, \"1\", Duration.ofSeconds(10));\n    if (!locked) {\n        return Result.err(\"系统繁忙，请重试\");\n    }\n    \n    try {\n        // 2. 查询库存\n        Spu spu = new Spu().selectById(req.spuId);\n        if (spu.stock < req.count) {\n            return Result.err(\"库存不足\");\n        }\n        \n        // 3. 扣减库存\n        spu.stock = spu.stock - req.count;\n        spu.updateById();\n        \n        // 4. 创建订单...\n        return Result.ok(order);\n    } finally {\n        // 5. 释放锁\n        redis.delete(lockKey);\n    }\n}"},
              {"id": "b9", "type": "tip", "content": "setIfAbsent = SETNX，key不存在才设置\nRedis分布式锁更万能：不限数据库、不限存储服务\n无论操作MySQL、MongoDB还是文件，都能用Redis锁"},
              {"id": "b10", "type": "table", "headers": ["", "数据库FOR UPDATE", "Redis分布式锁"], "rows": [["作用范围", "单数据库", "多实例/分布式"], ["性能", "低（等待锁）", "中"], ["实现复杂度", "简单", "中等"], ["适用场景", "单机、写多", "多实例、写多"]]},
              {"id": "b11", "type": "tip", "content": "什么时候需要加锁？\n多线程读取远程数据到本地 → 本地修改 → 写回远程\n这个过程中远程数据可能被其他线程修改，导致不一致"}
            ]
          },
          {
            "id": "l9",
            "title": "乐观锁",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "乐观锁思想：假设不冲突，更新时检查版本\n适用场景：读多写少、冲突低（如秒杀）"},
              {"id": "b2", "type": "text", "content": "实现方式：版本号检查"},
              {"id": "b3", "type": "code", "language": "sql", "filename": "表结构", "code": "ALTER TABLE spu ADD COLUMN version INT DEFAULT 0;"},
              {"id": "b4", "type": "code", "language": "java", "filename": "SpuMapper.java", "code": "public interface SpuMapper extends BaseMapper<Spu> {\n    // 乐观锁更新，版本号不匹配则更新失败\n    @Update(\"UPDATE spu SET stock = stock - #{count}, version = version + 1 \" +\n            \"WHERE id = #{id} AND stock >= #{count} AND version = #{version}\")\n    int deductStockOptimistic(@Param(\"id\") Integer id, \n                              @Param(\"count\") Integer count, \n                              @Param(\"version\") Integer version);\n}"},
              {"id": "b5", "type": "code", "language": "java", "filename": "DemoApplication.java(乐观锁)", "code": "@PostMapping(\"/createOrder\")\npublic Result<Order> createOrder(@RequestBody CreateOrderReq req) {\n    Spu spu = new Spu().selectById(req.spuId);\n    \n    // 乐观锁更新\n    int rows = spuMapper.deductStockOptimistic(spu.id, req.count, spu.version);\n    if (rows == 0) {\n        return Result.err(\"库存不足或被抢购\");\n    }\n    \n    // 创建订单...\n    return Result.ok(order);\n}"},
              {"id": "b6", "type": "table", "headers": ["", "悲观锁", "乐观锁"], "rows": [["思想", "假设会冲突", "假设不冲突"], ["性能", "低（等待锁）", "高（无锁）"], ["重试", "无需", "需要"], ["死锁风险", "有", "无"], ["适用场景", "写多读少", "读多写少"]]},
              {"id": "b7", "type": "tip", "content": "秒杀场景用乐观锁，性能更好\n库存扣减+版本检查放在一条SQL，原子操作"}
            ]
          },
          {
            "id": "l10",
            "title": "为什么用MQ",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "同步扣库存的问题：\n1. 高并发时数据库压力大\n2. 扣库存慢会阻塞下单响应\n3. 数据库故障导致整个下单失败"},
              {"id": "b2", "type": "text", "content": "异步MQ方案：\n下单 → 发消息到MQ → 立即返回成功 → 消费者异步扣库存"},
              {"id": "b3", "type": "table", "headers": ["", "同步扣库存", "MQ异步扣库存"], "rows": [["响应速度", "慢", "快"], ["数据库压力", "高", "低（削峰）"], ["解耦", "强耦合", "解耦"], ["可靠性", "单点故障", "消息持久化"]]},
              {"id": "b4", "type": "tip", "content": "MQ核心价值：异步、解耦、削峰"}
            ]
          },
          {
            "id": "l11",
            "title": "Redis Stream实现",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Redis Stream是Redis 5.0推出的消息队列\n轻量级，适合简单场景"},
              {"id": "b2", "type": "code", "language": "java", "filename": "RedisStreamConfig.java", "code": "@Configuration\npublic class RedisStreamConfig {\n    @Bean\n    public StreamMessageListenerContainer<String, MapRecord<String, String, String>> container(\n            RedisConnectionFactory factory) {\n        var options = StreamMessageListenerContainer.StreamMessageListenerContainerOptions\n            .builder()\n            .pollTimeout(Duration.ofSeconds(1))\n            .build();\n        var container = StreamMessageListenerContainer.create(factory, options);\n        container.start();\n        return container;\n    }\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "StockProducer.java", "code": "@Service\npublic class StockProducer {\n    @Autowired\n    StringRedisTemplate redis;\n    \n    // 发送扣库存消息\n    public void sendDeduct(Integer spuId, Integer count) {\n        Map<String, String> msg = new HashMap<>();\n        msg.put(\"spuId\", spuId.toString());\n        msg.put(\"count\", count.toString());\n        redis.opsForStream().add(\"stock:deduct\", msg);\n    }\n}"},
              {"id": "b4", "type": "code", "language": "java", "filename": "StockConsumer.java", "code": "@Component\npublic class StockConsumer implements StreamListener<String, MapRecord<String, String, String>> {\n    @Autowired\n    SpuMapper spuMapper;\n    \n    @Override\n    public void onMessage(MapRecord<String, String, String> message) {\n        Map<String, String> data = message.getValue();\n        Integer spuId = Integer.parseInt(data.get(\"spuId\"));\n        Integer count = Integer.parseInt(data.get(\"count\"));\n        \n        // 扣减库存\n        spuMapper.deductStock(spuId, count);\n        IO.println(\"扣库存成功: spuId=\" + spuId + \", count=\" + count);\n    }\n}"},
              {"id": "b5", "type": "tip", "content": "Redis Stream优点：轻量、已有Redis无需新组件\n缺点：功能简单，大规模场景不如专业MQ"}
            ]
          },
          {
            "id": "l12",
            "title": "RabbitMQ实现",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "RabbitMQ是专业消息队列，功能完善\n支持消息确认、持久化、死信队列"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "Docker启动RabbitMQ", "code": "docker run -d --name rabbitmq \\\n  -p 5672:5672 -p 15672:15672 \\\n  rabbitmq:management\n\n# 访问管理界面: http://localhost:15672\n# 账号密码: guest / guest"},
              {"id": "b3", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-amqp</artifactId>\n</dependency>"},
              {"id": "b4", "type": "code", "language": "yaml", "filename": "application.yml", "code": "spring:\n  rabbitmq:\n    host: localhost\n    port: 5672\n    username: guest\n    password: guest"},
              {"id": "b5", "type": "code", "language": "java", "filename": "RabbitConfig.java", "code": "@Configuration\npublic class RabbitConfig {\n    @Bean\n    public Queue stockQueue() {\n        return new Queue(\"stock.deduct\", true);  // 持久化队列\n    }\n}"},
              {"id": "b6", "type": "code", "language": "java", "filename": "StockProducer.java", "code": "@Service\npublic class StockProducer {\n    @Autowired\n    RabbitTemplate rabbit;\n    \n    public void sendDeduct(Integer spuId, Integer count) {\n        Map<String, Integer> msg = Map.of(\"spuId\", spuId, \"count\", count);\n        rabbit.convertAndSend(\"stock.deduct\", msg);\n        IO.println(\"发送扣库存消息: \" + msg);\n    }\n}"},
              {"id": "b7", "type": "code", "language": "java", "filename": "StockConsumer.java", "code": "@Component\npublic class StockConsumer {\n    @Autowired\n    SpuMapper spuMapper;\n    \n    @RabbitListener(queues = \"stock.deduct\")\n    public void onMessage(Map<String, Integer> msg) {\n        Integer spuId = msg.get(\"spuId\");\n        Integer count = msg.get(\"count\");\n        \n        spuMapper.deductStock(spuId, count);\n        IO.println(\"扣库存成功: spuId=\" + spuId + \", count=\" + count);\n    }\n}"},
              {"id": "b8", "type": "tip", "content": "@RabbitListener监听队列，消息来了自动消费\n消息持久化到磁盘，重启不丢失"}
            ]
          },
          {
            "id": "l13",
            "title": "两种方式对比",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["", "Redis Stream", "RabbitMQ"], "rows": [["部署复杂度", "低（复用Redis）", "中（需新组件）"], ["功能", "基础", "完善（确认/重试/死信）"], ["性能", "极高", "高"], ["持久化", "支持", "支持（更可靠）"], ["消息确认", "手动ACK", "自动/手动ACK"], ["适用场景", "简单场景", "生产环境"]]},
              {"id": "b2", "type": "tip", "content": "简单场景/已有Redis → Redis Stream\n生产环境/复杂需求 → RabbitMQ"}
            ]
          },
          {
            "id": "l14",
            "title": "为什么需要定时任务",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "商城常见定时任务："},
              {"id": "b2", "type": "list", "items": ["订单超时30分钟未支付，自动取消", "每日凌晨2点统计销售数据", "每小时同步商品到ES", "定时清理过期优惠券"]},
              {"id": "b3", "type": "table", "headers": ["方案", "缺点"], "rows": [["@Scheduled", "单机，重启丢失，无管理界面"], ["Quartz", "配置复杂，集群支持差"], ["XXL-Job", "推荐！可视化、分布式、故障转移"]]}
            ]
          },
          {
            "id": "l15",
            "title": "XXL-Job部署",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "Docker启动XXL-Job", "code": "# 创建数据库\nmysql -e \"CREATE DATABASE xxl_job\"\nmysql xxl_job < tables_xxl_job.sql\n\n# 启动调度中心\ndocker run -d --name xxl-job-admin \\\n  -p 8088:8080 \\\n  -e PARAMS=\"--spring.datasource.url=jdbc:mysql://host.docker.internal:3306/xxl_job \\\n              --spring.datasource.username=root \\\n              --spring.datasource.password=123456\" \\\n  xuxueli/xxl-job-admin:2.4.0\n\n# 访问 http://localhost:8088/xxl-job-admin\n# 账号: admin  密码: 123456"},
              {"id": "b2", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>com.xuxueli</groupId>\n    <artifactId>xxl-job-core</artifactId>\n    <version>2.4.0</version>\n</dependency>"},
              {"id": "b3", "type": "code", "language": "yaml", "filename": "application.yml", "code": "xxl:\n  job:\n    admin:\n      addresses: http://localhost:8088/xxl-job-admin\n    executor:\n      appname: mall-job\n      port: 9999"}
            ]
          },
          {
            "id": "l16",
            "title": "订单超时取消",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "XxlJobConfig.java", "code": "@Configuration\npublic class XxlJobConfig {\n    @Value(\"${xxl.job.admin.addresses}\") private String adminAddresses;\n    @Value(\"${xxl.job.executor.appname}\") private String appname;\n    @Value(\"${xxl.job.executor.port}\") private int port;\n    \n    @Bean\n    public XxlJobSpringExecutor xxlJobExecutor() {\n        XxlJobSpringExecutor executor = new XxlJobSpringExecutor();\n        executor.setAdminAddresses(adminAddresses);\n        executor.setAppname(appname);\n        executor.setPort(port);\n        return executor;\n    }\n}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "OrderJob.java", "code": "@Component\npublic class OrderJob {\n    \n    @XxlJob(\"cancelTimeoutOrder\")\n    public void cancelTimeoutOrder() {\n        // 查找30分钟前未支付的订单\n        LocalDateTime timeout = LocalDateTime.now().minusMinutes(30);\n        List<Order> orders = new Order().selectList(\n            new QueryWrapper<Order>()\n                .eq(\"status\", 0)\n                .lt(\"created_at\", timeout.toString())\n        );\n        \n        for (Order order : orders) {\n            order.status = -1;  // 已取消\n            order.updateById();\n            \n            // 回滚库存\n            Spu spu = new Spu().selectById(order.spuId);\n            spu.stock += order.spuCount;\n            spu.updateById();\n            \n            XxlJobHelper.log(\"取消超时订单: \" + order.id);\n        }\n    }\n}"},
              {"id": "b3", "type": "text", "content": "在XXL-Job管理界面配置：\n1. 执行器管理 → 新增 mall-job\n2. 任务管理 → 新增 cancelTimeoutOrder\n3. Cron: 0 */5 * * * ? (每5分钟执行)"},
              {"id": "b4", "type": "tip", "content": "XXL-Job支持在线查看日志、手动触发、故障转移\n多实例部署时只有一个实例会执行（防止重复）"}
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "营销活动",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "秒杀业务分析",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "秒杀特点：限时、限量、超低价\n技术挑战：瞬间高并发、防止超卖"},
              {"id": "b2", "type": "list", "items": ["1. 10点整开抢，瞬间10万人涌入", "2. 100件库存，不能卖出101件", "3. 同一用户只能买1件", "4. 防止机器人刷单"]},
              {"id": "b3", "type": "code", "language": "sql", "filename": "activity.sql", "code": "-- 活动表（统一管理秒杀/折扣/拼团）\ncreate table activity (\n    id bigint primary key auto_increment,\n    type int not null,              -- 1秒杀 2折扣 3拼团\n    spu_id bigint not null,         -- 关联商品\n    shop_id bigint,                 -- 所属商家\n    activity_price decimal(10,2),   -- 活动价\n    original_price decimal(10,2),   -- 原价\n    stock int,                      -- 活动库存\n    limit_num int default 1,        -- 每人限购\n    group_size int,                 -- 成团人数（拼团用）\n    start_time datetime,\n    end_time datetime,\n    status int default 0            -- 0未开始 1进行中 2已结束\n);\n\n-- 活动订单表（防重复抢购）\ncreate table activity_order (\n    id bigint primary key auto_increment,\n    activity_id bigint,\n    user_id bigint,\n    order_id bigint,\n    created_at datetime,\n    unique key uk_user_activity (user_id, activity_id)\n);"},
              {"id": "b4", "type": "tip", "content": "uk_user_activity唯一索引：\n数据库层面保证同一用户同一活动只能下一单"}
            ]
          },
          {
            "id": "l2",
            "title": "基础秒杀（有超卖问题）",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "先看一个有问题的实现，理解超卖是怎么发生的："},
              {"id": "b2", "type": "code", "language": "java", "filename": "SeckillController.java(有超卖问题)", "code": "@PostMapping(\"/seckill/{activityId}\")\npublic Result<String> seckill(@PathVariable Long activityId, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 1. 查询活动\n    Activity activity = new Activity().selectById(activityId);\n    \n    // 2. 检查库存（问题在这里！）\n    if (activity.stock <= 0) {\n        return Result.err(\"已售罄\");\n    }\n    \n    // 3. 扣减库存\n    activity.stock = activity.stock - 1;\n    activity.updateById();\n    \n    // 4. 创建订单\n    // ...\n    return Result.ok(\"秒杀成功\");\n}"},
              {"id": "b3", "type": "text", "content": "超卖问题：\n线程A查库存=1 → 线程B查库存=1 → 都认为有货 → 都扣减 → 库存变-1"},
              {"id": "b4", "type": "table", "headers": ["时间", "线程A", "线程B", "库存"], "rows": [["T1", "查库存=1", "-", "1"], ["T2", "-", "查库存=1", "1"], ["T3", "库存-1", "-", "0"], ["T4", "-", "库存-1", "-1（超卖！）"]]}
            ]
          },
          {
            "id": "l3",
            "title": "方案1：悲观锁",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "悲观锁思想：假设一定会冲突，先锁住再操作\n实现方式：SELECT ... FOR UPDATE"},
              {"id": "b2", "type": "code", "language": "java", "filename": "ActivityMapper.java", "code": "public interface ActivityMapper extends BaseMapper<Activity> {\n    \n    @Select(\"SELECT * FROM activity WHERE id = #{id} FOR UPDATE\")\n    Activity selectForUpdate(Long id);\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "SeckillController.java(悲观锁)", "code": "@Transactional\n@PostMapping(\"/seckill/{activityId}\")\npublic Result<String> seckill(@PathVariable Long activityId, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 1. 悲观锁查询（其他线程会等待）\n    Activity activity = activityMapper.selectForUpdate(activityId);\n    \n    // 2. 检查库存\n    if (activity.stock <= 0) {\n        return Result.err(\"已售罄\");\n    }\n    \n    // 3. 扣减库存\n    activity.stock = activity.stock - 1;\n    activity.updateById();\n    \n    // 4. 创建活动订单\n    ActivityOrder order = new ActivityOrder();\n    order.activityId = activityId;\n    order.userId = userId;\n    order.insert();\n    \n    return Result.ok(\"秒杀成功\");\n}"},
              {"id": "b4", "type": "table", "headers": ["优点", "缺点"], "rows": [["实现简单", "性能差，所有请求排队"], ["绝对安全", "数据库压力大"], ["适合低并发", "高并发时响应慢"]]},
              {"id": "b5", "type": "tip", "content": "悲观锁适合：并发量不高、对一致性要求极高的场景\n秒杀场景并发太高，悲观锁会成为瓶颈"}
            ]
          },
          {
            "id": "l4",
            "title": "方案2：乐观锁",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "乐观锁思想：假设不会冲突，更新时检查\n实现方式：stock > 0 条件更新"},
              {"id": "b2", "type": "code", "language": "java", "filename": "ActivityMapper.java", "code": "public interface ActivityMapper extends BaseMapper<Activity> {\n    \n    // 乐观锁扣库存：stock > 0 才能扣减\n    @Update(\"UPDATE activity SET stock = stock - 1 \" +\n            \"WHERE id = #{id} AND stock > 0\")\n    int deductStock(Long id);\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "SeckillController.java(乐观锁)", "code": "@PostMapping(\"/seckill/{activityId}\")\npublic Result<String> seckill(@PathVariable Long activityId, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 1. 乐观锁扣库存（原子操作）\n    int rows = activityMapper.deductStock(activityId);\n    if (rows == 0) {\n        return Result.err(\"已售罄\");\n    }\n    \n    // 2. 创建活动订单\n    try {\n        ActivityOrder order = new ActivityOrder();\n        order.activityId = activityId;\n        order.userId = userId;\n        order.insert();\n    } catch (DuplicateKeyException e) {\n        // 唯一索引冲突，说明重复下单，回滚库存\n        activityMapper.addStock(activityId);\n        return Result.err(\"您已经抢过了\");\n    }\n    \n    return Result.ok(\"秒杀成功\");\n}"},
              {"id": "b4", "type": "text", "content": "为什么乐观锁不会超卖？\nstock > 0 和 stock - 1 在同一条SQL中原子执行"},
              {"id": "b5", "type": "table", "headers": ["时间", "线程A", "线程B", "库存"], "rows": [["T1", "UPDATE stock-1 WHERE stock>0", "-", "1→0"], ["T2", "-", "UPDATE stock-1 WHERE stock>0", "条件不满足，返回0"]]},
              {"id": "b6", "type": "tip", "content": "乐观锁优点：无锁等待，性能比悲观锁好\n缺点：高并发时大量请求打到数据库"}
            ]
          },
          {
            "id": "l5",
            "title": "方案3：Redis预扣库存",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：乐观锁虽然不超卖，但每个请求都打到数据库\n解决：用Redis预扣库存，拦截无效请求"},
              {"id": "b2", "type": "list", "items": ["1. 活动开始前，库存加载到Redis", "2. 请求来了先扣Redis库存", "3. Redis扣成功才去扣数据库", "4. 库存为0直接拒绝，不访问数据库"]},
              {"id": "b3", "type": "code", "language": "java", "filename": "SeckillService.java(Redis预扣)", "code": "// 活动开始前，预热库存到Redis\npublic void warmUp(Long activityId) {\n    Activity activity = new Activity().selectById(activityId);\n    String key = \"seckill:stock:\" + activityId;\n    redis.opsForValue().set(key, String.valueOf(activity.stock));\n}\n\n@PostMapping(\"/seckill/{activityId}\")\npublic Result<String> seckill(@PathVariable Long activityId, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    String stockKey = \"seckill:stock:\" + activityId;\n    \n    // 1. Redis预扣库存（原子操作）\n    Long remain = redis.opsForValue().decrement(stockKey);\n    if (remain < 0) {\n        // 库存不足，恢复\n        redis.opsForValue().increment(stockKey);\n        return Result.err(\"已售罄\");\n    }\n    \n    // 2. 检查是否重复下单\n    String orderKey = \"seckill:order:\" + activityId + \":\" + userId;\n    Boolean isNew = redis.opsForValue().setIfAbsent(orderKey, \"1\");\n    if (!isNew) {\n        redis.opsForValue().increment(stockKey);  // 恢复库存\n        return Result.err(\"您已经抢过了\");\n    }\n    \n    // 3. 扣数据库库存（乐观锁兖底）\n    int rows = activityMapper.deductStock(activityId);\n    if (rows == 0) {\n        return Result.err(\"已售罄\");\n    }\n    \n    // 4. 创建订单\n    // ...\n    return Result.ok(\"秒杀成功\");\n}"},
              {"id": "b4", "type": "tip", "content": "Redis单机10万QPS，大部分请求在Redis层被拦截\n只有少量有效请求才会打到数据库"}
            ]
          },
          {
            "id": "l6",
            "title": "方案4：Redis令牌桶限流",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "令牌桶算法：\n1. 桶里放N个令牌（=库存数）\n2. 每个请求必须先拿到令牌才能继续\n3. 拿不到令牌直接拒绝"},
              {"id": "b2", "type": "code", "language": "java", "filename": "TokenBucket.java", "code": "@Service\npublic class TokenBucket {\n    @Autowired\n    StringRedisTemplate redis;\n    \n    // 初始化令牌桶（活动开始前调用）\n    public void init(Long activityId, int stock) {\n        String key = \"seckill:token:\" + activityId;\n        // 用List模拟令牌桶，放入stock个令牌\n        for (int i = 0; i < stock; i++) {\n            redis.opsForList().rightPush(key, String.valueOf(i));\n        }\n    }\n    \n    // 获取令牌（原子操作）\n    public boolean acquire(Long activityId) {\n        String key = \"seckill:token:\" + activityId;\n        // LPOP取出一个令牌，取到就返回true\n        String token = redis.opsForList().leftPop(key);\n        return token != null;\n    }\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "SeckillController.java(令牌桶)", "code": "@Autowired\nTokenBucket tokenBucket;\n\n@PostMapping(\"/seckill/{activityId}\")\npublic Result<String> seckill(@PathVariable Long activityId, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 1. 获取令牌（拿不到直接返回）\n    if (!tokenBucket.acquire(activityId)) {\n        return Result.err(\"已售罄\");\n    }\n    \n    // 2. 拿到令牌，继续处理...\n    // 检查重复、扣库存、创建订单\n    return Result.ok(\"秒杀成功\");\n}"},
              {"id": "b4", "type": "tip", "content": "令牌桶 vs 预扣库存：\n• 预扣库存：decrement可能变负数，需要额外判断\n• 令牌桶：LPOP天然原子，拿完就没了，更优雅"}
            ]
          },
          {
            "id": "l7",
            "title": "方案5：Lua脚本原子操作",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：预扣库存和检查重复是两步操作，可能不一致\n解决：用Lua脚本保证原子性"},
              {"id": "b2", "type": "code", "language": "java", "filename": "SeckillLua.java", "code": "@Service\npublic class SeckillLua {\n    \n    private static final String SECKILL_SCRIPT = \n        \"-- 检查是否已抢过\\n\" +\n        \"if redis.call('sismember', KEYS[2], ARGV[1]) == 1 then\\n\" +\n        \"    return -1\\n\" +  // 已抢过\n        \"end\\n\" +\n        \"-- 扣减库存\\n\" +\n        \"local stock = tonumber(redis.call('get', KEYS[1]))\\n\" +\n        \"if stock <= 0 then\\n\" +\n        \"    return 0\\n\" +   // 库存不足\n        \"end\\n\" +\n        \"redis.call('decr', KEYS[1])\\n\" +\n        \"redis.call('sadd', KEYS[2], ARGV[1])\\n\" +\n        \"return 1\";       // 成功\n    \n    public int seckill(Long activityId, Long userId) {\n        String stockKey = \"seckill:stock:\" + activityId;\n        String orderKey = \"seckill:orders:\" + activityId;\n        \n        Long result = redis.execute(\n            new DefaultRedisScript<>(SECKILL_SCRIPT, Long.class),\n            List.of(stockKey, orderKey),\n            userId.toString()\n        );\n        \n        return result.intValue();  // 1成功 0库存不足 -1已抢过\n    }\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "SeckillController.java(Lua)", "code": "@PostMapping(\"/seckill/{activityId}\")\npublic Result<String> seckill(@PathVariable Long activityId, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // Lua脚本原子执行：检查重复 + 扣库存\n    int result = seckillLua.seckill(activityId, userId);\n    \n    if (result == -1) return Result.err(\"您已经抢过了\");\n    if (result == 0) return Result.err(\"已售罄\");\n    \n    // 异步创建订单（MQ）\n    rabbitTemplate.convertAndSend(\"seckill.order\", \n        Map.of(\"activityId\", activityId, \"userId\", userId));\n    \n    return Result.ok(\"秒杀成功，订单生成中\");\n}"},
              {"id": "b4", "type": "tip", "content": "Lua脚本在Redis中原子执行，不会被其他命令打断\n检查重复+扣库存一气呵成，绝对安全"}
            ]
          },
          {
            "id": "l8",
            "title": "方案6：异步下单",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：同步创建订单太慢，阻塞响应\n解决：Redis秒杀成功后，异步创建订单"},
              {"id": "b2", "type": "list", "items": ["1. Redis扣库存成功 → 立即返回'秒杀成功'", "2. 发送消息到MQ", "3. 消费者异步创建订单、扣数据库库存", "4. 用户刷新页面查看订单"]},
              {"id": "b3", "type": "code", "language": "java", "filename": "SeckillConsumer.java", "code": "@Component\npublic class SeckillConsumer {\n    \n    @RabbitListener(queues = \"seckill.order\")\n    public void handleSeckillOrder(Map<String, Long> msg) {\n        Long activityId = msg.get(\"activityId\");\n        Long userId = msg.get(\"userId\");\n        \n        // 1. 扣数据库库存（兖底）\n        int rows = activityMapper.deductStock(activityId);\n        if (rows == 0) {\n            // 异常情况，记录日志\n            log.error(\"数据库库存扣减失败: {}\", activityId);\n            return;\n        }\n        \n        // 2. 创建活动订单\n        ActivityOrder activityOrder = new ActivityOrder();\n        activityOrder.activityId = activityId;\n        activityOrder.userId = userId;\n        activityOrder.insert();\n        \n        // 3. 创建业务订单\n        Activity activity = new Activity().selectById(activityId);\n        Order order = new Order();\n        order.userId = userId;\n        order.spuId = activity.spuId;\n        order.total = activity.activityPrice;\n        order.status = 0;\n        order.insert();\n        \n        activityOrder.orderId = order.id;\n        activityOrder.updateById();\n    }\n}"},
              {"id": "b4", "type": "tip", "content": "异步下单优势：\n• 响应快：用户秒级得到结果\n• 削峰：订单创建压力分散\n• 解耦：秒杀和订单系统分离"}
            ]
          },
          {
            "id": "l9",
            "title": "方案对比总结",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["方案", "防超卖", "性能", "复杂度", "适用场景"], "rows": [["悲观锁FOR UPDATE", "安全", "低", "简单", "低并发"], ["乐观锁stock>0", "安全", "中", "简单", "中并发"], ["Redis预扣库存", "安全", "高", "中", "高并发"], ["Redis令牌桶", "安全", "高", "中", "高并发"], ["Lua脚本", "安全", "极高", "中", "超高并发"], ["Lua+异步下单", "安全", "极高", "较高", "生产环境"]]},
              {"id": "b2", "type": "text", "content": "生产环境推荐方案：Lua脚本 + MQ异步下单"},
              {"id": "b3", "type": "list", "items": ["1. Nginx限流：每秒最多放行N个请求", "2. Lua脚本：原子检查重复+扣Redis库存", "3. MQ异步：削峰填谷，异步创建订单", "4. 数据库乐观锁：最终兜底，保证不超卖"]},
              {"id": "b4", "type": "tip", "content": "秒杀核心思想：\n• 能拦截的尽早拦截（Nginx→Redis→DB）\n• 能异步的尽量异步（MQ削峰）\n• 最终一致性保证（数据库兜底）"}
            ]
          },
          {
            "id": "l10",
            "title": "优惠券系统",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "sql", "filename": "coupon.sql", "code": "-- 优惠券模板\ncreate table coupon (\n    id bigint primary key,\n    name varchar(100),          -- 名称：满100减20\n    type int,                   -- 1满减 2折扣 3无门槛\n    threshold decimal(10,2),    -- 满多少可用\n    discount decimal(10,2),     -- 减多少/折扣比例\n    total int,                  -- 发放总量\n    remain int,                 -- 剩余数量\n    start_time datetime,\n    end_time datetime\n);\n\n-- 用户领取记录\ncreate table user_coupon (\n    id bigint primary key,\n    user_id bigint,\n    coupon_id bigint,\n    status int default 0,       -- 0未使用 1已使用 2已过期\n    order_id bigint\n);"},
              {"id": "b2", "type": "code", "language": "java", "filename": "CouponController.java", "code": "// 领取优惠券（乐观锁防超领）\n@PostMapping(\"/coupon/receive/{couponId}\")\npublic Result<String> receive(@PathVariable Long couponId, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 1. 检查是否已领取\n    UserCoupon exist = new UserCoupon().selectOne(\n        new QueryWrapper<UserCoupon>()\n            .eq(\"user_id\", userId).eq(\"coupon_id\", couponId)\n    );\n    if (exist != null) return Result.err(\"已领取过\");\n    \n    // 2. 乐观锁扣库存\n    int rows = couponMapper.decreaseRemain(couponId);\n    if (rows == 0) return Result.err(\"已领完\");\n    \n    // 3. 创建领取记录\n    UserCoupon uc = new UserCoupon();\n    uc.userId = userId;\n    uc.couponId = couponId;\n    uc.insert();\n    return Result.ok(\"领取成功\");\n}"},
              {"id": "b3", "type": "tip", "content": "优惠券类型：\n• 满减券：满100减20\n• 折扣券：8折\n• 无门槛券：直减10元"}
            ]
          },
          {
            "id": "l11",
            "title": "拼团功能",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "对标拼多多：多人成团享低价"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "group_order.sql", "code": "-- 拼团记录表（活动用activity表，type=3）\ncreate table group_order (\n    id bigint primary key auto_increment,\n    activity_id bigint,           -- 关联activity表\n    leader_user_id bigint,        -- 团长\n    current_size int default 1,   -- 当前人数\n    status int,                   -- 0拼团中 1已成团 2已失败\n    expire_time datetime          -- 拼团截止时间\n);\n\n-- 拼团成员表\ncreate table group_member (\n    id bigint primary key auto_increment,\n    group_order_id bigint,\n    user_id bigint,\n    order_id bigint,\n    created_at datetime\n);"},
              {"id": "b3", "type": "list", "items": ["1. 用户发起拼团，成为团长", "2. 分享链接给好友", "3. 好友参团，current_size+1", "4. 人满成团，各自发货", "5. 超时未成团，自动退款"]},
              {"id": "b4", "type": "tip", "content": "拼团活动存activity表（type=3），group_size存成团人数\n拼团 vs 秒杀：\n• 秒杀：抢库存，先到先得\n• 拼团：凑人数，社交裂变"}
            ]
          },
          {
            "id": "l12",
            "title": "积分签到",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "SignController.java", "code": "// 每日签到\n@PostMapping(\"/sign\")\npublic Result<Integer> sign(HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    String today = LocalDate.now().toString();\n    String key = \"sign:\" + userId + \":\" + today;\n    \n    // 1. 检查今日是否已签到\n    if (redis.hasKey(key)) {\n        return Result.err(\"今日已签到\");\n    }\n    \n    // 2. 计算连续签到天数，奖励递增\n    int days = getContinuousDays(userId);\n    int points = Math.min(days * 10 + 10, 100);  // 最高100分\n    \n    // 3. 增加积分\n    addPoints(userId, points);\n    redis.opsForValue().set(key, \"1\", 2, TimeUnit.DAYS);\n    \n    return Result.ok(points);\n}"},
              {"id": "b2", "type": "tip", "content": "积分玩法：\n• 签到得积分（连续签到递增）\n• 购物返积分（1元=1积分）\n• 积分抵现（100积分=1元）"}
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "商家模块",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "商家入驻",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "对标拼多多：商家申请入驻，平台审核后开店"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "shop.sql", "code": "-- 店铺表\ncreate table shop (\n    id bigint primary key auto_increment,\n    user_id bigint not null,          -- 商家账号\n    shop_name varchar(100),           -- 店铺名称\n    logo varchar(255),                -- 店铺头像\n    description text,                 -- 店铺简介\n    contact_phone varchar(20),        -- 联系电话\n    status int default 0,             -- 0待审核 1已通过 2已拒绝\n    reject_reason varchar(200),       -- 拒绝原因\n    created_at datetime\n);"},
              {"id": "b3", "type": "list", "items": ["1. 商家注册账号", "2. 提交入驻申请（店铺名称、简介、联系方式）", "3. 平台审核（通过/拒绝）", "4. 审核通过，开始上架商品"]}
            ]
          },
          {
            "id": "l2",
            "title": "入驻申请与审核",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "ShopController.java", "code": "// 商家申请入驻\n@PostMapping(\"/shop/apply\")\npublic Result<Shop> apply(@RequestBody ShopApplyReq req, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    \n    // 检查是否已申请\n    Shop exist = new Shop().selectOne(\n        new QueryWrapper<Shop>().eq(\"user_id\", userId)\n    );\n    if (exist != null) {\n        return Result.err(\"您已申请过，请勿重复提交\");\n    }\n    \n    Shop shop = new Shop();\n    shop.userId = userId;\n    shop.shopName = req.shopName;\n    shop.logo = req.logo;\n    shop.description = req.description;\n    shop.contactPhone = req.contactPhone;\n    shop.status = 0;  // 待审核\n    shop.insert();\n    \n    return Result.ok(shop);\n}\n\n// 查询入驻状态\n@GetMapping(\"/shop/status\")\npublic Result<Shop> status(HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    Shop shop = new Shop().selectOne(\n        new QueryWrapper<Shop>().eq(\"user_id\", userId)\n    );\n    return Result.ok(shop);\n}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "AdminShopController.java", "code": "// 平台审核入驻申请\n@PostMapping(\"/admin/shop/audit/{id}\")\npublic Result<String> audit(\n    @PathVariable Long id,\n    @RequestParam Integer status,  // 1通过 2拒绝\n    @RequestParam(required = false) String rejectReason\n) {\n    Shop shop = new Shop().selectById(id);\n    if (shop == null) {\n        return Result.err(\"店铺不存在\");\n    }\n    \n    shop.status = status;\n    if (status == 2) {\n        shop.rejectReason = rejectReason;\n    }\n    shop.updateById();\n    \n    return Result.ok(\"审核完成\");\n}"},
              {"id": "b3", "type": "tip", "content": "状态流转：\n待审核(0) → 已通过(1) / 已拒绝(2)"}
            ]
          },
          {
            "id": "l3",
            "title": "商品上架下架",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "商家上架商品，用户才能看到\n商品表新增 shop_id 关联店铺"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "spu.sql", "code": "-- 商品表新增字段\nalter table spu add column shop_id bigint;           -- 所属店铺\nalter table spu add column on_sale int default 0;    -- 0下架 1上架"},
              {"id": "b3", "type": "code", "language": "java", "filename": "ShopSpuController.java", "code": "// 商家上架商品\n@PostMapping(\"/shop/spu/add\")\npublic Result<Spu> addSpu(@RequestBody SpuReq req, HttpServletRequest request) {\n    Shop shop = getCurrentShop(request);\n    \n    Spu spu = new Spu();\n    spu.shopId = shop.id;\n    spu.spuName = req.spuName;\n    spu.spuPrice = req.spuPrice;\n    spu.spuImage = req.spuImage;\n    spu.description = req.description;\n    spu.stock = req.stock;\n    spu.onSale = 0;  // 默认下架\n    spu.insert();\n    \n    return Result.ok(spu);\n}\n\n// 上架/下架\n@PostMapping(\"/shop/spu/toggle/{id}\")\npublic Result<String> toggleOnSale(@PathVariable Long id, HttpServletRequest request) {\n    Shop shop = getCurrentShop(request);\n    Spu spu = new Spu().selectById(id);\n    \n    // 验证是自己的商品\n    if (!spu.shopId.equals(shop.id)) {\n        return Result.err(\"无权限操作\");\n    }\n    \n    spu.onSale = spu.onSale == 1 ? 0 : 1;\n    spu.updateById();\n    \n    return Result.ok(spu.onSale == 1 ? \"已上架\" : \"已下架\");\n}\n\n// 商家商品列表\n@GetMapping(\"/shop/spu/list\")\npublic Result<List<Spu>> listMySpu(HttpServletRequest request) {\n    Shop shop = getCurrentShop(request);\n    List<Spu> list = new Spu().selectList(\n        new QueryWrapper<Spu>().eq(\"shop_id\", shop.id)\n    );\n    return Result.ok(list);\n}"},
              {"id": "b4", "type": "tip", "content": "用户端查询商品时，只查 on_sale = 1 的\n商家可以看到自己所有商品（包括下架的）"}
            ]
          },
          {
            "id": "l4",
            "title": "订单发货",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "虚拟产品为主：点击即发货，无需物流"},
              {"id": "b2", "type": "code", "language": "java", "filename": "ShopOrderController.java", "code": "// 商家查看待发货订单\n@GetMapping(\"/shop/order/pending\")\npublic Result<List<Order>> pendingOrders(HttpServletRequest request) {\n    Shop shop = getCurrentShop(request);\n    List<Order> list = new Order().selectList(\n        new QueryWrapper<Order>()\n            .eq(\"shop_id\", shop.id)\n            .eq(\"status\", 1)  // 已支付待发货\n    );\n    return Result.ok(list);\n}\n\n// 一键发货（虚拟产品）\n@PostMapping(\"/shop/order/ship/{orderId}\")\npublic Result<String> ship(@PathVariable Long orderId, HttpServletRequest request) {\n    Shop shop = getCurrentShop(request);\n    Order order = new Order().selectById(orderId);\n    \n    // 验证权限\n    if (!order.shopId.equals(shop.id)) {\n        return Result.err(\"无权限操作\");\n    }\n    if (order.status != 1) {\n        return Result.err(\"订单状态异常\");\n    }\n    \n    // 虚拟产品直接完成\n    order.status = 3;  // 已完成\n    order.updateById();\n    \n    return Result.ok(\"发货成功\");\n}"},
              {"id": "b3", "type": "table", "headers": ["订单状态", "说明"], "rows": [["0", "待支付"], ["1", "已支付，待发货"], ["3", "已完成"]]},
              {"id": "b4", "type": "tip", "content": "虚拟产品简化流程：\n待支付(0) → 已支付(1) → 已完成(3)\n无需待发货、待收货等中间状态"}
            ]
          }
        ]
      },
      {
        "id": "ch8",
        "title": "API开放平台",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "开放平台设计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "开放平台允许第三方应用调用商品、订单、物流接口"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "open_api.sql", "code": "-- 应用表\ncreate table open_app (\n    id bigint primary key,\n    app_name varchar(100),\n    app_key varchar(64),        -- 应用标识\n    app_secret varchar(128),    -- 密钥（签名验签用）\n    private_key text,           -- RSA私钥（非对称加密用）\n    public_key text,            -- RSA公钥\n    status int default 1,       -- 1启用 0禁用\n    rate_limit int default 100, -- QPS限流\n    created_at datetime\n);\n\n-- API调用日志\ncreate table api_log (\n    id bigint primary key,\n    app_key varchar(64),\n    api_path varchar(200),\n    request_body text,\n    response_body text,\n    cost_time int,              -- 耗时ms\n    created_at datetime\n);"},
              {"id": "b3", "type": "table", "headers": ["认证方式", "说明", "适用场景"], "rows": [["签名验签", "HMAC-SHA256签名，简单高效", "服务端调用"], ["RSA私钥", "非对称加密，安全性更高", "敏感数据传输"]]}
            ]
          },
          {
            "id": "l2",
            "title": "签名验签实现",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 将请求参数按key排序拼接", "2. 拼接app_secret", "3. 进行HMAC-SHA256签名", "4. 将签名放入请求头或参数"]},
              {"id": "b2", "type": "code", "language": "java", "filename": "SignUtil.java", "code": "// 生成签名\npublic static String sign(Map<String, String> params, String appSecret) {\n    // 1. 参数按key排序\n    List<String> keys = new ArrayList<>(params.keySet());\n    Collections.sort(keys);\n    \n    // 2. 拼接成 key1=value1&key2=value2\n    StringBuilder sb = new StringBuilder();\n    for (String key : keys) {\n        if (sb.length() > 0) sb.append(\"&\");\n        sb.append(key).append(\"=\").append(params.get(key));\n    }\n    \n    // 3. 拼接appSecret\n    String content = sb.toString() + \"&secret=\" + appSecret;\n    \n    // 4. HMAC-SHA256签名\n    Mac mac = Mac.getInstance(\"HmacSHA256\");\n    mac.init(new SecretKeySpec(appSecret.getBytes(), \"HmacSHA256\"));\n    byte[] hash = mac.doFinal(content.getBytes());\n    \n    return Hex.encodeHexString(hash);\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "OpenApiInterceptor.java", "code": "// 签名验证拦截器\n@Component\npublic class OpenApiInterceptor implements HandlerInterceptor {\n    \n    @Override\n    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) {\n        String appKey = request.getHeader(\"X-App-Key\");\n        String sign = request.getHeader(\"X-Sign\");\n        String timestamp = request.getHeader(\"X-Timestamp\");\n        \n        // 1. 检查时间戳（防重放攻击，5分钟内有效）\n        long ts = Long.parseLong(timestamp);\n        if (System.currentTimeMillis() - ts > 5 * 60 * 1000) {\n            throw new RuntimeException(\"请求已过期\");\n        }\n        \n        // 2. 查询应用\n        OpenApp app = openAppService.getByAppKey(appKey);\n        if (app == null || app.status != 1) {\n            throw new RuntimeException(\"应用不存在或已禁用\");\n        }\n        \n        // 3. 验证签名\n        Map<String, String> params = getParams(request);\n        params.put(\"timestamp\", timestamp);\n        String calcSign = SignUtil.sign(params, app.appSecret);\n        if (!calcSign.equals(sign)) {\n            throw new RuntimeException(\"签名错误\");\n        }\n        \n        // 4. 限流检查\n        if (!rateLimiter.tryAcquire(appKey, app.rateLimit)) {\n            throw new RuntimeException(\"请求过于频繁\");\n        }\n        \n        return true;\n    }\n}"}
            ]
          },
          {
            "id": "l3",
            "title": "RSA私钥认证",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "RSA非对称加密：私钥签名，公钥验签\n安全性更高，适合敏感数据传输"},
              {"id": "b2", "type": "code", "language": "java", "filename": "RSAUtil.java", "code": "// 私钥签名\npublic static String signWithPrivateKey(String content, String privateKey) {\n    byte[] keyBytes = Base64.decode(privateKey);\n    PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(keyBytes);\n    KeyFactory keyFactory = KeyFactory.getInstance(\"RSA\");\n    PrivateKey key = keyFactory.generatePrivate(keySpec);\n    \n    Signature signature = Signature.getInstance(\"SHA256withRSA\");\n    signature.initSign(key);\n    signature.update(content.getBytes(\"UTF-8\"));\n    \n    return Base64.encode(signature.sign());\n}\n\n// 公钥验签\npublic static boolean verifyWithPublicKey(String content, String sign, String publicKey) {\n    byte[] keyBytes = Base64.decode(publicKey);\n    X509EncodedKeySpec keySpec = new X509EncodedKeySpec(keyBytes);\n    KeyFactory keyFactory = KeyFactory.getInstance(\"RSA\");\n    PublicKey key = keyFactory.generatePublic(keySpec);\n    \n    Signature signature = Signature.getInstance(\"SHA256withRSA\");\n    signature.initVerify(key);\n    signature.update(content.getBytes(\"UTF-8\"));\n    \n    return signature.verify(Base64.decode(sign));\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "OpenApiInterceptor.java", "code": "// RSA验签拦截器\npublic boolean verifyRSA(HttpServletRequest request, OpenApp app) {\n    String sign = request.getHeader(\"X-Sign\");\n    String timestamp = request.getHeader(\"X-Timestamp\");\n    \n    // 1. 获取请求体\n    String body = getRequestBody(request);\n    \n    // 2. 拼接待签名内容：body + timestamp\n    String content = body + \"&timestamp=\" + timestamp;\n    \n    // 3. 用应用的公钥验签\n    boolean valid = RSAUtil.verifyWithPublicKey(content, sign, app.publicKey);\n    if (!valid) {\n        throw new RuntimeException(\"RSA签名验证失败\");\n    }\n    \n    return true;\n}"},
              {"id": "b4", "type": "tip", "content": "签名 vs RSA对比：\n• 签名验签：简单高效，适合一般场景\n• RSA私钥：安全性更高，私钥不传输\n• 支付宝/微信支付都用RSA"}
            ]
          },
          {
            "id": "l4",
            "title": "开放接口示例",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "OpenSpuController.java", "code": "@Tag(name = \"开放平台-商品接口\")\n@RestController\n@RequestMapping(\"/open/spu\")\npublic class OpenSpuController {\n    \n    @Operation(summary = \"查询商品列表\")\n    @GetMapping(\"/list\")\n    public Result<Page<SpuVO>> list(\n        @RequestParam(defaultValue = \"1\") Integer pageNum,\n        @RequestParam(defaultValue = \"10\") Integer pageSize,\n        @RequestParam(required = false) Long categoryId\n    ) {\n        // 开放给第三方查询商品\n        Page<Spu> page = new Spu().selectPage(\n            new Page<>(pageNum, pageSize),\n            new QueryWrapper<Spu>()\n                .eq(categoryId != null, \"category_id\", categoryId)\n                .eq(\"status\", 1)\n        );\n        return Result.ok(convertToVO(page));\n    }\n    \n    @Operation(summary = \"查询商品详情\")\n    @GetMapping(\"/{id}\")\n    public Result<SpuVO> detail(@PathVariable Long id) {\n        Spu spu = new Spu().selectById(id);\n        return Result.ok(convertToVO(spu));\n    }\n}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "OpenOrderController.java", "code": "@Tag(name = \"开放平台-订单接口\")\n@RestController\n@RequestMapping(\"/open/order\")\npublic class OpenOrderController {\n    \n    @Operation(summary = \"查询订单状态\")\n    @GetMapping(\"/{orderNo}\")\n    public Result<OrderStatusVO> status(@PathVariable String orderNo) {\n        Order order = orderService.getByOrderNo(orderNo);\n        OrderStatusVO vo = new OrderStatusVO();\n        vo.orderNo = order.orderNo;\n        vo.status = order.status;\n        vo.statusDesc = getStatusDesc(order.status);\n        return Result.ok(vo);\n    }\n    \n    @Operation(summary = \"查询物流信息\")\n    @GetMapping(\"/{orderNo}/logistics\")\n    public Result<LogisticsInfo> logistics(@PathVariable String orderNo) {\n        Order order = orderService.getByOrderNo(orderNo);\n        return Result.ok(logisticsService.query(order.expressNo, order.expressCode));\n    }\n}"}
            ]
          },
          {
            "id": "l5",
            "title": "接口限流",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "每个应用配置不同的QPS限流，防止滥用"},
              {"id": "b2", "type": "code", "language": "java", "filename": "RateLimiterService.java", "code": "@Service\npublic class RateLimiterService {\n    \n    // 令牌桶限流（Redis实现）\n    public boolean tryAcquire(String appKey, int qps) {\n        String key = \"ratelimit:\" + appKey;\n        String luaScript = \"\" +\n            \"local tokens = tonumber(redis.call('GET', KEYS[1]) or ARGV[1])\\n\" +\n            \"if tokens > 0 then\\n\" +\n            \"    redis.call('SET', KEYS[1], tokens - 1, 'EX', 1)\\n\" +\n            \"    return 1\\n\" +\n            \"else\\n\" +\n            \"    return 0\\n\" +\n            \"end\";\n        \n        Long result = redis.execute(\n            new DefaultRedisScript<>(luaScript, Long.class),\n            List.of(key),\n            String.valueOf(qps)\n        );\n        \n        return result == 1;\n    }\n}"},
              {"id": "b3", "type": "tip", "content": "限流策略：\n• 免费版：10 QPS\n• 基础版：100 QPS\n• 企业版：1000 QPS"}
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "平台管理后台",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "运营数据统计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "平台管理后台的数据大盘，展示核心运营指标"},
              {"id": "b2", "type": "table", "headers": ["指标", "说明"], "rows": [["GMV", "总成交额"], ["订单量", "订单总数"], ["用户数", "注册用户总数"], ["商家数", "入驻商家数"], ["客单价", "GMV/订单量"], ["转化率", "下单用户/访问用户"]]}
            ]
          },
          {
            "id": "l2",
            "title": "实时统计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "DashboardController.java", "code": "@GetMapping(\"/realtime\")\npublic Result<RealtimeData> realtime() {\n    RealtimeData data = new RealtimeData();\n    \n    // 今日数据\n    String today = LocalDate.now().toString();\n    data.todayGmv = orderMapper.sumPayAmount(today);\n    data.todayOrders = orderMapper.countByDate(today);\n    data.todayUsers = userMapper.countByDate(today);\n    \n    // 实时在线（Redis记录）\n    data.onlineUsers = redis.opsForSet().size(\"online:users\");\n    \n    return Result.ok(data);\n}"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "stats.sql", "code": "-- 今日GMV\nSELECT COALESCE(SUM(pay_amount), 0) AS gmv\nFROM `order`\nWHERE DATE(pay_time) = CURDATE()\n  AND status >= 2;\n\n-- 今日订单量\nSELECT COUNT(*) AS order_count\nFROM `order`\nWHERE DATE(created_at) = CURDATE();\n\n-- 近7天趋势\nSELECT DATE(created_at) AS date,\n       COUNT(*) AS order_count,\n       SUM(pay_amount) AS gmv\nFROM `order`\nWHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 7 DAY)\nGROUP BY DATE(created_at)\nORDER BY date;"}
            ]
          },
          {
            "id": "l3",
            "title": "商品排行榜",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "RankController.java", "code": "// 销量排行榜（Redis ZSET实现）\n@GetMapping(\"/rank/sales\")\npublic Result<List<RankItem>> salesRank() {\n    String key = \"rank:sales:\" + LocalDate.now();\n    \n    // 取Top10\n    Set<ZSetOperations.TypedTuple<String>> tuples = redis.opsForZSet()\n        .reverseRangeWithScores(key, 0, 9);\n    \n    List<RankItem> list = new ArrayList<>();\n    int rank = 1;\n    for (var tuple : tuples) {\n        RankItem item = new RankItem();\n        item.rank = rank++;\n        item.spuId = Long.parseLong(tuple.getValue());\n        item.sales = tuple.getScore().intValue();\n        // 查询商品信息\n        Spu spu = new Spu().selectById(item.spuId);\n        item.name = spu.name;\n        item.price = spu.price;\n        list.add(item);\n    }\n    \n    return Result.ok(list);\n}\n\n// 下单时更新销量\npublic void updateSalesRank(Long spuId, int quantity) {\n    String key = \"rank:sales:\" + LocalDate.now();\n    redis.opsForZSet().incrementScore(key, spuId.toString(), quantity);\n    // 设置过期时间\n    redis.expire(key, 2, TimeUnit.DAYS);\n}"},
              {"id": "b2", "type": "tip", "content": "排行榜类型：\n• 销量排行（实时）\n• 搜索热词（实时）\n• 店铺排行（按GMV）\n• 商品好评率排行"}
            ]
          },
          {
            "id": "l4",
            "title": "商家数据看板",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "商家后台的数据统计，只能看自己店铺数据"},
              {"id": "b2", "type": "code", "language": "java", "filename": "ShopDashboardController.java", "code": "@GetMapping(\"/shop/dashboard\")\npublic Result<ShopDashboard> shopDashboard(HttpServletRequest request) {\n    Shop shop = getCurrentShop(request);\n    ShopDashboard data = new ShopDashboard();\n    \n    // 今日数据\n    String today = LocalDate.now().toString();\n    data.todayGmv = orderMapper.sumByShop(shop.id, today);\n    data.todayOrders = orderMapper.countByShop(shop.id, today);\n    \n    // 待处理\n    data.pendingOrders = orderMapper.countPending(shop.id);\n    data.pendingAftersales = aftersaleMapper.countPending(shop.id);\n    \n    // 商品统计\n    data.totalSpus = spuMapper.countByShop(shop.id);\n    data.onSaleSpus = spuMapper.countOnSale(shop.id);\n    \n    // 本月结算\n    data.monthIncome = settlementMapper.sumByMonth(shop.id);\n    \n    return Result.ok(data);\n}"},
              {"id": "b3", "type": "table", "headers": ["指标", "商家关注点"], "rows": [["今日GMV", "今天卖了多少钱"], ["待发货订单", "需要处理的订单"], ["待处理售后", "需要审核的退款"], ["本月结算", "能提现多少钱"]]}
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "即时通讯",
        "lessons": [
          {
            "id": "l1",
            "title": "大模型基础",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "大语言模型(LLM)：GPT、Claude、通义千问等\n能理解自然语言、生成回复，但不了解你的业务数据"},
              {"id": "b2", "type": "text", "content": "商城客服需求：\n1. 用户问\"我的订单到哪了\"\n2. 用户问\"这个商品支持7天退货吗\"\n3. 用户问\"怎么申请退款\""},
              {"id": "b3", "type": "text", "content": "纯大模型的问题：\n• 不知道用户的订单信息\n• 不知道商品的退货政策\n• 回答可能瞎编（幻觉）"},
              {"id": "b4", "type": "tip", "content": "解决方案：RAG\n让大模型先检索相关知识，再生成回答"}
            ]
          },
          {
            "id": "l2",
            "title": "RAG原理",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "RAG = Retrieval Augmented Generation（检索增强生成）"},
              {"id": "b2", "type": "list", "items": ["1. 用户提问：\"这个商品支持退货吗\"", "2. 检索知识库：找到相关的退货政策文档", "3. 拼接Prompt：把检索结果+用户问题一起给大模型", "4. 大模型生成：基于真实文档回答，减少幻觉"]},
              {"id": "b3", "type": "code", "language": "text", "filename": "RAG流程", "code": "用户问题\n    ↓\n[向量化] → 向量数据库检索 → 相关文档\n    ↓                           ↓\n    └───────→ 拼接Prompt ←──────┘\n                  ↓\n              大模型生成\n                  ↓\n              返回答案"},
              {"id": "b4", "type": "table", "headers": ["对比项", "纯大模型", "RAG"], "rows": [["知识来源", "训练数据（可能过时）", "实时检索知识库"], ["准确性", "可能幻觉", "基于真实文档"], ["可控性", "难控制", "可控制知识范围"]]}
            ]
          },
          {
            "id": "l3",
            "title": "向量与Embedding",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：如何检索\"语义相似\"的文档？\n\"退货政策\"和\"退换货规则\"意思相近，但字面不同"},
              {"id": "b2", "type": "text", "content": "Embedding：把文本转成向量（一串数字）\n语义相似的文本，向量也相似"},
              {"id": "b3", "type": "code", "language": "text", "filename": "Embedding示例", "code": "\"退货政策\" → [0.12, 0.85, 0.33, ...]\n\"退换货规则\" → [0.11, 0.84, 0.35, ...]  // 向量相似\n\"商品价格\" → [0.78, 0.22, 0.91, ...]  // 向量差异大"},
              {"id": "b4", "type": "text", "content": "向量相似度：余弦相似度\n两个向量夹角越小，相似度越高"},
              {"id": "b5", "type": "tip", "content": "Embedding模型：\n• OpenAI text-embedding-3\n• 通义千问 text-embedding-v2\n• 开源 bge-large-zh"}
            ]
          },
          {
            "id": "l4",
            "title": "向量数据库",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "向量数据库：专门存储和检索向量的数据库\n支持高效的相似度搜索"},
              {"id": "b2", "type": "table", "headers": ["数据库", "特点"], "rows": [["Milvus", "开源，功能强大，适合生产"], ["Chroma", "轻量，适合入门和小项目"], ["Pinecone", "云服务，免运维"], ["pgvector", "PostgreSQL插件，无需额外部署"]]},
              {"id": "b3", "type": "code", "language": "bash", "filename": "Docker启动Chroma", "code": "docker run -d --name chroma \\\n  -p 8000:8000 \\\n  chromadb/chroma:latest"},
              {"id": "b4", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<!-- Spring AI -->\n<dependency>\n    <groupId>org.springframework.ai</groupId>\n    <artifactId>spring-ai-chroma-store</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.springframework.ai</groupId>\n    <artifactId>spring-ai-openai-spring-boot-starter</artifactId>\n</dependency>"}
            ]
          },
          {
            "id": "l5",
            "title": "知识库构建",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "第1步：准备知识文档\n• 商品FAQ\n• 退换货政策\n• 配送说明\n• 常见问题"},
              {"id": "b2", "type": "code", "language": "java", "filename": "KnowledgeService.java", "code": "@Autowired\nEmbeddingModel embeddingModel;\n\n@Autowired\nVectorStore vectorStore;\n\n// 导入知识文档\npublic void importDocument(String content, String source) {\n    // 1. 文档分块（chunk）\n    List<String> chunks = splitDocument(content, 500);\n    \n    // 2. 每个块生成Embedding并存储\n    for (String chunk : chunks) {\n        Document doc = new Document(chunk);\n        doc.getMetadata().put(\"source\", source);\n        vectorStore.add(List.of(doc));\n    }\n}\n\n// 文档分块\nprivate List<String> splitDocument(String content, int chunkSize) {\n    List<String> chunks = new ArrayList<>();\n    for (int i = 0; i < content.length(); i += chunkSize) {\n        chunks.add(content.substring(i, Math.min(i + chunkSize, content.length())));\n    }\n    return chunks;\n}"},
              {"id": "b3", "type": "tip", "content": "分块策略很重要：\n• 太大：检索不精准\n• 太小：上下文丢失\n• 推荐：按段落或固定长度+重叠"}
            ]
          },
          {
            "id": "l6",
            "title": "智能客服实现",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "ChatService.java", "code": "@Autowired\nChatModel chatModel;\n\n@Autowired\nVectorStore vectorStore;\n\npublic String chat(String question) {\n    // 1. 检索相关文档\n    List<Document> docs = vectorStore.similaritySearch(question, 3);\n    \n    // 2. 拼接上下文\n    String context = docs.stream()\n        .map(Document::getContent)\n        .collect(Collectors.joining(\"\\n\\n\"));\n    \n    // 3. 构建Prompt\n    String prompt = \"\"\"\n        你是商城智能客服，根据以下知识库内容回答用户问题。\n        如果知识库没有相关信息，请说\"抱歉，我无法回答这个问题\"。\n        \n        知识库内容：\n        %s\n        \n        用户问题：%s\n        \"\"\".formatted(context, question);\n    \n    // 4. 调用大模型\n    return chatModel.call(prompt);\n}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "ChatController.java", "code": "@PostMapping(\"/chat\")\npublic Result<String> chat(@RequestBody ChatReq req) {\n    String answer = chatService.chat(req.question);\n    return Result.ok(answer);\n}"},
              {"id": "b3", "type": "code", "language": "http", "filename": "test.http", "code": "### 智能客服对话\nPOST http://localhost:8080/chat\nContent-Type: application/json\n\n{\n  \"question\": \"商品支持7天无理由退货吗\"\n}"}
            ]
          },
          {
            "id": "l7",
            "title": "多轮对话",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：用户问\"那运费怎么算\"\n大模型不知道\"那\"指什么"},
              {"id": "b2", "type": "code", "language": "java", "filename": "ChatService.java", "code": "// 存储对话历史\nMap<String, List<Message>> sessions = new ConcurrentHashMap<>();\n\npublic String chat(String sessionId, String question) {\n    // 1. 获取历史对话\n    List<Message> history = sessions.getOrDefault(sessionId, new ArrayList<>());\n    \n    // 2. 检索知识库\n    List<Document> docs = vectorStore.similaritySearch(question, 3);\n    String context = docs.stream().map(Document::getContent).collect(Collectors.joining(\"\\n\"));\n    \n    // 3. 构建带历史的Prompt\n    List<Message> messages = new ArrayList<>();\n    messages.add(new SystemMessage(\"你是商城客服，知识库：\" + context));\n    messages.addAll(history);\n    messages.add(new UserMessage(question));\n    \n    // 4. 调用大模型\n    String answer = chatModel.call(new Prompt(messages)).getResult().getOutput().getContent();\n    \n    // 5. 保存对话历史\n    history.add(new UserMessage(question));\n    history.add(new AssistantMessage(answer));\n    sessions.put(sessionId, history);\n    \n    return answer;\n}"},
              {"id": "b3", "type": "tip", "content": "对话历史可以存Redis\n设置过期时间，避免内存溢出"}
            ]
          },
          {
            "id": "l8",
            "title": "RAG小结",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["组件", "作用", "技术选型"], "rows": [["大模型", "理解+生成", "GPT/通义千问/本地部署"], ["Embedding", "文本向量化", "text-embedding-3"], ["向量数据库", "存储检索向量", "Chroma/Milvus"], ["知识库", "业务文档", "FAQ/政策/说明"]]},
              {"id": "b2", "type": "text", "content": "RAG的局限性：\n1. 只能回答知识库有的内容\n2. 无法执行操作（查订单、退款等）"},
              {"id": "b3", "type": "tip", "content": "想让AI执行操作？→ 需要AI Agent"}
            ]
          }
        ]
      },
      {
        "id": "ch5t",
        "title": "AI Agent助手",
        "lessons": [
          {
            "id": "l1",
            "title": "Agent概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "RAG的问题：只能\"回答问题\"，不能\"执行操作\""},
              {"id": "b2", "type": "text", "content": "用户说：\"帮我查一下订单123的物流\"\nRAG：只能从知识库找物流说明文档\nAgent：可以调用接口查询真实物流信息"},
              {"id": "b3", "type": "text", "content": "AI Agent = 大模型 + 工具调用能力\n大模型决定调用哪个工具，工具执行真实操作"},
              {"id": "b4", "type": "code", "language": "text", "filename": "Agent工作流程", "code": "用户：\"查一下订单123的物流\"\n    ↓\n大模型理解意图 → 需要调用\"查物流\"工具\n    ↓\n调用 queryLogistics(orderId=123)\n    ↓\n返回物流信息 → 大模型整理答案\n    ↓\n\"您的订单已到达北京分拣中心，预计明天送达\""}
            ]
          },
          {
            "id": "l2",
            "title": "Function Calling",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Function Calling：让大模型调用预定义的函数\nOpenAI/通义千问等主流模型都支持"},
              {"id": "b2", "type": "list", "items": ["1. 定义函数描述（名称、参数、作用）", "2. 用户提问", "3. 大模型判断是否需要调用函数", "4. 如需调用，返回函数名和参数", "5. 后端执行函数，返回结果", "6. 大模型基于结果生成回答"]},
              {"id": "b3", "type": "code", "language": "json", "filename": "函数定义示例", "code": "{\n  \"name\": \"queryOrder\",\n  \"description\": \"查询订单详情\",\n  \"parameters\": {\n    \"type\": \"object\",\n    \"properties\": {\n      \"orderId\": {\n        \"type\": \"string\",\n        \"description\": \"订单ID\"\n      }\n    },\n    \"required\": [\"orderId\"]\n  }\n}"}
            ]
          },
          {
            "id": "l3",
            "title": "Spring AI Function",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Spring AI封装了Function Calling\n用注解定义函数，框架自动处理"},
              {"id": "b2", "type": "code", "language": "java", "filename": "OrderFunction.java", "code": "// 定义查询订单函数\n@Component\n@Description(\"查询订单详情，包括商品、金额、状态、物流等信息\")\npublic class QueryOrderFunction implements Function<QueryOrderRequest, OrderInfo> {\n    \n    @Override\n    public OrderInfo apply(QueryOrderRequest req) {\n        // 查询订单\n        Order order = new Order().selectById(req.orderId());\n        \n        OrderInfo info = new OrderInfo();\n        info.orderId = order.id;\n        info.spuName = order.spuName;\n        info.total = order.total;\n        info.status = getStatusText(order.status);\n        info.logistics = queryLogistics(order.expressNo);\n        return info;\n    }\n}\n\nrecord QueryOrderRequest(String orderId) {}"}
            ]
          },
          {
            "id": "l4",
            "title": "商品查询Agent",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "SearchSpuFunction.java", "code": "@Component\n@Description(\"搜索商品，根据关键词查找商品列表\")\npublic class SearchSpuFunction implements Function<SearchSpuRequest, List<SpuInfo>> {\n    \n    @Override\n    public List<SpuInfo> apply(SearchSpuRequest req) {\n        // 搜索商品\n        List<Spu> list = new Spu().selectList(\n            new QueryWrapper<Spu>()\n                .like(\"spu_name\", req.keyword())\n                .last(\"LIMIT 5\")\n        );\n        \n        return list.stream().map(spu -> {\n            SpuInfo info = new SpuInfo();\n            info.id = spu.id;\n            info.name = spu.spuName;\n            info.price = spu.spuPrice;\n            info.detailUrl = \"/spu/\" + spu.id;\n            return info;\n        }).toList();\n    }\n}\n\nrecord SearchSpuRequest(String keyword) {}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "SpuDetailFunction.java", "code": "@Component\n@Description(\"获取商品详情，包括价格、库存、规格、评价等\")\npublic class SpuDetailFunction implements Function<SpuDetailRequest, SpuDetail> {\n    \n    @Override\n    public SpuDetail apply(SpuDetailRequest req) {\n        Spu spu = new Spu().selectById(req.spuId());\n        \n        SpuDetail detail = new SpuDetail();\n        detail.id = spu.id;\n        detail.name = spu.spuName;\n        detail.price = spu.spuPrice;\n        detail.stock = spu.stock;\n        detail.description = spu.description;\n        detail.images = JSON.parseArray(spu.images, String.class);\n        return detail;\n    }\n}\n\nrecord SpuDetailRequest(Long spuId) {}"}
            ]
          },
          {
            "id": "l5",
            "title": "下单Agent",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "CreateOrderFunction.java", "code": "@Component\n@Description(\"创建订单，用户确认购买商品后调用\")\npublic class CreateOrderFunction implements Function<CreateOrderRequest, OrderResult> {\n    \n    @Autowired\n    OrderService orderService;\n    \n    @Override\n    public OrderResult apply(CreateOrderRequest req) {\n        try {\n            Order order = orderService.createOrder(req.userId(), req.spuId(), req.count());\n            \n            OrderResult result = new OrderResult();\n            result.success = true;\n            result.orderId = order.id;\n            result.message = \"下单成功，订单号：\" + order.id;\n            result.payUrl = \"/pay/\" + order.id;\n            return result;\n        } catch (Exception e) {\n            OrderResult result = new OrderResult();\n            result.success = false;\n            result.message = \"下单失败：\" + e.getMessage();\n            return result;\n        }\n    }\n}\n\nrecord CreateOrderRequest(Long userId, Long spuId, Integer count) {}"},
              {"id": "b2", "type": "tip", "content": "下单等敏感操作需要二次确认\n可返回确认链接让用户点击确认"}
            ]
          },
          {
            "id": "l6",
            "title": "订单查询Agent",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "QueryOrdersFunction.java", "code": "@Component\n@Description(\"查询用户的订单列表\")\npublic class QueryOrdersFunction implements Function<QueryOrdersRequest, List<OrderInfo>> {\n    \n    @Override\n    public List<OrderInfo> apply(QueryOrdersRequest req) {\n        List<Order> orders = new Order().selectList(\n            new QueryWrapper<Order>()\n                .eq(\"user_id\", req.userId())\n                .orderByDesc(\"created_at\")\n                .last(\"LIMIT 10\")\n        );\n        \n        return orders.stream().map(o -> {\n            OrderInfo info = new OrderInfo();\n            info.orderId = o.id;\n            info.spuName = o.spuName;\n            info.total = o.total;\n            info.status = getStatusText(o.status);\n            info.createdAt = o.createdAt;\n            return info;\n        }).toList();\n    }\n}\n\nrecord QueryOrdersRequest(Long userId) {}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "QueryLogisticsFunction.java", "code": "@Component\n@Description(\"查询订单物流信息\")\npublic class QueryLogisticsFunction implements Function<QueryLogisticsRequest, LogisticsInfo> {\n    \n    @Autowired\n    LogisticsService logisticsService;\n    \n    @Override\n    public LogisticsInfo apply(QueryLogisticsRequest req) {\n        Order order = new Order().selectById(req.orderId());\n        if (order.expressNo == null) {\n            LogisticsInfo info = new LogisticsInfo();\n            info.message = \"订单尚未发货\";\n            return info;\n        }\n        return logisticsService.query(order.expressNo, order.expressCode);\n    }\n}\n\nrecord QueryLogisticsRequest(Long orderId) {}"}
            ]
          },
          {
            "id": "l7",
            "title": "退货Agent",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "ApplyRefundFunction.java", "code": "@Component\n@Description(\"申请退款/退货，用户对订单不满意时调用\")\npublic class ApplyRefundFunction implements Function<ApplyRefundRequest, RefundResult> {\n    \n    @Override\n    public RefundResult apply(ApplyRefundRequest req) {\n        Order order = new Order().selectById(req.orderId());\n        \n        // 检查是否可退\n        if (order.status >= 3) {\n            return new RefundResult(false, \"订单已完成，无法退款\", null);\n        }\n        \n        // 创建退款申请\n        Aftersale as = new Aftersale();\n        as.orderId = req.orderId();\n        as.userId = req.userId();\n        as.type = req.type(); // 1仅退款 2退货退款\n        as.reason = req.reason();\n        as.amount = order.total;\n        as.insert();\n        \n        return new RefundResult(true, \"退款申请已提交，等待商家审核\", as.id);\n    }\n}\n\nrecord ApplyRefundRequest(Long userId, Long orderId, Integer type, String reason) {}\nrecord RefundResult(boolean success, String message, Long refundId) {}"},
              {"id": "b2", "type": "tip", "content": "退款申请后需商家审核\n可通过Agent查询退款进度"}
            ]
          },
          {
            "id": "l8",
            "title": "Agent服务整合",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "AgentService.java", "code": "@Service\npublic class AgentService {\n    \n    @Autowired\n    ChatModel chatModel;\n    \n    // 注入所有Function\n    @Autowired\n    List<Function<?, ?>> functions;\n    \n    public String chat(Long userId, String message) {\n        // 1. 构建系统提示词\n        String systemPrompt = \"\"\"\n            你是商城AI助手，可以帮用户：\n            - 搜索商品、查看商品详情\n            - 下单购买\n            - 查询订单、查询物流\n            - 申请退款/退货\n            当前用户ID：%d\n            请根据用户需求调用相应的工具。\n            \"\"\".formatted(userId);\n        \n        // 2. 调用大模型（带Function Calling）\n        ChatResponse response = chatModel.call(new Prompt(\n            List.of(new SystemMessage(systemPrompt), new UserMessage(message)),\n            OpenAiChatOptions.builder()\n                .withFunctions(Set.of(\n                    \"searchSpuFunction\",\n                    \"spuDetailFunction\",\n                    \"createOrderFunction\",\n                    \"queryOrdersFunction\",\n                    \"queryLogisticsFunction\",\n                    \"applyRefundFunction\"\n                ))\n                .build()\n        ));\n        \n        return response.getResult().getOutput().getContent();\n    }\n}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "AgentController.java", "code": "@PostMapping(\"/agent/chat\")\npublic Result<String> agentChat(@RequestBody AgentChatReq req, HttpServletRequest request) {\n    Long userId = (Long) request.getAttribute(\"userId\");\n    String answer = agentService.chat(userId, req.message());\n    return Result.ok(answer);\n}"}
            ]
          },
          {
            "id": "l9",
            "title": "对话示例",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "Agent对话示例", "code": "用户：有什么牛奶卖？\nAgent：（调用searchSpuFunction）\n       为您找到以下牛奶商品：\n       1. 蒙牛纯牛奶 250ml×12盒 ¥45.9\n       2. 伊利金典有机奶 ¥68.0\n       3. 特仑苏 ¥72.5\n\n用户：第一个多少库存？\nAgent：（调用spuDetailFunction）\n       蒙牛纯牛奶库存充足，当前库存：1280件\n\n用户：买2箱\nAgent：（调用createOrderFunction）\n       已为您下单成功！\n       订单号：202402270001\n       商品：蒙牛纯牛奶 ×2\n       总价：¥91.8\n       点击支付：/pay/202402270001\n\n用户：我的订单到哪了？\nAgent：（调用queryLogisticsFunction）\n       您的订单物流信息：\n       [2024-02-27 14:00] 已到达北京分拣中心\n       [2024-02-27 10:00] 已从上海发出\n       预计明天送达\n\n用户：不想要了，退货\nAgent：（调用applyRefundFunction）\n       已为您提交退货申请\n       退款单号：RF20240227001\n       退款金额：¥91.8\n       请等待商家审核"},
              {"id": "b2", "type": "tip", "content": "AI Agent = 自然语言界面\n用户用自然语言就能完成所有操作"}
            ]
          },
          {
            "id": "l10",
            "title": "RAG + Agent结合",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "完整的AI客服 = RAG + Agent\n• RAG：回答知识类问题（退货政策、配送说明）\n• Agent：执行操作类问题（查订单、退款）"},
              {"id": "b2", "type": "code", "language": "java", "filename": "SmartAssistant.java", "code": "@Service\npublic class SmartAssistant {\n    \n    @Autowired\n    ChatService ragService;  // RAG服务\n    \n    @Autowired\n    AgentService agentService;  // Agent服务\n    \n    public String chat(Long userId, String message) {\n        // 让大模型判断问题类型\n        String classifyPrompt = \"\"\"\n            判断用户问题类型：\n            - 如果是询问政策、规则、说明等知识类问题，返回 KNOWLEDGE\n            - 如果是查询订单、下单、退款等操作类问题，返回 ACTION\n            \n            用户问题：%s\n            只返回 KNOWLEDGE 或 ACTION\n            \"\"\".formatted(message);\n        \n        String type = chatModel.call(classifyPrompt).trim();\n        \n        if (\"KNOWLEDGE\".equals(type)) {\n            return ragService.chat(message);\n        } else {\n            return agentService.chat(userId, message);\n        }\n    }\n}"},
              {"id": "b3", "type": "table", "headers": ["问题类型", "示例", "处理方式"], "rows": [["知识类", "退货政策是什么", "RAG检索知识库"], ["操作类", "帮我退货", "Agent调用函数"], ["混合类", "怎么退货，帮我退", "先RAG后Agent"]]}
            ]
          },
          {
            "id": "l11",
            "title": "AI模块小结",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["能力", "技术", "适用场景"], "rows": [["知识问答", "RAG", "FAQ、政策说明"], ["操作执行", "Agent", "查订单、下单、退款"], ["多轮对话", "对话历史", "上下文理解"], ["意图识别", "大模型", "路由到RAG或Agent"]]},
              {"id": "b2", "type": "text", "content": "商城AI助手能力：\n• 搜索商品、查看详情\n• 下单购买\n• 查询订单、物流\n• 申请退款/退货\n• 回答知识类问题"},
              {"id": "b3", "type": "tip", "content": "AI不是替代人工客服\n而是处理80%的简单问题，复杂问题转人工"}
            ]
          }
        ]
      },
      {
        "id": "ch9",
        "title": "高级技术功能",
        "lessons": [
          {
            "id": "l1",
            "title": "Docker概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "之前部署：手动安装JDK、配置环境、上传jar\nDocker：打包成镜像，一键启动，环境一致"},
              {"id": "b2", "type": "table", "headers": ["术语", "含义"], "rows": [["镜像(Image)", "打包好的应用+环境，类似安装包"], ["容器(Container)", "镜像运行的实例，类似进程"], ["Dockerfile", "构建镜像的脚本"]]},
              {"id": "b3", "type": "tip", "content": "Docker解决“我电脑能跑，服务器不能跑”的问题\n环境完全一致，一次构建，处处运行"}
            ]
          },
          {
            "id": "l2",
            "title": "安装Docker",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "Linux安装Docker", "code": "# Ubuntu\nsudo apt update\nsudo apt install -y docker.io\nsudo systemctl start docker\nsudo systemctl enable docker\n\n# CentOS\nsudo yum install -y docker\nsudo systemctl start docker"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "验证安装", "code": "docker --version\n# Docker version 24.0.5"},
              {"id": "b3", "type": "tip", "content": "Windows/Mac安装Docker Desktop\n国内服务器配置阿里云镜像加速"}
            ]
          },
          {
            "id": "l3",
            "title": "编写Dockerfile",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "在项目根目录创建Dockerfile"},
              {"id": "b2", "type": "code", "language": "dockerfile", "filename": "Dockerfile", "code": "# 基础镜像\nFROM eclipse-temurin:21-jre\n\n# 工作目录\nWORKDIR /app\n\n# 复制jar包\nCOPY target/*.jar app.jar\n\n# 暴露端口\nEXPOSE 8080\n\n# 启动命令\nCMD [\"java\", \"-jar\", \"app.jar\"]"},
              {"id": "b3", "type": "table", "headers": ["指令", "作用"], "rows": [["FROM", "基础镜像，这里用JDK21"], ["WORKDIR", "工作目录"], ["COPY", "复制文件到镜像"], ["EXPOSE", "声明端口"], ["CMD", "启动命令"]]}
            ]
          },
          {
            "id": "l4",
            "title": "构建与运行",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "构建镜像", "code": "# 先打包项目\nmvn package -DskipTests\n\n# 构建镜像\ndocker build -t demo-app:1.0 ."},
              {"id": "b2", "type": "code", "language": "bash", "filename": "运行容器", "code": "# 启动容器\ndocker run -d -p 8080:8080 --name demo demo-app:1.0\n\n# 查看日志\ndocker logs -f demo\n\n# 停止容器\ndocker stop demo"},
              {"id": "b3", "type": "table", "headers": ["参数", "作用"], "rows": [["-d", "后台运行"], ["-p 8080:8080", "端口映射，宿主机:容器"], ["--name", "容器名称"]]}
            ]
          },
          {
            "id": "l5",
            "title": "Docker常用命令",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "常用命令", "code": "# 查看所有容器\ndocker ps -a\n\n# 查看所有镜像\ndocker images\n\n# 进入容器\ndocker exec -it demo bash\n\n# 删除容器\ndocker rm demo\n\n# 删除镜像\ndocker rmi demo-app:1.0"}
            ]
          }
        ]
      },
      {
        "id": "ch9a",
        "title": "自动化部署",
        "lessons": [
          {
            "id": "l1",
            "title": "CI/CD概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "CI/CD = 持续集成/持续部署\n代码提交后自动构建、测试、部署"},
              {"id": "b2", "type": "list", "items": ["git push 提交代码", "CI服务器检测到提交", "自动拉取代码、构建、测试", "自动部署到服务器"]},
              {"id": "b3", "type": "table", "headers": ["工具", "特点"], "rows": [["GitHub Actions", "最流行，免费，配置简单"], ["GitLab CI", "企业私有部署多"], ["Jenkins", "老牌王者，功能强大"]]}
            ]
          },
          {
            "id": "l2",
            "title": "GitHub Actions",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "在项目根目录创建 .github/workflows/deploy.yml"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": ".github/workflows/deploy.yml", "code": "name: Deploy\n\non:\n  push:\n    branches: [main]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      \n      - name: Set up JDK 21\n        uses: actions/setup-java@v4\n        with:\n          java-version: '21'\n          distribution: 'temurin'\n      \n      - name: Build with Maven\n        run: mvn package -DskipTests\n      \n      - name: Build Docker Image\n        run: docker build -t demo-app:latest .\n      \n      - name: Deploy to Server\n        uses: appleboy/ssh-action@v1\n        with:\n          host: ${{ secrets.SERVER_HOST }}\n          username: ${{ secrets.SERVER_USER }}\n          key: ${{ secrets.SERVER_KEY }}\n          script: |\n            docker stop demo || true\n            docker rm demo || true\n            docker run -d -p 8080:8080 --name demo demo-app:latest"},
              {"id": "b3", "type": "text", "content": "在GitHub仓库 Settings → Secrets 添加：\n· SERVER_HOST - 服务器IP\n· SERVER_USER - 登录用户\n· SERVER_KEY - SSH私钥"},
              {"id": "b4", "type": "tip", "content": "push到main分支自动触发\n在Actions面板查看执行日志"}
            ]
          },
          {
            "id": "l3",
            "title": "GitLab CI",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "在项目根目录创建 .gitlab-ci.yml"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": ".gitlab-ci.yml", "code": "stages:\n  - build\n  - deploy\n\nbuild:\n  stage: build\n  image: maven:3.9-eclipse-temurin-21\n  script:\n    - mvn package -DskipTests\n  artifacts:\n    paths:\n      - target/*.jar\n\ndeploy:\n  stage: deploy\n  image: docker:latest\n  script:\n    - docker build -t demo-app:latest .\n    - docker save demo-app:latest | ssh $SERVER_USER@$SERVER_HOST 'docker load'\n    - ssh $SERVER_USER@$SERVER_HOST 'docker stop demo || true && docker rm demo || true && docker run -d -p 8080:8080 --name demo demo-app:latest'\n  only:\n    - main"},
              {"id": "b3", "type": "text", "content": "在GitLab → Settings → CI/CD → Variables 添加：\n· SERVER_HOST\n· SERVER_USER"},
              {"id": "b4", "type": "tip", "content": "GitLab可自己部署，适合企业内网"}
            ]
          },
          {
            "id": "l4",
            "title": "Jenkins",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Jenkins需要自己部署服务器"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "安装Jenkins", "code": "# Docker安装Jenkins\ndocker run -d -p 8080:8080 -p 50000:50000 \\\n  -v jenkins_home:/var/jenkins_home \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  jenkins/jenkins:lts"},
              {"id": "b3", "type": "text", "content": "创建Pipeline项目，配置Jenkinsfile："},
              {"id": "b4", "type": "code", "language": "groovy", "filename": "Jenkinsfile", "code": "pipeline {\n    agent any\n    \n    stages {\n        stage('Build') {\n            steps {\n                sh 'mvn package -DskipTests'\n            }\n        }\n        \n        stage('Docker Build') {\n            steps {\n                sh 'docker build -t demo-app:latest .'\n            }\n        }\n        \n        stage('Deploy') {\n            steps {\n                sh '''\n                    docker stop demo || true\n                    docker rm demo || true\n                    docker run -d -p 8080:8080 --name demo demo-app:latest\n                '''\n            }\n        }\n    }\n}"},
              {"id": "b5", "type": "tip", "content": "Jenkins功能最强大，但配置最复杂\n传统企业用得多"}
            ]
          },
          {
            "id": "l5",
            "title": "三种方式对比",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["", "GitHub Actions", "GitLab CI", "Jenkins"], "rows": [["配置难度", "简单", "中等", "复杂"], ["费用", "免费(公开仓库)", "免费/付费", "免费(自建)"], ["服务器", "无需", "可选", "必须"], ["企业用户", "较少", "较多", "最多"], ["推荐场景", "开源/个人项目", "企业私有", "传统企业"]]},
              {"id": "b2", "type": "tip", "content": "小项目用GitHub Actions\n企业私有部署用GitLab CI\n传统企业/复杂流程用Jenkins"}
            ]
          }
        ]
      },
      {
        "id": "ch9b",
        "title": "集群部署",
        "lessons": [
          {
            "id": "l1",
            "title": "单体瓶颈",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "单体应用的问题：\n1. 单机QPS有上限\n2. 单点故障，挂了就全挂\n3. 无法水平扩展"},
              {"id": "b2", "type": "text", "content": "解决方案：部署多个实例，用Nginx做负载均衡"},
              {"id": "b3", "type": "code", "language": "text", "filename": "架构演进", "code": "单体架构：\n用户 → 单个SpringBoot实例 → MySQL\n\n集群架构：\n用户 → Nginx → SpringBoot实例1 → MySQL\n              → SpringBoot实例2 →\n              → SpringBoot实例3 →"}
            ]
          },
          {
            "id": "l2",
            "title": "Nginx负载均衡",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "Docker启动Nginx", "code": "docker run -d --name nginx \\\n  -p 80:80 \\\n  -v /opt/nginx/nginx.conf:/etc/nginx/nginx.conf \\\n  nginx"},
              {"id": "b2", "type": "code", "language": "nginx", "filename": "nginx.conf", "code": "upstream mall {\n    server 192.168.1.101:8080 weight=1;\n    server 192.168.1.102:8080 weight=1;\n    server 192.168.1.103:8080 weight=1;\n}\n\nserver {\n    listen 80;\n    server_name mall.com;\n    \n    location / {\n        proxy_pass http://mall;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}"},
              {"id": "b3", "type": "table", "headers": ["负载策略", "说明"], "rows": [["轮询(默认)", "依次分发"], ["weight", "按权重分发"], ["ip_hash", "同IP固定到同一实例"], ["least_conn", "分发给连接数最少的"]]}
            ]
          },
          {
            "id": "l3",
            "title": "Session共享问题",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：用户在实例1登录，下次请求到实例2，Session丢失"},
              {"id": "b2", "type": "table", "headers": ["方案", "优缺点"], "rows": [["ip_hash", "简单，但实例挂了Session丢失"], ["Session复制", "实例间同步，性能差"], ["Redis集中存储", "推荐，Session存Redis"]]}
            ]
          },
          {
            "id": "l4",
            "title": "Spring Session + Redis",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>org.springframework.session</groupId>\n    <artifactId>spring-session-data-redis</artifactId>\n</dependency>"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "application.yml", "code": "spring:\n  session:\n    store-type: redis\n    timeout: 30m"},
              {"id": "b3", "type": "text", "content": "配置完成后，Session自动存入Redis\n多个实例共享同一个Redis，Session自然共享"},
              {"id": "b4", "type": "tip", "content": "Spring Session对代码无侵入\n原来怎么用Session，现在还怎么用"}
            ]
          },
          {
            "id": "l5",
            "title": "集群小结",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["解决的问题", "方案"], "rows": [["单机性能瓶颈", "多实例 + Nginx负载均衡"], ["Session共享", "Spring Session + Redis"], ["单点故障", "多实例互为备份"]]},
              {"id": "b2", "type": "text", "content": "集群的局限性：\n1. 代码还是一坨，改一行要全量部署\n2. 团队协作冲突多\n3. 技术栈难升级"},
              {"id": "b3", "type": "tip", "content": "集群解决了性能问题\n但没解决代码耦合问题 → 需要微服务"}
            ]
          }
        ]
      },
      {
        "id": "ch9c",
        "title": "分布式改造",
        "lessons": [
          {
            "id": "l1",
            "title": "分布式概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["概念", "说明"], "rows": [["集群", "多个相同服务实例"], ["分布式", "多个不同服务协作"]]},
              {"id": "b2", "type": "code", "language": "text", "filename": "架构对比", "code": "集群：\nNginx → 商城实例1(全部代码)\n      → 商城实例2(全部代码)\n\n分布式：\nNginx → 用户服务(只有用户代码)\n      → 商品服务(只有商品代码)\n      → 订单服务(只有订单代码)"}
            ]
          },
          {
            "id": "l2",
            "title": "服务拆分",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "按业务领域拆分服务："},
              {"id": "b2", "type": "table", "headers": ["服务", "职责", "端口"], "rows": [["mall-user", "用户注册、登录、信息", "8081"], ["mall-spu", "商品CRUD、搜索", "8082"], ["mall-order", "下单、订单管理", "8083"], ["mall-pay", "支付对接", "8084"]]},
              {"id": "b3", "type": "tip", "content": "每个服务独立数据库、独立部署、独立扩容"}
            ]
          },
          {
            "id": "l3",
            "title": "服务间调用",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "订单服务需要调用商品服务查询商品信息\n最简单方式：RestTemplate"},
              {"id": "b2", "type": "code", "language": "java", "filename": "OrderService.java", "code": "@Autowired\nRestTemplate restTemplate;\n\npublic Order createOrder(Integer spuId, Integer count) {\n    // 调用商品服务\n    String url = \"http://192.168.1.102:8082/spu/\" + spuId;\n    Spu spu = restTemplate.getForObject(url, Spu.class);\n    \n    // 创建订单\n    Order order = new Order();\n    order.spuId = spu.id;\n    order.spuName = spu.spuName;\n    order.total = spu.spuPrice * count;\n    order.insert();\n    return order;\n}"},
              {"id": "b3", "type": "text", "content": "问题：\n1. URL硬编码，服务地址变了要改代码\n2. 没有负载均衡\n3. 服务挂了不知道"},
              {"id": "b4", "type": "tip", "content": "分布式的核心问题：服务如何发现彼此？\n→ 需要注册中心"}
            ]
          },
          {
            "id": "l4",
            "title": "分布式ID",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：每个服务独立数据库，自增ID会重复"},
              {"id": "b2", "type": "table", "headers": ["方案", "优缺点"], "rows": [["UUID", "简单，但无序、太长"], ["数据库号段", "依赖数据库"], ["雪花算法", "推荐，64位有序ID"]]},
              {"id": "b3", "type": "code", "language": "java", "filename": "雪花算法结构", "code": "// 64位ID = 1位符号 + 41位时间戳 + 10位机器ID + 12位序列号\n// 每毫秒可生成4096个ID\n\n// Hutool工具类\nlong id = IdUtil.getSnowflakeNextId();\n// 1234567890123456789"}
            ]
          },
          {
            "id": "l5",
            "title": "分布式事务",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：下单需要扣库存+创建订单，跨两个服务\n本地@Transactional只能管一个数据库"},
              {"id": "b2", "type": "table", "headers": ["方案", "一致性", "性能"], "rows": [["2PC/XA", "强一致", "低"], ["TCC", "最终一致", "中"], ["Seata AT", "最终一致", "高"], ["消息事务", "最终一致", "高"]]},
              {"id": "b3", "type": "tip", "content": "大多数场景用最终一致性即可\nSeata是阿里开源的分布式事务框架"}
            ]
          }
        ]
      },
      {
        "id": "ch9d",
        "title": "微服务架构",
        "lessons": [
          {
            "id": "l1",
            "title": "微服务 vs 分布式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["对比项", "分布式", "微服务"], "rows": [["服务发现", "手动配置地址", "注册中心自动发现"], ["负载均衡", "Nginx", "客户端负载均衡"], ["配置管理", "各自配置文件", "配置中心统一管理"], ["服务治理", "无", "限流、熔断、降级"]]},
              {"id": "b2", "type": "tip", "content": "微服务 = 分布式 + 服务治理\n核心组件：注册中心、配置中心、网关、限流熔断"}
            ]
          },
          {
            "id": "l2",
            "title": "Nacos注册中心",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "Docker启动Nacos", "code": "docker run -d --name nacos \\\n  -p 8848:8848 \\\n  -e MODE=standalone \\\n  nacos/nacos-server:v2.2.3"},
              {"id": "b2", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n</dependency>"},
              {"id": "b3", "type": "code", "language": "yaml", "filename": "application.yml", "code": "spring:\n  application:\n    name: mall-spu\n  cloud:\n    nacos:\n      discovery:\n        server-addr: localhost:8848"},
              {"id": "b4", "type": "text", "content": "启动后访问 http://localhost:8848/nacos\n账号密码：nacos/nacos\n可以看到所有注册的服务"}
            ]
          },
          {
            "id": "l3",
            "title": "OpenFeign服务调用",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Feign：声明式HTTP客户端，像调用本地方法一样调用远程服务"},
              {"id": "b2", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-openfeign</artifactId>\n</dependency>"},
              {"id": "b3", "type": "code", "language": "java", "filename": "SpuClient.java", "code": "// 声明Feign客户端，指向mall-spu服务\n@FeignClient(name = \"mall-spu\")\npublic interface SpuClient {\n    \n    @GetMapping(\"/spu/{id}\")\n    Result<Spu> getSpu(@PathVariable Integer id);\n    \n    @PostMapping(\"/spu/deductStock\")\n    Result<Void> deductStock(@RequestParam Integer id, @RequestParam Integer count);\n}"},
              {"id": "b4", "type": "code", "language": "java", "filename": "OrderService.java", "code": "@Autowired\nSpuClient spuClient;  // 注入Feign客户端\n\npublic Order createOrder(Integer spuId, Integer count) {\n    // 像调用本地方法一样调用商品服务\n    Result<Spu> result = spuClient.getSpu(spuId);\n    Spu spu = result.data;\n    \n    // 扣库存\n    spuClient.deductStock(spuId, count);\n    \n    // 创建订单...\n}"},
              {"id": "b5", "type": "tip", "content": "Feign自动从Nacos获取服务地址\n自动负载均衡，不用关心具体IP"}
            ]
          },
          {
            "id": "l4",
            "title": "Nacos配置中心",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：每个服务都有配置文件，修改要重启\n解决：配置统一存Nacos，支持热更新"},
              {"id": "b2", "type": "code", "language": "xml", "filename": "pom.xml", "code": "<dependency>\n    <groupId>com.alibaba.cloud</groupId>\n    <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>\n</dependency>"},
              {"id": "b3", "type": "code", "language": "yaml", "filename": "bootstrap.yml", "code": "spring:\n  application:\n    name: mall-spu\n  cloud:\n    nacos:\n      config:\n        server-addr: localhost:8848\n        file-extension: yaml"},
              {"id": "b4", "type": "text", "content": "在Nacos控制台创建配置：\nData ID: mall-spu.yaml\n内容: 数据库连接、Redis配置等"},
              {"id": "b5", "type": "tip", "content": "@RefreshScope注解的Bean会自动刷新配置\n修改Nacos配置，服务自动生效"}
            ]
          },
          {
            "id": "l5",
            "title": "Gateway网关",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：微服务后，用户要记住每个服务的地址？\n解决：统一入口，网关负责路由"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "application.yml", "code": "spring:\n  cloud:\n    gateway:\n      routes:\n        - id: mall-user\n          uri: lb://mall-user\n          predicates:\n            - Path=/user/**\n        - id: mall-spu\n          uri: lb://mall-spu\n          predicates:\n            - Path=/spu/**\n        - id: mall-order\n          uri: lb://mall-order\n          predicates:\n            - Path=/order/**"},
              {"id": "b3", "type": "text", "content": "所有请求统一走网关：\n/user/** → 转发到mall-user服务\n/spu/** → 转发到mall-spu服务"},
              {"id": "b4", "type": "tip", "content": "网关还可以做：统一鉴权、限流、日志、跨域"}
            ]
          },
          {
            "id": "l6",
            "title": "Sentinel限流熔断",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "问题：某个服务挂了，调用方一直等待，资源耗尽\n解决：快速失败 + 降级"},
              {"id": "b2", "type": "table", "headers": ["概念", "说明"], "rows": [["限流", "超过阈值直接拒绝"], ["熔断", "错误率高时暂停调用"], ["降级", "熔断后返回兜底数据"]]},
              {"id": "b3", "type": "code", "language": "java", "filename": "SpuClient.java", "code": "@FeignClient(name = \"mall-spu\", fallback = SpuClientFallback.class)\npublic interface SpuClient {\n    @GetMapping(\"/spu/{id}\")\n    Result<Spu> getSpu(@PathVariable Integer id);\n}\n\n// 降级实现\n@Component\npublic class SpuClientFallback implements SpuClient {\n    @Override\n    public Result<Spu> getSpu(Integer id) {\n        return Result.err(\"商品服务暂不可用\");\n    }\n}"},
              {"id": "b4", "type": "tip", "content": "Sentinel有控制台，可视化配置规则\n实时监控QPS、响应时间、错误率"}
            ]
          },
          {
            "id": "l7",
            "title": "Seata分布式事务",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "Docker启动Seata", "code": "docker run -d --name seata \\\n  -p 8091:8091 \\\n  -e SEATA_IP=192.168.1.100 \\\n  seataio/seata-server:1.7.0"},
              {"id": "b2", "type": "code", "language": "java", "filename": "OrderService.java", "code": "@GlobalTransactional  // 全局事务注解\npublic Order createOrder(Integer spuId, Integer count) {\n    // 1. 扣库存（商品服务）\n    spuClient.deductStock(spuId, count);\n    \n    // 2. 创建订单（订单服务）\n    Order order = new Order();\n    order.insert();\n    \n    // 3. 扣余额（用户服务）\n    userClient.deductBalance(userId, amount);\n    \n    // 任何一步失败，全部回滚\n    return order;\n}"},
              {"id": "b3", "type": "tip", "content": "@GlobalTransactional管理跨服务事务\nSeata自动记录undo_log，失败时回滚"}
            ]
          },
          {
            "id": "l8",
            "title": "微服务小结",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["组件", "作用", "技术"], "rows": [["注册中心", "服务发现", "Nacos"], ["配置中心", "统一配置", "Nacos"], ["服务调用", "RPC", "OpenFeign"], ["网关", "统一入口", "Gateway"], ["限流熔断", "高可用", "Sentinel"], ["分布式事务", "数据一致性", "Seata"]]},
              {"id": "b2", "type": "text", "content": "微服务的问题：\n1. 每个服务都要引入治理代码\n2. 多语言服务难统一治理\n3. 运维复杂度高"},
              {"id": "b3", "type": "tip", "content": "微服务解决了服务治理问题\n但治理能力侵入业务代码 → 需要服务网格"}
            ]
          }
        ]
      },
      {
        "id": "ch9e",
        "title": "服务网格",
        "lessons": [
          {
            "id": "l1",
            "title": "为什么需要服务网格",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "微服务的痛点：\n1. 每个服务都要引入SDK（Nacos、Sentinel）\n2. Java用Spring Cloud，Go用什么？\n3. 升级SDK要改所有服务"},
              {"id": "b2", "type": "text", "content": "服务网格思想：治理能力下沉到基础设施\n业务代码只管业务，治理交给Sidecar"},
              {"id": "b3", "type": "code", "language": "text", "filename": "架构对比", "code": "微服务：\n[业务代码 + Nacos SDK + Sentinel SDK] → 其他服务\n\n服务网格：\n[业务代码] → [Sidecar代理] → [Sidecar代理] → [业务代码]\n                  ↓                  ↓\n              Istio控制面（统一管理所有Sidecar）"}
            ]
          },
          {
            "id": "l2",
            "title": "Kubernetes基础",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "服务网格运行在K8s上，先了解K8s核心概念"},
              {"id": "b2", "type": "table", "headers": ["概念", "说明"], "rows": [["Pod", "最小部署单元，包含一个或多个容器"], ["Deployment", "管理Pod的副本数、滚动更新"], ["Service", "Pod的稳定访问入口"], ["Ingress", "外部流量入口"]]},
              {"id": "b3", "type": "code", "language": "yaml", "filename": "mall-spu.yaml", "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: mall-spu\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: mall-spu\n  template:\n    metadata:\n      labels:\n        app: mall-spu\n    spec:\n      containers:\n      - name: mall-spu\n        image: mall-spu:1.0\n        ports:\n        - containerPort: 8080\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: mall-spu\nspec:\n  selector:\n    app: mall-spu\n  ports:\n  - port: 8080"}
            ]
          },
          {
            "id": "l3",
            "title": "Istio安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "bash", "filename": "安装Istio", "code": "# 下载istioctl\ncurl -L https://istio.io/downloadIstio | sh -\ncd istio-1.20.0\nexport PATH=$PWD/bin:$PATH\n\n# 安装Istio到K8s\nistioctl install --set profile=demo -y\n\n# 开启自动注入Sidecar\nkubectl label namespace default istio-injection=enabled"},
              {"id": "b2", "type": "text", "content": "安装后，每个Pod自动注入Envoy Sidecar\n所有流量都经过Sidecar，实现透明治理"}
            ]
          },
          {
            "id": "l4",
            "title": "流量管理",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Istio通过配置管理流量，无需改代码"},
              {"id": "b2", "type": "code", "language": "yaml", "filename": "灰度发布.yaml", "code": "# 90%流量到v1，10%流量到v2\napiVersion: networking.istio.io/v1alpha3\nkind: VirtualService\nmetadata:\n  name: mall-spu\nspec:\n  hosts:\n  - mall-spu\n  http:\n  - route:\n    - destination:\n        host: mall-spu\n        subset: v1\n      weight: 90\n    - destination:\n        host: mall-spu\n        subset: v2\n      weight: 10"},
              {"id": "b3", "type": "table", "headers": ["能力", "配置方式"], "rows": [["负载均衡", "DestinationRule"], ["灰度发布", "VirtualService weight"], ["熔断", "DestinationRule outlierDetection"], ["超时重试", "VirtualService timeout/retries"]]}
            ]
          },
          {
            "id": "l5",
            "title": "可观测性",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Istio自带可观测性组件："},
              {"id": "b2", "type": "table", "headers": ["组件", "作用"], "rows": [["Kiali", "服务拓扑图、流量可视化"], ["Jaeger", "分布式链路追踪"], ["Prometheus", "指标采集"], ["Grafana", "监控大盘"]]},
              {"id": "b3", "type": "code", "language": "bash", "filename": "访问Kiali", "code": "# 端口转发\nkubectl port-forward svc/kiali 20001:20001 -n istio-system\n\n# 访问 http://localhost:20001"},
              {"id": "b4", "type": "tip", "content": "无需改代码，Sidecar自动采集指标和链路\n开箱即用的可观测性"}
            ]
          },
          {
            "id": "l6",
            "title": "服务网格小结",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["对比项", "微服务", "服务网格"], "rows": [["治理方式", "SDK侵入代码", "Sidecar透明代理"], ["多语言支持", "每种语言一套SDK", "统一Sidecar"], ["升级成本", "改所有服务", "升级控制面即可"], ["资源开销", "低", "高（每个Pod一个Sidecar）"]]},
              {"id": "b2", "type": "text", "content": "服务网格的问题：\n1. 每个Pod都有Sidecar，资源占用高\n2. 流量低谷时资源浪费\n3. 冷启动慢"},
              {"id": "b3", "type": "tip", "content": "服务网格解决了多语言治理问题\n但资源利用率不高 → 需要无服务器"}
            ]
          }
        ]
      },
      {
        "id": "ch12",
        "title": "无服务器架构",
        "lessons": [
          {
            "id": "l1",
            "title": "Serverless概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "服务网格的问题：7x24小时运行，流量低谷也占资源\nServerless：按请求计费，没请求时缩容到0"},
              {"id": "b2", "type": "table", "headers": ["对比项", "传统部署", "Serverless"], "rows": [["计费模式", "按实例时长", "按请求次数"], ["最小实例", "至少1个", "可以是0"], ["扩容速度", "分钟级", "秒级"], ["冷启动", "无", "有"]]},
              {"id": "b3", "type": "tip", "content": "Serverless不是没有服务器\n而是你不用关心服务器"}
            ]
          },
          {
            "id": "l2",
            "title": "Knative介绍",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Knative：K8s上的Serverless平台\n让普通应用具备Serverless能力"},
              {"id": "b2", "type": "table", "headers": ["组件", "作用"], "rows": [["Knative Serving", "自动扩缩容、流量管理"], ["Knative Eventing", "事件驱动"]]},
              {"id": "b3", "type": "code", "language": "bash", "filename": "安装Knative", "code": "# 安装Knative Serving\nkubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.12.0/serving-crds.yaml\nkubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.12.0/serving-core.yaml\n\n# 安装网络层（Kourier）\nkubectl apply -f https://github.com/knative/net-kourier/releases/download/knative-v1.12.0/kourier.yaml"}
            ]
          },
          {
            "id": "l3",
            "title": "部署Knative服务",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "yaml", "filename": "mall-spu-knative.yaml", "code": "apiVersion: serving.knative.dev/v1\nkind: Service\nmetadata:\n  name: mall-spu\nspec:\n  template:\n    metadata:\n      annotations:\n        # 最小实例数，0表示可以缩到0\n        autoscaling.knative.dev/min-scale: \"0\"\n        # 最大实例数\n        autoscaling.knative.dev/max-scale: \"10\"\n    spec:\n      containers:\n      - image: mall-spu:1.0\n        ports:\n        - containerPort: 8080\n        resources:\n          limits:\n            memory: 512Mi"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "部署", "code": "kubectl apply -f mall-spu-knative.yaml\n\n# 查看服务\nkubectl get ksvc\n\n# 输出：\n# NAME       URL                                   READY\n# mall-spu   http://mall-spu.default.example.com   True"},
              {"id": "b3", "type": "text", "content": "Knative自动管理：\n1. 没请求时缩容到0个Pod\n2. 有请求时自动扩容\n3. 流量大时继续扩容"}
            ]
          },
          {
            "id": "l4",
            "title": "自动扩缩容",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "yaml", "filename": "扩缩容配置", "code": "annotations:\n  # 每个实例处理100个并发请求\n  autoscaling.knative.dev/target: \"100\"\n  # 扩缩容指标：concurrency(并发) 或 rps(QPS)\n  autoscaling.knative.dev/metric: \"concurrency\"\n  # 缩容到0前等待时间\n  autoscaling.knative.dev/scale-to-zero-pod-retention-period: \"1m\""},
              {"id": "b2", "type": "text", "content": "扩缩容逻辑：\n1. 当前并发200，目标100 → 扩容到2个实例\n2. 当前并发50，目标100 → 缩容到1个实例\n3. 1分钟没请求 → 缩容到0"},
              {"id": "b3", "type": "tip", "content": "缩容到0后，新请求会触发冷启动\nJava应用冷启动慢，可用GraalVM native-image优化"}
            ]
          },
          {
            "id": "l5",
            "title": "架构演进总结",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["架构", "解决的问题", "引入的问题"], "rows": [["单体", "快速开发", "性能瓶颈、耦合"], ["集群", "性能、高可用", "Session共享、部署慢"], ["分布式", "解耦、独立部署", "服务发现、事务"], ["微服务", "服务治理", "SDK侵入、多语言难统一"], ["服务网格", "透明治理", "资源占用高"], ["无服务器", "按需伸缩", "冷启动"]]},
              {"id": "b2", "type": "text", "content": "架构选择原则：\n1. 小团队/初创 → 单体\n2. 流量增长 → 集群\n3. 团队扩大 → 微服务\n4. 多语言/大规模 → 服务网格\n5. 成本敏感/流量波动大 → Serverless"},
              {"id": "b3", "type": "tip", "content": "没有银弹，只有取舍\n选择适合当前阶段的架构"}
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
    "id": "ai-programming",
    "pathId": "ai",
    "title": "AI编程",
    "desc": "用Trae AI编程，从零搭建商城",
    "icon": "💻",
    "chapters": [
      {
        "id": "ch1",
        "title": "Trae下载安装",
        "lessons": [
          {
            "id": "l1",
            "title": "Trae介绍",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Trae是字节跳动推出的AI编程IDE\n国内可用，免费强大，中文友好"},
              {"id": "b2", "type": "table", "headers": ["特点", "说明"], "rows": [["免费", "无需付费，功能完整"], ["国内可用", "无需VPN，服务器在国内"], ["中文优化", "中文交互体验好"], ["Agent模式", "支持多文件编辑"]]},
              {"id": "b3", "type": "tip", "content": "Trae = 国产版Cursor\n适合国内开发者使用"}
            ]
          },
          {
            "id": "l2",
            "title": "下载安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 访问官网：trae.ai", "2. 点击下载按钮", "3. 选择对应系统版本（Windows/Mac）", "4. 运行安装程序", "5. 登录字节账号"]},
              {"id": "b2", "type": "tip", "content": "安装后打开Trae，用手机号登录即可使用"}
            ]
          },
          {
            "id": "l3",
            "title": "创建项目",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用Solo模式创建项目"},
              {"id": "b2", "type": "list", "items": ["1. 打开Trae", "2. 点击左上角菜单 → 新建Solo项目", "3. 选择项目保存位置", "4. 进入Solo工作界面"]},
              {"id": "b3", "type": "text", "content": "Solo界面布局（3:7比例）："},
              {"id": "b4", "type": "table", "headers": ["区域", "位置", "功能"], "rows": [["任务栏", "最左侧", "显示AI执行的任务列表，可隐藏"], ["对话框", "中间（30%）", "和AI对话，输入需求"], ["代码区", "右侧（70%）", "显示AI生成的代码"]]},
              {"id": "b5", "type": "tip", "content": "任务栏可以隐藏，让对话框和代码区占满屏幕\n对话和代码一般保持3:7比例，代码区更宽便于阅读"}
            ]
          },
          {
            "id": "l4",
            "title": "自动运行模式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Trae有两种运行模式：手动确认 和 自动运行\n自动运行模式让AI更高效地完成任务"},
              {"id": "b2", "type": "table", "headers": ["模式", "说明", "适用场景"], "rows": [["手动确认", "每步操作需要点击确认", "谨慎操作，学习时使用"], ["自动运行", "AI自动执行所有操作", "熟练后提高效率"]]},
              {"id": "b3", "type": "text", "content": "开启自动运行模式："},
              {"id": "b4", "type": "list", "items": ["1. 点击对话框底部的设置图标", "2. 找到「对话流设置」", "3. 将运行模式改为「自动运行」", "4. 关闭沙箱模式（可选）"]},
              {"id": "b5", "type": "tip", "content": "自动运行 = AI连续执行，不用反复点确认\n去掉沙箱 = 直接操作真实文件，效率更高\n建议熟练后再开启自动运行模式"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "第一个网页",
        "lessons": [
          {
            "id": "l1",
            "title": "创建网页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用Trae自然语言创建第一个网页"},
              {"id": "b2", "type": "text", "content": "前置设置（开启自动运行模式）："},
              {"id": "b3", "type": "list", "items": ["1. 点击对话框底部的设置图标", "2. 找到「对话流设置」", "3. 将运行模式改为「自动运行」", "4. 关闭沙箱模式"]},
              {"id": "b4", "type": "text", "content": "操作步骤："},
              {"id": "b5", "type": "list", "items": ["1. 输入：创建一个index.html网页，显示这是我的第一个网页，完成后预览", "2. AI自动生成代码并创建文件"]},
              {"id": "b6", "type": "code", "language": "html", "filename": "index.html", "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>我的第一个网页</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n    <p>这是我的第一个网页</p>\n</body>\n</html>"},
              {"id": "b7", "type": "text", "content": "代码解释："},
              {"id": "b8", "type": "table", "headers": ["标签", "作用"], "rows": [["<!DOCTYPE html>", "声明这是HTML5文档"], ["<html>", "网页的根元素，所有内容都在里面"], ["<head>", "头部信息，用户看不到"], ["<title>", "浏览器标签页显示的标题"], ["<body>", "网页主体，用户能看到的内容"], ["<h1>", "一级标题，最大的标题"], ["<p>", "段落，普通文字"]]},
              {"id": "b9", "type": "tip", "content": "自动运行 = AI连续执行，不用反复点确认\n去掉沙箱 = 直接操作真实文件，效率更高"}
            ]
          },
          {
            "id": "l2",
            "title": "预览网页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用Trae自然语言预览网页效果"},
              {"id": "b2", "type": "text", "content": "操作步骤："},
              {"id": "b3", "type": "list", "items": [ "1. 输入：预览index.html网页", "2. Trae自动打开浏览器显示网页"]},
              {"id": "b6", "type": "text", "content": "预览原理："},
              {"id": "b7", "type": "table", "headers": ["步骤", "说明"], "rows": [["1. 浏览器读取文件", "读取index.html的代码"], ["2. 解析HTML标签", "识别h1是标题、p是段落"], ["3. 渲染显示", "把标签转换成你看到的样子"]]},
              {"id": "b8", "type": "tip", "content": "修改代码后要刷新浏览器才能看到变化\n快捷键：F5 或 Ctrl+R"}
            ]
          },
          {
            "id": "l3",
            "title": "工作区切换",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "创建文件后，代码区顶部会出现两个tab按钮"},
              {"id": "b2", "type": "table", "headers": ["按钮", "功能"], "rows": [["编辑器", "点击查看和编辑代码"], ["浏览器", "点击预览项目效果"]]},
              {"id": "b3", "type": "text", "content": "切换方式："},
              {"id": "b4", "type": "list", "items": ["1. 点击「编辑器」→ 查看/编辑AI生成的代码", "2. 点击「浏览器」→ 预览网页效果"]},
              {"id": "b5", "type": "tip", "content": "编辑器看代码，浏览器看效果\n两个tab随时点击切换，边写边看"}
            ]
          },
          {
            "id": "l4",
            "title": "代码修改",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用自然语言描述修改需求，AI自动修改代码"},
              {"id": "b2", "type": "text", "content": "操作步骤："},
              {"id": "b3", "type": "list", "items": ["1. 在对话框输入修改需求", "2. AI自动修改代码", "3. 点击「浏览器」→ 查看修改效果"]},
              {"id": "b4", "type": "text", "content": "示例："},
              {"id": "b5", "type": "code", "language": "text", "filename": "输入需求", "code": "修改网页内容为：这是我的第二个网页"},
              {"id": "b6", "type": "tip", "content": "说需求 → AI改代码 → 看效果\n不用自己写代码，只需描述想要什么"}
            ]
          },
          {
            "id": "l5",
            "title": "代码回退",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "修改不满意？一键回退到之前的版本"},
              {"id": "b2", "type": "text", "content": "操作步骤："},
              {"id": "b3", "type": "list", "items": ["1. 找到对话框中AI的回复消息", "2. 点击消息右侧的「回退」按钮", "3. 代码自动恢复到修改前的状态"]},
              {"id": "b4", "type": "tip", "content": "点击回退按钮 → 代码恢复原样\n改错了不用怕，随时可以撤销"}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "前端Vue.js",
        "lessons": [
          {
            "id": "l1",
            "title": "创建Vue项目",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Vue.js是最流行的前端框架\n用于构建用户界面"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "创建项目", "code": "# 安装Node.js后执行\nnpm create vue@latest my-shop\ncd my-shop\nnpm install\nnpm run dev"},
              {"id": "b3", "type": "text", "content": "项目结构："},
              {"id": "b4", "type": "code", "language": "text", "filename": "目录结构", "code": "my-shop/\n├── src/\n│   ├── App.vue      # 根组件\n│   ├── main.js      # 入口文件\n│   └── components/  # 组件目录\n├── index.html       # HTML模板\n└── package.json     # 依赖配置"}
            ]
          },
          {
            "id": "l2",
            "title": "Vue基础语法",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Vue组件 = 模板 + 脚本 + 样式"},
              {"id": "b2", "type": "code", "language": "vue", "filename": "App.vue", "code": "<template>\n  <div>\n    <h1>{{ title }}</h1>\n    <p>价格: {{ price }} 元</p>\n    <button @click=\"buy\">购买</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\n\nconst title = ref('iPhone 15')\nconst price = ref(5999)\n\nfunction buy() {\n  alert('购买成功！')\n}\n</script>"},
              {"id": "b3", "type": "table", "headers": ["语法", "说明"], "rows": [["{{ }}", "显示变量"], ["@click", "点击事件"], ["ref()", "定义响应式变量"]]}
            ]
          },
          {
            "id": "l3",
            "title": "列表渲染",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "v-for：循环渲染列表数据"},
              {"id": "b2", "type": "code", "language": "vue", "filename": "商品列表.vue", "code": "<template>\n  <div>\n    <h1>商品列表</h1>\n    <div v-for=\"item in products\" :key=\"item.id\">\n      <h3>{{ item.name }}</h3>\n      <p>价格: {{ item.price }} 元</p>\n    </div>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\n\nconst products = ref([\n  { id: 1, name: 'iPhone 15', price: 5999 },\n  { id: 2, name: 'MacBook Pro', price: 12999 },\n  { id: 3, name: 'AirPods Pro', price: 1999 }\n])\n</script>"},
              {"id": "b3", "type": "tip", "content": "v-for必须配合:key使用\nkey用于标识每个元素的唯一性"}
            ]
          },
          {
            "id": "l4",
            "title": "条件渲染",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "v-if：根据条件显示/隐藏元素"},
              {"id": "b2", "type": "code", "language": "vue", "filename": "条件渲染.vue", "code": "<template>\n  <div>\n    <div v-if=\"isLogin\">\n      <p>欢迎，{{ username }}</p>\n      <button @click=\"logout\">退出</button>\n    </div>\n    <div v-else>\n      <p>请先登录</p>\n      <button @click=\"login\">登录</button>\n    </div>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\n\nconst isLogin = ref(false)\nconst username = ref('张三')\n\nfunction login() { isLogin.value = true }\nfunction logout() { isLogin.value = false }\n</script>"}
            ]
          },
          {
            "id": "l5",
            "title": "调用后端接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "fetch：发送HTTP请求获取数据"},
              {"id": "b2", "type": "code", "language": "vue", "filename": "调用接口.vue", "code": "<template>\n  <div>\n    <h1>商品列表</h1>\n    <div v-for=\"item in products\" :key=\"item.id\">\n      {{ item.name }} - {{ item.price }}元\n    </div>\n  </div>\n</template>\n\n<script setup>\nimport { ref, onMounted } from 'vue'\n\nconst products = ref([])\n\nonMounted(async () => {\n  // 调用后端接口获取商品列表\n  const res = await fetch('/api/products')\n  const data = await res.json()\n  products.value = data\n})\n</script>"},
              {"id": "b3", "type": "tip", "content": "onMounted：组件加载完成后执行\nasync/await：处理异步请求"}
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "后端Node.js",
        "lessons": [
          {
            "id": "l1",
            "title": "Node.js介绍",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Node.js让JavaScript可以运行在服务端\n用于开发后端接口"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "安装Node.js", "code": "# 下载安装包\n访问 nodejs.org 下载LTS版本\n\n# 验证安装\nnode -v\nnpm -v"}
            ]
          },
          {
            "id": "l2",
            "title": "创建Express项目",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Express是Node.js最流行的Web框架"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "创建项目", "code": "mkdir shop-api\ncd shop-api\nnpm init -y\nnpm install express"},
              {"id": "b3", "type": "code", "language": "javascript", "filename": "index.js", "code": "const express = require('express')\nconst app = express()\n\napp.use(express.json()) // 解析JSON请求体\n\n// 测试接口\napp.get('/api/hello', (req, res) => {\n  res.json({ message: '你好，世界！' })\n})\n\napp.listen(3000, () => {\n  console.log('服务启动: http://localhost:3000')\n})"},
              {"id": "b4", "type": "code", "language": "bash", "filename": "启动服务", "code": "node index.js"}
            ]
          },
          {
            "id": "l3",
            "title": "GET接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "GET接口用于获取数据"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "商品列表接口", "code": "// 模拟商品数据\nlet products = [\n  { id: 1, name: 'iPhone 15', price: 5999, stock: 100 },\n  { id: 2, name: 'MacBook Pro', price: 12999, stock: 50 }\n]\n\n// GET /api/products - 获取商品列表\napp.get('/api/products', (req, res) => {\n  res.json(products)\n})\n\n// GET /api/products/:id - 获取单个商品\napp.get('/api/products/:id', (req, res) => {\n  const id = parseInt(req.params.id)\n  const product = products.find(p => p.id === id)\n  if (product) {\n    res.json(product)\n  } else {\n    res.status(404).json({ error: '商品不存在' })\n  }\n})"},
              {"id": "b3", "type": "tip", "content": ":id是路由参数\n通过req.params.id获取"}
            ]
          },
          {
            "id": "l4",
            "title": "POST接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "POST接口用于创建数据"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "创建商品接口", "code": "// POST /api/products - 创建商品\napp.post('/api/products', (req, res) => {\n  const { name, price, stock } = req.body\n  \n  // 生成新ID\n  const id = products.length > 0 \n    ? Math.max(...products.map(p => p.id)) + 1 \n    : 1\n  \n  const newProduct = { id, name, price, stock }\n  products.push(newProduct)\n  \n  res.status(201).json(newProduct)\n})"},
              {"id": "b3", "type": "code", "language": "http", "filename": "测试请求", "code": "POST http://localhost:3000/api/products\nContent-Type: application/json\n\n{\n  \"name\": \"AirPods Pro\",\n  \"price\": 1999,\n  \"stock\": 200\n}"}
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "SQLite数据库",
        "lessons": [
          {
            "id": "l1",
            "title": "SQLite介绍",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "SQLite是轻量级数据库\n数据存储在单个文件中，无需安装服务"},
              {"id": "b2", "type": "table", "headers": ["特点", "说明"], "rows": [["零配置", "无需安装数据库服务"], ["文件存储", "数据存在单个.db文件"], ["跨平台", "Windows/Mac/Linux通用"], ["适合小项目", "学习、原型、小型应用"]]},
              {"id": "b3", "type": "code", "language": "bash", "filename": "安装依赖", "code": "npm install better-sqlite3"}
            ]
          },
          {
            "id": "l2",
            "title": "创建表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "SQL语句创建数据表"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "db.js", "code": "const Database = require('better-sqlite3')\nconst db = new Database('shop.db')\n\n// 创建商品表\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS products (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    price REAL NOT NULL,\n    stock INTEGER DEFAULT 0\n  )\n`)\n\n// 创建用户表\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    username TEXT UNIQUE NOT NULL,\n    password TEXT NOT NULL\n  )\n`)\n\n// 创建订单表\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS orders (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    user_id INTEGER NOT NULL,\n    product_id INTEGER NOT NULL,\n    quantity INTEGER NOT NULL,\n    total REAL NOT NULL,\n    created_at TEXT DEFAULT CURRENT_TIMESTAMP\n  )\n`)\n\nmodule.exports = db"}
            ]
          },
          {
            "id": "l3",
            "title": "增删改查",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "CRUD：Create/Read/Update/Delete"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "CRUD操作", "code": "const db = require('./db')\n\n// 查询所有商品\nconst products = db.prepare('SELECT * FROM products').all()\n\n// 查询单个商品\nconst product = db.prepare('SELECT * FROM products WHERE id = ?').get(1)\n\n// 插入商品\nconst insert = db.prepare('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)')\nconst result = insert.run('iPhone 15', 5999, 100)\nconsole.log('新增ID:', result.lastInsertRowid)\n\n// 更新商品\ndb.prepare('UPDATE products SET price = ? WHERE id = ?').run(5499, 1)\n\n// 删除商品\ndb.prepare('DELETE FROM products WHERE id = ?').run(1)"},
              {"id": "b3", "type": "tip", "content": "使用?占位符防止SQL注入\nprepare().get()查单条\nprepare().all()查多条"}
            ]
          },
          {
            "id": "l4",
            "title": "接口对接数据库",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "把数据库操作集成到接口中"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "index.js", "code": "const express = require('express')\nconst db = require('./db')\nconst app = express()\n\napp.use(express.json())\n\n// 获取商品列表\napp.get('/api/products', (req, res) => {\n  const products = db.prepare('SELECT * FROM products').all()\n  res.json(products)\n})\n\n// 获取单个商品\napp.get('/api/products/:id', (req, res) => {\n  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id)\n  if (product) {\n    res.json(product)\n  } else {\n    res.status(404).json({ error: '商品不存在' })\n  }\n})\n\n// 创建商品\napp.post('/api/products', (req, res) => {\n  const { name, price, stock } = req.body\n  const result = db.prepare('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)')\n    .run(name, price, stock || 0)\n  res.status(201).json({ id: result.lastInsertRowid, name, price, stock })\n})\n\napp.listen(3000)"}
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "JWT登录",
        "lessons": [
          {
            "id": "l1",
            "title": "JWT介绍",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "JWT = JSON Web Token\n用于用户身份认证的令牌"},
              {"id": "b2", "type": "code", "language": "text", "filename": "JWT结构", "code": "JWT = Header.Payload.Signature\n\nHeader: {\"alg\": \"HS256\", \"typ\": \"JWT\"}\nPayload: {\"userId\": 1, \"username\": \"张三\"}\nSignature: 签名（防篡改）"},
              {"id": "b3", "type": "code", "language": "bash", "filename": "安装依赖", "code": "npm install jsonwebtoken bcryptjs"}
            ]
          },
          {
            "id": "l2",
            "title": "用户注册",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "注册时密码需要加密存储"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "注册接口", "code": "const bcrypt = require('bcryptjs')\n\n// POST /api/register - 用户注册\napp.post('/api/register', (req, res) => {\n  const { username, password } = req.body\n  \n  // 检查用户是否已存在\n  const exists = db.prepare('SELECT id FROM users WHERE username = ?').get(username)\n  if (exists) {\n    return res.status(400).json({ error: '用户名已存在' })\n  }\n  \n  // 密码加密\n  const hashedPassword = bcrypt.hashSync(password, 10)\n  \n  // 插入用户\n  const result = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)')\n    .run(username, hashedPassword)\n  \n  res.status(201).json({ id: result.lastInsertRowid, username })\n})"}
            ]
          },
          {
            "id": "l3",
            "title": "用户登录",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "登录成功返回JWT令牌"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "登录接口", "code": "const jwt = require('jsonwebtoken')\nconst bcrypt = require('bcryptjs')\n\nconst SECRET_KEY = 'your-secret-key' // 生产环境用环境变量\n\n// POST /api/login - 用户登录\napp.post('/api/login', (req, res) => {\n  const { username, password } = req.body\n  \n  // 查找用户\n  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username)\n  if (!user) {\n    return res.status(401).json({ error: '用户名或密码错误' })\n  }\n  \n  // 验证密码\n  const valid = bcrypt.compareSync(password, user.password)\n  if (!valid) {\n    return res.status(401).json({ error: '用户名或密码错误' })\n  }\n  \n  // 生成JWT\n  const token = jwt.sign(\n    { userId: user.id, username: user.username },\n    SECRET_KEY,\n    { expiresIn: '7d' }\n  )\n  \n  res.json({ token, user: { id: user.id, username: user.username } })\n})"}
            ]
          },
          {
            "id": "l4",
            "title": "登录拦截",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "中间件拦截未登录请求"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "认证中间件", "code": "// 认证中间件\nfunction authMiddleware(req, res, next) {\n  const authHeader = req.headers.authorization\n  \n  if (!authHeader || !authHeader.startsWith('Bearer ')) {\n    return res.status(401).json({ error: '请先登录' })\n  }\n  \n  const token = authHeader.substring(7) // 去掉 'Bearer '\n  \n  try {\n    const decoded = jwt.verify(token, SECRET_KEY)\n    req.user = decoded // 把用户信息挂到req上\n    next()\n  } catch (err) {\n    return res.status(401).json({ error: '登录已过期，请重新登录' })\n  }\n}\n\n// 需要登录的接口\napp.get('/api/orders', authMiddleware, (req, res) => {\n  const orders = db.prepare('SELECT * FROM orders WHERE user_id = ?')\n    .all(req.user.userId)\n  res.json(orders)\n})"},
              {"id": "b3", "type": "tip", "content": "请求头格式：\nAuthorization: Bearer <token>"}
            ]
          },
          {
            "id": "l5",
            "title": "前端登录",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "前端保存token并携带请求"},
              {"id": "b2", "type": "code", "language": "vue", "filename": "Login.vue", "code": "<template>\n  <div>\n    <input v-model=\"username\" placeholder=\"用户名\">\n    <input v-model=\"password\" type=\"password\" placeholder=\"密码\">\n    <button @click=\"login\">登录</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\n\nconst username = ref('')\nconst password = ref('')\n\nasync function login() {\n  const res = await fetch('/api/login', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify({ \n      username: username.value, \n      password: password.value \n    })\n  })\n  const data = await res.json()\n  \n  if (res.ok) {\n    // 保存token\n    localStorage.setItem('token', data.token)\n    alert('登录成功')\n  } else {\n    alert(data.error)\n  }\n}\n</script>"},
              {"id": "b3", "type": "code", "language": "javascript", "filename": "携带token请求", "code": "// 获取需要登录的数据\nconst token = localStorage.getItem('token')\nconst res = await fetch('/api/orders', {\n  headers: {\n    'Authorization': `Bearer ${token}`\n  }\n})"}
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "商城实战",
        "lessons": [
          {
            "id": "l1",
            "title": "项目结构",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "简单商城包含：商品、订单、用户三个模块"},
              {"id": "b2", "type": "code", "language": "text", "filename": "项目结构", "code": "shop/\n├── frontend/          # 前端Vue项目\n│   └── src/\n│       ├── views/\n│       │   ├── Home.vue       # 商品列表\n│       │   ├── Login.vue      # 登录页\n│       │   └── Orders.vue     # 订单列表\n│       └── App.vue\n└── backend/           # 后端Node项目\n    ├── db.js          # 数据库\n    ├── index.js       # 入口\n    └── shop.db        # 数据文件"}
            ]
          },
          {
            "id": "l2",
            "title": "商品模块",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "商品接口：列表、详情、创建"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "商品接口", "code": "// GET /api/products - 商品列表\napp.get('/api/products', (req, res) => {\n  const products = db.prepare('SELECT * FROM products').all()\n  res.json(products)\n})\n\n// GET /api/products/:id - 商品详情\napp.get('/api/products/:id', (req, res) => {\n  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id)\n  res.json(product)\n})\n\n// POST /api/products - 创建商品（管理员）\napp.post('/api/products', authMiddleware, (req, res) => {\n  const { name, price, stock } = req.body\n  const result = db.prepare('INSERT INTO products (name, price, stock) VALUES (?, ?, ?)')\n    .run(name, price, stock)\n  res.json({ id: result.lastInsertRowid, name, price, stock })\n})"}
            ]
          },
          {
            "id": "l3",
            "title": "订单模块",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "订单接口：创建订单、我的订单"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "订单接口", "code": "// POST /api/orders - 创建订单\napp.post('/api/orders', authMiddleware, (req, res) => {\n  const { productId, quantity } = req.body\n  const userId = req.user.userId\n  \n  // 获取商品信息\n  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(productId)\n  if (!product) {\n    return res.status(404).json({ error: '商品不存在' })\n  }\n  \n  // 检查库存\n  if (product.stock < quantity) {\n    return res.status(400).json({ error: '库存不足' })\n  }\n  \n  // 计算总价\n  const total = product.price * quantity\n  \n  // 创建订单\n  const result = db.prepare(\n    'INSERT INTO orders (user_id, product_id, quantity, total) VALUES (?, ?, ?, ?)'\n  ).run(userId, productId, quantity, total)\n  \n  // 扣减库存\n  db.prepare('UPDATE products SET stock = stock - ? WHERE id = ?')\n    .run(quantity, productId)\n  \n  res.json({ id: result.lastInsertRowid, productId, quantity, total })\n})\n\n// GET /api/orders - 我的订单\napp.get('/api/orders', authMiddleware, (req, res) => {\n  const orders = db.prepare(`\n    SELECT o.*, p.name as productName \n    FROM orders o \n    JOIN products p ON o.product_id = p.id \n    WHERE o.user_id = ?\n  `).all(req.user.userId)\n  res.json(orders)\n})"}
            ]
          },
          {
            "id": "l4",
            "title": "用户模块",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用户接口：注册、登录、个人信息"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "用户接口", "code": "// POST /api/register - 注册\napp.post('/api/register', (req, res) => {\n  const { username, password } = req.body\n  const exists = db.prepare('SELECT id FROM users WHERE username = ?').get(username)\n  if (exists) return res.status(400).json({ error: '用户名已存在' })\n  \n  const hashedPassword = bcrypt.hashSync(password, 10)\n  const result = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)')\n    .run(username, hashedPassword)\n  res.json({ id: result.lastInsertRowid, username })\n})\n\n// POST /api/login - 登录\napp.post('/api/login', (req, res) => {\n  const { username, password } = req.body\n  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username)\n  if (!user || !bcrypt.compareSync(password, user.password)) {\n    return res.status(401).json({ error: '用户名或密码错误' })\n  }\n  const token = jwt.sign({ userId: user.id, username }, SECRET_KEY, { expiresIn: '7d' })\n  res.json({ token, user: { id: user.id, username } })\n})\n\n// GET /api/user - 获取当前用户信息\napp.get('/api/user', authMiddleware, (req, res) => {\n  res.json(req.user)\n})"}
            ]
          },
          {
            "id": "l5",
            "title": "完整代码",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "后端完整代码"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "index.js完整版", "code": "const express = require('express')\nconst jwt = require('jsonwebtoken')\nconst bcrypt = require('bcryptjs')\nconst Database = require('better-sqlite3')\n\nconst app = express()\nconst db = new Database('shop.db')\nconst SECRET_KEY = 'your-secret-key'\n\napp.use(express.json())\n\n// 初始化表\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, username TEXT UNIQUE, password TEXT);\n  CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, price REAL, stock INTEGER);\n  CREATE TABLE IF NOT EXISTS orders (id INTEGER PRIMARY KEY, user_id INTEGER, product_id INTEGER, quantity INTEGER, total REAL, created_at TEXT DEFAULT CURRENT_TIMESTAMP);\n`)\n\n// 认证中间件\nfunction auth(req, res, next) {\n  const token = req.headers.authorization?.substring(7)\n  if (!token) return res.status(401).json({ error: '请先登录' })\n  try {\n    req.user = jwt.verify(token, SECRET_KEY)\n    next()\n  } catch { res.status(401).json({ error: '登录已过期' }) }\n}\n\n// 用户接口\napp.post('/api/register', (req, res) => { /* ... */ })\napp.post('/api/login', (req, res) => { /* ... */ })\n\n// 商品接口\napp.get('/api/products', (req, res) => { /* ... */ })\napp.post('/api/products', auth, (req, res) => { /* ... */ })\n\n// 订单接口\napp.get('/api/orders', auth, (req, res) => { /* ... */ })\napp.post('/api/orders', auth, (req, res) => { /* ... */ })\n\napp.listen(3000, () => console.log('服务启动: http://localhost:3000'))"},
              {"id": "b3", "type": "tip", "content": "用Trae的Ctrl+I功能\n输入需求，让AI帮你生成完整代码"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-workflow",
    "pathId": "ai",
    "title": "AI工作流",
    "desc": "智能体/视频/PPT/Excel/爬虫/简历工作流",
    "icon": "⚡",
    "chapters": [
      {
        "id": "ch0",
        "title": "智能体基础",
        "lessons": [
          {
            "id": "l1",
            "title": "什么是Agent",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Agent = 大模型 + 工具 + 记忆\n能理解指令、调用工具、完成任务的AI系统"},
              {"id": "b2", "type": "table", "headers": ["对比项", "普通对话", "Agent"], "rows": [["能力", "只能回答问题", "能执行操作"], ["工具", "无", "可调用API/插件"], ["示例", "今天天气怎么样？", "帮我查北京天气并发微信给张三"]]},
              {"id": "b3", "type": "tip", "content": "Agent = 能干活的AI助手\n不只是聊天，还能帮你做事"}
            ]
          },
          {
            "id": "l2",
            "title": "ReAct模式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "ReAct = Reasoning + Acting\n推理与行动交替进行"},
              {"id": "b2", "type": "code", "language": "text", "filename": "ReAct示例", "code": "用户：帮我订一张明天北京到上海的机票\n\nThought: 需要查询航班信息\nAction: search_flights(from='北京', to='上海')\nObservation: 找到3个航班\n\nThought: 需要用户选择航班\nAction: ask_user('请选择航班')\nObservation: 用户选择1\n\nThought: 开始订票\nAction: book_flight(flight='CA1234')\nObservation: 订票成功\n\nAnswer: 已为您预订CA1234航班"}
            ]
          },
          {
            "id": "l3",
            "title": "Coze智能体",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 访问 coze.cn 登录", "2. 点击'创建Bot'", "3. 设置Bot名称和头像", "4. 编写人设Prompt", "5. 添加插件/工作流", "6. 测试并发布"]},
              {"id": "b2", "type": "code", "language": "text", "filename": "人设Prompt模板", "code": "# 角色\n你是XXX，负责XXX\n\n# 技能\n1. 能做XXX\n2. 能做XXX\n\n# 限制\n- 不能做XXX\n- 遇到XXX时，建议联系人工"}
            ]
          }
        ]
      },
      {
        "id": "ch1",
        "title": "工作流基础",
        "lessons": [
          {
            "id": "l1",
            "title": "什么是AI工作流",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "AI工作流 = 自动化 + AI\n让AI完成重复性工作，解放双手"},
              {"id": "b2", "type": "table", "headers": ["传统方式", "AI工作流"], "rows": [["手动做PPT", "AI生成PPT"], ["手动剪视频", "AI自动剪辑"], ["手动整理数据", "AI处理Excel"], ["手动写简历", "AI优化简历"]]},
              {"id": "b3", "type": "tip", "content": "工作流工具：Coze工作流、n8n、Dify"}
            ]
          },
          {
            "id": "l2",
            "title": "Coze工作流",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["开始节点：接收输入", "LLM节点：调用大模型", "代码节点：执行代码", "条件节点：分支判断", "HTTP节点：调用API", "结束节点：输出结果"]},
              {"id": "b2", "type": "code", "language": "text", "filename": "工作流示例", "code": "用户输入主题\n     ↓\nLLM生成大纲\n     ↓\n循环每个章节\n     ↓\nLLM生成内容\n     ↓\n整合输出"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "视频工作流",
        "lessons": [
          {
            "id": "l1",
            "title": "AI口播视频",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "AI口播 = AI写脚本 + AI配音 + AI生成视频"},
              {"id": "b2", "type": "list", "items": ["1. 输入主题/大纲", "2. AI生成视频脚本", "3. AI文字转语音（TTS）", "4. AI生成配图/视频片段", "5. 自动合成视频"]},
              {"id": "b3", "type": "table", "headers": ["工具", "用途"], "rows": [["ChatGPT/通义", "生成脚本"], ["微软TTS/阿里TTS", "文字转语音"], ["剪映/CapCut", "视频合成"], ["Pika/可灵", "AI生成视频片段"]]}
            ]
          },
          {
            "id": "l2",
            "title": "数字人视频",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "数字人 = AI虚拟主播\n不需要真人出镜"},
              {"id": "b2", "type": "table", "headers": ["平台", "特点"], "rows": [["HeyGen", "海外最强，效果真实"], ["硅语", "国内平台，中文友好"], ["D-ID", "操作简单，API可用"], ["腾讯智影", "免费额度，国内可用"]]},
              {"id": "b3", "type": "list", "items": ["1. 选择/上传数字人形象", "2. 输入文字脚本", "3. 选择声音", "4. 生成视频"]}
            ]
          },
          {
            "id": "l3",
            "title": "AI漫剧",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "AI漫剧 = AI生成漫画风格的短剧"},
              {"id": "b2", "type": "list", "items": ["1. AI生成剧本（分场景）", "2. AI生成每个场景的图片（Midjourney/DALL-E）", "3. AI配音", "4. 剪辑合成视频"]},
              {"id": "b3", "type": "code", "language": "text", "filename": "剧本格式", "code": "场景1：咖啡厅内\n[描述] 阳光透过玻璃窗洒在桌上\n[角色A] 你怎么来了？\n[角色B] 我有话要对你说...\n\n场景2：街道\n[描述] 夜晚的街道，路灯昏黄\n..."}
            ]
          },
          {
            "id": "l4",
            "title": "AI科普视频",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "科普视频工作流：知识 → 脚本 → 视频"},
              {"id": "b2", "type": "list", "items": ["1. 输入科普主题", "2. AI搜索资料、整理知识点", "3. AI生成口播脚本", "4. AI生成配图/动画", "5. TTS配音 + 合成视频"]},
              {"id": "b3", "type": "tip", "content": "科普视频关键：\n• 内容准确、有深度\n• 表达通俗易懂\n• 配图生动形象"}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "PPT工作流",
        "lessons": [
          {
            "id": "l1",
            "title": "AI生成PPT",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "一句话生成专业PPT"},
              {"id": "b2", "type": "table", "headers": ["工具", "特点"], "rows": [["Gamma", "效果最好，支持中文"], ["美图AI PPT", "国内可用，免费"], ["讯飞智文", "中文优化"], ["ChatPPT", "集成ChatGPT"]]},
              {"id": "b3", "type": "list", "items": ["1. 输入PPT主题/大纲", "2. AI生成内容结构", "3. 选择模板风格", "4. AI填充内容", "5. 导出PPT文件"]}
            ]
          },
          {
            "id": "l2",
            "title": "自定义PPT工作流",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "工作流设计", "code": "输入：PPT主题\n     ↓\nLLM生成大纲（5-8页）\n     ↓\n循环每一页：\n  - LLM生成标题\n  - LLM生成要点（3-5条）\n  - AI生成配图\n     ↓\n调用PPT生成API\n     ↓\n输出：PPT文件"}
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "Excel工作流",
        "lessons": [
          {
            "id": "l1",
            "title": "AI处理Excel",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "AI自动化处理表格数据"},
              {"id": "b2", "type": "table", "headers": ["场景", "AI能力"], "rows": [["数据清洗", "去重、填充、格式化"], ["数据分析", "统计、分组、趋势"], ["公式生成", "描述需求，AI写公式"], ["图表生成", "一键生成可视化"]]},
              {"id": "b3", "type": "tip", "content": "推荐工具：\n• ChatGPT Code Interpreter\n• 通义千问（上传Excel）\n• WPS AI"}
            ]
          },
          {
            "id": "l2",
            "title": "自动化报表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 上传原始数据Excel", "2. AI分析数据结构", "3. 用户描述报表需求", "4. AI生成处理代码", "5. 输出格式化报表"]}
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "爬虫工作流",
        "lessons": [
          {
            "id": "l1",
            "title": "AI辅助爬虫",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "AI + 爬虫 = 智能数据采集"},
              {"id": "b2", "type": "table", "headers": ["传统爬虫", "AI爬虫"], "rows": [["写选择器提取", "AI自动识别内容"], ["处理反爬困难", "AI绕过验证"], ["数据清洗复杂", "AI自动清洗"]]},
              {"id": "b3", "type": "code", "language": "python", "filename": "AI提取内容", "code": "# 让AI从HTML中提取结构化数据\nprompt = '''\n从以下HTML中提取商品信息，返回JSON格式：\n- name: 商品名称\n- price: 价格\n- description: 描述\n\nHTML:\n{html_content}\n'''\n\nresponse = client.chat.completions.create(\n    model='gpt-4o',\n    messages=[{'role': 'user', 'content': prompt}]\n)"}
            ]
          },
          {
            "id": "l2",
            "title": "无代码爬虫",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["工具", "特点"], "rows": [["Firecrawl", "AI驱动，自动提取"], ["八爪鱼", "可视化操作，国内"], ["WebScraper", "浏览器插件"]]},
              {"id": "b2", "type": "list", "items": ["1. 输入目标网址", "2. AI自动识别数据", "3. 确认提取字段", "4. 批量采集", "5. 导出数据"]}
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "PDF简历工作流",
        "lessons": [
          {
            "id": "l1",
            "title": "AI优化简历",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "上传简历，AI帮你优化"},
              {"id": "b2", "type": "list", "items": ["1. 上传现有简历PDF", "2. AI解析简历内容", "3. 输入目标岗位JD", "4. AI匹配优化建议", "5. AI重写优化内容", "6. 生成新简历PDF"]}
            ]
          },
          {
            "id": "l2",
            "title": "简历生成工作流",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "工作流设计", "code": "输入：基本信息 + 目标岗位\n        ↓\nAI分析岗位要求\n        ↓\nAI生成简历各模块：\n  - 个人优势（匹配岗位）\n  - 工作经历（STAR法则）\n  - 项目经验（量化成果）\n  - 技能清单\n        ↓\n套用简历模板\n        ↓\n输出：PDF简历"},
              {"id": "b2", "type": "tip", "content": "关键点：\n• 针对岗位定制内容\n• 用数据量化成果\n• 突出匹配的技能"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-video",
    "pathId": "ai",
    "title": "AI视频",
    "desc": "口播/数字人/漫剧/科普视频制作",
    "icon": "🎬",
    "chapters": [
      {
        "id": "ch1",
        "title": "AI视频基础",
        "lessons": [
          {
            "id": "l1",
            "title": "AI视频类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["类型", "特点", "适合场景"], "rows": [["AI口播", "配音+配图/视频", "知识分享、带货"], ["数字人", "虚拟主播出镜", "新闻、培训、营销"], ["AI漫剧", "漫画风格短剧", "剧情、情感内容"], ["AI科普", "知识可视化", "教育、科普"]]},
              {"id": "b2", "type": "tip", "content": "选择依据：\n• 有真人愿意出镜 → 传统拍摄\n• 无真人/想批量生产 → AI视频"}
            ]
          },
          {
            "id": "l2",
            "title": "视频制作流程",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 选题策划：确定主题、受众", "2. 脚本撰写：AI生成或人工撰写", "3. 素材准备：配图、视频片段、音乐", "4. 配音：TTS或真人录制", "5. 剪辑合成：剪映、Premiere", "6. 发布运营：各平台分发"]},
              {"id": "b2", "type": "table", "headers": ["环节", "AI工具"], "rows": [["脚本", "ChatGPT、通义千问"], ["配图", "Midjourney、DALL-E"], ["配音", "微软TTS、阿里TTS"], ["视频", "Pika、可灵、Sora"]]}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "AI口播",
        "lessons": [
          {
            "id": "l1",
            "title": "口播脚本撰写",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "口播脚本 = 开头吸引 + 内容主体 + 结尾引导"},
              {"id": "b2", "type": "code", "language": "text", "filename": "脚本Prompt", "code": "请帮我写一个1分钟的口播视频脚本，主题是《XXX》\n\n要求：\n1. 开头用问题或金句吸引注意（5秒）\n2. 内容分3个要点，每个20秒\n3. 结尾引导关注/点赞（5秒）\n4. 语言口语化，有节奏感\n5. 标注【画面提示】便于配图"},
              {"id": "b3", "type": "tip", "content": "口播脚本技巧：\n• 开头3秒决定用户是否看下去\n• 每30秒一个记忆点\n• 语言要像聊天，不要像念稿"}
            ]
          },
          {
            "id": "l2",
            "title": "AI配音",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["TTS工具", "特点", "价格"], "rows": [["微软Azure TTS", "效果最好，多语言", "免费额度+付费"], ["阿里云TTS", "中文效果好", "免费额度+付费"], ["剪映", "内置配音，简单", "免费"], ["ElevenLabs", "声音克隆", "付费"]]},
              {"id": "b2", "type": "code", "language": "python", "filename": "微软TTS示例", "code": "import azure.cognitiveservices.speech as speechsdk\n\nspeech_config = speechsdk.SpeechConfig(\n    subscription='your-key', \n    region='eastasia'\n)\nspeech_config.speech_synthesis_voice_name = 'zh-CN-XiaoxiaoNeural'\n\nsynthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config)\nresult = synthesizer.speak_text_async('大家好，欢迎观看本期视频').get()"}
            ]
          },
          {
            "id": "l3",
            "title": "AI配图配视频",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["工具", "用途", "效果"], "rows": [["Midjourney", "AI生成图片", "效果最好"], ["DALL-E 3", "ChatGPT集成", "使用方便"], ["Pika", "文生视频", "短片段"], ["可灵", "文生视频", "国内可用"]]},
              {"id": "b2", "type": "code", "language": "text", "filename": "Midjourney提示词", "code": "A modern office scene with people working on computers,\nprofessional photography, soft lighting, 4k quality --ar 16:9"}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "数字人",
        "lessons": [
          {
            "id": "l1",
            "title": "数字人平台",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["平台", "特点", "价格"], "rows": [["HeyGen", "效果真实，多语言", "$24/月起"], ["D-ID", "操作简单，API可用", "$5.9/月起"], ["硅语", "国内平台，中文好", "按量付费"], ["腾讯智影", "免费额度多", "免费+付费"]]},
              {"id": "b2", "type": "tip", "content": "选择建议：\n• 预算充足 → HeyGen\n• 需要API → D-ID\n• 国内使用 → 硅语/智影"}
            ]
          },
          {
            "id": "l2",
            "title": "HeyGen使用",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 注册HeyGen账号", "2. 选择数字人形象（或上传自己）", "3. 输入视频脚本", "4. 选择语音和语言", "5. 生成预览", "6. 导出视频"]},
              {"id": "b2", "type": "tip", "content": "技巧：\n• 脚本分段，便于编辑\n• 选择与内容匹配的形象\n• 注意口型同步效果"}
            ]
          },
          {
            "id": "l3",
            "title": "声音克隆",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用自己的声音生成数字人视频"},
              {"id": "b2", "type": "list", "items": ["1. 录制3-5分钟的清晰语音", "2. 上传到声音克隆平台", "3. 训练声音模型", "4. 输入文字，生成你的声音", "5. 配合数字人生成视频"]},
              {"id": "b3", "type": "table", "headers": ["平台", "声音克隆"], "rows": [["ElevenLabs", "效果最好"], ["HeyGen", "内置克隆"], ["讯飞", "中文效果好"]]}
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "AI漫剧",
        "lessons": [
          {
            "id": "l1",
            "title": "漫剧制作流程",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 创作剧本（分场景、分镜）", "2. 设计角色形象", "3. AI生成每个场景图片", "4. 添加对话气泡/字幕", "5. 配音配乐", "6. 剪辑合成"]},
              {"id": "b2", "type": "code", "language": "text", "filename": "分镜脚本格式", "code": "第1页\n场景：咖啡厅，白天\n画面：女主角坐在窗边，阳光洒在脸上\n台词：（内心OS）他怎么还没来...\nPrompt: A young Asian woman sitting by window in cafe, soft sunlight, anime style\n\n第2页\n场景：咖啡厅门口\n画面：男主角推门进入\n台词：抱歉，我来晚了\nPrompt: A young Asian man opening cafe door, anime style"}
            ]
          },
          {
            "id": "l2",
            "title": "角色一致性",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "保持角色在不同场景中外貌一致"},
              {"id": "b2", "type": "table", "headers": ["方法", "说明"], "rows": [["参考图", "上传角色参考图"], ["详细描述", "固定外貌特征描述"], ["seed固定", "使用相同随机种子"], ["AI工具", "使用Character AI工具"]]},
              {"id": "b3", "type": "code", "language": "text", "filename": "角色描述模板", "code": "角色A固定描述：\na 25-year-old Asian woman with long black hair, \nbig eyes, wearing white blouse, anime style\n\n每个场景加上这段描述，保持一致性"}
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "AI科普",
        "lessons": [
          {
            "id": "l1",
            "title": "科普视频特点",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "科普视频 = 知识 + 可视化 + 趣味性"},
              {"id": "b2", "type": "table", "headers": ["要素", "说明"], "rows": [["内容准确", "引用权威来源"], ["通俗易懂", "避免专业术语"], ["视觉丰富", "图表、动画、示意图"], ["节奏紧凑", "每30秒一个知识点"]]},
              {"id": "b3", "type": "tip", "content": "爆款科普视频公式：\n震惊的事实 + 原理解释 + 生活应用"}
            ]
          },
          {
            "id": "l2",
            "title": "科普脚本模板",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "科普脚本Prompt", "code": "请帮我写一个2分钟的科普视频脚本\n主题：《为什么飞机能飞起来》\n\n结构要求：\n1. 开头（10秒）：用日常现象引入，引发好奇\n2. 原理解释（60秒）：用生活比喻解释伯努利原理\n3. 实验演示（30秒）：简单实验验证\n4. 延伸知识（15秒）：有趣的相关知识\n5. 结尾（5秒）：总结+引导关注\n\n要求：\n- 语言通俗，避免专业术语\n- 每个知识点配【画面建议】\n- 加入1-2个类比或比喻"}
            ]
          },
          {
            "id": "l3",
            "title": "知识可视化",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["内容类型", "可视化方式"], "rows": [["数据对比", "柱状图、饼图"], ["流程原理", "动画、示意图"], ["概念关系", "思维导图"], ["时间线", "时间轴动画"]]},
              {"id": "b2", "type": "tip", "content": "可视化工具：\n• Canva：信息图\n• Animaker：动画\n• After Effects：专业动效"}
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "知识章节视频",
        "lessons": [
          {
            "id": "l1",
            "title": "课程视频制作",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "系统化的知识视频 = 课程"},
              {"id": "b2", "type": "list", "items": ["1. 课程大纲设计", "2. 章节知识点拆分", "3. 每个知识点制作视频", "4. 配套练习/测验", "5. 发布到学习平台"]},
              {"id": "b3", "type": "table", "headers": ["平台", "特点"], "rows": [["B站", "免费，流量大"], ["知识星球", "付费社群"], ["小鹅通", "付费课程"], ["Udemy", "海外课程"]]}
            ]
          },
          {
            "id": "l2",
            "title": "批量生成",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用AI工作流批量生成课程视频"},
              {"id": "b2", "type": "code", "language": "text", "filename": "批量生成流程", "code": "输入：课程大纲（多个知识点）\n           ↓\n      循环每个知识点：\n           ↓\n      AI生成脚本\n           ↓\n      AI生成配图\n           ↓\n      TTS配音\n           ↓\n      自动合成视频\n           ↓\n输出：多个课程视频"},
              {"id": "b3", "type": "tip", "content": "批量生成注意：\n• 保持风格统一\n• 检查内容准确性\n• 人工审核把关"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-frontend-basic",
    "pathId": "ai",
    "title": "AI前端基础",
    "desc": "trae自然语言创建网页",
    "icon": "🎨",
    "chapters": [
      {
        "id": "ch1",
        "title": "Trae下载安装",
        "lessons": [
          {
            "id": "l1",
            "title": "Trae介绍",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Trae是字节跳动推出的AI编程IDE\n国内可用，免费强大，中文友好"},
              {"id": "b2", "type": "table", "headers": ["特点", "说明"], "rows": [["免费", "无需付费，功能完整"], ["国内可用", "无需VPN，服务器在国内"], ["中文优化", "中文交互体验好"], ["Agent模式", "支持多文件编辑"]]},
              {"id": "b3", "type": "tip", "content": "Trae = 国产版Cursor\n适合国内开发者使用"}
            ]
          },
          {
            "id": "l2",
            "title": "下载安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 访问官网：trae.ai", "2. 点击下载按钮", "3. 选择对应系统版本（Windows/Mac）", "4. 运行安装程序", "5. 登录字节账号"]},
              {"id": "b2", "type": "tip", "content": "安装后打开Trae，用手机号登录即可使用"}
            ]
          },
          {
            "id": "l3",
            "title": "创建文件夹",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "创建文件夹"},
              {"id": "b2", "type": "list", "items": ["1. 打开Trae", "2. 新建文件夹", "3. 进入Solo工作界面"]},
              {"id": "b3", "type": "text", "content": "Solo界面布局（3:7比例）："},
              {"id": "b4", "type": "table", "headers": ["区域", "位置", "功能"], "rows": [["任务栏", "最左侧", "显示AI执行的任务列表，可隐藏"], ["对话框", "中间（30%）", "和AI对话，输入需求"], ["代码区", "右侧（70%）", "显示AI生成的代码"]]},
              {"id": "b5", "type": "tip", "content": "任务栏可以隐藏，让对话框和代码区占满屏幕\n对话和代码一般保持3:7比例，代码区更宽便于阅读"}
            ]
          },
          {
            "id": "l4",
            "title": "自动运行模式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Trae有两种运行模式：手动确认 和 自动运行\n自动运行模式让AI更高效地完成任务"},
              {"id": "b2", "type": "table", "headers": ["模式", "说明", "适用场景"], "rows": [["手动确认", "每步操作需要点击确认", "谨慎操作，学习时使用"], ["自动运行", "AI自动执行所有操作", "熟练后提高效率"]]},
              {"id": "b3", "type": "text", "content": "开启自动运行模式："},
              {"id": "b4", "type": "list", "items": ["1. 点击对话框底部的设置图标", "2. 找到「对话流设置」", "3. 将运行模式改为「自动运行」", "4. 关闭沙箱模式（可选）"]},
              {"id": "b5", "type": "tip", "content": "自动运行 = AI连续执行，不用反复点确认\n去掉沙箱 = 直接操作真实文件，效率更高\n建议熟练后再开启自动运行模式"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "第一个网页",
        "lessons": [
          {
            "id": "l1",
            "title": "创建网页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用Trae自然语言创建第一个网页"},
              {"id": "b2", "type": "text", "content": "操作步骤："},
              {"id": "b3", "type": "list", "items": ["1. 输入：创建一个index.html网页，显示这是我的第一个网页，完成后预览", "2. AI自动生成代码并创建文件"]},
              {"id": "b4", "type": "code", "language": "html", "filename": "index.html", "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>我的第一个网页</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n    <p>这是我的第一个网页</p>\n</body>\n</html>"},
              {"id": "b5", "type": "text", "content": "代码解释："},
              {"id": "b6", "type": "table", "headers": ["标签", "作用"], "rows": [["<!DOCTYPE html>", "声明这是HTML5文档"], ["<html>", "网页的根元素，所有内容都在里面"], ["<head>", "头部信息，用户看不到"], ["<title>", "浏览器标签页显示的标题"], ["<body>", "网页主体，用户能看到的内容"], ["<h1>", "一级标题，最大的标题"], ["<p>", "段落，普通文字"]]},
              {"id": "b7", "type": "tip", "content": "自动运行 = AI连续执行，不用反复点确认\n去掉沙箱 = 直接操作真实文件，效率更高"}
            ]
          },
          {
            "id": "l2",
            "title": "预览网页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用Trae自然语言预览网页效果"},
              {"id": "b2", "type": "text", "content": "操作步骤："},
              {"id": "b3", "type": "list", "items": ["1. 输入：预览index.html网页", "2. Trae自动打开浏览器显示网页"]},
              {"id": "b4", "type": "text", "content": "预览原理："},
              {"id": "b5", "type": "table", "headers": ["步骤", "说明"], "rows": [["1. 浏览器读取文件", "读取index.html的代码"], ["2. 解析HTML标签", "识别h1是标题、p是段落"], ["3. 渲染显示", "把标签转换成你看到的样子"]]},
              {"id": "b6", "type": "tip", "content": "修改代码后要刷新浏览器才能看到变化\n快捷键：F5 或 Ctrl+R"}
            ]
          },
          {
            "id": "l3",
            "title": "工作区切换",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "创建文件后，代码区顶部会出现两个tab按钮"},
              {"id": "b2", "type": "table", "headers": ["按钮", "功能"], "rows": [["编辑器", "点击查看和编辑代码"], ["浏览器", "点击预览项目效果"]]},
              {"id": "b3", "type": "text", "content": "切换方式："},
              {"id": "b4", "type": "list", "items": ["1. 点击「编辑器」→ 查看/编辑AI生成的代码", "2. 点击「浏览器」→ 预览网页效果"]},
              {"id": "b5", "type": "tip", "content": "编辑器看代码，浏览器看效果\n两个tab随时点击切换，边写边看"}
            ]
          },
          {
            "id": "l4",
            "title": "代码修改",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用自然语言描述修改需求，AI自动修改代码"},
              {"id": "b2", "type": "text", "content": "操作步骤："},
              {"id": "b3", "type": "list", "items": ["1. 在对话框输入修改需求", "2. AI自动修改代码", "3. 点击「浏览器」→ 查看修改效果"]},
              {"id": "b4", "type": "text", "content": "示例："},
              {"id": "b5", "type": "code", "language": "text", "filename": "输入需求", "code": "修改网页内容为：这是我的第二个网页"},
              {"id": "b6", "type": "tip", "content": "说需求 → AI改代码 → 看效果\n不用自己写代码，只需描述想要什么"}
            ]
          },
          {
            "id": "l5",
            "title": "代码回退",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "修改不满意？一键回退到之前的版本"},
              {"id": "b2", "type": "text", "content": "操作步骤："},
              {"id": "b3", "type": "list", "items": ["1. 找到对话框中AI的回复消息", "2. 点击消息右侧的「回退」按钮", "3. 代码自动恢复到修改前的状态"]},
              {"id": "b4", "type": "tip", "content": "点击回退按钮 → 代码恢复原样\n改错了不用怕，随时可以撤销"}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "HTML基础",
        "lessons": [
          {
            "id": "l1","title": "标题和段落",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "创建商品详情页：\n1. 大标题：iPhone 15 Pro\n2. 一段商品介绍文字\n3. 价格：¥9999"},
              {"id": "b2", "type": "tip", "content": "trae会使用h1标题标签和p段落标签"}
            ]
          },
          {
            "id": "l2",
            "title": "链接",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "添加两个链接：\n1. 查看更多商品，跳转到淘宝\n2. 去下单，跳转到order.html"},
              {"id": "b2", "type": "tip", "content": "trae会使用a标签，href指定跳转地址"}
            ]
          },
          {
            "id": "l3",
            "title": "图片",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "添加一张商品图片iphone.jpg"},
              {"id": "b2", "type": "tip", "content": "trae会使用img标签，src指定图片地址"}
            ]
          },
          {
            "id": "l4",
            "title": "列表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "添加商品规格列表：\n- 128G ¥7999\n- 256G ¥8999\n- 512G ¥9999"},
              {"id": "b2", "type": "tip", "content": "trae会使用ul无序列表和li列表项"}
            ]
          },
          {
            "id": "l5",
            "title": "表格",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "用表格展示商品规格：\n容量 | 价格\n128G | ¥7999\n256G | ¥8999\n512G | ¥9999"},
              {"id": "b2", "type": "tip", "content": "trae会使用table/tr/th/td标签创建表格"}
            ]
          },
          {
            "id": "l6",
            "title": "表单",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "添加下单表单：\n1. 收货人输入框\n2. 收货地址输入框\n3. 购买数量输入框\n4. 立即下单按钮"},
              {"id": "b2", "type": "tip", "content": "trae会使用form/input/button标签"}
            ]
          },
          {
            "id": "l7",
            "title": "div和span",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "用div划分页面区域：商品图片区、商品信息区、下单表单区\n用span把价格¥9999包起来，方便后面改成红色"},
              {"id": "b2", "type": "tip", "content": "div是块级容器独占一行，span是行内元素不换行"}
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "CSS样式",
        "lessons": [
          {
            "id": "l1",
            "title": "选择器",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "给标题h1添加样式\n给class为price的元素添加样式\n给id为title的元素添加样式"},
              {"id": "b2", "type": "tip", "content": "trae会使用标签选择器、.class选择器、#id选择器"}
            ]
          },
          {
            "id": "l2",
            "title": "颜色和字号",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "把标题改成深灰色#333，字号24px，加粗\n把描述文字改成浅灰色#666，字号14px，行高1.6"},
              {"id": "b2", "type": "tip", "content": "trae会使用color/font-size/font-weight/line-height"}
            ]
          },
          {
            "id": "l3",
            "title": "宽高和边距",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "设置商品卡片宽度200px，内边距16px，元素之间间距12px"},
              {"id": "b2", "type": "tip", "content": "trae会使用width/padding/margin设置尺寸和间距"}
            ]
          },
          {
            "id": "l4",
            "title": "背景和边框",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "给卡片添加白色背景、1px灰色边框、8px圆角、轻微阴影"},
              {"id": "b2", "type": "tip", "content": "trae会使用background/border/border-radius/box-shadow"}
            ]
          },
          {
            "id": "l5",
            "title": "Flex水平布局",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "把导航栏改成水平布局，logo在左边，菜单在右边，垂直居中"},
              {"id": "b2", "type": "tip", "content": "trae会使用display: flex和justify-content: space-between"}
            ]
          },
          {
            "id": "l6",
            "title": "Flex垂直布局",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "把商品详情改成垂直布局：图片、标题、价格上下排列，水平居中，间距16px"},
              {"id": "b2", "type": "tip", "content": "trae会使用flex-direction: column和gap"}
            ]
          },
          {
            "id": "l7",
            "title": "商品列表布局",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "把商品列表改成一行显示4个，超出自动换行，间距16px"},
              {"id": "b2", "type": "tip", "content": "trae会使用flex-wrap: wrap和gap实现卡片布局"}
            ]
          },
          {
            "id": "l8",
            "title": "按钮样式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "把下单按钮改成蓝色背景、白色文字、圆角、鼠标悬停变深蓝"},
              {"id": "b2", "type": "tip", "content": "trae会使用background/color/border-radius/:hover"}
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "JavaScript",
        "lessons": [
          {
            "id": "l1",
            "title": "算术运算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "在网页中添加JavaScript：\n计算 1+1、2-1、2*2、4/2 并输出结果"},
              {"id": "b2", "type": "tip", "content": "trae会使用console.log输出，F12打开控制台查看"}
            ]
          },
          {
            "id": "l2",
            "title": "变量和计算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "定义商品价格9999元，数量3件，计算总价并显示"},
              {"id": "b2", "type": "tip", "content": "trae会使用let定义变量，console.log输出"}
            ]
          },
          {
            "id": "l3",
            "title": "对象",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "创建一个商品对象，包含：名称牛奶、价格2.5、数量3\n计算并输出小计"},
              {"id": "b2", "type": "tip", "content": "trae会使用{name, price, count}对象存储商品"}
            ]
          },
          {
            "id": "l4",
            "title": "数组",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "创建一个商品数组，包含3个商品：\n牛奶2.5元3件、面包5.5元2件、可乐3元5件\n计算购物车总价"},
              {"id": "b2", "type": "tip", "content": "trae会使用数组[]存储多个商品对象"}
            ]
          },
          {
            "id": "l5",
            "title": "if判断",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "判断商品库存：\n如果库存大于0，显示'有货可下单'\n否则显示'暂时缺货'"},
              {"id": "b2", "type": "tip", "content": "trae会使用if-else条件判断"}
            ]
          },
          {
            "id": "l6",
            "title": "for循环",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "遍历商品数组，打印每个商品的名称和价格"},
              {"id": "b2", "type": "tip", "content": "trae会使用for...of循环遍历数组"}
            ]
          },
          {
            "id": "l7",
            "title": "点击事件",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "添加一个'立即下单'按钮，点击后弹出'下单成功'"},
              {"id": "b2", "type": "tip", "content": "trae会使用onclick事件和alert()弹窗"}
            ]
          },
          {
            "id": "l8",
            "title": "输入框取值",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "添加一个数量输入框和计算按钮：\n单价9999元，输入数量后点击计算，显示总价"},
              {"id": "b2", "type": "tip", "content": "trae会使用document.getElementById获取输入值"}
            ]
          },
          {
            "id": "l9",
            "title": "表单提交",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "创建登录表单：用户名、密码输入框和登录按钮\n点击登录后获取输入内容并打印"},
              {"id": "b2", "type": "tip", "content": "trae会使用onsubmit事件处理表单提交"}
            ]
          },
          {
            "id": "l10",
            "title": "本地存储",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "登录成功后把用户信息存到localStorage\n刷新页面后自动读取并显示欢迎语"},
              {"id": "b2", "type": "tip", "content": "trae会使用localStorage.setItem/getItem存取数据"}
            ]
          },
          {
            "id": "l11",
            "title": "异步请求GET",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "页面加载时调用商品列表接口/api/products\n把返回的数据渲染到页面上"},
              {"id": "b2", "type": "tip", "content": "trae会使用async/await和fetch发送GET请求"}
            ]
          },
          {
            "id": "l12",
            "title": "异步请求POST",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "点击下单按钮，把订单数据POST提交到/api/order接口\n显示下单结果"},
              {"id": "b2", "type": "tip", "content": "trae会使用fetch POST方法提交JSON数据"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-backend-basic",
    "pathId": "ai",
    "title": "AI后端基础",
    "desc": "trae自然语言创建接口",
    "icon": "⚙️",
    "chapters": [
      {
        "id": "ch1",
        "title": "环境安装",
        "lessons": [
          {
            "id": "l1",
            "title": "安装Node.js",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用trae自然语言安装Node.js环境"},
              {"id": "b2", "type": "code", "language": "text", "filename": "trae自然语言", "code": "winget安装nodejs"},
              {"id": "b3", "type": "tip", "content": "trae会自动执行winget install命令安装Node.js"}
            ]
          },
          {
            "id": "l2",
            "title": "验证安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "检查nodejs是否安装成功"},
              {"id": "b2", "type": "tip", "content": "trae会执行node -v和npm -v验证"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "第一个接口",
        "lessons": [
          {
            "id": "l1",
            "title": "创建Hello接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "用express创建一个hello接口，返回：你好，世界"},
              {"id": "b2", "type": "tip", "content": "trae会自动创建server.js并编写express代码"}
            ]
          },
          {
            "id": "l2",
            "title": "启动服务",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "启动服务"},
              {"id": "b2", "type": "tip", "content": "trae会执行node server.js启动服务"}
            ]
          },
          {
            "id": "l3",
            "title": "测试接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "测试hello接口"},
              {"id": "b2", "type": "tip", "content": "trae会自动发送请求并显示结果"}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "接口参数",
        "lessons": [
          {
            "id": "l1",
            "title": "接收参数",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "创建一个问候接口，接收name参数，返回：你好，{name}"},
              {"id": "b2", "type": "tip", "content": "trae会自动处理req.query或req.body参数"}
            ]
          },
          {
            "id": "l2",
            "title": "POST接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "创建一个POST接口，接收JSON数据，返回处理结果"},
              {"id": "b2", "type": "tip", "content": "trae会自动配置body-parser中间件"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-database-basic",
    "pathId": "ai",
    "title": "AI数据库基础",
    "desc": "trae自然语言操作数据库",
    "icon": "🗄️",
    "chapters": [
      {
        "id": "ch1",
        "title": "SQLite入门",
        "lessons": [
          {
            "id": "l1",
            "title": "创建数据库",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "创建一个SQLite数据库，名字叫app.db"},
              {"id": "b2", "type": "tip", "content": "SQLite是轻量级数据库，无需单独安装服务"}
            ]
          },
          {
            "id": "l2",
            "title": "创建表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "创建用户表，包含：id、用户名、密码、创建时间"},
              {"id": "b2", "type": "tip", "content": "trae会自动生成CREATE TABLE语句"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "增删改查",
        "lessons": [
          {
            "id": "l1",
            "title": "插入数据",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "插入一条用户数据：用户名张三，密码123456"},
              {"id": "b2", "type": "tip", "content": "trae会生成INSERT语句"}
            ]
          },
          {
            "id": "l2",
            "title": "查询数据",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "查询所有用户"},
              {"id": "b2", "type": "tip", "content": "trae会生成SELECT语句并显示结果"}
            ]
          },
          {
            "id": "l3",
            "title": "更新数据",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "把张三的密码改成654321"},
              {"id": "b2", "type": "tip", "content": "trae会生成UPDATE语句"}
            ]
          },
          {
            "id": "l4",
            "title": "删除数据",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae自然语言", "code": "删除用户名为张三的用户"},
              {"id": "b2", "type": "tip", "content": "trae会生成DELETE语句"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-project-basic",
    "pathId": "ai",
    "title": "AI项目实战",
    "desc": "trae自然语言全栈开发商城",
    "icon": "🚀",
    "chapters": [
      {
        "id": "ch1",
        "title": "环境搭建",
        "lessons": [
          {
            "id": "l1",
            "title": "trae安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 访问官网：trae.ai", "2. 点击下载按钮", "3. 选择对应系统版本（Windows/Mac）", "4. 运行安装程序", "5. 登录字节账号"]},
              {"id": "b2", "type": "tip", "content": "安装后打开Trae，用手机号登录即可使用"}
            ]
          },
          {
            "id": "l2",
            "title": "创建文件夹",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "在电脑上创建项目文件夹"},
              {"id": "b2", "type": "list", "items": ["1. 打开文件资源管理器", "2. 选择一个位置（如D盘或桌面）", "3. 新建文件夹，命名为 my-shop"]},
              {"id": "b3", "type": "tip", "content": "文件夹名不要有中文和空格"}
            ]
          },
          {
            "id": "l3",
            "title": "进入Solo模式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "list", "items": ["1. 打开Trae", "2. 点击左上角菜单 → 新建Solo项目", "3. 选择刚创建的my-shop文件夹", "4. 进入Solo工作界面"]},
              {"id": "b2", "type": "tip", "content": "Solo模式 = AI全自动编码模式\n适合从零创建项目"}
            ]
          },
          {
            "id": "l4",
            "title": "设置自动运行",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "开启自动运行模式，AI连续执行不用反复确认"},
              {"id": "b2", "type": "list", "items": ["1. 点击对话框底部的设置图标", "2. 找到「对话流设置」", "3. 将运行模式改为「自动运行」", "4. 关闭沙箱模式"]},
              {"id": "b3", "type": "tip", "content": "自动运行 = AI连续执行\n去掉沙箱 = 直接操作真实文件"}
            ]
          },
          {
            "id": "l5",
            "title": "安装Node.js",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用trae自然语言安装Node.js环境"},
              {"id": "b2", "type": "code", "language": "text", "filename": "trae输入", "code": "用winget安装nodejs"},
              {"id": "b3", "type": "tip", "content": "trae会自动执行winget install命令\nNode.js是运行后端代码的环境"}
            ]
          },
          {
            "id": "l6",
            "title": "创建前后端项目",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用trae自然语言创建Vue+Node.js+SQLite基础模板"},
              {"id": "b2", "type": "code", "language": "text", "filename": "trae输入", "code": "创建一个全栈项目：\n前端：Vue3项目，放在frontend文件夹\n后端：Node.js+Express项目，放在backend文件夹\n数据库：SQLite，文件名app.db\n创建完成后分别启动前后端"},
              {"id": "b3", "type": "tip", "content": "AI自动创建项目结构\n自动安装依赖并启动服务"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "登录与拦截",
        "lessons": [
          {
            "id": "l1",
            "title": "登录流程",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "商城必须登录后才能下单\n登录后知道是谁在买东西"},
              {"id": "b2", "type": "list", "items": ["1. 用户输入用户名+密码", "2. 服务器验证用户名密码", "3. 验证成功，颁发JWT令牌", "4. 用户每次请求携带JWT", "5. 服务器验证令牌，确认身份"]},
              {"id": "b3", "type": "tip", "content": "JWT = 令牌 = 通行证\n有令牌才能访问接口，无令牌被拦截"}
            ]
          },
          {
            "id": "l2",
            "title": "创建用户表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用trae自然语言创建用户表"},
              {"id": "b2", "type": "code", "language": "text", "filename": "trae输入", "code": "创建SQLite数据库，建一个users用户表，包含id、username用户名、password密码、created_at创建时间"},
              {"id": "b3", "type": "code", "language": "sql", "filename": "AI生成的SQL", "code": "CREATE TABLE users (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    username TEXT,\n    password TEXT,\n    created_at TEXT\n);"},
              {"id": "b4", "type": "tip", "content": "说需求 → AI建表\n不用手写SQL"}
            ]
          },
          {
            "id": "l3",
            "title": "登录接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用trae自然语言创建登录接口"},
              {"id": "b2", "type": "code", "language": "text", "filename": "trae输入", "code": "创建登录接口POST /login，接收username和password，用户不存在自动注册，存在则验证密码，验证成功返回JWT token"},
              {"id": "b3", "type": "code", "language": "javascript", "filename": "AI生成的代码", "code": "app.post('/login', async (req, res) => {\n  const { username, password } = req.body\n  \n  // 查询用户\n  let user = await db.get('SELECT * FROM users WHERE username = ?', username)\n  \n  if (!user) {\n    // 用户不存在，自动注册\n    await db.run('INSERT INTO users (username, password, created_at) VALUES (?, ?, ?)', \n      username, password, new Date().toISOString())\n    user = await db.get('SELECT * FROM users WHERE username = ?', username)\n  } else {\n    // 验证密码\n    if (user.password !== password) {\n      return res.json({ code: 1, msg: '密码错误' })\n    }\n  }\n  \n  // 生成JWT\n  const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '7d' })\n  res.json({ code: 0, data: { token } })\n})"},
              {"id": "b4", "type": "tip", "content": "登录注册合一：不存在自动注册\n用户体验更简单"}
            ]
          },
          {
            "id": "l4",
            "title": "登录拦截器",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用trae自然语言创建拦截器"},
              {"id": "b2", "type": "code", "language": "text", "filename": "trae输入", "code": "创建中间件，除了/login接口外，其他接口都需要验证header中的token，token无效返回401"},
              {"id": "b3", "type": "code", "language": "javascript", "filename": "AI生成的代码", "code": "// 登录拦截中间件\napp.use((req, res, next) => {\n  // 登录接口不拦截\n  if (req.path === '/login') {\n    return next()\n  }\n  \n  const token = req.headers.token\n  if (!token) {\n    return res.status(401).json({ code: 401, msg: '未登录' })\n  }\n  \n  try {\n    const decoded = jwt.verify(token, 'secret')\n    req.userId = decoded.userId\n    next()\n  } catch (err) {\n    res.status(401).json({ code: 401, msg: 'token无效' })\n  }\n})"},
              {"id": "b4", "type": "tip", "content": "中间件 = 拦截器\n所有请求先过中间件，验证token"}
            ]
          },
          {
            "id": "l5",
            "title": "测试登录",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae输入", "code": "测试登录接口，用户名zhangsan密码123456"},
              {"id": "b2", "type": "code", "language": "json", "filename": "返回结果", "code": "{\n  \"code\": 0,\n  \"data\": {\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...\"\n  }\n}"},
              {"id": "b3", "type": "tip", "content": "拿到token后，后续请求都带上这个token"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "商品模块",
        "lessons": [
          {
            "id": "l1",
            "title": "商品表设计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae输入", "code": "创建商品表spu，包含id、name商品名、image图片、price价格、stock库存、created_at创建时间"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "AI生成的SQL", "code": "CREATE TABLE spu (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT,\n    image TEXT,\n    price REAL,\n    stock INTEGER,\n    created_at TEXT\n);"}
            ]
          },
          {
            "id": "l2",
            "title": "创建商品接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae输入", "code": "创建添加商品接口POST /createSpu，接收name、image、price、stock，保存到数据库"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "AI生成的代码", "code": "app.post('/createSpu', async (req, res) => {\n  const { name, image, price, stock } = req.body\n  \n  if (!name) {\n    return res.json({ code: 1, msg: '商品名称不能为空' })\n  }\n  if (!price || price <= 0) {\n    return res.json({ code: 1, msg: '价格必须大于0' })\n  }\n  \n  await db.run(\n    'INSERT INTO spu (name, image, price, stock, created_at) VALUES (?, ?, ?, ?, ?)',\n    name, image, price, stock, new Date().toISOString()\n  )\n  res.json({ code: 0, msg: '创建成功' })\n})"}
            ]
          },
          {
            "id": "l3",
            "title": "查询商品接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae输入", "code": "创建查询商品列表接口POST /getSpuList，传id查单个，不传查全部"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "AI生成的代码", "code": "app.post('/getSpuList', async (req, res) => {\n  const { id } = req.body\n  \n  let list\n  if (id) {\n    const spu = await db.get('SELECT * FROM spu WHERE id = ?', id)\n    list = spu ? [spu] : []\n  } else {\n    list = await db.all('SELECT * FROM spu')\n  }\n  res.json({ code: 0, data: list })\n})"}
            ]
          },
          {
            "id": "l4",
            "title": "修改商品接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae输入", "code": "创建修改商品接口POST /updateSpu，根据id修改商品信息"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "AI生成的代码", "code": "app.post('/updateSpu', async (req, res) => {\n  const { id, name, image, price, stock } = req.body\n  \n  if (!id) {\n    return res.json({ code: 1, msg: '商品ID不能为空' })\n  }\n  \n  const spu = await db.get('SELECT * FROM spu WHERE id = ?', id)\n  if (!spu) {\n    return res.json({ code: 1, msg: '商品不存在' })\n  }\n  \n  await db.run(\n    'UPDATE spu SET name = ?, image = ?, price = ?, stock = ? WHERE id = ?',\n    name, image, price, stock, id\n  )\n  res.json({ code: 0, msg: '修改成功' })\n})"}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "下单模块",
        "lessons": [
          {
            "id": "l1",
            "title": "订单表设计",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae输入", "code": "创建订单表orders，包含id、user_id用户ID、spu_id商品ID、spu_name商品名、spu_image商品图片、spu_price单价、spu_count数量、total总价、status状态、created_at创建时间"},
              {"id": "b2", "type": "code", "language": "sql", "filename": "AI生成的SQL", "code": "CREATE TABLE orders (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    user_id INTEGER,\n    spu_id INTEGER,\n    spu_name TEXT,\n    spu_image TEXT,\n    spu_price REAL,\n    spu_count INTEGER,\n    total REAL,\n    status INTEGER,\n    created_at TEXT\n);"},
              {"id": "b3", "type": "tip", "content": "订单关联user_id，知道是谁下的单\n冗余spu_image，查订单直接有图片"}
            ]
          },
          {
            "id": "l2",
            "title": "下单接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae输入", "code": "创建下单接口POST /createOrder，从token获取当前用户ID，接收商品信息保存订单"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "AI生成的代码", "code": "app.post('/createOrder', async (req, res) => {\n  const userId = req.userId  // 从中间件获取\n  const { spuId, spuName, spuImage, spuPrice, spuCount, total, status } = req.body\n  \n  if (!spuId) {\n    return res.json({ code: 1, msg: '商品ID不能为空' })\n  }\n  \n  await db.run(\n    `INSERT INTO orders (user_id, spu_id, spu_name, spu_image, spu_price, spu_count, total, status, created_at) \n     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,\n    userId, spuId, spuName, spuImage, spuPrice, spuCount, total, status, new Date().toISOString()\n  )\n  res.json({ code: 0, msg: '下单成功' })\n})"},
              {"id": "b3", "type": "tip", "content": "req.userId来自登录拦截器\n无需前端传用户ID，从token解析"}
            ]
          },
          {
            "id": "l3",
            "title": "查询订单接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "trae输入", "code": "创建查询订单接口POST /getOrders，传userId查该用户订单，不传查全部"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "AI生成的代码", "code": "app.post('/getOrders', async (req, res) => {\n  const { userId } = req.body\n  \n  let list\n  if (userId) {\n    list = await db.all('SELECT * FROM orders WHERE user_id = ?', userId)\n  } else {\n    list = await db.all('SELECT * FROM orders')\n  }\n  res.json({ code: 0, data: list })\n})"}
            ]
          },
          {
            "id": "l4",
            "title": "业务流程测试",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用trae自然语言测试完整业务流程"},
              {"id": "b2", "type": "code", "language": "text", "filename": "trae输入", "code": "测试完整流程：\n1. 登录获取token（用户zhangsan密码123456）\n2. 创建一个商品（牛奶，5.5元，库存100）\n3. 查询商品列表\n4. 下单购买2瓶牛奶\n5. 查询我的订单"},
              {"id": "b3", "type": "tip", "content": "AI自动执行所有步骤\n自然语言完成完整业务测试"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-frontend-advanced",
    "pathId": "ai",
    "title": "AI前端进阶",
    "desc": "Vue/React组件开发",
    "icon": "🎨",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {"id": "b1", "type": "text", "content": "课程建设中..."}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-backend-advanced",
    "pathId": "ai",
    "title": "AI后端进阶",
    "desc": "微服务/中间件",
    "icon": "⚙️",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {"id": "b1", "type": "text", "content": "课程建设中..."}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-database-advanced",
    "pathId": "ai",
    "title": "AI数据库进阶",
    "desc": "MySQL/Redis/MongoDB",
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
              {"id": "b1", "type": "text", "content": "课程建设中..."}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-project-advanced",
    "pathId": "ai",
    "title": "AI项目实战进阶",
    "desc": "商城/社交/AI应用",
    "icon": "🚀",
    "chapters": [
      {
        "id": "ch1",
        "title": "课程介绍",
        "lessons": [
          {
            "id": "l1",
            "title": "概述",
            "blocks": [
              {"id": "b1", "type": "text", "content": "课程建设中..."}
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
        "title": "互联网架构的演进",
        "lessons": [
          {
            "id": "l1",
            "title": "为什么要学架构",
            "blocks": [
              {"id": "b1", "type": "text", "content": "架构是软件系统的骨架，决定了系统的可扩展性、可维护性和性能。"},
              {"id": "b2", "type": "list", "items": ["理解系统如何从简单到复杂演进", "掌握不同场景下的架构选型", "学会权衡取舍，做出合理决策"]},
              {"id": "b3", "type": "tip", "content": "架构没有银弹，只有适合业务场景的架构才是好架构"}
            ]
          },
          {
            "id": "l2",
            "title": "架构演进路线图",
            "blocks": [
              {"id": "b1", "type": "text", "content": "互联网架构从简单到复杂的演进过程："},
              {"id": "b2", "type": "table", "headers": ["阶段", "架构", "特点", "适用场景"], "rows": [["1", "纯文字", "最原始形态", "早期BBS/论坛"], ["2", "HTML静态", "展示丰富但无交互", "企业官网"], ["3", "动态页面", "数据库驱动内容", "早期电商"], ["4", "单体服务端渲染", "MVC分层", "中小型应用"], ["5", "单体前后端分离", "API+SPA", "中型应用"], ["6", "集群架构", "负载均衡", "高并发应用"], ["7", "分布式架构", "服务拆分", "大型应用"], ["8", "微服务架构", "独立部署", "复杂业务"], ["9", "服务网格", "基础设施层治理", "超大规模"], ["10", "无服务器", "按需计算", "事件驱动"], ["11", "边缘计算", "就近处理", "低延迟场景"]]}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "文字",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "在互联网诞生之前，人们只能通过电话、传真、信件进行远程沟通，效率低、成本高、无法留存。"},
              {"id": "b2", "type": "table", "headers": ["问题", "文字时代解决方案"], "rows": [["远程沟通困难", "通过网络传输文字，实时交流"], ["信息无法留存", "BBS/论坛永久保存帖子"], ["一对多传播难", "公告板一次发布，所有人可见"], ["查找历史信息难", "可搜索、可翻页浏览"]]}
            ]
          },
          {
            "id": "l1",
            "title": "纯文本时代",
            "blocks": [
              {"id": "b1", "type": "text", "content": "互联网最早期形态，仅传输纯文本内容。"},
              {"id": "b2", "type": "list", "items": ["Telnet远程终端", "FTP文件传输", "SMTP邮件传输", "早期BBS公告板"]},
              {"id": "b3", "type": "code", "language": "text", "filename": "早期BBS示例", "code": "========== 欢迎来到XX论坛 ==========\n1. 查看帖子\n2. 发布帖子\n3. 回复帖子\n4. 退出\n请输入选项: _"}
            ]
          },
          {
            "id": "l2",
            "title": "架构特点",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["特性", "说明"], "rows": [["数据格式", "纯ASCII文本"], ["传输协议", "TCP/IP"], ["客户端", "终端模拟器"], ["服务器", "单机运行"]]},
              {"id": "b2", "type": "tip", "content": "优点：简单、带宽占用小。缺点：表现力差、无法展示多媒体"}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "HTML静态渲染",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "纯文字时代只能显示单调的文本，无法展示图片、链接、排版，用户体验差。"},
              {"id": "b2", "type": "table", "headers": ["文字时代的问题", "HTML解决方案"], "rows": [["无法展示图片", "<img>标签嵌入图片"], ["无法排版美化", "CSS样式控制布局颜色"], ["无法跳转链接", "<a>标签实现超链接"], ["无法结构化内容", "标题/段落/列表等语义标签"]]}
            ]
          },
          {
            "id": "l1",
            "title": "静态网页原理",
            "blocks": [
              {"id": "b1", "type": "text", "content": "服务器直接返回预先编写好的HTML文件，内容固定不变。"},
              {"id": "b2", "type": "code", "language": "html", "filename": "index.html", "code": "<!DOCTYPE html>\n<html>\n<head>\n    <title>我的网站</title>\n</head>\n<body>\n    <h1>欢迎访问</h1>\n    <p>这是一个静态网页</p>\n    <img src=\"logo.png\">\n</body>\n</html>"}
            ]
          },
          {
            "id": "l2",
            "title": "架构图",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "静态架构", "code": "┌──────────┐    HTTP请求     ┌──────────┐\n│  浏览器   │ ──────────────> │  Web服务器 │\n│          │ <────────────── │  (Nginx)  │\n└──────────┘    HTML文件     └──────────┘\n                                  │\n                                  ↓\n                            ┌──────────┐\n                            │ 静态文件  │\n                            │ .html    │\n                            │ .css     │\n                            │ .js      │\n                            └──────────┘"}
            ]
          },
          {
            "id": "l3",
            "title": "Nginx配置实现",
            "blocks": [
              {"id": "b1", "type": "code", "language": "nginx", "filename": "nginx.conf", "code": "server {\n    listen 80;\n    server_name www.example.com;\n    \n    # 静态文件目录\n    root /var/www/html;\n    index index.html;\n    \n    location / {\n        try_files $uri $uri/ =404;\n    }\n    \n    # 静态资源缓存\n    location ~* \\.(css|js|png|jpg|gif)$ {\n        expires 30d;\n        add_header Cache-Control \"public\";\n    }\n}"},
              {"id": "b2", "type": "tip", "content": "优点：性能极高、部署简单、CDN友好。缺点：内容更新需重新部署"}
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "动态页面",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "静态HTML内容写死在文件里，每次更新都要修改文件重新上传，无法实现用户交互。"},
              {"id": "b2", "type": "table", "headers": ["静态HTML的问题", "动态页面解决方案"], "rows": [["内容写死，更新麻烦", "从数据库读取，改数据即可"], ["无法用户注册登录", "程序处理表单，存入数据库"], ["无法显示个性化内容", "根据用户身份动态生成页面"], ["无法实现购物车/订单", "程序逻辑处理业务流程"]]}
            ]
          },
          {
            "id": "l1",
            "title": "CGI与动态内容",
            "blocks": [
              {"id": "b1", "type": "text", "content": "CGI(Common Gateway Interface)让Web服务器能执行程序，动态生成内容。"},
              {"id": "b2", "type": "code", "language": "text", "filename": "动态架构", "code": "┌──────────┐    HTTP请求     ┌──────────┐    执行      ┌──────────┐\n│  浏览器   │ ──────────────> │  Web服务器 │ ─────────> │ CGI程序   │\n│          │ <────────────── │           │ <───────── │ (PHP等)   │\n└──────────┘    HTML响应     └──────────┘    输出      └──────────┘\n                                                            │\n                                                            ↓\n                                                      ┌──────────┐\n                                                      │  数据库   │\n                                                      └──────────┘"}
            ]
          },
          {
            "id": "l2",
            "title": "PHP动态页面示例",
            "blocks": [
              {"id": "b1", "type": "code", "language": "php", "filename": "index.php", "code": "<?php\n// 连接数据库\n$conn = mysqli_connect('localhost', 'root', 'password', 'shop');\n\n// 查询商品列表\n$result = mysqli_query($conn, 'SELECT * FROM products');\n?>\n<!DOCTYPE html>\n<html>\n<body>\n    <h1>商品列表</h1>\n    <ul>\n    <?php while($row = mysqli_fetch_assoc($result)): ?>\n        <li><?php echo $row['name']; ?> - ¥<?php echo $row['price']; ?></li>\n    <?php endwhile; ?>\n    </ul>\n</body>\n</html>"}
            ]
          },
          {
            "id": "l3",
            "title": "Nginx + PHP-FPM配置",
            "blocks": [
              {"id": "b1", "type": "code", "language": "nginx", "filename": "nginx.conf", "code": "server {\n    listen 80;\n    server_name www.example.com;\n    root /var/www/html;\n    index index.php index.html;\n    \n    # PHP文件处理\n    location ~ \\.php$ {\n        fastcgi_pass 127.0.0.1:9000;\n        fastcgi_index index.php;\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        include fastcgi_params;\n    }\n}"},
              {"id": "b2", "type": "tip", "content": "优点：内容动态更新、支持用户交互。缺点：每次请求都要执行程序，性能较低"}
            ]
          },
          {
            "id": "l4",
            "title": "两种动态交互方式",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["类型", "原理", "体验", "代表技术"], "rows": [["刷新动态", "表单提交 → 服务器处理 → 返回新页面", "整页刷新，白屏闪烁", "PHP/JSP表单提交"], ["无刷新动态(Ajax)", "JS异步请求 → 服务器返回数据 → JS局部更新DOM", "页面不刷新，局部更新", "XMLHttpRequest/Fetch"]]},
              {"id": "b2", "type": "tip", "content": "刷新动态：点击提交 → 整页重新加载；无刷新动态：点击按钮 → 后台请求 → 局部更新"}
            ]
          },
          {
            "id": "l5",
            "title": "Ajax无刷新示例",
            "blocks": [
              {"id": "b1", "type": "code", "language": "html", "filename": "ajax.html", "code": "<button onclick=\"loadProducts()\">加载商品</button>\n<ul id=\"productList\"></ul>\n\n<script>\nasync function loadProducts() {\n    // 无刷新请求后端\n    const res = await fetch('/api/products');\n    const products = await res.json();\n    \n    // 局部更新DOM，页面不刷新\n    document.getElementById('productList').innerHTML = \n        products.map(p => `<li>${p.name} - ¥${p.price}</li>`).join('');\n}\n</script>"},
              {"id": "b2", "type": "text", "content": "Ajax让Web应用有了桌面软件般的流畅体验，是SPA单页应用的技术基础。"}
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "单体服务端渲染",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "早期动态页面(如PHP)代码混乱，HTML/SQL/业务逻辑混在一起，难以维护和协作。"},
              {"id": "b2", "type": "table", "headers": ["早期动态页面问题", "MVC解决方案"], "rows": [["代码混乱难维护", "分层架构，职责清晰"], ["重复代码多", "Model复用数据逻辑"], ["前端后端耦合", "View独立，可换模板"], ["团队协作困难", "按层分工，并行开发"]]}
            ]
          },
          {
            "id": "l1",
            "title": "MVC架构模式",
            "blocks": [
              {"id": "b1", "type": "text", "content": "将应用分为Model(数据)、View(视图)、Controller(控制器)三层。"},
              {"id": "b2", "type": "tip", "content": "C接受请求 → M获取数据 → V渲染M的数据到HTML模板 → 返回HTML页面"},
              {"id": "b3", "type": "code", "language": "text", "filename": "MVC架构", "code": "┌──────────┐    请求      ┌────────────────────────────────────┐\n│  浏览器   │ ──────────> │           单体应用                  │\n│          │ <────────── │  ┌────────┐ ┌────────┐ ┌────────┐  │\n└──────────┘    HTML     │  │Controller│→│ Model  │→│  View  │  │\n                         │  └────────┘ └────────┘ └────────┘  │\n                         └────────────────────────────────────┘\n                                          │\n                                          ↓\n                                    ┌──────────┐\n                                    │  数据库   │\n                                    └──────────┘"}
            ]
          },
          {
            "id": "l2",
            "title": "SpringBoot MVC实现",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "ProductController.java", "code": "@Controller\npublic class ProductController {\n    @Autowired\n    private ProductService productService;\n    \n    @GetMapping(\"/products\")\n    public String list(Model model) {\n        List<Product> products = productService.findAll();\n        model.addAttribute(\"products\", products);\n        return \"product/list\";  // 返回视图名\n    }\n}"},
              {"id": "b2", "type": "code", "language": "html", "filename": "list.html (Thymeleaf)", "code": "<!DOCTYPE html>\n<html xmlns:th=\"http://www.thymeleaf.org\">\n<body>\n    <h1>商品列表</h1>\n    <ul>\n        <li th:each=\"product : ${products}\">\n            <span th:text=\"${product.name}\"></span> - \n            ¥<span th:text=\"${product.price}\"></span>\n        </li>\n    </ul>\n</body>\n</html>"}
            ]
          },
          {
            "id": "l3",
            "title": "特点分析",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["优点", "缺点"], "rows": [["开发简单直观", "前后端耦合"], ["SEO友好", "难以并行开发"], ["首屏加载快", "服务器压力大"], ["部署简单", "扩展性差"]]},
              {"id": "b2", "type": "tip", "content": "适用场景：中小型项目、内容型网站、SEO要求高的场景"}
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "单体前后端分离",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "服务端渲染时，前端改个按钮也要后端配合发布，开发效率低；且无法支持多端(App/小程序)。"},
              {"id": "b2", "type": "table", "headers": ["服务端渲染问题", "前后端分离解决方案"], "rows": [["前端改动依赖后端发布", "前后端独立部署，各自发布"], ["只能支持Web", "后端提供API，多端复用"], ["前后端技术栈绑定", "前端自由选择Vue/React"], ["页面交互体验差", "SPA单页应用，流畅体验"]]}
            ]
          },
          {
            "id": "l1",
            "title": "前后端分离原理",
            "blocks": [
              {"id": "b1", "type": "text", "content": "前端独立部署SPA应用，通过API与后端通信，后端只返回JSON数据。"},
              {"id": "b2", "type": "code", "language": "text", "filename": "前后端分离架构", "code": "┌──────────┐  静态资源   ┌──────────┐\n│  浏览器   │ <───────── │ Nginx    │ ← 前端打包文件(HTML/JS/CSS)\n│  (SPA)   │            └──────────┘\n│          │\n│          │  API请求    ┌──────────┐\n│          │ ──────────> │ 后端服务  │\n│          │ <────────── │ (JSON)   │\n└──────────┘             └──────────┘\n                              │\n                              ↓\n                        ┌──────────┐\n                        │  数据库   │\n                        └──────────┘"}
            ]
          },
          {
            "id": "l2",
            "title": "后端API实现",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "ProductController.java", "code": "@RestController\n@RequestMapping(\"/api/products\")\npublic class ProductController {\n    @Autowired\n    private ProductService productService;\n    \n    @GetMapping\n    public List<Product> list() {\n        return productService.findAll();\n    }\n    \n    @PostMapping\n    public Product create(@RequestBody Product product) {\n        return productService.save(product);\n    }\n}"}
            ]
          },
          {
            "id": "l3",
            "title": "前端Vue实现",
            "blocks": [
              {"id": "b1", "type": "code", "language": "vue", "filename": "ProductList.vue", "code": "<template>\n  <div>\n    <h1>商品列表</h1>\n    <ul>\n      <li v-for=\"p in products\" :key=\"p.id\">\n        {{ p.name }} - ¥{{ p.price }}\n      </li>\n    </ul>\n  </div>\n</template>\n\n<script setup>\nimport { ref, onMounted } from 'vue'\n\nconst products = ref([])\n\nonMounted(async () => {\n  const res = await fetch('/api/products')\n  products.value = await res.json()\n})\n</script>"}
            ]
          },
          {
            "id": "l4",
            "title": "Nginx配置",
            "blocks": [
              {"id": "b1", "type": "code", "language": "nginx", "filename": "nginx.conf", "code": "server {\n    listen 80;\n    server_name www.example.com;\n    \n    # 前端静态文件\n    location / {\n        root /var/www/dist;\n        try_files $uri $uri/ /index.html;\n    }\n    \n    # API代理到后端\n    location /api/ {\n        proxy_pass http://127.0.0.1:8080;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}"},
              {"id": "b2", "type": "tip", "content": "优点：前后端独立开发部署、技术栈灵活。缺点：首屏慢、SEO差、需处理跨域"}
            ]
          }
        ]
      },
      {
        "id": "ch6-5",
        "title": "SSR水合同构架构",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "传统SSR每次刷新都要服务端渲染，慢卡；CSR/SPA首屏慢、SEO差。能否结合两者优点？直接返回带数据的html然后水合js不就解决了"},
              {"id": "b2", "type": "table", "headers": ["架构", "优点", "缺点"], "rows": [["传统SSR", "首屏快、SEO好", "每次刷新都要服务端渲染，慢卡"], ["CSR/SPA", "后续交互流畅", "首屏慢、SEO差"]]},
              {"id": "b3", "type": "tip", "content": "水合SSR = 首次服务端渲染（首屏快+SEO好）+ 水合后变成SPA（后续交互流畅）"}
            ]
          },
          {
            "id": "l1",
            "title": "SPA vs 水合SSR流程对比",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "SPA流程", "code": "服务端返回空白HTML\n        ↓\n   水合JS（下载并执行）\n        ↓\n   JS渲染页面内容  ← 这时才显示内容\n        ↓\n   后续交互都走JS"},
              {"id": "b2", "type": "code", "language": "text", "filename": "水合SSR流程", "code": "服务端渲染Vue返回完整HTML  ← 立即显示内容（但无法交互）\n        ↓\n   水合JS（下载并执行）  ← 激活事件绑定，可交互\n        ↓\n   后续交互都走JS（变成SPA）"},
              {"id": "b3", "type": "tip", "content": "SPA：空白HTML → JS渲染；水合SSR：完整HTML（能看不能点）→ JS水合激活 → 后续都走JS"}
            ]
          },
          {
            "id": "l2",
            "title": "什么是水合(Hydration)",
            "blocks": [
              {"id": "b1", "type": "text", "content": "服务端渲染的HTML是'死'的（无法交互），客户端JS加载后要把HTML'激活'成可交互的Vue应用。"},
              {"id": "b2", "type": "code", "language": "text", "filename": "水合过程", "code": "服务端：                         客户端：\n───────────                         ───────────\nVue组件                             收到HTML\n    ↓                                   ↓\nrenderToString()                    立即显示内容（但无法点击）\n    ↓                                   ↓\nHTML字符串           ───────>      加载JS文件\n    ↓                                   ↓\n返回给浏览器                          mount() 水合\n                                        ↓\n                                  激活事件绑定（可交互）"},
              {"id": "b3", "type": "tip", "content": "水合 = 不重建DOM，只给现有HTML绑定事件和响应式"}
            ]
          },
          {
            "id": "l3",
            "title": "为何要分开打包客户端和服务端",
            "blocks": [
              {"id": "b1", "type": "text", "content": "服务端和客户端运行环境不同，API不同，不能用同一份代码。"},
              {"id": "b2", "type": "table", "headers": ["对比项", "服务端包", "客户端包"], "rows": [["运行环境", "Node.js / Bun", "浏览器"], ["可用API", "fs、path、process", "window、document、localStorage"], ["不可用API", "❌ window、document", "❌ fs、path"], ["产物用途", "renderToString() 生成HTML", "mount() 水合激活"], ["体积要求", "无所谓", "越小越好（用户要下载）"]]},
              {"id": "b3", "type": "tip", "content": "服务端包用来'画HTML'，客户端包用来'激活交互'，环境不同必须分开"}
            ]
          },
          {
            "id": "l4",
            "title": "Vue SSR实现",
            "blocks": [
              {"id": "b1", "type": "code", "language": "json", "filename": "package.json", "code": "{\n  \"scripts\": {\n    \"build:client\": \"vite build --outDir dist/client\",\n    \"build:server\": \"vite build --ssr src/main.ts --outDir dist/server\",\n    \"start\": \"node server.js\"\n  }\n}"},
              {"id": "b2", "type": "text", "content": "两份打包：客户端包含水合JS，服务端包用于渲染HTML。"}
            ]
          },
          {
            "id": "l5",
            "title": "共享入口 main.ts",
            "blocks": [
              {"id": "b1", "type": "code", "language": "typescript", "filename": "src/main.ts", "code": "import { createSSRApp } from 'vue'  // 关键：用SSR模式创建\nimport App from './App.vue'\nimport { router } from './router'\n\n// 导出工厂函数，服务端/客户端都调用这个\nexport function createApp() {\n    const app = createSSRApp(App).use(router)\n    return app\n}"},
              {"id": "b2", "type": "tip", "content": "createSSRApp() 而不是 createApp()，让Vue知道要支持水合模式"}
            ]
          },
          {
            "id": "l6",
            "title": "服务端渲染",
            "blocks": [
              {"id": "b1", "type": "code", "language": "typescript", "filename": "server.ts", "code": "import { renderToString } from 'vue/server-renderer'\nimport { createApp } from './main'\n\nasync function render(url: string) {\n    const app = createApp()\n    const router = app.config.globalProperties.$router\n    \n    await router.push(url)\n    await router.isReady()\n    \n    // 关键：组件渲染成HTML字符串\n    const html = await renderToString(app)\n    \n    // 填充到模板返回\n    return template.replace('<div id=\"app\"></div>', `<div id=\"app\">${html}</div>`)\n}"},
              {"id": "b2", "type": "text", "content": "服务端只调用renderToString()，不调用mount()，不挂载只生成字符串。"}
            ]
          },
          {
            "id": "l7",
            "title": "客户端水合",
            "blocks": [
              {"id": "b1", "type": "code", "language": "typescript", "filename": "entry-client.ts", "code": "import { createApp } from './main'\n\n// 客户端：等路由就绪后挂载（水合）\nconst app = createApp()\nconst router = app.config.globalProperties.$router\n\nrouter.isReady().then(() => {\n    app.mount('#app')  // 不重建DOM，只绑定事件\n})"},
              {"id": "b2", "type": "text", "content": "客户端调用mount()，Vue会自动识别现有DOM并激活，而不是重新创建。"}
            ]
          },
          {
            "id": "l8",
            "title": "SSR架构图",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "SSR同构渲染架构", "code": "【首次请求】\n浏览器 ─────────────────────────────────> 服务器\n                                                   │\n                                          createApp() + renderToString()\n                                                   │\n浏览器 <───────── 完整HTML + JS引用 <─────────┘\n   │\n   │ 1. 立即显示内容（首屏快）\n   │ 2. 加载客户端JS\n   │ 3. createApp() + mount() 水合\n   ↓\n可交互的Vue应用"},
              {"id": "b2", "type": "tip", "content": "Nuxt.js(Vue)、Next.js(React)都是这个原理，封装好了开箱即用"}
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "集群架构",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "单台服务器性能有上限，用户量增长后响应变慢甚至宕机，且单点故障会导致整个系统不可用。"},
              {"id": "b2", "type": "table", "headers": ["单机架构问题", "集群解决方案"], "rows": [["单机性能瓶颈", "多台服务器分担请求"], ["单点故障风险", "一台挂了其他继续服务"], ["无法应对流量峰值", "动态增加服务器数量"], ["升级需停机", "滚动升级，不影响服务"]]}
            ]
          },
          {
            "id": "l1",
            "title": "负载均衡原理",
            "blocks": [
              {"id": "b1", "type": "text", "content": "负载均衡器将请求分发到多台服务器，实现压力分担和高可用。"},
              {"id": "b2", "type": "list", "items": ["轮询：依次分发到每台服务器", "加权轮询：按权重比例分发", "IP哈希：同一用户固定到一台服务器", "最少连接：分发到连接数最少的服务器"]}
            ]
          },
          {
            "id": "l2",
            "title": "集群架构图",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "集群架构", "code": "                         ┌──────────┐\n              ┌────────> │ 服务器1   │\n              │          └──────────┘\n┌──────────┐  │          ┌──────────┐\n│  浏览器   │──┼────────> │ 服务器2   │\n└──────────┘  │          └──────────┘\n      ↓       │          ┌──────────┐\n┌──────────┐  └────────> │ 服务器3   │\n│负载均衡器 │            └──────────┘\n│ (Nginx)  │                  │\n└──────────┘                  ↓\n                        ┌──────────┐\n                        │  数据库   │\n                        └──────────┘"}
            ]
          },
          {
            "id": "l3",
            "title": "Nginx负载均衡配置",
            "blocks": [
              {"id": "b1", "type": "code", "language": "nginx", "filename": "nginx.conf", "code": "# 定义上游服务器组\nupstream backend {\n    # 负载均衡策略\n    # 轮询（默认）\n    server 192.168.1.101:8080;\n    server 192.168.1.102:8080;\n    server 192.168.1.103:8080;\n    \n    # 权重\n    # server 192.168.1.101:8080 weight=3;\n    # server 192.168.1.102:8080 weight=2;\n    \n    # IP哈希（会话保持）\n    # ip_hash;\n}\n\nserver {\n    listen 80;\n    \n    location / {\n        proxy_pass http://backend;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n    }\n}"}
            ]
          },
          {
            "id": "l4",
            "title": "Session共享问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "集群环境下，用户登录状态需要在多台服务器间共享。"},
              {"id": "b2", "type": "table", "headers": ["方案", "原理", "优缺点"], "rows": [["Session复制", "服务器间同步Session", "实现简单，但网络开销大"], ["Session粘滞", "同一用户固定到一台服务器", "简单，但负载不均"], ["Redis集中存储", "Session存到Redis", "推荐方案，扩展性好"]]},
              {"id": "b3", "type": "code", "language": "yaml", "filename": "application.yml", "code": "spring:\n  session:\n    store-type: redis\n  redis:\n    host: 192.168.1.200\n    port: 6379"}
            ]
          }
        ]
      },
      {
        "id": "ch8",
        "title": "分布式架构",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "集群虽然解决了性能问题，但所有服务器运行相同代码，当系统变得巨大复杂时，维护困难、发布风险高。"},
              {"id": "b2", "type": "table", "headers": ["集群架构问题", "分布式解决方案"], "rows": [["单体应用太大，编译慢", "拆分成独立服务，并行开发"], ["改一个小功能要发布整个系统", "只发布修改的服务"], ["数据库成为瓶颈", "每个服务独立数据库"], ["技术栈统一，无法用最优方案", "不同服务可用不同语言"]]}
            ]
          },
          {
            "id": "l1",
            "title": "分布式与集群的区别",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["对比项", "集群", "分布式"], "rows": [["部署方式", "多台服务器运行相同代码", "不同服务器运行不同模块"], ["目的", "提高并发能力", "拆分复杂系统"], ["扩展方式", "水平复制", "垂直拆分"]]}
            ]
          },
          {
            "id": "l2",
            "title": "分布式架构图",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "分布式架构", "code": "┌──────────┐\n│  浏览器   │\n└──────────┘\n      ↓\n┌──────────┐\n│  网关    │\n└──────────┘\n      ↓\n┌─────────────────────────────────────┐\n│           ┌─────────┐               │\n│     ┌───> │用户服务  │ ← 用户数据库   │\n│     │     └─────────┘               │\n│     │     ┌─────────┐               │\n│ ────┼───> │商品服务  │ ← 商品数据库   │\n│     │     └─────────┘               │\n│     │     ┌─────────┐               │\n│     └───> │订单服务  │ ← 订单数据库   │\n│           └─────────┘               │\n└─────────────────────────────────────┘"}
            ]
          },
          {
            "id": "l3",
            "title": "服务间通信",
            "blocks": [
              {"id": "b1", "type": "text", "content": "分布式系统中，服务间需要通信来完成业务。"},
              {"id": "b2", "type": "table", "headers": ["方式", "协议", "特点", "场景"], "rows": [["HTTP REST", "HTTP", "简单通用、跨语言", "对外API"], ["RPC", "TCP", "高性能、强类型", "内部调用"], ["消息队列", "AMQP等", "异步解耦", "异步任务"]]},
              {"id": "b3", "type": "code", "language": "java", "filename": "OrderService.java", "code": "@Service\npublic class OrderService {\n    @Autowired\n    private RestTemplate restTemplate;\n    \n    public Order createOrder(OrderDTO dto) {\n        // 调用用户服务验证用户\n        User user = restTemplate.getForObject(\n            \"http://user-service/api/users/\" + dto.getUserId(), \n            User.class\n        );\n        \n        // 调用商品服务获取商品信息\n        Product product = restTemplate.getForObject(\n            \"http://product-service/api/products/\" + dto.getProductId(),\n            Product.class\n        );\n        \n        // 创建订单...\n        return orderRepository.save(order);\n    }\n}"}
            ]
          },
          {
            "id": "l4",
            "title": "分布式事务",
            "blocks": [
              {"id": "b1", "type": "text", "content": "跨服务的数据一致性是分布式系统的难题。"},
              {"id": "b2", "type": "table", "headers": ["方案", "原理", "一致性"], "rows": [["2PC两阶段提交", "协调者统一提交/回滚", "强一致"], ["TCC补偿事务", "Try-Confirm-Cancel", "最终一致"], ["Saga", "事件驱动补偿", "最终一致"], ["本地消息表", "可靠消息+定时任务", "最终一致"]]},
              {"id": "b3", "type": "tip", "content": "推荐使用Seata框架处理分布式事务"}
            ]
          }
        ]
      },
      {
        "id": "ch9",
        "title": "微服务架构",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "分布式拆分后，服务越来越多，缺乏统一的服务治理：服务怎么找？配置怎么管？挂了怎么办？"},
              {"id": "b2", "type": "table", "headers": ["分布式架构问题", "微服务解决方案"], "rows": [["服务地址写死，扩容需改配置", "注册中心自动服务发现"], ["配置分散在各服务", "配置中心统一管理"], ["服务挂了引发雪崩", "熔断降级保护系统"], ["问题难定位，不知错在哪", "链路追踪全程监控"]]}
            ]
          },
          {
            "id": "l1",
            "title": "微服务核心理念",
            "blocks": [
              {"id": "b1", "type": "text", "content": "微服务是分布式架构的进一步细化，强调服务的独立性和自治性。"},
              {"id": "b2", "type": "list", "items": ["单一职责：每个服务只做一件事", "独立部署：服务可以单独发布", "去中心化：数据和治理分散", "容错设计：服务降级、熔断"]}
            ]
          },
          {
            "id": "l2",
            "title": "微服务技术栈",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["组件", "Spring Cloud", "作用"], "rows": [["服务注册", "Nacos/Eureka", "服务发现与注册"], ["配置中心", "Nacos/Config", "统一配置管理"], ["网关", "Gateway", "路由、鉴权、限流"], ["负载均衡", "LoadBalancer", "客户端负载均衡"], ["熔断降级", "Sentinel", "服务保护"], ["链路追踪", "Sleuth+Zipkin", "调用链监控"]]}
            ]
          },
          {
            "id": "l3",
            "title": "微服务架构图",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "微服务架构", "code": "                    ┌──────────────┐\n                    │   Nacos      │ ← 注册中心+配置中心\n                    └──────────────┘\n                           ↑ 注册/发现\n┌──────────┐        ┌──────────────┐\n│  浏览器   │ ─────> │   Gateway    │ ← API网关\n└──────────┘        └──────────────┘\n                           │\n        ┌──────────────────┼──────────────────┐\n        ↓                  ↓                  ↓\n┌──────────────┐  ┌──────────────┐  ┌──────────────┐\n│  用户服务     │  │  商品服务     │  │  订单服务     │\n│  (集群x3)    │  │  (集群x3)    │  │  (集群x3)    │\n└──────────────┘  └──────────────┘  └──────────────┘\n        │                  │                  │\n        ↓                  ↓                  ↓\n┌──────────────┐  ┌──────────────┐  ┌──────────────┐\n│  用户数据库   │  │  商品数据库   │  │  订单数据库   │\n└──────────────┘  └──────────────┘  └──────────────┘"}
            ]
          },
          {
            "id": "l4",
            "title": "服务注册与发现",
            "blocks": [
              {"id": "b1", "type": "code", "language": "yaml", "filename": "application.yml", "code": "spring:\n  application:\n    name: user-service\n  cloud:\n    nacos:\n      discovery:\n        server-addr: 127.0.0.1:8848\n      config:\n        server-addr: 127.0.0.1:8848\n        file-extension: yml"},
              {"id": "b2", "type": "code", "language": "java", "filename": "UserServiceApplication.java", "code": "@SpringBootApplication\n@EnableDiscoveryClient\npublic class UserServiceApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(UserServiceApplication.class, args);\n    }\n}"}
            ]
          },
          {
            "id": "l5",
            "title": "服务调用与熔断",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "OrderService.java", "code": "@Service\npublic class OrderService {\n    @Autowired\n    private UserFeignClient userClient;\n    \n    @SentinelResource(value = \"createOrder\", fallback = \"createOrderFallback\")\n    public Order createOrder(OrderDTO dto) {\n        User user = userClient.getUser(dto.getUserId());\n        // 创建订单逻辑...\n        return order;\n    }\n    \n    // 降级方法\n    public Order createOrderFallback(OrderDTO dto, Throwable e) {\n        return Order.builder().status(\"FAILED\").message(\"服务暂时不可用\").build();\n    }\n}"}
            ]
          }
        ]
      },
      {
        "id": "ch10",
        "title": "服务网格",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "微服务SDK侵入业务代码，不同语言需要不同SDK，升级治理组件要改业务代码并重新发布。"},
              {"id": "b2", "type": "table", "headers": ["微服务架构问题", "服务网格解决方案"], "rows": [["SDK侵入业务代码", "Sidecar代理，业务无感知"], ["多语言需不同SDK", "语言无关，统一治理"], ["升级治理组件要改代码", "基础设施层升级，业务无需变动"], ["治理策略分散在各服务", "控制平面统一管理"]]}
            ]
          },
          {
            "id": "l1",
            "title": "什么是服务网格",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Service Mesh将服务治理能力下沉到基础设施层，应用代码无需关心通信细节。"},
              {"id": "b2", "type": "list", "items": ["流量管理：负载均衡、路由、重试", "安全：mTLS加密、访问控制", "可观测性：指标、日志、追踪", "策略：限流、熔断"]}
            ]
          },
          {
            "id": "l2",
            "title": "Sidecar模式",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "Sidecar架构", "code": "┌─────────────────────────────────────────────┐\n│                   Pod                        │\n│  ┌─────────────┐      ┌─────────────┐       │\n│  │  应用容器    │ ←──→ │  Sidecar    │       │\n│  │  (业务代码)  │      │  (Envoy)    │       │\n│  └─────────────┘      └─────────────┘       │\n│                             ↕                │\n└─────────────────────────────────────────────┘\n                              │\n                    流量经过Sidecar代理\n                              │\n                              ↓\n┌─────────────────────────────────────────────┐\n│                   Pod                        │\n│  ┌─────────────┐      ┌─────────────┐       │\n│  │  应用容器    │ ←──→ │  Sidecar    │       │\n│  └─────────────┘      └─────────────┘       │\n└─────────────────────────────────────────────┘"}
            ]
          },
          {
            "id": "l3",
            "title": "Istio架构",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "Istio架构", "code": "┌─────────────────────────────────────────────┐\n│              控制平面 (istiod)               │\n│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │\n│  │  Pilot  │ │ Citadel │ │  Galley │       │\n│  │ (配置)   │ │ (证书)   │ │ (验证)   │       │\n│  └─────────┘ └─────────┘ └─────────┘       │\n└─────────────────────────────────────────────┘\n                      ↓ 下发配置\n┌─────────────────────────────────────────────┐\n│                 数据平面                     │\n│  ┌─────────┐    ┌─────────┐    ┌─────────┐ │\n│  │ Envoy   │←──→│ Envoy   │←──→│ Envoy   │ │\n│  └─────────┘    └─────────┘    └─────────┘ │\n└─────────────────────────────────────────────┘"}
            ]
          },
          {
            "id": "l4",
            "title": "Istio流量管理",
            "blocks": [
              {"id": "b1", "type": "code", "language": "yaml", "filename": "VirtualService.yaml", "code": "apiVersion: networking.istio.io/v1beta1\nkind: VirtualService\nmetadata:\n  name: user-service\nspec:\n  hosts:\n  - user-service\n  http:\n  - match:\n    - headers:\n        x-version:\n          exact: \"v2\"\n    route:\n    - destination:\n        host: user-service\n        subset: v2\n  - route:\n    - destination:\n        host: user-service\n        subset: v1\n      weight: 90\n    - destination:\n        host: user-service\n        subset: v2\n      weight: 10"},
              {"id": "b2", "type": "tip", "content": "优点：语言无关、统一治理、应用无侵入。缺点：运维复杂、性能开销"}
            ]
          }
        ]
      },
      {
        "id": "ch11",
        "title": "无服务器架构",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "微服务需要运维大量服务器，即使没有请求也要付费；且突发流量时扩容不够快。"},
              {"id": "b2", "type": "table", "headers": ["微服务架构问题", "Serverless解决方案"], "rows": [["要维护服务器", "完全托管，无需运维"], ["空闲时也要付费", "按调用次数付费，不用不花钱"], ["突发流量扩容慢", "毫秒级自动扩缩容"], ["资源利用率低", "精确分配，按需使用"]]}
            ]
          },
          {
            "id": "l1",
            "title": "Serverless理念",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Serverless让开发者只关注业务代码，无需管理服务器，按实际使用付费。"},
              {"id": "b2", "type": "list", "items": ["FaaS (Function as a Service)：函数即服务", "BaaS (Backend as a Service)：后端即服务", "自动扩缩容：从0到N按需扩展", "按调用计费：不用不花钱"]}
            ]
          },
          {
            "id": "l2",
            "title": "Knative架构",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Knative是基于Kubernetes的Serverless平台，支持函数和容器化应用。"},
              {"id": "b2", "type": "code", "language": "text", "filename": "Knative架构", "code": "┌─────────────────────────────────────────────┐\n│              Knative Serving                │\n│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │\n│  │Route    │ │Config   │ │Revision │       │\n│  │(路由)   │ │(配置)   │ │(版本)   │       │\n│  └─────────┘ └─────────┘ └─────────┘       │\n└─────────────────────────────────────────────┘\n                      ↓\n┌─────────────────────────────────────────────┐\n│              Knative Eventing               │\n│  ┌─────────┐ ┌─────────┐ ┌─────────┐       │\n│  │Source   │ │Broker   │ │Trigger  │       │\n│  │(事件源)  │ │(代理)   │ │(触发器)  │       │\n│  └─────────┘ └─────────┘ └─────────┘       │\n└─────────────────────────────────────────────┘\n                      ↓\n┌─────────────────────────────────────────────┐\n│                Kubernetes                   │\n└─────────────────────────────────────────────┘"}
            ]
          },
          {
            "id": "l3",
            "title": "Knative Service部署",
            "blocks": [
              {"id": "b1", "type": "code", "language": "yaml", "filename": "service.yaml", "code": "apiVersion: serving.knative.dev/v1\nkind: Service\nmetadata:\n  name: hello-service\nspec:\n  template:\n    metadata:\n      annotations:\n        # 最小实例数（0表示可以缩到0）\n        autoscaling.knative.dev/minScale: \"0\"\n        # 最大实例数\n        autoscaling.knative.dev/maxScale: \"10\"\n    spec:\n      containers:\n      - image: gcr.io/my-project/hello:v1\n        ports:\n        - containerPort: 8080\n        resources:\n          limits:\n            memory: 256Mi\n            cpu: 100m"},
              {"id": "b2", "type": "code", "language": "bash", "filename": "部署命令", "code": "# 部署服务\nkubectl apply -f service.yaml\n\n# 查看服务状态\nkubectl get ksvc hello-service\n\n# 获取访问URL\nkubectl get ksvc hello-service -o jsonpath='{.status.url}'"}
            ]
          },
          {
            "id": "l4",
            "title": "事件驱动示例",
            "blocks": [
              {"id": "b1", "type": "code", "language": "yaml", "filename": "event-trigger.yaml", "code": "# 事件源：监听Kafka消息\napiVersion: sources.knative.dev/v1beta1\nkind: KafkaSource\nmetadata:\n  name: order-source\nspec:\n  consumerGroup: order-group\n  bootstrapServers:\n  - kafka:9092\n  topics:\n  - orders\n  sink:\n    ref:\n      apiVersion: serving.knative.dev/v1\n      kind: Service\n      name: order-processor\n---\n# 处理函数\napiVersion: serving.knative.dev/v1\nkind: Service\nmetadata:\n  name: order-processor\nspec:\n  template:\n    spec:\n      containers:\n      - image: my-registry/order-processor:v1"},
              {"id": "b2", "type": "tip", "content": "适用场景：事件驱动、定时任务、突发流量、API网关后端"}
            ]
          }
        ]
      },
      {
        "id": "ch12",
        "title": "边缘计算",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "中心化架构下，所有请求都要访问远程服务器，距离远、延迟高，跨运营商访问更慢。"},
              {"id": "b2", "type": "table", "headers": ["中心化架构问题", "边缘计算解决方案"], "rows": [["用户距离服务器远，延迟高", "CDN节点就近服务"], ["跨运营商访问慢", "BGP多线自动选路"], ["静态资源重复传输", "边缘缓存，就近返回"], ["简单逻辑也要回源", "边缘函数就近执行"]]}
            ]
          },
          {
            "id": "l1",
            "title": "边缘计算概念",
            "blocks": [
              {"id": "b1", "type": "text", "content": "边缘计算将计算和数据存储推向网络边缘，靠近用户和数据源，减少延迟。"},
              {"id": "b2", "type": "list", "items": ["CDN内容分发：静态资源就近获取", "边缘节点计算：在边缘执行逻辑", "DNS智能解析：根据地理位置路由", "运营商线路优化：BGP多线接入"]}
            ]
          },
          {
            "id": "l2",
            "title": "DNS智能解析实现",
            "blocks": [
              {"id": "b1", "type": "text", "content": "根据用户IP地理位置，返回最近的服务器IP。"},
              {"id": "b2", "type": "code", "language": "text", "filename": "DNS智能解析架构", "code": "用户A(北京)                     用户B(上海)\n    │                               │\n    ↓ 解析 www.example.com          ↓ 解析 www.example.com\n┌─────────────────────────────────────────────┐\n│              智能DNS服务                     │\n│  根据用户IP判断地理位置，返回最近节点IP        │\n└─────────────────────────────────────────────┘\n    │                               │\n    ↓ 返回 1.1.1.1                  ↓ 返回 2.2.2.2\n┌──────────┐                  ┌──────────┐\n│ 北京节点  │                  │ 上海节点  │\n│ 1.1.1.1  │                  │ 2.2.2.2  │\n└──────────┘                  └──────────┘"},
              {"id": "b3", "type": "code", "language": "text", "filename": "DNSPod配置示例", "code": "# A记录 - 分运营商/地区解析\n记录类型: A\n主机记录: www\n记录值: 1.1.1.1\n线路: 华北地区\n\n记录类型: A\n主机记录: www\n记录值: 2.2.2.2\n线路: 华东地区\n\n记录类型: A\n主机记录: www  \n记录值: 3.3.3.3\n线路: 电信\n\n记录类型: A\n主机记录: www\n记录值: 4.4.4.4\n线路: 联通"}
            ]
          },
          {
            "id": "l3",
            "title": "运营商线路BGP",
            "blocks": [
              {"id": "b1", "type": "text", "content": "BGP(边界网关协议)实现多运营商线路接入，自动选择最优路由。"},
              {"id": "b2", "type": "code", "language": "text", "filename": "BGP多线架构", "code": "┌──────────────────────────────────────────┐\n│              BGP机房                      │\n│  ┌─────────────────────────────────────┐ │\n│  │           核心路由器                  │ │\n│  │      (BGP协议，多线接入)              │ │\n│  └─────────────────────────────────────┘ │\n│       │         │          │            │\n│       ↓         ↓          ↓            │\n│  ┌────────┐ ┌────────┐ ┌────────┐       │\n│  │  电信   │ │  联通   │ │  移动   │       │\n│  │  出口   │ │  出口   │ │  出口   │       │\n│  └────────┘ └────────┘ └────────┘       │\n└──────────────────────────────────────────┘\n       │         │          │\n       ↓         ↓          ↓\n┌────────┐ ┌────────┐ ┌────────┐\n│电信用户 │ │联通用户 │ │移动用户 │\n└────────┘ └────────┘ └────────┘"},
              {"id": "b3", "type": "table", "headers": ["线路类型", "特点", "价格"], "rows": [["单线", "仅一家运营商", "便宜"], ["双线", "电信+联通", "中等"], ["三线", "电信+联通+移动", "较高"], ["BGP", "多线融合，自动选路", "最高"]]}
            ]
          },
          {
            "id": "l4",
            "title": "CDN边缘计算",
            "blocks": [
              {"id": "b1", "type": "text", "content": "现代CDN不仅缓存静态资源，还支持在边缘执行代码。"},
              {"id": "b2", "type": "code", "language": "javascript", "filename": "Cloudflare Worker示例", "code": "// 边缘函数：根据地区返回不同内容\naddEventListener('fetch', event => {\n  event.respondWith(handleRequest(event.request))\n})\n\nasync function handleRequest(request) {\n  const country = request.cf.country\n  \n  if (country === 'CN') {\n    return new Response('欢迎来自中国的用户！', {\n      headers: { 'content-type': 'text/plain; charset=utf-8' }\n    })\n  }\n  \n  return new Response('Hello from Edge!', {\n    headers: { 'content-type': 'text/plain' }\n  })\n}"},
              {"id": "b3", "type": "tip", "content": "边缘计算适用：静态资源加速、动态内容缓存、A/B测试、地理位置服务"}
            ]
          }
        ]
      },
      {
        "id": "ch13",
        "title": "三层架构",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "业务逻辑和数据访问混在一起，代码难以复用和测试；Controller直接操作数据库，修改一处影响多处。"},
              {"id": "b2", "type": "table", "headers": ["代码混乱问题", "三层架构解决方案"], "rows": [["Controller包含业务逻辑，难复用", "Service层抛取业务逻辑，多处复用"], ["直接操作数据库，难测试", "Repository层封装，可Mock测试"], ["修改数据库影响多处", "只改Repository，不影响上层"], ["代码职责不清", "每层职责明确，易分工"]]}
            ]
          },
          {
            "id": "l1",
            "title": "什么是三层架构",
            "blocks": [
              {"id": "b1", "type": "text", "content": "三层架构将应用分为表现层、业务逻辑层、数据访问层，实现关注点分离。"},
              {"id": "b2", "type": "code", "language": "text", "filename": "三层架构", "code": "┌─────────────────────────────────────┐\n│          表现层 (Presentation)       │\n│     Controller / View / DTO         │\n│     处理HTTP请求、参数校验、响应       │\n└─────────────────────────────────────┘\n                   ↓↑\n┌─────────────────────────────────────┐\n│          业务层 (Business)           │\n│     Service / Domain / BO           │\n│     核心业务逻辑、事务管理             │\n└─────────────────────────────────────┘\n                   ↓↑\n┌─────────────────────────────────────┐\n│          数据层 (Data Access)        │\n│     Repository / DAO / Entity       │\n│     数据库操作、ORM映射              │\n└─────────────────────────────────────┘"}
            ]
          },
          {
            "id": "l2",
            "title": "代码结构",
            "blocks": [
              {"id": "b1", "type": "code", "language": "text", "filename": "项目目录", "code": "src/main/java/com/example/\n├── controller/          # 表现层\n│   └── ProductController.java\n├── service/             # 业务层\n│   ├── ProductService.java\n│   └── impl/\n│       └── ProductServiceImpl.java\n├── repository/          # 数据层\n│   └── ProductRepository.java\n├── entity/              # 实体\n│   └── Product.java\n└── dto/                 # 数据传输对象\n    ├── ProductReq.java\n    └── ProductResp.java"}
            ]
          },
          {
            "id": "l3",
            "title": "三层代码实现",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "ProductController.java", "code": "@RestController\n@RequestMapping(\"/api/products\")\npublic class ProductController {\n    @Autowired\n    private ProductService productService;\n    \n    @PostMapping\n    public ProductResp create(@RequestBody @Valid ProductReq req) {\n        return productService.create(req);\n    }\n}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "ProductServiceImpl.java", "code": "@Service\n@Transactional\npublic class ProductServiceImpl implements ProductService {\n    @Autowired\n    private ProductRepository productRepository;\n    \n    @Override\n    public ProductResp create(ProductReq req) {\n        Product product = new Product();\n        product.setName(req.getName());\n        product.setPrice(req.getPrice());\n        \n        Product saved = productRepository.save(product);\n        \n        return ProductResp.from(saved);\n    }\n}"},
              {"id": "b3", "type": "code", "language": "java", "filename": "ProductRepository.java", "code": "@Repository\npublic interface ProductRepository extends JpaRepository<Product, Long> {\n    List<Product> findByNameContaining(String name);\n    \n    @Query(\"SELECT p FROM Product p WHERE p.price > :minPrice\")\n    List<Product> findExpensiveProducts(@Param(\"minPrice\") BigDecimal minPrice);\n}"}
            ]
          },
          {
            "id": "l4",
            "title": "三层架构优缺点",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["优点", "缺点"], "rows": [["职责清晰", "层间依赖"], ["易于测试", "代码量增加"], ["可维护性高", "简单场景过度设计"], ["团队分工明确", "DTO转换繁琐"]]}
            ]
          }
        ]
      },
      {
        "id": "ch14",
        "title": "单层架构 Active Record",
        "lessons": [
          {
            "id": "l0",
            "title": "解决了什么问题",
            "blocks": [
              {"id": "b1", "type": "text", "content": "三层架构代码量大，简单CRUD也要写一堆文件；对于原型验证和小项目来说太重了。"},
              {"id": "b2", "type": "table", "headers": ["三层架构问题", "Active Record解决方案"], "rows": [["简单CRUD也要多个文件", "一个Model完成所有操作"], ["层间数据转换繁琐", "无需转换，直接操作"], ["开发速度慢", "快速原型验证"], ["过度设计", "简单直接，够用就好"]]}
            ]
          },
          {
            "id": "l1",
            "title": "Active Record模式",
            "blocks": [
              {"id": "b1", "type": "text", "content": "Model直接当控制层用，也能操作数据库，一个类搞定所有事。"},
              {"id": "b2", "type": "code", "language": "text", "filename": "Active Record架构", "code": "三层架构：                    Active Record：\n─────────────                    ────────────────\nController                        Controller\n    ↓                                 ↓\nService                           Model（数据+行为+数据库操作）\n    ↓                                 ↓\nDAO/Repository                    数据库\n    ↓\n数据库"},
              {"id": "b3", "type": "tip", "content": "Active Record = Model自带数据库操作，省掉DAO和Service层"}
            ]
          },
          {
            "id": "l2",
            "title": "Ruby on Rails示例",
            "blocks": [
              {"id": "b1", "type": "code", "language": "ruby", "filename": "product.rb", "code": "class Product < ApplicationRecord\n  # 验证\n  validates :name, presence: true\n  validates :price, numericality: { greater_than: 0 }\n  \n  # 关联\n  belongs_to :category\n  has_many :order_items\n  \n  # 业务方法\n  def discount(percent)\n    self.price *= (1 - percent / 100.0)\n    save\n  end\n  \n  # 作用域\n  scope :expensive, -> { where('price > 100') }\nend"},
              {"id": "b2", "type": "code", "language": "ruby", "filename": "使用示例", "code": "# 创建\nproduct = Product.create(name: '手机', price: 999)\n\n# 查询\nProduct.find(1)                    # 按ID查询\nProduct.where(name: '手机')        # 条件查询\nProduct.expensive.limit(10)        # 链式调用\n\n# 更新\nproduct.update(price: 899)\nproduct.discount(10)               # 调用业务方法\n\n# 删除\nproduct.destroy"}
            ]
          },
          {
            "id": "l3",
            "title": "Java实现 (MyBatis-Plus)",
            "blocks": [
              {"id": "b1", "type": "code", "language": "java", "filename": "Product.java", "code": "@Data\n@TableName(\"product\")\npublic class Product extends Model<Product> {\n    @TableId(type = IdType.AUTO)\n    private Long id;\n    private String name;\n    private BigDecimal price;\n    \n    // 业务方法直接写在实体中\n    public void discount(int percent) {\n        this.price = this.price.multiply(\n            BigDecimal.valueOf(1 - percent / 100.0)\n        );\n        this.updateById();  // 直接保存\n    }\n}"},
              {"id": "b2", "type": "code", "language": "java", "filename": "使用示例", "code": "// 创建\nProduct product = new Product();\nproduct.setName(\"手机\");\nproduct.setPrice(new BigDecimal(\"999\"));\nproduct.insert();\n\n// 查询\nProduct found = new Product().selectById(1L);\nList<Product> list = new Product().selectList(\n    new QueryWrapper<Product>().gt(\"price\", 100)\n);\n\n// 更新\nproduct.setPrice(new BigDecimal(\"899\"));\nproduct.updateById();\nproduct.discount(10);  // 调用业务方法\n\n// 删除\nproduct.deleteById();"}
            ]
          },
          {
            "id": "l4",
            "title": "Active Record vs 三层架构",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["对比项", "Active Record", "三层架构"], "rows": [["代码量", "少，快速开发", "多，结构清晰"], ["测试难度", "难，紧耦合数据库", "易，可Mock"], ["适用场景", "简单CRUD、原型", "复杂业务"], ["典型框架", "Rails, Django", "Spring"]]},
              {"id": "b2", "type": "tip", "content": "建议：简单项目用Active Record快速开发，复杂项目用分层架构保证可维护性"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "grammar-basic",
    "pathId": "grammar",
    "title": "英语语法基础",
    "desc": "小白入门，从零开始学语法",
    "icon": "📚",
    "chapters": [
      {
        "id": "ch1",
        "title": "词性入门",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "名词",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "名词是表示人、事物、地点或抽象概念的词。"},
              {"id": "b2", "type": "table", "headers": ["类型", "例词"], "rows": [["专有名词", "Tom, China, Monday"], ["普通名词", "book, teacher, apple"], ["集合名词", "family, class, team"], ["抽象名词", "love, happiness, time"]]},
              {"id": "b3", "type": "tip", "content": "名词复数：一般加-s，以s/x/ch/sh结尾加-es"}
            ]
          },
          {
            "id": "l2",
            "title": "代词",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "代词是代替名词的词，避免重复。"},
              {"id": "b2", "type": "table", "headers": ["类型", "主格", "宾格", "物主代词"], "rows": [["第一人称单数", "I", "me", "my/mine"], ["第二人称", "you", "you", "your/yours"], ["第三人称单数", "he/she/it", "him/her/it", "his/her/its"], ["第一人称复数", "we", "us", "our/ours"], ["第三人称复数", "they", "them", "their/theirs"]]}
            ]
          },
          {
            "id": "l3",
            "title": "动词",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "动词表示动作或状态，是句子的核心。"},
              {"id": "b2", "type": "table", "headers": ["类型", "例词", "例句"], "rows": [["实义动词", "run, eat, study", "I run every day."], ["系动词", "be, become, seem", "She is a teacher."], ["助动词", "do, have, will", "I do not know."], ["情态动词", "can, may, must", "You can go now."]]}
            ]
          },
          {
            "id": "l4",
            "title": "形容词",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "形容词用来修饰名词，说明事物的特征。"},
              {"id": "b2", "type": "code", "language": "text", "code": "a big apple  (一个大苹果)\na beautiful girl  (一个漂亮的女孩)\nThe book is interesting.  (这本书很有趣)"},
              {"id": "b3", "type": "tip", "content": "形容词位置：名词前作定语，系动词后作表语"}
            ]
          },
          {
            "id": "l5",
            "title": "副词",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "副词用来修饰动词、形容词或其他副词。"},
              {"id": "b2", "type": "table", "headers": ["类型", "例词", "例句"], "rows": [["时间副词", "now, yesterday, always", "I am busy now."], ["地点副词", "here, there, outside", "Come here!"], ["程度副词", "very, quite, too", "She is very beautiful."], ["方式副词", "slowly, carefully, well", "He runs fast."]]}
            ]
          },
          {
            "id": "l6",
            "title": "介词",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "介词表示名词与其他词的关系，不能单独使用。"},
              {"id": "b2", "type": "table", "headers": ["类型", "介词", "例句"], "rows": [["时间", "at, on, in", "at 8 o'clock / on Monday / in May"], ["地点", "at, on, in", "at the door / on the desk / in the room"], ["方向", "to, from, into", "go to school / come from China"], ["其他", "with, for, about", "talk with him / wait for you"]]}
            ]
          },
          {
            "id": "l7",
            "title": "连词",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "连词用来连接词、词组或句子。"},
              {"id": "b2", "type": "table", "headers": ["类型", "连词", "例句"], "rows": [["并列", "and", "Tom and Jerry are friends."], ["转折", "but", "He is poor but happy."], ["选择", "or", "Tea or coffee?"], ["因果", "so", "I was tired, so I went to bed."], ["原因", "because", "I stayed home because it rained."]]}
            ]
          },
          {
            "id": "l8",
            "title": "冠词",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "冠词用在名词前，表示特指或泛指。"},
              {"id": "b2", "type": "table", "headers": ["冠词", "用法", "例句"], "rows": [["a/an", "泛指单数，第一次提到", "I have a book."], ["the", "特指，双方都知道", "The book is on the desk."], ["零冠词", "复数/不可数名词泛指", "I like apples. / Water is important."]]},
              {"id": "b3", "type": "tip", "content": "a用在辅音开头的词前，an用在元音开头的词前"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "句子成分",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "主语",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "主语是句子说明的人或事物，是动作的执行者。"},
              {"id": "b2", "type": "code", "language": "text", "code": "Tom is a student.  (主语: Tom)\nThe book is interesting.  (主语: The book)\nTo learn English is important.  (主语: To learn English)"},
              {"id": "b3", "type": "tip", "content": "找主语：问'谁'或'什么'做了这个动作"}
            ]
          },
          {
            "id": "l2",
            "title": "谓语",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "谓语说明主语的动作或状态，由动词充当。"},
              {"id": "b2", "type": "code", "language": "text", "code": "I eat breakfast.  (谓语: eat)\nShe is beautiful.  (谓语: is)\nWe have finished the work.  (谓语: have finished)"},
              {"id": "b3", "type": "tip", "content": "谓语是句子的核心，必须和主语保持一致"}
            ]
          },
          {
            "id": "l3",
            "title": "宾语",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "宾语是动作的对象或承受者。"},
              {"id": "b2", "type": "code", "language": "text", "code": "I love you.  (宾语: you)\nShe bought a book.  (宾语: a book)\nHe gave me a gift.  (间接宾语: me, 直接宾语: a gift)"},
              {"id": "b3", "type": "tip", "content": "找宾语：问'动作的对象是谁/什么'"}
            ]
          },
          {
            "id": "l4",
            "title": "定语",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "定语用来修饰名词，说明特征。"},
              {"id": "b2", "type": "code", "language": "text", "code": "a beautiful girl  (定语: beautiful)\nthe book on the desk  (定语: on the desk)\nthe man who is talking  (定语: who is talking)"},
              {"id": "b3", "type": "tip", "content": "定语位置：单词在名词前，短语/从句在名词后"}
            ]
          },
          {
            "id": "l5",
            "title": "状语",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "状语修饰动词、形容词或整个句子，说明时间、地点、方式等。"},
              {"id": "b2", "type": "table", "headers": ["类型", "例句", "状语"], "rows": [["时间", "I got up early yesterday.", "yesterday"], ["地点", "She studies in the library.", "in the library"], ["方式", "He speaks English fluently.", "fluently"], ["原因", "I stayed home because of the rain.", "because of the rain"]]}
            ]
          },
          {
            "id": "l6",
            "title": "补语",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "补语用来补充说明主语或宾语的状态、特征。"},
              {"id": "b2", "type": "table", "headers": ["类型", "例句", "补语"], "rows": [["主语补语", "She is a teacher.", "a teacher"], ["宾语补语", "We call him Tom.", "Tom"], ["宾语补语", "I found the book interesting.", "interesting"]]}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "基本句型",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "主+谓",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "最简单的句型，主语+不及物动词。"},
              {"id": "b2", "type": "code", "language": "text", "code": "Birds fly.  (鸟飞)\nThe sun rises.  (太阳升起)\nHe laughed.  (他笑了)"}
            ]
          },
          {
            "id": "l2",
            "title": "主+谓+宾",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "主语+及物动词+宾语。"},
              {"id": "b2", "type": "code", "language": "text", "code": "I love you.  (我爱你)\nShe reads books.  (她读书)\nWe study English.  (我们学英语)"}
            ]
          },
          {
            "id": "l3",
            "title": "主+谓+表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "主语+系动词+表语，说明主语的状态或特征。"},
              {"id": "b2", "type": "code", "language": "text", "code": "I am a student.  (我是学生)\nShe looks beautiful.  (她看起来很漂亮)\nThe food tastes good.  (食物尝起来很好)"},
              {"id": "b3", "type": "tip", "content": "常见系动词：be, become, seem, look, sound, taste, feel, smell"}
            ]
          },
          {
            "id": "l4",
            "title": "主+谓+宾+宾补",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "宾语补贾说明宾语的状态或特征。"},
              {"id": "b2", "type": "code", "language": "text", "code": "We call him Tom.  (我们叫他汤姆)\nI found the book interesting.  (我发现这本书很有趣)\nThey made me happy.  (他们让我很开心)"}
            ]
          },
          {
            "id": "l5",
            "title": "主+谓+间宾+直宾",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "双宾语句型，间接宾语通常是人，直接宾语是物。"},
              {"id": "b2", "type": "code", "language": "text", "code": "He gave me a book.  (他给了我一本书)\nShe bought him a gift.  (她给他买了一个礼物)\nI told her a story.  (我给她讲了一个故事)"},
              {"id": "b3", "type": "tip", "content": "可改写为：He gave a book to me."}
            ]
          },
          {
            "id": "l6",
            "title": "there be句型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示'某地有某物'，there + be + 名词 + 地点。"},
              {"id": "b2", "type": "code", "language": "text", "code": "There is a book on the desk.  (桌子上有一本书)\nThere are many students in the classroom.  (教室里有很多学生)\nThere was a party last night.  (昨晚有一个派对)"},
              {"id": "b3", "type": "tip", "content": "be动词由后面的名词决定单复数（就近原则）"}
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "句子类型",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "陈述句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "陈述句用来陈述事实或观点，以句号结尾。"},
              {"id": "b2", "type": "table", "headers": ["类型", "例句"], "rows": [["肯定句", "I am a student."], ["否定句", "I am not a student."], ["否定句", "He does not like coffee."]]},
              {"id": "b3", "type": "tip", "content": "否定句：be动词+not 或 do/does/did+not+动词原形"}
            ]
          },
          {
            "id": "l2",
            "title": "一般疑问句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用Yes/No回答的疑问句，助动词/系动词放句首。"},
              {"id": "b2", "type": "code", "language": "text", "code": "Are you a student? - Yes, I am. / No, I'm not.\nDo you like coffee? - Yes, I do. / No, I don't.\nCan you swim? - Yes, I can. / No, I can't."},
              {"id": "b3", "type": "tip", "content": "判断位置：看句首是否是助动词/情态动词/be动词"}
            ]
          },
          {
            "id": "l3",
            "title": "特殊疑问句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "用疑问词开头，不能用Yes/No回答。"},
              {"id": "b2", "type": "table", "headers": ["疑问词", "问什么", "例句"], "rows": [["What", "什么", "What is your name?"], ["Who", "谁", "Who is that man?"], ["Where", "哪里", "Where do you live?"], ["When", "何时", "When did you come?"], ["Why", "为什么", "Why are you late?"], ["How", "怎样", "How are you?"]]}
            ]
          },
          {
            "id": "l4",
            "title": "祈使句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示命令、请求、建议，通常省略主语 you。"},
              {"id": "b2", "type": "code", "language": "text", "code": "Open the door.  (开门)\nPlease sit down.  (请坐)\nDon't be late.  (不要迟到)\nLet's go!  (我们走吧)"}
            ]
          },
          {
            "id": "l5",
            "title": "感叹句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示强烈感情，常用What或How引导。"},
              {"id": "b2", "type": "table", "headers": ["结构", "例句"], "rows": [["What + a/an + adj + n!", "What a beautiful flower!"], ["What + adj + n(复数/不可数)!", "What beautiful flowers!"], ["How + adj/adv!", "How beautiful!"], ["How + adj + 主 + 谓!", "How beautiful the flower is!"]]}
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "基础时态",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "一般现在时",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示经常性、习惯性动作或客观事实。"},
              {"id": "b2", "type": "table", "headers": ["主语", "肯定句", "否定句", "疑问句"], "rows": [["I/You/We/They", "I work. (我工作)", "I don't work. (我不工作)", "Do you work? (你工作吗?)"], ["He/She/It", "He works. (他工作)", "He doesn't work. (他不工作)", "Does he work? (他工作吗?)"]]},
              {"id": "b3", "type": "tip", "content": "时间标志：always, usually, often, sometimes, every day"}
            ]
          },
          {
            "id": "l2",
            "title": "一般过去时",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示过去某个时间发生的动作或存在的状态。"},
              {"id": "b2", "type": "table", "headers": ["类型", "结构", "例句"], "rows": [["肯定句", "主语 + 动词过去式", "I worked yesterday. (我昨天工作了)"], ["否定句", "主语 + didn't + 动词原形", "I didn't work yesterday. (我昨天没工作)"], ["疑问句", "Did + 主语 + 动词原形?", "Did you work yesterday? (你昨天工作了吗?)"]]},
              {"id": "b3", "type": "tip", "content": "时间标志：yesterday, last week, ago, in 2020"}
            ]
          },
          {
            "id": "l3",
            "title": "一般将来时",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示将来某个时间要发生的动作或存在的状态。"},
              {"id": "b2", "type": "table", "headers": ["结构", "例句"], "rows": [["will + 动词原形", "I will call you tonight. (我今晚会给你打电话)"], ["be going to + 动词原形", "It is going to rain. (天要下雨了)"]]},
              {"id": "b3", "type": "tip", "content": "时间标志：tomorrow, next week, in the future"}
            ]
          },
          {
            "id": "l4",
            "title": "现在进行时",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示现在正在进行的动作。"},
              {"id": "b2", "type": "table", "headers": ["类型", "结构", "例句"], "rows": [["肯定句", "am/is/are + doing", "I am reading a book. (我正在看书)"], ["否定句", "am/is/are + not + doing", "I am not reading. (我没在看书)"], ["疑问句", "Am/Is/Are + 主语 + doing?", "Are you reading? (你在看书吗?)"]]},
              {"id": "b3", "type": "tip", "content": "时间标志：now, at the moment, look, listen"}
            ]
          },
          {
            "id": "l5",
            "title": "过去进行时",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示过去某一时刻正在进行的动作。"},
              {"id": "b2", "type": "table", "headers": ["结构", "例句"], "rows": [["was/were + doing", "I was reading at 8 last night. (昨晚8点我正在看书)"], ["常见用法", "While I was reading, the phone rang. (我看书时，电话响了)"]]},
              {"id": "b3", "type": "tip", "content": "常与when/while连用，表示两个同时进行的动作"}
            ]
          },
          {
            "id": "l6",
            "title": "现在完成时",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示过去发生的动作对现在造成的影响或结果。"},
              {"id": "b2", "type": "table", "headers": ["用法", "例句"], "rows": [["have/has + done", "I have finished my homework. (我已经完成作业了)"], ["用法一：经历", "I have been to Beijing twice. (我去过北京两次)"], ["用法二：结果", "He has lost his key. (他丢了钥匙，所以现在打不开门)"]]},
              {"id": "b3", "type": "tip", "content": "时间标志：already, yet, just, ever, never, since, for"}
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "grammar-advanced",
    "pathId": "grammar",
    "title": "英语语法进阶",
    "desc": "复合句与特殊句型",
    "icon": "🚀",
    "chapters": [
      {
        "id": "ch1",
        "title": "定语从句",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "关系代词 who/whom/whose",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "关系代词用来引导定语从句，同时在从句中作成分。"},
              {"id": "b2", "type": "table", "headers": ["关系代词", "先行词", "从句中作用", "例句"], "rows": [["who", "人", "主语", "The man who is talking is my teacher."], ["whom", "人", "宾语", "The girl whom I met is very kind."], ["whose", "人/物", "定语", "The boy whose father is a doctor won the prize."]]}
            ]
          },
          {
            "id": "l2",
            "title": "关系代词 which/that",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["关系代词", "先行词", "从句中作用", "例句"], "rows": [["which", "物", "主语/宾语", "The book which is on the desk is mine."], ["that", "人/物", "主语/宾语", "This is the best movie that I have ever seen."]]},
              {"id": "b2", "type": "tip", "content": "只能用that的情况：先行词有最高级、序数词、all/any/no等修饰时"}
            ]
          },
          {
            "id": "l3",
            "title": "关系副词 where/when/why",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["关系副词", "先行词", "从句中作用", "例句"], "rows": [["where", "地点", "状语", "This is the school where I studied."], ["when", "时间", "状语", "I remember the day when we first met."], ["why", "reason", "状语", "That is the reason why he was late."]]}
            ]
          },
          {
            "id": "l4",
            "title": "限定性与非限定性",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["类型", "特点", "例句"], "rows": [["限定性", "不加逗号，从句不可省略", "The man who is standing there is my father."], ["非限定性", "加逗号，从句可省略", "My father, who is 50, is a teacher."]]},
              {"id": "b2", "type": "tip", "content": "非限定性定语从句不能用that引导"}
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "状语从句",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "时间状语从句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示动作发生的时间。"},
              {"id": "b2", "type": "table", "headers": ["引导词", "含义", "例句"], "rows": [["when", "当...时", "When I arrived, he was sleeping."], ["while", "当...时(延续性)", "While I was reading, the phone rang."], ["before", "在...之前", "Finish it before you leave."], ["after", "在...之后", "I went home after I finished work."], ["as soon as", "一...就", "As soon as he comes, we will start."]]}
            ]
          },
          {
            "id": "l2",
            "title": "条件状语从句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["引导词", "含义", "例句"], "rows": [["if", "如果", "If it rains, we will stay home."], ["unless", "除非", "Unless you work hard, you will fail."], ["as long as", "只要", "As long as you try, you can succeed."]]},
              {"id": "b2", "type": "tip", "content": "主将从现：主句用将来时，从句用一般现在时"}
            ]
          },
          {
            "id": "l3",
            "title": "原因状语从句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["引导词", "含义", "例句"], "rows": [["because", "因为(直接原因)", "I stayed home because I was sick."], ["since", "既然", "Since you know it, why ask?"], ["as", "由于", "As it was late, we went home."]]}
            ]
          },
          {
            "id": "l4",
            "title": "让步状语从句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["引导词", "含义", "例句"], "rows": [["although/though", "虽然", "Although he is young, he is very smart."], ["even if/though", "即使", "Even if it rains, I will go."]]},
              {"id": "b2", "type": "tip", "content": "although/though不能与but连用"}
            ]
          },
          {
            "id": "l5",
            "title": "目的与结果状语从句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["类型", "引导词", "例句"], "rows": [["目的", "so that / in order that", "He works hard so that he can pass the exam."], ["结果", "so...that / such...that", "He was so tired that he fell asleep."]]}
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "名词性从句",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "主语从句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "从句在句中作主语。"},
              {"id": "b2", "type": "code", "language": "text", "code": "What he said is true.  (他说的是真的)\nThat she passed the exam surprised us.  (她通过考试令我们惊讶)\nWhether he will come is unknown.  (他是否会来还不确定)"},
              {"id": "b3", "type": "tip", "content": "常用it作形式主语：It is clear that he is lying."}
            ]
          },
          {
            "id": "l2",
            "title": "宾语从句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "从句在句中作宾语，最常见的名词性从句。"},
              {"id": "b2", "type": "code", "language": "text", "code": "I know that he is honest.  (我知道他是诚实的)\nI wonder whether he will come.  (我想知道他是否会来)\nTell me what you need.  (告诉我你需要什么)"},
              {"id": "b3", "type": "tip", "content": "that引导宾语从句时可省略"}
            ]
          },
          {
            "id": "l3",
            "title": "表语从句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "从句在句中作表语，跟在系动词后。"},
              {"id": "b2", "type": "code", "language": "text", "code": "The problem is that we are short of money.  (问题是我们缺钱)\nThis is what I want.  (这就是我想要的)\nIt looks as if it is going to rain.  (看起来要下雨了)"}
            ]
          },
          {
            "id": "l4",
            "title": "同位语从句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "从句说明前面名词的具体内容。"},
              {"id": "b2", "type": "code", "language": "text", "code": "The news that he won the prize is true.  (他获奖的消息是真的)\nI have no idea when he will come.  (我不知道他何时会来)"},
              {"id": "b3", "type": "tip", "content": "常接同位语从句的名词：news, fact, idea, belief, hope等"}
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "非谓语动词",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "不定式 to do",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "不定式可以作主语、宾语、表语、定语、状语、补语。"},
              {"id": "b2", "type": "table", "headers": ["作用", "例句"], "rows": [["作主语", "To learn English is important."], ["作宾语", "I want to go home."], ["作定语", "I have something to say."], ["作目的状语", "I came here to see you."], ["作补语", "I asked him to help me."]]}
            ]
          },
          {
            "id": "l2",
            "title": "动名词 doing",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "动名词具有名词和动词的特点。"},
              {"id": "b2", "type": "table", "headers": ["作用", "例句"], "rows": [["作主语", "Swimming is good for health."], ["作宾语", "I enjoy reading books."], ["作表语", "My hobby is collecting stamps."]]},
              {"id": "b3", "type": "tip", "content": "常接动名词的动词：enjoy, finish, mind, avoid, suggest等"}
            ]
          },
          {
            "id": "l3",
            "title": "现在分词 doing",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["作用", "例句"], "rows": [["作定语", "The man standing there is my father."], ["作状语", "Walking in the park, I met an old friend."], ["作补语", "I saw him running in the street."]]}
            ]
          },
          {
            "id": "l4",
            "title": "过去分词 done",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "过去分词表示被动或完成。"},
              {"id": "b2", "type": "table", "headers": ["作用", "例句"], "rows": [["作定语", "The book written by him is popular."], ["作状语", "Seen from the hill, the city looks beautiful."], ["作补语", "I had my hair cut yesterday."]]}
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "特殊句型",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "it is adj for sb to do sth",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "形式主语 it + 形容词 + for sb + 不定式。"},
              {"id": "b2", "type": "code", "language": "text", "code": "It is important for us to learn English.  (学英语对我们很重要)\nIt is difficult for him to finish the work.  (完成这项工作对他很难)\nIt is necessary for you to come early.  (你早点来是必要的)"},
              {"id": "b3", "type": "tip", "content": "for sb表示不定式的逻辑主语；若形容词表示人的品质（kind, clever等）用of sb"}
            ]
          },
          {
            "id": "l2",
            "title": "倒装句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "为了强调或平衡句子，把谓语的一部分或全部放到主语前。"},
              {"id": "b2", "type": "table", "headers": ["类型", "例句"], "rows": [["否定词开头", "Never have I seen such a beautiful place."], ["地点状语开头", "In the room sits a little girl."], ["so/neither开头", "So do I. / Neither can he."]]}
            ]
          },
          {
            "id": "l3",
            "title": "强调句",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "It is/was + 被强调部分 + that/who + 其他部分"},
              {"id": "b2", "type": "code", "language": "text", "code": "I met Tom in the park yesterday.\n⇒ It was Tom that/who I met in the park yesterday.  (强调宾语)\n⇒ It was in the park that I met Tom yesterday.  (强调地点)\n⇒ It was yesterday that I met Tom in the park.  (强调时间)"}
            ]
          },
          {
            "id": "l4",
            "title": "虚拟语气",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "表示假设、愿望、建议等非真实情况。"},
              {"id": "b2", "type": "table", "headers": ["类型", "条件从句", "主句"], "rows": [["与现在事实相反", "过去式(be用were)", "would/could/might + 动词原形"], ["与过去事实相反", "had + 过去分词", "would/could/might + have done"], ["与将来事实相反", "should/were to + 动词原形", "would/could/might + 动词原形"]]},
              {"id": "b3", "type": "code", "language": "text", "code": "If I were you, I would accept the offer.  (与现在相反)\nIf I had studied harder, I would have passed.  (与过去相反)"}
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "其他语法",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "主动与被动语态",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "主动语态：主语是动作执行者；被动语态：主语是动作承受者。"},
              {"id": "b2", "type": "table", "headers": ["时态", "主动", "被动(be + done)"], "rows": [["一般现在", "He writes a letter.", "A letter is written by him."], ["一般过去", "He wrote a letter.", "A letter was written by him."], ["现在进行", "He is writing a letter.", "A letter is being written by him."], ["现在完成", "He has written a letter.", "A letter has been written by him."]]}
            ]
          },
          {
            "id": "l2",
            "title": "情态动词",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "table", "headers": ["情态动词", "含义", "例句"], "rows": [["can/could", "能够，可以", "I can swim."], ["may/might", "可以，可能", "May I come in?"], ["must", "必须，一定", "You must finish it today."], ["should", "应该", "You should study hard."], ["would", "愿意，会", "Would you like some tea?"]]},
              {"id": "b2", "type": "tip", "content": "情态动词后接动词原形"}
            ]
          },
          {
            "id": "l3",
            "title": "主谓一致",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {"id": "b1", "type": "text", "content": "谓语动词的形式要与主语保持一致。"},
              {"id": "b2", "type": "table", "headers": ["规则", "例句"], "rows": [["单数主语 + 单数谓语", "The boy is playing."], ["复数主语 + 复数谓语", "The boys are playing."], ["and连接用复数", "Tom and Jerry are friends."], ["or/nor就近原则", "Neither he nor I am wrong."]]}
            ]
          }
        ]
      }
    ]
  }
]

// 根据ID获取课程
export function getCourse(id: string): Course | undefined {
  return courses.find(c => c.id === id)
}

// 根据pathId获取同路线的所有课程
export function getPathCourses(pathId: string): Course[] {
  return courses.filter(c => c.pathId === pathId)
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
