<script setup lang="ts">
import type { Ref } from 'vue'
import { ref } from 'vue'
import { useOffsetPagination } from '@vueuse/core'

useSeoMeta({
  title: 'QTIM Blog | QTIM',
  description: 'This is my amazing site, let me tell you all about it.',
})

interface Posts {
  id: number
  title: string
  preview: string
  image: string
  description: string
}

// {
// id: "1",
// createdAt: "2021-04-23T05:11:54.250Z",
// title: "Licensed Granite Chair",
// preview: "programming the port won't do anything, we need to copy the auxiliary USB system!",
// image: "http://lorempixel.com/640/480/technics",
// description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// },

const { data: posts, error } = await useFetch(
  'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/', {
  lazy: true
})

const database = ref([]) as Ref<Posts[]>

posts.value.forEach((item: Posts) => {
  database.value.push({
    id: item.id,
    title: item.title,
    preview: item.preview,
    image: item.image,
    description: item.description
  })
})

function fetch(page: number, pageSize: number) {
  return new Promise((resolve, reject) => {
    const start = (page - 1) * pageSize
    const end = start + pageSize
    setTimeout(() => {
      resolve(database.value.slice(start, end))
    }, 100)
  })
}

const data: Ref<Posts[]> = ref([])
const page = ref(1)
const pageSize = ref(8)

fetchData({
  currentPage: page.value,
  currentPageSize: pageSize.value,
})

function fetchData({ currentPage, currentPageSize }: { currentPage: number, currentPageSize: number }) {
  fetch(currentPage, currentPageSize).then((responseData) => {
    data.value = responseData
  })
}

const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: database.value.length,
  page: 1,
  pageSize,
  onPageChange: fetchData,
  onPageSizeChange: fetchData,
})
</script>

<template>
  <div class="container">
    <h1>Articles</h1>
    <div v-if="!data">
      Loading ...
    </div>
    <section v-else>
      <article v-for="post in data" :key="post.id">
        <NuxtLink :to="`/${post.id}`">
          <div class="image">
            <NuxtImg src="/bicycle-1.png" alt="bicycle" width="280" height="280" />
          </div>
          <h3>
            {{ post.preview }}
          </h3>
          <button class="btn-more">
            Read More
          </button>
        </NuxtLink>
      </article>
    </section>

    <div class="pagination">
      <button v-for="item in pageCount" :key="item" :disabled="currentPage === item" @click="currentPage = item"
        :class="[currentPage === item ? 'btn-page-active' : 'btn-page']">
        {{ item }}
      </button>

      <button :disabled="isLastPage" @click="next" class="btn-page-next">
        &#5171;
      </button>
    </div>

  </div>
</template>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 20px;
  margin: 0 0 60px 0;
}

h1 {
  font-size: 84px;
  line-height: 84px;
  font-weight: 400;
  color: #101010;
  margin: 0 0 40px 0;
}

article {
  transition: transform .3s linear;
}

article:hover {
  transform: translateY(-10px);
}

article:hover .btn-more {
  opacity: 1;
}

.image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

a {
  text-decoration: none;
}

h3 {
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
  color: #101010;

  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.btn-more {
  color: #e2beff;
  font-size: 20px;
  opacity: 0;
  transition: opacity .3s linear;
}

.pagination {
  display: flex;
  gap: 10px;
}

.btn-page-active {
  border-radius: 12px;
  background: #101010;
  padding: 11px 17px;
  color: white;
}

.btn-page {
  border-radius: 12px;
  background: #f3f3f3;
  padding: 11px 17px;
  color: #101010;
}

.btn-page-next {
  border: 1px solid #f3f3f3;
  border-radius: 12px;
  padding: 11px 17px;
  color: #868686;
}
</style>