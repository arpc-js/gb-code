<template>
  <div class="home">
    <h1>arpc框架CRUD演示</h1>
    
    <!-- 顶部操作栏 -->
    <div class="toolbar">
      <button @click="openSave()" class="add-btn">+ 新增课程</button>
    </div>
    
    <!-- 课程列表 -->
    <div class="course-list">
      <div v-for="course in list" :key="course.id" class="course-card">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
        <div class="card-footer">
          <span class="price">￥{{ course.price }}</span>
          <div class="actions">
            <button @click="openSave(course)" class="edit-btn">编辑</button>
            <button @click="del(course)" class="del-btn">删除</button>
            <router-link :to="`/course/${course.id}`" class="detail-btn">详情</router-link>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 弹窗：新增/编辑共用 -->
    <div v-if="showDialog" class="dialog-mask" @click.self="showDialog = false">
      <div class="dialog">
        <h3>{{ obj.id ? '编辑课程' : '新增课程' }}</h3>
        <input v-model="obj.title" placeholder="课程标题" />
        <input v-model="obj.description" placeholder="课程描述" />
        <input v-model.number="obj.price" type="number" placeholder="价格" />
        <div class="dialog-actions">
          <button @click="save" class="save-btn">保存</button>
          <button @click="showDialog = false" class="cancel-btn">取消</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Course } from '../arpc/Course';

const showDialog = ref(false);
const query = { order: 'id desc', page: 1, size: 3 };
const list = ref(await Course.get(query));
const refresh = async () => list.value = await Course.get(query);

// 共用编辑对象
let obj = new Course();

// 新增/编辑 - 共用
function openSave(course?: Course) {
  obj = course ?? new Course();
  showDialog.value = true;
}

// 保存
async function save() {
  await obj.save();
  await refresh();
  showDialog.value = false;
}

// 删除
async function del(course: Course) {
  if (!confirm('确定删除这个课程吗？')) return;
  await course.del();
  await refresh();
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.home h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
}

.toolbar {
  margin-bottom: 20px;
}

.add-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
}

.add-btn:hover { background: #3aa876; }

.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.course-card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 20px;
  transition: box-shadow 0.3s;
}

.course-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.course-card h3 {
  color: #333;
  margin-bottom: 10px;
}

.course-card p {
  color: #666;
  font-size: 14px;
  margin-bottom: 15px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  color: #e74c3c;
  font-size: 18px;
  font-weight: bold;
}

.actions {
  display: flex;
  gap: 8px;
}

.edit-btn, .del-btn, .detail-btn {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  text-decoration: none;
}

.edit-btn { background: #3498db; color: white; }
.del-btn { background: #e74c3c; color: white; }
.detail-btn { background: #42b983; color: white; }

/* 弹窗样式 */
.dialog-mask {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.dialog {
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dialog h3 {
  margin: 0 0 8px 0;
  color: #333;
}

.dialog input {
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.dialog-actions {
  display: flex;
  gap: 10px;
  margin-top: 8px;
}

.save-btn {
  flex: 1;
  background: #42b983;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

.cancel-btn {
  flex: 1;
  background: #ddd;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>