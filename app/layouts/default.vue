<template>
  <div class="min-h-screen bg-[#fcfcfc]">
    <slot />
    <!-- <button class="fixed bottom-10 left-10 z-20 text-white" @click="goPrev">
      prev
    </button>
    <button class="fixed bottom-10 right-10 z-20 text-white" @click="goNext">
      next
    </button> -->
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { data, refresh } = useFetch<Slide>("/api/slide");
let timer: NodeJS.Timeout;

onMounted(() => {
  timer = setInterval(async () => {
    if (slides.indexOf(route.name as string) === -1) return;
    refresh();
    if (data.value?.name !== route.name)
      navigateTo(data.value?.name === "index" ? "" : data.value?.name);
  }, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

const slides = [
  "index",
  "rule-society",
  "cooperation",
  "egg",
  "teamwork",
  "team-creativity",
  "kaizen",
  "poll",
  "framework",
  "personality",
];

onKeyStroke("ArrowRight", () => goNext());
onKeyStroke("ArrowLeft", () => goPrev());
onKeyStroke(" ", () => goNext());

const goPrev = async () => {
  // const name = route.name;
  // const key = slides.indexOf(name as string);
  // if (key - 1 >= 0) {
  //   navigateTo(slides[key - 1] === "index" ? "" : slides[key - 1]);
  // }
  await $fetch("/api/prev");
};

const goNext = async () => {
  // const name = route.name;
  // const key = slides.indexOf(name as string);
  // if (key + 1 < slides.length) {
  //   navigateTo(slides[key + 1] === "index" ? "" : slides[key + 1]);
  // }
  await $fetch("/api/next");
};
</script>

<style>
bodys {
  background-color: #e5e5f7;
  opacity: 0.8;
  background:
    linear-gradient(135deg, #68b1e955 25%, transparent 25%) -21px 0/ 42px 42px,
    linear-gradient(225deg, #68b1e9 25%, transparent 25%) -21px 0/ 42px 42px,
    linear-gradient(315deg, #68b1e955 25%, transparent 25%) 0px 0/ 42px 42px,
    linear-gradient(45deg, #68b1e9 25%, #e5e5f7 25%) 0px 0/ 42px 42px;
}
</style>
