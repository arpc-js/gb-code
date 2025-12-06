<script setup lang="ts">
</script>

<template>
  <div class="app-container">
    <nav>
      <router-link to="/" active-class="active">课程列表</router-link>
      <router-link to="/about" active-class="active">关于</router-link>
    </nav>
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>

<style scoped>
.app-container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

nav {
  background: #fff;
  padding: 15px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

nav a {
  display: inline-block;
  padding: 8px 16px;
  margin-right: 10px;
  text-decoration: none;
  color: #2c3e50;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #f0f0f0;
}

nav a.active {
  background-color: #42b983;
  color: white;
}
</style>