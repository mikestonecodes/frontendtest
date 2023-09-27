<template>
  <div class="chessboard" @click="moveHighlight($event)">
    <div class="highlight" v-if="highlightPos" :style="{ top: `${highlightPos.y}%`, left: `${highlightPos.x}%` }"></div>
  </div>
</template>


<script setup lang="ts">
  import { ref } from 'vue';

  export interface Square {
    file: number;
    rank: number;
  }

  const highlightPos = ref<{ x: number, y: number } | null>(null);
  const emit = defineEmits(['square-clicked']);

  const moveHighlight = (event: MouseEvent) => {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const file = Math.floor((event.clientX - rect.left) / (rect.width / 8));
    const rank = Math.floor((event.clientY - rect.top) / (rect.height / 8));
    highlightPos.value = { x: (file * 12.5), y: rank * 12.5 };
    emit('square-clicked', { file, rank });
  };
</script>
<style scoped>
.chessboard {
  --board-size-width: calc(100% - 400px);
  --board-size: min(var(--board-size-width), 100vh);
  width: var(--board-size);
  height: var(--board-size);
  padding-top: var(--board-size);
  background: url(https://images.chesscomfiles.com/chess-themes/boards/green/150.png) no-repeat center;
  background-size: cover;
  position: relative;
}

.highlight {
  width: calc((100% / 8));
  height: calc((100% / 8));
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  box-shadow: 0 0 3px 3px #fff;
  box-sizing: content-box;
  pointer-events: none;
  animation: blink 0.8s infinite;
}

@keyframes blink {
  0% {
    opacity: 0.7;
  }

  50% {
    opacity: 0.35;
  }

  100% {
    opacity: 0.7;
  }
}
</style>