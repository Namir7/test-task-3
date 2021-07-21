<template>
  <h1 class="hidden">Tax deduction main page</h1>
  <div
    class="h-screen w-screen flex relative"
    :class="isPopupShown ? 'bg-gray-400' : 'bg-red-600'"
  >
    <button
      class="text-white m-auto py-4 px-8 border border-white rounded-md"
      @click="switchPopup"
    >
      Tax deduction
    </button>
    <fade-transition>
      <popup v-if="isPopupShown" @closePopup="closePopup" />
    </fade-transition>
  </div>
</template>

<script lang="ts">
import FadeTransition from "./components/FadeTransition.vue";
import Popup from "./components/Popup.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: { FadeTransition, Popup },
  data() {
    return {
      isPopupShown: true,
    };
  },
  methods: {
    switchPopup() {
      this.isPopupShown = !this.isPopupShown;
    },
    closePopup() {
      this.isPopupShown = false;
    },
  },
});
</script>

<style lang="scss"></style>
