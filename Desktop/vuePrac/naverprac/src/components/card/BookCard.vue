<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div class="booklist">
    <p class="booklist_list" v-for="list in naverBook" :key="list">
      <img :src="list.img" class="booklist_list_image" />
      <span class="booklist_list_bookname">{{ list.bookname }}</span
      ><br />
      <span class="booklist_list_content">{{ list.content }}</span
      ><br />
      <span class="booklist_list_author">{{ list.author }}</span>
    </p>
  </div>
</template>

<script>
import naverData from "../../../db.json";

const naverBook = naverData.posts;

export default {
  methods: {},
  data() {
    return {
      naverBook,
    };
  },
};
</script>

<style lang="scss" scoped>
.booklist {
  // background-color: aqua;
  margin: 20px;
  width: 500px;
  height: 500px;
  overflow: scroll;

  flex-direction: column;

  img {
    width: 150px;
    height: 200px;
    float: left;
  }
  span {
    padding: 5px;
    // vertical-align: super;
    display: flex;
  }
  &_list {
    float: left;
    white-space: normal;
    // White-space: nowrap;
    &_bookname {
      font-weight: 700;
    }
  }
}
</style>
