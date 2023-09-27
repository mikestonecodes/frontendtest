<template>
  <div class="sidebar">
      <div class="square" v-for="square in squares" >{{ String.fromCharCode(97 + square.file) }}{{square.rank+1}}</div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Square } from './Chessboard.vue';

const props = defineProps({
  squares: {
    type: Array as PropType<Square[]>,
    required: true
  }
});
</script>

<style scoped>
  .sidebar {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    flex: auto;
    padding: 1rem;
    background-color: #262522; 
    border-right: 1px solid #444; 
    color: #DDD; 
    text-align: center; 
    overflow-y: auto;
    height: 100vh;
  }

  .square {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    color: #DDD;
    padding: 0.25rem 0.5rem;
    background-color: #302E2B; 
    border-radius: 5px;
  }
</style>
