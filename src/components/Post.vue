<template>
  <div class="container">
    <div id="sidebar">

      <div>
        <img src="" alt="" class="avatar">
        <h1><a v-bind:href="userLink"></a>{{userName}}</h1>
        <p>{{userEmail}}</p>
        <button id="follow-btn" class="btn" v-bind:onclick="onFollowBtnClicked"/>
      </div>

      <div>
        <button id="fivorite-add-btn" class="btn" v-bind:onclick="onFavoriteAddBtnClicked"/>
        <button id="like-btn" class="btn" v-bind:onclick="onLikeBtnClicked"/>

        <h2>{{postTitle}}</h2>
        <p>{{postDescription}}</p>

        <div>
          <ul class="tag-holder">
            <li class="tag-element" v-for="tag in postTags">
              {{tag}}
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div id="content">

    </div>

  </div>
</template>

<script>
  export default {
    name: 'detail'
  }
</script>
