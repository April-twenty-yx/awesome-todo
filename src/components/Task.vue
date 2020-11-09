<template>
  <q-item
    v-ripple
    clickable
    @click="updateTask({ id: id, update: { complete: !task.complete }})"
    :class="task.complete ? ' bg-green-1 ' : 'bg-orange-1' "
  >
    <q-item-section side top>
      <q-checkbox v-model="task.complete" />
    </q-item-section>
    <q-item-section>
      <q-item-label :class="{ 'text-strike' : task.complete }">{{ task.name }} {{ id }}</q-item-label>
    </q-item-section>
    <q-item-section side v-show="task.dueDate">
      <div class="row items-center">
        <q-icon name="event" size="1.5rem"></q-icon>
        <div class="column items-end">
          <q-item-label caption>
          {{ task.dueDate }}
          </q-item-label>
          <q-item-label caption>
            <small>{{ task.dueTime }}</small>  
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <q-btn flat round color="primary" icon="edit" @click.stop="showEdit = true"/>
        <q-btn flat round color="primary" icon="delete" @click.stop="delConfirm(id)"/>
      </div>
    </q-item-section>
    <q-dialog v-model="showEdit">
      <edit-card @close="showEdit = false" :task="task" :id="id"></edit-card>
    </q-dialog>
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'

import EditCard from 'components/model/EditCard'
export default {
  props: {
    task: {
      type: Object,
      default () {
        return {}
      }
    },
    id: {
      type: String
    }
  },
  data () {
    return {
      showEdit: false
    } 
  },
  components: {
    EditCard
  },
  methods: {
    ...mapActions({
      'updateTask': 'moduleA/updateTask',
      'del': 'moduleA/delTask'
    }),
    delConfirm (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.del(id)
      })
    }
  }
}
</script>

<style>
  
</style>