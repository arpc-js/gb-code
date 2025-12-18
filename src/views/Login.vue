<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { User } from '../arpc/User';

const router = useRouter();

const email = ref('');
const password = ref('');
const loading = ref(false);
const error = ref('');

// 登录
async function handleLogin() {
    if (!email.value || !password.value) {
        error.value = '请填写邮箱和密码';
        return;
    }
    
    loading.value = true;
    error.value = '';
    
    try {
        const result = await User.login(email.value, password.value);
        
        // 保存 token 到 localStorage
        localStorage.setItem('token', result.token);
        localStorage.setItem('user', JSON.stringify(result.user));
        
        // 跳转首页
        router.push('/');
    } catch (e) {
        error.value = (e as Error).message || '登录失败';
    } finally {
        loading.value = false;
    }
}
</script>

<template>
    <div class="login-container">
        <div class="login-box">
            <h1>登录</h1>
            
            <div v-if="error" class="error">{{ error }}</div>
            
            <form @submit.prevent="handleLogin">
                <div class="form-group">
                    <label for="email">邮箱</label>
                    <input 
                        id="email"
                        v-model="email" 
                        type="email" 
                        placeholder="请输入邮箱"
                        required
                    />
                </div>
                
                <div class="form-group">
                    <label for="password">密码</label>
                    <input 
                        id="password"
                        v-model="password" 
                        type="password" 
                        placeholder="请输入密码"
                        required
                    />
                </div>
                
                <button type="submit" :disabled="loading">
                    {{ loading ? '登录中...' : '登录' }}
                </button>
            </form>
            
            <p class="register-link">
                还没有账号？<router-link to="/register">立即注册</router-link>
            </p>
        </div>
    </div>
</template>

<style scoped>
.login-container {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-box {
    background: white;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 400px;
}

h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #333;
}

.error {
    background: #fee;
    color: #c00;
    padding: 10px 15px;
    border-radius: 5px;
    margin-bottom: 20px;
    text-align: center;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
    color: #555;
    font-weight: 500;
}

input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    transition: border-color 0.3s;
    box-sizing: border-box;
}

input:focus {
    outline: none;
    border-color: #667eea;
}

button {
    width: 100%;
    padding: 14px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
}

button:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

button:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

.register-link {
    text-align: center;
    margin-top: 20px;
    color: #666;
}

.register-link a {
    color: #667eea;
    text-decoration: none;
    font-weight: 500;
}

.register-link a:hover {
    text-decoration: underline;
}
</style>
