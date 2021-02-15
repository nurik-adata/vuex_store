<template>
<header class="header">
    <nav class="nav"> 
        <ul class="nav-links">
            <li class="link">
                <router-link to = '/' >All Products</router-link>
            </li>
            <li class="link">
                <router-link to = '/phones'>Phones</router-link>
            </li>
            <li class="link">
                <router-link to = '/laptops'>Laptops</router-link>
            </li>
        </ul>
    </nav>
</header>
  
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    width: 100%;
    height: 50px;
    background-color: blueviolet;
    display: flex;
    justify-content: center;
    align-content: center;
} 
.nav{
    width: 500px;

}
.nav-links{
    width: 100%;
    display: flex;
    justify-content: space-evenly;

}
.link{
    list-style: none;
    padding: 0 2em;
}
.link a{
    text-decoration: none;
    color: #FFFFFF;

}

</style>