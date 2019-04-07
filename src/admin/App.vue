

<template lang="pug">
  .main
    .login
        .login__overlay
          .login__container
            form.login__form
              .close
              h1.login__title Авторизация
              .login__form-row
                .login__form-block
                  label(for="login").login__form-block-title Логин
                  .login__input
                    svg.login__input-icon
                      use(xlink:href="sprite.svg#user")
                    input(id="login" type="text" name="login" placeholder="Terminator_2000").login__input-area
              .login__form-row
                .login__form-block
                  label(for="password").login__form-block-title Пароль
                  .login__input
                    svg.login__input-icon
                      use(xlink:href="sprite.svg#key")
                    input(id="password" type="password" name="password" placeholder="***********").login__input-area
              button(type="button").login__button Отправить

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

    .page.page__about-me
      main.skills
        .container.skills__container
          .skills__top
            .title.skills__title Блок «Обо мне»
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
                        svg.tick-icon.form-icon
                          use(xlink:href="sprite.svg#tick")
                      button(type="button").cross__btn    
                        svg.cross-icon.form-icon
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

    .page.page__works
      main.works
        .container.works__container
          .works__top
            .title.works__title Блок «Работы»
          .works-edit
            .works-edit__container
              h2.title.works-edit__title Редактирование работы
              .works-edit__window
                .load
                  .load-window
                    .load-window__text Перетащите или загрузите для загрузки изображения
                    button.load-btn(type="button") Загрузить
                  button.change-preview-btn(type='button') Изменить превью
                ul.works-edit-list
                  li.works-edit-list__item Название
                    label(for='name')
                    input(type='text' id='name' placeholder="Дизайн сайта для авто салона Porsche").works-edit-list__name.input-data
                  li.works-edit-list__item Ссылка
                    label(for='link')
                    input(type='text' id='link' placeholder="https://www.porshe-pulkovo.ru").works-edit-list__link.input-data
                  li.works-edit-list__item Описание
                    label(for='desc')
                    textarea(type='text' id='desc' placeholder="Порше Центр Пулково-является официальным дилером марки Порше в Санкт-Петербурге и предоставляет полный цикл услуг по продаже и сервисному обслуживанию автомобилей").works-edit-list__desc.input-data
                  li.works-edit-list__item Добавление тэга
                    label(for='tag')
                    input(type='text' id='tag' placeholder="Jquery, Vue.js, HTML5").works-edit-list__link.input-data
                  li.works-edit-list__item.works-edit-list__skill
                    .works-edit-list__some
                      .works-skill-list__name HTML
                      button(type="button").cross__btn.skill__btn    
                          svg.cross-icon
                            use(xlink:href="sprite.svg#cross")
                    .works-edit-list__some
                      .works-skill-list__name CSS
                      button(type="button").cross__btn.skill__btn    
                          svg.cross-icon.skill__icon
                            use(xlink:href="sprite.svg#cross")
                    .works-edit-list__some
                      .works-skill-list__name JavaScript
                      button(type="button").cross__btn.skill__btn    
                          svg.cross-icon
                            use(xlink:href="sprite.svg#cross")
              .edit__btns
                button(type='button').cancel__btn Отмена
                button(type='button').save__btn Сохранить

    .page.page__works-add
      main.works-add
        .container.works-add__container
          ul.works-add-list
            li.works-add-list__item.works-add-list__item--plus
              button(type='button').works-add-list__btn +
              .works-add-list__text-add Добавить работу
            li.works-add-list__item
              img(src="../images/content/bg/preview_small_1.jpg" alt='Фото работы').preview-header__pic
              .works-add-list__content
                h4.works-add-list__title Сайт школы образования
                p.works-add-list__desk Этот парень проходил обучение веб-разработке не где-то,
                  |а в LoftScholl! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.works-add-list__link(href="#") http://loftschool.ru
              .add-list__btns
                button(type="button").add-list__btn-edit Править
                  svg.pencil-icon.dd-list__icon
                    use(xlink:href='sprite.svg#pencil')
                button(type="button").add-list__btn-delete Удалить
                  svg.cross-icon.add-list__icon
                    use(xlink:href='sprite.svg#cross')
            li.works-add-list__item
              img(src="../images/content/bg/preview_small_2.jpg" alt='Фото работы').preview-header__pic
              .works-add-list__content
                h4.works-add-list__title Сайт школы образования
                p.works-add-list__desk Этот парень проходил обучение веб-разработке не где-то,
                  |а в LoftScholl! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.works-add-list__link(href="#") http://loftschool.ru
              .add-list__btns
                button(type="button").add-list__btn-edit Править
                  svg.pencil-icon.add-list__icon
                    use(xlink:href='sprite.svg#pencil')
                button(type="button").add-list__btn-delete Удалить
                  svg.cross-icon.add-list__icon
                    use(xlink:href='sprite.svg#cross')
            li.works-add-list__item
              img(src="../images/content/bg/preview_small_3.jpg" alt='Фото работы').preview-header__pic
              .works-add-list__content
                h4.works-add-list__title Сайт школы образования
                p.works-add-list__desk Этот парень проходил обучение веб-разработке не где-то,
                  |а в LoftScholl! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.works-add-list__link(href="#") http://loftschool.ru
              .add-list__btns
                button(type="button").add-list__btn-edit Править
                  svg.pencil-icon.add-list__icon
                    use(xlink:href='sprite.svg#pencil')
                button(type="button").add-list__btn-delete Удалить
                  svg.cross-icon.add-list__icon
                    use(xlink:href='sprite.svg#cross')
            li.works-add-list__item
              img(src="../images/content/bg/preview_small_4.jpg" alt='Фото работы').preview-header__pic
              .works-add-list__content
                h4.works-add-list__title Сайт школы образования
                p.works-add-list__desk Этот парень проходил обучение веб-разработке не где-то,
                  |а в LoftScholl! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a.works-add-list__link(href="#") http://loftschool.ru
              .add-list__btns
                button(type="button").add-list__btn-edit Править
                  svg.pencil-icon.add-list__icon
                    use(xlink:href='sprite.svg#pencil')
                button(type="button").add-list__btn-delete Удалить
                  svg.cross-icon.add-list__icon
                    use(xlink:href='sprite.svg#cross')
    .page.page__reviews-add
      main.reviews-add
        .container.reviews-add__container    
          .reviews__top
            .title.reviews__title Блок «Отзывы» 
          .reviews-edit
            .reviews-edit__container
              h2.title.reviews-edit__title Новый отзыв
              .reviews-edit__window
                .reviews-edit__photo
                  .reviews-edit__pic
                    svg.man-user-icon
                      use(xlink:href='sprite.svg#man-user')
                  .reviews-edit__text Добавить фото
                form.reviews-edit__form
                  .reviews-edit__row
                    .reviews-edit__autor Имя автора
                      label(for='nameAutor')
                      input(type='text' id='nameAutor' placeholder='Ковальчук Дмитрий').input-data.reviews-edit__name
                    .reviews-edit__post Титул автора
                      label(for='post')
                      input(type='text' id='post' placeholder='Основатель LoftScholl').input-data.reviews-edit__name
                  .reviews-edit__row 
                    .reviews-edit__review Отзыв
                      label(for='review')
                      textarea(type='text' id='review' placeholder='Этот парень проходил обучение веб-разработке не где-то, а в LoftScholl! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!').input-data.reviews-edit__textarea
                  .edit__btns
                    button(type='button').cancel__btn Отмена
                    button(type='button').save__btn Сохранить

    .page.page__reviews-add
      main.reviews-add
        .container.reviews-add__container
          ul.reviews-add-list
            li.reviews-add-list__item.reviews-add-list__item--plus
              button(type='button').reviews-add-list__btn +
              .reviews-add-list__text-add Добавить отзыв
            li.reviews-add-list__item
              .reviews-add-list__user
                .reviews-add-list__user-photo
                  img(src="../images/content/photo/KD.jpg" alt='Фото отзыва').reviews-user__pic
                .reviews-add-list__data
                  .reviews-add-list__name Владимир Сабанцев
                  .reviews-add-list__post Преподователь
              .reviews-add-list__content
                p.reviews-add-list__desk Этот парень проходил обучение веб-разработке не где-то,
                  |а в LoftScholl! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .add-list__btns
                button(type="button").add-list__btn-edit Править
                  svg.pencil-icon.add-list__icon
                    use(xlink:href='sprite.svg#pencil')
                button(type="button").add-list__btn-delete Удалить
                  svg.cross-icon.add-list__icon
                    use(xlink:href='sprite.svg#cross')
            li.reviews-add-list__item
              .reviews-add-list__user
                .reviews-add-list__user-photo
                  img(src="../images/content/photo/KD.jpg" alt='Фото отзыва').reviews-user__pic
                .reviews-add-list__data
                  .reviews-add-list__name Владимир Сабанцев
                  .reviews-add-list__post Преподователь
              .reviews-add-list__content
                p.reviews-add-list__desk Этот парень проходил обучение веб-разработке не где-то,
                  |а в LoftScholl! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .add-list__btns
                button(type="button").add-list__btn-edit Править
                  svg.pencil-icon.add-list__icon
                    use(xlink:href='sprite.svg#pencil')
                button(type="button").add-list__btn-delete Удалить
                  svg.cross-icon.add-list__icon
                    use(xlink:href='sprite.svg#cross')
            li.reviews-add-list__item
              .reviews-add-list__user
                .reviews-add-list__user-photo
                  img(src="../images/content/photo/KD.jpg" alt='Фото отзыва').reviews-user__pic
                .reviews-add-list__data
                  .reviews-add-list__name Владимир Сабанцев
                  .reviews-add-list__post Преподователь
              .reviews-add-list__content
                p.reviews-add-list__desk Этот парень проходил обучение веб-разработке не где-то,
                  |а в LoftScholl! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .add-list__btns
                button(type="button").add-list__btn-edit Править
                  svg.pencil-icon.add-list__icon
                    use(xlink:href='sprite.svg#pencil')
                button(type="button").add-list__btn-delete Удалить
                  svg.cross-icon.add-list__icon
                    use(xlink:href='sprite.svg#cross')
            li.reviews-add-list__item
              .reviews-add-list__user
                .reviews-add-list__user-photo
                  img(src="../images/content/photo/KD.jpg" alt='Фото отзыва').reviews-user__pic
                .reviews-add-list__data
                  .reviews-add-list__name Владимир Сабанцев
                  .reviews-add-list__post Преподователь
              .reviews-add-list__content
                p.reviews-add-list__desk Этот парень проходил обучение веб-разработке не где-то,
                  |а в LoftScholl! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
              .add-list__btns
                button(type="button").add-list__btn-edit Править
                  svg.pencil-icon.add-list__icon
                    use(xlink:href='sprite.svg#pencil')
                button(type="button").add-list__btn-delete Удалить
                  svg.cross-icon.add-list__icon
                    use(xlink:href='sprite.svg#cross')




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
@import "../styles/admin/works-edit.pcss";
@import "../styles/admin/works-add.pcss";
@import "../styles/admin/reviews-add.pcss";
@import "../styles/admin/reviews-edit.pcss";
@import "../styles/admin/buttons.pcss";

@import "../styles/blocks/close.pcss";

</style>