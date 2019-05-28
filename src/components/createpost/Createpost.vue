<template>
      <v-container>
        <v-form
        >
        <v-card class="create-post">
          <v-card-title>
            <h3 class="headline mb-0">Добавить пост</h3>
          </v-card-title>
          <v-card-text>
              <v-layout >
                <div class="errors" v-if="errors.length">
                  <b>Пожалуйста исправьте указанные ошибки:</b>
                  <ul>
                    <li v-for="error in errors">{{ error }}</li>
                  </ul>
                </div>
              </v-layout>
              <v-layout p5>
                <v-flex md6>
                  <v-layout column>
                    <v-text-field
                            v-model="postPayload.post.title"
                            label="Заголовок"
                            single-line
                            required
                            solo></v-text-field>
                    <v-text-field
                            v-model="postPayload.post.subtitle"
                            required
                            label="Подзаголовок"
                            single-line
                            solo></v-text-field>
                    <v-autocomplete
                            v-model="postPayload.post.categories"
                            :items="categories"
                            label="Категории"
                            multiple
                            single-line
                            clearable
                            persistent-hint
                            solo
                    >
                    </v-autocomplete>


                    <v-combobox
                            v-model="model"
                            :filter="filter"
                            :hide-no-data="!search"
                            :items="items"
                            :search-input.sync="search"
                            hide-selected
                            label="Выберите тег"
                            multiple
                            small-chips
                            solo
                    >
                      <template v-slot:no-data>
                        <v-list-tile>
                          <span class="subheading">Create</span>
                          <v-chip
                                  :color="`${colors[nonce - 1]} lighten-3`"
                                  label
                                  small
                          >
                            {{ search }}
                          </v-chip>
                        </v-list-tile>
                      </template>
                      <template v-slot:selection="{ item, parent, selected }">
                        <v-chip
                                v-if="item === Object(item)"
                                :color="`${item.color} lighten-3`"
                                :selected="selected"
                                label
                                small
                        >
        <span class="pr-2">
          {{ item.text }}
        </span>
                          <v-icon
                                  small
                                  @click="parent.selectItem(item)"
                          >close</v-icon>
                        </v-chip>
                      </template>
                      <template v-slot:item="{ index, item }">
                        <v-list-tile-content>
                          <v-text-field
                                  v-if="editing === item"
                                  v-model="editing.text"
                                  autofocus
                                  flat
                                  background-color="transparent"
                                  hide-details
                                  solo
                                  @keyup.enter="edit(index, item)"
                          ></v-text-field>
                          <v-chip
                                  v-else
                                  :color="`${item.color} lighten-3`"
                                  dark
                                  label
                                  small
                          >
                            {{ item.text }}
                          </v-chip>
                        </v-list-tile-content>
                        <v-spacer></v-spacer>
                        <v-list-tile-action @click.stop>
                          <v-btn
                                  icon
                                  @click.stop.prevent="edit(index, item)"
                          >
                            <v-icon>{{ editing !== item ? 'edit' : 'check' }}</v-icon>
                          </v-btn>
                        </v-list-tile-action>
                      </template>
                    </v-combobox>

                    <v-textarea
                            v-model="postPayload.post.description"
                            required
                            label="Описание"
                            single-line

                            solo></v-textarea>

                  </v-layout>
                </v-flex>
                <v-flex md6>
                  <v-layout column>
                    <v-flex md12>
                      <v-image-input
                              v-model="postPayload.arts[0]"
                              :image-quality="0.85"
                              type="file"
                              clearable
                              image-format="png"
                      />
                    </v-flex>
                  </v-layout>
                </v-flex>



              </v-layout>



          </v-card-text>
          <v-card-actions>
            <v-btn flat class="form-register-bnt" @click="checkForm" >Сохранить</v-btn>
          </v-card-actions>
        </v-card>
        </v-form>
        <v-layout column>


        </v-layout>
      </v-container>

</template>


<script>
  import VImageInput from 'vuetify-image-input';

  export default {
    data () {
      return {
        isEditing: true,
        model: null,
        errors: [],
        tags: [],
        //categories: this.$store.getters.categories,
        imageData: "",
        postPayload: {
          post: {
            title: null,
            subtitle: null,
            description: null,
            tags: []
          },
          arts: []
        },

        activator: null,
        attach: null,
        colors: ['green', 'purple', 'indigo', 'cyan', 'teal', 'orange'],
        editing: null,
        index: -1,
        items: [
          { header: 'Select an option or create one' },
          {
            text: 'Foo',
            color: 'blue'
          },
          {
            text: 'Bar',
            color: 'red'
          }
        ],
        nonce: 1,
        menu: false,
        model: [
          {
            text: 'Foo',
            color: 'blue'
          }
        ],
        x: 0,
        search: null,
        y: 0
      }
    },
    computed: {
      categories: function() {
        return this.$store.getters.categories
      }
    },
    components: {
      [VImageInput.name]: VImageInput,
    },
    name: "Createpost",
    watch: {
    model (val, prev) {
      if (val.length === prev.length) return

      this.model = val.map(v => {
        if (typeof v === 'string') {
          v = {
            text: v,
            color: this.colors[this.nonce - 1]
          }

          this.items.push(v)

          this.nonce++
        }

        return v
      })
    }
  },
    created() {
      this.$store.dispatch('get_categories', this.categories);
      console.log(this.$store.getters.categories);
    },
    methods: {
    edit (index, item) {
      if (!this.editing) {
        this.editing = item
        this.index = index
      } else {
        this.editing = null
        this.index = -1
      }

    },
    filter (item, queryText, itemText) {
      if (item.header) return false

      const hasValue = val => val != null ? val : ''

      const text = hasValue(itemText)
      const query = hasValue(queryText)

      return text.toString()
          .toLowerCase()
          .indexOf(query.toString().toLowerCase()) > -1
    },
    checkForm: function (e) {
      if (this.name && this.age) {
        return true;
      }

      this.errors = [];

      if (!this.postPayload.post.title) {
        this.errors.push('Требуется указать заголовок.');
      }
      if (!this.postPayload.post.subtitle) {
        this.errors.push('Требуется указать подзаголовок.');
      }
      if (!this.postPayload.post.categories.length) {
        this.errors.push('Требуется указать категорию.');
      }
      if (!this.model.length) {
        this.errors.push('Введите теги.');
       }
      if (!this.postPayload.arts.length) {
        this.errors.push('Выберите изображение.');
      }
      if(this.errors.length == 0) {
        this.uploadData();
      }
      e.preventDefault();
    },
    uploadData(){

      this.postPayload.post.tags = Array.from(this.model, x => x.text);
      console.log(this.postPayload);
     // this.$store.dispatch('upload_post', this.postPayload);
    }
  }
  }
</script>

<style scoped>
  @import './style/createpost.css';
</style>