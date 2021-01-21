<template>
  <transition name="fade">
    <teleport to="#modals" v-if="showModal">
      <div class="modal">
        <div class="modal__backdrop" @click="closeModal()" />

        <div class="modal__dialog">
          <div class="modal__header">
            <slot name="header" />
            <a class="modal__close">
              <i @click="closeModal()" class="cursor-pointer sl sl-icon-close"></i>
            </a>
          </div>

          <div class="modal__body">
            <slot name="body" />
          </div>

          <div class="modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </teleport>
  </transition>
</template>

<script>
export default {
  name: "VModal",
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['close'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  &__backdrop {
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
  &__dialog {
    background-color: #ffffff;
    position: relative;
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    z-index: 2;
    @media screen and (max-width: 992px) {
      width: 90%;
    }
  }
  &__close {
    width: 100%;
    height: 30px;
    text-align: right;
    i {
        font-size: 25px;
        font-weight: 700;
    }
  }
  &__header {
    padding: 20px 20px 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__body {
    padding: 10px 20px 10px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  &__footer {
    padding: 10px 20px 20px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
