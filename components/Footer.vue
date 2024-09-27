<template>
  <footer>
    <div class="wrap">
      <div class="footer-top">
        <div class="footer-top-head">
          <p>Is there a project?</p>
          <h4>Let’s work together</h4>
        </div>

        <div class="footer-top-adress">
          <div class="adress adress-1">
            <h5>For all questions</h5>
            <div>
              <p>+7 (920) 278—00—68</p>
              <p>qtim@agency.com</p>
            </div>
          </div>

          <div class="adress adress-2">
            <h5>Office in Russia</h5>
            <p>139 Ruben Station Lake Drew, NM 52678</p>
            <NuxtImg src="/button-location.png" alt="location" width="32" height="32" />
          </div>

          <div class="adress adress-3">
            <h5>Office in Dubai</h5>
            <p>139 Ruben Station Lake Drew, NM 52678</p>
            <NuxtImg src="/button-location.png" alt="location" width="32" height="32" />
          </div>

        </div>
      </div>

      <div class="footer-bottom">
        <div class="link-social">
          <NuxtLink to="/about">Facebook</NuxtLink>
          <NuxtLink to="/about">Instagram</NuxtLink>
          <NuxtLink to="/about">Telegram</NuxtLink>
        </div>

        <div class="semi-circle">
          <div class="semi-circle-box">
            <button class="btn-go">Go</button>
          </div>
        </div>

        <div class="link-social">
          <NuxtLink to="/about">Behance</NuxtLink>
          <NuxtLink to="/about">Linkedn</NuxtLink>
          <NuxtLink to="/about">Privacy Policy</NuxtLink>
        </div>
      </div>
      
    </div>
  </footer>
</template>

<style scoped>
footer {
  height: 900px;
  background: #E2BEFF;
}

.wrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 140px 0 0 0;
}

.footer-top-head {
  max-width: 564px;
}

.footer-top-adress {
  justify-self: center;
}

.adress {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 0 60px 0;
}

.adress h5 {
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  margin: 0;
}

.adress p {
  margin: 3px 0;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 40px 0;

  position: relative;
}

.link-social {
  display: flex;
  gap: 40px;
}

.link-social a {
  font-weight: 400;
  font-size: 16px;
  line-height: 19.2px;
  color: #101010;

  text-decoration-line: underline;
  text-underline-offset: 5px;
  text-decoration-thickness: 1px;
}

.semi-circle {
  width: 20rem;
  height: 10rem;
  background-color: #101010;
  border-radius: 10rem 10rem 0 0;

  position: absolute;
  bottom: -40px;
  right: 38%;
}

.semi-circle-box {
  position: relative;
}

.btn-go {
  font-size: 32px;
  line-height: 32px;
  font-weight: 400;
  color: white;

  position: absolute;
  top: 88px;
  left: 41%;
}

h4 {
  font-size: 112px;
  line-height: 112px;
  font-weight: 400;
  margin: 0;

  text-decoration-line: underline;
  text-underline-offset: 20px;
  text-decoration-thickness: 2px;
}
</style>