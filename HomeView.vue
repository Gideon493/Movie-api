<template>
<div class="home">

    <div class="one">
        Welcome to <span>All</span><span style="color:green;">Vue</span><span style="color:lightgray;">Movies</span>
    </div>

    <div class="featured-card">
        <router-link to="/movie/tt0409591">
            <img src="https://rajerc.com/wp-content/uploads/2022/04/fortnite-naruto-sasuke-sakura-and-kakashi-outfits-1920x1080-03fb4a1e5fbc.jpg" alt=" Spider man " class="featured-img">
            <div class="detail">
                <h3>Naruto</h3>

                <p class="fs-5">Naruto Uzumaki, a mischievous adolescent ninja, struggles as he searches for recognition and dreams of becoming the Hokage, the village's leader and strongest ninja.</p>
            </div>

        </router-link>
    </div>
    <form @submit.prevent="searchMovies()" class="search-box">
        <input type="text" class="w-50 h-25 shadow flex-shrink-1 bg-opacity-10" placeholder="What movie are you looking for?" v-model="search">
        <br>
        <input type="submit" value="Search" class="btn btn-success w-25 ">
        <!--</form>-->
        <div class="movies-list">
            <div class="movies" v-for="movie in movies" :key="movie.imdbID">
                <router-link :to="'/movie/' + movie.imdbID">
                    <div class="product-image">
                        <img :src="movie.Poster" alt="Movie Poster">
                        <div class="type">{{movie.Type}}</div>
                    </div>
                    <div class="detail">
                        <p class="year">{{movie.Year}}</p>
                        <br>
                        <h3 class="text-success">{{movie.Title}}</h3>
                    </div>

                </router-link>

            </div>
        </div>
    </form>

</div>
</template>

<script>
import {
    ref
} from 'vue'
import env from '@/env.js'

export default {
    setup() {
        const search = ref("");
        const movies = ref([]);

        const searchMovies = () => {
            if (search.value != "") {
                fetch(`http://www.omdbapi.com/?apikey=${env.apiKey}&s=${search.value}`)
                    .then(response => response.json())
                    .then(data => {
                        movies.value = data.Search;
                        search.value = "";

                    });
            }

        }

        return {
            search,
            movies,
            searchMovies
        }
    }

}
</script>

<style>
.search-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    background-color: #2c3e50;

}

.search-box input {
    display: block;
    appearance: none;
    border: none;

}

.one {
    /*background-color: rgb(25, 25, 97);*/
    background-color: #2c3e50;
    color: lightgray;
}

.home {
    font-size: 40px;
}

.featured-card {
    position: relative;

}

.featured-img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: relative;
    z-index: 0;
}

.detail {
    position: absolute;
    left: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
}

.detail h3,
p {
    color: #fff;
}

.movies-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

}

span {
    font-family: cursive;
}
</style>
