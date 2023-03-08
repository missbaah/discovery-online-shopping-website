<script setup >
</script>

<template>
    <main>
        <h1>Welcome to <span>Discovery Online Shop</span> </h1>
        <div>
            <p>Discover a wide range of items for your everyday needs at affordable prices!</p>
            <p>Sign up if you are new to view items at unbeatable prices</p>
        </div>
        <div>
            <button @click="$router.push({ name: 'signup' })">Sign Up</button>
            <button @click="$router.push({ name: 'login' })">Login</button>
        </div>
    </main>
</template>

<style scoped>
main {
    min-height: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
}

h1 {
    font-size: 48px;
    text-align: center;
}

h1 span {
    color: #fd5b5b;

}

p {
    font-size: 16px;
    text-align: center;
}
</style>