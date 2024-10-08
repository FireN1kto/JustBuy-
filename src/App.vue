<script>
</script>


<template>
  <header>
    <div class="navigation">
      <nav>
        <RouterLink to="/Catalog" id="link">Каталог</RouterLink>
        <RouterLink to="/CompletedOrders" id="link">Оформленные заказы</RouterLink>
        <img src="/Logotip.png">
        <RouterLink to="/Basket" id="link">Корзина</RouterLink>
        <RouterLink to="/Login" id="link">Войти</RouterLink>
        <RouterLink to="/Registration" id="link">Регистрация</RouterLink>
        <RouterLink to="/LogOut" id="link1">Выйти из аккаунта</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>

  .navigation {
    display: flex;
    justify-content: center;
  }

  .navigation > nav{
    display: flex;
    gap: 10rem;
  }

  #link {
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 20pt;
  }

  #link:hover {
    color: #04B6D6;
  }

  #link:active {
    color: black;
    text-decoration: underline;
    text-decoration-color: #04B6D6;
  }

  #link:nth-of-type(1) {
    pointer-events: none;
    text-decoration: underline;
    text-decoration-color: #04B6D6;
  }


  #link1 {
    display: none;
    text-decoration: none;
    color: black;
    font-weight: bold;
    font-size: 20pt;
  }

  #link1:hover {
    color: #04B6D6;
  }

  #link1:active {
    color: black;
    text-decoration: underline;
    text-decoration-color: #04B6D6;
  }

</style>
