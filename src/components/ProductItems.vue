<script setup>
import LoadingCom from "../components/LoadingCom.vue"
import { ref, onMounted, computed } from 'vue';

var products = ref([]);
var loading = ref(true);

const currentPage = ref(1)
const pageSize = 6

const paginateProducts = computed(() => {
    const startIndex = (currentPage.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return products.value.slice(startIndex, endIndex);
})

const totalPages = computed(() => {
    return Math.ceil(products.value.length / pageSize);
})

const previousPage = () => {
    currentPage.value -= 1;
}
const nextPage = () => {
    currentPage.value += 1;
}

const fetchProducts = () => {
    fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => products.value = data.products)
        .finally(() => (loading.value = false))
};


onMounted(() => {
    fetchProducts();
});

</script>

<template>
    <main class="grid-container">
        <div class="loading" v-if="loading">
            <LoadingCom />
        </div>
        <div v-else class="product" v-for="product in paginateProducts" :key="product.id">
            <p class="discount">{{ product.discountPercentage }}% OFF</p>
            <img :src='product.thumbnail' alt="thumbnail" />
            <h3>{{ product.title }}</h3>
            <p>${{ product.price }}</p>
            <p>Rating {{ product.rating }}</p>
            <button @click="$router.push(`/products/${product.id}`)">View More</button>
        </div>
    </main>
    <div class="pagination">
        <button :disabled="currentPage === 1" @click="previousPage">Previous</button>
        <span>{{ currentPage }} of {{ totalPages }}</span>
        <button :disabled="currentPage === totalPages" @click="nextPage">Next</button>
    </div>
</template>

<style scoped>
main {
    background-color: #b8b7b700;
    margin: 0px 60px;
}


img {
    width: 300px;
    height: 300px;
    margin: 0px 1%;
}


h3 {
    text-transform: capitalize;
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
    top: -2%;
    left: -3%;
    text-align: center;
    z-index: 3;
}

.pagination {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
}

.pagination button {
    background-color: white;
    border: 1px solid black;
    color: black;
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s, color 0.2s;
}

.pagination button:hover:not(:disabled) {
    background-color: black;
    color: white;
}

.pagination button:disabled {
    opacity: 0.5;
    cursor: default;
}

.pagination span {
    font-size: 1.2rem;
    margin: 0 1rem;
}
</style>