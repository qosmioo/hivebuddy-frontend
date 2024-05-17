<template>
  <div class="posts">
    <h4>Командный проект {{ $store.state.teamName }}</h4>
    <div class="d-flex flex-row align-items-center mb-4">
      <my-input v-model="searchQuery" placeholder="Поиск..."/>
      <my-button @click="$router.push('/post-create')">Создать пост</my-button>
<!--      <my-dialog v-model:show="dialogVisible">-->
<!--        <post-form @create="createPost"/>-->
<!--      </my-dialog>-->
    </div>
    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />
    <div v-else>Идет загрузка...</div>
<!--    <div v-intersection="loadMorePosts" class="observer"></div>-->

    <!--    <div class="page_wrapper">-->
    <!--      <div-->
    <!--        v-for="pageNumber in totalPages"-->
    <!--        :key="pageNumber"-->
    <!--        class="page"-->
    <!--        :class="{-->
    <!--          'current-page' : page === pageNumber-->
    <!--        }"-->
    <!--        @click="changePage(pageNumber)"-->
    <!--      >-->
    <!--        {{ pageNumber }}-->
    <!--      </div>-->
    <!--    </div>-->
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
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
      this.dialogVisible = false
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showDialog() {
      this.dialogVisible = true
    },
    async fetchComments(post_id) {
      try {
        const res = (await axios.get('https://jsonplaceholder.typicode.com/comments')).data.filter(comment => comment.postId === post_id)
      } catch (e) {
        alert('Ошибка')
      }
    },
    async fetchPosts() {
      // try {
      //   this.isPostsLoading = true;
      //   // const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      //   //   params: {
      //   //     _page: this.page,
      //   //     _limit: this.limit
      //   //   }
      //   // });
      //   console.log(this.$store.state.groupId)
      //   const response = await getPostsByGroupId(this.$store.state.groupId);
      //   this.totalPages = Math.ceil(response.length / this.limit)
      //   this.posts = response;
      // } catch (e) {
      //   alert('Ошибка')
      //   console.log(e)
      // } finally {
      //   this.isPostsLoading = false;
      // }
        const response = await getPostsByGroupId(this.$store.state.teamId);
        this.totalPages = Math.ceil(response.length / this.limit)
        this.posts = response;
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Ошибка')
      }
    }
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
  },
  watch: {
    // page() {
    //   this.fetchPosts()
    // }
  }
}
</script>

<style>

.posts {
  background-image: url("/src/images/background.png");
  background-size: cover;
}

</style>