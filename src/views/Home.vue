<template>
  <div class="home">
    <h1>arpc框架CRUD演示</h1>
    
    <!-- 新增课程表单 -->
    <div class="add-form">
      <h3>新增课程</h3>
      <input v-model="newCourse.title" placeholder="课程标题" />
      <input v-model="newCourse.description" placeholder="课程描述" />
      <input v-model.number="newCourse.price" type="number" placeholder="价格" />
      <button @click="addCourse">添加课程</button>
    </div>
    
    <!-- 课程列表 -->
    <div class="course-list">
      <div v-for="course in courses" :key="course.id" class="course-card">
        <div v-if="editingId === course.id" class="edit-mode">
          <input v-model="course.title" />
          <input v-model="course.description" />
          <input v-model.number="course.price" type="number" />
          <button @click="saveCourse(course)">保存</button>
          <button @click="cancelEdit(course)">取消</button>
        </div>
        <div v-else>
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
          <div class="card-footer">
            <span class="price">￥{{ course.price }}</span>
            <div class="actions">
              <button @click="startEdit(course)" class="edit-btn">编辑</button>
              <button @click="deleteCourse(course)" class="del-btn">删除</button>
              <router-link :to="`/course/${course.id}`" class="detail-btn">详情</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 操作日志 -->
    <div v-if="log" class="log">
      <strong>最近操作:</strong> {{ log }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Course } from '../arpc/Course';

// 编辑状态
const editingId = ref<number | null>(null);
const log = ref('');

// 查询列表
const courses = await Course.get({ order: 'id desc', limit: 20 });

// 新增用的对象
const newCourse = new Course({ title: '', description: '', price: 0 });

// 新增
async function addCourse() {
  if (!newCourse.title) return;
  await newCourse.save();
  // 创建新对象加入列表（避免引用问题）
  courses.unshift(new Course({ ...newCourse }));
  log.value = `新增成功: ${newCourse.title} (ID: ${newCourse.id})`;
  // 重置表单
  Object.assign(newCourse, { id: undefined, title: '', description: '', price: 0 });
}

// 开始编辑
function startEdit(course: any) {
  editingId.value = course.id;
}

// 保存
async function saveCourse(course: any) {
  await course.save();
  log.value = `更新成功: ${course.title}`;
  editingId.value = null;
}

// 取消编辑（重新加载）
async function cancelEdit(course: any) {
  await course.reload?.();
  editingId.value = null;
}

// 删除
async function deleteCourse(course: any) {
  if (!confirm('确定删除这个课程吗？')) return;
  await course.del();
  const idx = courses.findIndex(c => c.id === course.id);
  if (idx !== -1) courses.splice(idx, 1);
  log.value = `删除成功: ${course.title}`;
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

.add-form {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
}

.add-form h3 {
  width: 100%;
  margin: 0 0 10px 0;
}

.add-form input {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  flex: 1;
  min-width: 150px;
}

.add-form button {
  background: #42b983;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
}

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

.edit-mode {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.edit-mode input {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.edit-mode button {
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.log {
  margin-top: 20px;
  padding: 15px;
  background: #d4edda;
  border-radius: 8px;
  color: #155724;
}
</style>