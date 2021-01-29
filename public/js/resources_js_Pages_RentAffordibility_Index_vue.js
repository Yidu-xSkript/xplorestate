(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_RentAffordibility_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RentAffordibility/Index.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RentAffordibility/Index.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _components_slider_Index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/slider/Index */ "./resources/js/components/slider/Index.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Slider: _components_slider_Index__WEBPACK_IMPORTED_MODULE_0__.default
  },
  data: function data() {
    return {
      model: {
        net_income: 0,
        expense: 0,
        saving: 0,
        debt: 0,
        location: null
      },
      slider: {
        value: 33,
        data: [],
        range: [{
          label: "10%"
        }, {
          label: "40%"
        }]
      },
      sliderVal: 0,
      grossIncome: 0,
      spendingLeft: 0,
      calculateIsClicked: false
    };
  },
  mounted: function mounted() {
    this.sliderVal = this.slider.value;

    for (var i = 10; i <= 40; i++) {
      if (i > 11 && i < 40) this.slider.range.splice(1, 0, {
        label: "".concat(i.toString(), "%"),
        isHide: true
      });
      this.slider.data.push(i);
    }
  },
  methods: {
    initGrossCalculation: function initGrossCalculation(netIncome) {
      var initGross = parseInt(netIncome) * 0.35 + parseInt(netIncome);
      var estimatedGrossPercentage = this.sliderVal / 100;
      return Math.round(initGross * estimatedGrossPercentage);
    },
    numberWithCommas: function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    spendingLimit: function spendingLimit(netIncome, debt, saving, expense, grossIncome) {
      var limit = parseInt(netIncome) - parseInt(debt) - parseInt(saving) - parseInt(expense) - parseInt(grossIncome);
      this.spendingLeft = limit;
    },
    moving: function moving(val) {
      this.sliderVal = val;
      this.grossIncome = this.initGrossCalculation(this.model.net_income);
      this.spendingLimit(this.model.net_income, this.model.debt, this.model.saving, this.model.expense, this.grossIncome);
    },
    calculate: function calculate() {
      var _this = this;

      if (parseInt(this.model.net_income) > 0 && !isNaN(parseInt(this.model.net_income))) {
        this.calculateIsClicked = true;
        this.grossIncome = this.initGrossCalculation(this.model.net_income);
        this.$nextTick(function () {
          setTimeout(function () {
            _this.$tip();
          }, 200);
        });
      }
    }
  },
  watch: {
    "model.net_income": function modelNet_income(val) {
      if (!isNaN(parseInt(val))) {
        this.grossIncome = this.initGrossCalculation(val);
        this.spendingLimit(val, this.model.debt, this.model.saving, this.model.expense, this.grossIncome);
      }
    },
    "model.debt": function modelDebt(val) {
      if (!isNaN(parseInt(val))) this.spendingLimit(this.model.net_income, val, this.model.saving, this.model.expense, this.grossIncome);
    },
    "model.saving": function modelSaving(val) {
      if (!isNaN(parseInt(val))) this.spendingLimit(this.model.net_income, this.model.debt, val, this.model.expense, this.grossIncome);
    },
    "model.expense": function modelExpense(val) {
      if (!isNaN(parseInt(val))) this.spendingLimit(this.model.net_income, this.model.debt, this.model.saving, val, this.grossIncome);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "vue-slide-bar",
  data: function data() {
    return {
      flag: false,
      size: 0,
      currentValue: 0,
      tooltipValue: 0,
      currentSlider: 0,
      isComponentExists: true,
      interval: 1,
      lazy: false,
      realTime: false,
      dataLabelStyles: {
        "font-family": "Varela Round, sans-serif",
        "font-size": "12px",
        color: "#4a4a4a",
        backgroundColor: "#006aff"
      }
    };
  },
  props: {
    data: {
      type: Array,
      "default": null
    },
    id: {
      type: String,
      "default": "wrap"
    },
    range: {
      type: Array,
      "default": null
    },
    speed: {
      type: Number,
      "default": 0.5
    },
    lineHeight: {
      type: Number,
      "default": 5
    },
    iconWidth: {
      type: Number,
      "default": 20
    },
    value: {
      type: [String, Number],
      "default": 0
    },
    value2: {
      type: [String, Number],
      "default": null
    },
    min: {
      type: Number,
      "default": 0
    },
    max: {
      type: Number,
      "default": 100
    },
    showTooltip: {
      type: Boolean,
      "default": true
    },
    tooltipNote: {
      type: String,
      "default": null
    },
    tooltipSuffix: {
      type: String,
      "default": null
    },
    isDisabled: {
      type: Boolean,
      "default": false
    },
    draggable: {
      type: Boolean,
      "default": true
    },
    paddingless: {
      type: Boolean,
      "default": false
    },
    tooltipStyles: Object,
    tooltip2Styles: Object,
    labelStyles: Object,
    processStyle: Object
  },
  emits: ["callbackRange", "input", "moving", "slide_init"],
  computed: {
    slider: function slider() {
      return this.$refs.tooltip;
    },
    slider2: function slider2() {
      return this.$refs.tooltip2;
    },
    val: {
      get: function get() {
        this.$emit("slide_init", this.currentValue);
        return this.data ? this.data[this.currentValue] : this.currentValue;
      },
      set: function set(val) {
        if (this.data) {
          var index = this.data.indexOf(val);

          if (index > -1) {
            this.currentValue = index;
          }
        } else {
          this.currentValue = val;
        }
      }
    },
    currentIndex: function currentIndex() {
      return (this.currentValue - this.minimum) / this.spacing;
    },
    indexRange: function indexRange() {
      return [0, this.currentIndex];
    },
    minimum: function minimum() {
      return this.data ? 0 : this.min;
    },
    maximum: function maximum() {
      return this.data ? this.data.length - 1 : this.max;
    },
    multiple: function multiple() {
      var decimals = "".concat(this.interval).split(".")[1];
      return decimals ? Math.pow(10, decimals.length) : 1;
    },
    spacing: function spacing() {
      return this.data ? 1 : this.interval;
    },
    total: function total() {
      if (this.data) {
        return this.data.length - 1;
      } else if (Math.floor((this.maximum - this.minimum) * this.multiple) % (this.interval * this.multiple) !== 0) {
        this.printError("[VueSlideBar error]: Prop[interval] is illegal, Please make sure that the interval can be divisible");
      }

      return (this.maximum - this.minimum) / this.interval;
    },
    gap: function gap() {
      return this.size / this.total;
    },
    position: function position() {
      return (this.currentValue - this.minimum) / this.spacing * this.gap;
    },
    limit: function limit() {
      return [0, this.size];
    },
    valueLimit: function valueLimit() {
      return [this.minimum, this.maximum];
    },
    calculateHeight: function calculateHeight() {
      return this.paddingless ? {} : {
        "padding-top": "40px",
        "min-height": this.range ? "100px" : null
      };
    }
  },
  watch: {
    value: function value(val) {
      if (this.flag) this.setValue(val);else this.setValue(val, this.speed);
    },
    value2: function value2(val) {
      this.tooltipValue = val;
    },
    max: function max(val) {
      if (val < this.min) {
        return this.printError("[VueSlideBar error]: The maximum value can not be less than the minimum value.");
      }

      var resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    },
    min: function min(val) {
      if (val > this.max) {
        return this.printError("[VueSlideBar error]: The minimum value can not be greater than the maximum value.");
      }

      var resetVal = this.limitValue(this.val);
      this.setValue(resetVal);
      this.refresh();
    }
  },
  methods: {
    bindEvents: function bindEvents() {
      document.addEventListener("touchmove", this.moving, {
        passive: false
      });
      document.addEventListener("touchend", this.moveEnd, {
        passive: false
      });
      document.addEventListener("mousemove", this.moving);
      document.addEventListener("mouseup", this.moveEnd);
      document.addEventListener("mouseleave", this.moveEnd);
      window.addEventListener("resize", this.refresh);
    },
    unbindEvents: function unbindEvents() {
      window.removeEventListener("resize", this.refresh);
      document.removeEventListener("touchmove", this.moving);
      document.removeEventListener("touchend", this.moveEnd);
      document.removeEventListener("mousemove", this.moving);
      document.removeEventListener("mouseup", this.moveEnd);
      document.removeEventListener("mouseleave", this.moveEnd);
    },
    getPos: function getPos(e) {
      this.realTime && this.getStaticData();
      return e.clientX - this.offset;
    },
    wrapClick: function wrapClick(e) {
      if (this.isDisabled || !this.draggable && e.target.id === this.id) return false;
      var pos = this.getPos(e);
      this.setValueOnPos(pos);
    },
    moveStart: function moveStart(e, index) {
      if (!this.draggable) return false;
      this.flag = true;
    },
    moving: function moving(e) {
      if (!this.flag || !this.draggable) return false;
      e.preventDefault();
      if (e.targetTouches && e.targetTouches[0]) e = e.targetTouches[0];
      this.setValueOnPos(this.getPos(e), true);
    },
    moveEnd: function moveEnd(e) {
      if (this.flag && this.draggable) {
        if (this.lazy && this.isDiff(this.val, this.value)) {
          this.syncValue();
        }
      } else {
        return false;
      }

      this.flag = false;
      this.setPosition();
    },
    setValueOnPos: function setValueOnPos(pos, isDrag) {
      var range = this.limit;
      var valueRange = this.valueLimit;

      if (pos >= range[0] && pos <= range[1]) {
        this.setTransform(pos);
        var v = (Math.round(pos / this.gap) * (this.spacing * this.multiple) + this.minimum * this.multiple) / this.multiple;
        this.setCurrentValue(v, isDrag);
      } else if (pos < range[0]) {
        this.setTransform(range[0]);
        this.setCurrentValue(valueRange[0]);
        if (this.currentSlider === 1) this.currentSlider = 0;
      } else {
        this.setTransform(range[1]);
        this.setCurrentValue(valueRange[1]);
        if (this.currentSlider === 0) this.currentSlider = 1;
      }

      this.$emit("moving", this.data ? this.data[this.currentValue] : this.currentValue);
    },
    isDiff: function isDiff(a, b) {
      if (Object.prototype.toString.call(a) !== Object.prototype.toString.call(b)) {
        return true;
      } else if (Array.isArray(a) && a.length === b.length) {
        return a.some(function (v, i) {
          return v !== b[i];
        });
      }

      return a !== b;
    },
    setCurrentValue: function setCurrentValue(val, bool) {
      if (val < this.minimum || val > this.maximum) return false;

      if (this.isDiff(this.currentValue, val)) {
        this.currentValue = val;

        if (!this.lazy || !this.flag) {
          this.syncValue();
        }
      }

      bool || this.setPosition();
    },
    setIndex: function setIndex(val) {
      val = this.spacing * val + this.minimum;
      this.setCurrentValue(val);
    },
    setValue: function setValue(val, speed) {
      var _this = this;

      if (this.isDiff(this.val, val)) {
        var resetVal = this.limitValue(val);
        this.val = resetVal;
        this.syncValue();
      }

      this.$nextTick(function () {
        return _this.setPosition(speed);
      });
    },
    setPosition: function setPosition(speed) {
      if (!this.flag) this.setTransitionTime(speed === undefined ? this.speed : speed);else this.setTransitionTime(0);
      this.setTransform(this.position);
    },
    setTransform: function setTransform(val) {
      var value = val - (this.$refs.tooltip.scrollWidth - 2) / 2;
      var translateValue = "translateX(".concat(value, "px)");
      this.slider.style.transform = translateValue;
      this.slider.style.WebkitTransform = translateValue;
      this.slider.style.msTransform = translateValue;
      this.slider2.style.transform = translateValue;
      this.slider2.style.WebkitTransform = translateValue;
      this.slider2.style.msTransform = translateValue;
      this.$refs.process.style.width = "".concat(val, "px");
      this.$refs.process.style["left"] = 0;
    },
    setTransitionTime: function setTransitionTime(time) {
      this.slider.style.transitionDuration = "".concat(time, "s");
      this.slider.style.WebkitTransitionDuration = "".concat(time, "s");
      this.slider2.style.transitionDuration = "".concat(time, "s");
      this.slider2.style.WebkitTransitionDuration = "".concat(time, "s");
      this.$refs.process.style.transitionDuration = "".concat(time, "s");
      this.$refs.process.style.WebkitTransitionDuration = "".concat(time, "s");
    },
    limitValue: function limitValue(val) {
      var _this2 = this;

      if (this.data) {
        return val;
      }

      var inRange = function inRange(v) {
        if (v < _this2.min) {
          _this2.printError("[VueSlideBar warn]: The value of the slider is ".concat(val, ", the minimum value is ").concat(_this2.min, ", the value of this slider can not be less than the minimum value"));

          return _this2.min;
        } else if (v > _this2.max) {
          _this2.printError("[VueSlideBar warn]: The value of the slider is ".concat(val, ", the maximum value is ").concat(_this2.max, ", the value of this slider can not be greater than the maximum value"));

          return _this2.max;
        }

        return v;
      };

      return inRange(val);
    },
    syncValue: function syncValue() {
      var val = this.val;

      if (this.range) {
        this.$emit("callbackRange", this.range[this.currentIndex]);
      }

      this.$emit("input", val);
    },
    getValue: function getValue() {
      return this.val;
    },
    getIndex: function getIndex() {
      return this.currentIndex;
    },
    getStaticData: function getStaticData() {
      if (this.$refs.elem) {
        this.size = this.$refs.elem.offsetWidth;
        this.offset = this.$refs.elem.getBoundingClientRect().left;
      }
    },
    refresh: function refresh() {
      if (this.$refs.elem) {
        this.getStaticData();
        this.setPosition();
      }
    },
    printError: function printError(msg) {
      console.error(msg);
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.isComponentExists = true;
    this.tooltipValue = this.value2;

    if (typeof window === "undefined" || typeof document === "undefined") {
      return this.printError("[VueSlideBar error]: window or document is undefined, can not be initialization.");
    }

    this.$nextTick(function () {
      if (_this3.isComponentExists) {
        _this3.getStaticData();

        _this3.setValue(_this3.limitValue(_this3.value), 0);

        _this3.bindEvents();
      }
    });
  },
  beforeUnmount: function beforeUnmount() {
    this.isComponentExists = false;
    this.unbindEvents();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RentAffordibility/Index.vue?vue&type=template&id=0d45e1a3&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RentAffordibility/Index.vue?vue&type=template&id=0d45e1a3&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-0d45e1a3");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-0d45e1a3");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("title", null, " How much rent can i afford? - Rent Affordibility Calculator | Xplorestate ", -1
/* HOISTED */
);

var _hoisted_2 = {
  id: "titlebar"
};
var _hoisted_3 = {
  "class": "container"
};
var _hoisted_4 = {
  "class": "row"
};
var _hoisted_5 = {
  "class": "col-md-12"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, "Rent Affordibility Calculator", -1
/* HOISTED */
);

var _hoisted_7 = {
  id: "breadcrumbs"
};

var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Home");

var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, "Rent Affordibility Calculator", -1
/* HOISTED */
);

var _hoisted_10 = {
  "class": "container affordibility"
};
var _hoisted_11 = {
  "class": "row"
};

var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-md-12"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, " This calculator shows rentals that fit your budget. Savings, debt and other expenses could impact the amount you want to spend on rent each month. Input your net (after tax) income and the calculator will display rentals up to 40% of your estimated gross income. Property managers typically use gross income to qualify applicants, so the tool assumes your net income is taxed at 35%. ")], -1
/* HOISTED */
);

var _hoisted_13 = {
  "class": "my-account col-md-12"
};

var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, "Calculate", -1
/* HOISTED */
);

