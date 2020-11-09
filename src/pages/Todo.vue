<template>
  <q-page class="" padding>

    <tasks-todo v-if="Object.keys(taskTodos).length" :task-todos="taskTodos"></tasks-todo>
    <no-tasks @show-add-card="dialogShow = true" v-else></no-tasks>
    <tasks-complete v-if="Object.keys(taskComplete).length" :task-complete="taskComplete"></tasks-complete>
    <div class="absolute-bottom text-center q-mb-sm"> 
      <q-btn
        icon="add"
        round
        color="primary"
        size="1.25rem"
        @click="dialogShow = true"
      />
    </div>
    <q-dialog v-model="dialogShow">
      <add-card @close="dialogShow = false"></add-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'


import AddCard from 'components/model/AddCard'
import TasksTodo from 'components/TasksTodo'
import TasksComplete from 'components/TasksComplete'
import NoTasks from 'components/NoTasks'
export default {
  name: 'PageIndex',
  data () {
    return {
      check1: true,
      dialogShow: false
    }
  },
  methods: {
    
  },
  computed: {
    // 当使用 mapGetters 给其他的 getters 起别名时
    // ...mapGetters({ 'alias': ''module/getters })
    ...mapGetters({
      taskTodos : 'moduleA/taskTodos',
      taskComplete: 'moduleA/taskComplete'
    })
  },
  created () {
    console.log(this.$store.getters) // { 'moduleA/tasks': Array(3) }
    // console.log(this.$store.getters['moduleA/tasks']) // => Array
    
  },
  components: {
    AddCard,
    TasksTodo,
    TasksComplete,
    NoTasks
  }
}
</script>

<style lang="stylus">

</style>
