<script setup>
import { useStore } from 'vuex';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const store = useStore()

const storeEmail = computed(() => store.state.email)
const storePassword = computed(() => store.state.password)

const email = ref("");
const password = ref("");
const errmgs = ref("")

function validateForm() {
    if (storeEmail.value === email.value && storePassword.value === password.value) {
        localStorage.setItem("token", "successful")
        console.log("login successful")
        router.push({ name: "products" })
    } else {
        errmgs.value = "Login details not correct"
    }

}





</script>

<template>
    <main>
        <h1>Login Page</h1>
        <form @submit.prevent="validateForm">
            <input type="email" placeholder="name@email.com" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button :disabled="!email || !password">Login</button>
        </form>
        <p class="mgs">Don't have an account? Sign up <RouterLink to="/signup">here</RouterLink>
        </p>
        <p class="error">{{ errmgs }}</p>
    </main>
</template>

<style scoped>
h1 {
    text-align: center;
    margin-bottom: 30px;
}

form {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    gap: 25px;
}

form input {
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid gray;
}

form button {
    font-size: 16px;
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #72d872;
}

.error {
    padding: 10px;
    margin: 10px;
    text-align: center;
    color: red;
}

.mgs {
    text-align: center;
    margin: 20px;
    font-size: 12px;
    color: rgb(171, 102, 235);
}

.mgs a {
    color: rgb(171, 102, 235);
}

@media only screen and (max-width: 768px) {
    main {
        margin-top: 100px;
    }
}
</style>