var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("hr", {
  style: {
    "margin": "0px",
    "margin-right": "95%",
    "border": "2px solid #006aff",
    "margin-bottom": "30px"
  }
}, null, -1
/* HOISTED */
);

var _hoisted_16 = {
  "class": "row"
};
var _hoisted_17 = {
  "class": "col-md-4"
};
var _hoisted_18 = {
  "for": "netIncome"
};

var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monthly Net Income: ");

var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "im im-icon-Money"
}, null, -1
/* HOISTED */
);

var _hoisted_21 = {
  "class": "col-md-4"
};
var _hoisted_22 = {
  "for": "debts"
};

var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monthly debts: ");

var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "im im-icon-Money"
}, null, -1
/* HOISTED */
);

var _hoisted_25 = {
  "class": "col-md-4"
};
var _hoisted_26 = {
  "for": "usernamsavings"
};

var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monthly Savings: ");

var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "im im-icon-Money"
}, null, -1
/* HOISTED */
);

var _hoisted_29 = {
  "class": "col-md-6"
};
var _hoisted_30 = {
  "for": "expense"
};

var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Monthly Expenses: ");

var _hoisted_32 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "im im-icon-Money"
}, null, -1
/* HOISTED */
);

var _hoisted_33 = {
  "class": "col-md-6"
};
var _hoisted_34 = {
  "for": "location"
};

