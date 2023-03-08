<script setup >
import { ref } from 'vue';

var products = ref([]);


fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => products.value = data.products)


// console.log(result.value)
</script>

<template>
    <main class="grid-container">
        <div class="product" v-for="product in products" :key="product.id">
            <p class="discount">{{ product.discountPercentage }}% OFF</p>
            <img src="https://i.dummyjson.com/data/products/1/3.jpg" />
            <h3>{{ product.title }}</h3>
            <p>${{ product.price }}</p>
            <p>Rating {{ product.rating }}</p>
        </div>
    </main>
</template>

<style scoped>
main {
    margin: 0px 60px;
}

main img {
    width: 350px;
}

.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;
}

.product {
    padding: 10px;
    border: 1px solid rgb(236, 234, 234);
    border-radius: 10px;
    text-align: left;
}

.discount {
    background-color: rgb(253, 91, 91);
    color: white;
    border-radius: 5px;
    padding: 2px;
    width: 100px;
    position: absolute;
    top: -110%;
    left: -1%;
    text-align: center;
}
</style>