

<template lang="pug">
  .main
    //- .login
    //-     .login__overlay
    //-       .login__container
    //-         form.login__form
    //-           .close
    //-           h1.login__title Авторизация
    //-           .login__form-row
    //-             .login__form-block
    //-               label(for="login").login__form-block-title Логин
    //-               .login__input
    //-                 svg.login__input-icon
    //-                   use(xlink:href="sprite.svg#user")
    //-                 input(id="login" type="text" name="login" placeholder="Terminator_2000").login__input-area
    //-           .login__form-row
    //-             .login__form-block
    //-               label(for="password").login__form-block-title Пароль
    //-               .login__input
    //-                 svg.login__input-icon
    //-                   use(xlink:href="sprite.svg#key")
    //-                 input(id="password" type="password" name="password" placeholder="***********").login__input-area
    //-           button(type="button").login__button Отправить

    header.header
      .container.header__container
        .header__col-grid
          .header__photo
            img(src="../images/content/photo/photo.jpg" alt="Фото").header__pic
          .header__name Сергей Кораблев
          .header__title Панель администрирования
          a.header__exit(href="#") Выйти

    nav.menu
      .container.menu__container
        ul.menu-list
          li.menu-list__item.menu__item_active
            a.menu-list__link(href="#") Обо мне
          li.menu-list__item
            a.menu-list__link(href="#") Работы
          li.menu-list__item
            a.menu-list__link(href="#") Отзывы
</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,800&subset=cyrillic');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

@import "../styles/admin/login.pcss";
@import "../styles/admin/header.pcss";
@import "../styles/admin/nav.pcss";

@import "../styles/blocks/close.pcss";

</style>