<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="py-10 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mt-0">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-20">
          <div v-for="feature in features" :key="feature.name" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-20 w-20 rounded-full bg-fuchsia-900 text-white">
                <component :is="feature.icon" class="h-12 w-12" aria-hidden="true" />
              </div>
              <p class="ml-20 text-lg leading-6 font-medium text-gray-900">{{ feature.name }}</p>
            </dt>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { GlobeAltIcon } from '@heroicons/vue/outline'

const features = [
  {
    name: 'Secured Loans',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Car Loans',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Current Accounts',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Savings & Investments',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Mortgages',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Business Accounts',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Business Loans',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    icon: GlobeAltIcon,
  },
]
</script>
