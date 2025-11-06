import type { Ref, ShallowRef } from "vue";

// Composable to play a <video> element in a continuous forward/reverse (ping-pong) loop.
// It uses requestAnimationFrame to manually advance/rewind currentTime for consistent behavior
// across browsers (negative playbackRate is not widely supported).

export type PingPongDirection = 1 | -1;

export interface UsePingPongVideoOptions {
  // Seconds per second. 1 = normal speed, 2 = 2x, etc.
  speed?: number;
  // Start direction: 1 = forward, -1 = reverse
  startDirection?: PingPongDirection;
  // If true, automatically start when attached
  autoStart?: boolean;
}

export interface UsePingPongVideoApi {
  // Attach a video element (HTMLElement or Ref)
  attach: (el: HTMLVideoElement | null | undefined) => void;
  // Start/stop controls
  start: () => void;
  stop: () => void;
  toggle: () => void;
  // Adjust playback
  setSpeed: (newSpeed: number) => void;
  setDirection: (newDirection: PingPongDirection) => void;
  // Reactive state
  isPlaying: Ref<boolean>;
  direction: Ref<PingPongDirection>;
  speed: Ref<number>;
  videoEl: ShallowRef<HTMLVideoElement | null>;
}

export function usePingPongVideo(
  options: UsePingPongVideoOptions = {}
): UsePingPongVideoApi {
  const speed = ref(Math.max(0, options.speed ?? 1));
  const direction = ref<PingPongDirection>(
    (options.startDirection ?? 1) as PingPongDirection
  );
  const isPlaying = ref(false);
  const videoEl = shallowRef<HTMLVideoElement | null>(null);

  let rafId = 0;
  let lastTs = 0;

  function step(ts: number) {
    const el = videoEl.value;
    if (!el || !isPlaying.value) return;

    if (lastTs === 0) {
      lastTs = ts;
    }
    const dt = (ts - lastTs) / 1000; // seconds
    lastTs = ts;

    // Ensure we have metadata
    const duration =
      Number.isFinite(el.duration) && el.duration > 0 ? el.duration : 0;
    if (!duration) {
      rafId = requestAnimationFrame(step);
      return;
    }

    // Ensure native playback does not fight our manual stepping
    if (!el.paused) {
      el.pause();
    }

    const delta = dt * speed.value * direction.value;
    let nextTime = el.currentTime + delta;

    if (nextTime >= duration) {
      nextTime = duration;
      el.currentTime = nextTime;
      direction.value = -1;
    } else if (nextTime <= 0) {
      nextTime = 0;
      el.currentTime = nextTime;
      direction.value = 1;
    } else {
      el.currentTime = nextTime;
    }

    rafId = requestAnimationFrame(step);
  }

  function start() {
    if (isPlaying.value) return;
    isPlaying.value = true;
    lastTs = 0;
    rafId = requestAnimationFrame(step);
  }

  function stop() {
    if (!isPlaying.value) return;
    isPlaying.value = false;
    lastTs = 0;
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
  }

  function toggle() {
    if (isPlaying.value) stop();
    else start();
  }

  function setSpeed(newSpeed: number) {
    speed.value = Math.max(0, Number(newSpeed) || 0);
  }

  function setDirection(newDirection: PingPongDirection) {
    direction.value = newDirection === -1 ? -1 : 1;
  }

  function attach(el: HTMLVideoElement | null | undefined) {
    // Detach existing
    if (videoEl.value && videoEl.value !== el) {
      stop();
    }
    videoEl.value = el ?? null;
    if (!videoEl.value) return;

    // Make sure video does not auto-play natively
    videoEl.value.pause();

    // If metadata not loaded yet, wait before optionally auto-starting
    const tryAutoStart = () => {
      if (options.autoStart) start();
    };

    if (Number.isFinite(videoEl.value.duration) && videoEl.value.duration > 0) {
      tryAutoStart();
    } else {
      const onLoaded = () => {
        videoEl.value?.removeEventListener("loadedmetadata", onLoaded);
        tryAutoStart();
      };
      videoEl.value.addEventListener("loadedmetadata", onLoaded);
    }
  }

  onBeforeUnmount(() => {
    stop();
    videoEl.value = null;
  });

  return {
    attach,
    start,
    stop,
    toggle,
    setSpeed,
    setDirection,
    isPlaying,
    direction,
    speed,
    videoEl,
  };
}
