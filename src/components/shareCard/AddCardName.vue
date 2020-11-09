<template>
  <div class="q-mb-sm row">
    <q-input ref="name" class="col" outlined :value="name" @input="$emit('update:name', $event)" label="Task name" :rules="[val => !!val || 'Field is required']">
      <template v-slot:append>
        <q-icon v-if="name !== ''" name="close" @click="$emit('update:name', '')" class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    }
  }
}
</script>

<style lang="">
  
</style>
