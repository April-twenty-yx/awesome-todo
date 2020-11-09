<template>
  <q-banner :class="bgColor" inline-actions class="list-header text-white text-center ">
    <span class="text-subtitle1">
      <slot></slot>
    </span>
  </q-banner>
</template>

<script>
export default {
  props: {
    bgColor: {
      type: String
    }
  }
}
</script>

<style>
  .list-header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>