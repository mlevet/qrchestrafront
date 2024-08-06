<template>
  <ul name="questions">
      <li v-show="currentActive==0">
          <label class="label">Welcome to this survey</label>
          <br>
          <label class="label">What's your first name ?</label>
          <div class="control">
          <Field :name="`user.first_name`" v-model="formValues.user.first_name" @keyup="ltrimSpace($event)" type="text" class="input" />
          <p class="help is-danger"><ErrorMessage :name="`user.first_name`" /></p>
          </div>
        <label class="label">What's your last name ?</label>
          <div class="control">
          <Field :name="`user.last_name`" v-model="formValues.user.last_name" @keyup="ltrimSpace($event)" type="text" class="input" />
          <p class="help is-danger"><ErrorMessage :name="`user.last_name`" /></p>
          </div>
      </li>
        <li v-show="currentActive==index+1" v-for="(tab, index) in formValues.questions" v-bind:key="tab.question_text">
          <label class="label">{{ formValues.questions[index].question_text }}</label>
          <div class="control">
          <Field :name="`question[${index}].answer`" v-model="formValues.questions[index].answer" @keyup="ltrimSpace($event)" type="text" class="input" />
          <p class="help is-danger"><ErrorMessage :name="`question[${index}].answer`" /></p>
          </div>
      </li>
    </ul>
</template>
<script>

import {ErrorMessage, FieldArray, Field} from "vee-validate"
/*import axios from "axios";*/

export default {
  props: ['form-values', 'form-fields', 'current-active'],
  components: {
    Field,
    ErrorMessage,
    FieldArray,
  },
  data(){
    return {
      LicenceOptions: [
        {name:"Free"},
        {name:"Paid"},
        {name:"Trial"},
        {name:"IR"},
      ],
      FoundCustomers: [],
      logintoken: localStorage.getItem('LoginToken')
    }
  },
  mounted(){
    this.logintoken = "Token " + this.logintoken
  },
   methods: {
     forceLower(e) {
        e.target.value=e.target.value.toLowerCase();
     },
     updateFields(){
       if (this.formValues.existing == "no"){
         this.formValues.existingCompanyName = ""
       }else{
          this.formValues.companyDisplayName = ""
          this.formValues.companyName = ""
       }
},
     convertDisplayName() {
       this.formValues.companyName = this.formValues.companyDisplayName.replaceAll(' ', '_').replaceAll('-', '_').toLowerCase();
     }
  }
}
</script>