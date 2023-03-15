<script setup >
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import LoadingCom from '../components/LoadingCom.vue'

var product = ref({});
var loading = ref(true)

const route = useRoute();

const { id } = route.params

const fetchProduct = () => {
    const endpoint = `https://dummyjson.com/products/${id}`;

    fetch(endpoint)
        .then((res) => res.json())
        .then(json => product.value = json)
        .finally(() => (loading.value = false))
};

onMounted(() => {
    fetchProduct();
});
</script>

<template>
    <section v-if="loading">
        <LoadingCom />
    </section>
    <section v-else class="grid-container">
        <img :src="product.images[0]" alt="product" />
        <div class="item2">
            <h3>{{ product.title }}</h3>
            <p class="description">{{ product.description }}</p>
            <p class="rate"> {{ product.rating }}⭐</p>
            <p class="stock">{{ product.stock }} left</p>
            <p><span>category</span> {{ product.category }} </p>
        </div>
    </section>
</template>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 80px;
    padding: 50px;
    border: 1px solid black;
    border-radius: 50px;
}

img {
    width: 250px;
    height: 250px;
}

.item2 {
    line-height: 2;
}

h3 {
    font-weight: 900;
    font-size: 24px;
    text-transform: capitalize;

}

p {
    padding: 5px;
    margin: 10px;
}

.description {
    border-radius: 10px;
    color: gray;

}

.stock {
    background-color: rgb(251, 75, 75);
    color: white;
    width: 100px;
    text-align: center;
    border-radius: 15px;
}

span {
    background-color: rgb(38, 176, 3);
    color: white;
    padding: 8px;
    border-radius: 15px;
    text-transform: capitalize;
}
</style>