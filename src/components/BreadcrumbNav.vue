<script setup lang="ts">
defineProps<{ items: { name: string; path: string }[] }>()
</script>

<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li v-for="(item, i) in items" :key="item.path">
        <router-link v-if="i < items.length - 1" :to="item.path">{{ item.name }}</router-link>
        <span v-else aria-current="page">{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumb ol {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  padding: 0;
  margin: 0 0 1.75rem;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.breadcrumb li + li::before {
  content: '/';
  margin-right: 0.35rem;
  color: var(--border-strong);
}

.breadcrumb a {
  color: var(--text-secondary);
}

.breadcrumb a:hover {
  color: var(--primary);
}
</style>
