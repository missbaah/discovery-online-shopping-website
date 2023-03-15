<script setup >
import { useStore } from 'vuex';
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const store = useStore();
const name = ref("")
const email = ref("")
var password = ref("")
var confirmPassword = ref("")
const errorMessage = ref("")

const form = reactive({
    name, email, password, confirmPassword

})

function submitdetails() {
    store.commit("details", form)
    name.value = ""
    email.value = ""
    password.value = ""
    confirmPassword.value = ""
    router.push({ name: "login" })
}

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        errorMessage.value = "Passwords do not match";
        return true
    }
    errorMessage.value = '';
    return true;
}


</script>

<template>
    <main>
        <h1>Sign up here</h1>
        <form @submit.prevent="submitdetails">
            <input type="name" placeholder="Jane Doe" v-model="name">
            <input type="email" placeholder="name@email.com" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <input type="password" placeholder="Confirm password" v-model="confirmPassword" @input="validatePassword
            ">
            <p v-if="errorMessage" style="color:red">{{ errorMessage }}</p>
            <button type="submit" :disabled="!name || !email || !password || !confirmPassword">Sign Up</button>
        </form>
        <p class="mgs">Already have an account? Login <RouterLink to="/login">here</RouterLink>
        </p>
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

.mgs {
    text-align: center;
    margin: 20px;
    font-size: 12px;
    color: rgb(171, 102, 235);
}

.mgs a {
    color: rgb(171, 102, 235);
}
</style>