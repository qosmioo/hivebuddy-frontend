<template>
  <div class="posts">
    <h4>Командный проект {{ $store.state.teamName }}</h4>
    <div class="d-flex flex-row align-items-center mb-4">
      <my-input v-model="searchQuery" placeholder="Поиск..."/>
      <my-button @click="$router.push('/post-create')">Создать пост</my-button>
    </div>
    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"
import MyDialog from "@/components/UI/MyDialog.vue";
import axios from 'axios';
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import MyInput from "@/components/UI/MyInput.vue";
import {getPostsByGroupId} from "@/api/api.js";

export default {
  components: {
    MyInput,
    MySelect,
    MyButton,
    MyDialog,
    PostList,
    PostForm
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ],
      comment: {
        id: "",
        text: "",
        userId: "",
        createdAt: "",
        postId: ""
      }
    }
  },
  methods: {
    async fetchPosts() {
      const response = await getPostsByGroupId(this.$store.state.teamId);
      this.totalPages = Math.ceil(response.length / this.limit)
      this.posts = response;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
          post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.text.toLocaleLowerCase().includes(this.searchQuery.toLocaleLowerCase()))
    }
  }
}
</script>

<style>

.posts {
  background-image: url("/src/images/background.png");
  background-size: cover;
}

</style>