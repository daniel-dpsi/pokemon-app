<template>
  <q-layout view="lHh lpR fFf">
    <q-header
      reveal
      bordered
      class="bg-white text-black font-mono"
      height-hint="98"
    >
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title align="left">
          PRIOT | Frontend Assignment
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs align="center">
        <q-route-tab to="/" label="Home" />
        <q-route-tab to="/collection" label="Collection" />
      </q-tabs>
    </q-header>

    <q-drawer
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
      behavior="mobile"
      bordered
    >
      <!-- drawer content -->
      <h4 class="text-center">Sources</h4>

      <q-card class="my-card q-ma-md">
        <q-img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
        >
          <div class="absolute-bottom text-subtitle2 text-center">
            <a
              href="https://pokeapi.co/"
              style="text-decoration: none; color: white"
              >Poke API</a
            >
          </div>
        </q-img>
      </q-card>

      <q-card class="my-card q-ma-md">
        <q-img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          <div class="absolute-bottom text-subtitle2 text-center">
            <a
              href="https://quasar.dev/"
              style="text-decoration: none; color: white"
              >Quasar Framework</a
            >
          </div>
        </q-img>
      </q-card>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
</script>

<style></style>
