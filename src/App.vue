<script setup lang="ts">
</script>

<template>
  <div class="app-container">
<!--    <nav>
      <router-link to="/" active-class="active">课程列表</router-link>
      <router-link to="/about" active-class="active">关于</router-link>
    </nav>-->
    <Suspense>
      <router-view />
    </Suspense>
  </div>
</template>

<style scoped>

</style>