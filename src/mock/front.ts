import type { Course } from '@/types/course'

export const frontendCourses: Course[] = [
  {
    "id": "frontend-basic",
    "pathId": "frontend",
    "title": "HTML基础",
    "desc": "写商品文章页面",
    "icon": "🌐",
    "chapters": [
      {
        "id": "ch1",
        "title": "环境安装",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "开发工具安装",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "开发网页只需要一个编辑器和一个浏览器。推荐使用Trae IDE（内置AI助手，就是你现在用的这个）。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "bash",
                "filename": "PowerShell",
                "code": "# Windows自带winget包管理器，一行命令安装Trae\nwinget install ByteDance.Trae.CN"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "也可以去官网 <a href=\"https://www.trae.cn\" target=\"_blank\">https://www.trae.cn</a> 下载安装包。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "创建第一个网页",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "网页由HTML标签组成，每个标签有不同作用。新建一个 index.html 文件，将用到以下标签："
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签", "作用"],
                "rows": [
                  ["<html>", "包裹整个网页"],
                  ["<head>", "放网页信息（不显示在页面上）"],
                  ["<meta charset=\"UTF-8\">", "支持中文显示"],
                  ["<title>", "浏览器标签页上的标题"],
                  ["<body>", "显示在页面上的内容"],
                  ["<h1>", "一级标题"]
                ]
              },
              {
                "id": "b3",
                "type": "text",
                "content": "在Trae左侧文件资源管理器右键 → 新建文件 → 命名为 index.html。输入以下代码："
              },
              {
                "id": "b4",
                "type": "code",
                "language": "html",
                "filename": "index.html",
                "code": "<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>我的第一个网页</title>\n</head>\n<body>\n    <h1>这是我的第一个网页。</h1>\n</body>\n</html>"
              },
              {
                "id": "b5",
                "type": "text",
                "content": "保存文件（Ctrl+S），按 F5 选择 Edge 浏览器打开查看效果。每次修改保存后，刷新浏览器即可看到最新效果。"
              },
              {
                "id": "b6",
                "type": "tip",
                "content": "在Trae中新建 .html 文件后，输入英文感叹号 ! 然后按 Tab 键，HTML骨架会自动生成。这是Emmet快捷输入，能省去手写DOCTYPE和基础结构的时间。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "HTML标签",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "标题与段落",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "标题标签 h1~h6 定义页面标题，数字越小标题越大。段落标签 p 定义文本段落。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签", "用途", "说明"],
                "rows": [
                  ["<h1>", "一级标题", "页面主标题，一个页面建议只用一个"],
                  ["<h2>", "二级标题", "大章节标题"],
                  ["<h3>", "三级标题", "子章节标题"],
                  ["<h4>~<h6>", "更小标题", "较少使用，了解即可"],
                  ["<p>", "段落", "正文内容，浏览器会自动换行"],
                  ["<br>", "换行", "在段落内强制换行（单标签，不需要闭合）"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "标题与段落示例",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>标题与段落</title>\n</head>\n<body>\n    <h1>商品介绍</h1>\n    \n    <h2>产品特点</h2>\n    <p>这款产品采用最新技术，具有出色的性能表现。</p>\n    \n    <h2>用户评价</h2>\n    <h3>好评</h3>\n    <p>质量很好，<br>物流也很快。</p>\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "链接与图片",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "a标签创建超链接，img标签显示图片。这是网页中使用频率最高的两个标签。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签/属性", "作用", "示例"],
                "rows": [
                  ["<a href=\"\">", "链接地址", "<a href=\"https://baidu.com\">百度</a>"],
                  ["target=\"_blank\"", "新标签页打开", "<a href=\"url\" target=\"_blank\">"],
                  ["<img src=\"\">", "图片路径", "<img src=\"photo.jpg\">"],
                  ["alt=\"\"", "图片文字说明", "加载失败或无障碍阅读时显示"],
                  ["width / height", "图片宽高", "单位是像素，只写数字即可"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "链接与图片示例",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>链接与图片</title>\n</head>\n<body>\n    <!-- 文字链接 -->\n    <a href=\"https://www.baidu.com\">跳转到百度</a>\n    <br>\n    <a href=\"https://www.baidu.com\" target=\"_blank\">新窗口打开百度</a>\n    \n    <!-- 图片 -->\n    <h3>示例图片</h3>\n    <img src=\"https://picsum.photos/300/200.jpg\" alt=\"灰色占位图\" width=\"300\">\n    \n    <!-- 图片链接：点击图片跳转 -->\n    <h3>点击图片跳转</h3>\n    <a href=\"https://www.baidu.com\">\n        <img src=\"https://picsum.photos/200/60.jpg\" alt=\"点击跳转百度\">\n    </a>\n</body>\n</html>"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "把图片放到和index.html同一个文件夹，用 src=\"图片名.jpg\" 引用。这样比用网址更快更可靠。"
              }
            ]
          },
          {
            "id": "l3",
            "title": "列表",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "列表用于展示一组内容项，常见于导航菜单、商品列表、文章目录等。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签", "名称", "显示效果"],
                "rows": [
                  ["<ul>", "无序列表", "● 圆点标记，适合功能列表、导航"],
                  ["<ol>", "有序列表", "1. 2. 3. 数字序号，适合步骤、排名"],
                  ["<li>", "列表项", "必须放在 ul 或 ol 里面"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "列表示例",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>列表</title>\n</head>\n<body>\n    <!-- 无序列表：功能列表 -->\n    <h3>产品功能</h3>\n    <ul>\n        <li>智能语音识别</li>\n        <li>实时翻译</li>\n        <li>多语言支持</li>\n    </ul>\n    \n    <!-- 有序列表：使用步骤 -->\n    <h3>使用步骤</h3>\n    <ol>\n        <li>下载并安装软件</li>\n        <li>注册账号</li>\n        <li>开始使用</li>\n    </ol>\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "容器标签 div 与 span",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "div和span是最常用的容器标签，用来把内容分组。div是块级元素（独占一行），span是行内元素（不换行）。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签", "类型", "显示特点", "使用场景"],
                "rows": [
                  ["<div>", "块级", "独占一行，可设宽高", "页面分区、卡片、布局容器"],
                  ["<span>", "行内", "不换行，宽度由内容决定", "行内文字标记、高亮"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "div与span示例",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>容器标签</title>\n</head>\n<body>\n    <!-- div：块级容器，每个div独占一行 -->\n    <div style=\"background:#f0f0f0; padding:15px; margin-bottom:10px;\">\n        <h3>商品卡片 1</h3>\n        <p>这是第一个商品</p>\n    </div>\n    \n    <div style=\"background:#e8f4e8; padding:15px;\">\n        <h3>商品卡片 2</h3>\n        <p>这是第二个商品</p>\n    </div>\n    \n    <!-- span：行内容器，不换行 -->\n    <p>价格：<span style=\"color:red; font-size:20px;\">¥99</span></p>\n    <p>标签：<span style=\"background:yellow;\">热卖</span></p>\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "表单",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "输入类",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "输入类表单用于让用户输入文字，包括单行输入、密码、邮箱和多行文本。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签", "作用", "关键属性"],
                "rows": [
                  ["<input type=\"text\">", "单行文本", "placeholder=\"提示文字\""],
                  ["<input type=\"password\">", "密码", "输入内容显示为圆点"],
                  ["<input type=\"email\">", "邮箱", "浏览器自动校验格式"],
                  ["<textarea>", "多行文本", "rows=\"行数\" cols=\"列数\""],
                  ["<label for=\"id\">", "标签", "点击标签文字可聚焦输入框"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "登录框示例",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>登录</title>\n</head>\n<body>\n    <h2>用户登录</h2>\n    \n    <form>\n        <div>\n            <label for=\"username\">用户名：</label>\n            <input id=\"username\" placeholder=\"请输入用户名\">\n        </div>\n        \n        <div>\n            <label for=\"pwd\">密　码：</label>\n            <input type=\"password\" id=\"pwd\" placeholder=\"请输入密码\">\n        </div>\n        \n        <div>\n            <label for=\"intro\">个人简介：</label>\n            <textarea id=\"intro\" rows=\"4\" cols=\"40\" placeholder=\"介绍一下你自己...\"></textarea>\n        </div>\n        \n        <br>\n        <button>登录</button>\n    </form>\n</body>\n</html>"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "label的for属性对应input的id。点击label文字会自动聚焦到对应的输入框，这是提升用户体验的细节。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "选择类",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "选择类表单让用户从给定的选项中选取，包括单选、多选和下拉选择。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["标签", "作用", "要点"],
                "rows": [
                  ["<input type=\"radio\">", "单选", "同一组name必须相同，只能选一个"],
                  ["<input type=\"checkbox\">", "多选", "可同时选多个"],
                  ["<select>+<option>", "下拉选择", "节省空间，适合选项多时"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "选择类示例",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>问卷调查</title>\n</head>\n<body>\n    <h2>问卷调查</h2>\n    \n    <form>\n        <!-- 单选：同一组name相同 -->\n        <p>性别：</p>\n        <input type=\"radio\" name=\"gender\" id=\"male\" value=\"男\">\n        <label for=\"male\">男</label>\n        <input type=\"radio\" name=\"gender\" id=\"female\" value=\"女\">\n        <label for=\"female\">女</label>\n        \n        <!-- 多选 -->\n        <p>兴趣（可多选）：</p>\n        <input type=\"checkbox\" id=\"h1\" value=\"运动\">\n        <label for=\"h1\">运动</label>\n        <input type=\"checkbox\" id=\"h2\" value=\"阅读\">\n        <label for=\"h2\">阅读</label>\n        <input type=\"checkbox\" id=\"h3\" value=\"音乐\">\n        <label for=\"h3\">音乐</label>\n        \n        <!-- 下拉选择 -->\n        <p>城市：</p>\n        <select>\n            <option value=\"\">请选择城市</option>\n            <option value=\"beijing\">北京</option>\n            <option value=\"shanghai\">上海</option>\n            <option value=\"guangzhou\">广州</option>\n        </select>\n    </form>\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "样式",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "文字样式",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "CSS用于控制页面的显示效果，文字样式是最基础的内容："
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["属性", "作用", "常用值"],
                "rows": [
                  ["color", "文字颜色", "#fff / rgb(255,255,255) / red"],
                  ["font-size", "字体大小", "16px / 1rem / 50%"],
                  ["font-weight", "字体粗细", "normal / bold / 100-900"],
                  ["font-family", "字体类型", "Arial / '微软雅黑' / sans-serif"],
                  ["text-align", "文字对齐", "left / center / right"],
                  ["line-height", "行高", "1.5 / 24px / 150%"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "文字样式示例",
                "code": "<p style=\"color:#333; font-size:18px;\">深灰色文字，18像素大小</p>\n<p style=\"color:blue; font-weight:bold;\">蓝色加粗文字</p>\n<p style=\"text-align:center; font-family:'Microsoft YaHei',sans-serif;\">居中显示的微软雅黑文字</p>\n<p style=\"line-height:2;\">这是一段拥有较大行高的文字，换行后可以看到效果</p>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "背景与边框",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["属性", "作用", "常用值"],
                "rows": [
                  ["background-color", "背景颜色", "#f0f0f0 / transparent"],
                  ["background-image", "背景图片", "url('img.png')"],
                  ["border", "边框", "1px solid #333"],
                  ["border-radius", "圆角", "4px / 50%"],
                  ["box-shadow", "阴影", "0 2px 4px rgba(0,0,0,0.1)"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "背景边框示例",
                "code": "<div style=\"background:#4a90d9; padding:20px; margin-bottom:10px;\">\n  <p style=\"color:white; margin:0;\">蓝色背景的容器</p>\n</div>\n\n<div style=\"border:2px solid #333; padding:15px; margin-bottom:10px;\">\n  带边框的容器\n</div>\n\n<div style=\"background:#4a90d9; color:white; padding:15px; border-radius:8px; margin-bottom:10px;\">\n  圆角容器\n</div>\n\n<div style=\"background:white; padding:20px; box-shadow:0 2px 10px rgba(0,0,0,0.15); border-radius:4px;\">\n  带阴影的卡片效果\n</div>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "内边距与外边距",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "内边距(padding)是元素内部的空间，外边距(margin)是元素外部的空间："
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "间距示例",
                "code": "<!-- 内边距 padding：元素内部空间 -->\n<div style=\"background:#f0f0f0;\">\n  <div style=\"background:#4a90d9; color:white; padding:20px;\">有20px内边距</div>\n</div>\n\n<!-- 外边距 margin：元素外部空间 -->\n<div style=\"background:#f0f0f0; padding:10px;\">\n  <div style=\"background:#4a90d9; color:white; padding:10px; margin-bottom:10px;\">第1个元素</div>\n  <div style=\"background:#4a90d9; color:white; padding:10px;\">第2个元素</div>\n</div>\n\n<!-- 简写：上下10px，左右20px -->\n<div style=\"background:#4a90d9; color:white; padding:10px 20px; margin-bottom:8px;\">上下10 左右20</div>\n\n<!-- 简写：上5 右10 下15 左20 -->\n<div style=\"background:#4a90d9; color:white; padding:5px 10px 15px 20px;\">上5 右10 下15 左20</div>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "选择器",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b0",
                "type": "text",
                "content": "选择器用于选择HTML元素并添加样式。三种基础选择器："
              },
              {
                "id": "b1",
                "type": "table",
                "headers": ["选择器", "写法", "适用场景"],
                "rows": [
                  ["类选择器", ".class { }", "最常用，可重复使用"],
                  ["ID选择器", "#id { }", "页面唯一元素"],
                  ["标签选择器", "p { }", "全局样式或重置"]
                ]
              },
              {
                "id": "b1-1",
                "type": "text",
                "content": "优先使用类选择器。ID唯一，标签太宽泛。掌握这三种就够了。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "选择器示例",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n<style>\n/* 类选择器（最常用） */\n.text-red {\n    color: red;\n}\n\n.container p {\n    margin: 10px 0;\n}\n\n/* ID选择器 */\n#title {\n    font-size: 24px;\n}\n\n/* 标签选择器 */\np {\n    color: #333;\n}\n</style>\n</head>\n<body>\n\n<h1 id=\"title\">标题</h1>\n<p>普通段落</p>\n<p class=\"text-red\">红色文字</p>\n<div class=\"container\">\n    <p>容器内的段落</p>\n</div>\n\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "布局",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "标准文档流",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "HTML元素默认按照文档流排列：块级元素独占一行，行内元素不独占一行。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["元素类型", "特点", "代表标签"],
                "rows": [
                  ["块级元素", "独占一行，可设宽高", "<div> <p> <h1>~<h6> <ul> <ol>"],
                  ["行内元素", "不独占一行，宽度随内容", "<span> <a> <strong> <em> <img>"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "文档流示例",
                "code": "<!-- 块级元素：每个独占一行 -->\n<div style=\"background:#e3f2fd; padding:8px; margin:4px;\">div块1</div>\n<div style=\"background:#e3f2fd; padding:8px; margin:4px;\">div块2</div>\n<p style=\"background:#fff3e0; padding:8px; margin:4px;\">p段落（也是块级）</p>\n\n<!-- 行内元素：不换行，宽度由内容决定 -->\n<span style=\"background:#e8f5e9; padding:4px;\">span1</span>\n<span style=\"background:#e8f5e9; padding:4px;\">span2</span>\n<a href=\"#\" style=\"background:#e8f5e9; padding:4px;\">链接a</a>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "Flex布局",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Flex布局是现代CSS推荐的布局方式，用`display:flex`开启，非常适合做页面排版。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["父容器属性", "作用", "常用值"],
                "rows": [
                  ["display:flex", "开启Flex布局", "flex"],
                  ["flex-direction", "主轴方向", "row/column"],
                  ["justify-content", "主轴对齐", "center/start/end/space-between"],
                  ["align-items", "交叉轴对齐", "center/start/end/stretch"],
                  ["gap", "元素间距", "10px/1rem"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "Flex基础示例",
                "code": "<!-- 水平排列（默认row） -->\n<div style=\"display:flex; gap:10px;\">\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">1</div>\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">2</div>\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">3</div>\n</div>\n\n<!-- 竖直排列（column） -->\n<div style=\"display:flex; flex-direction:column; gap:10px; margin-top:15px;\">\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">A</div>\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">B</div>\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">C</div>\n</div>\n\n<!-- 所有item整体定位 -->\n<div style=\"display:flex; gap:10px; justify-content:center; margin-top:15px;\">\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">居中排列</div>\n</div>\n\n<div style=\"display:flex; gap:10px; justify-content:flex-end; margin-top:15px;\">\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">靠右排列</div>\n</div>\n\n<div style=\"display:flex; gap:10px; justify-content:space-between; margin-top:15px;\">\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">左</div>\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">右</div>\n</div>\n\n<!-- 单个item独立定位：margin推位置 -->\n<div style=\"display:flex; gap:10px; height:120px; background:#f0f0f0; padding:8px; margin-top:15px;\">\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">普通</div>\n  <div style=\"padding:10px 20px; background:#e74c3c; color:white; margin-top:-20px;\">上20px</div>\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white; margin-top:20px;\">下20px</div>\n  <div style=\"padding:10px 20px; background:#2ecc71; color:white; margin-right:15px;\">右间距</div>\n  <div style=\"padding:10px 20px; background:#e67e22; color:white; margin-left:auto;\">推最右</div>\n</div>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "Flex布局对齐",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["对齐方式", "属性值", "效果"],
                "rows": [
                  ["左对齐", "flex-start", "内容靠左"],
                  ["居中对齐", "center", "内容居中"],
                  ["右对齐", "flex-end", "内容靠右"],
                  ["两端对齐", "space-between", "两边贴边，中间平分"],
                  ["垂直居中", "center+align-items", "上下左右居中"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "Flex对齐示例",
                "code": "<!-- 水平居中 -->\n<div style=\"display:flex; justify-content:center;\">\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">水平居中</div>\n</div>\n\n<!-- 竖直居中（需要给容器设高度） -->\n<div style=\"display:flex; align-items:center; height:80px; background:#f0f0f0; margin-top:10px;\">\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">竖直居中</div>\n</div>\n\n<!-- 完全居中（水平+竖直） -->\n<div style=\"display:flex; justify-content:center; align-items:center; height:120px; background:#f0f0f0; margin-top:10px;\">\n  <div style=\"padding:10px 20px; background:#4a90d9; color:white;\">完全居中</div>\n</div>"
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
                "content": "JavaScript代码写在HTML的<script>标签里。打开页面后按F12 → Console查看结果。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["运算符", "描述", "示例"],
                "rows": [
                  ["+", "加法", "5 + 3 = 8"],
                  ["-", "减法", "10 - 4 = 6"],
                  ["*", "乘法", "6 * 7 = 42"],
                  ["/", "除法", "20 / 4 = 5"],
                  ["%", "取余", "10 % 3 = 1"],
                  ["**", "幂运算", "2 ** 3 = 8"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "calc.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>算术运算</title>\n</head>\n<body>\n    <h2>算术运算（按F12控制台查看结果）</h2>\n\n    <script>\n        let a = 10, b = 3;\n        console.log(a + b);  // 13\n        console.log(a - b);  // 7\n        console.log(a * b);  // 30\n        console.log(a / b);  // 3.33\n        console.log(a % b);  // 1\n    </script>\n</body>\n</html>"
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
                "type": "table",
                "headers": ["运算符", "描述", "示例"],
                "rows": [
                  ["==", "相等", "5 == '5' 为 true"],
                  ["===", "严格相等", "5 === '5' 为 false"],
                  [">", "大于", "3 > 2 为 true"],
                  ["<", "小于", "2 < 3 为 true"],
                  [">=", "大于等于", "3 >= 3 为 true"],
                  ["<=", "小于等于", "3 <= 3 为 true"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "compare.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>比较运算</title>\n</head>\n<body>\n    <h2>比较运算（按F12控制台查看结果）</h2>\n\n    <script>\n        console.log(5 > 3);     // true\n        console.log(5 === '5'); // false\n        console.log(5 == '5');   // true\n    </script>\n</body>\n</html>"
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
                "type": "table",
                "headers": ["运算符", "描述", "示例"],
                "rows": [
                  ["&&", "与", "两边都为true才为true"],
                  ["||", "或", "至少一边为true就为true"],
                  ["!", "非", "取反，true变false"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "logic.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>逻辑运算</title>\n</head>\n<body>\n    <h2>逻辑运算（按F12控制台查看结果）</h2>\n\n    <script>\n        console.log(true && false);  // false\n        console.log(true || false);  // true\n        console.log(!true);           // false\n    </script>\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
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
                "type": "table",
                "headers": ["声明方式", "关键字", "特点"],
                "rows": [
                  ["变量", "let", "可重新赋值"],
                  ["常量", "const", "不可重新赋值"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "var.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>变量</title>\n</head>\n<body>\n    <h2>变量（按F12控制台查看结果）</h2>\n\n    <script>\n        let name = '张三';\n        name = '李四';  // 可以修改\n        console.log(name);\n\n        const PI = 3.14159;\n        // PI = 3;  // 错误，常量不能修改\n        console.log(PI);\n    </script>\n</body>\n</html>"
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
                "type": "table",
                "headers": ["类型", "描述", "示例"],
                "rows": [
                  ["Number", "数字", "123, 3.14"],
                  ["String", "字符串", "'hello'"],
                  ["Boolean", "布尔值", "true, false"],
                  ["Array", "数组", "[1, 2, 3]"],
                  ["Object", "对象", "{name: '张三'}"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "type.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>数据类型</title>\n</head>\n<body>\n    <h2>数据类型（按F12控制台查看结果）</h2>\n\n    <script>\n        let num = 123;\n        let str = 'hello';\n        let bool = true;\n        let arr = [1, 2, 3];\n        let obj = { name: '张三' };\n\n        console.log(num);\n        console.log(str);\n        console.log(bool);\n        console.log(arr);\n        console.log(obj);\n    </script>\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "流程控制",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "if条件分支",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["语句", "描述", "示例"],
                "rows": [
                  ["if", "单分支", "if(条件){ }"],
                  ["if else", "双分支", "if(条件){ }else{ }"],
                  ["else if", "多分支", "if{ }else if{ }else{ }"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "if.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>if条件分支</title>\n</head>\n<body>\n    <h2>if条件分支（按F12控制台查看结果）</h2>\n\n    <script>\n        let score = 85;\n\n        // 单分支：if\n        if (score >= 90) {\n            console.log('优秀');\n        }\n\n        // 双分支：if else\n        if (score >= 60) {\n            console.log('及格');\n        } else {\n            console.log('不及格');\n        }\n\n        // 多分支：if else if else\n        if (score >= 90) {\n            console.log('A');\n        } else if (score >= 80) {\n            console.log('B');\n        } else if (score >= 60) {\n            console.log('C');\n        } else {\n            console.log('D');\n        }\n    </script>\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "for循环",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["循环类型", "描述", "示例"],
                "rows": [
                  ["for", "计数循环", "for(let i=0;i<5;i++)"],
                  ["for...of", "遍历数组", "for(let item of arr)"],
                  ["for...in", "遍历对象", "for(let key in obj)"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "for.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>for循环</title>\n</head>\n<body>\n    <h2>for循环（按F12控制台查看结果）</h2>\n\n    <script>\n        // 基本for循环\n        for (let i = 0; i < 3; i++) {\n            console.log('次数:', i);\n        }\n\n        // for...of遍历数组\n        let fruits = ['苹果', '香蕉', '橙子'];\n        for (let fruit of fruits) {\n            console.log('水果:', fruit);\n        }\n\n        // for...in遍历对象\n        let person = { name: '张三', age: 25 };\n        for (let key in person) {\n            console.log(key + ': ' + person[key]);\n        }\n    </script>\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "函数",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "函数",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b0",
                "type": "text",
                "content": "函数是封装代码的模块，可以重复调用。函数由function关键字定义，包含函数名、参数列表和函数体。\n\n函数的作用：\n- 代码复用\n- 逻辑封装\n- 提高代码可读性"
              },
              {
                "id": "b1",
                "type": "table",
                "headers": ["函数类型", "语法", "示例"],
                "rows": [
                  ["函数", "function(){}", "无参数无返回值"],
                  ["有参函数", "function(a,b){}", "有参数"],
                  ["有返回值", "return 结果", "return a+b"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "func.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>函数</title>\n</head>\n<body>\n    <h2>函数：一次定义，反复调用（按F12控制台查看结果）</h2>\n\n    <script>\n        // 函数1：无参，执行一个操作\n        function showTime() {\n            console.log('当前时间：' + new Date().toLocaleString())\n        }\n\n        // 函数2：有参，格式化输出\n        function greet(name) {\n            console.log('欢迎你，' + name + '！')\n        }\n\n        // 函数3：有参有返回，处理数据\n        function getGrade(score) {\n            if (score >= 90) return 'A'\n            if (score >= 80) return 'B'\n            if (score >= 60) return 'C'\n            return 'D'\n        }\n\n        showTime()\n\n        greet('张三')\n        greet('李四')\n        greet('王五')\n\n        console.log('95分 →', getGrade(95))\n        console.log('82分 →', getGrade(82))\n        console.log('67分 →', getGrade(67))\n        console.log('45分 →', getGrade(45))\n    </script>\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "异步编程",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "异步概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b0",
                "type": "table",
                "headers": ["对比", "同步", "异步"],
                "rows": [
                  ["执行方式", "一行一行按顺序，前面卡住后面等", "不等待，完成后自动回调"],
                  ["是否会阻塞", "会，后面的代码要排队", "不会，后面的代码立即执行"],
                  ["典型场景", "计算、循环", "网络请求、定时器、文件读取"],
                  ["体验", "卡顿", "流畅"]
                ]
              },
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "filename": "sync-async.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>同步vs异步</title>\n</head>\n<body>\n    <h2>同步 vs 异步（按F12控制台查看结果）</h2>\n\n    <script>\n        // 同步：按顺序执行\n        console.log('1. 开始计算1加到10亿...');\n        let sum = 0;\n            for (let i = 1; i <= 1000000000; i++) {\n                sum += i;\n            }\n            console.log('计算结果：' + sum);\n        console.log('2. 计算完成才开始打印，等了很久');\n\n        // 异步：不等待\n        console.log('3. 异步开始');\n        setTimeout(() => {\n            console.log('5. 1秒后才执行');\n        }, 1000);\n        console.log('4. 异步结束（立即执行）');\n    </script>\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "Promise",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b0",
                "type": "text",
                "content": "Promise是处理异步操作的对象，代表一个可能还未完成的操作及其结果。\n\nPromise的状态：\n- pending：初始状态，既不是成功也不是失败\n- fulfilled：操作成功完成\n- rejected：操作失败"
              },
              {
                "id": "b1",
                "type": "table",
                "headers": ["方法", "作用", "示例"],
                "rows": [
                  ["new Promise()", "创建Promise", "new Promise((resolve, reject) => {})"],
                  [".then()", "处理成功结果", "promise.then(result => {})"],
                  [".catch()", "处理错误", "promise.catch(error => {})"],
                  [".finally()", "无论成功失败都执行", "promise.finally(() => {})"],
                  ["Promise.all()", "并行处理多个Promise", "Promise.all([p1, p2])"],
                  ["Promise.race()", "取第一个完成的Promise", "Promise.race([p1, p2])"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "promise.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>Promise</title>\n</head>\n<body>\n    <h2>Promise（按F12控制台查看结果）</h2>\n\n    <script>\n        function delay(ms) {\n            return new Promise((resolve, reject) => {\n                if (ms > 0) {\n                    setTimeout(() => resolve('延迟' + ms + '毫秒'), ms);\n                } else {\n                    reject('延迟时间必须大于0');\n                }\n            });\n        }\n\n        // 链式调用\n        delay(1000)\n            .then(result => {\n                console.log(result);\n                return delay(500);\n            })\n            .then(result => {\n                console.log(result);\n                return delay(-100);\n            })\n            .catch(error => {\n                console.error('错误:', error);\n            })\n            .finally(() => {\n                console.log('操作完成');\n            });\n\n        // Promise.all：并行等待全部完成\n        Promise.all([\n            delay(1000),\n            delay(2000),\n            delay(1500)\n        ]).then(results => {\n            console.log('全部完成:', results);\n        });\n    </script>\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "async/await",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b0",
                "type": "text",
                "content": "async/await是Promise的语法糖，让异步代码看起来像同步代码，更易读。\n\n使用规则：\n- async函数返回一个Promise\n- await只能在async函数中使用\n- await会等待Promise完成并返回结果\n- 可以使用try/catch捕获错误"
              },
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "filename": "async-await.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>async/await</title>\n</head>\n<body>\n    <h2>async/await（按F12控制台查看结果）</h2>\n\n    <script>\n        function delay(ms) {\n            return new Promise((resolve, reject) => {\n                if (ms > 0) {\n                    setTimeout(() => resolve('延迟' + ms + '毫秒'), ms);\n                } else {\n                    reject('时间必须大于0');\n                }\n            });\n        }\n\n        async function demo() {\n            try {\n                console.log('开始');\n                const r1 = await delay(800);\n                console.log(r1);\n                const r2 = await delay(400);\n                console.log(r2);\n                await delay(-100);\n            } catch (error) {\n                console.error('捕获错误:', error);\n            } finally {\n                console.log('结束');\n            }\n        }\n\n        demo();\n    </script>\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "实战应用",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b0",
                "type": "text",
                "content": "结合fetch API和async/await实现网络请求。"
              },
              {
                "id": "b1",
                "type": "code",
                "language": "html",
                "filename": "fetch-demo.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>fetch请求</title>\n</head>\n<body>\n    <h2>fetch + async/await（按F12控制台查看结果）</h2>\n\n    <script>\n        async function getUser(id) {\n            try {\n                console.log('请求中...');\n                const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);\n                if (!res.ok) throw new Error('请求失败');\n                const data = await res.json();\n                console.log('获取到用户:', data.name, data.email);\n                return data;\n            } catch (error) {\n                console.error('错误:', error.message);\n                return null;\n            }\n        }\n\n        getUser(1);\n    </script>\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "页面交互",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "事件类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b0",
                "type": "text",
                "content": "事件是用户与页面的交互动作，如点击、输入、鼠标移动等。通过在HTML标签上添加事件属性，可以在事件触发时执行相应的JavaScript代码。\n\n事件的作用：\n- 响应用户操作\n- 实现页面动态效果\n- 处理表单提交"
              },
              {
                "id": "b1",
                "type": "text",
                "content": "在HTML标签上直接加事件属性即可绑定事件："
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["事件属性", "触发时机", "示例"],
                "rows": [
                  ["onclick", "点击时", "<button onclick=\"fn()\">点击</button>"],
                  ["oninput", "输入时", "<input oninput=\"fn()\">"],
                  ["onchange", "变化时", "<input onchange=\"fn()\">"],
                  ["onfocus", "聚焦时", "<input onfocus=\"fn()\">"],
                  ["onblur", "失焦时", "<input onblur=\"fn()\">"],
                  ["onmouseover", "鼠标进入", "<div onmouseover=\"fn()\">"],
                  ["onmouseout", "鼠标离开", "<div onmouseout=\"fn()\">"],
                  ["onsubmit", "表单提交", "<form onsubmit=\"fn()\">"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "html",
                "filename": "事件示例",
                "code": "<!DOCTYPE html>\n<html>\n<body>\n\n<!-- 点击事件：调用函数 -->\n<button onclick=\"sayHello()\">打招呼</button>\n\n<script>\nfunction sayHello() {\n    alert('你好！欢迎使用JavaScript！');\n}\n</script>\n\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "DOM操作",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["方法", "作用", "示例"],
                "rows": [
                  ["getElementById", "通过ID获取元素", "document.getElementById('id')"],
                  ["querySelector", "通过选择器获取", "document.querySelector('.class')"],
                  ["innerHTML", "获取/设置HTML", "element.innerHTML = '<b>加粗</b>'"],
                  ["style", "获取/设置样式", "element.style.color = 'red'"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "DOM操作示例",
                "code": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1 id='\1'>原始标题</h1>\n<p class='\1'>这是第一个段落</p>\n\n<button onclick=\"changeContent()\">修改内容</button>\n<button onclick=\"changeStyle()\">修改样式</button>\n\n<script>\nfunction changeContent() {\n    document.getElementById('title').innerHTML = '新标题';\n    document.querySelector('.text').innerHTML = '<strong>加粗的段落</strong>';\n}\n\nfunction changeStyle() {\n    document.getElementById('title').style.color = 'blue';\n    document.getElementById('title').style.fontSize = '28px';\n}\n</script>\n\n</body>\n</html>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "网络请求",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "HTTP请求概述",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "前端通过HTTP请求与后端交互。fetch是最常用的方式，支持GET（查数据）和POST（提交数据）。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["概念", "说明", "示例"],
                "rows": [
                  ["GET", "从服务器获取数据，参数拼在URL上", "fetch('/users?id=1')"],
                  ["POST", "向服务器提交数据，数据放在body里", "fetch('/users', {method:'POST', body:...})"],
                  ["Headers", "请求头，告诉服务器数据格式", "Content-Type: application/json"],
                  ["Body", "请求体，POST时携带的数据", "JSON.stringify({name:'张三'})"],
                  ["Query String", "URL ? 后面的参数", "/users?page=1&size=10"]
                ]
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "测试接口用 jsonplaceholder.typicode.com，免费模拟REST API，无需搭建后端。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "GET请求",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "GET请求从服务器获取数据，参数拼在URL后面（Query String）。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "get.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>GET请求</title>\n</head>\n<body>\n    <h2>GET请求（按F12控制台查看结果）</h2>\n    <button onclick=\"getAllUsers()\">查看所有用户</button>\n    <button onclick=\"getUserById(3)\">按ID查用户</button>\n    <div id=\"result\"></div>\n\n    <script>\n        async function getAllUsers() {\n            const res = await fetch('https://jsonplaceholder.typicode.com/users');\n            const users = await res.json();\n            console.log(users.map(u => u.name));\n        }\n\n        async function getUserById(id) {\n            // 用 Query String ?id=3 查单个用户\n            const res = await fetch('https://jsonplaceholder.typicode.com/users?id=' + id);\n            const users = await res.json();\n            const user = users[0];\n            console.log(user.name, user.email);\n            document.getElementById('result').innerHTML =\n                '<p>' + user.name + ' | ' + user.email + '</p>';\n        }\n    </script>\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "POST请求",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "POST请求提交数据到服务器。标准做法：创建成功后立即查询验证数据是否生效。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "post.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>POST请求</title>\n</head>\n<body>\n    <h2>POST创建 + GET查询验证（按F12控制台查看结果）</h2>\n    <button onclick=\"createAndVerify()\">创建并验证</button>\n\n    <script>\n        async function createAndVerify() {\n            // 1. POST创建用户\n            const createRes = await fetch('https://jsonplaceholder.typicode.com/users', {\n                method: 'POST',\n                headers: { 'Content-Type': 'application/json' },\n                body: JSON.stringify({ name: '张三', email: 'zhangsan@test.com' })\n            });\n            const newUser = await createRes.json();\n            console.log('创建成功，ID:', newUser.id, newUser.name);\n\n            // 2. GET查询验证\n            const queryRes = await fetch('https://jsonplaceholder.typicode.com/users?id=' + newUser.id);\n            const list = await queryRes.json();\n            console.log('查询验证:', list[0].name, list[0].email);\n        }\n    </script>\n</body>\n</html>"
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
    "title": "Vue3框架",
    "desc": "Vue3、组件、响应式、路由",
    "icon": "🎯",
    "chapters": [
      {
        "id": "ch1",
        "title": "环境搭建",
        "lessons": [
          {
            "id": "l1",
            "title": "Vue3简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Vue3是一个渐进式JavaScript框架，使用组合式API提供更好的代码组织和可维护性。\n\n核心特性：\n- 组合式API (Composition API)\n- 更好的TypeScript支持\n- 更小的包体积\n- 更快的渲染性能\n- 新的响应式系统"
              }
            ]
          },
          {
            "id": "l2",
            "title": "安装Node.js",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "powershell",
                "filename": "使用winget安装Node.js",
                "code": "# 打开PowerShell终端\n# 安装Node.js (LTS版本)\nwinget install OpenJS.NodeJS.LTS\n\n# 验证安装\nnode --version\nnpm --version"
              }
            ]
          },
          {
            "id": "l3",
            "title": "创建Vue3项目",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "powershell",
                "filename": "使用Vite创建Vue3项目",
                "code": "# 使用Vite创建Vue3项目（直接创建到当前目录）\nnpm create vite@latest . -- --template vue\n\n# 安装依赖\nnpm install\n\n# 启动开发服务器\nnpm run dev"
              }
            ]
          },
          {
            "id": "l4",
            "title": "项目结构详解",
            "blocks": [
              {
                "id": "b1",
                "type": "heading",
                "content": "Vue3项目结构"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["目录/文件", "用途"],
                "rows": [
                  ["node_modules/", "依赖包"],
                  ["public/", "静态资源（不参与打包）"],
                  ["src/", "源代码目录"],
                  ["├── assets/", "静态资源文件"],
                  ["├── components/", "可复用组件"],
                  ["├── App.vue", "根组件"],
                  ["└── main.js", "入口文件"],
                  ["index.html", "HTML入口"],
                  ["package.json", "项目配置"],
                  ["vite.config.js", "Vite配置"]
                ]
              },
              {
                "id": "b3",
                "type": "list",
                "items": [
                  "src/main.js - 应用入口，创建Vue实例并挂载",
                  "src/App.vue - 根组件，包含主要结构",
                  "index.html - HTML模板，提供容器元素"
                ]
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "开发中主要在src目录下编写代码，使用.vue单文件组件组织代码。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "Vue基础",
        "lessons": [
          {
            "id": "l1",
            "title": "为什么需要Vue3",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "传统HTML需要手动操作DOM，Vue通过声明式语法实现数据驱动视图，让开发更简洁高效。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "传统HTML实现",
                "code": "<!DOCTYPE html>\n<html>\n<head><title>传统HTML示例</title></head>\n<body>\n  <div id='\1'>\n    <h1 id='\1'>Hello World!</h1>\n    <button id='\1'>点击: <span id='\1'>0</span></button>\n  </div>\n  <script>\n    const messageEl = document.getElementById('message');\n    const btnEl = document.getElementById('btn');\n    const countEl = document.getElementById('count');\n    let count = 0;\n    btnEl.addEventListener('click', function() {\n      count++;\n      countEl.textContent = count;\n    });\n  </script>\n</body>\n</html>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "Vue3实现",
                "code": "<template>\n  <div>\n    <h1>{{ message }}</h1>\n    <button @click='\1'>点击: {{ count }}</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst message = ref('Hello Vue3!')\nconst count = ref(0)\n</script>"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "import 用于导入现成的函数或变量，{ ref } 表示从 vue 包中取 ref 这个函数来用。"
              },
              {
                "id": "b5",
                "type": "table",
                "headers": ["方式", "DOM操作", "数据更新"],
                "rows": [
                  ["传统HTML", "手动获取元素", "手动更新视图"],
                  ["Vue3", "自动处理", "响应式自动更新"]
                ]
              }
            ]
          },
          {
            "id": "l2",
            "title": "响应式数据",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Vue3使用 ref() 创建响应式数据，数据变化时视图自动更新。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["API", "适用类型", "访问方式", "说明"],
                "rows": [
                  ["ref()", "任意类型", ".value", "万能用法，开发中几乎全用ref"],
                  ["reactive()", "对象/数组", "直接访问", "较少使用，了解即可"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "ref示例",
                "code": "<script setup>\nimport { ref } from 'vue'\n\n// 基本类型\nconst count = ref(0)\nconst name = ref('Vue3')\nconst isActive = ref(true)\n\n// 对象和数组（万能用法）\nconst user = ref({ name: '张三', age: 25 })\nconst list = ref(['苹果', '香蕉'])\n\n// 访问值需要用 .value\nconsole.log(count.value)\n</script>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "模板语法",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "模板使用双大括号进行数据绑定，支持JavaScript表达式。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["语法", "说明", "示例"],
                "rows": [
                  ["{{ 变量 }}", "文本插值", "{{ message }}"],
                  ["{{ 表达式 }}", "JS表达式", "{{ count + 1 }}"],
                  ["{{ 函数调用 }}", "方法调用", "{{ new Date() }}"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "模板语法示例",
                "code": "<template>\n  <div>\n    <h1>{{ message }}</h1>\n    <p>当前时间：{{ new Date().toLocaleString() }}</p>\n    <p>计算结果：{{ 1 + 2 * 3 }}</p>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst message = ref('Hello Vue3!')\n</script>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "条件渲染",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "根据条件来显示或隐藏元素。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["指令", "说明", "特点"],
                "rows": [
                  ["v-if", "条件为真时渲染", "不渲染时不创建DOM"],
                  ["v-else-if", "多条件判断", "必须紧跟v-if"],
                  ["v-else", "默认分支", "必须紧跟v-if或v-else-if"],
                  ["v-show", "切换display", "始终创建DOM，切换开销小"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "条件渲染示例",
                "code": "<template>\n  <div>\n    <div v-if='\1'><p>优秀</p></div>\n    <div v-else-if='\1'><p>及格</p></div>\n    <div v-else><p>不及格</p></div>\n    <div v-show=\"isVisible\">显示/隐藏</div>\n    <button @click='\1'>切换</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst score = ref(85)\nconst isVisible = ref(true)\n</script>"
              }
            ]
          },
          {
            "id": "l5",
            "title": "循环渲染",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "使用 v-for 遍历数据并渲染元素。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["语法", "说明"],
                "rows": [
                  ["v-for='\1'", "遍历数组"],
                  ["v-for='\1'", "遍历数组+索引"],
                  ["v-for='\1'", "遍历对象"]
                ]
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "建议配合 :key 使用，提高渲染性能。"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "vue",
                "filename": "循环渲染示例",
                "code": "<template>\n  <ul>\n    <li v-for='\1' :key='\1'>\n      {{ index + 1 }}. {{ item }}\n    </li>\n  </ul>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst fruits = ref(['苹果', '香蕉', '橙子', '葡萄'])\n</script>"
              }
            ]
          },
          {
            "id": "l6",
            "title": "常用指令",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["指令", "简写", "用途"],
                "rows": [
                  ["v-model", "-", "双向数据绑定"],
                  ["v-bind", ":", "绑定属性"],
                  ["v-on", "@", "绑定事件"],
                  ["v-if / v-else", "-", "条件渲染"],
                  ["v-show", "-", "条件显示"],
                  ["v-for", "-", "循环渲染"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "指令示例",
                "code": "<template>\n  <div>\n    <input v-model='\1' placeholder='\1'>\n    <p>你输入的：{{ message }}</p>\n    <img :src='\1' :class='\1'>\n    <button @click='\1'>点击: {{ count }}</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst message = ref('')\nconst imageUrl = ref('https://picsum.photos/150.jpg')\nconst isLarge = ref(true)\nconst count = ref(0)\n</script>\n\n<style scoped>\n.large { width: 200px; height: 200px; }\n</style>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "Vue3组件",
        "lessons": [
          {
            "id": "l1",
            "title": "组件基础",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "组件是Vue3的核心，用于构建可复用的UI元素。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["文件", "用途"],
                "rows": [
                  ["<template>", "HTML模板，定义视图结构"],
                  ["<script setup>", "组合式API，定义逻辑"],
                  ["<style scoped>", "组件样式，仅当前组件生效"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "HelloWorld.vue",
                "code": "<template>\n  <h1>{{ msg }}</h1>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst msg = ref('Hello World!')\n</script>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "Props",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "父组件通过props向子组件传递数据。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "Child.vue",
                "code": "<template>\n  <h2>{{ title }}</h2>\n</template>\n\n<script setup>\nconst props = defineProps({\n  title: String\n})\n</script>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "Parent.vue",
                "code": "<template>\n  <Child title=\"父组件传递的标题\" />\n</template>\n\n<script setup>\nimport Child from './Child.vue'\n</script>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "Emit",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "子组件通过emit向父组件发送事件。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "Child.vue",
                "code": "<template>\n  <button @click='\1'>发送</button>\n</template>\n\n<script setup>\nconst emit = defineEmits(['update'])\n</script>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "Parent.vue",
                "code": "<template>\n  <Child @update=\"onUpdate\" />\n  <p>收到：{{ received }}</p>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nimport Child from './Child.vue'\nconst received = ref('')\nfunction onUpdate(val) {\n  received.value = val\n}\n</script>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "插槽",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "插槽用于父组件向子组件传递HTML内容。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["类型", "说明"],
                "rows": [
                  ["默认插槽", "子组件用<slot />接收"],
                  ["具名插槽", "用name区分多个插槽"],
                  ["作用域插槽", "子组件向插槽传递数据"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "Layout.vue",
                "code": "<template>\n  <header>\n    <slot name='\1' />\n  </header>\n  <main>\n    <slot />\n  </main>\n</template>"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "vue",
                "filename": "App.vue",
                "code": "<template>\n  <Layout>\n    <template #header>\n      <h1>标题</h1>\n    </template>\n    <p>内容</p>\n  </Layout>\n</template>\n\n<script setup>\nimport Layout from './Layout.vue'\n</script>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "Vue3路由",
        "lessons": [
          {
            "id": "l1",
            "title": "路由基础",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Vue Router实现单页面应用路由，不刷新页面即可切换视图。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "bash",
                "filename": "安装",
                "code": "npm install vue-router@4"
              }
            ]
          },
          {
            "id": "l2",
            "title": "路由配置",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "定义路径和组件的映射关系。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "router/index.js",
                "code": "import { createRouter, createWebHistory } from 'vue-router'\nimport Home from '../views/Home.vue'\nimport About from '../views/About.vue'\n\nconst routes = [\n  { path: '/', component: Home },\n  { path: '/about', component: About }\n]\n\nconst router = createRouter({\n  history: createWebHistory(),\n  routes\n})\n\nexport default router"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "main.js",
                "code": "import { createApp } from 'vue'\nimport App from './App.vue'\nimport router from './router'\n\ncreateApp(App).use(router).mount('#app')"
              }
            ]
          },
          {
            "id": "l3",
            "title": "跳转和传参",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "使用router.push跳转并传递参数，目标页面用useRoute获取。参数通过query（?id=1）传递，和HTTP Query String一致。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["方式", "发送", "接收"],
                "rows": [
                  ["router-link", "<router-link to=\"/user?id=1\">用户</router-link>", "route.query.id"],
                  ["push跳转", "router.push('/user?id=1')", "route.query.id"],
                  ["多个参数", "router.push('/user?id=1&name=张三')", "route.query.id, route.query.name"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "发送端 Home.vue",
                "code": "<template>\n  <div>\n    <router-link to=\"/user?id=1&name=张三\">用户1</router-link>\n    <button @click=\"goUser\">跳转用户2</button>\n  </div>\n</template>\n\n<script setup>\nimport { useRouter } from 'vue-router'\nconst router = useRouter()\nfunction goUser() {\n  router.push('/user?id=2&name=李四')\n}\n</script>"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "vue",
                "filename": "接收端 User.vue",
                "code": "<template>\n  <h2>用户ID: {{ route.query.id }}</h2>\n  <p>姓名: {{ route.query.name }}</p>\n</template>\n\n<script setup>\nimport { useRoute } from 'vue-router'\nconst route = useRoute()\n</script>"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-node",
    "pathId": "frontend",
    "title": "Node.js",
    "desc": "Node.js、Express、后端开发",
    "icon": "🟢",
    "chapters": [
      {
        "id": "ch1",
        "title": "Node.js基础",
        "lessons": [
          {
            "id": "l1",
            "title": "Node.js简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Node.js是一个基于Chrome V8引擎的JavaScript运行时，让JavaScript可以在服务器端运行。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["特性", "说明"],
                "rows": [
                  ["事件驱动", "基于事件的非阻塞I/O模型"],
                  ["异步编程", "支持回调、Promise、async/await"],
                  ["npm生态", "世界上最大的包管理器"],
                  ["跨平台", "支持Windows、macOS、Linux"]
                ]
              }
            ]
          },
          {
            "id": "l2",
            "title": "第一个Node.js程序",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "hello.js",
                "code": "console.log('Hello Node.js!')"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "bash",
                "filename": "运行",
                "code": "node hello.js"
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "模块系统",
        "lessons": [
          {
            "id": "l1",
            "title": "内置模块",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Node.js提供了丰富的内置模块。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["模块", "用途"],
                "rows": [
                  ["fs", "文件系统操作"],
                  ["path", "路径处理"],
                  ["http", "HTTP服务器"],
                  ["os", "操作系统信息"],
                  ["events", "事件处理"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "内置模块示例",
                "code": "const fs = require('fs')\nconst path = require('path')\nconst os = require('os')\n\n// 读取文件\nfs.readFile('./test.txt', 'utf8', (err, data) => {\n  console.log(data)\n})\n\n// 路径处理\nconsole.log(path.join('/usr', 'local', 'bin'))\n\n// 系统信息\nconsole.log(os.platform())"
              }
            ]
          },
          {
            "id": "l2",
            "title": "自定义模块",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["规范", "导出", "导入", "说明"],
                "rows": [
                  ["CommonJS", "module.exports", "require()", "Node.js默认规范"],
                  ["ES Module", "export", "import", "现代JS标准"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "math.js (CommonJS)",
                "code": "// math.js - CommonJS导出方式 (Node.js默认)\nfunction add(a, b) {\n  return a + b\n}\n\nfunction subtract(a, b) {\n  return a - b\n}\n\nmodule.exports = { add, subtract }"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "main.js (CommonJS)",
                "code": "// main.js - CommonJS导入 (Node.js默认)\nconst { add, subtract } = require('./math')\n\nconsole.log(add(5, 3))       // 8\nconsole.log(subtract(5, 3))  // 2"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "javascript",
                "filename": "math.js (ESM)",
                "code": "// math.js - ES Module导出 (现代标准，推荐)\nexport function add(a, b) {\n  return a + b\n}\n\nexport function subtract(a, b) {\n  return a - b\n}"
              },
              {
                "id": "b5",
                "type": "code",
                "language": "javascript",
                "filename": "main.js (ESM)",
                "code": "// main.js - ES Module导入 (需要 package.json 中设 \"type\": \"module\")\nimport { add, subtract } from './math.js'\n\nconsole.log(add(5, 3))       // 8\nconsole.log(subtract(5, 3))  // 2"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "Express框架",
        "lessons": [
          {
            "id": "l1",
            "title": "Express简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Express是最流行的Node.js Web框架，用于快速构建Web应用和API。"
              },
              {
                "id": "b2",
                "type": "tip",
                "content": "使用 npm install 安装三方包，npm 会自动下载并管理依赖。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "bash",
                "filename": "安装",
                "code": "npm install express"
              }
            ]
          },
          {
            "id": "l2",
            "title": "创建服务器",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "server.js",
                "code": "const express = require('express')\nconst app = express()\nconst PORT = 3000\n\n// 中间件：解析JSON请求体\napp.use(express.json())\n\n// GET请求\napp.get('/', (req, res) => {\n  res.json({ message: 'Hello Express!' })\n})\n\n// POST请求\napp.post('/api/users', (req, res) => {\n  const { name } = req.body\n  res.json({ message: `用户 ${name} 创建成功` })\n})\n\napp.listen(PORT, () => {\n  console.log(`服务器运行在 http://localhost:${PORT}`)\n})"
              }
            ]
          },
          {
            "id": "l3",
            "title": "路由",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["方法", "路径", "用途"],
                "rows": [
                  ["GET", "/api/users", "获取用户列表"],
                  ["GET", "/api/users/:id", "查看单个用户"],
                  ["POST", "/api/users", "创建用户"],
                  ["PUT", "/api/users/:id", "更新用户"],
                  ["DELETE", "/api/users/:id", "删除用户"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "路由示例",
                "code": "// 动态路由\napp.get('/api/users/:id', (req, res) => {\n  const id = req.params.id\n  res.json({ id, name: '张三' })\n})\n\n// 路由分组 (Router)\nconst router = express.Router()\nrouter.get('/', (req, res) => res.json([]))\nrouter.post('/', (req, res) => res.json({}))\napp.use('/api/users', router)"
              }
            ]
          },
          {
            "id": "l4",
            "title": "中间件",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "中间件是Express的核心，用于处理请求和响应。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "中间件示例",
                "code": "// 日志中间件\napp.use((req, res, next) => {\n  console.log(`${req.method} ${req.url}`)\n  next()\n})\n\n// 错误处理中间件\napp.use((err, req, res, next) => {\n  console.error(err)\n  res.status(500).json({ error: '服务器错误' })\n})"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "SQLite数据库",
        "lessons": [
          {
            "id": "l1",
            "title": "SQLite简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "SQLite是一个轻量级嵌入式关系数据库，整个数据库存储在一个文件中，无需单独的服务器进程。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["特性", "说明"],
                "rows": [
                  ["零配置", "无需安装和配置服务器"],
                  ["单文件", "整个数据库存储在一个文件中"],
                  ["跨平台", "支持所有主流操作系统"],
                  ["嵌入式", "直接集成到应用程序中"]
                ]
              }
            ]
          },
          {
            "id": "l2",
            "title": "安装与连接",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "bash",
                "filename": "安装",
                "code": "npm install better-sqlite3"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "连接数据库",
                "code": "const Database = require('better-sqlite3')\nconst db = new Database('mydb.sqlite')\n\n// 创建表 (仅定义表结构)\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS users (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    name TEXT NOT NULL,\n    email TEXT UNIQUE,\n    created_at DATETIME DEFAULT CURRENT_TIMESTAMP\n  )\n`)"
              }
            ]
          },
          {
            "id": "l3",
            "title": "增删改查",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["操作", "方法", "说明"],
                "rows": [
                  ["增", "db.prepare(sql).run()", "插入数据"],
                  ["删", "db.prepare(sql).run()", "删除数据"],
                  ["改", "db.prepare(sql).run()", "更新数据"],
                  ["查", "db.prepare(sql).all()", "查询所有结果"],
                  ["查", "db.prepare(sql).get()", "查询单条结果"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "CRUD示例",
                "code": "// 插入数据 (Create)\ndb.prepare('INSERT INTO users (name, email) VALUES (?, ?)').run('张三', 'zhangsan@example.com')\ndb.prepare('INSERT INTO users (name, email) VALUES (?, ?)').run('李四', 'lisi@example.com')\n\n// 查询数据 (Read)\nconst user = db.prepare('SELECT * FROM users WHERE id = ?').get(1)\nconst users = db.prepare('SELECT * FROM users').all()\n\n// 更新数据 (Update)\ndb.prepare('UPDATE users SET name = ? WHERE id = ?').run('张三丰', 1)\n\n// 删除数据 (Delete)\ndb.prepare('DELETE FROM users WHERE id = ?').run(2)"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "VSCode 安装 SQLite Viewer 插件（作者 Florian Klampfer），右键 .sqlite 文件即可查看表结构和数据，增删改查结果一目了然。"
              }
            ]
          },
          {
            "id": "l4",
            "title": "两表联查",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "实际开发中数据分散在多张表。JOIN 把两张表按关联字段连接起来，一次查询拿到完整信息。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "创建关联表",
                "code": "// 订单表（关联用户）\ndb.exec(`\n  CREATE TABLE IF NOT EXISTS orders (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    userId INTEGER NOT NULL,\n    product TEXT NOT NULL,\n    price REAL NOT NULL,\n    FOREIGN KEY (userId) REFERENCES users(id)\n  )\n`)\n\n// 插入订单\ndb.prepare('INSERT INTO orders (userId, product, price) VALUES (?, ?, ?)').run(1, '笔记本电脑', 5999)\ndb.prepare('INSERT INTO orders (userId, product, price) VALUES (?, ?, ?)').run(1, '鼠标', 199)\ndb.prepare('INSERT INTO orders (userId, product, price) VALUES (?, ?, ?)').run(2, '键盘', 399)"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "JOIN 联查",
                "code": "// INNER JOIN：只返回匹配的行\nconst rows = db.prepare(`\n  SELECT users.name, orders.product, orders.price\n  FROM users\n  INNER JOIN orders ON users.id = orders.userId\n`).all()\n// 结果：张三 | 笔记本电脑 | 5999\n//       张三 | 鼠标      | 199\n//       李四 | 键盘      | 399\n\n// LEFT JOIN：返回所有用户（含无订单的）\nconst all = db.prepare(`\n  SELECT users.name, orders.product\n  FROM users\n  LEFT JOIN orders ON users.id = orders.userId\n`).all()"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-llm",
    "pathId": "frontend",
    "title": "大模型开发",
    "desc": "LLM API、提示词工程、工具调用、Skills、RAG、ReAct、LangChain、LangGraph",
    "icon": "🧠",
    "chapters": [
      {
        "id": "ch1",
        "title": "LLM基础",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "API调用",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "调用大模型API只需要发送HTTP请求。核心概念：messages数组（system设定角色、user用户问题、assistant模型回复）、temperature（0严谨/1创意）、max_tokens（最大输出长度）。主流大模型均兼容OpenAI格式。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["参数", "作用", "示例"],
                "rows": [
                  ["model", "模型名称", "deepseek-chat / gpt-4o"],
                  ["messages", "对话消息数组", "[{role:'system', content:'人设'}, {role:'user', content:'你好'}]"],
                  ["temperature", "随机性 0~2", "0=严谨，1=创意"],
                  ["max_tokens", "最大输出长度", "4096"],
                  ["stream", "是否流式", "false / true"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "调用DeepSeek API",
                "code": "import OpenAI from 'openai'\n\n// 所有兼容OpenAI格式的模型都用同一个SDK\nconst client = new OpenAI({\n  apiKey: 'sk-你的API密钥',\n  baseURL: 'https://api.deepseek.com/v1',  // DeepSeek / 千问 / 豆包 只改这里\n})\n\nconst completion = await client.chat.completions.create({\n  model: 'deepseek-chat',\n  messages: [\n    { role: 'system', content: '你是一个幽默的助手。' },\n    { role: 'user', content: '用一句话介绍前端开发' }\n  ],\n  temperature: 0.7,\n})\n\nconsole.log(completion.choices[0].message.content)"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "OpenAI SDK 是行业标准。换模型只改 baseURL + model：DeepSeek/千问/豆包全部兼容。npm install openai 一个依赖搞定所有大模型。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "流式响应（SSE）",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "流式响应让大模型逐字输出，就像ChatGPT打字效果。设置 stream:true，服务器持续推送SSE数据块，前端逐字渲染。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["流式字段", "含义"],
                "rows": [
                  ["delta.content", "本次推送的新增文字"],
                  ["delta.role", "消息角色（仅首次）"],
                  ["finish_reason", "\"stop\"表示结束，null表示继续"],
                  ["choices[0].delta", "增量内容（非流式用message）"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "流式调用",
                "code": "import OpenAI from 'openai'\n\nconst client = new OpenAI({\n  apiKey: 'sk-你的API密钥',\n  baseURL: 'https://api.deepseek.com/v1',\n})\n\nconst stream = await client.chat.completions.create({\n  model: 'deepseek-chat',\n  messages: [{ role: 'user', content: '写一首五言诗' }],\n  stream: true,\n})\n\nfor await (const chunk of stream) {\n  const content = chunk.choices[0]?.delta?.content\n  if (content) process.stdout.write(content) // 逐字打印\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "多模态输入",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "多模态模型理解图片、音频等输入。GPT-4o、千问-VL、豆包支持图片输入。端到端语音模型如Qwen-Omni可直接音频对话，无需STT→LLM→TTS三段式。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["能力", "API方式", "模型"],
                "rows": [
                  ["图片理解", "image_url传base64或URL", "gpt-4o / qwen-vl-max"],
                  ["音频转文字", "Whisper API / STT", "whisper-1 / 豆包语音识别"],
                  ["文字转语音", "TTS API", "tts-1 / 豆包语音合成"],
                  ["端到端语音", "音频+文字同时输入输出", "Qwen-Omni / GPT-4o-audio"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "图片理解",
                "code": "import OpenAI from 'openai'\n\nconst client = new OpenAI({\n  apiKey: 'sk-你的API密钥',\n  baseURL: 'https://api.deepseek.com/v1',\n})\n\nconst imageBase64 = fs.readFileSync('./photo.jpg', 'base64')\n\nconst completion = await client.chat.completions.create({\n  model: 'deepseek-chat',\n  messages: [{\n    role: 'user',\n    content: [\n      { type: 'text', text: '这张图片里有什么？' },\n      { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${imageBase64}` } }\n    ]\n  }],\n})\n\nconsole.log(completion.choices[0].message.content)"
              }
            ]
          },
          {
            "id": "l4",
            "title": "结构化输出",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "默认LLM返回自由文本，但业务场景需要固定格式输出（如JSON）。结构化输出让模型严格按JSON Schema返回，方便代码解析。两种方式：response_format指定JSON模式、JSON Schema约束字段类型。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["方式", "适用场景", "说明"],
                "rows": [
                  ["response_format: json_object", "简单JSON", "告诉模型\"返回JSON\"，但字段不保证"],
                  ["JSON Schema约束", "严格字段", "OpenAI structured outputs，强制按schema返回"],
                  ["function calling取结构", "复杂嵌套", "定义空函数，让模型\"调用\"来生成结构化数据"],
                  ["zod校验兜底", "生产环境", "前端zod schema校验+重试，保证类型安全"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "JSON Schema 结构化输出",
                "code": "import OpenAI from 'openai'\n\nconst client = new OpenAI({ apiKey: 'sk-你的API密钥' })\n\nconst completion = await client.chat.completions.create({\n  model: 'gpt-4o',\n  messages: [{ role: 'user', content: '分析这段代码：function add(a,b){return a-b}' }],\n  response_format: {\n    type: 'json_schema',\n    json_schema: {\n      name: 'code_review',\n      strict: true,\n      schema: {\n        type: 'object',\n        properties: {\n          bugs: { type: 'array', items: { type: 'string' } },\n          suggestions: { type: 'array', items: { type: 'string' } },\n          score: { type: 'number', description: '代码质量评分1-10' }\n        },\n        required: ['bugs', 'suggestions', 'score'],\n        additionalProperties: false\n      }\n    }\n  },\n})\n\nconst review = JSON.parse(completion.choices[0].message.content)\n// review.bugs[0] = \"函数名add但实际是减法\"\n// review.score = 3"
              }
            ]
          },
          {
            "id": "l5",
            "title": "会话管理",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "大模型本身无状态——每次请求独立，不记得上一句说了什么。会话管理就是手动维护 messages 数组，每轮把历史全部传回去。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "手写会话管理",
                "code": "import OpenAI from 'openai'\n\nconst client = new OpenAI({\n  apiKey: 'sk-xxx',\n  baseURL: 'https://api.deepseek.com/v1',\n})\n\nlet messages = [{ role: 'system', content: '你是一个助手' }]\n\nasync function chat(userInput) {\n  messages.push({ role: 'user', content: userInput })\n\n  const completion = await client.chat.completions.create({\n    model: 'deepseek-chat',\n    messages,\n    stream: false,\n  })\n\n  const reply = completion.choices[0].message.content\n  messages.push({ role: 'assistant', content: reply })\n  return reply\n}\n\nawait chat('你好，我叫张三')\nawait chat('我叫什么？') // 答：张三 ✓"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "上下文窗口不是无限的。每轮追加消息，messages越来越长直到超出窗口。压缩策略：滑动窗口保留最近N轮 + 对更早对话做摘要压缩。"
              },
              {
                "id": "b4",
                "type": "table",
                "headers": ["策略", "做法", "适用"],
                "rows": [
                  ["保留最近N轮", "只传最近10条消息", "简单短对话"],
                  ["摘要压缩", "超出窗口时让LLM总结历史", "长对话省Token"],
                  ["滑动窗口+摘要", "最近N轮+早期摘要", "平衡方案，推荐"]
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "提示词工程",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "提示词类型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "提示词工程是控制LLM输出质量的核心手段。四种基础类型从简单到复杂层层递进。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["类型", "做法", "适用场景", "示例"],
                "rows": [
                  ["Zero-shot", "直接提问，不给示例", "简单任务", "\"翻译：Hello\""],
                  ["Few-shot", "给2-3个示例再提问", "格式输出、分类", "\"输入→输出\" ×3 + 新输入"],
                  ["Chain-of-Thought", "让模型逐步推理", "数学、逻辑推理", "\"让我们一步步思考\""],
                  ["Self-Consistency", "多次采样+投票", "需要高准确率", "同一问题跑5次选最多的答案"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "Few-shot + CoT 示例",
                "code": "const prompt = `将用户输入分类为：bug报告、功能请求、使用问题。\n\n示例1：\n输入：登录按钮点了没反应\n分类：bug报告\n\n示例2：\n输入：能不能加一个导出PDF的功能\n分类：功能请求\n\n示例3：\n输入：怎么修改个人头像\n分类：使用问题\n\n现在分类：密码重置邮件收不到`\n\n// 模型会根据示例格式输出：分类：bug报告"
              }
            ]
          },
          {
            "id": "l2",
            "title": "系统角色设定",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "system角色定义人设、行为边界、输出格式。是控制模型行为最有效的方式。好的system prompt = 角色描述 + 行为约束 + 输出规则 + 边界声明。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["要素", "作用", "写法"],
                "rows": [
                  ["角色描述", "定义你是谁", "\"你是一位资深Java面试官\""],
                  ["行为约束", "限定能做什么", "\"只回答技术问题，拒绝闲聊\""],
                  ["输出规则", "控制格式", "\"回复用Markdown，代码用代码块\""],
                  ["边界声明", "安全兜底", "\"不知道就说不知道，不要编造\""]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "system prompt示例",
                "code": "const systemPrompt = `你是一位资深全栈面试官，严格按以下规则行事：\n\n1. 每次只问一个问题，根据回答决定下一题\n2. 难度从基础到深入逐步递进\n3. 回答正确简短肯定后进入下一题，回答错误指出问题并给提示\n4. 5题后给出总评：正确率 + 薄弱点 + 学习建议\n5. 不谈与面试无关的话题\n6. 不知道就说不知道，不要编造技术知识`\n\n// messages[0] = { role: 'system', content: systemPrompt }"
              }
            ]
          },
          {
            "id": "l3",
            "title": "记忆与上下文工程",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "记忆是LLM应用的持久化层。分为：短期记忆（当前对话上下文的messages数组管理）、长期记忆（跨对话的信息持久化，如用户偏好、历史摘要、向量归档）、工作记忆（当前任务的关键信息，类似草稿纸）。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["记忆类型", "存储方式", "生命周期", "技术"],
                "rows": [
                  ["短期记忆", "messages数组", "当前会话", "滑动窗口+摘要压缩"],
                  ["长期记忆", "向量库/SQLite", "跨会话持久化", "Embedding检索+时间衰减"],
                  ["工作记忆", "State对象", "当前任务", "暂存中间结果、草稿"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "长期记忆实现",
                "code": "// 会话结束后，将关键信息存入长期记忆\nasync function saveMemory(userId, content, importance) {\n  const embedding = await getEmbedding(content)\n  db.run(\n    `INSERT INTO memories (userId, content, embedding, importance, createdAt)\n     VALUES (?, ?, ?, ?, datetime('now'))`,\n    userId, content, JSON.stringify(embedding), importance\n  )\n}\n\n// 新会话开始时，检索相关记忆\nasync function recallMemories(userId, currentTopic, limit = 5) {\n  const vec = await getEmbedding(currentTopic)\n  return db.prepare(`\n    SELECT content, importance,\n      vec_distance_cosine(embedding, ?) as relevance\n    FROM memories WHERE userId = ?\n    ORDER BY relevance * importance DESC LIMIT ?\n  `).all(JSON.stringify(vec), userId, limit)\n}\n\n// 将检索到的记忆注入system prompt\nconst memories = await recallMemories(userId, userInput)\nconst memoryContext = memories.map(m => `[记忆] ${m.content}`).join('\\n')\nconst systemPrompt = `你是个人助手。以下是关于用户的重要记忆：\\n${memoryContext}\\n\\n当前时间：${new Date().toISOString()}`"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "工具调用",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "函数调用基础（Function Calling）",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "函数调用让大模型自主决定调用哪些外部工具。用户问\"北京今天天气\"，模型自动调用getWeather函数。核心：用JSON Schema定义工具，模型返回tool_calls（函数名+参数），执行后回传结果。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["字段", "说明", "示例"],
                "rows": [
                  ["name", "函数名", "getWeather"],
                  ["description", "决定何时调用", "获取指定城市的天气信息"],
                  ["parameters", "参数JSON Schema", "{type:'object', properties:{...}}"],
                  ["required", "必填参数", "[\"city\"]"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "定义工具并调用",
                "code": "import OpenAI from 'openai'\n\nconst client = new OpenAI({\n  apiKey: 'sk-xxx',\n  baseURL: 'https://api.deepseek.com/v1',\n})\n\nconst tools = [\n  {\n    type: 'function',\n    function: {\n      name: 'getWeather',\n      description: '获取指定城市今天的天气信息',\n      parameters: {\n        type: 'object',\n        properties: {\n          city: { type: 'string', description: '城市名称' }\n        },\n        required: ['city']\n      }\n    }\n  },\n  {\n    type: 'function',\n    function: {\n      name: 'sendEmail',\n      description: '发送邮件给指定收件人',\n      parameters: {\n        type: 'object',\n        properties: {\n          to: { type: 'string', description: '收件人邮箱' },\n          subject: { type: 'string', description: '邮件主题' },\n          body: { type: 'string', description: '邮件正文' }\n        },\n        required: ['to', 'subject', 'body']\n      }\n    }\n  }\n]\n\nconst completion = await client.chat.completions.create({\n  model: 'deepseek-chat',\n  messages: [{ role: 'user', content: '北京今天天气怎么样？' }],\n  tools,\n})"
              }
            ]
          },
          {
            "id": "l2",
            "title": "工具调用完整流程（Agent Loop）",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "完整流程：模型判断是否调用工具 → 返回tool_calls → 执行函数并回传结果(role:'tool') → 模型基于结果生成最终回复。这个while循环就是最原始的agent loop。"
              },
              {
                "id": "b2",
                "type": "list",
                "items": [
                  "1. 发送用户问题 + tools定义给模型",
                  "2. 模型返回 finish_reason: \"tool_calls\"",
                  "3. 解析 tool_calls，执行对应函数",
                  "4. 将结果以 role: \"tool\" 回传",
                  "5. 模型基于结果生成最终回复"
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "Agent Loop 完整流程",
                "code": "import OpenAI from 'openai'\n\nconst client = new OpenAI({\n  apiKey: 'sk-xxx',\n  baseURL: 'https://api.deepseek.com/v1',\n})\n\nasync function chatWithTools(userMessage, tools) {\n  const messages = [{ role: 'user', content: userMessage }]\n  let completion = await client.chat.completions.create({\n    model: 'deepseek-chat',\n    messages,\n    tools,\n  })\n  let choice = completion.choices[0]\n\n  // Agent Loop：模型要调工具就执行并回传，直到生成文本回复\n  while (choice.finish_reason === 'tool_calls') {\n    messages.push(choice.message)\n\n    for (const toolCall of choice.message.tool_calls) {\n      const args = JSON.parse(toolCall.function.arguments)\n      let result\n      switch (toolCall.function.name) {\n        case 'getWeather': result = await getWeather(args.city); break\n        case 'sendEmail':\n          result = await sendEmail(args.to, args.subject, args.body); break\n      }\n      messages.push({\n        role: 'tool',\n        tool_call_id: toolCall.id,\n        content: JSON.stringify(result)\n      })\n    }\n\n    completion = await client.chat.completions.create({\n      model: 'deepseek-chat',\n      messages,\n      tools,\n    })\n    choice = completion.choices[0]\n  }\n\n  return choice.message.content\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "HTTP封装函数",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "任何外部API都可以封装为工具。搜索、查数据库、发邮件、调内部服务——只要定义好JSON Schema，LLM就能\"学会\"使用。实战：把SQL查询和网络搜索封装为工具。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "HTTP封装工具实战",
                "code": "// 工具1：查询数据库\nasync function queryDatabase(sql) {\n  const db = new Database('mydb.sqlite')\n  return db.prepare(sql).all()\n}\n\n// 工具2：搜索互联网\nasync function searchWeb(keyword) {\n  const res = await fetch(`https://api.search.com?q=${encodeURIComponent(keyword)}`)\n  return res.json()\n}\n\n// 工具3：调用内部服务API\nasync function callInternalApi(endpoint, params) {\n  const res = await fetch(`https://internal-api.com/${endpoint}`, {\n    method: 'POST', headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(params)\n  })\n  return res.json()\n}\n\n// 三个工具的tools定义（JSON Schema），复用上面的agent loop即可"
              }
            ]
          },
          {
            "id": "l4",
            "title": "MCP协议",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "MCP (Model Context Protocol) 是工具调用的标准化协议。函数调用需要手写JSON Schema + 代码，MCP让工具提供方自描述：服务声明自己的tools、resources、prompts，客户端自动发现和调用。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["对比", "函数调用", "HTTP封装", "MCP"],
                "rows": [
                  ["定义方式", "JSON Schema + 代码", "fetch封装", "服务自描述"],
                  ["发现机制", "手动注册", "手动注册", "客户端自动发现"],
                  ["调用方式", "HTTP → 解析tool_calls → 执行", "同函数调用", "stdio/SSE → mcp client"],
                  ["适合场景", "自定义内部工具", "外部HTTP API", "跨服务标准化通信"],
                  ["代表性工具", "你的业务函数", "搜索API/数据库", "Filesystem/GitHub/Puppeteer"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "MCP Client 使用",
                "code": "// MCP Client 连接并调用工具\nimport { Client } from '@modelcontextprotocol/sdk/client/index.js'\nimport { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js'\n\nconst transport = new StdioClientTransport({\n  command: 'npx',\n  args: ['-y', '@modelcontextprotocol/server-filesystem', '/workspace']\n})\n\nconst client = new Client({ name: 'my-app', version: '1.0.0' })\nawait client.connect(transport)\n\n// 自动发现工具列表\nconst tools = await client.listTools()\n// [{ name: 'read_file', description: '...' }, { name: 'write_file', ... }]\n\n// 调用工具\nconst result = await client.callTool({\n  name: 'read_file',\n  arguments: { path: '/workspace/index.html' }\n})"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "函数调用 = 你自己写工具的说明书。MCP = 工具自带说明书，你只需要连接。MCP本质是标准化的工具发现和调用协议，底层传输层可以是stdio、SSE或HTTP。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "Skills外部技能",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "Skills概念",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Skill 是能力封装单元 = prompt + tools + 执行流程，打包成 .md 文件即插即用。函数调用是原子工具（一把螺丝刀），Skill 是复合能力（修一整台电脑）。LLM 根据用户意图自动匹配对应 Skill。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["对比", "函数调用", "MCP", "Skill"],
                "rows": [
                  ["定义方式", "JSON Schema + 代码", "启动外部服务", ".md 文件"],
                  ["粒度", "单个函数", "一组函数集合", "完整业务能力"],
                  ["开发量", "写注册代码", "搭服务+配置", "写一个md文件"],
                  ["LLM路由", "手写路由逻辑", "协议自动发现", "LLM自动匹配"],
                  ["版本管理", "代码管理", "服务版本", "Git纯文本"],
                  ["适合场景", "自定义内部工具", "跨服务标准通信", "业务能力封装"]
                ]
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "Skill = 渐进式暴露：平时只暴露名字和触发条件，匹配时才展开完整执行流程。避免一次给LLM太多信息影响决策。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "编写Skill",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Skill 文件结构：触发条件（何时匹配）、工具权限（能用哪些工具）、执行流程（步骤编排）、输出规范（产物格式）。下面是一个 PPT 生成 Skill 示例。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "markdown",
                "filename": "ppt-generator.md",
                "code": "# PPT Generator Skill\n\n## 触发条件\n用户提到\"生成PPT\"、\"做一份演示文稿\"、\"幻灯片\"\n\n## 工具权限\nBash, Write, Read\n\n## 执行流程\n1. 理解用户主题和页数需求\n2. 用 python-pptx 库生成 PPT\n3. 每页包含标题 + 要点 + 配图描述\n4. 支持多模板风格（科技/商务/简约）\n5. 输出 .pptx 文件到 output/ 目录"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "markdown",
                "filename": "deploy.md",
                "code": "# Deploy Skill\n\n## 触发条件\n用户提到\"部署\"、\"上线\"、\"发布\"、\"配置域名\"\n\n## 工具权限\nBash, Write, Read\n\n## 执行流程\n1. 确认目标服务器 IP 和域名\n2. 构建 Docker 镜像\n3. 推送镜像到仓库\n4. 生成 Knative Service YAML\n5. kubectl apply 部署\n6. 配置域名和自动 HTTPS\n7. 验证部署结果"
              }
            ]
          },
          {
            "id": "l3",
            "title": "Skills路由与调度",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "多个 Skill 并存时，需要路由机制：LLM 先判断用户意图 → 匹配最合适的 Skill → 加载该 Skill 的完整 prompt 和执行流程 → 进入 agent loop 执行。路由本身也是一层 LLM 决策。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "Skills路由",
                "code": "// Skills注册表\nconst skillsRegistry = {\n  'ppt-generator': { file: 'ppt-generator.md', triggers: ['PPT', '演示文稿', '幻灯片'] },\n  'deploy': { file: 'deploy.md', triggers: ['部署', '上线', '发布'] },\n  'code-review': { file: 'code-review.md', triggers: ['代码审查', 'review', 'CR'] },\n}\n\n// LLM路由：判断意图，选择Skill\nasync function routeSkill(userInput) {\n  const skillList = Object.entries(skillsRegistry)\n    .map(([name, s]) => `- ${name}: ${s.triggers.join(', ')}`).join('\\n')\n\n  const reply = await callLLM(`根据用户输入匹配最合适的Skill：\n可用Skills：\n${skillList}\n\n用户输入：${userInput}\n返回匹配的Skill名称（只返回名称，如\"ppt-generator\"，不匹配返回\"none\"）`)\n\n  return reply.trim()\n}\n\n// 加载Skill文件，注入system prompt\nconst skillName = await routeSkill('帮我做一个项目介绍的PPT')\nif (skillName !== 'none') {\n  const skillMd = fs.readFileSync(`skills/${skillsRegistry[skillName].file}`, 'utf-8')\n  systemPrompt = `你拥有以下Skill能力：\\n${skillMd}\\n\\n严格按Skill执行流程操作。`\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "Skills市场与协作",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Skills 天然适合团队协作和社区共享。纯文本 .md 文件 + Git 版本控制 = 能力随代码一起迭代。团队可以维护私有 Skills 仓库，社区可以贡献公共 Skills。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["模式", "说明", "示例"],
                "rows": [
                  ["个人Skill", "封装自己的常用工作流", "代码生成、文档整理"],
                  ["团队Skill", "团队共享的业务能力", "内部系统操作、CI/CD"],
                  ["社区Skill", "开源贡献的通用能力", "PPT生成、爬虫、数据分析"],
                  ["组合Skill", "多个Skill嵌套调用", "部署先调build再调deploy"]
                ]
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "Skill 的本质是\"用自然语言编程\"。以前封装能力需要写 SDK/库/API，现在一个 .md 文件 + LLM 就能实现同等效果。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "RAG知识库",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "Embedding向量化",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Embedding是将文本转换为数字向量的技术。语义相近的文本，向量之间的距离也近——这是RAG的核心基础。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["Embedding模型", "维度", "特点"],
                "rows": [
                  ["text-embedding-3-small", "1536维", "OpenAI出品，性价比最高"],
                  ["text-embedding-3-large", "3072维", "精度更高，速度稍慢"],
                  ["bge-large-zh-v1.5", "1024维", "中文优化，开源可自部署"],
                  ["gte-large-zh", "1024维", "阿里出品，中文效果好"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "文本转向量",
                "code": "import OpenAI from 'openai'\n\nconst client = new OpenAI({ apiKey: 'sk-你的API密钥' })\n\nasync function getEmbedding(text) {\n  const response = await client.embeddings.create({\n    model: 'text-embedding-3-small',\n    input: text.substring(0, 8000),\n  })\n  return response.data[0].embedding\n}\n\nfunction cosineSimilarity(vecA, vecB) {\n  let dotProduct = 0, normA = 0, normB = 0\n  for (let i = 0; i < vecA.length; i++) {\n    dotProduct += vecA[i] * vecB[i]\n    normA += vecA[i] * vecA[i]\n    normB += vecB[i] * vecB[i]\n  }\n  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "sqlite-vec向量存储",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "sqlite-vec是SQLite的向量扩展，在SQLite中直接存储和检索向量，零额外服务。比Pinecone/Weaviate等外部向量库更轻量，适合中小规模RAG。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "sqlite-vec使用",
                "code": "import Database from 'better-sqlite3'\nimport * as vec from 'sqlite-vec'\n\nconst db = new Database('knowledge.db')\nvec.load(db)\n\n// 创建向量表\ndb.exec(`\n  CREATE VIRTUAL TABLE IF NOT EXISTS chunks USING vec0(\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    content TEXT,\n    embedding FLOAT[1536]\n  )\n`)\n\n// 插入向量数据\nasync function insertChunk(text) {\n  const embedding = await getEmbedding(text)\n  db.run(\n    'INSERT INTO chunks (content, embedding) VALUES (?, ?)',\n    text, JSON.stringify(embedding)\n  )\n}\n\n// 向量相似度检索\nasync function searchSimilar(query, limit = 3) {\n  const queryVec = await getEmbedding(query)\n  return db.prepare(`\n    SELECT content, vec_distance_cosine(embedding, ?) as distance\n    FROM chunks ORDER BY distance LIMIT ?\n  `).all(JSON.stringify(queryVec), limit)\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "文档切分与入库",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "长文档不能直接向量化，需要切成小块。切分策略直接影响检索效果——太小丢失上下文，太大检索不精准。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["切分策略", "chunk大小", "适用场景"],
                "rows": [
                  ["固定长度", "512 tokens", "通用文档"],
                  ["按段落", "以\\n\\n为界", "文章、论文"],
                  ["按句子", "以句号/换行为界", "FAQ、对话"],
                  ["重叠切分", "相邻chunk重叠100字", "避免关键信息被切断"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "文档切分与批量入库",
                "code": "function splitText(text, chunkSize = 500, overlap = 100) {\n  const chunks = []\n  let start = 0\n  while (start < text.length) {\n    const end = Math.min(start + chunkSize, text.length)\n    chunks.push(text.slice(start, end))\n    start += chunkSize - overlap\n  }\n  return chunks\n}\n\nasync function indexDocument(title, content) {\n  const chunks = splitText(content)\n  const insertStmt = db.prepare(\n    'INSERT INTO chunks (content, embedding) VALUES (?, ?)'\n  )\n  for (const chunk of chunks) {\n    const embedding = await getEmbedding(chunk)\n    insertStmt.run(chunk, JSON.stringify(embedding))\n  }\n  console.log(`已索引 ${chunks.length} 个文本块`)\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "检索增强生成",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "RAG完整流程：用户提问 → 向量检索相关文档 → 将检索结果注入prompt → 大模型基于上下文生成回答。检索是手段，增强是效果——让LLM在回答时\"看到\"它训练数据之外的知识。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "完整RAG流程",
                "code": "import OpenAI from 'openai'\n\nconst client = new OpenAI({\n  apiKey: 'sk-xxx',\n  baseURL: 'https://api.deepseek.com/v1',\n})\n\nasync function ragQuery(userQuestion) {\n  // 1. 向量检索\n  const relevantDocs = await searchSimilar(userQuestion, 3)\n\n  // 2. 构建上下文\n  const context = relevantDocs.map(doc => doc.content).join('\\n\\n---\\n\\n')\n\n  // 3. 构建增强prompt + 调用大模型\n  const completion = await client.chat.completions.create({\n    model: 'deepseek-chat',\n    messages: [\n      { role: 'system', content: `根据以下参考资料回答用户问题。\n参考资料中没有的信息请如实告知。\n\n参考资料：\n${context}` },\n      { role: 'user', content: userQuestion },\n    ],\n  })\n\n  return {\n    answer: completion.choices[0].message.content,\n    sources: relevantDocs,\n  }\n}\n\nconst result = await ragQuery('如何使用sqlite-vec存储向量？')\nconsole.log(result.answer)\nconsole.log('参考来源:', result.sources)"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "ReAct智能体",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "ReAct原理",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "ReAct = Reasoning + Acting。LLM交替进行思考(Thought)和行动(Action)，从外部观察(Observation)中获取反馈，循环直到得出最终答案(Final Answer)。与普通函数调用的区别：ReAct让LLM自主决定什么时候想、什么时候做、什么时候停。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["环节", "英文", "说明", "谁产生"],
                "rows": [
                  ["思考", "Thought", "分析现状，决定下一步做什么", "LLM"],
                  ["行动", "Action", "调用工具（搜索/计算/查库）", "LLM决定 + 代码执行"],
                  ["观察", "Observation", "工具执行的结果", "工具返回"],
                  ["最终答案", "Final Answer", "综合所有信息后给出结论", "LLM"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "text",
                "filename": "ReAct循环示例（自然语言）",
                "code": "用户提问：北京和上海今天哪个更热？\n\nThought: 我需要查北京和上海今天的温度\nAction: getWeather(city=\"北京\")\nObservation: 北京今天28°C\n\nThought: 还需要上海的温度\nAction: getWeather(city=\"上海\")\nObservation: 上海今天25°C\n\nThought: 北京28°C > 上海25°C，北京更热\nFinal Answer: 北京今天更热，28°C vs 上海25°C"
              }
            ]
          },
          {
            "id": "l2",
            "title": "手写ReAct Agent",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用原生fetch实现ReAct循环。关键：prompt中要求LLM按Thought/Action/Observation格式输出，代码解析这个格式，执行Action后回传Observation，循环直到出现Final Answer。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "手写ReAct Agent",
                "code": "import OpenAI from 'openai'\n\nconst client = new OpenAI({\n  apiKey: 'sk-xxx',\n  baseURL: 'https://api.deepseek.com/v1',\n})\n\nconst reactPrompt = `你是一个智能助手。按以下格式响应：\n\nThought: 你的思考过程\nAction: 工具名(参数)\nObservation: 工具执行结果\n...（可重复多次）\nFinal Answer: 最终答案\n\n可用工具：\n- getWeather(city): 查询城市天气\n- searchWeb(query): 搜索互联网\n- calculate(expression): 数学计算`\n\nasync function reactAgent(userQuestion) {\n  const messages = [\n    { role: 'system', content: reactPrompt },\n    { role: 'user', content: userQuestion }\n  ]\n\n  while (true) {\n    const completion = await client.chat.completions.create({\n      model: 'deepseek-chat',\n      messages,\n    })\n    const text = completion.choices[0].message.content\n\n    // 出现Final Answer，返回\n    if (text.includes('Final Answer:')) {\n      return text.split('Final Answer:')[1].trim()\n    }\n\n    // 解析Action并执行\n    const actionMatch = text.match(/Action: (\\w+)\\((.+)\\)/)\n    if (actionMatch) {\n      const [, toolName, args] = actionMatch\n      const result = await executeTool(toolName, args)\n      // 将Thought+Action+Observation回传给LLM\n      messages.push({ role: 'assistant', content: text })\n      messages.push({ role: 'user', content: `Observation: ${result}` })\n    } else {\n      // 没有Action也没有Final Answer，重新提示\n      messages.push({ role: 'user', content: '请继续，按格式输出Action或Final Answer' })\n    }\n  }\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "ReAct多工具协同",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "ReAct的真正威力：让LLM自主编排多个工具的调用顺序。搜索 + 计算 + 对比 = 一个完整的研究任务。工具之间不互通，LLM是唯一的决策中枢。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "多工具协同实战",
                "code": "// 问题：「最新iPhone销量比三星多多少万台？」\n// ReAct自动编排：搜索iPhone销量 → 搜索三星销量 → 计算差值 → 回答\n\nconst tools = {\n  searchWeb: async (query) => { /* 搜索 */ },\n  calculate: async (expr) => { /* 计算 */ eval(expr).toString() },\n}\n\nasync function executeTool(name, args) {\n  switch (name) {\n    case 'searchWeb':\n      const result = await tools.searchWeb(args)\n      return JSON.stringify(result)\n    case 'calculate':\n      return tools.calculate(args)\n    default:\n      return `工具 ${name} 不存在`\n  }\n}\n\n// ReAct agent会自动：\n// Step 1: searchWeb(\"iPhone 2024销量\") → 5000万台\n// Step 2: searchWeb(\"三星 2024销量\") → 3200万台\n// Step 3: calculate(\"5000 - 3200\") → 1800\n// Final Answer: iPhone比三星多卖1800万台"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "ReAct = 手写prompt格式 + agent loop + 工具集。50行代码就能实现LangChain AgentExecutor的核心能力。理解原理后，框架只是语法糖。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "LangChain",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "环境配置",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "LangChain.js v1 按功能拆包，按需安装。核心抽象在 @langchain/core，模型集成在 @langchain/openai，工具类在 langchain。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["包", "用途"],
                "rows": [
                  ["@langchain/core", "核心抽象：Runnable、消息、Prompt"],
                  ["@langchain/openai", "GPT 模型 + OpenAI Embeddings"],
                  ["@langchain/community", "第三方 Loader、向量库等"],
                  ["langchain", "文本分割、工具等工具类"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "bash",
                "filename": "安装",
                "code": "npm install langchain @langchain/core @langchain/openai"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "已废弃禁止使用：LLMChain（用 LCEL pipe() 替代）、RetrievalQA / ConversationalRetrievalQAChain（用 LCEL 手动构建）、AgentExecutor（旧版）。Node.js 要求 20+。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "调用大模型",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "统一使用 ChatModel，输入消息数组，输出 AIMessage。用 .invoke() 单次调用、.stream() 流式输出、.batch() 并发批量。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["参数", "说明", "默认值"],
                "rows": [
                  ["model", "模型名称", "gpt-4o-mini"],
                  ["temperature", "随机性 0~2", "1"],
                  ["maxTokens", "最大输出 token", "模型上限"],
                  ["streaming", "是否流式", "false"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "基础调用 + 流式",
                "code": "import { ChatOpenAI } from '@langchain/openai'\nimport { HumanMessage, SystemMessage } from '@langchain/core/messages'\n\nconst model = new ChatOpenAI({\n  model: 'gpt-4o-mini',\n  temperature: 0,\n})\n\n// 基础调用\nconst res = await model.invoke([\n  new SystemMessage('你是一名代码助手'),\n  new HumanMessage('用 JS 写个防抖函数'),\n])\nconsole.log(res.content)\n\n// 流式输出\nconst stream = await model.stream([\n  new HumanMessage('解释一下 TCP 三次握手'),\n])\nfor await (const chunk of stream) {\n  process.stdout.write(chunk.content)\n}\n\n// 批量并发\nconst results = await model.batch([\n  [new HumanMessage('什么是闭包？')],\n  [new HumanMessage('什么是原型链？')],\n])"
              }
            ]
          },
          {
            "id": "l3",
            "title": "链式组合 LCEL",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "一切皆 Runnable，用 .pipe() 串联。每个组件输入/输出类型对齐即可，类似 Unix 管道。核心模式：PromptTemplate → ChatModel → OutputParser。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "基础链",
                "code": "import { ChatOpenAI } from '@langchain/openai'\nimport { ChatPromptTemplate } from '@langchain/core/prompts'\nimport { StringOutputParser } from '@langchain/core/output_parsers'\n\nconst model = new ChatOpenAI({ model: 'gpt-4o-mini' })\n\nconst prompt = ChatPromptTemplate.fromMessages([\n  ['system', '你是一名{role}'],\n  ['human', '{question}'],\n])\n\nconst parser = new StringOutputParser()\n\n// pipe() 串联\nconst chain = prompt.pipe(model).pipe(parser)\n\nconst result = await chain.invoke({\n  role: '资深前端工程师',\n  question: '解释一下 Event Loop',\n})\nconsole.log(result) // 直接是 string"
              },
              {
                "id": "b3",
                "type": "text",
                "content": "扩展能力：RunnableLambda 插入自定义函数、RunnablePassthrough.assign() 透传并附加字段（如 RAG 检索结果）、RunnableParallel 并发执行多条链后合并结果。"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "javascript",
                "filename": "RunnablePassthrough + RunnableParallel",
                "code": "import { RunnableLambda, RunnablePassthrough } from '@langchain/core/runnables'\n\n// RunnableLambda：把任意函数包成 Runnable\nconst trimmer = RunnableLambda.from(\n  (text: string) => text.trim().slice(0, 500)\n)\n\n// RunnablePassthrough.assign：扩展字段\nconst enhancedChain = RunnablePassthrough.assign({\n  context: (input) => fetchContext(input.question), // 注入检索结果\n}).pipe(prompt).pipe(model).pipe(parser)\n\n// RunnableParallel：并发执行\nimport { RunnableParallel } from '@langchain/core/runnables'\nconst parallel = RunnableParallel.from({\n  summary: summaryChain,\n  keywords: keywordChain,\n})\nconst { summary, keywords } = await parallel.invoke({ text: '...' })"
              },
              {
                "id": "b5",
                "type": "tip",
                "content": "LCEL 通用方法：.invoke(input) 单次、.stream(input) 流式、.batch([i1,i2]) 并发批量、.pipe(next) 串联、.withConfig({runName}) 追踪标记。"
              }
            ]
          },
          {
            "id": "l4",
            "title": "结构化输出",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用 withStructuredOutput() 绑定 Zod Schema，模型直接返回类型安全的 JS 对象，无需手动 JSON.parse。底层自动处理 function calling 取结构 + JSON Schema 约束。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "结构化输出基础",
                "code": "import { ChatOpenAI } from '@langchain/openai'\nimport { z } from 'zod'\n\nconst PersonSchema = z.object({\n  name: z.string().describe('姓名'),\n  age: z.number().describe('年龄'),\n  skills: z.array(z.string()).describe('技能列表'),\n})\n\nconst model = new ChatOpenAI({ model: 'gpt-4o-mini' })\nconst structured = model.withStructuredOutput(PersonSchema)\n\nconst result = await structured.invoke(\n  '小明今年28岁，会 TypeScript 和 React'\n)\n\nconsole.log(result.name)   // \"小明\"  ← 类型安全\nconsole.log(result.age)    // 28\nconsole.log(result.skills) // [\"TypeScript\", \"React\"]"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "结合 PromptTemplate",
                "code": "import { ChatPromptTemplate } from '@langchain/core/prompts'\n\nconst ReviewSchema = z.object({\n  sentiment: z.enum(['positive', 'negative', 'neutral']),\n  score: z.number().min(1).max(5).describe('评分 1-5'),\n  summary: z.string().max(100).describe('简短总结'),\n  pros: z.array(z.string()).describe('优点'),\n  cons: z.array(z.string()).describe('缺点'),\n})\n\nconst prompt = ChatPromptTemplate.fromTemplate(\n  '分析这条商品评论:\\n\\n{review}'\n)\n\nconst chain = prompt.pipe(\n  model.withStructuredOutput(ReviewSchema)\n)\n\nconst analysis = await chain.invoke({\n  review: '物流很快，但包装破损了，产品质量还行',\n})\n\nconsole.log(analysis.sentiment) // \"negative\"\nconsole.log(analysis.score)     // 3\nconsole.log(analysis.pros)      // [\"物流快\"]\nconsole.log(analysis.cons)      // [\"包装破损\"]"
              },
              {
                "id": "b4",
                "type": "tip",
                "content": "结构化输出依赖模型的 function calling 能力，需 gpt-4o / gpt-4o-mini 及以上。Zod 类型：.string() .number() .boolean() .enum() .array() .optional()，用 .describe() 告诉模型字段含义。"
              }
            ]
          },
          {
            "id": "l5",
            "title": "RAG检索增强生成",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "RAG 两阶段：索引阶段（文档→分块→Embedding→向量库），查询阶段（问题→检索相关块→拼Prompt→LLM→回答）。LangChain 提供 Loader、Splitter、VectorStore 一站式工具链。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["步骤", "技术", "说明"],
                "rows": [
                  ["1. 加载文档", "TextLoader / PDFLoader", "加载各种格式文档"],
                  ["2. 分块", "RecursiveCharacterTextSplitter", "chunkSize=500, chunkOverlap=50"],
                  ["3. 向量化", "OpenAIEmbeddings", "text-embedding-3-small"],
                  ["4. 存储检索", "VectorStore.asRetriever(k=4)", "MemoryVectorStore / Chroma / Pinecone"],
                  ["5. 生成回答", "LCEL 串联", "RunnablePassthrough 注入检索结果"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "索引阶段：建库",
                "code": "import { TextLoader } from 'langchain/document_loaders/fs/text'\nimport { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'\nimport { OpenAIEmbeddings } from '@langchain/openai'\nimport { MemoryVectorStore } from 'langchain/vectorstores/memory'\n\n// 1. 加载文档\nconst loader = new TextLoader('./docs/handbook.txt')\nconst docs = await loader.load()\n\n// 2. 分块（chunkSize=500, chunkOverlap=50）\nconst splitter = new RecursiveCharacterTextSplitter({\n  chunkSize: 500, chunkOverlap: 50,\n})\nconst chunks = await splitter.splitDocuments(docs)\n\n// 3. 向量化 + 存库\nconst vectorStore = await MemoryVectorStore.fromDocuments(\n  chunks,\n  new OpenAIEmbeddings({ model: 'text-embedding-3-small' })\n)"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "javascript",
                "filename": "查询阶段：LCEL检索链",
                "code": "import { RunnablePassthrough } from '@langchain/core/runnables'\nimport { StringOutputParser } from '@langchain/core/output_parsers'\nimport { ChatPromptTemplate } from '@langchain/core/prompts'\n\nconst model = new ChatOpenAI({ model: 'gpt-4o-mini' })\nconst retriever = vectorStore.asRetriever({ k: 4 })\nconst formatDocs = (docs) => docs.map((d) => d.pageContent).join('\\n\\n')\n\nconst ragPrompt = ChatPromptTemplate.fromMessages([\n  ['system', '根据以下上下文回答问题，不知道就说不知道。\\n\\n{context}'],\n  ['human', '{question}'],\n])\n\n// LCEL 构建 RAG 链（不用已废弃的 RetrievalQA）\nconst ragChain = RunnablePassthrough.assign({\n  context: (input) =>\n    retriever.invoke(input.question).then(formatDocs),\n})\n  .pipe(ragPrompt)\n  .pipe(model)\n  .pipe(new StringOutputParser())\n\nconst answer = await ragChain.invoke({\n  question: '员工年假有几天？',\n})\nconsole.log(answer)"
              },
              {
                "id": "b5",
                "type": "tip",
                "content": "向量库选型：MemoryVectorStore（本地开发/原型）、Chroma（本地持久化）、Pinecone（云端生产）、pgvector（已有 PostgreSQL 时优选）。检索 k 值 3~6 为宜，太少召回不全，太多干扰模型。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch8",
        "title": "LangGraph",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "State状态",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "State是LangGraph的核心——图里所有节点共享的数据容器。用Annotation.Root()定义字段和类型，支持reducer（如messages用concat累积）。State让每个节点无副作用：接收当前state，返回要更新的字段。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["概念", "说明", "示例"],
                "rows": [
                  ["Annotation.Root", "定义State的字段和类型", "Annotation.Root({ input: Annotation<string> })"],
                  ["Annotation<T>", "单个字段的类型声明", "Annotation<string> / Annotation<number>"],
                  ["reducer", "字段合并策略", "messages用concat累积，普通字段直接覆盖"],
                  ["default", "字段默认值", "Annotation<string>({ default: () => '' })"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "State定义",
                "code": "import { StateGraph, Annotation } from '@langchain/langgraph'\n\nconst State = Annotation.Root({\n  // 普通字段：直接覆盖\n  input: Annotation<string>,\n  result: Annotation<string>,\n  // 消息列表：reducer累积（追加而不是覆盖）\n  messages: Annotation<any[]>({\n    reducer: (current, incoming) => current.concat(incoming),\n    default: () => [],\n  }),\n  // 带默认值\n  stepCount: Annotation<number>({ default: () => 0 }),\n})\n\n// State是图的生命线——所有节点读写同一个State，数据自动流转"
              }
            ]
          },
          {
            "id": "l2",
            "title": "Node节点",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Node是图的执行单元——一个纯函数，接收当前State，返回要更新的字段（部分更新，自动合并）。Node不修改全局变量，不产生副作用，输入输出全靠State。定义完节点和边后，.compile() 编译成图，.invoke(initialState) 传入初始State执行。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "Node节点定义 → compile → invoke",
                "code": "// 每个Node是一个 async (state) => partialState 的函数\nasync function llmNode(state) {\n  const response = await callLLM(state.messages)\n  return { messages: [response] }  // 只返回要更新的字段，自动合并到State\n}\n\nasync function ragNode(state) {\n  const docs = await searchSimilar(state.input, 3)\n  return { result: docs.map(d => d.content).join('\\n---\\n') }\n}\n\n// .compile() 编译成可执行图\nconst graph = new StateGraph(State)\n  .addNode('llm', llmNode)\n  .addNode('rag', ragNode)\n  .addEdge('__start__', 'llm')\n  .addEdge('llm', 'rag')\n  .addEdge('rag', '__end__')\n  .compile()  // 编译图\n\n// .invoke(initialState) 传入初始状态，执行整张图\nconst result = await graph.invoke({\n  input: 'Vue3和React的区别？',\n  messages: [],\n})\n// invoke 后 result 包含所有节点更新后的完整 State"
              }
            ]
          },
          {
            "id": "l3",
            "title": "Edge边",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Edge是图中的固定箭头——A完成后必定去B。addEdge(source, target)连接两个节点。__start__是特殊入口节点，__end__是出口。固定边适合顺序流水线：加载→处理→输出。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "固定边示例",
                "code": "const graph = new StateGraph(State)\n  .addNode('stepA', stepA)\n  .addNode('stepB', stepB)\n  .addNode('stepC', stepC)\n  .addEdge('__start__', 'stepA')  // 入口 → A\n  .addEdge('stepA', 'stepB')      // A → B（固定，A完成必定去B）\n  .addEdge('stepB', 'stepC')      // B → C\n  .addEdge('stepC', '__end__')    // C → 出口\n  .compile()\n\n// 执行顺序：__start__ → stepA → stepB → stepC → __end__\n// 这就是最简单的顺序流水线，功能等同于Chain"
              }
            ]
          },
          {
            "id": "l4",
            "title": "条件边",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "addConditionalEdges根据state动态选择下一个节点——路由函数返回节点名字符串，LangGraph根据返回值决定走哪条路。这是智能体决策的核心：不是死板的流水线，而是LLM自主选择路径。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "条件边示例",
                "code": "const State = Annotation.Root({\n  query: Annotation<string>,\n  intent: Annotation<string>,\n  answer: Annotation<string>,\n})\n\n// LLM判断意图\nasync function routerNode(state) {\n  const reply = await callLLM(\n    `判断意图，只回复一个词(search/rag/chat)：${state.query}`\n  )\n  return { intent: reply.trim() }\n}\n\nasync function searchNode(state) {\n  const result = await searchWeb(state.query)\n  return { answer: JSON.stringify(result) }\n}\n\nasync function ragNode(state) {\n  return { answer: await ragQuery(state.query) }\n}\n\nasync function chatNode(state) {\n  return { answer: await callLLM(state.query) }\n}\n\n// 路由函数：根据state.intent返回下个节点名\nfunction routeByIntent(state) {\n  if (state.intent === 'search') return 'search'\n  if (state.intent === 'rag') return 'rag'\n  return 'chat'\n}\n\nconst graph = new StateGraph(State)\n  .addNode('router', routerNode)\n  .addNode('search', searchNode)\n  .addNode('rag', ragNode)\n  .addNode('chat', chatNode)\n  .addEdge('__start__', 'router')\n  .addConditionalEdges('router', routeByIntent, {\n    search: 'search', rag: 'rag', chat: 'chat',\n  })\n  .addEdge('search', '__end__')\n  .addEdge('rag', '__end__')\n  .addEdge('chat', '__end__')\n  .compile()"
              }
            ]
          },
          {
            "id": "l5",
            "title": "循环",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "条件边指向当前节点自身——就形成了循环。模型调用工具 → 判断是否还需调工具 → 是就回到工具节点 → 否则结束。这就是ReAct的循环逻辑：LangGraph用图结构清晰表达了while循环。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "循环实现",
                "code": "const AgentState = Annotation.Root({\n  messages: Annotation<any[]>({\n    reducer: (a, b) => a.concat(b),\n    default: () => [],\n  }),\n})\n\nasync function callModel(state) {\n  const response = await callLLM(state.messages, tools)\n  return { messages: [response] }\n}\n\n// 模型返回tool_calls → 去执行工具，否则 → 结束\nfunction shouldContinue(state) {\n  const last = state.messages[state.messages.length - 1]\n  if (last.tool_calls?.length) return 'tools'\n  return '__end__'\n}\n\nasync function toolNode(state) {\n  const last = state.messages[state.messages.length - 1]\n  const results = []\n  for (const tc of last.tool_calls) {\n    results.push(await executeTool(tc))\n  }\n  return { messages: results }\n}\n\nconst graph = new StateGraph(AgentState)\n  .addNode('agent', callModel)\n  .addNode('tools', toolNode)\n  .addEdge('__start__', 'agent')\n  .addConditionalEdges('agent', shouldContinue, { tools: 'tools' })\n  .addEdge('tools', 'agent')  // ← 工具回agent，形成循环\n  .compile()\n\n// 执行流程：agent → (有工具调用?) → tools → agent → (还有?) → tools → ... → __end__"
              }
            ]
          },
          {
            "id": "l6",
            "title": "thread_id会话管理",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "LangGraph通过Checkpoint + thread_id自动管理会话。每次invoke后状态自动快照，下次传入相同thread_id自动恢复上下文。不需要手写messages数组管理，不需要Redis存会话——Checkpoint全自动。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["概念", "说明"],
                "rows": [
                  ["Checkpoint", "每次Node执行后自动保存State快照"],
                  ["thread_id", "会话唯一标识，同一thread_id串起多轮对话"],
                  ["MemorySaver", "内存存储checkpoint（生产用SqliteSaver/PostgresSaver）"],
                  ["config", "{ configurable: { thread_id: 'xxx' } }，传给invoke"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "thread_id会话管理",
                "code": "import { MemorySaver } from '@langchain/langgraph'\n\nconst checkpointer = new MemorySaver()\n\nconst graph = new StateGraph(AgentState)\n  .addNode('agent', agentNode)\n  .addNode('tools', toolNode)\n  .addEdge('__start__', 'agent')\n  .addConditionalEdges('agent', shouldContinue, { tools: 'tools' })\n  .addEdge('tools', 'agent')\n  .compile({ checkpointer })  // 开启自动检查点\n\n// 第一次对话\nconst config = { configurable: { thread_id: 'user-session-123' } }\nawait graph.invoke({\n  messages: [{ role: 'user', content: '我叫张三' }]\n}, config)\n\n// 第二次对话（同一thread_id，自动恢复上下文）\nconst res = await graph.invoke({\n  messages: [{ role: 'user', content: '我叫什么？' }]\n}, config)\n// 答：张三 ✓ — 不需要手写messages数组，Checkpoint全自动"
              }
            ]
          }
        ]
      },
      {
        "id": "ch9",
        "title": "LangGraph智能体实战",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "ToolNode集成",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "LangGraph内置ToolNode自动处理工具调用。关键：ToolNode自动读取上一条消息的tool_calls → 执行对应函数 → 将结果封装为role:'tool'消息返回。State的messages用concat reducer，ToolNode返回的消息自动追加到消息列表末尾——不需要手动push messages、不需要手动维护消息数组。这是LangGraph相比手写ReAct最大的便利。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "ToolNode + zod工具定义",
                "code": "import { ToolNode } from '@langchain/langgraph/prebuilt'\nimport { tool } from '@langchain/core/tools'\nimport { z } from 'zod'\n\n// 用zod定义工具（比手写JSON Schema更简洁）\nconst getWeather = tool(\n  async ({ city }) => {\n    const res = await fetch(`https://api.weather.com/${city}`)\n    return res.json()\n  },\n  {\n    name: 'getWeather',\n    description: '获取指定城市天气',\n    schema: z.object({ city: z.string().describe('城市名称') }),\n  }\n)\n\nconst searchWeb = tool(\n  async ({ query }) => {\n    const res = await fetch(`https://api.search.com?q=${query}`)\n    return res.json()\n  },\n  {\n    name: 'searchWeb',\n    description: '搜索互联网获取实时信息',\n    schema: z.object({ query: z.string().describe('搜索关键词') }),\n  }\n)\n\nconst tools = [getWeather, searchWeb]\nconst toolNode = new ToolNode(tools)  // 一行搞定工具执行\n\n// 模型绑定tools\nconst modelWithTools = model.bindTools(tools)\n\n// ToolNode自动：解析tool_calls → 执行函数 → 回传role:'tool'消息"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "ToolNode 自动管理 messages：不用写 messages.push({role:'tool', ...})，不用管 tool_call_id 回传。ToolNode 读取最后一轮的 tool_calls → 执行工具 → return { messages: results }，State 的 messages reducer(concat) 自动追加到列表末尾。这就是手写 agent loop 和 LangGraph 最核心的区别。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "ReAct自主编排Agent",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用LangGraph图实现ReAct模式：模型思考→调用工具→观察结果→再思考→直到给出最终答案。图的循环结构天然匹配ReAct的Thought→Action→Observation循环。和手写while循环是同一套逻辑，但图让编排可视化、可调试、可持久化。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "LangGraph ReAct Agent",
                "code": "const AgentState = Annotation.Root({\n  messages: Annotation<any[]>({\n    reducer: (a, b) => a.concat(b),\n    default: () => [],\n  }),\n})\n\nconst tools = [getWeather, searchWeb, sendEmail]\nconst toolNode = new ToolNode(tools)\nconst modelWithTools = model.bindTools(tools)\n\n// Agent节点：模型思考（Thought）并决定Action\nasync function agentNode(state) {\n  const systemMsg = {\n    role: 'system',\n    content: '你是智能助手。可用工具：getWeather, searchWeb, sendEmail。\\n自主决定何时调用工具，何时给出最终答案。'\n  }\n  const response = await modelWithTools.invoke([systemMsg, ...state.messages])\n  return { messages: [response] }\n}\n\n// ReAct路由：有tool_calls → 执行工具(Observation) → 回agent再思考\nfunction reactRouter(state) {\n  const last = state.messages.at(-1)\n  return last.tool_calls?.length ? 'tools' : '__end__'\n}\n\nconst reactGraph = new StateGraph(AgentState)\n  .addNode('agent', agentNode)\n  .addNode('tools', toolNode)\n  .addEdge('__start__', 'agent')\n  .addConditionalEdges('agent', reactRouter, { tools: 'tools' })\n  .addEdge('tools', 'agent')  // Observation → Thought（ReAct循环核心）\n  .compile()\n\n// 这就是一个完整的ReAct智能体：图结构 = while循环，ToolNode = 工具执行，条件边 = 决策路由"
              }
            ]
          },
          {
            "id": "l3",
            "title": "完整智能体：全能力串联",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "综合课程全部能力：用LangGraph编排一个完整智能体 = RAG检索(ch5) + 工具调用(ch3) + Skills路由(ch4) + ReAct决策循环(ch6) + Checkpoint会话持久化。一张图串起整门课。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "完整智能体图",
                "code": "import { StateGraph, Annotation, MemorySaver } from '@langchain/langgraph'\nimport { ToolNode } from '@langchain/langgraph/prebuilt'\n\nconst AgentState = Annotation.Root({\n  messages: Annotation<any[]>({ reducer: (a, b) => a.concat(b), default: () => [] }),\n  ragContext: Annotation<string>,\n  activeSkill: Annotation<string>,\n})\n\n// 节点1：Skills路由\nasync function skillRouter(state) {\n  const skill = await routeSkill(state.messages.at(-1).content)\n  return { activeSkill: skill?.name || 'general' }\n}\n\n// 节点2：RAG检索\nasync function ragSearch(state) {\n  const docs = await searchSimilar(state.messages.at(-1).content, 3)\n  return { ragContext: docs.map(d => d.content).join('\\n---\\n') }\n}\n\n// 节点3：Agent决策（ReAct Thought + Action）\nasync function agentThink(state) {\n  const systemPrompt = `你是智能助手。\n当前Skill：${state.activeSkill}\n知识库参考：${state.ragContext}`\n  const msgs = [{ role: 'system', content: systemPrompt }, ...state.messages]\n  const response = await modelWithTools.invoke(msgs)\n  return { messages: [response] }\n}\n\n// 节点4：工具执行\nconst toolNode = new ToolNode([getWeather, searchWeb, queryDB, sendEmail])\n\nfunction reactRoute(state) {\n  return state.messages.at(-1).tool_calls?.length ? 'tools' : '__end__'\n}\n\nconst checkpointer = new MemorySaver()\nconst fullAgent = new StateGraph(AgentState)\n  .addNode('skillRouter', skillRouter)\n  .addNode('ragSearch', ragSearch)\n  .addNode('agentThink', agentThink)\n  .addNode('tools', toolNode)\n  .addEdge('__start__', 'skillRouter')\n  .addEdge('skillRouter', 'ragSearch')\n  .addEdge('ragSearch', 'agentThink')\n  .addConditionalEdges('agentThink', reactRoute, { tools: 'tools' })\n  .addEdge('tools', 'agentThink')  // Observation → Thought\n  .compile({ checkpointer })\n\n// 使用\nconst config = { configurable: { thread_id: 'session-1' } }\nconst res = await fullAgent.invoke({\n  messages: [{ role: 'user', content: '帮我查北京天气，结合部署文档给建议' }]\n}, config)"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "课程全串联：LLM调用(ch1) → 提示词(ch2) → 工具调用(ch3) → Skills(ch4) → RAG(ch5) → ReAct(ch6) → LangChain(ch7) → LangGraph基础(ch8) → LangGraph智能体(ch9)。从30行原生fetch到一张Graph图，你就是大模型开发工程师。"
              }
            ]
          }
        ]
      }
    ]
  },

{
    "id": "frontend-agent",
    "pathId": "frontend",
    "title": "智能体项目",
    "desc": "Agent SDK全栈、AIGC、RAG、支付、部署",
    "icon": "🤖",
    "chapters": [
      {
        "id": "ch1",
        "title": "智能体概述",
        "lessons": [
          {
            "id": "l1", "title": "什么是智能体",
            "blocks": [
              { "id": "b1", "type": "text", "content": "智能体 = 人设 + RAG + 函数调用 + 自主编排。人设决定你是谁，RAG 决定你知道什么，函数调用决定你能做什么，自主编排决定你怎么做。四要素缺一不可。" },
              { "id": "b2", "type": "table", "headers": ["要素", "作用", "实现方式"], "rows": [["人设", "定义角色和行为", "systemPrompt"], ["RAG", "领域知识", "知识库检索 + prompt注入"], ["函数调用", "执行工具", "Skill / MCP / 内置工具"], ["自主编排", "决策下一步做什么", "LLM 自主路由 + agent loop"]] },
              { "id": "b3", "type": "tip", "content": "四要素配齐 = 完整智能体。缺任何一项都是半成品。" }
            ]
          },
          {
            "id": "l2", "title": "技术架构总览",
            "blocks": [
              { "id": "b1", "type": "table", "headers": ["层", "技术", "作用"], "rows": [["前端", "Vue3 + Vite", "智能体控制台"], ["后端", "Node.js + Express", "API + 工具执行"], ["AI", "DeepSeek / 千问 / 豆包", "LLM 引擎"], ["向量库", "sqlite-vec", "RAG 知识检索"], ["编排", "Claude Agent SDK", "工作流 + 智能体编排"], ["部署", "K3s + Knative", "生产环境上线"]] },
              { "id": "b2", "type": "text", "content": "关键设计：前端不直接调 LLM，全部通过后端中转。后端统一管理 API Key、工具注册、知识库，前端只负责展示和交互。" }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "多模态",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1", "title": "多模态概念",
            "blocks": [
              { "id": "b1", "type": "text", "content": "多模态 = 输入可以是文字、图片、音频、视频，输出也可以是文字、图片、音频、视频。不是单一的文字→文字，而是任意形式→任意形式。" },
              { "id": "b2", "type": "table", "headers": ["输入 ↓ / 输出 →", "文字", "图片", "音频", "视频"], "rows": [["文字", "LLM对话", "文生图", "TTS语音", "文生视频"], ["图片", "图片描述", "图生图/修图", "-", "图生视频"], ["音频", "语音转文字", "-", "声音克隆", "数字人口播"], ["视频", "视频摘要", "视频截图", "-", "视频编辑"]] }
            ]
          },
          {
            "id": "l2", "title": "视觉多模态（图片+视频理解）",
            "blocks": [
              { "id": "b1", "type": "text", "content": "GPT-4o、千问-VL、豆包等模型支持图片输入。上传一张图片，LLM 能理解内容、回答问题、提取信息。" },
              { "id": "b2", "type": "code", "language": "javascript", "filename": "图片理解API", "code": "// 图片 → 文字（千问-VL / GPT-4o）\nconst response = await fetch('https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation', {\n  method: 'POST',\n  headers: { 'Authorization': 'Bearer sk-xxx' },\n  body: JSON.stringify({\n    model: 'qwen-vl-max',\n    input: {\n      messages: [{\n        role: 'user',\n        content: [\n          { image: 'https://example.com/photo.jpg' },\n          { text: '这张图片里有什么？' }\n        ]\n      }]\n    }\n  })\n})" }
            ]
          },
          {
            "id": "l3", "title": "语音多模态（TTS + STT）",
            "blocks": [
              { "id": "b1", "type": "text", "content": "语音多模态已不需要单独 TTS。阿里 Qwen-Omni 等模型支持音频和文字同时输入输出——用户说话，模型直接回语音+文字，端到端一次完成。STT→LLM→TTS 的三段式已是过去式。" },
              { "id": "b2", "type": "table", "headers": ["能力", "API", "方向"], "rows": [["STT 语音识别", "Whisper / 豆包语音识别", "音频 → 文字"], ["TTS 语音合成", "豆包语音合成", "文字 → 音频"], ["端到端语音", "Qwen-Omni / 豆包端到端", "音频+文字同时输入输出，无需 TTS"]] }
            ]
          },
          {
            "id": "l4", "title": "跨模态串联实战",
            "blocks": [
              { "id": "b1", "type": "text", "content": "多模态的真正威力在于串联：语音说需求 → 识别为文字 → LLM理解 → 调用AIGC生成图片/视频 → 返回结果。一个请求穿越4种模态。" },
              { "id": "b2", "type": "code", "language": "javascript", "filename": "跨模态串联", "code": "// 语音 → 文字 → 生成图片 → 返回图片\nasync function voiceToImage(audioBuffer) {\n  // 1. 音频 → 文字（STT）\n  const text = await speechToText(audioBuffer)\n  \n  // 2. 文字 → 提示词（LLM）\n  const prompt = await callLLM(`优化为图片描述：${text}`)\n  \n  // 3. 文字 → 图片（文生图）\n  const image = await generateImage(prompt)\n  \n  return { text, prompt, image }\n}" },
              { "id": "b3", "type": "tip", "content": "超级智能体的目标：用户用任何方式输入，智能体用最合适的模态输出。说话→出图、拍照→出视频、文字→出PPT。" }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "AIGC",
        "lessons": [
          {
            "id": "l1", "title": "图片生成（文生图、图生图、AI修图）",
            "blocks": [
              { "id": "b1", "type": "text", "content": "调用通义万相 / 即梦 API，输入文字描述即可生成图片。支持文生图、图生图、图片编辑三种模式。" },
              { "id": "b2", "type": "table", "headers": ["能力", "API", "关键参数"], "rows": [["文生图", "通义万相 wan2.1-t2i", "prompt + size"], ["图生图", "通义万相 image2image", "ref_img + prompt"], ["AI修图", "即梦 CV API", "图片 + 修改指令"]] }
            ]
          },
          {
            "id": "l2", "title": "视频生成（文生视频、数字人）",
            "blocks": [
              { "id": "b1", "type": "text", "content": "视频生成调用 HappyHorse / Seedance，数字人调用即梦 OmniHuman 或阿里 VideoRetalk 唇形同步。" },
              { "id": "b2", "type": "table", "headers": ["能力", "API", "说明"], "rows": [["文生视频", "HappyHorse / Seedance", "prompt → 视频，异步轮询"], ["数字人口播", "OmniHuman", "照片 + 音频 → 唇形同步视频"], ["视频换口型", "VideoRetalk / HeyGem", "已有视频 + 新音频 → 口型替换，HeyGem 开源免部署"]] }
            ]
          },
          {
            "id": "l3", "title": "音频生成（音乐、TTS、声音克隆）",
            "blocks": [
              { "id": "b1", "type": "text", "content": "音频三件套：豆包 TTS 文字转语音、声音复刻克隆音色、Suno/Mureka 生成音乐。" },
              { "id": "b2", "type": "table", "headers": ["能力", "API", "说明"], "rows": [["TTS 语音", "豆包语音合成", "文字 → 自然语音，支持流式"], ["声音克隆", "豆包声音复刻2.0", "5秒样本 → 克隆音色"], ["音乐生成", "Suno / Mureka", "风格+歌词 → 完整歌曲"]] }
            ]
          },
          {
            "id": "l4", "title": "漫剧与漫画生成",
            "blocks": [
              { "id": "b1", "type": "text", "content": "漫剧 = 漫画 + AI配音 + 简单动画。流程：AI生成漫画分镜 → 拆分角色和场景 → TTS配音 → 合成视频。" },
              { "id": "b2", "type": "table", "headers": ["步骤", "工具", "产出"], "rows": [["1. 剧本/分镜", "DeepSeek/Claude", "漫画脚本 + 分镜描述"], ["2. 漫画生成", "通义万相/即梦", "漫画风格图片"], ["3. 配音", "豆包TTS + 声音克隆", "角色配音"], ["4. 合成", "node-canvas + FFmpeg", "漫剧视频"]] }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "工作流",
        "lessons": [
          {
            "id": "l1", "title": "可视化 vs 代码工作流",
            "blocks": [
              { "id": "b1", "type": "text", "content": "可视化拖拽工作流（Dify、n8n、Coze）适合非开发者快速验证。AI 时代代码工作流是主流：LLM 能写代码改代码，但改不了拖拽节点；代码可 Git 版本控制，JSON 配置合并冲突难解决；50 个节点在画布上眼花缭乱，50 个函数在代码里清晰可控。" },
              { "id": "b2", "type": "table", "headers": ["对比", "可视化工作流", "代码工作流"], "rows": [["AI 友好", "❌ LLM 改不了", "✅ LLM 直接写"], ["版本管理", "❌ JSON 难 diff", "✅ Git 清晰"], ["复杂度", "❌ 节点多眼花", "✅ 函数清晰"], ["灵活性", "❌ 平台限制", "✅ 无限制"]] },
              { "id": "b3", "type": "tip", "content": "结论：开发自己的智能体，用代码定义工作流。LangGraph 的 StateGraph 是最佳实践。" }
            ]
          },
          {
            "id": "l2", "title": "StateGraph节点定义",
            "blocks": [
              { "id": "b1", "type": "text", "content": "每个节点 = 一个工具或一个 AI 决策步骤。定义输入 State，节点接收 State 返回更新。简单清晰，LLM 能理解并自动生成。" },
              { "id": "b2", "type": "code", "language": "javascript", "filename": "节点定义模式", "code": "const State = Annotation.Root({\n  userInput: Annotation<string>,\n  toolResult: Annotation<string>,\n  response: Annotation<string>\n})\n\n// 每个节点是一个独立函数\nasync function imageGenerateNode(state) {\n  const img = await generateImage(state.userInput)\n  return { toolResult: img.url }\n}\n\nasync function respondNode(state) {\n  const reply = await callLLM(`已生成图片：${state.toolResult}`)\n  return { response: reply }\n}" }
            ]
          },
          {
            "id": "l3", "title": "条件分支与循环",
            "blocks": [
              { "id": "b1", "type": "text", "content": "工作流不是一条直线。LLM 判断用户意图 → 走不同分支（图片/视频/音乐/PPT）。任务完成后回到入口等待下一步指令，形成循环。" },
              { "id": "b2", "type": "code", "language": "javascript", "filename": "条件路由", "code": "function routeAfterIntent(state) {\n  if (state.intent === 'image') return 'imageAgent'\n  if (state.intent === 'video') return 'videoAgent'\n  if (state.intent === 'ppt') return 'pptAgent'\n  return 'generalAgent'\n}\n\nconst graph = new StateGraph(State)\n  .addNode('router', routerNode)\n  .addConditionalEdges('router', routeAfterIntent)\n  .compile()" }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "智能体开发",
        "lessons": [
          {
            "id": "l1",
            "title": "什么是专业智能体",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              { "id": "b1", "type": "text", "content": "智能体 = 人设 + RAG + 函数调用 + 自主编排。专业智能体就是在特定领域配专属 RAG 知识库的智能体——代码智能体背后是技术文档库，PPT智能体背后是模板库，漫剧智能体背后是素材风格库。不同的库，不同的专业能力。" },
              { "id": "b2", "type": "table", "headers": ["专业智能体", "RAG 知识库", "人设"], "rows": [["代码智能体", "技术文档/API文档", "全栈工程师"], ["PPT智能体", "模板库/行业报告", "PPT专家"], ["漫剧智能体", "漫画素材/风格库", "漫画家"], ["音乐智能体", "和弦库/歌词模板", "音乐制作人"], ["简历智能体", "简历模板/JD库", "HR顾问"], ["英语智能体", "口语题库/语法规则", "英语私教"]] }
            ]
          },
          {
            "id": "l2", "title": "RAG知识库搭建",
            "blocks": [
              { "id": "b1", "type": "text", "content": "专业智能体的核心是 RAG 知识库。每个智能体有自己的知识库：代码智能体有技术文档，PPT智能体有模板库，漫剧智能体有素材风格库。" },
              { "id": "b2", "type": "table", "headers": ["步骤", "技术", "说明"], "rows": [["1. 文档上传", "multer 接收文件", "支持 PDF/Word/Markdown/TXT"], ["2. 文档切分", "按段落切 chunk", "每块 500 字，重叠 100"], ["3. 向量化", "text-embedding-3-small", "1536维向量"], ["4. 存储", "sqlite-vec", "SQLite 向量扩展"], ["5. 检索", "余弦相似度", "TOP-K 返回"]] }
            ]
          },
          {
            "id": "l3", "title": "自定义RAG智能体",
            "blocks": [
              { "id": "b1", "type": "text", "content": "用户上传自己的文档，自动创建专属智能体。上传 → 自动切分 → 自动向量化 → 立即可问答。每个用户的数据隔离存储。" },
              { "id": "b2", "type": "table", "headers": ["流程", "接口", "说明"], "rows": [["上传文档", "POST /api/kb/upload", "接受文件，返回 kbId"], ["自动建库", "后台自动切分+向量化", "大文件异步处理"], ["查询", "POST /api/kb/{kbId}/query", "问题 → 检索 → LLM生成回答"]] },
              { "id": "b3", "type": "tip", "content": "关键设计：每个用户 userId 隔离知识库，RLS 数据安全。用户只能查自己的知识库。" }
            ]
          },
          {
            "id": "l4", "title": "PPT智能体",
            "blocks": [
              { "id": "b1", "type": "text", "content": "PPT智能体 = RAG（模板库）+ AI 内容生成。选择模板 → AI 根据主题生成每页内容 → 填充到模板 → 导出 pptx。" },
              { "id": "b2", "type": "table", "headers": ["步骤", "技术"], "rows": [["模板库", "预置5-10套不同风格模板（科技/商务/简约）"], ["内容生成", "LLM 根据主题生成标题+要点+配图描述"], ["图片生成", "AIGC 生成配图"], ["导出", "pptx 库生成可下载的 PPT 文件"]] }
            ]
          },
          {
            "id": "l5", "title": "漫剧智能体",
            "blocks": [
              { "id": "b1", "type": "text", "content": "漫剧智能体 = RAG（漫画风格/角色素材库）+ 分镜生成 + TTS配音 + 合成。输入故事梗概，自动生成完整漫剧。" },
              { "id": "b2", "type": "table", "headers": ["环节", "AI 能力", "产出"], "rows": [["剧本", "LLM 生成分镜脚本", "分镜文本"], ["角色图", "文生图生成角色形象", "角色 PNG"], ["背景", "文生图生成场景背景", "背景 PNG"], ["配音", "TTS + 声音克隆", "角色音频"], ["合成", "FFmpeg 合成视频", "最终漫剧 MP4"]] }
            ]
          },
          {
            "id": "l6", "title": "音乐智能体",
            "blocks": [
              { "id": "b1", "type": "text", "content": "音乐智能体 = RAG（音乐风格/和弦进行/歌词模板）+ Suno / Mureka + TTS。输入主题风格，生成完整歌曲。" },
              { "id": "b2", "type": "table", "headers": ["能力", "实现"], "rows": [["歌词生成", "LLM + 歌词模板 RAG"], ["旋律生成", "Suno API（风格+歌词→歌曲）"], ["人声替换", "声音克隆替换 Suno 默认人声"], ["BGM", "纯音乐模式生成背景音乐"]] }
            ]
          },
          {
            "id": "l7", "title": "简历智能体",
            "blocks": [
              { "id": "b1", "type": "text", "content": "简历智能体 = RAG（简历模板/行业JD库）+ AI 内容润色。用户输入基本信息，AI 根据目标职位生成定制化简历。" },
              { "id": "b2", "type": "table", "headers": ["步骤", "说明"], "rows": [["信息收集", "前端表单收集：基本信息、工作经历、技能"], ["内容生成", "LLM 根据职位 JD 生成简历要点"], ["模板套用", "用户选择模板风格，AI 填充内容"], ["导出", "PDF 导出 + 一键部署为在线简历页"]] }
            ]
          },
          {
            "id": "l8", "title": "英语智能体",
            "blocks": [
              { "id": "b1", "type": "text", "content": "英语智能体 = RAG（语法规则/口语场景库）+ AI 语音交互。能口语对话、语法纠错、发音评测，就像一个 AI 英语私教。" },
              { "id": "b2", "type": "table", "headers": ["能力", "技术", "说明"], "rows": [["口语对话", "STT → LLM → TTS", "语音输入 → AI回复 → 语音输出"], ["语法纠错", "LLM + 语法规则 RAG", "输入句子 → 纠正语法 → 解释原因"], ["发音评测", "Whisper + 音素对比", "用户朗读 → 对比标准发音 → 打分"], ["场景练习", "情景对话模板", "机场/餐厅/面试等场景角色扮演"]] }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "通用智能体",
        "lessons": [
          {
            "id": "l1",
            "title": "什么是通用智能体",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "通用智能体 = 人设 + 全工具权限 + Skills路由 + 自主编排。与专业智能体不同，通用智能体不限定领域——它能写代码、做PPT、画图、搜资料、部署项目，任何任务都能尝试完成。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["对比", "专业智能体", "通用智能体"],
                "rows": [
                  ["定位", "垂直领域专家", "全能助手"],
                  ["RAG知识库", "专属领域知识库", "不限定，按需检索"],
                  ["工具权限", "领域工具（如PPT生成）", "全工具：Bash+Write+Read+WebFetch+Skills"],
                  ["Skills", "固定1-2个Skill", "Skills路由器，按需加载"],
                  ["适用场景", "PPT、简历、英语等专项任务", "任意任务，自动路由到专业能力"]
                ]
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "通用智能体的核心价值：用户不需要知道该找哪个专业智能体。说一句话，通用智能体自动判断意图，路由到对应的 Skill 或专业智能体去执行。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "通用智能体架构",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "通用智能体的架构 = 意图路由层 + Skills调度层 + 工具执行层。用户输入 → LLM判断意图 → 匹配Skill/专业智能体 → 加载对应prompt和工具 → 执行 → 返回结果。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "通用智能体核心",
                "code": "// 通用智能体 = 全量Skills + 意图路由\nconst generalAgent = {\n  systemPrompt: '你是通用智能助手，能做任何事情。\\n根据用户意图自动选择合适的Skill或专业智能体来执行任务。',\n  tools: ['Bash', 'Write', 'Read', 'WebFetch', 'Grep'],\n  skills: skillsRegistry,\n  agents: { ppt: pptAgent, code: codeAgent, comic: comicAgent, music: musicAgent, resume: resumeAgent, english: englishAgent }\n}\n\n// 意图路由：LLM判断用户想做什么\nasync function routeIntent(userInput) {\n  const prompt = `意图分类：\\n- code: 写代码、调试、项目开发\\n- ppt: 做PPT、演示文稿\\n- image: 图片生成、修图\\n- video: 视频生成、数字人\\n- music: 音乐生成\\n- comic: 漫剧、漫画\\n- resume: 简历\\n- english: 英语学习\\n- general: 通用问题\\n\\n用户输入：${userInput}\\n只返回分类名称。`\n  const intent = await callLLM(prompt)\n  return intent.trim()\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "接入外部Skills",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "通用智能体通过Skills路由接入外部技能。用户上传一个 .md 文件 → 自动注册为Skill → 通用智能体的意图路由自动识别 → 匹配时加载完整流程。外部Skill的热插拔机制：新增Skill无需重启智能体，注册后立即可用。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "Skills热插拔",
                "code": "// Skills注册中心\nclass SkillsRegistry {\n  skills = new Map()\n\n  register(name, skillDef) {\n    this.skills.set(name, {\n      name,\n      triggers: skillDef.triggers,\n      prompt: skillDef.prompt || fs.readFileSync(skillDef.file, 'utf-8'),\n      tools: skillDef.tools || []\n    })\n  }\n\n  loadFromDir(dir) {\n    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'))\n    for (const file of files) {\n      const content = fs.readFileSync(dir + '/' + file, 'utf-8')\n      const { name, triggers } = parseSkillMeta(content)\n      this.register(name, { file: dir + '/' + file, triggers })\n    }\n  }\n\n  async match(userInput) {\n    const candidates = Array.from(this.skills.values())\n    const prompt = candidates.map(s => s.name + ': ' + s.triggers.join(', ')).join('\\n')\n    const reply = await callLLM('可用Skills：\\n' + prompt + '\\n\\n用户输入：' + userInput + '\\n返回最匹配的Skill名称')\n    return this.skills.get(reply.trim()) || null\n  }\n}\n\n// 通用智能体对话流程\nasync function generalAgentChat(userInput, userId) {\n  const intent = await routeIntent(userInput)\n  if (specializedAgents[intent]) {\n    return specializedAgents[intent].chat(userInput, userId)\n  }\n  const skill = await skillsRegistry.match(userInput)\n  if (skill) return executeSkill(skill, userInput, userId)\n  return generalChat(userInput, userId)\n}"
              },
              {
                "id": "b3",
                "type": "table",
                "headers": ["Skill接入方式", "说明", "示例"],
                "rows": [
                  ["本地 .md 文件", "放在 skills/ 目录自动加载", "skills/code-reviewer.md"],
                  ["用户上传", "用户通过界面上传Skill文件", "自定义业务Skill"],
                  ["MCP服务", "通过MCP协议连接外部工具服务", "数据库查询、第三方API"],
                  ["社区市场", "下载其他开发者分享的Skill", "社区Skill仓库"]
                ]
              }
            ]
          },
          {
            "id": "l4",
            "title": "通用智能体 vs 专业智能体 协作",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "通用智能体和专业智能体不是替代关系，而是协作关系。用户对通用智能体说\"帮我做一份关于AI的PPT\" → 通用智能体识别意图为 ppt → 路由到PPT专业智能体 → PPT智能体用自己的RAG模板库和专业流程完成。用户只需面对一个入口。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "智能体协作编排",
                "code": "// 多智能体协作示例\nasync function collaborativeTask(userInput) {\n  // 用户: \"做一份AI行业分析PPT，要有数据图表和配图\"\n  // 1. 通用智能体拆解任务\n  const subtasks = await decomposeTask(userInput)\n  // 2. 并行调用专业智能体\n  const [data, images] = await Promise.all([\n    webSearchAgent.search(\"2025 AI行业报告数据\"),\n    imageAgent.generate([\"AI概念图\", \"数据图表背景\"])\n  ])\n  // 3. PPT智能体整合所有素材\n  const ppt = await pptAgent.generate({ topic: \"AI行业分析\", data, images })\n  return ppt\n}"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "一句话总结：通用智能体是入口和路由器，专业智能体是执行者。Skills是连接两者的桥梁。用户只看到一个智能体，背后是一个智能体团队在协作。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "外部技能Skills",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1",
            "title": "Skills概念与对比",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Skill = prompt + tools + 执行流程，封装为 .md 文件即插即用。函数调用是原子工具（一把螺丝刀），Skill 是复合能力（修一整台电脑）。渐进式暴露：平时只暴露名字和触发条件，匹配时展开完整流程。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["对比", "函数调用", "MCP", "Skill"],
                "rows": [
                  ["定义方式", "JSON Schema + 代码", "启动外部服务", ".md 文件"],
                  ["粒度", "单个函数", "一组函数", "完整业务能力"],
                  ["开发量", "写注册代码", "搭服务+配置", "写一个文件"],
                  ["LLM路由", "手写路由", "协议发现", "LLM自动匹配"],
                  ["版本管理", "代码管理", "服务版本", "Git纯文本"],
                  ["适合场景", "内部工具", "跨服务通信", "业务能力封装"]
                ]
              }
            ]
          },
          {
            "id": "l2",
            "title": "编写项目Skill",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "在智能体项目中，Skill 文件统一放在 skills/ 目录。每个 Skill 声明：触发条件（何时启用）、工具权限（能用的工具）、执行流程（步骤编排）。新增一个 .md 文件即新增一个智能体能力。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "markdown",
                "filename": "skills/code-reviewer.md",
                "code": "# Code Reviewer Skill\n\n## 触发条件\n用户提到\"代码审查\"、\"review\"、\"CR\"、\"帮我看看这段代码\"\n\n## 工具权限\nBash, Write, Read\n\n## 执行流程\n1. 读取用户指定的文件或代码片段\n2. 检查：命名规范、潜在bug、安全漏洞、性能问题\n3. 对每个问题标注严重程度（严重/一般/建议）\n4. 输出Markdown格式的审查报告，包含修复建议\n5. 如果用户要求，直接原地修复代码"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "markdown",
                "filename": "skills/deploy.md",
                "code": "# Deploy Skill\n\n## 触发条件\n用户提到\"部署\"、\"上线\"、\"发布\"、\"配置域名\"\n\n## 工具权限\nBash, Write, Read, WebFetch\n\n## 执行流程\n1. 确认目标服务器 IP 和域名\n2. 构建 Docker 镜像（自动检测项目语言选基础镜像）\n3. 推送镜像到 Docker Registry\n4. 生成 Knative Service YAML\n5. kubectl apply 部署\n6. 配置域名和自动 HTTPS\n7. curl 验证部署结果"
              }
            ]
          },
          {
            "id": "l3",
            "title": "Skills路由调度",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "多个 Skill 并存需要路由机制。用户请求 → LLM 判断意图 → 匹配最合适的 Skill → 加载该 Skill 的完整 prompt 和执行流程 → 进入 agent loop。路由本身是 LLM 决策——这正是工具调用的自然延伸。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "Skills路由实现",
                "code": "const skillsRegistry = {\n  'code-reviewer': { file: 'code-reviewer.md', triggers: ['审查', 'review', 'CR'] },\n  'deploy': { file: 'deploy.md', triggers: ['部署', '上线', '发布'] },\n  'ppt-generator': { file: 'ppt-generator.md', triggers: ['PPT', '演示文稿', '幻灯片'] },\n}\n\nasync function routeSkill(userInput) {\n  const skillList = Object.entries(skillsRegistry)\n    .map(([name, s]) => `${name}: ${s.triggers.join(', ')}`).join('\\n')\n\n  const reply = await callLLM(`根据用户输入匹配最合适的Skill：\n可用Skills：\n${skillList}\n\n用户输入：${userInput}\n返回匹配的Skill名称（不匹配返回\"none\"）`)\n\n  const skillName = reply.trim()\n  if (skillName === 'none') return null\n\n  const skillMd = fs.readFileSync(`skills/${skillsRegistry[skillName].file}`, 'utf-8')\n  return { name: skillName, prompt: skillMd }\n}\n\n// 路由结果注入system prompt\nconst skill = await routeSkill('帮我部署这个项目到服务器')\nif (skill) {\n  systemPrompt = `你拥有以下Skill能力：\n${skill.prompt}\n\n严格按Skill执行流程操作。`\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "Skills市场与协作",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Skills 天然适合团队协作和社区共享。纯文本 .md 文件 + Git 版本控制 = 能力随代码迭代。智能体项目的每个智能体 = 一个人设 system prompt + 一个知识库(RAG) + 一组 Skills。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["Skill类型", "说明", "示例"],
                "rows": [
                  ["工具型", "封装一个工具使用流程", "部署、构建、测试"],
                  ["审查型", "审查/分析/报告", "代码审查、安全审计、性能分析"],
                  ["生成型", "生成特定产出物", "PPT、简历、文档、图表"],
                  ["组合型", "多个Skill嵌套调用", "先部署再验证再通知"]
                ]
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "Skill 的本质是用自然语言编程。以前封装能力需要写 SDK/库/API，现在一个 .md 文件 + LLM 就能实现同等效果。智能体项目的核心竞争力不是你写了多少代码，而是你封装了多少高质量的 Skills。"
              }
            ]
          }
        ]
      },
      {
        "id": "ch8",
        "title": "代码智能体",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1", "title": "为什么直接接入Claude Code",
            "blocks": [
              { "id": "b1", "type": "text", "content": "自己做通用智能体 = 写 agent loop + 工具编排 + 流式处理 + 错误重试，而且不一定智能。Claude Agent SDK 已经是一个生产级通用智能体，Bash/Write/Read/WebFetch 全内置，直接接入就是商业级。" },
              { "id": "b2", "type": "table", "headers": ["对比", "自己开发", "Claude Agent SDK"], "rows": [["智能程度", "取决于你的 prompt 和工具设计", "Claude 官方调优，生产级"], ["工具丰富度", "自己注册，有限", "Bash+Write+Read+WebFetch+Grep 全内置"], ["流式处理", "自己处理 SSE", "SDK for await 原生支持"], ["维护成本", "持续优化 prompt 和工具", "SDK 升级即可"]] },
              { "id": "b3", "type": "tip", "content": "一句话：不要重新发明轮子。Claude Code 已经是商业级通用智能体，你只需要包一层 Docker 沙箱 + 前端界面。" }
            ]
          },
          {
            "id": "l2", "title": "SDK 全能力一览",
            "blocks": [
              { "id": "b1", "type": "text", "content": "Claude Agent SDK 内置工具覆盖了绝大多数商业场景。写代码、生成 PPT、爬虫抓数据、浏览器操作，一个 SDK 全搞定。" },
              { "id": "b2", "type": "table", "headers": ["能力", "实现方式", "典型场景"], "rows": [["写代码", "Write + Bash 执行", "完整项目开发、脚本、自动化"], ["PPT 生成", "Bash 执行 python-pptx 脚本", "主题PPT、数据报告PPT"], ["爬虫抓数据", "Bash 执行 curl/python requests", "竞品分析、舆情监控"], ["浏览器操作", "Bash 执行 Playwright 脚本", "截图、表单填写、数据采集"], ["数据分析", "Bash 执行 Python pandas", "Excel分析、图表生成"], ["文件处理", "Read + Write + Bash", "PDF转换、图片处理、文档生成"]] },
              { "id": "b3", "type": "code", "language": "javascript", "filename": "全能力接入示例", "code": "import { query } from \"@anthropic-ai/claude-agent-sdk\"\n\nconst prompt = `\n在 /tmp/sandbox 目录下完成以下任务：\n1. 爬取 https://news.ycombinator.com 首页标题\n2. 把标题分析整理成 PPT\n3. 用 Playwright 给首页截图\n4. 所有产物放到 output/ 目录\n`\n\nfor await (const msg of query({\n  prompt,\n  options: {\n    allowedTools: [\"Bash\", \"Write\", \"Read\", \"WebFetch\"],\n    permissionMode: \"bypassPermissions\",\n  },\n})) { /* 流式推到前端 */ }" }
            ]
          },
          {
            "id": "l3", "title": "沙箱 + SDK 集成实战",
            "blocks": [
              { "id": "b1", "type": "text", "content": "生产环境：用户对话 → 后端创建 Docker 沙箱（挂载工作目录）→ SDK 在沙箱内自主操作 → 前端流式显示。SDK 的 workDir 指向 Docker 挂载目录，代码直接落入沙箱。" },
              { "id": "b2", "type": "code", "language": "javascript", "filename": "沙箱+SDK集成", "code": "// 1. 创建沙箱\nconst workDir = `/tmp/sandbox/${uuid()}`\nexecSync(`mkdir -p ${workDir}`)\nconst cid = execSync(`docker run -d --rm --network=none --memory=1g ` +\n  `-v ${workDir}:/workspace -w /workspace ` +\n  `node:20 bash -c \"npm i -g playwright; sleep 3600\"`).toString().trim()\n\n// 2. SDK 在工作目录自主操作\nfor await (const msg of query({\n  prompt: userPrompt,\n  options: { allowedTools: [\"Bash\",\"Write\",\"Read\",\"WebFetch\"], workDir },\n})) { ws.send(JSON.stringify(msg)) } // WebSocket 推前端\n\n// 3. 产物打包下载\nexecSync(`docker cp ${cid}:/workspace/output ./output`)" }
            ]
          }
        ]
      },
      {
        "id": "ch9",
        "title": "平台托管",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1", "title": "用户代码托管架构",
            "blocks": [
              { "id": "b1", "type": "text", "content": "用户在前端用 Claude Code 智能体生成的代码，需要一键托管到平台。核心：每个用户一个独立 Docker 容器 + 独立子域名。用户生成 → 自动构建镜像 → 推送 → 部署 → 分配 URL。" },
              { "id": "b2", "type": "table", "headers": ["步骤", "技术", "说明"], "rows": [["1. 代码生成", "Claude Agent SDK", "用户在平台生成项目代码"], ["2. 自动构建", "Docker build", "根据语言自动选基础镜像"], ["3. 推送仓库", "Docker Registry", "每个用户一个 namespace"], ["4. 部署", "K3s + Knative", "一行 YAML 创建 Knative Service"], ["5. 分配URL", "Nginx + 子域名", "用户ID.平台域名.com"]] }
            ]
          },
          {
            "id": "l2", "title": "K3s + Knative 多租户隔离",
            "blocks": [
              { "id": "b1", "type": "text", "content": "K3s 轻量 K8s + Knative 无服务 = 最省资源的用户代码托管方案。每个用户一个 Knative Service，namespace 隔离，Scale to Zero 不浪费资源。" },
              { "id": "b2", "type": "code", "language": "yaml", "filename": "用户项目 YAML 模板", "code": "apiVersion: serving.knative.dev/v1\nkind: Service\nmetadata:\n  name: user-{userId}-project\n  namespace: user-{userId}\nspec:\n  template:\n    spec:\n      containers:\n        - image: registry.example.com/user-{userId}/project:latest\n          ports:\n            - containerPort: 3000\n          resources:\n            requests:\n              cpu: 100m\n              memory: 128Mi\n            limits:\n              cpu: 500m\n              memory: 512Mi" },
              { "id": "b3", "type": "tip", "content": "Knative Scale to Zero：用户项目 30 秒无访问自动休眠，省资源。用户访问时自动唤醒，冷启动 < 1 秒。" }
            ]
          },
          {
            "id": "l3", "title": "自动域名 + HTTPS",
            "blocks": [
              { "id": "b1", "type": "text", "content": "每个用户项目分配独立子域名，自动 HTTPS。User-A 的项目跑在 a.platform.com，User-B 跑在 b.platform.com。" },
              { "id": "b2", "type": "code", "language": "javascript", "filename": "域名分配逻辑", "code": "// 用户生成项目后，自动分配域名\nasync function deployUserProject(userId, projectId, code) {\n  // 1. 写入代码\n  const dir = `/workspace/users/${userId}/${projectId}`\n  fs.mkdirSync(dir, { recursive: true })\n  fs.writeFileSync(`${dir}/index.html`, code)\n\n  // 2. 构建镜像\n  const image = `registry.platform.com/user-${userId}/${projectId}`\n  execSync(`docker build -t ${image} ${dir}`)\n  execSync(`docker push ${image}`)\n\n  // 3. 部署 + 分配域名\n  const yaml = buildKnativeYAML(userId, projectId, image)\n  execSync(`kubectl apply -f ${yaml}`)\n\n  // 4. 返回可访问URL\n  return `https://${projectId}.platform.com`\n}" }
            ]
          }
        ]
      },
      {
        "id": "ch10",
        "title": "激活码兑换",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1", "title": "激活码商业模式",
            "blocks": [
              { "id": "b1", "type": "text", "content": "通过抖音/小红书/淘宝等第三方平台卖激活码，用户拿到码后在网站兑换权益。适合做低价引流（9.9元试用），降低用户首次付费门槛。" },
              { "id": "b2", "type": "table", "headers": ["环节", "说明"], "rows": [["平台卖码", "抖音小店/淘宝上架虚拟商品，自动发货"], ["用户兑换", "访问网站 → 输入激活码 → 绑定账号"], ["权益开通", "后台验证后开通 VIP / 智能体次数 / 专属功能"], ["安全性", "激活码唯一 + 过期时间 + 使用次数限制"]] }
            ]
          },
          {
            "id": "l2", "title": "激活码生成与验证",
            "blocks": [
              { "id": "b1", "type": "text", "content": "后台管理生成一批激活码 → 导出给平台 → 用户兑换时校验唯一性、有效期、使用次数。" },
              { "id": "b2", "type": "code", "language": "javascript", "filename": "激活码接口", "code": "// 生成激活码\napp.post('/api/admin/codes/generate', async (req, res) => {\n  const { count, plan, days } = req.body\n  const codes = []\n  for (let i = 0; i < count; i++) {\n    const code = 'VIP-' + crypto.randomUUID().slice(0, 8).toUpperCase()\n    await db.run('INSERT INTO codes (code, plan, days) VALUES (?, ?, ?)', [code, plan, days])\n    codes.push(code)\n  }\n  res.json({ codes })\n})\n\n// 用户兑换激活码\napp.post('/api/codes/redeem', async (req, res) => {\n  const { code } = req.body\n  const row = await db.get('SELECT * FROM codes WHERE code = ? AND used = 0', [code])\n  if (!row) return res.status(400).json({ error: '激活码无效或已使用' })\n  \n  await db.run('UPDATE codes SET used = 1, usedBy = ?, usedAt = datetime(\"now\") WHERE id = ?', [req.userId, row.id])\n  await db.run('UPDATE users SET vip = 1, vipExpire = datetime(\"now\", \"+\" || ? || \" days\") WHERE id = ?', [row.days, req.userId])\n  \n  res.json({ success: true, vipExpire: `开通${row.days}天` })\n})" }
            ]
          }
        ]
      },
      {
        "id": "ch11",
        "title": "微信支付",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1", "title": "微信支付接入流程",
            "blocks": [
              { "id": "b1", "type": "text", "content": "用户直接访问网站 → 选择套餐 → 微信扫码支付 → 回调开通 VIP。微信支付分 JSAPI（公众号/小程序）和 Native（扫码）两种，课程用 Native 扫码支付，最通用。" },
              { "id": "b2", "type": "table", "headers": ["步骤", "操作", "说明"], "rows": [["1. 统一下单", "后端调用微信支付 API", "生成支付链接/二维码"], ["2. 用户支付", "扫码支付", "微信 App 内完成"], ["3. 支付回调", "微信 POST 通知后端", "验证签名，开通权益"], ["4. 前端轮询", "查支付状态", "支付成功跳转结果页"]] }
            ]
          },
          {
            "id": "l2", "title": "支付接口实现",
            "blocks": [
              { "id": "b1", "type": "text", "content": "后端实现统一下单 + 支付回调。核心注意：回调签名验证（防伪造）、订单幂等（防止重复开通）。" },
              { "id": "b2", "type": "code", "language": "javascript", "filename": "微信支付", "code": "// 统一下单\napp.post('/api/pay/create', async (req, res) => {\n  const { plan, amount } = req.body\n  const orderNo = 'ORD' + Date.now()\n  \n  // 调用微信 Native 支付 API\n  const payRes = await fetch('https://api.mch.weixin.qq.com/v3/pay/transactions/native', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + getToken() },\n    body: JSON.stringify({\n      appid: WX_APPID, mchid: WX_MCHID,\n      description: `超级智能体 - ${plan}`,\n      out_trade_no: orderNo,\n      amount: { total: amount * 100, currency: 'CNY' },\n      notify_url: 'https://yourdomain.com/api/pay/notify'\n    })\n  })\n  \n  const { code_url } = await payRes.json()\n  res.json({ orderNo, code_url }) // 前端用code_url生成二维码\n})\n\n// 支付回调\napp.post('/api/pay/notify', async (req, res) => {\n  const { out_trade_no, trade_state } = req.body\n  if (trade_state !== 'SUCCESS') return res.json({ code: 'FAIL' })\n  \n  // 幂等：检查是否已处理\n  const order = await db.get('SELECT * FROM orders WHERE orderNo = ?', [out_trade_no])\n  if (order?.status === 'paid') return res.json({ code: 'SUCCESS' })\n  \n  // 开通VIP\n  await db.run('UPDATE orders SET status = \"paid\" WHERE orderNo = ?', [out_trade_no])\n  await db.run('UPDATE users SET vip = 1 WHERE id = ?', [order.userId])\n  \n  res.json({ code: 'SUCCESS' })\n})" }
            ]
          }
        ]
      },
      {
        "id": "ch12",
        "title": "项目部署",
        "video": "https://www.w3schools.com/html/mov_bbb.mp4",
        "lessons": [
          {
            "id": "l1", "title": "自有项目部署（K3s + Knative）",
            "blocks": [
              { "id": "b1", "type": "text", "content": "你自己的超级智能体项目也部署到 K3s + Knative。把整个后端打包成 Docker 镜像，Knative Service 一行 YAML 部署，自动 HTTPS、自动扩缩、零宕机更新。" },
              { "id": "b2", "type": "code", "language": "bash", "filename": "安装 K3s + Knative", "code": "# 一行安装 K3s\ncurl -sfL https://get.k3s.io | sh -\n\n# 安装 Knative + Kourier\nkubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.15.0/serving-crds.yaml\nkubectl apply -f https://github.com/knative/serving/releases/download/knative-v1.15.0/serving-core.yaml\nkubectl apply -f https://github.com/knative/net-kourier/releases/download/knative-v1.15.0/kourier.yaml\n\n# 安装 Cert Manager（自动 HTTPS）\nkubectl apply -f https://github.com/cert-manager/cert-manager/releases/download/v1.15.0/cert-manager.yaml" }
            ]
          },
          {
            "id": "l2", "title": "部署 + 域名 + HTTPS",
            "blocks": [
              { "id": "b1", "type": "text", "content": "构建镜像 → 推送 → kubectl apply → 自动获取域名和 HTTPS。传统 PM2+Nginx+certbot 手动三件套全被 Knative 替代。" },
              { "id": "b2", "type": "code", "language": "bash", "filename": "一键部署", "code": "# 构建 + 推送 + 部署\ndocker build -t registry.example.com/super-agent:v1 .\ndocker push registry.example.com/super-agent:v1\nkubectl apply -f service.yaml\n\n# 查看状态\nkubectl get ksvc super-agent\n# NAME          URL                            READY\n# super-agent   https://agent.yourdomain.com   True" }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "frontend-uniapp",
    "pathId": "frontend",
    "title": "UniApp小程序",
    "desc": "小程序、跨平台开发",
    "icon": "🐻",
    "chapters": [
      {
        "id": "ch1",
        "title": "环境搭建",
        "lessons": [
          {
            "id": "l1",
            "title": "UniApp简介",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "UniApp是一个使用Vue语法开发跨平台应用的前端框架，一套代码可编译到iOS、Android、小程序、H5等多个平台。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["平台", "支持"],
                "rows": [
                  ["iOS/Android App", "✅"],
                  ["微信小程序", "✅"],
                  ["支付宝小程序", "✅"],
                  ["H5", "✅"],
                  ["百度/字节/快手小程序", "✅"],
                  ["macOS/Windows", "✅"]
                ]
              }
            ]
          },
          {
            "id": "l2",
            "title": "创建项目",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "推荐使用HBuilderX IDE开发UniApp，也支持VS Code + CLI方式。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "bash",
                "filename": "CLI创建项目",
                "code": "npx degit dcloudio/uni-preset-vue#vite my-uni-app\n\ncd my-uni-app\nnpm install\n\n# 运行到H5\nnpm run dev:h5\n\n# 运行到微信小程序 (需配置微信开发者工具)\nnpm run dev:mp-weixin"
              }
            ]
          },
          {
            "id": "l3",
            "title": "项目结构",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["文件/目录", "说明"],
                "rows": [
                  ["pages.json", "页面路由配置"],
                  ["manifest.json", "应用配置(名称、图标、权限等)"],
                  ["App.vue", "应用入口"],
                  ["main.js", "入口文件"],
                  ["pages/", "页面目录"],
                  ["components/", "组件目录"],
                  ["static/", "静态资源"],
                  ["uni.scss", "全局样式变量"]
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "页面开发",
        "lessons": [
          {
            "id": "l1",
            "title": "页面基础",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "UniApp页面使用.vue单文件组件，结构与Vue3相同。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "index.vue",
                "code": "<template>\n  <view class='\1'>\n    <text>{{ title }}</text>\n    <button @click='\1'>点击</button>\n  </view>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst title = ref('Hello UniApp')\nfunction onTap() {\n  uni.showToast({ title: '点击了', icon: 'success' })\n}\n</script>\n\n<style>\n.container { padding: 20px; }\n</style>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "内置组件",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["组件", "用途"],
                "rows": [
                  ["<view>", "视图容器，类似div"],
                  ["<text>", "文本"],
                  ["<image>", "图片"],
                  ["<button>", "按钮"],
                  ["<input>", "输入框"],
                  ["<scroll-view>", "可滚动区域"],
                  ["<swiper>", "滑块视图容器"],
                  ["<navigator>", "页面链接"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "组件示例",
                "code": "<template>\n  <view>\n    <text>文本内容</text>\n    <image src='\1' mode='\1'></image>\n    <button type='\1'>按钮</button>\n    <input type='\1' placeholder='\1' v-model='\1'>\n    <scroll-view scroll-y style='\1'>\n      <view v-for='\1' :key='\1'>第{{ i }}项</view>\n    </scroll-view>\n    <swiper>\n      <swiper-item>页面1</swiper-item>\n      <swiper-item>页面2</swiper-item>\n    </swiper>\n    <navigator url='\1'>跳转详情</navigator>\n  </view>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst inputVal = ref('')\n</script>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "页面导航",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["API", "说明"],
                "rows": [
                  ["uni.navigateTo", "保留当前页面，跳转到新页面"],
                  ["uni.redirectTo", "关闭当前页面，跳转到新页面"],
                  ["uni.navigateBack", "关闭当前页面，返回上一页"],
                  ["uni.switchTab", "跳转到TabBar页面"],
                  ["uni.reLaunch", "关闭所有页面，打开新页面"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "导航示例",
                "code": "<template>\n  <view>\n    <button @click='\1'>跳转详情页</button>\n    <button @click='\1'>返回上一页</button>\n    <button @click='\1' open-type='\1'>回首页</button>\n  </view>\n</template>\n\n<script setup>\nimport { onLoad } from '@dcloudio/uni-app'\n\n// 接收参数 (onLoad)\nonLoad((options) => {\n  if (options.id) {\n    console.log('收到参数:', options.id)\n  }\n})\n\n// 跳转页面 (传参)\nfunction goDetail() {\n  uni.navigateTo({ url: '/pages/detail?id=123&name=测试' })\n}\n\n// 返回上一页\nfunction goBack() {\n  uni.navigateBack()\n}\n\n// 跳转到TabBar页面\nfunction goHome() {\n  uni.switchTab({ url: '/pages/index' })\n}\n</script>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "API与数据",
        "lessons": [
          {
            "id": "l1",
            "title": "网络请求",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "请求示例",
                "code": "// GET请求\nuni.request({\n  url: 'https://api.example.com/users',\n  method: 'GET',\n  success: (res) => {\n    console.log(res.data)\n  }\n})\n\n// POST请求\nuni.request({\n  url: 'https://api.example.com/users',\n  method: 'POST',\n  data: { name: '张三' },\n  success: (res) => {\n    console.log(res.data)\n  }\n})"
              }
            ]
          },
          {
            "id": "l2",
            "title": "本地存储",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["API", "说明"],
                "rows": [
                  ["uni.setStorageSync", "同步存储数据"],
                  ["uni.getStorageSync", "同步获取数据"],
                  ["uni.removeStorageSync", "同步删除数据"],
                  ["uni.clearStorageSync", "同步清空存储"]
                ]
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "存储示例",
                "code": "// 存储数据\nuni.setStorageSync('token', 'abc123')\n\n// 获取数据\nconst token = uni.getStorageSync('token')\n\n// 删除数据\nuni.removeStorageSync('token')"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "条件编译",
        "lessons": [
          {
            "id": "l1",
            "title": "平台差异化",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "使用条件编译可以在不同平台使用不同的代码。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["编译标记", "平台"],
                "rows": [
                  ["#ifdef APP-PLUS", "App"],
                  ["#ifdef H5", "H5"],
                  ["#ifdef MP-WEIXIN", "微信小程序"],
                  ["#ifdef MP-ALIPAY", "支付宝小程序"],
                  ["#ifndef", "除了指定平台外的所有平台"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "javascript",
                "filename": "条件编译示例",
                "code": "// #ifdef MP-WEIXIN\nconsole.log('这是微信小程序')\n// #endif\n\n// #ifdef H5\nconsole.log('这是H5')\n// #endif\n\n// #ifndef APP-PLUS\nconsole.log('这不是App')\n// #endif"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "ai-practice",
    "pathId": "frontend",
    "title": "Vibe Coding实战",
    "desc": "Vibe Coding、2个完整项目",
    "icon": "🤖",
    "chapters": [
      {
        "id": "ch1",
        "title": "项目架构",
        "lessons": [
          {
            "id": "l1",
            "title": "页面结构",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["页面", "功能"],
                "rows": [
                  ["首页", "学习模块入口(背单词/口语/语法/听力)"],
                  ["消息", "AI对话历史，支持继续对话"],
                  ["我的", "个人信息、VIP状态、创建智能体"],
                  ["对话页", "智能体对话，支持流式输出"],
                  ["背单词", "单词库、记忆曲线、复习计划"],
                  ["情景口语", "场景选择、角色扮演、打分反馈"],
                  ["语法", "知识点讲解、练习题"],
                  ["听力", "音频材料、听力练习"]
                ]
              }
            ]
          },
          {
            "id": "l2",
            "title": "技术架构",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["模块", "技术栈"],
                "rows": [
                  ["前端", "UniApp + Vue3"],
                  ["后端", "Node.js + Express"],
                  ["数据库", "SQLite + sqlite-vec"],
                  ["AI框架", "LangGraph"],
                  ["AI模型", "OpenAI GPT-4o"],
                  ["向量检索", "sqlite-vec"],
                  ["认证", "JWT"]
                ]
              }
            ]
          }
        ]
      },
      {
        "id": "ch2",
        "title": "个人模块",
        "lessons": [
          {
            "id": "l1",
            "title": "JWT登录",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "JWT(JSON Web Token)是一种开放标准，用于安全地传输信息作为JSON对象。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "后端JWT认证",
                "code": "import jwt from 'jsonwebtoken'\n\nconst SECRET = process.env.JWT_SECRET || 'your-secret-key'\n\n// 登录接口\napp.post('/api/auth/login', async (req, res) => {\n  const { username, password } = req.body\n  const user = await db.prepare('SELECT * FROM users WHERE username = ?').get(username)\n  if (!user || !bcrypt.compareSync(password, user.password)) {\n    return res.status(401).json({ error: '用户名或密码错误' })\n  }\n  const token = jwt.sign(\n    { id: user.id, username: user.username },\n    SECRET,\n    { expiresIn: '7d' }\n  )\n  res.json({ token, user: { id: user.id, username: user.username } })\n})\n\n// JWT验证中间件\nfunction authMiddleware(req, res, next) {\n  const token = req.headers.authorization?.replace('Bearer ', '')\n  if (!token) return res.status(401).json({ error: '未登录' })\n  try {\n    req.user = jwt.verify(token, SECRET)\n    next()\n  } catch {\n    res.status(401).json({ error: 'Token无效' })\n  }\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "登录拦截",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "UniApp中使用路由拦截器验证登录状态，未登录则跳转登录页。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "main.js 路由拦截",
                "code": "// pages.json 中配置需要登录的页面\nconst needAuthPages = ['/pages/chat/detail', '/pages/agent/create', '/pages/word/index']\n\n// 拦截器\nuni.addInterceptor('navigateTo', {\n  invoke(e) {\n    const token = uni.getStorageSync('token')\n    if (needAuthPages.some(p => e.url.includes(p)) && !token) {\n      uni.navigateTo({ url: '/pages/auth/login' })\n      return false\n    }\n  },\n  fail(err) {\n    console.log('拦截失败', err)\n  }\n})\n\n// 请求拦截器 - 自动带上Token\nuni.addInterceptor('request', {\n  invoke(e) {\n    const token = uni.getStorageSync('token')\n    if (token) {\n      e.header = e.header || {}\n      e.header.Authorization = 'Bearer ' + token\n    }\n  }\n})"
              }
            ]
          },
          {
            "id": "l3",
            "title": "RLS数据安全",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "用户所有的数据库操作必须附带用户ID，防止越权操作。在查询、修改、删除数据时都要加上userId条件，确保用户只能操作自己的数据。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "RLS数据操作示例",
                "code": "// 查询：只查自己的数据（带userId）\napp.get('/api/orders', async (req, res) => {\n  const orders = await db.prepare(\n    'SELECT * FROM orders WHERE userId = ?'\n  ).all(req.userId)\n  res.json(orders)\n})\n\n// 修改：直接附带userId，无需先查询\napp.put('/api/orders/:id', async (req, res) => {\n  const result = await db.prepare(\n    'UPDATE orders SET status = ? WHERE id = ? AND userId = ?'\n  ).run(req.body.status, req.params.id, req.userId)\n  if (result.changes === 0) return res.status(403).json({ error: '无权操作' })\n  res.json({ success: true })\n})\n\n// 删除：直接附带userId，无需先查询\napp.delete('/api/orders/:id', async (req, res) => {\n  const result = await db.prepare(\n    'DELETE FROM orders WHERE id = ? AND userId = ?'\n  ).run(req.params.id, req.userId)\n  if (result.changes === 0) return res.status(403).json({ error: '无权删除' })\n  res.json({ success: true })\n})"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "口语智能体",
        "lessons": [
          {
            "id": "l1",
            "title": "最简单的智能体：人设 + RAG",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "智能体不需要自主决策和函数调用。最简智能体 = 人设 + RAG。人设告诉它扮演什么角色（比如雅思口语教练），RAG 告诉它相关领域知识（比如口语题库）。这样就能做出一个有用的 AI 助手。"
              },
              {
                "id": "b2",
                "type": "text",
                "content": "下面以口语智能体为例：人设 = \"你是雅思口语教练\"，RAG = 口语题库知识库，用户输入 → 检索相关题目 → 注入 prompt → LLM 生成回复。不需要函数调用，不需要自主编排。"
              }
            ]
          },
          {
            "id": "l2",
            "title": "多模态支持",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "GPT-4o支持文本、图像、音频输入，可用于口语练习场景。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "多模态对话",
                "code": "// 图像理解 - 上传图片让AI分析\nasync function analyzeImage(imageBase64) {\n  const res = await openai.chat.completions.create({\n    model: 'gpt-4o',\n    messages: [{\n      role: 'user',\n      content: [\n        { type: 'text', text: '描述这张图片' },\n        { type: 'image_url', image_url: { url: 'data:image/jpeg;base64,' + imageBase64 } }\n      ]\n    }]\n  })\n  return res.choices[0].message.content\n}\n\n// 语音输入 - Whisper转文字\nasync function transcribeAudio(audioBuffer) {\n  const res = await openai.audio.transcriptions.create({\n    model: 'whisper-1',\n    file: audioBuffer\n  })\n  return res.text\n}\n\n// 语音输出 - TTS\nasync function textToSpeech(text) {\n  const res = await openai.audio.speech.create({\n    model: 'tts-1',\n    input: text,\n    voice: 'alloy'\n  })\n  return res.body\n}"
              }
            ]
          },
          {
            "id": "l3",
            "title": "函数调用",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "Function Call定义",
                "code": "// 工具定义 (Function Call)\nconst tools = [\n  {\n    type: 'function',\n    function: {\n      name: 'searchWord',\n      description: '查询单词释义和例句',\n      parameters: {\n        type: 'object',\n        properties: {\n          word: { type: 'string', description: '要查询的单词' }\n        },\n        required: ['word']\n      }\n    }\n  },\n  {\n    type: 'function',\n    function: {\n      name: 'correctGrammar',\n      description: '纠正英语语法错误',\n      parameters: {\n        type: 'object',\n        properties: {\n          sentence: { type: 'string', description: '需要纠正的句子' }\n        },\n        required: ['sentence']\n      }\n    }\n  },\n  {\n    type: 'function',\n    function: {\n      name: 'evaluatePronunciation',\n      description: '评价英语发音',\n      parameters: {\n        type: 'object',\n        properties: {\n          text: { type: 'string', description: '标准文本' },\n          audio: { type: 'string', description: 'Base64编码的音频' }\n        },\n        required: ['text', 'audio']\n      }\n    }\n  }\n]\n\n// 处理函数调用\nasync function handleToolCall(toolCall) {\n  const { name, arguments: args } = toolCall.function\n  const params = JSON.parse(args)\n  switch (name) {\n    case 'searchWord':\n      return await searchWord(params.word)\n    case 'correctGrammar':\n      return await correctGrammar(params.sentence)\n    case 'evaluatePronunciation':\n      return await evaluatePronunciation(params.text, params.audio)\n  }\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "RAG知识库",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "RAG检索",
                "code": "import Database from 'better-sqlite3'\nimport { vec } from 'sqlite-vec'\nimport OpenAI from 'openai'\n\nconst openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })\nconst db = new Database('knowledge.db')\nvec.load(db)\n\n// 向量化文本\nasync function getEmbedding(text) {\n  const res = await openai.embeddings.create({\n    model: 'text-embedding-3-small',\n    input: text.substring(0, 8000)\n  })\n  return res.data[0].embedding\n}\n\n// RAG检索\nasync function retrieveContext(query, kbId, limit = 3) {\n  const queryVec = await getEmbedding(query)\n  return db.prepare(\n    'SELECT tc.content, v.distance FROM vec_chunks v JOIN text_chunks tc ON tc.id = v.rowid JOIN documents d ON d.id = tc.docId WHERE d.kbId = ? AND v.chunk_embedding MATCH ? ORDER BY v.distance LIMIT ?'\n  ).all(kbId, new Float32Array(queryVec), limit)\n}"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "智能体",
                "code": "// LangGraph工作流定义\nconst workflow = new StateGraph({ channels }) {\n  // 节点: 理解用户意图\n  .addNode('understand', async (state) => {\n    const res = await openai.chat.completions.create({\n      model: 'gpt-4o',\n      messages: [{ role: 'user', content: state.input }]\n    })\n    return { intent: res.choices[0].message.content }\n  })\n  // 节点: RAG检索\n  .addNode('retrieve', async (state) => {\n    const docs = await retrieveContext(state.input, state.kbId)\n    return { context: docs.map(d => d.content).join('\\\\\\\n') }\n  })\n  // 节点: 生成回复\n  .addNode('generate', async (state) => {\n    const msg = state.context\n      ? '基于知识库回答: ' + state.context + '\\\\\\\n\\\\\\\n问题: ' + state.input\n      : state.input\n    const res = await openai.chat.completions.create({\n      model: 'gpt-4o',\n      messages: [{ role: 'user', content: msg }]\n    })\n    return { response: res.choices[0].message.content }\n  })\n  // 边\n  .addEdge('understand', 'retrieve')\n  .addEdge('retrieve', 'generate')\n  .compile()\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch4",
        "title": "学习模块",
        "lessons": [
          {
            "id": "l1",
            "title": "背单词",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "pages/word/index.vue",
                "code": "<template>\n  <view class='word-page'>\n    <view class='card' v-if='currentWord'>\n      <text class='word'>{{ currentWord.word }}</text>\n      <text class='phonetic'>{{ currentWord.phonetic }}</text>\n      <text class='meaning'>{{ currentWord.meaning }}</text>\n      <button @click='nextWord'>下一个</button>\n    </view>\n    <view class='stats'>\n      <text>已学习: {{ learned }}</text>\n      <text>待复习: {{ reviewCount }}</text>\n    </view>\n  </view>\n</template>\n\n<script setup>\nimport { ref, onMounted } from 'vue'\nconst currentWord = ref(null)\nconst learned = ref(0)\nconst reviewCount = ref(0)\n\nonMounted(async () => {\n  const res = await uni.request({ url: '/api/words/today' })\n  currentWord.value = res.data\n})\n\nasync function nextWord() {\n  await uni.request({ url: '/api/words/' + currentWord.value.id, method: 'POST' })\n  learned.value++\n  const res = await uni.request({ url: '/api/words/next' })\n  currentWord.value = res.data\n}\n</script>"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "单词复习算法",
                "code": "// 间隔重复算法 (Spaced Repetition)\nfunction calculateNextReview(word, quality) {\n  const now = Date.now()\n  const interval = word.reviewInterval || 1\n  const easeFactor = word.easeFactor || 2.5\n  \n  // quality: 0-5 (完全不记得到完美记住)\n  if (quality < 3) {\n    return { reviewInterval: 1, easeFactor: Math.max(1.3, easeFactor - 0.2) }\n  }\n  \n  return {\n    reviewInterval: Math.ceil(interval * easeFactor),\n    easeFactor: easeFactor + (0.1 - (5 - quality) * 0.08),\n    nextReviewAt: now + interval * 24 * 60 * 60 * 1000\n  }\n}"
              }
            ]
          },
          {
            "id": "l2",
            "title": "情景口语",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "pages/speaking/scenario.vue",
                "code": "<template>\n  <view class='speaking-page'>\n    <view class='scenario-info'>\n      <text class='title'>{{ scenario.name }}</text>\n      <text class='desc'>{{ scenario.description }}</text>\n    </view>\n    <view class='dialogue'>\n      <view v-for='(msg, i) in dialogue' :key='i' :class='['msg', msg.role]'>\n        <text>{{ msg.role === 'ai' ? 'AI教练' : '你' }}:</text>\n        <text>{{ msg.content }}</text>\n      </view>\n    </view>\n    <view class='record-area'>\n      <button @click='startRecord' v-if='!recording'>开始录音</button>\n      <button @click='stopRecord' v-else>停止</button>\n    </view>\n  </view>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst scenario = ref({ name: '机场值机', description: '练习在机场办理登机手续' })\nconst dialogue = ref([{ role: 'ai', content: 'Hello, how can I help you today?' }])\nconst recording = ref(false)\n\nasync function startRecord() {\n  recording.value = true\n  recorderManager.start({ format: 'mp3' })\n}\n\nasync function stopRecord() {\n  recording.value = false\n  const audio = recorderManager.getFilePath()\n  const result = await evaluateSpeech(dialogue.value[dialogue.value.length - 1].content, audio)\n  dialogue.value.push({ role: 'user', content: '用户音频' })\n  dialogue.value.push({ role: 'ai', content: result.feedback })\n}\n</script>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "语法学习",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "pages/grammar/index.vue",
                "code": "<template>\n  <view class='grammar-page'>\n    <view class='topic' v-for='topic in grammarTopics' :key='topic.id'>\n      <text class='title'>{{ topic.title }}</text>\n      <view class='content'>{{ topic.explanation }}</view>\n      <view class='examples'>\n        <view v-for='(ex, i) in topic.examples' :key='i' class='example'>\n          <text>{{ ex.sentence }}</text>\n          <text class='rule'>{{ ex.rule }}</text>\n        </view>\n      </view>\n      <button @click='doExercise(topic.id)'>练习</button>\n    </view>\n  </view>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst grammarTopics = ref([])\n\nasync function doExercise(topicId) {\n  uni.navigateTo({ url: '/pages/grammar/exercise?id=' + topicId })\n}\n</script>"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "语法纠错",
                "code": "async function correctGrammar(sentence) {\n  const res = await openai.chat.completions.create({\n    model: 'gpt-4o',\n    messages: [{\n      role: 'system',\n      content: '你是一个英语语法老师，检查用户输入的句子并给出纠正。'\n    }, {\n      role: 'user',\n      content: sentence\n    }]\n  })\n  return {\n    original: sentence,\n    corrected: res.choices[0].message.content\n  }\n}"
              }
            ]
          },
          {
            "id": "l4",
            "title": "听力训练",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "vue",
                "filename": "pages/listening/play.vue",
                "code": "<template>\n  <view class='listening-page'>\n    <audio :src='audioUrl' controls class='player'></audio>\n    <view class='controls'>\n      <button @click='setSpeed(0.75)'>0.75x</button>\n      <button @click='setSpeed(1)'>1x</button>\n      <button @click='setSpeed(1.25)'>1.25x</button>\n    </view>\n    <view class='exercise' v-if='showExercise'>\n      <text>{{ exercise.question }}</text>\n      <view v-for='opt in exercise.options' :key='opt'>\n        <button @click='selectAnswer(opt)'>{{ opt }}</button>\n      </view>\n    </view>\n    <button @click='showExercise = true'>答题</button>\n  </view>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst audioUrl = ref('')\nconst showExercise = ref(false)\nconst exercise = ref({ question: 'What did the speaker mention?', options: ['A', 'B', 'C', 'D'] })\n\nfunction setSpeed(speed) {\n  const audio = uni.createInnerAudioContext()\n  audio.speed = speed\n}\n\nfunction selectAnswer(opt) {\n  uni.showToast({ title: opt === 'A' ? '正确' : '错误' })\n}\n</script>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch5",
        "title": "微信支付",
        "lessons": [
          {
            "id": "l1",
            "title": "支付接入",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "流程：前端发起 → 后端统一下单 → 前端调起支付 → 支付回调"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "后端支付接口",
                "code": "// 1. 统一下单接口\napp.post('/api/payment/create', async (req, res) => {\n  const { openid, amount, description } = req.body\n  const orderNo = 'ORD' + Date.now()\n  \n  const payRes = await fetch('https://api.mch.weixin.qq.com/v3/pay/transactions/jsapi', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token },\n    body: JSON.stringify({\n      appid: '小程序AppID', mchid: '商户号', description,\n      out_trade_no: orderNo, amount: { total: amount * 100, currency: 'CNY' },\n      payer: { openid }\n    })\n  })\n  \n  const { prepay_id } = await payRes.json()\n  const payParams = generatePayParams(prepay_id)\n  res.json({ orderNo, payParams })\n})\n\n// 2. 支付回调\napp.post('/api/payment/notify', async (req, res) => {\n  const { out_trade_no, trade_state } = req.body\n  if (trade_state === 'SUCCESS') {\n    await db.prepare('UPDATE orders SET status = ? WHERE order_no = ?').run('paid', out_trade_no)\n  }\n  res.json({ code: 'SUCCESS' })\n})"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "前端支付",
                "code": "<template>\n  <view class='pay-page'>\n    <text>VIP会员: ￥{{ amount }}</text>\n    <button @click='pay'>立即支付</button>\n  </view>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst amount = ref(99)\n\nasync function pay() {\n  const { payParams } = await uni.request({\n    url: '/api/payment/create',\n    method: 'POST',\n    data: { amount: amount.value, description: 'VIP会员' }\n  })\n  uni.requestPayment({\n    ...payParams,\n    success: () => uni.showToast({ title: '支付成功' }),\n    fail: () => uni.showToast({ title: '支付取消', icon: 'none' })\n  })\n}\n</script>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch6",
        "title": "Vue管理系统",
        "lessons": [
          {
            "id": "l1",
            "title": "登录认证",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "管理后台需要独立的登录认证，管理员通过账号密码登录后获得JWT Token，后续请求携带Token进行身份验证。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "后端登录接口",
                "code": "// 管理员登录\napp.post('/api/admin/login', async (req, res) => {\n  const { username, password } = req.body\n  const user = await db.prepare(\n    'SELECT * FROM users WHERE username = ? AND role = ?'\n  ).get(username, 'admin')\n\n  if (!user || !bcrypt.compareSync(password, user.password)) {\n    return res.status(401).json({ error: '用户名或密码错误' })\n  }\n\n  const token = jwt.sign(\n    { id: user.id, username: user.username, role: 'admin' },\n    SECRET,\n    { expiresIn: '24h' }\n  )\n  res.json({ token, user: { id: user.id, username: user.username } })\n})\n\n// 权限中间件\nfunction adminMiddleware(req, res, next) {\n  const token = req.headers.authorization?.replace('Bearer ', '')\n  if (!token) return res.status(401).json({ error: '未登录' })\n  try {\n    const user = jwt.verify(token, SECRET)\n    if (user.role !== 'admin') return res.status(403).json({ error: '无权限' })\n    req.user = user\n    next()\n  } catch {\n    res.status(401).json({ error: 'Token无效' })\n  }\n}"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "登录页面",
                "code": "<template>\n  <div class='login-container'>\n    <el-card class='login-card'>\n      <h2>管理后台</h2>\n      <el-form ref='formRef' :model='form' :rules='rules'>\n        <el-form-item prop='username'>\n          <el-input v-model='form.username' placeholder='用户名' />\n        </el-form-item>\n        <el-form-item prop='password'>\n          <el-input v-model='form.password' type='password' placeholder='密码' />\n        </el-form-item>\n        <el-form-item>\n          <el-button type='primary' @click='login' :loading='loading'>登录</el-button>\n        </el-form-item>\n      </el-form>\n    </el-card>\n  </div>\n</template>\n\n<script setup>\nimport { ref, reactive } from 'vue'\nimport { useRouter } from 'vue-router'\nimport { ElMessage } from 'element-plus'\n\nconst router = useRouter()\nconst loading = ref(false)\nconst form = reactive({ username: '', password: '' })\nconst rules = {\n  username: [{ required: true, message: '请输入用户名' }],\n  password: [{ required: true, message: '请输入密码' }]\n}\n\nasync function login() {\n  loading.value = true\n  try {\n    const res = await fetch('/api/admin/login', {\n      method: 'POST',\n      headers: { 'Content-Type': 'application/json' },\n      body: JSON.stringify(form)\n    })\n    if (!res.ok) throw new Error('登录失败')\n    const data = await res.json()\n    localStorage.setItem('adminToken', data.token)\n    router.push('/admin/users')\n  } catch (e) {\n    ElMessage.error(e.message)\n  } finally {\n    loading.value = false\n  }\n}\n</script>\n\n<style scoped>\n.login-container {\n  display: flex; justify-content: center; align-items: center;\n  height: 100vh; background: #f5f5f5;\n}\n.login-card { width: 400px; }\n</style>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "用户管理CRUD",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "管理系统核心功能：用户列表、新增、编辑、删除。后端提供RESTful API，前端用Element Plus表格展示。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "后端CRUD接口",
                "code": "// 用户列表（分页）\napp.get('/api/admin/users', adminMiddleware, async (req, res) => {\n  const { page = 1, pageSize = 10, keyword = '' } = req.query\n  const users = await db.prepare(\n    'SELECT id, username, role, email, created_at FROM users WHERE username LIKE ? LIMIT ? OFFSET ?'\n  ).all('%' + keyword + '%', pageSize, (page - 1) * pageSize)\n  const total = await db.prepare(\n    'SELECT COUNT(*) as count FROM users WHERE username LIKE ?'\n  ).get('%' + keyword + '%')\n  res.json({ users, total: total.count, page, pageSize })\n})\n\n// 新增用户\napp.post('/api/admin/users', adminMiddleware, async (req, res) => {\n  const { username, password, role, email } = req.body\n  const hash = bcrypt.hashSync(password, 10)\n  const result = await db.prepare(\n    'INSERT INTO users (username, password, role, email) VALUES (?, ?, ?, ?)'\n  ).run(username, hash, role || 'user', email || '')\n  res.json({ id: result.lastInsertRowid })\n})\n\n// 编辑用户\napp.put('/api/admin/users/:id', adminMiddleware, async (req, res) => {\n  const { username, role, email } = req.body\n  await db.prepare(\n    'UPDATE users SET username = ?, role = ?, email = ? WHERE id = ?'\n  ).run(username, role, email, req.params.id)\n  res.json({ success: true })\n})\n\n// 删除用户\napp.delete('/api/admin/users/:id', adminMiddleware, async (req, res) => {\n  await db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id)\n  res.json({ success: true })\n})"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "用户管理页面",
                "code": "<template>\n  <div class='user-manage'>\n    <el-card>\n      <div class='toolbar'>\n        <el-input v-model='keyword' placeholder='搜索用户' style='width: 200px' @keyup.enter='search' />\n        <el-button type='primary' @click='showAdd'>新增用户</el-button>\n      </div>\n      <el-table :data='users' border stripe v-loading='loading'>\n        <el-table-column prop='id' label='ID' width='80' />\n        <el-table-column prop='username' label='用户名' />\n        <el-table-column prop='role' label='角色' width='100' />\n        <el-table-column prop='email' label='邮箱' />\n        <el-table-column prop='created_at' label='创建时间' width='180' />\n        <el-table-column label='操作' width='180'>\n          <template #default='{ row }'>\n            <el-button size='small' @click='showEdit(row)'>编辑</el-button>\n            <el-button size='small' type='danger' @click='delUser(row.id)'>删除</el-button>\n          </template>\n        </el-table-column>\n      </el-table>\n      <el-pagination\n        v-model:current-page='page' :page-size='pageSize'\n        :total='total' @current-change='loadUsers'\n        layout='prev, pager, next'\n      />\n    </el-card>\n\n    <el-dialog v-model='dialogVisible' :title='isEdit ? \”编辑用户\” : \”新增用户\”'>\n      <el-form :model='form'>\n        <el-form-item label='用户名'>\n          <el-input v-model='form.username' />\n        </el-form-item>\n        <el-form-item label='密码' v-if='!isEdit'>\n          <el-input v-model='form.password' type='password' />\n        </el-form-item>\n        <el-form-item label='角色'>\n          <el-select v-model='form.role'>\n            <el-option label='普通用户' value='user' />\n            <el-option label='管理员' value='admin' />\n          </el-select>\n        </el-form-item>\n        <el-form-item label='邮箱'>\n          <el-input v-model='form.email' />\n        </el-form-item>\n      </el-form>\n      <template #footer>\n        <el-button @click='dialogVisible = false'>取消</el-button>\n        <el-button type='primary' @click='save'>保存</el-button>\n      </template>\n    </el-dialog>\n  </div>\n</template>\n\n<script setup>\nimport { ref, reactive, onMounted } from 'vue'\nimport { ElMessage, ElMessageBox } from 'element-plus'\n\nconst users = ref([])\nconst loading = ref(false)\nconst page = ref(1)\nconst pageSize = ref(10)\nconst total = ref(0)\nconst keyword = ref('')\nconst dialogVisible = ref(false)\nconst isEdit = ref(false)\nconst form = reactive({ id: null, username: '', password: '', role: 'user', email: '' })\nconst token = localStorage.getItem('adminToken')\n\nasync function loadUsers() {\n  loading.value = true\n  const params = new URLSearchParams({ page: page.value, pageSize: pageSize.value, keyword: keyword.value })\n  const res = await fetch('/api/admin/users?' + params, { headers: { Authorization: 'Bearer ' + token } })\n  const data = await res.json()\n  users.value = data.users\n  total.value = data.total\n  loading.value = false\n}\n\nfunction showAdd() {\n  isEdit.value = false\n  Object.assign(form, { id: null, username: '', password: '', role: 'user', email: '' })\n  dialogVisible.value = true\n}\n\nfunction showEdit(row) {\n  isEdit.value = true\n  Object.assign(form, { ...row, password: '' })\n  dialogVisible.value = true\n}\n\nasync function save() {\n  const url = isEdit.value ? '/api/admin/users/' + form.id : '/api/admin/users'\n  const method = isEdit.value ? 'PUT' : 'POST'\n  const res = await fetch(url, {\n    method,\n    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },\n    body: JSON.stringify(form)\n  })\n  if (res.ok) {\n    ElMessage.success(isEdit.value ? '更新成功' : '创建成功')\n    dialogVisible.value = false\n    loadUsers()\n  }\n}\n\nasync function delUser(id) {\n  await ElMessageBox.confirm('确认删除？', '提示', { type: 'warning' })\n  await fetch('/api/admin/users/' + id, { method: 'DELETE', headers: { Authorization: 'Bearer ' + token } })\n  ElMessage.success('删除成功')\n  loadUsers()\n}\n\nfunction search() { page.value = 1; loadUsers() }\n\nonMounted(() => loadUsers())\n</script>"
              }
            ]
          }
        ]
      },
      {
        "id": "ch7",
        "title": "部署上线",
        "lessons": [
          {
            "id": "l1",
            "title": "小程序部署",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["步骤", "操作"],
                "rows": [
                  ["1. HBuilderX打包", "发行 → 小程序-微信"],
                  ["2. 微信开发者工具", "导入dist目录"],
                  ["3. 上传代码", "工具中点击上传"],
                  ["4. 提交审核", "微信公众平台 → 版本管理 → 提交审核"],
                  ["5. 发布上线", "审核通过后点击发布"]
                ]
              }
            ]
          },
          {
            "id": "l2",
            "title": "后端Linux部署",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "bash",
                "filename": "服务器部署",
                "code": "# 1. 安装Node.js\ncurl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -\nsudo apt install -y nodejs\n\n# 2. 上传代码\nscp -r ./server root@服务器IP:/opt/ai-english\n\n# 3. 启动\ncd /opt/ai-english\nnpm install --production\nnpm install -g pm2\npm start server.js --name ai-english\npm2 save && pm2 startup\n\n# 4. Nginx + SSL\ncertbot --nginx -d api.yourdomain.com"
              }
            ]
          },
          {
            "id": "l3",
            "title": "管理系统部署",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "nginx",
                "filename": "Nginx配置",
                "code": "# API接口\nserver {\n  listen 443 ssl;\n  server_name api.yourdomain.com;\n  ssl_certificate /etc/letsencrypt/live/api.yourdomain.com/fullchain.pem;\n  ssl_certificate_key /etc/letsencrypt/live/api.yourdomain.com/privkey.pem;\n  location / { proxy_pass http://localhost:3000; }\n}\n\n# 后台管理系统\nserver {\n  listen 443 ssl;\n  server_name admin.yourdomain.com;\n  ssl_certificate /etc/letsencrypt/live/admin.yourdomain.com/fullchain.pem;\n  ssl_certificate_key /etc/letsencrypt/live/admin.yourdomain.com/privkey.pem;\n  location / { root /opt/ai-english/admin/dist; try_files $uri $uri/ /index.html; }\n  location /api/ { proxy_pass http://localhost:3000/api/; }\n}"
              }
            ]
          }
        ]
      },
      {
        "id": "ch8",
        "title": "版本控制",
        "lessons": [
          {
            "id": "l1",
            "title": "Git工作流",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "bash",
                "filename": "Git命令",
                "code": "# 初始化仓库\ngit init\ngit remote add origin https://github.com/yourname/ai-english.git\n\n# 创建功能分支\ngit checkout -b feature/word-module\n\n# 提交代码\ngit add .\ngit commit -m 'feat: 添加背单词模块'\n\n# 推送到远程\ngit push -u origin feature/word-module\n\n# 合并到主分支\ngit checkout main\ngit merge feature/word-module\ngit push origin main"
              }
            ]
          },
          {
            "id": "l2",
            "title": "项目结构规范",
            "blocks": [
              {
                "id": "b1",
                "type": "table",
                "headers": ["目录", "说明"],
                "rows": [
                  [".gitignore", "忽略node_modules/build等文件"],
                  ["src/", "前端UniApp源码"],
                  ["server/", "后端Node.js代码"],
                  ["docs/", "项目文档"],
                  ["README.md", "项目说明"]
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]
