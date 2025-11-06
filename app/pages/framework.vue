<template>
  <div class="flex flex-col h-screen justify-center items-center bg-blue-400">
    <div class="flex justify-center w-full gap-24">
      <p class="text-[10rem] font-display pulse">共</p>
      <p class="text-[10rem] font-secondary gelatine">直</p>
      <p class="text-[10rem] font-small hithere">美</p>
    </div>
    <p
      class="rounded-full px-4 text-[20rem] font-secondary text-red-500 bg-amber-400"
    >
      感
    </p>
  </div>
</template>

<style>
.pulse {
  animation: pulse 1s infinite ease-in-out alternate;
}
@keyframes pulse {
  from {
    transform: scale(0.8);
  }
  to {
    transform: scale(1.2);
  }
}

.gelatine {
  animation: gelatine 0.5s infinite;
}
@keyframes gelatine {
  from,
  to {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}

.hithere {
  animation: hithere 1s ease infinite;
}
@keyframes hithere {
  30% {
    transform: scale(1.2);
  }
  40%,
  60% {
    transform: rotate(-20deg) scale(1.2);
  }
  50% {
    transform: rotate(20deg) scale(1.2);
  }
  70% {
    transform: rotate(0deg) scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
