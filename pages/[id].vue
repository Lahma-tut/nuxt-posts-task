<script setup>
const route = useRoute()

const { data: post, error } = await useFetch(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.id}`
)

useSeoMeta({
  title: post.value.title,
  description: 'This is my amazing site, let me tell you all about it.',
})

</script>

<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <div class="wrap">
      <div class="image">
        <NuxtImg src="/bicycle-1.png" alt="bicycle" />
      </div>
      <div class="description">
        <p>{{ post.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  font-size: 84px;
  line-height: 84px;
  font-weight: 400;
  color: #101010;
  margin: 0 0 40px 0;
}

.image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.description {
  max-width: 50%;
  margin: 80px 0 0 0;
}

.description p {
  font-size: 36px;
  line-height: 44.64px;
  font-weight: 400;
  margin-bottom: 0;
}

</style>