<template>
  <div class="q-mt-lg">
    <list-header bg-color="bg-green-4">Complete</list-header>
    <q-list
      bordered 
      separator
      
    >
      <task v-for="(task, key) in taskComplete" :key="key" :id="key" :task="task"></task>
    </q-list>
  </div>
  
</template>

<script>
import Task from 'components/Task'
import ListHeader from 'components/ListHeader'
export default {
  props: {
    taskComplete: {
      type: Object
    }
  },
  components: {
    Task,
    ListHeader
  }
}
</script>

<style lang="">
  
</style>
