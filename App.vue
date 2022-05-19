<template>
<nav>

</nav>
<router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
    background-color: darkgray;

}

nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding-right: 20px;
    font-size: medium;
}

nav div {
    float: right;
}

nav a.router-link-exact-active {
    /*color: #42b983;*/
    color: crimson;
    font-size: 20px;
}
</style>
