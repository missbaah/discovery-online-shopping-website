<script setup>

</script>

<template>
    <main>
        <h1>Login Page</h1>
        <form action="">
            <input type="email" placeholder="name@email.com">
            <input type="password" placeholder="Password">
            <button>Login</button>
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
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: #fd5b5b;
}
</style>