<script setup>
</script>

<template>
  <div class="container">
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

main {
  flex: 1 1 auto;
  margin: 100px 0 150px 0;
}
</style>