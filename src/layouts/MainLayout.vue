<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="py-8 bg-slate-800">
      <q-toolbar class="row">
        <div class="col-8">
          <q-toolbar-title>
            <div>LOGO</div>
          </q-toolbar-title>
        </div>
        <div class="col-4 flex">
          <q-toolbar-title class="cursor-pointer hover:text-sky-400">
            <q-btn class="text-lg" flat to="/">Home</q-btn>
          </q-toolbar-title>
          <q-toolbar-title class="cursor-pointer hover:text-sky-400">
            <q-btn class="text-lg" flat to="/about">About</q-btn>
          </q-toolbar-title>
          <q-toolbar-title class="cursor-pointer hover:text-sky-400">
            <q-btn class="text-lg" flat to="/service">Service</q-btn>
          </q-toolbar-title>
          <q-toolbar-title class="cursor-pointer hover:text-sky-400">
            <q-btn class="text-lg" flat to="/contact">Contact</q-btn>
          </q-toolbar-title>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
