<template>
  <div>
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      No tasks to do today!
      <template v-slot:action>
        <q-btn flat color="primary" label="Add Task" @click="$emit('show-add-card')" />
      </template>
    </q-banner>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="">
  
</style>