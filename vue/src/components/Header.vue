<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative bg-none md:border-b-0 sm:border-b-2">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-5 md:justify-start md:space-x-10">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">MoneyGuru</span>
            <img class="hidden lg:block h-14 w-auto sm:h-15" src="../assets/moneyguru_wht.svg" alt="" />
            <img class="block lg:hidden h-8 w-auto sm:h-10" src="../assets/moneyguru.svg" alt="" />
          </a>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fuchsia-900">
            <span class="sr-only">Open menu</span>
            <MenuIcon class="h-6 w-6" aria-hidden="true" />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <!-- Loans -->
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-sky-900 bg-white' : 'text-sky-900 lg:text-white', 'group bg-none rounded-md inline-flex items-center text-base font-medium hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900']">
              <span>Loans</span>
              <ChevronDownIcon :class="[open ? 'text-sky-600' : 'text-sky-900 lg:text-white', 'ml-2 h-5 w-5 group-hover:text-sky-900']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in loans" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-fuchsia-900" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>

                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <!-- Credit Cards -->
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-sky-900 bg-white' : 'text-sky-900 lg:text-white', 'group bg-none rounded-md inline-flex items-center text-base font-medium hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900']">
              <span>Credit Cards</span>
              <ChevronDownIcon :class="[open ? 'text-sky-600' : 'text-sky-900 lg:text-white', 'ml-2 h-5 w-5 group-hover:text-sky-900']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in cards" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-fuchsia-900" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>

                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <!-- Mortgages -->
          <a href="#" class="text-base font-medium text-sky-900 lg:text-white hover:text-sky-900"> Mortgages </a>
          <!-- More -->
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-sky-900 bg-white' : 'text-sky-900 lg:text-white', 'group bg-none rounded-md inline-flex items-center text-base font-medium hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900']">
              <span>More</span>
              <ChevronDownIcon :class="[open ? 'text-sky-600' : 'text-sky-900 lg:text-white', 'ml-2 h-5 w-5 group-hover:text-sky-900']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in solutions" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-fuchsia-900" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div v-for="item in callsToAction" :key="item.name" class="flow-root">
                      <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                        <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                        <span class="ml-3">{{ item.name }}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <!-- Insights -->
          <Popover class="relative" v-slot="{ open }">
            <PopoverButton :class="[open ? 'text-sky-900 bg-white' : 'text-sky-900 lg:text-white', 'group bg-none rounded-md inline-flex items-center text-base font-medium hover:text-sky-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-900']">
              <span>Insights</span>
              <ChevronDownIcon :class="[open ? 'text-sky-900' : 'text-sky-900 lg:text-white', 'ml-2 h-5 w-5 group-hover:text-sky-900']" aria-hidden="true" />
            </PopoverButton>

            <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 translate-y-1" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-1">
              <PopoverPanel class="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div class="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <a v-for="item in resources" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                      <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-fuchsia-900" aria-hidden="true" />
                      <div class="ml-4">
                        <p class="text-base font-medium text-gray-900">
                          {{ item.name }}
                        </p>
                        <p class="mt-1 text-sm text-gray-500">
                          {{ item.description }}
                        </p>
                      </div>
                    </a>
                  </div>
                  <div class="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                    <div>
                      <h3 class="text-sm tracking-wide font-medium text-gray-500 uppercase">Recent Insights</h3>
                      <ul role="list" class="mt-4 space-y-4">
                        <li v-for="post in recentInsights" :key="post.id" class="text-base truncate">
                          <a :href="post.href" class="font-medium text-gray-900 hover:text-gray-700">
                            {{ post.name }}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="mt-5 text-sm">
                      <a href="#" class="font-medium text-fuchsia-900 hover:text-fuchsia-700"> View all posts <span aria-hidden="true">&rarr;</span></a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>

          <!-- <a href="#" class="text-base font-medium text-sky-900 lg:text-white hover:text-sky-900"> Business </a>-->


        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <router-link :to="{name: 'Login'}" class="whitespace-nowrap text-base font-medium text-sky-900 lg:text-white hover:text-sky-900"> Sign in </router-link>
          <router-link :to="{name: 'Register'}" class="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-fuchsia-900 hover:bg-fuchsia-800"> Sign up </router-link>
          <LogoutIcon @click="logout" class="w-5 h-5 ml-3 text-white cursor-pointer"></LogoutIcon>
        </div>
      </div>
    </div>

    <transition enter-active-class="duration-200 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="../assets/moneyguru.svg" alt="Workflow" />
              </div>
              <div class="-mr-2">
                <PopoverButton class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fuchsia-900">
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <a v-for="item in condensed" :key="item.name" :href="item.href" class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50">
                  <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-fuchsia-900" aria-hidden="true" />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </a>
              </nav>
            </div>
          </div>
          <div class="px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
            <div v-for="item in callsToAction" :key="item.name" class="flow-root">
              <a :href="item.href" class="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100">
                <component :is="item.icon" class="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                <span class="ml-3">{{ item.name }}</span>
              </a>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div class="grid grid-cols-2 gap-y-4 gap-x-8">
              <a v-for="item in resources" :key="item.name" :href="item.href" class="text-base font-medium text-gray-900 hover:text-gray-700">
                {{ item.name }}
              </a>
            </div>
            <div>
              <router-link :to="{name: 'Register'}" class="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-fuchsia-900 hover:bg-fuchsia-800"> Sign up </router-link>
              <p class="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                {{ ' ' }}
                <router-link :to="{name: 'Login'}" class="text-fuchsia-900 hover:text-fuchsia-800"> Sign in </router-link>
              </p>
              <LogoutIcon @click="logout" class="w-5 h-5 text-fuchsia-900 cursor-pointer"></LogoutIcon>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue';
