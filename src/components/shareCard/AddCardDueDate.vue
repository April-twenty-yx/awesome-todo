<template>
  <div class="q-mb-sm row">
    <q-input outlined :value="dueDate" @input="$emit('update:dueDate', $event)" label="Duedate" class="col">
      <template v-slot:append>
        <q-icon v-if="dueDate !== ''" name="close" @click="$emit('update:dueDate', '')" class="cursor-pointer" />
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
            <q-date :value="dueDate" @input="$emit('update:dueDate', $event)">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: {
    dueDate: {
      type: String
    }
  }
}
</script>

<style lang="">
  
</style>