var _hoisted_35 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Rental location: ");

var _hoisted_36 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "sl sl-icon-location"
}, null, -1
/* HOISTED */
);

var _hoisted_37 = {
  key: 0,
  "class": "col-md-12 margin-top-55"
};
var _hoisted_38 = {
  "class": "row affordibility-container"
};
var _hoisted_39 = {
  "class": "col-md-4 col-md-offset-1 text-center"
};
var _hoisted_40 = {
  key: 0
};

var _hoisted_41 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("You can afford ");

var _hoisted_42 = {
  key: 1
};

var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("You're overbudget at ");

var _hoisted_44 = {
  key: 0
};
var _hoisted_45 = {
  key: 1,
  "class": "alert error"
};
var _hoisted_46 = {
  key: 2,
  "class": "alert error"
};

var _hoisted_47 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" You will have ");

var _hoisted_48 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" left to spend. ");

var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "col-md-1"
}, null, -1
/* HOISTED */
);

var _hoisted_50 = {
  "class": "col-md-6"
};

var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("i", {
  "class": "tip",
  "data-tip-content": "You can drag the gross income slider below to find your new affordable home. (i.e. it's preferable to click and drag the tooltip for better movement)"
}, null, -1
/* HOISTED */
);

var _hoisted_52 = {
  key: 1,
  "class": "col-md-12 margin-top-55"
};

