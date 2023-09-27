<template>
  <div class="main-container">
    <Chessboard @squareClicked="handleSquareClicked" />
    <Sidebar :squares="clickedSquares" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Chessboard from './components/Chessboard.vue';
import Sidebar from './components/Sidebar.vue';
import type { Square } from './components/Chessboard.vue';

const clickedSquares = ref<Square[]>([]);

const handleSquareClicked = (square: Square) => {
  clickedSquares.value.unshift(square);
  if(clickedSquares.value.length > 19) {
    clickedSquares.value.pop();
  }
};
</script>

<style scoped>
  .main-container {
    display: flex;
    max-height: 100vh;
  }

  @media (max-width: 480px) {
    .main-container {
      flex-direction: column;
    }
    .chessboard {
      width: 100vw;
      padding-top: calc(100vw);
    }
  }
</style>
