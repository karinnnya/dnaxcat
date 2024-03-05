<template>
    <div class=" animate-down">
        <svg class=""
            xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40">
            <path
                d="M480-200 240-440l56-56 184 183 184-183 56 56-240 240Zm0-240L240-680l56-56 184 183 184-183 56 56-240 240Z" />
        </svg>
    </div>
</template>


<style lang="scss">
@keyframes downIcon {

0%,
100% {
  transform:  translateY(-25%) translateX(50%);

  animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
}

50% {
  transform: translateY(0%) translateX(50%);
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
}

.animate-down {
animation: downIcon 1s infinite;
}
</style>