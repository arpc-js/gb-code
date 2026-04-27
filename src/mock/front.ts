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
                "content": "winget是Windows官方的软件包管理器，可以快速安装开发工具。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "bash",
                "filename": "PowerShell",
                "code": "# 安装Trae IDE\nwinget install Trae.Trae"
              },
              {
                "id": "b3",
                "type": "tip",
                "content": "也可以访问 https://www.trae.cn 官网下载Trae IDE"
              },
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
                "content": "HTML文件是网页的基础，使用Trae创建一个.html文件。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "index.html",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n    <meta charset=\"UTF-8\">\n    <title>第一个网页</title>\n</head>\n<body>\n    <h1>第一个网页</h1>\n</body>\n</html>",
              },
              {
                "id": "b3",
                "type": "text",
                "content": "文件保存后，双击index.html即可在浏览器中打开查看效果。"
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
                "content": "传统HTML需要手动操作DOM来更新视图，代码复杂且容易出错。Vue通过声明式语法实现数据驱动视图，让开发更简洁高效。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "传统HTML实现",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n  <title>传统HTML示例</title>\n</head>\n<body>\n  <div id='\1'>\n    <h1 id='\1'>Hello World!</h1>\n    <button id='\1'>点击次数: <span id='\1'>0</span></button>\n  </div>\n\n  <script>\n    // 手动获取DOM元素\n    const messageEl = document.getElementById('message');\n    const btnEl = document.getElementById('btn');\n    const countEl = document.getElementById('count');\n    \n    // 手动管理状态\n    let count = 0;\n    \n    // 手动更新视图\n    function updateView() {\n      countEl.textContent = count;\n    }\n    \n    // 手动绑定事件\n    btnEl.addEventListener('click', function() {\n      count++;\n      updateView();\n    });\n  </script>\n</body>\n</html>"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "Vue3实现 (App.vue)",
                "code": "<template>\n  <div>\n    <h1>{{ message }}</h1>\n    <button @click='\1'>点击次数: {{ count }}</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst message = ref('Hello Vue3!')\nconst count = ref(0)\n</script>"
              },
              {
                "id": "b4",
                "type": "text",
                "content": "通过对比可以看出：传统HTML需要手动获取DOM、绑定事件、更新视图，而Vue只需声明数据和模板，自动处理DOM更新。"
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
                "content": "Vue使用 ref() 创建响应式数据，数据变化时视图自动更新。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["API", "适用类型", "访问方式", "说明"],
                "rows": [
                  ["ref()", "任意类型", ".value", "万能用法，推荐使用"],
                  ["reactive()", "对象/数组", "直接访问", "较少使用"]
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
                "content": "模板语法使用双大括号进行数据绑定，支持JavaScript表达式。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "vue",
                "filename": "模板语法示例",
                "code": "<template>\n  <div>\n    <!-- 文本插值 -->\n    <h1>{{ message }}</h1>\n    \n    <!-- JavaScript表达式 -->\n    <p>当前时间：{{ new Date().toLocaleString() }}</p>\n    <p>计算结果：{{ 1 + 2 * 3 }}</p>\n    <p>是否显示：{{ isActive ? '是' : '否' }}</p>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst message = ref('Hello Vue3!')\nconst isActive = ref(true)\n</script>"
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
                "content": "条件渲染根据条件来显示或隐藏元素。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["指令", "说明", "区别"],
                "rows": [
                  ["v-if", "条件为真时渲染", "不渲染时不创建DOM"],
                  ["v-else-if", "多条件判断", "必须紧跟v-if"],
                  ["v-else", "默认分支", "必须紧跟v-if或v-else-if"],
                  ["v-show", "切换display样式", "始终创建DOM"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "条件渲染示例",
                "code": "<template>\n  <div>\n    <!-- v-if 条件判断 -->\n    <div v-if='\1'>\n      <p>优秀</p>\n    </div>\n    <div v-else-if='\1'>\n      <p>及格</p>\n    </div>\n    <div v-else>\n      <p>不及格</p>\n    </div>\n    \n    <!-- v-show 显示/隐藏 -->\n    <div v-show=\"isVisible\">\n      <p>这段内容根据isVisible显示或隐藏</p>\n    </div>\n    \n    <button @click='\1'>切换显示</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst score = ref(85)\nconst isVisible = ref(true)\nfunction toggleVisibility() {\n  isVisible.value = !isVisible.value\n}\n</script>"
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
                "content": "使用 v-for 指令遍历数据并为每个项目渲染元素。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["语法", "说明"],
                "rows": [
                  ["v-for='\1'", "遍历数组"],
                  ["v-for='\1'", "遍历数组并获取索引"],
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
                "code": "<template>\n  <div>\n    <!-- 遍历数组 -->\n    <ul>\n      <li v-for='\1' :key='\1'>\n        {{ index + 1 }}. {{ item }}\n      </li>\n    </ul>\n    \n    <!-- 遍历对象 -->\n    <div>\n      <h3>用户信息</h3>\n      <p v-for='\1' :key='\1'>\n        {{ key }}: {{ value }}\n      </p>\n    </div>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst fruits = ref(['苹果', '香蕉', '橙子', '葡萄'])\nconst user = ref({\n  name: '张三',\n  age: 25,\n  email: 'zhangsan@example.com'\n})\n</script>"
              }
            ]
          },
          {
            "id": "l6",
            "title": "常用指令",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "Vue指令是带有 v- 前缀的特殊属性。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["指令", "简写", "用途"],
                "rows": [
                  ["v-model", "-", "双向数据绑定"],
                  ["v-bind", ":", "绑定属性"],
                  ["v-on", "@", "绑定事件"],
                  ["v-if / v-else", "-", "条件渲染"],
                  ["v-show", "-", "条件显示"],
                  ["v-for", "-", "循环渲染"],
                  ["v-text", "-", "渲染文本"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "指令示例",
                "code": "<template>\n  <div>\n    <!-- v-model 双向绑定 -->\n    <input v-model='\1' placeholder='\1'>\n    <p>你输入的内容：{{ message }}</p>\n    \n    <!-- v-bind 绑定属性 -->\n    <img :src='\1' alt='\1' :class='\1'>\n    \n    <!-- v-on 绑定事件 -->\n    <button @click='\1'>点击次数: {{ count }}</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst message = ref('')\nconst imageUrl = ref('https://via.placeholder.com/150')\nconst isLarge = ref(true)\nconst count = ref(0)\nfunction increment() {\n  count.value++\n}\n</script>\n\n<style scoped>\n.large {\n  width: 200px;\n  height: 200px;\n}\n</style>"
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
                "content": "组件是Vue3的核心概念，用于构建可复用的UI元素。一个组件包含模板、逻辑和样式。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["组成部分", "说明"],
                "rows": [
                  ["<template>", "HTML模板，定义组件的视图结构"],
                  ["<script setup>", "组件逻辑，使用组合式API"],
                  ["<style scoped>", "组件样式，scoped表示仅当前组件生效"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "HelloWorld.vue",
                "code": "<template>\n  <div class='\1'>\n    <h1>{{ message }}</h1>\n    <button @click='\1'>点击</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst message = ref('Hello World!')\nfunction onClick() {\n  message.value = 'Clicked!'\n}\n</script>\n\n<style scoped>\n.hello { color: #333; }\n</style>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "使用组件",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "在父组件中引入并使用子组件。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["步骤", "操作"],
                "rows": [
                  ["1. 引入", "import HelloWorld from './HelloWorld.vue'"],
                  ["2. 注册", "在script setup中无需注册，直接使用"],
                  ["3. 使用", "在template中当作HTML标签使用"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "App.vue",
                "code": "<template>\n  <div>\n    <HelloWorld />\n  </div>\n</template>\n\n<script setup>\nimport HelloWorld from './HelloWorld.vue'\n</script>"
              }
            ]
          },
          {
            "id": "l3",
            "title": "组件通信",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "组件之间通过Props和Emit进行数据传递。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["通信方式", "说明", "使用场景"],
                "rows": [
                  ["Props", "父传子", "父组件向子组件传递数据"],
                  ["Emit", "子传父", "子组件向父组件发送事件"],
                  ["v-model", "双向绑定", "适合表单等双向数据场景"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "Parent.vue",
                "code": "<template>\n  <div>\n    <!-- 父传子：通过props -->\n    <ChildComponent :title=\"title\" :count=\"count\" />\n    \n    <!-- 子传父：通过emit -->\n    <ChildComponent @update=\"onUpdate\" />\n    \n    <!-- v-model双向绑定 -->\n    <ChildComponent v-model='\1' />\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nimport ChildComponent from './ChildComponent.vue'\nconst title = ref('标题')\nconst count = ref(0)\nconst modelValue = ref('')\nfunction onUpdate(value) {\n  console.log('收到子组件更新:', value)\n}\n</script>"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "vue",
                "filename": "ChildComponent.vue",
                "code": "<template>\n  <div>\n    <h2>{{ title }} - {{ count }}</h2>\n    <input v-model='\1' @input='\1'>\n    <button @click='\1'>发送</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\n// Props：接收父组件传递的数据\nconst props = defineProps({\n  title: String,\n  count: Number\n})\n\n// Emit：向父组件发送事件\nconst emit = defineEmits(['update'])\n\nconst localValue = ref('')\nfunction onInput() {\n  emit('update', localValue.value)\n}\n</script>"
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
                "headers": ["插槽类型", "说明"],
                "rows": [
                  ["默认插槽", "最简单的插槽，子组件用<slot />接收"],
                  ["具名插槽", "子组件有多个插槽时，用name区分"],
                  ["作用域插槽", "子组件向插槽传递数据"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "Layout.vue (子组件)",
                "code": "<template>\n  <div class='\1'>\n    <header>\n      <slot name='\1' />\n    </header>\n    <main>\n      <slot />\n    </main>\n    <footer>\n      <slot name='\1' />\n    </footer>\n  </div>\n</template>"
              },
              {
                "id": "b4",
                "type": "code",
                "language": "vue",
                "filename": "App.vue (父组件)",
                "code": "<template>\n  <Layout>\n    <template #header>\n      <h1>网站标题</h1>\n    </template>\n    \n    <p>这是主要内容区域</p>\n    \n    <template #footer>\n      <p>版权所有 2024</p>\n    </template>\n  </Layout>\n</template>\n\n<script setup>\nimport Layout from './Layout.vue'\n</script>"
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
                "code": "<p style='\1'>深灰色文字，18像素大小</p>\n<p style='\1'>蓝色加粗文字</p>\n<p style='\1'>居中显示的微软雅黑文字</p>\n<p style='\1'>这是一段拥有较大行高的文字，\n换行后可以看到效果</p>"
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
                "code": "<div style='\1'>\n    <p style='\1'>蓝色背景的容器</p>\n</div>\n\n<div style='\1'>\n    带边框的容器\n</div>\n\n<div style='\1'>\n    圆角容器\n</div>\n\n<div style='\1'>\n    带阴影的卡片效果\n</div>"
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
                "code": "<!-- 内边距示例 -->\n<div style='\1'>\n    <div style='\1'>有20px内边距的容器</div>\n</div>\n\n<!-- 外边距示例 -->\n<div style='\1'>\n    <div style='\1'>第1个元素</div>\n    <div style='\1'>第2个元素</div>\n</div>\n\n<!-- 简写形式 -->\n<div style='\1'>上下10px，左右20px</div>\n<div style='\1'>上5右10下15左20</div>"
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
                "content": "选择器用于选择HTML元素，然后为这些元素添加样式。在实际开发中，类选择器（.class）是最常用的，因为它可以重复使用，便于维护。其他选择器在特定场景下也会用到。"
              },
              {
                "id": "b1",
                "type": "table",
                "headers": ["选择器", "作用", "示例", "使用场景"],
                "rows": [
                  ["类选择器", "选择指定类", ".class { color: red; }", "最常用，用于复用样式"],
                  ["ID选择器", "选择指定ID", "#id { color: red; }", "唯一元素，如页面布局"],
                  ["标签选择器", "选择指定标签", "p { color: red; }", "重置样式或全局样式"],
                  ["后代选择器", "选择后代元素", "div p { color: red; }", "嵌套样式"],
                  ["伪类选择器", "选择特殊状态", "a:hover { color: blue; }", "交互状态"],
                  ["属性选择器", "选择有指定属性", "[href] { color: red; }", "表单元素"],
                  ["通配选择器", "选择所有元素", "* { margin: 0; }", "全局重置"],
                  ["直接后代选择器", "选择直接子元素", "div > p { color: red; }", "精确选择"]
                ]
              },
              {
                "id": "b1-1",
                "type": "text",
                "content": "<strong>推荐做法：</strong>优先使用类选择器，保持样式的可复用性和代码的清晰性。ID选择器用于唯一元素，标签选择器用于全局样式重置。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "选择器示例",
                "code": "<!DOCTYPE html>\n<html>\n<head>\n<style>\n/* 类选择器（最常用） */\n.text-red {\n    color: red;\n}\n\n.container p {\n    margin: 10px 0;\n}\n\n/* ID选择器 */\n#title {\n    font-size: 24px;\n}\n\n/* 标签选择器 */\np {\n    color: #333;\n}\n</style>\n</head>\n<body>\n\n<h1 id='\1'>标题</h1>\n<p>普通段落</p>\n<p class='\1'>红色文字</p>\n<div class='\1'>\n    <p>容器内的段落</p>\n</div>\n\n</body>\n</html>"
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
                "code": "<!-- 块级元素：每个都独占一行 -->\n<div>第一个div</div>\n<div>第二个div</div>\n<div>第三个div</div>"
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
                "code": "<div style='\1'>\n    <div style='\1'>盒子1</div>\n    <div style='\1'>盒子2</div>\n    <div style='\1'>盒子3</div>\n</div>"
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
                "code": "<!-- 左对齐 -->\n<div style='\1'>\n    <div style='\1'>左侧</div>\n    <div style='\1'>对齐</div>\n</div>\n\n<!-- 居中对齐 -->\n<div style='\1'>\n    <div style='\1'>居中</div>\n    <div style='\1'>内容</div>\n</div>\n\n<!-- 两端对齐 -->\n<div style='\1'>\n    <div style='\1'>左</div>\n    <div style='\1'>右</div>\n</div>\n\n<!-- 垂直居中 -->\n<div style='\1'>\n    <div style='\1'>圆形</div>\n</div>"
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
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "算术示例",
                "code": "let a = 10, b = 3;\nconsole.log(a + b);  // 13\nconsole.log(a - b);  // 7\nconsole.log(a * b);  // 30\nconsole.log(a / b);  // 3.33\nconsole.log(a % b);  // 1"
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
                "language": "javascript",
                "filename": "比较示例",
                "code": "console.log(5 > 3);     // true\nconsole.log(5 === '5'); // false\nconsole.log(5 == '5');   // true"
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
                "language": "javascript",
                "filename": "逻辑示例",
                "code": "console.log(true && false);  // false\nconsole.log(true || false);  // true\nconsole.log(!true);           // false"
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
                "language": "javascript",
                "filename": "变量示例",
                "code": "let name = '张三';\nname = '李四';  // 可以修改\nconsole.log(name);\n\nconst PI = 3.14159;\n// PI = 3;  // 错误，常量不能修改\nconsole.log(PI);"
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
                "language": "javascript",
                "filename": "类型示例",
                "code": "let num = 123;      // 数字\nlet str = 'hello';  // 字符串\nlet bool = true;     // 布尔值\nlet arr = [1,2,3];   // 数组\nlet obj = {name:'张三'}; // 对象\n\nconsole.log(num);\nconsole.log(str);\nconsole.log(bool);\nconsole.log(arr);\nconsole.log(obj);"
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
                "language": "javascript",
                "filename": "if语句示例",
                "code": "// if语句\nlet age = 18;\n\nif (age >= 18) {\n  console.log('成年人');\n} else if (age >= 13) {\n  console.log('青少年');\n} else {\n  console.log('儿童');\n}"
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
                "language": "javascript",
                "filename": "for循环示例",
                "code": "// 基本for循环\nfor (let i = 0; i < 3; i++) {\n  console.log('循环次数:', i);\n}\n\n// for...of遍历数组\nlet fruits = ['苹果', '香蕉', '橙子'];\nfor (let fruit of fruits) {\n  console.log('水果:', fruit);\n}\n\n// for...in遍历对象\nlet person = { name: '张三', age: 25 };\nfor (let key in person) {\n  console.log(key + ': ' + person[key]);\n}"
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
                "language": "javascript",
                "filename": "函数示例",
                "code": "// 函数：无参无返回\nfunction compare() {\n  let a = 10;\n  let b = 5;\n  if (a > b) {\n    console.log('a大于b');\n  } else {\n    console.log('a小于等于b');\n  }\n}\n\n// 有参函数：有参无返回\nfunction compare(a, b) {\n  if (a > b) {\n    console.log('a大于b');\n  } else {\n    console.log('a小于等于b');\n  }\n}\n\n// 有返回值：有参有返回（用变量接收）\nfunction compare(a, b) {\n  if (a > b) {\n    return 'a大于b';\n  } else {\n    return 'a小于等于b';\n  }\n}\n\ncompare();\ncompare(3, 8);\nlet result = compare(3, 8);\nconsole.log(result);"
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
                "type": "text",
                "content": "异步编程是JavaScript的核心特性，用于处理需要等待的操作，如网络请求、定时器等。\n\n同步 vs 异步：\n- 同步：代码按顺序执行，会阻塞后续代码\n- 异步：代码不阻塞，继续执行后续操作，操作完成后通过回调或Promise处理结果\n\n常见异步场景：\n- 网络请求（fetch、AJAX）\n- 定时器（setTimeout、setInterval）\n- 文件操作\n- DOM事件"
              },
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "同步vs异步示例",
                "code": "// 同步编程示例\nconsole.log('同步开始');\n\n// 真实的同步操作：计算密集型任务\nfunction syncOperation() {\n  // 计算斐波那契数列的第10项（快速完成）\n  function fibonacci(n) {\n    if (n <= 1) return n;\n    return fibonacci(n - 1) + fibonacci(n - 2);\n  }\n  \n  const result = fibonacci(10); // 这会阻塞主线程但很快完成\n  return '同步计算完成，斐波那契(10) = ' + result;\n}\n\n// 执行同步操作\nconst syncResult = syncOperation();\nconsole.log(syncResult);\nconsole.log('同步结束'); // 这行代码会等待计算完成后才执行\n\n// 异步编程示例\nconsole.log('\n异步开始');\n\n// 异步操作：定时器\nfunction asyncOperation() {\n  return new Promise(resolve => {\n    setTimeout(() => {\n      resolve('异步操作完成');\n    }, 1000); // 缩短为1秒\n  });\n}\n\n// 执行异步操作\nasyncOperation().then(result => {\n  console.log(result);\n});\n\nconsole.log('异步结束'); // 这行代码会立即执行，不等待1秒"
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
                "language": "javascript",
                "filename": "Promise示例",
                "code": "// 创建Promise\nfunction delay(ms) {\n  return new Promise((resolve, reject) => {\n    if (ms > 0) {\n      setTimeout(() => {\n        resolve('延迟' + ms + '毫秒');\n      }, ms);\n    } else {\n      reject('延迟时间必须大于0');\n    }\n  });\n}\n\n// 使用Promise\ndelay(1000)\n  .then(result => {\n    console.log(result);\n    return delay(500);\n  })\n  .then(result => {\n    console.log(result);\n    return delay(-100); // 故意失败\n  })\n  .catch(error => {\n    console.error('错误:', error);\n  })\n  .finally(() => {\n    console.log('操作完成');\n  });\n\n// Promise.all示例\nPromise.all([\n  delay(1000),\n  delay(2000),\n  delay(1500)\n]).then(results => {\n  console.log('所有操作完成:', results);\n});"
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
                "language": "javascript",
                "filename": "async/await示例",
                "code": "// 定义异步函数\nasync function asyncDemo() {\n  try {\n    console.log('开始');\n    \n    // 等待Promise完成\n    const result1 = await delay(1000);\n    console.log(result1);\n    \n    const result2 = await delay(500);\n    console.log(result2);\n    \n    // 故意失败\n    const result3 = await delay(-100);\n    console.log(result3);\n  } catch (error) {\n    console.error('错误:', error);\n  } finally {\n    console.log('操作完成');\n  }\n}\n\n// 调用异步函数\nasyncDemo();\n\n// 异步函数返回值\nasync function getResult() {\n  const result = await delay(1000);\n  return result;\n}\n\ngetResult().then(result => {\n  console.log('异步函数返回:', result);\n});"
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
                "language": "javascript",
                "filename": "异步实战示例",
                "code": "// 使用async/await和fetch\nasync function fetchData() {\n  try {\n    console.log('开始请求数据...');\n    \n    // 发起网络请求\n    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');\n    \n    // 检查响应状态\n    if (!response.ok) {\n      throw new Error('网络请求失败');\n    }\n    \n    // 解析JSON数据\n    const data = await response.json();\n    console.log('获取到数据:', data);\n    \n    return data;\n  } catch (error) {\n    console.error('请求错误:', error);\n    return null;\n  }\n}\n\n// 调用函数\nfetchData();"
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
            "title": "GET请求",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "使用fetch API发起GET请求，获取用户数据并显示到页面上。\n\n使用的模拟接口：\n- https://jsonplaceholder.typicode.com/users - 获取所有用户\n- https://jsonplaceholder.typicode.com/users/1 - 获取单个用户"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "GET请求示例",
                "code": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1>用户数据</h1>\n<button onclick=\"fetchAllUsers()\">获取所有用户</button>\n<button onclick=\"fetchSingleUser()\">获取单个用户</button>\n<div id='\1'></div>\n\n<script>\n\nasync function fetchAllUsers() {\n  try {\n    const resultDiv = document.getElementById('result');\n    resultDiv.innerHTML = '<p>加载中...</p>';\n    \n    const response = await fetch('https://jsonplaceholder.typicode.com/users');\n    if (!response.ok) {\n      throw new Error('网络请求失败');\n    }\n    \n    const users = await response.json();\n    \n    // 显示到页面\n    let html = '<h2>所有用户</h2>';\n    users.forEach(user => {\n      html += '<div style='\1'>';\n      html += '<strong>' + user.name + '</strong> (' + user.username + ')';\n      html += '<p>邮箱: ' + user.email + '</p>';\n      html += '<p>电话: ' + user.phone + '</p>';\n      html += '</div>';\n    });\n    resultDiv.innerHTML = html;\n  } catch (error) {\n    document.getElementById('result').innerHTML = '<p style='\1'>错误: ' + error.message + '</p>';\n  }\n}\n\nasync function fetchSingleUser() {\n  try {\n    const resultDiv = document.getElementById('result');\n    resultDiv.innerHTML = '<p>加载中...</p>';\n    \n    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');\n    if (!response.ok) {\n      throw new Error('网络请求失败');\n    }\n    \n    const user = await response.json();\n    \n    // 显示到页面\n    let html = '<h2>用户详情</h2>';\n    html += '<div style='\1'>';\n    html += '<h3>' + user.name + '</h3>';\n    html += '<p><strong>用户名:</strong> ' + user.username + '</p>';\n    html += '<p><strong>邮箱:</strong> ' + user.email + '</p>';\n    html += '<p><strong>电话:</strong> ' + user.phone + '</p>';\n    html += '<p><strong>网站:</strong> ' + user.website + '</p>';\n    html += '<p><strong>公司:</strong> ' + user.company.name + '</p>';\n    html += '<p><strong>地址:</strong> ' + user.address.street + ', ' + user.address.city + '</p>';\n    html += '</div>';\n    resultDiv.innerHTML = html;\n  } catch (error) {\n    document.getElementById('result').innerHTML = '<p style='\1'>错误: ' + error.message + '</p>';\n  }\n}\n\n</script>\n\n</body>\n</html>"
              }
            ]
          },
          {
            "id": "l2",
            "title": "POST请求",
            "video": "https://www.w3schools.com/html/mov_bbb.mp4",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "使用fetch API发起POST请求，创建新用户并显示结果。\n\n使用的模拟接口：\n- https://jsonplaceholder.typicode.com/users - 创建用户（模拟）"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "html",
                "filename": "POST请求示例",
                "code": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1>创建用户</h1>\n<form onsubmit=\"createUser(event)\">\n  <div style='\1'>\n    <label>姓名:</label>\n    <input type='\1' id='\1' required>\n  </div>\n  <div style='\1'>\n    <label>邮箱:</label>\n    <input type='\1' id='\1' required>\n  </div>\n  <div style='\1'>\n    <label>电话:</label>\n    <input type='\1' id='\1'>\n  </div>\n  <button type='\1'>创建用户</button>\n</form>\n<div id='\1'></div>\n\n<script>\n\nasync function createUser(event) {\n  event.preventDefault();\n  \n  try {\n    const resultDiv = document.getElementById('result');\n    resultDiv.innerHTML = '<p>提交中...</p>';\n    \n    const userData = {\n      name: document.getElementById('name').value,\n      email: document.getElementById('email').value,\n      phone: document.getElementById('phone').value\n    };\n    \n    const response = await fetch('https://jsonplaceholder.typicode.com/users', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(userData)\n    });\n    \n    if (!response.ok) {\n      throw new Error('网络请求失败');\n    }\n    \n    const data = await response.json();\n    \n    const html = '<h2>创建成功</h2>' +\n      '<div style='\1'>' +\n      '<p><strong>用户ID:</strong> ' + data.id + '</p>' +\n      '<p><strong>姓名:</strong> ' + data.name + '</p>' +\n      '<p><strong>邮箱:</strong> ' + data.email + '</p>' +\n      '<p><strong>电话:</strong> ' + data.phone + '</p>' +\n      '<p><em>注: 这是模拟数据，实际不会保存到服务器</em></p>' +\n      '</div>';\n    resultDiv.innerHTML = html;\n    \n    event.target.reset();\n  } catch (error) {\n    document.getElementById('result').innerHTML = '<p style='\1'>错误: ' + error.message + '</p>';\n  }\n}\n\n</script>\n\n</body>\n</html>"
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
                "code": "<template>\n  <div>\n    <input v-model='\1' placeholder='\1'>\n    <p>你输入的：{{ message }}</p>\n    <img :src='\1' :class='\1'>\n    <button @click='\1'>点击: {{ count }}</button>\n  </div>\n</template>\n\n<script setup>\nimport { ref } from 'vue'\nconst message = ref('')\nconst imageUrl = ref('https://via.placeholder.com/150')\nconst isLarge = ref(true)\nconst count = ref(0)\n</script>\n\n<style scoped>\n.large { width: 200px; height: 200px; }\n</style>"
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
            "title": "路由跳转",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "使用router-link或编程式导航跳转。"
              },
              {
                "id": "b2",
                "type": "table",
                "headers": ["方式", "语法"],
                "rows": [
                  ["router-link", "<router-link to='/'>首页</router-link>"],
                  ["useRouter", "router.push('/about')"],
                  ["useRoute", "route.params.id 获取参数"]
                ]
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "导航示例",
                "code": "<template>\n  <nav>\n    <router-link to='/'>首页</router-link>\n    <router-link to='/about'>关于</router-link>\n  </nav>\n  <router-view />\n  <button @click='\1'>编程式跳转</button>\n</template>\n\n<script setup>\nimport { useRouter } from 'vue-router'\nconst router = useRouter()\nfunction goAbout() {\n  router.push('/about')\n}\n</script>"
              }
            ]
          },
          {
            "id": "l4",
            "title": "动态路由",
            "blocks": [
              {
                "id": "b1",
                "type": "text",
                "content": "使用动态参数传递数据。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "路由配置",
                "code": "const routes = [\n  { path: '/user/:id', component: User }\n]"
              },
              {
                "id": "b3",
                "type": "code",
                "language": "vue",
                "filename": "User.vue",
                "code": "<template>\n  <h2>用户ID: {{ route.params.id }}</h2>\n</template>\n\n<script setup>\nimport { useRoute } from 'vue-router'\nconst route = useRoute()\n</script>"
              }
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
  }
,
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
                "code": "// math.js - ES Module导出方式 (现代标准)\nexport function add(a, b) {\n  return a + b\n}\n\nexport function subtract(a, b) {\n  return a - b\n}\n\n// 默认导出 (一个模块只能有一个)\nexport default { add, subtract }"
              },
              {
                "id": "b5",
                "type": "code",
                "language": "javascript",
                "filename": "main.js (ESM)",
                "code": "// main.js - ES Module导入 (现代标准)\n// 导入命名导出 (需用 .mjs 后缀或 package.json中设type:module)\nimport { add, subtract } from './math.js'\n\n// 导入默认导出 (可自定义名称)\nimport mathUtils from './math.js'\n\nconsole.log(add(5, 3))           // 8\nconsole.log(mathUtils.add(5, 3)) // 8\n\n// package.json设置:\n// { \"type\": \"module\" }"
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
                  ["GET", "/api/users/:id", "获取单个用户"],
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
    "title": "AI英语项目实战",
    "desc": "AI英语学习、RAG知识库、智能对话",
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
                  ["对话页", "LangGraph智能体对话，支持流式输出"],
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
                "content": "RLS(Row Level Security)行级安全策略，确保用户只能访问自己的数据。"
              },
              {
                "id": "b2",
                "type": "code",
                "language": "javascript",
                "filename": "RLS中间件",
                "code": "// 用户数据隔离中间件\nfunction dataIsolation(req, res, next) {\n  if (!req.user) return res.status(401).json({ error: '未登录' })\n  req.userId = req.user.id\n  next()\n}\n\n// 应用到所有数据接口\napp.use('/api/agents', dataIsolation)\napp.use('/api/words', dataIsolation)\napp.use('/api/records', dataIsolation)\n\n// 示例：查询用户自己的数据\napp.get('/api/agents', async (req, res) => {\n  const agents = await db.prepare(\n    'SELECT * FROM agents WHERE userId = ? OR isPublic = 1'\n  ).all(req.userId)\n  res.json(agents)\n})\n\napp.get('/api/words', async (req, res) => {\n  const words = await db.prepare(\n    'SELECT * FROM words WHERE userId = ?'\n  ).all(req.userId)\n  res.json(words)\n})\n\napp.get('/api/records', async (req, res) => {\n  const records = await db.prepare(\n    'SELECT * FROM learning_records WHERE userId = ?'\n  ).all(req.userId)\n  res.json(records)\n})"
              }
            ]
          }
        ]
      },
      {
        "id": "ch3",
        "title": "LangGraph智能体",
        "lessons": [
          {
            "id": "l1",
            "title": "LLM API接入",
            "blocks": [
              {
                "id": "b1",
                "type": "code",
                "language": "javascript",
                "filename": "OpenAI配置",
                "code": "import OpenAI from 'openai'\n\nconst openai = new OpenAI({\n  apiKey: process.env.OPENAI_API_KEY\n})\n\nasync function chat(prompt, messages = []) {\n  const res = await openai.chat.completions.create({\n    model: 'gpt-4o',\n    messages: [\n      { role: 'system', content: prompt },\n      ...messages.map(m => ({ role: m.role, content: m.content }))\n    ],\n    stream: true\n  })\n  return res\n}"
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
                "filename": "LangGraph智能体",
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
        "id": "ch7",
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