import {
  CurrencyPoundIcon,
  CreditCardIcon,
  MenuIcon,
  PhoneIcon,
  ViewGridIcon,
  XIcon,
  CashIcon,
  TrendingUpIcon,
  LockClosedIcon,
  GlobeIcon,
  PresentationChartLineIcon,
  NewspaperIcon,
  EyeIcon,
  IdentificationIcon,
  HomeIcon,
  LogoutIcon,
} from '@heroicons/vue/outline';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';


const store = useStore();
const router = useRouter();

const logout = () => {
  store.dispatch("logout")
  .then(() => {
    router.push({
      name: "Home",
    });
  });

}

const loans = [
  {
    name: 'Personal Loans',
    description: 'Bad Credit Loans, Home Improvement Loans, Car Finance Loans & Short Term Loans - Whatever you need, We can help.',
    href: '#',
    icon: CurrencyPoundIcon,
  },
  {
    name: 'Secured Loans',
    description: '',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Business Loans',
    description: "Small Business Loans, Credit Lines, Secured & Unsecured Business Loans, Business Bridging Loans.",
    href: '#',
    icon: GlobeIcon },
  {
    name: 'Need Advice?',
    description: "See our FAQs or Talk to us to get more advice.",
    href: '#',
    icon: ViewGridIcon,
  },
]
const cards = [
  {
    name: 'Compare Credit Cards',
    description: 'Compare all your options for credit cards to find the best fit for you.',
    href: '#',
    icon: CashIcon,
  },
  {
    name: '0% Balance Transfer Cards',
    description: '',
    href: '#',
    icon: CreditCardIcon,
  },
  {
    name: 'Credit Builder Cards',
    description: "",
    href: '#',
    icon: TrendingUpIcon },
  {
    name: 'Need Advice?',
    description: "See our FAQs or Talk to us to get more advice.",
    href: '#',
    icon: ViewGridIcon,
  },
]
const solutions = [
  {
    name: 'Current Accounts',
    description: 'Basic, Switch, High Interest, Overdraft, Student, Under 18 - See whats best for you',
    href: '#',
    icon: CreditCardIcon,
  },
  {
    name: 'Savings & Investment',
    description: 'Savings Accounts, ISAs or just how to invest safely in the UK, Weve got you covered',
    href: '#',
    icon: PresentationChartLineIcon,
  },
  { name: 'Business',
    description: "Business Loans, Cash Advances, Business Accounts",
    href: '#',
    icon: GlobeIcon,
  },
]
const condensed = [
  {
    name: 'Loans',
    description: '',
    href: '#',
    icon: CurrencyPoundIcon,
  },
  {
    name: 'Credit Cards',
    description: '',
    href: '#',
    icon: CreditCardIcon,
  },
  { name: 'Mortgages',
    description: "",
    href: '#',
    icon: HomeIcon,
  },
  {
    name: 'Current Accounts',
    description: '',
    href: '#',
    icon: CashIcon,
  },
  {
    name: 'Savings & Investment',
    description: '',
    href: '#',
    icon: PresentationChartLineIcon,
  },
  { name: 'Business',
    description: "",
    href: '#',
    icon: GlobeIcon,
  },
]
const callsToAction = [
  { name: 'MoneyMatcher', href: '#', icon: CurrencyPoundIcon },
  { name: 'Contact Us', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Latest Insights',
    description: 'Check out the latest and greatest the Guru has to offer',
    href: '#',
    icon: EyeIcon,
  },
  {
    name: 'Press Releases',
    description: 'Whats hot on the press right now',
    href: '#',
    icon: NewspaperIcon,
  },
  {
    name: 'Meet The Guru',
    description: 'Learn more about the man, the myth, the legend that is the Money Guru',
    href: '#',
    icon: IdentificationIcon,
  },
  { name: 'Need advice?',
    description: 'See our FAQs or Talk to us to get more advice.',
    href: '#',
    icon: ViewGridIcon,
  },
]
const recentInsights = [
  { id: 1, name: 'How to invest in CryptoCurrency UK', href: '#' },
  { id: 2, name: 'What is Buy Now Pay Later?', href: '#' },
  { id: 3, name: '12 Financial Resolutions for the New Year', href: '#' },
]
</script>