var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", {
  "class": "margin-bottom-40"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" \""), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", null, "2610"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("\" matching rentals in "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", null, "Miami FL")], -1
/* HOISTED */
);

var _hoisted_54 = {
  "class": "row"
};

var _hoisted_55 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "result"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, "3,351 ETB/mo"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, "2 bed, 2bath, 1199sqft"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "3131 NE 1st Ave #811 Miami, FL 33137")], -1
/* HOISTED */
);

var _hoisted_56 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "result"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, "3,351 ETB/mo"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, "2 bed, 2bath, 1199sqft"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "3131 NE 1st Ave #811 Miami, FL 33137")], -1
/* HOISTED */
);

var _hoisted_57 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "result"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h3", null, "3,351 ETB/mo"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", null, "2 bed, 2bath, 1199sqft"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, "3131 NE 1st Ave #811 Miami, FL 33137")], -1
/* HOISTED */
);

var _hoisted_58 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("button", {
  "class": "button"
}, "See all matching rentals", -1
/* HOISTED */
);

var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
  "class": "margin-top-55"
}, null, -1
/* HOISTED */
);

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  var _component_inertia_link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("inertia-link");

  var _component_slider = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("slider");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
    to: "head"
  }, [_hoisted_1])), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("nav", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('home')
  }, {
    "default": _withId(function () {
      return [_hoisted_8];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), _hoisted_9])])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_13, [_hoisted_14, _hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_18, [_hoisted_19, _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "number",
    "class": "input-text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return _ctx.model.net_income = $event;
    }),
    id: "netIncome",
    placeholder: "Income after taxes",
    autocomplete: "off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.model.net_income]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_22, [_hoisted_23, _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "number",
    "class": "input-text",
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return _ctx.model.debt = $event;
    }),
    placeholder: "loans, ...",
    id: "debts",
    autocomplete: "off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.model.debt]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_26, [_hoisted_27, _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "number",
    "class": "input-text",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return _ctx.model.saving = $event;
    }),
    placeholder: "savings, ...",
    id: "savings",
    autocomplete: "off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.model.saving]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_30, [_hoisted_31, _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "number",
    "class": "input-text",
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return _ctx.model.expense = $event;
    }),
    placeholder: "Food, insurance, required items, ...",
    id: "expense",
    autocomplete: "off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.model.expense]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("label", _hoisted_34, [_hoisted_35, _hoisted_36, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("input", {
    type: "text",
    "class": "input-text",
    id: "location",
    placeholder: "Neighborhood, city",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return _ctx.model.location = $event;
    }),
    autocomplete: "off"
  }, null, 512
  /* NEED_PATCH */
  ), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.model.location]])])])]), !_ctx.calculateIsClicked ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("button", {
    key: 0,
    onClick: _cache[6] || (_cache[6] = function () {
      return $options.calculate && $options.calculate.apply($options, arguments);
    }),
    "class": "button"
  }, " Calculate & Search ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _ctx.calculateIsClicked && _ctx.model.net_income > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_37, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("h2", null, [_ctx.spendingLeft > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.numberWithCommas(_ctx.grossIncome)) + " ETB/mo", 1
  /* TEXT */
  )])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_42, [_hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.numberWithCommas(_ctx.grossIncome)) + " ETB/mo", 1
  /* TEXT */
  )]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [_ctx.spendingLeft > 0 && _ctx.sliderVal <= 33 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_44, "Based on your income, a rental at this price should fit comfortably within your budget.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.spendingLeft < 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_45, "Careful! your debts and expenses just exceeded your income.")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.sliderVal > 33 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_46, "Are you sure that you want to spend more than 33% of your income on rent?")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("p", null, [_hoisted_47, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("strong", {
    "class": {
      'alert error': _ctx.spendingLeft < 0
    }
  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.numberWithCommas(_ctx.spendingLeft)) + " ETB/mo", 3
  /* TEXT, CLASS */
  ), _hoisted_48])]), _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_50, [_hoisted_51, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_slider, {
    value: _ctx.slider.value,
    value2: _ctx.grossIncome,
    data: _ctx.slider.data,
    range: _ctx.slider.range,
    lineHeight: 20,
    processStyle: {
      backgroundColor: '#006aff'
    },
    tooltipStyles: {
      backgroundColor: 'black',
      borderColor: 'black'
    },
    tooltip2Styles: {
      backgroundColor: 'white',
      borderColor: 'white',
      color: 'black',
      'box-shadow': '0px 2px 10px rgba(0,0,0,0.08)'
    },
    tooltipNote: "of gross income",
    tooltipSuffix: "%",
    onMoving: $options.moving,
    onSlide_init: _ctx.slide_init
  }, null, 8
  /* PROPS */
  , ["value", "value2", "data", "range", "tooltip2Styles", "onMoving", "onSlide_init"])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _ctx.calculateIsClicked && _ctx.model.location !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('estate.detail'),
    "class": "col-md-4"
  }, {
    "default": _withId(function () {
      return [_hoisted_55];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('estate.detail'),
    "class": "col-md-4"
  }, {
    "default": _withId(function () {
      return [_hoisted_56];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_inertia_link, {
    href: _ctx.route('estate.detail'),
    "class": "col-md-4"
  }, {
    "default": _withId(function () {
      return [_hoisted_57];
    }),
    _: 1
    /* STABLE */

  }, 8
  /* PROPS */
  , ["href"])]), _hoisted_58])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), _hoisted_59], 64
  /* STABLE_FRAGMENT */
  );
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=template&id=20ff17cf&scoped=true":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=template&id=20ff17cf&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");


