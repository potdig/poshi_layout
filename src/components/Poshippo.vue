<template>
  <img src="../assets/poshippo.png">
</template>

<script>
export default {

}
</script>

<style>
img {
  position: relative;
  max-width: 100%;
  animation: flow-up 3s cubic-bezier(0.37, 0, 0.63, 1) infinite alternate;
}

@keyframes flow-up {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-30px);
  }
}
</style>