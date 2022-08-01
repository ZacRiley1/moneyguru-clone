<template>
  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <router-link :to="{name: 'Home'}"><img class="mx-auto h-12 w-auto" src="../assets/moneyguru.svg" alt="Workflow" /></router-link>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Don't have an account?
          {{ ' ' }}
          <router-link :to="{name: 'Register'}" class="font-medium text-fuchsia-900 hover:text-fuchsia-700"> Sign up here</router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit="login">
      <div v-if="errorMsg" class="flex items-center justify-between py-3 px-5 bg-red-500 text-white rounded">
      {{errorMsg}}
      <XCircleIcon @click="errorMsg = ''" class="w-8 h-8 transition-colors hover:fill-red-400 cursor-pointer"></XCircleIcon>
      </div>
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required="" v-model="user.email" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-fuchsia-900 focus:border-fuchsia-700 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required="" v-model="user.password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-fuchsia-900 focus:border-fuchsia-700 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              v-model="user.remember"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-sky-900 hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-white-100 group-hover:text-slate-400" aria-hidden="true" />
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/solid';
import { XCircleIcon } from '@heroicons/vue/outline';
import store from '../store';
import { useRouter } from 'vue-router';
import {ref} from 'vue';

const router = useRouter();

const user = {
  email: '',
  password: '',
  remember: false
}

let errorMsg = ref('');

function login(ev) {
  ev.preventDefault();

  store
    .dispatch('login', user)
    .then(() => {
      router.push({
        name: 'Home'
      })
    })
    .catch(err => {
      errorMsg.value = err.response.data.error;
    })
}
</script>
