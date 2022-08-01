<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <router-link :to="{name: 'Home'}"><img class="mx-auto h-12 w-auto" src="../assets/moneyguru.svg" alt="Workflow" /></router-link>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Already have an account?
          {{ ' ' }}
          <router-link :to="{name: 'Login'}" class="font-medium text-fuchsia-900 hover:text-fuchsia-700"> Sign in here</router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit="register">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="fullname" class="sr-only">Full Name</label>
            <input id="fullname" name="name" type="name" autocomplete="name" required="" v-model="user.name" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-fuchsia-900 focus:border-fuchsia-700 focus:z-10 sm:text-sm" placeholder="Full Name" />
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" v-model="user.email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-m-md focus:outline-none focus:ring-fuchsia-900 focus:border-fuchsia-700 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" v-model="user.password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-m-md focus:outline-none focus:ring-fuchsia-900 focus:border-fuchsia-700 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
          <div>
            <label for="password_confirmation" class="sr-only">Confirm Password</label>
            <input id="password_confirmation" name="password_confirmation" type="password" autocomplete="current-password-confirmation" required="" v-model="user.password_confirmation" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-fuchsia-900 focus:border-fuchsia-700 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-sky-900 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-white-100 group-hover:text-slate-400" aria-hidden="true" />
            </span>
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/solid'
import store from '../store';
import {useRouter} from "vue-router";

const router = useRouter();

const user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
};
function register(ev) {
  ev.preventDefault();
  store
    .dispatch('register', user)
    .then((res) => {
      router.push({
        name: 'Home'
      })
    })
}
</script>
