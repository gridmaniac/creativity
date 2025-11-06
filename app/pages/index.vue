<template>
  <div class="flex min-h-screen items-center justify-center radial-gradient">
    <div class="rounded-2xl z-10 m-10 mx-auto px-5 bg-red-500">
      <h1 class="text-[10em] font-display text-white">
        <ruby>日本の創造性<rt>　　　　　　そうぞうせい</rt></ruby>
      </h1>
    </div>
    <div class="absolute inset-x-0 bottom-0 h-40 flex justify-around">
      <p class="font-rock -mt-10 text-[3rem] relative">
        <span
          class="circle spin size-8 bg-amber-400 rounded-full absolute left-[45%] -top-10 shadow"
        />
        エフゲニ
      </p>
      <p class="font-rock text-[3rem] relative">
        <span
          class="circle spin size-8 bg-amber-400 rounded-full absolute left-[45%] -top-10"
        />リュウ
      </p>
      <p class="font-rock mt-10 text-[3rem] relative">
        <span
          class="circle spin size-8 bg-amber-400 rounded-full absolute left-[45%] -top-10"
        />アントン
      </p>
    </div>
  </div>
</template>

<script setup>
const video = ref(null);
const { attach } = usePingPongVideo({ autoStart: true, speed: 1 });

onMounted(() => {
  attach(video.value);
});
</script>

<style scoped>
.radial-gradient {
  background-color: #e5e5f7;
  opacity: 0.8;
  background-image:
    radial-gradient(circle at center center, #68bae8, #e5e5f7),
    repeating-radial-gradient(
      circle at center center,
      #68bae8,
      #68bae8,
      4px,
      transparent 8px,
      transparent 4px
    );
  background-blend-mode: multiply;
}

.circle {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: whiteSmoke;
  box-shadow: 2px -10px 15px 2px var(--color-amber-400) inset;
}

.spin {
  animation: spin 1s infinite linear;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
