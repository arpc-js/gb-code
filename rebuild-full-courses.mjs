import { writeFileSync } from 'fs'

// 完整的Java课程数据
const javaCourses = [
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
                "content": "> < = 比较两个数的大小，判断是否满足条件，满足就是true，不满足就是false"
              },
              {
                "id": "b3",
                "type": "table",
                "headers": ["运算符", "含义", "示例", "结果"],
                "rows": [
                  [">", "大于", "5 > 3", "true(满足)"],
                  ["<", "小于", "5 < 3", "false(不满足)"],
                  ["==", "等于", "5 == 3", "false(不满足)"],
                  ["!=", "不等于", "5 != 3", "true(满足)"]
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
                "headers": ["名称", "运算符", "规则", "示例"],
                "rows": [
                  ["与 (并且)", "&&", "两边同时满足才为true", "5 > 3 && 2 > 1 // true"],
                  ["或 (或者)", "||", "满足一个就为true", "5 > 3 || 1 > 2 // true"],
                  ["非 (取反)", "!", "true变false，false变true", "!5 > 3 // false"]
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
                "headers": ["类型", "含义", "定义语法示例"],
                "rows": [
                  ["int", "整数类型", "int spuCount = 3;(购买数量)"],
                  ["double", "小数类型", "double spuPrice = 2.5; (商品单价)"],
                  ["String", "字符串(要加双引号)", "String spuName = \"牛奶\"; (商品名称)"],
                  ["boolean", "布尔类型(存真假true,false)", "boolean status = true; (支付状态)"]
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
        "title": "HTTP基础",
        "lessons": [
          {
            "id": "l1",
            "title": "HTTP协议",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "HTTP是超文本传输协议，用于在网络上传输数据。"
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
        "lessons": [
          {
            "id": "l1",
            "title": "SQLite简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "SQLite是一个轻量级的嵌入式数据库。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-advanced",
    "pathId": "java",
    "title": "Java高级",
    "desc": "多线程、集合、IO",
    "icon": "⚡",
    "chapters": [
      {
        "id": "ch1",
        "title": "多线程编程",
        "lessons": [
          {
            "id": "l1",
            "title": "线程基础",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "线程是程序执行的最小单位。"
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
    "title": "Java项目",
    "desc": "实战项目开发",
    "icon": "🚀",
    "chapters": [
      {
        "id": "ch1",
        "title": "项目初始化",
        "lessons": [
          {
            "id": "l1",
            "title": "项目结构",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Java项目的基本结构。"
              }
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
    "icon": "🏗️",
    "chapters": [
      {
        "id": "ch1",
        "title": "面向对象基础",
        "lessons": [
          {
            "id": "l1",
            "title": "类与对象",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "类是对象的模板，对象是类的实例。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-concurrent",
    "pathId": "java",
    "title": "Java并发",
    "desc": "线程安全、锁、并发集合",
    "icon": "🔄",
    "chapters": [
      {
        "id": "ch1",
        "title": "并发基础",
        "lessons": [
          {
            "id": "l1",
            "title": "线程安全",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "线程安全是指多线程环境下数据的一致性。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "java-jvm",
    "pathId": "java",
    "title": "Java虚拟机",
    "desc": "JVM原理、内存管理、性能优化",
    "icon": "🖥️",
    "chapters": [
      {
        "id": "ch1",
        "title": "JVM基础",
        "lessons": [
          {
            "id": "l1",
            "title": "JVM架构",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "JVM是Java虚拟机，负责执行Java字节码。"
              }
            ]
          }
        ]
      }
    ]
  }
]

// 完整的前端课程数据
const frontendCourses = [
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
                "content": "网页是由HTML、CSS和JavaScript组成的文件。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-vue",
    "pathId": "frontend",
    "title": "Vue框架",
    "desc": "Vue3、组件、路由",
    "icon": "🎯",
    "chapters": [
      {
        "id": "ch1",
        "title": "Vue基础",
        "lessons": [
          {
            "id": "l1",
            "title": "Vue简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Vue是一个渐进式JavaScript框架。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-react",
    "pathId": "frontend",
    "title": "React框架",
    "desc": "React、Hooks、状态管理",
    "icon": "⚛️",
    "chapters": [
      {
        "id": "ch1",
        "title": "React基础",
        "lessons": [
          {
            "id": "l1",
            "title": "React简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "React是一个用于构建用户界面的JavaScript库。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-css",
    "pathId": "frontend",
    "title": "CSS样式",
    "desc": "CSS3、Flexbox、Grid",
    "icon": "🎨",
    "chapters": [
      {
        "id": "ch1",
        "title": "CSS基础",
        "lessons": [
          {
            "id": "l1",
            "title": "CSS选择器",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "CSS选择器用于选择HTML元素并应用样式。"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-js",
    "pathId": "frontend",
    "title": "JavaScript",
    "desc": "ES6、异步、DOM操作",
    "icon": "⚡",
    "chapters": [
      {
        "id": "ch1",
        "title": "JavaScript基础",
        "lessons": [
          {
            "id": "l1",
            "title": "JavaScript简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "JavaScript是一种脚本语言，用于为网页添加交互功能。"
              }
            ]
          }
        ]
      }
    ]
  }
]

// 写入Java课程数据
const javaContent = `import type { Course } from '@/types/course'

export const javaCourses: Course[] = [
  ${JSON.stringify(javaCourses, null, 2).replace(/\n/g, '\n  ').replace(/^\s*\[/, '').replace(/\s*\]$/, '')}
]
`

// 写入前端课程数据
const frontendContent = `import type { Course } from '@/types/course'

export const frontendCourses: Course[] = [
  ${JSON.stringify(frontendCourses, null, 2).replace(/\n/g, '\n  ').replace(/^\s*\[/, '').replace(/\s*\]$/, '')}
]
`

// 写入文件
writeFileSync('src/mock/java.ts', javaContent)
writeFileSync('src/mock/front.ts', frontendContent)
console.log('Done! Full courses rebuilt.')
