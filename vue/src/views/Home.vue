<template>
  <div id="app" class="min-h-screen w-full bg-gray-200">
    <main>
      <Hero/>
      <Services/>
      <Providers/>
      <Trending/>
      <Explanation/>
      <Wisdom/>
      <Footer/>
    </main>
  </div>
</template>

<script setup>
import Hero from "../components/Hero.vue";
import Services from "../components/Services.vue";
import Providers from "../components/Providers.vue";
import Trending from "../components/Trending.vue";
import Explanation from "../components/Explanation.vue";
import Wisdom from "../components/Wisdom.vue";
import Footer from "../components/Footer.vue";

</script>

<style scoped>

</style>
