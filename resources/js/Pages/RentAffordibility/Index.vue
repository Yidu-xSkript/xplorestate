<template>
  <teleport to="head">
    <title>
      How much rent can i afford? - Rent Affordibility Calculator | Xplorestate
    </title>
  </teleport>
  <div id="titlebar">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h2>Rent Affordibility Calculator</h2>
          <nav id="breadcrumbs">
            <ul>
              <li><inertia-link :href="route('home')">Home</inertia-link></li>
              <li>Rent Affordibility Calculator</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  <div class="container affordibility">
    <div class="row">
      <div class="col-md-12">
        <p>
          This calculator shows rentals that fit your budget. Savings, debt and
          other expenses could impact the amount you want to spend on rent each
          month. Input your net (after tax) income and the calculator will
          display rentals up to 40% of your estimated gross income. Property
          managers typically use gross income to qualify applicants, so the tool
          assumes your net income is taxed at 35%.
        </p>
      </div>
      <div class="my-account col-md-12">
        <h2>Calculate</h2>
        <hr
          style="
            margin: 0px;
            margin-right: 95%;
            border: 2px solid #006aff;
            margin-bottom: 30px;
          "
        />
        <div class="row">
          <p class="col-md-4">
            <label for="netIncome"
              >Monthly Net Income:
              <i class="im im-icon-Money"></i>
              <input
                type="number"
                class="input-text"
                v-model="model.net_income"
                id="netIncome"
                placeholder="Income after taxes"
                autocomplete="off"
              />
            </label>
          </p>
          <p class="col-md-4">
            <label for="debts"
              >Monthly debts:
              <i class="im im-icon-Money"></i>
              <input
                type="number"
                class="input-text"
                v-model="model.debt"
                placeholder="loans, ..."
                id="debts"
                autocomplete="off"
              />
            </label>
          </p>
          <p class="col-md-4">
            <label for="usernamsavings"
              >Monthly Savings:
              <i class="im im-icon-Money"></i>
              <input
                type="number"
                class="input-text"
                v-model="model.saving"
                placeholder="savings, ..."
                id="savings"
                autocomplete="off"
              />
            </label>
          </p>
          <p class="col-md-6">
            <label for="expense"
              >Monthly Expenses:
              <i class="im im-icon-Money"></i>
              <input
                type="number"
                class="input-text"
                v-model="model.expense"
                placeholder="Food, insurance, required items, ..."
                id="expense"
                autocomplete="off"
              />
            </label>
          </p>
          <p class="col-md-6">
            <label for="location"
              >Rental location:
              <i class="sl sl-icon-location"></i>
              <input
                type="text"
                class="input-text"
                id="location"
                placeholder="Neighborhood, city"
                v-model="model.location"
                autocomplete="off"
              />
            </label>
          </p>
        </div>
        <button @click="calculate" v-if="!calculateIsClicked" class="button">
          Calculate & Search
        </button>
      </div>
      <div
        class="col-md-12 margin-top-55"
        v-if="calculateIsClicked && model.net_income > 0"
      >
        <div class="row affordibility-container">
          <div class="col-md-4 col-md-offset-1 text-center">
            <h2>
              <span v-if="spendingLeft > 0"
                >You can afford <strong>{{ numberWithCommas(grossIncome) }} ETB/mo</strong></span
              ><span v-else>You're overbudget at <strong>{{ numberWithCommas(grossIncome) }} ETB/mo</strong></span>
            </h2>
            <p>
              <span v-if="spendingLeft > 0 && sliderVal <= 33"
                >Based on your income, a rental at this price should fit
                comfortably within your budget.</span
              >
              <span class="alert error" v-if="spendingLeft < 0"
                >Careful! your debts and expenses just exceeded your
                income.</span
              >
              <span class="alert error" v-if="sliderVal > 33"
                >Are you sure that you want to spend more than 33% of your
                income on rent?</span
              >
            </p>
            <p>
              You will have
              <strong :class="{ 'alert error': spendingLeft < 0 }"
                >{{ numberWithCommas(spendingLeft) }} ETB/mo</strong
              >
              left to spend.
            </p>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-6">
            <i
              class="tip"
              data-tip-content="You can drag the gross income slider below to find your new affordable home. (i.e. it's preferable to click and drag the tooltip for better movement)"
            ></i>
            <slider
              :value="slider.value"
              :value2="grossIncome"
              :data="slider.data"
              :range="slider.range"
              :lineHeight="20"
              :processStyle="{ backgroundColor: '#006aff' }"
              :tooltipStyles="{
                backgroundColor: 'black',
                borderColor: 'black',
              }"
              :tooltip2Styles="{
                backgroundColor: 'white',
                borderColor: 'white',
                color: 'black',
                'box-shadow': '0px 2px 10px rgba(0,0,0,0.08)',
              }"
              tooltipNote="of gross income"
              tooltipSuffix="%"
              @moving="moving"
              @slide_init="slide_init"
            >
            </slider>
          </div>
        </div>
      </div>
      <div
        class="col-md-12 margin-top-55"
        v-if="calculateIsClicked && model.location !== null"
      >
        <h2 class="margin-bottom-40">
          "<strong>2610</strong>" matching rentals in <strong>Miami FL</strong>
        </h2>
        <div class="row">
          <inertia-link :href="route('estate.detail')" class="col-md-4">
            <div class="result">
              <h3>3,351 ETB/mo</h3>
              <div>2 bed, 2bath, 1199sqft</div>
              <p>3131 NE 1st Ave #811 Miami, FL 33137</p>
            </div>
          </inertia-link>
          <inertia-link :href="route('estate.detail')" class="col-md-4">
            <div class="result">
              <h3>3,351 ETB/mo</h3>
              <div>2 bed, 2bath, 1199sqft</div>
              <p>3131 NE 1st Ave #811 Miami, FL 33137</p>
            </div>
          </inertia-link>
          <inertia-link :href="route('estate.detail')" class="col-md-4">
            <div class="result">
              <h3>3,351 ETB/mo</h3>
              <div>2 bed, 2bath, 1199sqft</div>
              <p>3131 NE 1st Ave #811 Miami, FL 33137</p>
            </div>
          </inertia-link>
        </div>
        <button class="button">See all matching rentals</button>
      </div>
    </div>
  </div>
  <div class="margin-top-55"></div>
