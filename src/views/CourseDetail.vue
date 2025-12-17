<template>
  <div class="course-detail">
    <div v-if="course" class="detail-content">
      <h1>{{ course.title }}</h1>
      <p class="description">{{ course.description }}</p>
      <div class="info">
        <span class="price">¥{{ course.price }}</span>
        <span class="duration">时长: {{ course.duration }}</span>
        <span class="lessons">课时: {{ course.lessons }}节</span>
      </div>
      <button class="buy-btn">立即购买</button>
    </div>
    <div v-else class="not-found">课程不存在</div>
    <router-link to="/" class="back">返回列表</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import Course from '../arpc/Course.js';

const route = useRoute();
const course = ref(null);

// 加载课程详情
const id = Number(route.params.id);
const [data] = await Course.get({ id });
course.value = data;
</script>

<style scoped>
.course-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.detail-content h1 {
  color: #333;
  margin-bottom: 20px;
}

.description {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.info {
  display: flex;
  gap: 30px;
  margin-bottom: 30px;
}

.price {
  color: #e74c3c;
  font-size: 24px;
  font-weight: bold;
}

.duration, .lessons {
  color: #888;
  font-size: 14px;
}

.buy-btn {
  background: #42b983;
  color: white;
  border: none;
  padding: 12px 40px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

.buy-btn:hover {
  background: #369970;
}

.back {
  display: inline-block;
  margin-top: 30px;
  color: #42b983;
}

.not-found {
  text-align: center;
  color: #999;
  font-size: 18px;
}
</style>