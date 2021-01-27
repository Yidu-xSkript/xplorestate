<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="wizard-container">
        <div class="wizard-card" id="wizard">
          <form @submit.prevent="onComplete">
            <div class="wizard-header">
              <h3 class="wizard-title">{{ wizard_title }}</h3>
              <p class="category">{{ wizard_desc }}</p>
            </div>
            <hr style="margin: 0px 45%; border: 2px solid #006aff; margin-bottom: 60px" />
            <div class="wizard-navigation">
              <div class="progress-with-circle">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="1"
                  aria-valuemin="1"
                  :aria-valuemax="tabs.length"
                  style="width: 15%"
                ></div>
              </div>
              <ul>
                <li v-for="(tab, index) in tabs" :key="index">
                  <slot name="tab" :tab="tab"></slot>
                </li>
              </ul>
            </div>
            <div class="tab-content">
              <div
                class="tab-pane"
                v-for="(tab, index) in tabs"
                :key="index"
                :id="tab.id"
              >
                <div class="row">
                  <div v-if="tab.info_text" class="col-sm-12">
                    <h4 class="info-text">
                      {{ tab.info_text }}
                    </h4>
                  </div>
                  <slot :name="`pane_question${index}`"></slot>
                </div>
              </div>
            </div>
            <div class="wizard-footer">
              <div class="row">
                <div class="col-md-12">
                  <div class="pull-right">
                    <a class="button medium btn-next cursor-pointer" 
                    @click="next">
                      Next
                      <i class="im im-icon-Arrow-Next" style="font-weight: 700;"></i> 
                    </a>

                    <button
                      type="submit"
                      class="button medium btn-finish"
                    >
                      Finish
                      <i class="fa fa-check" style="font-weight: 700;"></i> 
                    </button>
                  </div>

                  <div class="pull-left">
                    <a class="button medium btn-previous cursor-pointer" 
                    @click="previous">
                      <i class="im im-icon-Arrow-Back2" style="font-weight: 700;"></i> 
                      Previous
                    </a>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../Partial/bootstrap.min.js";
import "../../Partial/jquery.bootstrap.wizard.js";
export default {
  props: {
    wizard_title: {
      type: String,
      default: "Default Title",
      required: false,
    },
    wizard_desc: {
      type: String,
      default: "Default Description",
      required: false,
    },
    tabs: {
      type: Array,
      default: [],
      required: false,
    },
  },
  emits: ["wizard_onComplete", "wizard_next", "wizard_previous", "onWizardTabShow"],
  methods: {
    onComplete: function () {
      this.$emit("wizard_onComplete");
    },
    next: function () {
      this.$emit("wizard_next");
    },
    previous: function () {
      this.$emit("wizard_previous");
    },
  },
  mounted() {
    var that = this;
    this.$nextTick(() => {
      $(".wizard-card").bootstrapWizard({
        tabClass: "nav-pills",
        nextSelector: ".btn-next",
        previousSelector: ".btn-previous",

        onNext: function (tab, navigation, index) {
          // var $valid = $(".wizard-card form").valid();
          // if (!$valid) {
          //   $validator.focusInvalid();
          //   return false;
          // }
        },

        onInit: function (tab, navigation, index) {
          var $total = navigation.find("li").length;
          var $width = 100 / $total;
          navigation.find("li").css("width", $width + "%");
        },

        onTabClick: function (tab, navigation, index) {
          // var $valid = $(".wizard-card form").valid();
          // if (!$valid) {
          //   return false;
          // } else {
          //   return true;
          // }
        },

        onTabShow: function (tab, navigation, index) {
          var $total = navigation.find("li").length;
          var $current = index + 1;
          var $wizard = navigation.closest(".wizard-card");
          if ($current >= $total) {
            $($wizard).find(".btn-next").hide();
            $($wizard).find(".btn-finish").show();
          } else {
            $($wizard).find(".btn-next").show();
            $($wizard).find(".btn-finish").hide();
          }
          that.$emit('onWizardTabShow', index);
          var move_distance = 100 / $total;
          move_distance = move_distance * index + move_distance / 2;
          $wizard.find($(".progress-bar")).css({ width: move_distance + "%" });
          $wizard
            .find($(".wizard-card .nav-pills li.active a .icon-circle"))
            .addClass("checked");
        },
      });
    })
  },
};
</script>

<style>
</style>
