<template>
  <div class="z-10 bg-white centered p-8 rounded-2xl">
    <button class="absolute top-5 right-5" @click="$emit('closePopup')">
      <img src="../assets/close.svg" alt="closes" />
    </button>
    <form @submit.prevent="resolveSubmit">
      <h2 class="text-4xl mb-4 font-medium">Tax deduction</h2>
      <p class="mb-6 text-gray-400">
        Use the tax deduction to pay off your mortgage ahead of schedule. The
        tax deduction is more than 13% of your official annual income
      </p>
      <label class="block mb-2 font-medium" for="salary">your salary</label>
      <input
        class="block mb-2"
        placeholder="input data"
        type="text"
        id="salary"
      />
      <button class="block mb-6 text-red-600 font-medium">Calculate</button>
      <div class="mb-10">
        <p class="inline-block mb-6 mr-12 font-medium">What are we reducing?</p>
        <template v-for="reducingValue in ReducingValue" :key="reducingValue">
          <label class="mr-1" :for="reducingValue">
            {{
              reducingValue.charAt(0).toUpperCase() +
              reducingValue.slice(1).toLowerCase()
            }}
          </label>
          <input
            class="hidden"
            type="radio"
            name="reducing"
            :id="reducingValue"
            :value="reducingValue"
            v-model="formData.reducingValue"
          />
        </template>
      </div>
      <input
        class="block w-full rounded-lg py-4 text-white bg-red-600"
        type="submit"
        value="Add"
      />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "Popup",
  emits: ["closePopup"],
  setup() {
    type Salary = string;

    enum ReducingValue {
      payment = "PAYMENT",
      duration = "DURATION",
    }

    const formData = reactive({
      salary: "" as Salary,
      reducingValue: ReducingValue.payment,
    });

    return {
      formData,
      ReducingValue,
    };
  },

  methods: {
    resolveSubmit() {
      console.log("submit");
    },
  },
});
</script>
