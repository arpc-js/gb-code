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
                "content": "第1步：定义请求对象\n请求对象封装用户传入的参数。\n@Data自动生成getter/setter方法。"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "java",
                "filename": "CreateOrderReq.java",
                "code": "// 请求对象：接收用户传入的参数\n@Data\nclass CreateOrderReq {\n    private String name;   // 商品名称\n    private int count;     // 购买数量\n}"
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
                "code": "// 响应对象：只包含业务数据\n@Data\nclass CreateOrderResp {\n    private double total;   // 订单总价\n}"
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
                "code": "// 公共响应对象：所有接口统一返回这个格式\n@Data\nclass BaseResp<T> {\n    private int code;      // 0成功，非0失败\n    private String msg;    // 提示信息\n    private T data;        // 业务数据\n    \n    // 便捷方法：返回成功\n    public static <T> BaseResp<T> ok(T data) {\n        BaseResp<T> resp = new BaseResp<>();\n        resp.setCode(0);\n        resp.setMsg(\"success\");\n        resp.setData(data);\n        return resp;\n    }\n    \n    // 便捷方法：返回失败\n    public static <T> BaseResp<T> error(int code, String msg) {\n        BaseResp<T> resp = new BaseResp<>();\n        resp.setCode(code);\n        resp.setMsg(msg);\n        return resp;\n    }\n}"
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
                "code": "@SpringBootApplication\npublic class DemoApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(DemoApplication.class, args);\n    }\n\n    // @PostMapping把函数变成HTTP接口\n    // \"/createOrder\" = URL地址\n    @PostMapping(\"/createOrder\")\n    public BaseResp<CreateOrderResp> createOrder(@RequestBody CreateOrderReq req) {\n        // 商品数据\n        List<Spu> spus = new ArrayList<>();\n        Spu spu1 = new Spu();\n        spu1.setName(\"牛奶\");\n        spu1.setPrice(2.5);\n        spus.add(spu1);\n\n        Spu spu2 = new Spu();\n        spu2.setName(\"面包\");\n        spu2.setPrice(5.5);\n        spus.add(spu2);\n\n        // 查找商品价格\n        double price = 0;\n        for (Spu spu : spus) {\n            if (spu.getName().equals(req.getName())) {\n                price = spu.getPrice();\n            }\n        }\n        \n        // 商品不存在，返回错误\n        if (price == 0) {\n            return BaseResp.error(1, \"商品不存在\");\n        }\n        \n        // 计算总价 = 单价 * 数量\n        double total = price * req.getCount();\n        \n        // 返回成功\n        CreateOrderResp data = new CreateOrderResp();\n        data.setTotal(total);\n        return BaseResp.ok(data);\n    }\n}"
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
                "code": "### 下单：购买3瓶牛奶\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\n\n{\"name\": \"牛奶\", \"count\": 3}\n\n### 下单：购买2个面包\nPOST http://localhost:8080/createOrder\nContent-Type: application/json\n\n{\"name\": \"面包\", \"count\": 2}"
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
                "code": "// 请求对象（无参数）\n@Data\nclass GetOrdersReq {\n    // 暂无参数\n}"
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
                "code": "// 订单信息\n@Data\nclass OrderInfo {\n    private String name;    // 商品名称\n    private int count;      // 购买数量\n    private double total;   // 订单总价\n}"
              },
              {
                "id": "b6",
                "type": "code",
                "language": "java",
                "filename": "GetOrdersResp.java",
                "code": "// 响应对象\n@Data\nclass GetOrdersResp {\n    private List<OrderInfo> list;  // 订单列表\n}"
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
                "code": "// 订单列表（存储下单数据）\nList<OrderInfo> orders = new ArrayList<>();\n\n// 下单接口（保存订单）\n@PostMapping(\"/createOrder\")\npublic BaseResp<CreateOrderResp> createOrder(@RequestBody CreateOrderReq req) {\n    // ... 计算总价 ...\n    \n    // 保存订单\n    OrderInfo info = new OrderInfo();\n    info.setName(req.getName());\n    info.setCount(req.getCount());\n    info.setTotal(total);\n    orders.add(info);\n    \n    CreateOrderResp data = new CreateOrderResp();\n    data.setTotal(total);\n    return BaseResp.ok(data);\n}\n\n// 查看订单接口\n@PostMapping(\"/getOrders\")\npublic BaseResp<GetOrdersResp> getOrders(@RequestBody GetOrdersReq req) {\n    GetOrdersResp resp = new GetOrdersResp();\n    resp.setList(orders);\n    return BaseResp.ok(resp);\n}"
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
                "content": "响应结果（JSON数组）：\ndata.list是数组，用方括号[]包裹，里面是多个订单对象。"
              },
              {
                "id": "b12",
                "type": "code",
                "language": "json",
                "filename": "响应结果.json",
                "code": "{\n  \"code\": 0,\n  \"msg\": \"success\",\n  \"data\": {\n    \"list\": [\n      {\"name\": \"牛奶\", \"count\": 3, \"total\": 7.5},\n      {\"name\": \"面包\", \"count\": 2, \"total\": 11.0}\n    ]\n  }\n}"
              },
              {
                "id": "b13",
                "type": "text",
                "content": "JSON和响应对象的映射关系：\ndata → GetOrdersResp对象\ndata.list → GetOrdersResp.list = List<OrderInfo>\ndata.list[0] → 第1个OrderInfo对象\ndata.list[0].name → OrderInfo.name = \"牛奶\""
              }
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
            "title": "Cookie是什么",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "购物要知道谁在买，但HTTP每次请求都是独立的，服务器不记得你是谁。\nCookie = 浏览器存的小纸条。服务器发给浏览器，浏览器每次请求自动带上。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "Session是什么",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Session = 服务器存的用户数据。\n服务器通过Cookie中的SessionId识别用户，然后取出对应的数据。\n登录后把用户信息存入Session，后续请求自动识别身份。"
              }
            ]
          },
          {
            "id": "l3",
            "title": "注册登录接口",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "HttpSession参数自动注入，登录成功后把用户名存入session。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "import javax.servlet.http.*;\n\nstatic Map<String, String> users = new HashMap<>();\n\n@PostMapping(\"/register\")\npublic Map<String, Object> register(@RequestBody Map<String, Object> body) {\n    String username = (String) body.get(\"username\");\n    String password = (String) body.get(\"password\");\n    users.put(username, password);\n    \n    Map<String, Object> resp = new HashMap<>();\n    resp.put(\"code\", 0);\n    resp.put(\"msg\", \"注册成功\");\n    return resp;\n}\n\n@PostMapping(\"/login\")\npublic Map<String, Object> login(@RequestBody Map<String, Object> body, HttpSession session) {\n    String username = (String) body.get(\"username\");\n    String password = (String) body.get(\"password\");\n    \n    Map<String, Object> resp = new HashMap<>();\n    if (password.equals(users.get(username))) {\n        session.setAttribute(\"user\", username);\n        resp.put(\"code\", 0);\n        resp.put(\"msg\", \"登录成功\");\n    } else {\n        resp.put(\"code\", 1);\n        resp.put(\"msg\", \"用户名或密码错误\");\n    }\n    return resp;\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "拦截器统一验证",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "每个接口都要判断是否登录，代码重复。\n拦截器：请求到达前统一检查session，未登录拦截。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "java",
                "filename": "DemoApplication.java",
                "code": "import org.springframework.web.servlet.*;\nimport org.springframework.web.servlet.config.annotation.*;\nimport org.springframework.context.annotation.*;\n\n@Configuration\npublic class WebConfig implements WebMvcConfigurer {\n    @Override\n    public void addInterceptors(InterceptorRegistry registry) {\n        registry.addInterceptor(new HandlerInterceptor() {\n            @Override\n            public boolean preHandle(HttpServletRequest req, HttpServletResponse resp, Object handler) {\n                String path = req.getRequestURI();\n                if (path.equals(\"/login\") || path.equals(\"/register\") || path.equals(\"/get_spus\")) {\n                    return true;\n                }\n                Object user = req.getSession().getAttribute(\"user\");\n                if (user == null) {\n                    resp.setStatus(401);\n                    return false;\n                }\n                return true;\n            }\n        });\n    }\n}"
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
    "desc": "JDBC、MyBatis、数据库连接",
    "icon": "🗄️",
    "chapters": [
      {
        "id": "ch1",
        "title": "JDBC基础",
        "lessons": [
          {
            "id": "l1",
            "title": "JDBC入门",
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
