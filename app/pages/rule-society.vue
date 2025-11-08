<template>
  <div class="flex justify-between items-start p-4">
    <div class="rounded-2xl z-10 m-10 px-5 bg-blue-400 w-40">
      <h1 class="text-[7rem] font-secondary text-white">
        ル<span class="vert -ml-7">ー</span>ル社会
      </h1>
    </div>
    <div class="flex gap-3">
      <div
        class="rounded-2xl z-10 px-5 bg-white w-[8rem] border-blue-400 border-12"
      >
        <h2 class="text-[4rem] font-small text-blue-400">同じやり方</h2>
      </div>
      <div
        class="rounded-2xl z-10 px-5 bg-white w-[8rem] border-blue-400 border-12"
      >
        <h2 class="text-[4rem] font-small text-blue-400">
          　同じペ<span class="vert -ml-4">ー</span>ス
        </h2>
      </div>
    </div>
    <video
      ref="video"
      src="~/assets/sprites/rule-society.MP4"
      playsinline
      muted
      class="object-cover w-full h-full inset-0 absolute"
    />
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
.vert {
  writing-mode: vertical-rl;
}
</style>
