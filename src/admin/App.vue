

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

    .page.page__content
      main.skills
        .container.skills__container
          .skills__top
            .title.skills__title Блок "Обо мне"
            button(type="button").skills__btn Добавить группу
          ul.skills-list
            li.skills-list__item
              .skills-list__inner
                form.form
                  .form__row
                    input(type="text" placeholder="Название новой группы").elem
                    .form__btns
                      button(type="button").tick__btn
                        svg.tick-icon.form__icon
                          use(xlink:href="sprite.svg#tick")
                      button(type="button").cross__btn    
                        svg.cross-icon.form__icon
                          use(xlink:href="sprite.svg#cross")
                  .form__row.form__elem
                    input(type="text" placeholder="Новый навык").elem.elem__padding.elem__width
                    input(type="text" placeholder="100 %").elem.elem__padding
                    button(type="button").elem__plus +

            li.skills-list__item
              .skills-list__inner
                form.form
                  .form__row
                    input(type="text" value="Workflow").elem
                    .form__btns
                      button(type="button").tick__btn
                        svg.tick-icon.form__icon
                          use(xlink:href="sprite.svg#tick")
                      button(type="button").cross__btn    
                        svg.cross-icon.form__icon
                          use(xlink:href="sprite.svg#cross")
                  ul.skill-list
                    li.skill-list__item
                      .skill-list__name Git
                      .skill-list__value 40
                      .skill-list__percent %
                      button(type="button").edit__btn
                        svg.pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").delete__btn
                        svg.trash-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill-list__item
                      .skill-list__name Terminal
                      .skill-list__value 50
                      .skill-list__percent %
                      button(type="button").edit__btn
                        svg.pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").delete__btn
                        svg.trash-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill-list__item
                      .skill-list__name Gulp
                      .skill-list__value 60
                      .skill-list__percent %
                      button(type="button").edit__btn
                        svg.pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").delete__btn
                        svg.trash-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill-list__item
                      .skill-list__name Webpack
                      .skill-list__amount 70
                      .skill-list__percent %
                      button(type="button").edit__btn
                        svg.pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").delete__btn
                        svg.trash-icon
                          use(xlink:href="sprite.svg#trash")
                  .form__row.form__elem
                    input(type="text" placeholder="Новый навык").elem.elem__padding.elem__width
                    input(type="text" placeholder="100 %").elem.elem__padding
                    button(type="button").elem__plus +

            li.skills-list__item
              .skills-list__inner
                form.form
                  .form__row
                    input(type="text" value="Frontend").elem
                    .form__btns
                      button(type="button").tick__btn
                        svg.tick-icon.form__icon
                          use(xlink:href="sprite.svg#tick")
                      button(type="button").cross__btn    
                        svg.cross-icon.form__icon
                          use(xlink:href="sprite.svg#cross")
                  ul.skill-list
                    li.skill-list__item
                      .skill-list__name HTML5
                      .skill-list__value 40
                      .skill-list__percent %
                      button(type="button").edit__btn
                        svg.pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").delete__btn
                        svg.trash-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill-list__item
                      .skill-list__name CSS3
                      .skill-list__value 50
                      .skill-list__percent %
                      button(type="button").edit__btn
                        svg.pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").delete__btn
                        svg.trash-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill-list__item
                      .skill-list__name JavaScript
                      .skill-list__value 60
                      .skill-list__percent %
                      button(type="button").edit__btn
                        svg.pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").delete__btn
                        svg.trash-icon
                          use(xlink:href="sprite.svg#trash")
                    li.skill-list__item
                      .skill-list__name Jquery и Vue.js
                      .skill-list__amount 70
                      .skill-list__percent %
                      button(type="button").edit__btn
                        svg.pencil-icon
                          use(xlink:href="sprite.svg#pencil")
                      button(type="button").delete__btn
                        svg.trash-icon
                          use(xlink:href="sprite.svg#trash")
                  .form__row.form__elem
                    input(type="text" placeholder="Новый навык").elem.elem__padding.elem__width
                    input(type="text" placeholder="100 %").elem.elem__padding
                    button(type="button").elem__plus +

</template>

<style lang="postcss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700,800&subset=cyrillic');
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

@import "../styles/admin/login.pcss";
@import "../styles/admin/header.pcss";
@import "../styles/admin/nav.pcss";
@import "../styles/admin/skills.pcss";
@import "../styles/admin/base-admin.pcss";
@import "../styles/admin/svg.pcss";

@import "../styles/blocks/close.pcss";

</style>