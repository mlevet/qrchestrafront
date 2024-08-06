<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

</script>

<template>

  <RouterView />
</template>

<style lang="scss">
@import "./../node_modules/bootstrap/scss/_functions.scss";
@import "./../node_modules/bootstrap/scss/_mixins.scss";
@import "./../node_modules/bulma/sass/utilities/initial-variables.scss";
@import "./../node_modules/bulma/sass/utilities/derived-variables.scss";
@import "./../node_modules/bulma/sass/utilities/mixins.scss";
@import "./../node_modules/bulma/bulma.scss";
@import "./../node_modules/bulma-steps-component/bulma-steps.sass";

body {
}

#app{
  display: block;
}

.navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background-image: url(./assets/securedns-banner2.png);
}

.navbar .item{
  padding: 20px;
}

.container {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 40px;
  user-select: none;
  overflow-x: auto;
  max-width: calc(100% - 80px) !important;
  margin: 40px !important;
  clear: both;
}

.onboarding, .landing, .overview {
}

.landing {
  margin-top: 200px;
  height: calc(100vh - 80px);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}

.field.is-grouped {
  float: right;
}

.field:not(:last-child) {
    margin-bottom: 1em;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}

.tab-button:hover {
  background: #e0e0e0;
}

.tab-button.active {
  background: #e0e0e0;
}

tab {
  border: 1px solid #ccc;
  padding: 10px;
}

button a, button a:hover {
  color: #fff !important;
  text-decoration: none;
}

.button.is-primary, .button.is-primary:hover {
  background-color: #275ba3;
  color: #fff;
}

.button.is-link, .button.is-link:hover, .button.is-success, .button.is-success:hover {
  background-color: #00A5E4;
}

.btn-success, .btn-success:hover {
  background-color: #00A5E4 !important;
  border-color: transparent !important;
}

.button.login-button {
  float: right;
  clear: both;
}

.steps-segment:after {
  background-color: #275ba3;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow) {
  background-color: #275ba3;
}

.steps:not(.is-hollow) .steps-segment.is-active .steps-marker:not(.is-hollow) {
  background-color: #275ba3;
  color: #fff;
}

</style>
