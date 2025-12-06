<template>
  <div class="home">
    <h1>课程列表</h1>
    <div class="course-list">
      <div v-for="course in courses" :key="course.id" class="course-card">
        <h3>{{ course.title }}</h3>
        <p>{{ course.description }}</p>
        <div class="card-footer">
          <span class="price">¥{{ course.price }}</span>
          <router-link :to="`/course/${course.id}`" class="detail-btn">查看详情</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Course } from '../rpc/index.js';

const courses = ref([]);

// 服务端直接获取，客户端自动从 SSR 缓存读取
courses.value = await Course.list();
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

.detail-btn {
  background: #42b983;
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
}

.detail-btn:hover {
  background: #369970;
}
</style>