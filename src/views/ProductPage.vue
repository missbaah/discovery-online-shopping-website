<script setup >
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

var product = ref({});

const route = useRoute();

const { id } = route.params

const fetchProduct = () => {
    const endpoint = `https://dummyjson.com/products/${id}`;

    fetch(endpoint)
        .then((res) => res.json())
        .then(json => product.value = json)
};

onMounted(() => {
    fetchProduct();
});
</script>

<template>
    <section>
        <img src="" />
        <div>
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <p>{{ product.rating }}</p>
            <p>{{ product.stock }} left</p>
            <p><span>category</span> {{ product.category }} </p>

        </div>
    </section>
</template>