</template>

<script>
import Slider from "../../components/slider/Index";
export default {
  components: { Slider },
  data: () => ({
    model: {
      net_income: 0,
      expense: 0,
      saving: 0,
      debt: 0,
      location: null,
    },
    slider: {
      value: 33,
      data: [],
      range: [{ label: "10%" }, { label: "40%" }],
    },
    sliderVal: 0,
    grossIncome: 0,
    spendingLeft: 0,
    calculateIsClicked: false,
  }),
  mounted() {
    this.sliderVal = this.slider.value;
    for (var i = 10; i <= 40; i++) {
      if (i > 11 && i < 40)
        this.slider.range.splice(1, 0, {
          label: `${i.toString()}%`,
          isHide: true,
        });
      this.slider.data.push(i);
    }
  },
  methods: {
    initGrossCalculation(netIncome) {
      var initGross = parseInt(netIncome) * 0.35 + parseInt(netIncome);
      var estimatedGrossPercentage = this.sliderVal / 100;
      return Math.round(initGross * estimatedGrossPercentage);
    },
    numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    spendingLimit: function (netIncome, debt, saving, expense, grossIncome) {
      var limit =
        parseInt(netIncome) -
        parseInt(debt) -
        parseInt(saving) -
        parseInt(expense) -
        parseInt(grossIncome);
      this.spendingLeft = limit;
    },
    moving(val) {
      this.sliderVal = val;
      this.grossIncome = this.initGrossCalculation(this.model.net_income);
      this.spendingLimit(
        this.model.net_income,
        this.model.debt,
        this.model.saving,
        this.model.expense,
        this.grossIncome
      );
    },
    calculate() {
      if (parseInt(this.model.net_income) > 0 && !isNaN(parseInt(this.model.net_income))) {
        this.calculateIsClicked = true;
        this.grossIncome = this.initGrossCalculation(this.model.net_income);
        this.$nextTick(() => {
          setTimeout(() => {
            this.$tip();
          }, 200)
        });
      }
    },
  },
  watch: {
    "model.net_income"(val) {
      if (!isNaN(parseInt(val))) {
        this.grossIncome = this.initGrossCalculation(val);
        this.spendingLimit(
          val,
          this.model.debt,
          this.model.saving,
          this.model.expense,
          this.grossIncome
        );
      }
    },
    "model.debt"(val) {
      if (!isNaN(parseInt(val)))
        this.spendingLimit(
          this.model.net_income,
          val,
          this.model.saving,
          this.model.expense,
          this.grossIncome
        );
    },
    "model.saving"(val) {
      if (!isNaN(parseInt(val)))
        this.spendingLimit(
          this.model.net_income,
          this.model.debt,
          val,
          this.model.expense,
          this.grossIncome
        );
    },
    "model.expense"(val) {
      if (!isNaN(parseInt(val)))
        this.spendingLimit(
          this.model.net_income,
          this.model.debt,
          this.model.saving,
          val,
          this.grossIncome
        );
    },
  },
};
</script>

<style scoped>
</style>
