<script setup >
import { ref } from 'vue';
var password = ref(password);
var confirmPassword = ref(confirmPassword)
const errorMessage = ref("")

function validatePassword() {
    if (password.value !== confirmPassword.value) {
        errorMessage.value = "Passwords do not match";
        return true
    }
    this.errorMessage = '';
    return true;
}


</script>

<template>
    <main>
        <h1>Sign up here</h1>
        <form>
            <input type="name" placeholder="Jane Doe">
            <input type="email" placeholder="name@email.com">
            <input type="password" placeholder="Password" v-model="password">
            <input type="password" placeholder="Confirm password" v-model="confirmPassword" @input="validatePassword
            ">
            <p v-if="errorMessage" style="color:red">{{ errorMessage }}</p>
            <button>Sign Up</button>
        </form>
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
</style>