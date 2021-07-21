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
        class="block mb-2 w-full py-2 pl-3 border border-gray-400"
        placeholder="input data"
        type="text"
        id="salary"
      />
      <button
        class="block mb-6 text-red-600 font-medium"
        @click="handleCalculateClick"
      >
        Calculate
      </button>
      <div class="mb-10">
        <p class="inline-block mb-6 mr-12 font-medium">What are we reducing?</p>
        <template v-for="reducingValue in ReducingValue" :key="reducingValue">
          <label
            class="mr-1 py-4 px-2 rounded-3xl bg-gray-100"
            :class="
              reducingValue === formData.reducingValue
                ? 'text-white bg-red-500'
                : ''
            "
            :for="reducingValue"
          >
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
import { formatSalary, formatSalaryViseVerse } from "../utils";

export default defineComponent({
  name: "Popup",
  emits: ["closePopup"],
  setup() {
    type SalaryValue = number;

    enum ReducingValue {
      payment = "PAYMENT",
      duration = "DURATION",
    }

    enum Currency {
      rub = "₽",
      dollars = "$",
    }

    const formData = reactive({
      salary: {
        value: 50000 as SalaryValue,
        currency: Currency.rub,
      },
      reducingValue: ReducingValue.payment,
    });

    return {
      formData,
      ReducingValue,
    };
  },
  computed: {
    salaryValue(): string {
      return formatSalary(this.formData.salary);
    },
  },
  methods: {
    resolveSubmit(): void {
      console.log("submit");
    },
    handleCalculateClick(): void {
      console.log("calculated");
    },

    handleSalaryInput(event: InputEvent) {
      const target = event.target as HTMLInputElement;
      const value = target.value;
      this.formData.salary.value = formatSalaryViseVerse(value);
    },
  },
});
</script>