var _withId = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.withScopeId)("data-v-20ff17cf");

(0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-20ff17cf");

var _hoisted_1 = {
  key: 0,
  "class": "vue-slide-bar-tooltip-top vue-slide-bar-tooltip-wrap"
};
var _hoisted_2 = {
  key: 0,
  "class": "vue-slide-bar-tooltip-bottom vue-slide-bar-tooltip-wrap"
};
var _hoisted_3 = {
  key: 0
};
var _hoisted_4 = {
  key: 0,
  "class": "vue-slide-bar-range"
};
var _hoisted_5 = {
  key: 0,
  "class": "vue-slide-bar-separate-text"
};

var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("br", null, null, -1
/* HOISTED */
);

var _hoisted_7 = {
  key: 0
};

(0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)();

var render = /*#__PURE__*/_withId(function (_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
    ref: "wrap",
    id: $props.id,
    "class": "vue-slide-bar-component vue-slide-bar-horizontal",
    style: $options.calculateHeight,
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.wrapClick && $options.wrapClick.apply($options, arguments);
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    ref: "elem",
    "class": "vue-slide-bar",
    style: {
      height: "".concat($props.lineHeight, "px")
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    ref: "tooltip",
    "class": "vue-slide-bar-always vue-slide-bar-tooltip-container",
    style: {
      width: "".concat($props.iconWidth, "px")
    },
    onMousedown: _cache[1] || (_cache[1] = function () {
      return $options.moveStart && $options.moveStart.apply($options, arguments);
    }),
    onTouchstart: _cache[2] || (_cache[2] = function () {
      return $options.moveStart && $options.moveStart.apply($options, arguments);
    })
  }, [$props.showTooltip ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "tooltip", {}, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
      style: $props.tooltipStyles,
      "class": "vue-slide-bar-tooltip"
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.tooltipValue) + " ETB/mo ", 5
    /* TEXT, STYLE */
    )];
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 36
  /* STYLE, HYDRATE_EVENTS */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    ref: "process",
    style: $props.processStyle,
    "class": "vue-slide-bar-process"
  }, null, 4
  /* STYLE */
  ), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("div", {
    ref: "tooltip2",
    "class": "vue-slide-bar-always vue-slide-bar-tooltip-container",
    style: {
      width: "".concat($props.iconWidth, "px")
    },
    onMousedown: _cache[3] || (_cache[3] = function () {
      return $options.moveStart && $options.moveStart.apply($options, arguments);
    }),
    onTouchstart: _cache[4] || (_cache[4] = function () {
      return $options.moveStart && $options.moveStart.apply($options, arguments);
    })
  }, [$props.showTooltip ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "tooltip2", {}, function () {
    return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)("span", {
      style: $props.tooltip2Styles,
      "class": "vue-slide-bar-tooltip-bottom-arrow"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.val) + " ", 1
    /* TEXT */
    ), $props.tooltipSuffix !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("small", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.tooltipSuffix), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 4
    /* STYLE */
    )];
  })])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 36
  /* STYLE, HYDRATE_EVENTS */
  )], 4
  /* STYLE */
  ), $props.range ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", _hoisted_4, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.range, function (r, index) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("div", {
      key: index,
      "class": {
        'vue-slide-bar-separate': !r.isHide
      },
      style: _ctx.dataLabelStyles
    }, [!r.isHide ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(r.label), 1
    /* TEXT */
    ), _hoisted_6, $props.tooltipNote !== null ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.tooltipNote), 1
    /* TEXT */
    )) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 6
    /* CLASS, STYLE */
    );
  }), 128
  /* KEYED_FRAGMENT */
  ))])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)], 12
  /* STYLE, PROPS */
  , ["id"]);
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vue-slide-bar-component[data-v-20ff17cf] {\n  position: relative;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 100%;\n}\n.vue-slide-bar[data-v-20ff17cf] {\n  position: relative;\n  display: block;\n  border-radius: 15px;\n  background-color: #d8d8d8;\n  cursor: pointer;\n}\n.vue-slide-bar[data-v-20ff17cf]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n}\n.vue-slide-bar-process[data-v-20ff17cf] {\n  position: absolute;\n  border-radius: 15px;\n  background-color: #1066fd;\n  transition: all 0s;\n  z-index: 1;\n  width: 0;\n  height: 100%;\n  top: 0;\n  left: 0;\n  will-change: width;\n}\n.vue-slide-bar-tooltip-container[data-v-20ff17cf] {\n  position: absolute;\n  transition: all 0s;\n  will-change: transform;\n  cursor: pointer;\n  z-index: 3;\n  left: 0;\n  top: -16px;\n}\n.vue-slide-bar-tooltip-wrap[data-v-20ff17cf] {\n  /* display: none; */\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n  display: block !important;\n}\n.vue-slide-bar-tooltip-top[data-v-20ff17cf] {\n  top: -12px;\n  left: 40%;\n  transform: translate(-50%, -100%);\n}\n.vue-slide-bar-tooltip-bottom[data-v-20ff17cf] {\n  bottom: -35px;\n  left: 40%;\n  transform: translate(-50%, -100%);\n}\n.vue-slide-bar-tooltip[data-v-20ff17cf],\n.vue-slide-bar-tooltip-bottom-arrow[data-v-20ff17cf] {\n  position: relative;\n  font-size: 14px;\n  white-space: nowrap;\n  padding: 2px 5px;\n  min-width: 20px;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  border: 1px solid #1066fd;\n  background-color: #1066fd;\n}\n.vue-slide-bar-tooltip[data-v-20ff17cf]::before,\n.vue-slide-bar-tooltip-bottom-arrow[data-v-20ff17cf]::before {\n  content: \"\";\n  position: absolute;\n  bottom: -10px;\n  left: 50%;\n  width: 0;\n  height: 0;\n  border: 5px solid transparent;\n  border-top-color: inherit;\n  transform: translate(-50%, 0);\n}\n.vue-slide-bar-tooltip-bottom-arrow[data-v-20ff17cf]::before {\n  top: -10px;\n  bottom: unset;\n  border-bottom-color: inherit;\n  border-top-color: transparent;\n}\n.vue-slide-bar-range[data-v-20ff17cf] {\n  display: flex;\n  padding: 5px 0;\n  justify-content: space-between;\n}\n.vue-slide-bar-separate[data-v-20ff17cf] {\n  position: relative;\n  width: 2px;\n  background-color: #9e9e9e;\n  height: 5px;\n  cursor: pointer;\n}\n.vue-slide-bar-separate-text[data-v-20ff17cf] {\n  text-align: center;\n  position: absolute;\n  white-space: nowrap;\n  transform: translate(-50%, 0);\n  top: 6px;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_20ff17cf_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_20ff17cf_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_20ff17cf_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/Pages/RentAffordibility/Index.vue":
/*!********************************************************!*\
  !*** ./resources/js/Pages/RentAffordibility/Index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_0d45e1a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0d45e1a3&scoped=true */ "./resources/js/Pages/RentAffordibility/Index.vue?vue&type=template&id=0d45e1a3&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/Pages/RentAffordibility/Index.vue?vue&type=script&lang=js");



