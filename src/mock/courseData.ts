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
  // Java路线课程
  {
    id: 'java-basic',
    pathId: 'java',
    title: 'Java基础',
    desc: 'Java语言核心语法',
    icon: '📚',
    chapters: [
      {
        id: 'ch1',
        title: '初识Java',
        video: video,
        lessons: [
          {
            id: 'l1',
            title: 'Java语言概述',
            video: video,
            blocks: [
              { id: 'b1', type: 'heading', content: '什么是Java？' },
              { id: 'b2', type: 'text', content: 'Java是一种广泛使用的面向对象编程语言，由Sun公司于1995年发布，设计目标是"一次编写，到处运行"。' },
              { id: 'b3', type: 'image', src: img('java-intro') },
              { id: 'b4', type: 'list', items: ['跨平台：字节码+JVM', '面向对象：封装、继承、多态', '自动内存管理', '丰富的类库'] },
              { id: 'b5', type: 'tip', content: 'Java是企业级开发最主流的语言之一' }
            ]
          },
          {
            id: 'l2',
            title: 'JDK安装配置',
            video: video,
            blocks: [
              { id: 'b1', type: 'text', content: '学习Java的第一步是安装JDK并配置环境变量。' },
              { id: 'b2', type: 'code', language: 'bash', code: '# 配置环境变量\nJAVA_HOME=C:\\Program Files\\Java\\jdk-17\nPath=%JAVA_HOME%\\bin\n\n# 验证\njava -version' },
              { id: 'b3', type: 'table', headers: ['变量名', '值', '说明'], rows: [['JAVA_HOME', 'JDK安装路径', '指向JDK根目录'], ['Path', '%JAVA_HOME%\\bin', '可执行文件路径']] }
            ]
          },
          {
            id: 'l3',
            title: '第一个程序',
            blocks: [
              { id: 'b1', type: 'text', content: '编写经典的Hello World程序：' },
              { id: 'b2', type: 'code', language: 'java', code: 'public class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n    }\n}' },
              { id: 'b3', type: 'list', items: ['public class：公共类，类名=文件名', 'main方法：程序入口', 'System.out.println：输出到控制台'] }
            ]
          }
        ]
      },
      {
        id: 'ch2',
        title: '变量与数据类型',
        video: video,
        lessons: [
          {
            id: 'l1',
            title: '变量声明',
            video: video,
            blocks: [
              { id: 'b1', type: 'text', content: '变量是存储数据的容器，Java是强类型语言。' },
              { id: 'b2', type: 'code', language: 'java', code: 'int age = 25;\nString name = "张三";\ndouble price = 99.9;\nboolean active = true;' },
              { id: 'b3', type: 'table', headers: ['类型', '大小', '范围'], rows: [['byte', '1字节', '-128~127'], ['int', '4字节', '±21亿'], ['long', '8字节', '很大'], ['double', '8字节', '浮点数']] }
            ]
          },
          {
            id: 'l2',
            title: '类型转换',
            blocks: [
              { id: 'b1', type: 'code', language: 'java', code: 'int a = 100;\ndouble b = a;      // 自动转换\nint c = (int)3.14; // 强制转换' }
            ]
          }
        ]
      },
      {
        id: 'ch3',
        title: '流程控制',
        lessons: [
          {
            id: 'l1',
            title: '条件语句',
            video: video,
            blocks: [
              { id: 'b1', type: 'code', language: 'java', code: 'if (score >= 90) {\n    System.out.println("优秀");\n} else if (score >= 60) {\n    System.out.println("及格");\n} else {\n    System.out.println("不及格");\n}' }
            ]
          },
          {
            id: 'l2',
            title: '循环语句',
            blocks: [
              { id: 'b1', type: 'code', language: 'java', code: 'for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}\n\nint[] nums = {1, 2, 3};\nfor (int n : nums) {\n    System.out.println(n);\n}' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'java-oop',
    pathId: 'java',
    title: 'Java面向对象',
    desc: '类、对象、继承、多态',
    icon: '🎯',
    chapters: [
      {
        id: 'ch1',
        title: '类与对象',
        video: video,
        lessons: [
          {
            id: 'l1',
            title: '类的定义',
            video: video,
            blocks: [
              { id: 'b1', type: 'code', language: 'java', code: 'public class User {\n    private String name;\n    private int age;\n    \n    public User(String name, int age) {\n        this.name = name;\n        this.age = age;\n    }\n    \n    public void sayHello() {\n        System.out.println("你好，我是" + name);\n    }\n}' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'java-web',
    pathId: 'java',
    title: 'JavaWeb',
    desc: 'Servlet、Web开发基础',
    icon: '🌐',
    chapters: [
      {
        id: 'ch1',
        title: 'Servlet基础',
        lessons: [
          {
            id: 'l1',
            title: 'Servlet入门',
            blocks: [
              { id: 'b1', type: 'code', language: 'java', code: '@WebServlet("/hello")\npublic class HelloServlet extends HttpServlet {\n    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {\n        resp.getWriter().println("Hello!");\n    }\n}' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'java-project',
    pathId: 'java',
    title: '项目实战',
    desc: 'SpringBoot商城项目',
    icon: '🛒',
    chapters: [
      {
        id: 'ch1',
        title: '项目搭建',
        lessons: [
          {
            id: 'l1',
            title: '技术选型',
            blocks: [
              { id: 'b1', type: 'text', content: 'SpringBoot + MyBatis + MySQL + Redis' },
              { id: 'b2', type: 'image', src: img('project-arch') }
            ]
          }
        ]
      }
    ]
  },
  // 其他路线占位
  { id: 'python-basic', pathId: 'python', title: 'Python基础', icon: '🐍', chapters: [{ id: 'ch1', title: '课程介绍', lessons: [{ id: 'l1', title: '概述', blocks: [{ id: 'b1', type: 'text', content: '课程建设中...' }] }] }] },
  { id: 'go-basic', pathId: 'go', title: 'Go基础', icon: '🐹', chapters: [{ id: 'ch1', title: '课程介绍', lessons: [{ id: 'l1', title: '概述', blocks: [{ id: 'b1', type: 'text', content: '课程建设中...' }] }] }] },
  { id: 'frontend-basic', pathId: 'frontend', title: '前端基础', icon: '💻', chapters: [{ id: 'ch1', title: '课程介绍', lessons: [{ id: 'l1', title: '概述', blocks: [{ id: 'b1', type: 'text', content: '课程建设中...' }] }] }] },
  { id: 'mysql-basic', pathId: 'database', title: 'MySQL基础', icon: '🗄️', chapters: [{ id: 'ch1', title: '课程介绍', lessons: [{ id: 'l1', title: '概述', blocks: [{ id: 'b1', type: 'text', content: '课程建设中...' }] }] }] },
  { id: 'docker-basic', pathId: 'devops', title: 'Docker入门', icon: '🐳', chapters: [{ id: 'ch1', title: '课程介绍', lessons: [{ id: 'l1', title: '概述', blocks: [{ id: 'b1', type: 'text', content: '课程建设中...' }] }] }] },
  { id: 'ai-basic', pathId: 'ai', title: 'AI入门', icon: '🤖', chapters: [{ id: 'ch1', title: '课程介绍', lessons: [{ id: 'l1', title: '概述', blocks: [{ id: 'b1', type: 'text', content: '课程建设中...' }] }] }] },
  { id: 'mobile-basic', pathId: 'mobile', title: '移动端入门', icon: '📱', chapters: [{ id: 'ch1', title: '课程介绍', lessons: [{ id: 'l1', title: '概述', blocks: [{ id: 'b1', type: 'text', content: '课程建设中...' }] }] }] },
  { id: 'security-basic', pathId: 'security', title: '安全入门', icon: '🔒', chapters: [{ id: 'ch1', title: '课程介绍', lessons: [{ id: 'l1', title: '概述', blocks: [{ id: 'b1', type: 'text', content: '课程建设中...' }] }] }] },
  { id: 'arch-basic', pathId: 'arch', title: '架构入门', icon: '🏗️', chapters: [{ id: 'ch1', title: '课程介绍', lessons: [{ id: 'l1', title: '概述', blocks: [{ id: 'b1', type: 'text', content: '课程建设中...' }] }] }] },
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
