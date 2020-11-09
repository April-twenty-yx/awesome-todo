<template>
  <q-card>
    <add-card-title>EditCard</add-card-title>
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <add-card-name ref="moduleTaskName" :name.sync="TodoInAdd.name"></add-card-name>
        <add-card-due-date :due-date.sync="TodoInAdd.dueDate"></add-card-due-date>
        <add-card-due-time :due-time.sync="TodoInAdd.dueTime" v-if="TodoInAdd.dueDate"></add-card-due-time>
      </q-card-section>
      <q-card-actions align="right">
        <add-card-btn></add-card-btn>
      </q-card-actions>
      <!-- <pre>{{ TodoInAdd }}</pre> -->
    </form>
    
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

import AddCardTitle from 'components/shareCard/AddCardTitle'
import AddCardName from 'components/shareCard/AddCardName'
import AddCardDueDate from 'components/shareCard/AddCardDueDate'
import AddCardDueTime from 'components/shareCard/AddCardDueTime'
import AddCardBtn from 'components/shareCard/AddCardBtn'
export default {
  props: {
    task: {
      type: Object
    },
    id: {
      type: String
    }
  },
  components: {
    AddCardTitle,
    AddCardName,
    AddCardDueDate,
    AddCardDueTime,
    AddCardBtn
  },
  mounted () {
    this.TodoInAdd = Object.assign({}, this.task)
  },
  data () {
    return {
      TodoInAdd: {
      }
    }
  },
  methods: {
    submitForm () {
      // 用于验证 name 有没有填写
      // console.log(this.$refs.moduleTaskName)
      this.$refs.moduleTaskName.$refs.name.validate()
      if (!this.$refs.moduleTaskName.$refs.name.hasError) {
        this.EditTodo({
          id: this.id,
          update: this.TodoInAdd
        })
        this.$emit('close')
      }
    },
    ...mapActions({
      'EditTodo': 'moduleA/updateTask'
    })
  }
}
</script>

<style >
  
</style>
