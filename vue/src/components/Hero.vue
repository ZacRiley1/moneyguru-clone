<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white">
    <Header class="z-20"/>
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-none sm:pb-16 md:pb-20 lg:max-w-xl lg:w-full lg:pb-28 xl:pb-32">
        <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block text-fuchsia-900 lg:text-white xl:inline lg:font-semibold md:font-medium">Your comparison journey awaits</span>
            </h1>
            <p class="mt-3 text-base text-sky-900 lg:text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light">Pack your bags friend, you’re about to embark upon a journey of discovery. With a little help from Money Guru, we can find the right deal for you.</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-full shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-fuchsia-900  hover:bg-fuchsia-800  md:py-4 md:text-lg md:px-10">Start Your Search</a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-sky-900 bg-sky-100 hover:bg-sky-200 md:py-4 md:text-lg md:px-10">Learn More</a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="absolute lg:inset-y-0 lg:right-0">
      <img class="hidden lg:block h-56 w-full bg-right-top object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="../assets/the_money_guru.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue';

</script>
