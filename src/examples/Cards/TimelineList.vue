<script setup lang="ts">
defineOptions({
  name: 'TimelineList',
})

interface Props {
  title?: string
  description?: string
  dark?: boolean
}

withDefaults(defineProps<Props>(), {
  title: '',
  description: '',
  dark: false,
})
</script>

<template>
  <div class="card" :class="dark ? 'bg-gradient-dark' : ''">
    <div class="pb-0 card-header" :class="dark ? 'bg-transparent' : ''">
      <h6 :class="dark ? 'text-white' : ''">
        {{ title }}
      </h6>
      <p v-if="description" class="text-sm" v-html="description" />
    </div>
    <div class="p-3 card-body">
      <div class="timeline timeline-one-side" :data-timeline-axis-style="dark ? 'dashed' : 'dotted'">
        <slot />
      </div>
    </div>
  </div>
</template>
