<template>
  <div class="app">
<Navigation/>
<router-view/>
<Footer/>
  </div>
</template>

<script setup>
import  Navigation  from "@/components/Navigation/Navigation.vue";
import  Footer  from "@/components/Footer/Footer.vue";
</script>

<style>

</style>