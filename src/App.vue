<template>
  <div class="main-container">
    <Chessboard @squareClicked="handleSquareClicked" />
    <Sidebar :squares="clickedSquares" />
  </div>
</template>

<script lang="ts">
import Chessboard from './components/Chessboard.vue';
import Sidebar from './components/Sidebar.vue';
import type { Square } from './components/Chessboard.vue';
export default {
  components: {
    Chessboard,
    Sidebar
  },
  data(): { clickedSquares: Square[] } {
    return {
      clickedSquares: []
    }
  },
  methods: {
    handleSquareClicked(square: Square) {
      this.clickedSquares.unshift(square);
      if(this.clickedSquares.length > 19) {
        this.clickedSquares.pop();
      }
    }
  }
}
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
