<template>
  <div :id="'banner-ad-' + adId"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const adId = ref(Date.now()); 

onMounted(() => {
  const initializeAd = () => {
      if(!window.googletag.didEnable)window.googletag.enableServices();
      window.googletag.didEnable = true;
      window.googletag.cmd.push(function() {
          window.googletag
              .defineSlot('/6355419/Travel/Europe/France/Paris', [300, 250], 'banner-ad-' + adId.value)
              .addService(window.googletag.pubads());
          window.googletag.display('banner-ad-' + adId.value);
      });
  };
  window.addEventListener('load', initializeAd);
});
</script>