<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>

        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer class="footer">
        <q-tabs
          dense
        >
        <q-route-tab
          icon="list"
          to="/"
          exact
          label="Todo"
        />
        <q-route-tab
          icon="settings"
          to="/setting"
          label="setting"
          exact
        />
        </q-tabs>
    </q-footer>

    <q-drawer
      show-if-above
      bordered
      content-class="bg-primary"
      :width="270"
      :breakpoint="700"
    >
      <q-list dark class="text-grey-5">
        <q-item-label
          header
        >
          Navigation
        </q-item-label>
        <q-item clickable v-ripple v-for="nav in navs" :key="nav.title" :to="nav.to" exact>
          <q-item-section avatar>
            <q-icon :name="nav.icon_name" />
          </q-item-section>
          <q-item-section>
            {{ nav.title }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data () {
    return {
      navs: [
        {
          title: 'Todo',
          icon_name: 'list',
          to: '/'
        },
        {
          title: 'Setting',
          icon_name: 'settings',
          to: '/setting'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
  .q-router-link--exact-active
    color white !important
  @media screen and (min-width: 701px) {
    .footer {
      display: none
    }
  }
</style>
