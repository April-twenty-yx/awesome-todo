<template>
  <div class="q-mb-sm row">
    <q-input outlined :value="dueTime" @input="$emit('update:dueTime', $event)" label="Duetime" class="col">
      <template v-slot:append>
        <q-icon v-if="dueTime !== ''" name="close" @click="$emit('update:dueTime', '')" class="cursor-pointer" />
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-time :value="dueTime" @input="$emit('update:dueTime', $event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: {
    dueTime: {
      type: String
    }
  }
}
</script>

<style lang="">
  
</style>