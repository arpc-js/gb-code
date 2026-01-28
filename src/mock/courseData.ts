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
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
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
                "filename": "main.java",
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
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
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
                    "10 + 3",
                    "13"
                  ],
                  [
                    "-",
                    "减法",
                    "10 - 3",
                    "7"
                  ],
                  [
                    "*",
                    "乘法",
                    "10 * 3",
                    "30"
                  ],
                  [
                    "/",
                    "除法",
                    "10 / 3",
                    "3 (整除)"
                  ]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    IO.println(10 + 3);   // 13\n    IO.println(10 - 3);   // 7\n    IO.println(10 * 3);   // 30\n    IO.println(10 / 3);   // 3\n}"
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
                "content": "比较两个值的大小关系，返回布尔值。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "布尔值(boolean)：只有两种取值——true(真)和false(假)。"
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
                    "true"
                  ],
                  [
                    "<",
                    "小于",
                    "5 < 3",
                    "false"
                  ],
                  [
                    "==",
                    "等于",
                    "5 == 3",
                    "false"
                  ],
                  [
                    "!=",
                    "不等于",
                    "5 != 3",
                    "true"
                  ]
                ]
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "main.java",
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
                "content": "将两个比较计算的结果组合起来，进行逻辑运算"
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
                    "两边都满足才为真",
                    "5 > 3 && 2 > 1 // true"
                  ],
                  [
                    "或 (或者)",
                    "||",
                    "满足一个就为真",
                    "5 > 3 || 1 > 2 // true"
                  ],
                  [
                    "非 (取反)",
                    "!",
                    "真变假，假变真",
                    "!5 > 3 // false"
                  ]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    // 与：必须同时满足\n    IO.println((10 > 5) && (3 < 1)); // false\n\n    // 或：满足其中一个即可\n    IO.println((10 > 5) || (3 < 1)); // true\n\n    // 非：结果取反\n    IO.println(!(10 > 5));           // false\n}"
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
                "content": "变量用来存储数据"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "定义语法：类型 变量名 = 值;"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "业务模拟：你在商店买了2元牛奶和5元面包,请计算总价"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    int total = 0; //定义整数变量，存储总价,int是整数的意思\n    IO.println(total);//输出0\n\n    total = total+2;//计算牛奶的价格，然后存储到总价变量\n    IO.println(total);//输出2\n\n    total = total+5;//计算面包的价格，然后存储到总价变量\n    IO.println(total);//输出最终总价为7\n}"
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
                    "int count = 10;"
                  ],
                  [
                    "double",
                    "小数类型",
                    "double price = 9.9;"
                  ],
                  [
                    "String",
                    "字符串",
                    "String name = \"张三\";"
                  ],
                  [
                    "boolean",
                    "布尔类型(存真假true,false)",
                    "boolean b = true;"
                  ]
                ]
              },
              {
                "id": "b1",
                "type": "text",
                "content": "业务模拟:张三在你商店买了3袋2.5元牛奶和2袋子5.5元面包,请算账并记账保存数据,防止用户赖账\n实现方案:我们要用字符串变量保存张三的名字和牛奶面包的商品名称,用小数保存牛奶面包价格和总价,用布尔变量保存用户是否已支付"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    String userName = \"张三\";                 // 保存用户姓名，用来知道是谁来买东西\n\n    String spu1 = \"牛奶\";                     // 保存第一个商品名称：牛奶\n    double spu1_price = 2.5;                  // 保存牛奶的价格\n    double spu1_count = 3;                   // 保存购买牛奶的数量\n\n    String spu2 = \"面包\";                     // 保存第二个商品名称：面包\n    double spu2_price = 5.5;                  // 保存面包的价格，单位是元\n    double spu2_count = 2;                  // 保存购买面包的数量\n\n\n    IO.println(\"购物车信息:\");                // 提示下面开始输出购物车内容\n    IO.println(spu1 + \" : \" + spu1_price + \" 元\"); // 输出牛奶和它的价格\n    IO.println(spu2 + \" : \" + spu2_price + \" 元\"); // 输出面包和它的价格\n\n    double total = 0;                          // 定义总价变量，用来保存计算出来的总金额\n    total = total + spu1_count*spu1_price;                // 算牛奶总价，保存\n    total = total + spu2_count*spu2_price;           // 算面包+牛奶总价，保存\n\n    String payTime = \"2026-01-27\";       // 保存用户支付完成的时间\n    boolean status = true;                     // 保存支付状态，true 表示已经付钱\n\n    IO.println(\"算账完成，总价为：\" + total + \" 元\"); // 输出计算完成后的总价\n    IO.println(\"用户已支付：\" + status);        // 输出用户是否已经完成支付\n    //账单记录\n    IO.println(userName + payTime + \"购买\" + spu1_count + \"个\" + spu1 + spu2_count + \"个\" + spu2 + \",共计\" + total + \"元\");\n\n\n}\n"
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
                "content": "上面的代码太乱了！每个商品要定义3个变量(name/price/count)，10个商品就是30个变量。\n解决方案：用类把商品的名称、价格、数量打包成一个整体。"
              },
              {
                "id": "b2",
                "type": "list",
                "items": [
                  "定义：\n                   class 类名 {\n                     类型 属性;\n                     类型 属性;\n                   }",
                  "实例化：类名 变量 = new 类名();",
                  "赋值：对象.属性 = 值",
                  "取值：对象.属性"
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "class Spu {\n    String name;\n    double price;\n    int count;\n}\n\nvoid main() {\n    Spu spu1 = new Spu();\n    spu1.name = \"牛奶\";\n    spu1.price = 2.5;\n    spu1.count = 3;\n\n    Spu spu2 = new Spu();\n    spu2.name = \"面包\";\n    spu2.price = 5.5;\n    spu2.count = 2;\n\n    double total = spu1.price * spu1.count + spu2.price * spu2.count;\n    \n    IO.println(\"购物清单：\");\n    IO.println(spu1.name + \" x \" + spu1.count + \" = \" + spu1.price * spu1.count + \"元\");\n    IO.println(spu2.name + \" x \" + spu2.count + \" = \" + spu2.price * spu2.count + \"元\");\n    IO.println(\"总价：\" + total + \"元\");\n}"
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
                "content": "上面只能存固定数量的商品，如果用户买了50个商品怎么办？\n解决方案：用数组存储多个商品对象，想加多少加多少。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "定义语法：List<类型> 变量名 = new ArrayList<>();"
              },
              {
                "id": "b3",
                "type": "list",
                "items": [
                  "增：.add(元素)",
                  "遍历：使用增强for循环（快捷键：list.for）"
                ]
              },
              {
                "id": "b4",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "import java.util.*;\n\nclass Spu {\n    String name;\n    double price;\n    int count;\n}\n\nvoid main() {\n    List<Spu> cart = new ArrayList<>();\n\n    Spu spu1 = new Spu();\n    spu1.name = \"牛奶\";\n    spu1.price = 2.5;\n    spu1.count = 3;\n    cart.add(spu1);\n\n    Spu spu2 = new Spu();\n    spu2.name = \"面包\";\n    spu2.price = 5.5;\n    spu2.count = 2;\n    cart.add(spu2);\n\n    Spu spu3 = new Spu();\n    spu3.name = \"可乐\";\n    spu3.price = 3.0;\n    spu3.count = 5;\n    cart.add(spu3);\n\n    IO.println(\"购物清单：\");\n    double total = 0;\n    for (Spu spu : cart) {\n        double subtotal = spu.price * spu.count;\n        IO.println(spu.name + \" x \" + spu.count + \" = \" + subtotal + \"元\");\n        total = total + subtotal;\n    }\n    IO.println(\"总价：\" + total + \"元\");\n    \n    IO.println(\"\\n记账信息：张三 2026-01-27 购买商品 \" + cart.size() + \"件，共计\" + total + \"元\");\n}"
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
                "content": "if语句：执行不同分支的代码,条件为true时执行代码块。如购物车算出总价后，需要判断是否打折。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    double total = 120;\n    //判断满20打8折\n    if (total >= 100) {\n        total = total * 0.8;\n        IO.println(\"满20打8折，实付：\" + total + \"元\");\n    }\n}"
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
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    double total = 21;\n    //判断是否大满20打8折\n    if (total >= 20) {\n        total = total * 0.8;\n        IO.println(\"满20打8折，实付：\" + total + \"元\");\n    } else {\n        IO.println(\"不满折扣条件，实付：\" + total + \"元\");\n    }\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "多条件分支",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "多选一：满20打8折，满10打9折，否则不打折。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    double total = 150;\n    double discount = 1.0;\n    \n    if (total >= 20) {\n        discount = 0.8;\n    } else if (total >= 10) {\n        discount = 0.9;\n    } else {\n        discount = 1;\n    }\n    \n    double pay = total * discount;\n    IO.println(\"原价：\" + total + \"元\");\n    IO.println(\"折扣：\" + discount);\n    IO.println(\"实付：\" + pay + \"元\");\n}"
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
                "content": "购物车有3个商品，要一个个算价格太麻烦。\nfor循环：重复执行代码块。快捷键：fori"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    //重复执行5次输出\n    for (int i = 1; i <= 5; i++) {\n        IO.println(\"输出\" + i + \"次\");\n    }\n}"
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
                "content": "break：立即结束整个循环。如逛到第3家店时发现齐全，就不再逸逻了。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) {\n            IO.println(\"第\" + i + \"家店齐全，轴体\");\n            break;\n        }\n        IO.println(\"第\" + i + \"家店采购\");\n    }\n}"
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
                "content": "continue：跳过本次迭代，鞈续执行下一次。如第3个商品缺货，跳过它。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void main() {\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) {\n            IO.println(\"第\" + i + \"个商品缺货，跳过\");\n            continue;\n        }\n        IO.println(\"第\" + i + \"个商品已结算\");\n    }\n}"
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
                "content": "遍历数组，如购物车，自动计算总价。快捷键：list.for"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "import java.util.*;\n\nclass Spu {\n    String name;\n    double price;\n    int count;\n}\n\nvoid main() {\n    List<Spu> cart = new ArrayList<>();\n\n    Spu spu1 = new Spu();\n    spu1.name = \"牛奶\";\n    spu1.price = 2.5;\n    spu1.count = 3;\n    cart.add(spu1);\n\n    Spu spu2 = new Spu();\n    spu2.name = \"面包\";\n    spu2.price = 5.5;\n    spu2.count = 2;\n    cart.add(spu2);\n\n    double total = 0;\n    for (Spu spu : cart) {\n        double subtotal = spu.price * spu.count;\n        IO.println(spu.name + \" x \" + spu.count + \" = \" + subtotal + \"元\");\n        total = total + subtotal;\n    }\n    IO.println(\"总价：\" + total + \"元\");\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "函数",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "函数定义",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "计算总价的代码写了很多次，每次都要复制粘贴。\n函数：把代码包装起来，取个名字，随时调用。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void printHello() {\n    IO.println(\"欢迎光临\");\n}\n\nvoid main() {\n    printHello();\n    printHello();\n    printHello();\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "带参数函数",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "传入不同的值，执行不同的计算。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "void printPrice(double price, int count) {\n    double total = price * count;\n    IO.println(\"小计：\" + total + \"元\");\n}\n\nvoid main() {\n    printPrice(2.5, 3);\n    printPrice(5.5, 2);\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "带返回值函数",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "计算完把结果返回，让调用者继续使用。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "double calcTotal(double price, int count) {\n    return price * count;\n}\n\nvoid main() {\n    double t1 = calcTotal(2.5, 3);\n    double t2 = calcTotal(5.5, 2);\n    double total = t1 + t2;\n    IO.println(\"总价：\" + total + \"元\");\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "完整购物结算",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "将计算+存储+分支+循环+函数结合，完成购物结算。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "import java.util.*;\n\nclass Spu {\n    String name;\n    double price;\n    int count;\n}\n\ndouble calcTotal(List<Spu> cart) {\n    double total = 0;\n    for (Spu spu : cart) {\n        total = total + spu.price * spu.count;\n    }\n    return total;\n}\n\ndouble applyDiscount(double total) {\n    if (total >= 200) return total * 0.7;\n    if (total >= 100) return total * 0.8;\n    if (total >= 50) return total * 0.9;\n    return total;\n}\n\nvoid main() {\n    List<Spu> cart = new ArrayList<>();\n\n    Spu spu1 = new Spu();\n    spu1.name = \"牛奶\";\n    spu1.price = 2.5;\n    spu1.count = 3;\n    cart.add(spu1);\n\n    Spu spu2 = new Spu();\n    spu2.name = \"面包\";\n    spu2.price = 5.5;\n    spu2.count = 2;\n    cart.add(spu2);\n\n    double total = calcTotal(cart);\n    double pay = applyDiscount(total);\n    \n    IO.println(\"原价：\" + total + \"元\");\n    IO.println(\"实付：\" + pay + \"元\");\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "面向对象",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "类与对象",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "类是模板，对象是实例。购物时每件商品都是Spu类创建的对象。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "class Spu {\n    String name;\n    double price;\n    int count;\n}\n\nvoid main() {\n    Spu spu1 = new Spu();\n    spu1.name = \"牛奶\";\n    spu1.price = 2.5;\n    spu1.count = 3;\n    \n    IO.println(spu1.name + \" x \" + spu1.count + \" = \" + (spu1.price * spu1.count) + \"元\");\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "封装private和@Data",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "private隐藏属性，@Data注解自动生成getter/setter方法，简化代码。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "main.java",
                "code": "import lombok.Data;\n\n@Data\nclass Spu {\n    private String name;\n    private double price;\n    private int count;\n}\n\nvoid main() {\n    Spu spu = new Spu();\n    spu.setName(\"牛奶\");\n    spu.setPrice(2.5);\n    spu.setCount(3);\n    \n    IO.println(spu.getName() + \" x \" + spu.getCount() + \" = \" + (spu.getPrice() * spu.getCount()) + \"元\");\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "继承",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "子类复用父类代码。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "code": "public class Animal {\n    void eat() { System.out.println(\"吃东西\"); }\n}\n\npublic class Dog extends Animal {\n    void bark() { System.out.println(\"汪汪\"); }\n}\n\nDog d = new Dog();\nd.eat();   // 继承的方法\nd.bark();  // 自己的方法"
              }
            ]
          },
          {
            "id": "l5",
            "title": "多态",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "同一接口，不同实现。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "code": "public class Animal {\n    void speak() { System.out.println(\"...\"); }\n}\npublic class Dog extends Animal {\n    @Override\n    void speak() { System.out.println(\"汪汪\"); }\n}\npublic class Cat extends Animal {\n    @Override\n    void speak() { System.out.println(\"喵喵\"); }\n}\n\nAnimal a = new Dog();\na.speak();  // 汪汪（运行时决定）"
              }
            ]
          },
          {
            "id": "l6",
            "title": "接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "定义行为规范。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "code": "public interface Flyable {\n    void fly();\n}\n\npublic class Bird implements Flyable {\n    @Override\n    public void fly() {\n        System.out.println(\"鸟在飞\");\n    }\n}"
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
                "content": "我们的程序能下单了，但无法通过网页操作。\nHTTP接口 = 远程调函数。用户通过网页远程下单。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "下单接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "定义HTTP接口的步骤：\n1、定义请求对象（接收用户传入的参数）\n2、定义响应对象（返回给用户的业务数据）\n3、定义公共响应对象BaseResp（统一返回格式）\n4、@PostMapping标注接口URL地址\n5、用户通过URL+JSON参数访问接口"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "第1步：定义请求对象\n请求对象封装用户传入的参数。"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "CreateOrderReq.java",
                "code": "// 请求对象：接收用户传入的参数\npublic class CreateOrderReq {\n    public String userName;           // 用户名称\n    public List<CartItem> items;      // 商品列表\n}\n\n// 购物车商品\npublic class CartItem {\n    public String name;    // 商品名称\n    public int count;      // 购买数量\n}"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "第2步：定义响应对象\n响应对象只包含业务数据，不包含code、msg。"
              },
              {
                "id": "b5",
                "type": "code",
                "language": "java",
                "filename": "CreateOrderResp.java",
                "code": "// 响应对象：只包含业务数据\npublic class CreateOrderResp {\n    public double total;   // 订单总价\n}"
              },
              {
                "id": "b6",
                "type": "text",
                "content": "第3步：定义公共响应对象BaseResp\n所有接口统一返回BaseResp，包含：\ncode：状态码，0表示成功，非0表示失败\nmsg：提示信息\ndata：业务数据（放响应对象）"
              },
              {
                "id": "b7",
                "type": "code",
                "language": "java",
                "filename": "BaseResp.java",
                "code": "// 公共响应对象：所有接口统一返回这个格式\npublic class BaseResp<T> {\n    public int code;      // 0成功，非0失败\n    public String msg;    // 提示信息\n    public T data;        // 业务数据\n    \n    // 便捷方法：返回成功\n    public static <T> BaseResp<T> ok(T data) {\n        BaseResp<T> resp = new BaseResp<>();\n        resp.code = 0;\n        resp.msg = \"success\";\n        resp.data = data;\n        return resp;\n    }\n    \n    // 便捷方法：返回失败\n    public static <T> BaseResp<T> error(int code, String msg) {\n        BaseResp<T> resp = new BaseResp<>();\n        resp.code = code;\n        resp.msg = msg;\n        return resp;\n    }\n}"
              },
              {
                "id": "b8",
                "type": "text",
                "content": "第4步：@PostMapping标注接口URL\n@PostMapping(\"/createOrder\")把函数变成HTTP接口。\n用户访问http://localhost:8080/createOrder就会调用这个函数。\n@RequestBody把JSON参数自动转成请求对象。"
              },
              {
                "id": "b9",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "import java.util.*;\n\n@SpringBootApplication\n@RestController\npublic class DemoApplication {\n\n    // 商品数据（单价）\n    static Map<String, Double> prices = new HashMap<>();\n    static {\n        prices.put(\"牛奶\", 2.5);\n        prices.put(\"面包\", 5.5);\n        prices.put(\"可乐\", 3.0);\n    }\n    \n    // 订单列表（保存所有订单）\n    static List<Order> orders = new ArrayList<>();\n\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n\n    // 下单接口\n    @PostMapping(\"/createOrder\")\n    public BaseResp<CreateOrderResp> createOrder(@RequestBody CreateOrderReq req) {\n        // 计算总价\n        double total = 0;\n        StringBuilder itemStr = new StringBuilder();\n        for (CartItem item : req.items) {\n            Double price = prices.get(item.name);\n            if (price == null) {\n                return BaseResp.error(1, \"商品不存在: \" + item.name);\n            }\n            total = total + price * item.count;\n            itemStr.append(item.name).append(\"x\").append(item.count).append(\",\");\n        }\n        \n        // 保存订单到全局list（默认未支付）\n        Order order = new Order();\n        order.id = orders.size() + 1;\n        order.userName = req.userName;\n        order.item = itemStr.toString();\n        order.total = total;\n        order.paid = 0;  // 默认未支付\n        order.createdAt = \"2026-01-28\";\n        orders.add(order);\n        \n        // 返回成功\n        CreateOrderResp data = new CreateOrderResp();\n        data.total = total;\n        return BaseResp.ok(data);\n    }\n}"
              },
              {
                "id": "b10",
                "type": "text",
                "content": "第5步：URL + JSON参数访问接口\n\nJSON是什么？数据传输格式，用文本表示数据。\nJSON格式规则：\n• 花括号{}表示对象\n• 键值对用冒号分隔，字符串用双引号\n• 数字不需要引号"
              },
              {
                "id": "b11",
                "type": "text",
                "content": "JSON和请求对象的映射关系：\nJSON的key → 对象的字段名\nJSON的value → 字段的值\n\n例如：{\"name\": \"牛奶\", \"count\": 3}\nname → CreateOrderReq.name = \"牛奶\"\ncount → CreateOrderReq.count = 3"
              },
              {
                "id": "b12",
                "type": "text",
                "content": "IDEA新建 test.http 文件，点击绿色箭头发送请求："
              },
              {
                "id": "b13",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 下单：购买3瓶牛奶和2个面包\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\n\n{\"userName\": \"张三\", \"items\": [{\"name\": \"牛奶\", \"count\": 3}, {\"name\": \"面包\", \"count\": 2}]}"
              },
              {
                "id": "b14",
                "type": "text",
                "content": "响应结果（JSON格式）：\ncode=0表示成功，data里面是业务数据"
              },
              {
                "id": "b15",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\n  \"code\": 0,\n  \"msg\": \"下单成功\",\n  \"data\": {\n    \"total\": 7.5\n  }\n}"
              },
              {
                "id": "b16",
                "type": "text",
                "content": "JSON和响应对象的映射关系：\ncode → BaseResp.code = 0\nmsg → BaseResp.msg = \"下单成功\"\ndata → BaseResp.data = CreateOrderResp对象\ndata.total → CreateOrderResp.total = 7.5"
              },
              {
                "id": "b17",
                "type": "text",
                "content": "创建前端网页，调用这个接口：\n1、网页显示商品列表（牛奶、面包）\n2、用户选择商品、输入数量\n3、点下单按钮，发送JSON参数到接口\n4、接口计算总价，返回BaseResp\n5、网页从data取出订单结果显示"
              }
            ]
          },
          {
            "id": "l3",
            "title": "IDEA断点调试",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "接口报错了怎么办？用断点调试查看每一步的执行情况。\n断点调试 = 暂停程序，查看变量值。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "调试步骤：\n1、在代码行号左侧点击，添加红色断点\n2、点击Debug按钮（虫子图标）启动程序\n3、发送请求，程序会在断点处暂停\n4、查看变量值，点击Step Over执行下一行"
              },
              {
                "id": "b3",
                "type": "list",
                "items": [
                  "在createOrder方法第一行打断点",
                  "Debug启动程序",
                  "发送test.http下单请求",
                  "程序暂停，查看req参数内容",
                  "Step Over执行，观察变量变化"
                ]
              },
              {
                "id": "b4",
                "type": "text",
                "content": "常用调试按钮："
              },
              {
                "id": "b5",
                "type": "table",
                "headers": ["按钮", "功能", "快捷键"],
                "rows": [
                  ["Step Over", "执行当前行，跳到下一行", "F8"],
                  ["Step Into", "进入方法内部", "F7"],
                  ["Resume", "继续执行到下一个断点", "F9"],
                  ["Stop", "停止调试", "Ctrl+F2"]
                ]
              },
              {
                "id": "b6",
                "type": "tip",
                "content": "鼠标悬停在变量上可以查看当前值。\n在Variables窗口可以查看所有变量。"
              }
            ]
          },
          {
            "id": "l4",
            "title": "查看订单接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "下单后需要查看订单列表。\n每个接口都要定义请求对象和响应对象。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "第1步：定义请求对象\n查看订单不需要参数，但仍要定义空的请求对象（规范统一）。"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "GetOrdersReq.java",
                "code": "// 请求对象（无参数）\npublic class GetOrdersReq {\n    // 暂无参数\n}"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "第2步：定义响应对象\n返回订单列表，每个订单包含商品名称、数量、总价。"
              },
              {
                "id": "b5",
                "type": "code",
                "language": "java",
                "filename": "OrderInfo.java",
                "code": "// 订单信息\npublic class OrderInfo {\n    public String name;    // 商品名称\n    public int count;      // 购买数量\n    public double total;   // 订单总价\n}"
              },
              {
                "id": "b6",
                "type": "code",
                "language": "java",
                "filename": "GetOrdersResp.java",
                "code": "// 响应对象\npublic class GetOrdersResp {\n    public List<OrderInfo> list;  // 订单列表\n}"
              },
              {
                "id": "b7",
                "type": "text",
                "content": "第3步：@PostMapping标注接口"
              },
              {
                "id": "b8",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "// 订单列表（存储下单数据）\nstatic List<Order> orders = new ArrayList<>();\n\n// 查看订单接口\n@PostMapping(\"/getOrders\")\npublic BaseResp<List<Order>> getOrders(@RequestBody GetOrdersReq req) {\n    return BaseResp.ok(orders);\n}"
              },
              {
                "id": "b9",
                "type": "text",
                "content": "test.http测试查看订单："
              },
              {
                "id": "b10",
                "type": "code",
                "language": "http",
                "filename": "test.http",
                "code": "### 查看所有订单\nPOST http://localhost:8080/getOrders\nContent-Type: application/json\n\n{}"
              },
              {
                "id": "b11",
                "type": "text",
                "content": "响应结果（JSON数组）：\ndata是订单数组，用方括号[]包裹，里面是多个订单对象。"
              },
              {
                "id": "b12",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\n  \"code\": 0,\n  \"msg\": \"success\",\n  \"data\": [\n    {\"id\": 1, \"userName\": \"张三\", \"item\": \"牛奶x3,面包x2,\", \"total\": 18.5, \"paid\": 0, \"createdAt\": \"2026-01-28\"},\n    {\"id\": 2, \"userName\": \"李四\", \"item\": \"可乐x5,\", \"total\": 15.0, \"paid\": 1, \"createdAt\": \"2026-01-28\"}\n  ]\n}"
              },
              {
                "id": "b13",
                "type": "text",
                "content": "JSON和响应对象的映射关系：\ndata → List<Order>对象\ndata[0] → 第1个Order对象\ndata[0].userName → Order.userName = \"张三\"\ndata[0].item → Order.item = \"牛奶x3,面包x2,\""
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
                "code": "-- 创建订单表\ncreate table if not exists orders (\n    id integer primary key autoincrement,\n    user_name text,\n    item text,\n    total real,\n    paid integer,\n    created_at text\n);"
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
                  ["item", "text(字符串)", "商品+数量"],
                  ["total", "real(小数)", "订单总价"],
                  ["paid", "integer(整数)", "是否支付(0未支付/1已支付)"],
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
                "type": "text",
                "content": "完整语法："
              },
              {
                "id": "b3",
                "type": "code",
                "language": "sql",
                "filename": "insert语法",
                "code": "insert into 表名 (字段1, 字段2, 字段3, ...) values (值1, 值2, 值3, ...);"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "在IDEA的Database控制台执行：右键数据库 → 新建查询控制台 → 输入SQL语句 → 点击执行"
              },
              {
                "id": "b5",
                "type": "code",
                "language": "sql",
                "filename": "在控制台执行",
                "code": "-- 插入一条订单\ninsert into orders (user_name, item, total, paid, created_at)\nvalues ('张三', '牛奶x3,面包x2', 18.5, 0, '2026-01-28');\n\n-- 再插入一条\ninsert into orders (user_name, item, total, paid, created_at)\nvalues ('李四', '可乐x5', 15.0, 1, '2026-01-28');"
              },
              {
                "id": "b6",
                "type": "tip",
                "content": "id不需要填，数据库自动生成。执行后双击orders表查看数据。"
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
                "code": "-- 查询所有订单（所有字段）\nselect * from orders;\n\n-- 只查询用户名和总价\nselect user_name, total from orders;"
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
                "code": "-- 把id=1的订单改为已支付\nupdate orders set paid = 1 where id = 1;\n\n-- 修改多个字段\nupdate orders set total = 25.0, paid = 1 where id = 1;"
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
                "code": "-- 删除id=1的订单\ndelete from orders where id = 1;\n\n-- 删除所有未支付订单\ndelete from orders where paid = 0;"
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
                "code": "-- 查询总价大于10的订单\nselect * from orders where total > 10;\n\n-- 查询已支付的订单\nselect * from orders where paid = 1;\n\n-- 查询未支付的订单\nselect * from orders where paid = 0;"
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
                "code": "@Autowired\nOrderMapper orderMapper;\n\n// 商品单价\nstatic Map<String, Double> prices = new HashMap<>();\nstatic {\n    prices.put(\"牛奶\", 2.5);\n    prices.put(\"面包\", 5.5);\n    prices.put(\"可乐\", 3.0);\n}\n\n// 下单接口（保存到数据库）\n@PostMapping(\"/createOrder\")\npublic BaseResp<CreateOrderResp> createOrder(@RequestBody CreateOrderReq req) {\n    // 计算总价\n    double total = 0;\n    StringBuilder itemStr = new StringBuilder();\n    for (CartItem item : req.items) {\n        Double price = prices.get(item.name);\n        if (price == null) {\n            return BaseResp.error(1, \"商品不存在: \" + item.name);\n        }\n        total = total + price * item.count;\n        itemStr.append(item.name).append(\"x\").append(item.count).append(\",\");\n    }\n    \n    // 保存订单到数据库\n    Order order = new Order();\n    order.userName = req.userName;\n    order.item = itemStr.toString();\n    order.total = total;\n    order.paid = 0;  // 默认未支付\n    order.createdAt = \"2026-01-28\";\n    orderMapper.insert(order);  // 插入数据库\n    \n    CreateOrderResp data = new CreateOrderResp();\n    data.total = total;\n    return BaseResp.ok(data);\n}"
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
const CURRENT_VERSION = '1.0.3' // 版本号变更会强制刷新

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
