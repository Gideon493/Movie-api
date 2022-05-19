<template>
<div class="movie-detail">
    <p class="fs-2">{{movie.Title}}</p>
    <p>{{movie.Year}}</p>
    <img :src="movie.Poster" alt="Movie Poster" class="featured-img">
    <br>
    <p>{{movie.Plot}}</p>
</div>
</template>

<script>
import {
    ref,
    onBeforeMount
} from 'vue'
import {
    useRoute
} from 'vue-router';
import env from '@/env.js'

export default {
    setup() {
        const movie = ref({});
        const route = useRoute()

        onBeforeMount(() => {
            fetch(`http://www.omdbapi.com/?apikey=${env.apiKey}&i=${route.params.id}&=full`)
                .then(response => response.json())
                .then(data => {
                    movie.value = data;

                })
        });
        return {
            movie
        }

    }

}
</script>

<style scoped>
p {
    color: black;
    font-size: 20px;
}

img {
    width: 60%;
    height: 20rem;
    margin-left: 10rem;
}
.movie-detail{
    background-color: lightpink;
}
</style>
