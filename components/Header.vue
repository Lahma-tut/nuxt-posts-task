<template>
  <header>
    <div class="wrap">
      <div class="logo">
        <NuxtLink to="/"><img src="/img.png" alt="logo" width="100px"></NuxtLink>
      </div>
      <nav>
        <ul>
          <li><NuxtLink to="/">Works</NuxtLink></li>
          <li><NuxtLink to="/5">About</NuxtLink></li>
        </ul>
      </nav>
      <div class="btn-group">
        <button class="btn-language">
          <NuxtImg src="/language.png" alt="language" />
        </button>
        <button class="btn-work">Let's work</button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 121px;
}

.wrap {
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  align-items: center;
  justify-content: space-between;

  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

ul {
  display: flex;
  gap: 60px;
  justify-content: center;
}

a {
  color: #101010;
  text-decoration: none;
}

.btn-group {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-self: right;
}

.btn-work {
  border-radius: 50px;
  padding: 16px 32px 16px 32px;
  background: #101010;
  color: #ffffff;
}


</style>