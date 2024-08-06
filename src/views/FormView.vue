<script>
import {Form} from "vee-validate"
// import * as yup from "yup"
import axios from "axios";
import Question from "../components/Question.vue"
import {reactive, computed} from "vue"

import process from 'node:process';

export default {
  components: {
    Question,
    Form
  },
  data() {
    return {
      currentActive: 0,
      question: "Question",
      tabs: [],
      totalTabs: 0,
      formValues: reactive({}),
      currentTab: {},
      formFields: {
        user: [
          {key: "first_name", label: "First Name", type: "text"},
          {key: "last_name", label: "Last Name", type: "text"},
        ],
        questions: [
          {key: "question_text", label: "Question", type: "text"},
          {key: "answer", label: "Answer", type: "text"},
        ],
      },
    }
  },
  created() {
    let username = 'matthieulevet';
    let password = 'admin';
    axios.get('http://127.0.0.1:8000' + '/forms/1', {
      auth: {
        username: username,
        password: password
      }
    }).then(response => {
      this.formValues = response.data
      this.formValues.questions.forEach(element => this.tabs.push(element))
      this.formValues.user = {}
      this.formValues.user.first_name = ''
      this.formValues.user.last_name = ''
      this.totalTabs = this.tabs.length
    })
  },


  methods: {

    nextStep() {
      if (this.currentActive === (this.totalTabs - 1)) {
        console.log("Done: ", JSON.stringify(this.formValues, null, 2));
        axios.post('http://127.0.0.1:8000' + '/newCustomer/', {
              data: this.formValues
            },
            {
              headers: {"Authorization": this.logintoken}
            })
            .catch(error => {
              this.formValues.submitError = `Error: ${error.message}`;
              console.error('There was an error!', error);
            });
        this.currentActive++;
        return;
      }
      // accumlate the form values with the values from previous steps
      this.currentActive++;
    },
    startSurvey() {
      if (this.currentActive === 0) {
        console.log("Done: ", JSON.stringify(this.formValues, null, 2));
        axios.post('http://127.0.0.1:8000' + '/newSurvey/', {
              data: this.formValues
            },
            {
              headers: {"Authorization": this.logintoken}
            })
            .catch(error => {
              this.formValues.submitError = `Error: ${error.message}`;
              console.error('There was an error!', error);
            });
        this.currentActive++;
        return;
      }
      // accumlate the form values with the values from previous steps
      this.currentActive++;
    },
    prevStep() {
      if (this.currentActive <= 0) {
        return;
      }
      this.currentActive--;
    }
  }
}
</script>

<template>

  <div class="form">
    <div>
      <ul v-if="currentActive > 0" class="steps has-content-centered">
        <li class="steps-segment" v-for="(tab, index) in tabs" :class="{ 'is-active': currentActive === index + 1}"
            v-bind:key="tab.question_text">
          <span class="steps-marker"></span>
          <div class="steps-content">
            <p class="is-size-4">Step {{ index + 1 }}</p>
          </div>
        </li>
      </ul>
      <Form>
        <component :is="question" :form-values="formValues" :form-fields="formFields"
                   :current-active="currentActive"></component>
      </Form>
      <br>
      <div class="field is-grouped">
        <div class="control" v-if="currentActive <= totalTabs && currentActive > 0">
          <button type="button" class="button is-primary" @click="prevStep">Previous</button>
        </div>
        <div class="control" v-if="currentActive < totalTabs && currentActive > 0">
          <button type="submit" class="button is-link" @click="nextStep">Next</button>
        </div>
        <div class="control" v-if="currentActive == 0">
          <button type="submit" class="button is-link" @click="startSurvey">Let's start !</button>
        </div>
        <div class="control" v-if="currentActive == totalTabs  && currentActive > 0">
          <button type="submit" class="button is-success">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>