_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Index_vue_vue_type_template_id_0d45e1a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-0d45e1a3"
/* hot reload */
if (false) {}

_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/Pages/RentAffordibility/Index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/components/slider/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/slider/Index.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_20ff17cf_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=20ff17cf&scoped=true */ "./resources/js/components/slider/Index.vue?vue&type=template&id=20ff17cf&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js */ "./resources/js/components/slider/Index.vue?vue&type=script&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_20ff17cf_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css */ "./resources/js/components/slider/Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css");




;
_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.render = _Index_vue_vue_type_template_id_20ff17cf_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-20ff17cf"
/* hot reload */
if (false) {}

_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default.__file = "resources/js/components/slider/Index.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./resources/js/Pages/RentAffordibility/Index.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/RentAffordibility/Index.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RentAffordibility/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/slider/Index.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/slider/Index.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__.default
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Pages/RentAffordibility/Index.vue?vue&type=template&id=0d45e1a3&scoped=true":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Pages/RentAffordibility/Index.vue?vue&type=template&id=0d45e1a3&scoped=true ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_0d45e1a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_0d45e1a3_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=0d45e1a3&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Pages/RentAffordibility/Index.vue?vue&type=template&id=0d45e1a3&scoped=true");


/***/ }),

/***/ "./resources/js/components/slider/Index.vue?vue&type=template&id=20ff17cf&scoped=true":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/slider/Index.vue?vue&type=template&id=20ff17cf&scoped=true ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_20ff17cf_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_20ff17cf_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=20ff17cf&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=template&id=20ff17cf&scoped=true");


/***/ }),

/***/ "./resources/js/components/slider/Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/slider/Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_20ff17cf_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/slider/Index.vue?vue&type=style&index=0&id=20ff17cf&scoped=true&lang=css");


/***/ })

}]);