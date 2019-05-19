
<template>
  <v-layout>
    <v-flex class="reg-form">
      <v-card>
        <h3 class="headline mb-0">Регистрация пользователя</h3>
        <v-form>
          <v-layout>
            <v-flex md6>
            <div class="reg-form-align">
              <v-flex xs12 sm6>
                <v-text-field
                        v-model="name"
                        label="Name"
                        single-line
                        required
                        solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                        v-model="password"
                        required
                        label="Password"
                        type="password"
                        single-line
                        solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                        v-model="password"
                        required
                        label="Password"
                        type="password"
                        single-line
                        solo></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                        v-model="mail"
                        label="E-mail"
                        single-line
                        required
                        solo></v-text-field>
              </v-flex>
            </div>

          </v-flex>
            <v-layout column>
            <v-flex md6>


                <v-image-input
                        v-model="imageData"
                        :image-quality="0.85"
                        clearable
                        image-format="jpeg"
                />

            </v-flex>
            </v-layout>

          </v-layout>

          <v-card-actions>
            <v-btn flat class="form-register-bnt">Зарегистрироваться</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import VImageInput from 'vuetify-image-input';

  export default {
    components: {
      [VImageInput.name]: VImageInput,
    },
    name: "Reg"
  }
</script>

<style scoped>
  @import './style/reg.css';
</style>