<script setup >
import { ref, onMounted } from 'vue';

var products = ref([]);

const fetchProducts = () => {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => products.value = data.products)
};

onMounted(() => {
    fetchProducts();
});

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
    background-color: #b8b7b700;
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

.product:hover {
    box-shadow: 2px 4px 24px -9px rgba(0, 0, 0, 0.33);
    -webkit-box-shadow: 2px 4px 24px -9px rgba(0, 0, 0, 0.33);
    -moz-box-shadow: 2px 4px 24px -9px rgba(0, 0, 0, 0.33);
}

.discount {
    background-color: #fd5b5b;
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