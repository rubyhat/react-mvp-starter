import { Container, Grid, Typography } from "@mui/material";
import classNames from "classnames/bind";

import { TextBox } from "src/components/_pages/Common";

import styles from "./styles.module.scss";

export const Page404 = () => {
  const cn = classNames.bind(styles);
  return (
    <article>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Ошибка 404</Typography>
            <TextBox
              title="Что произошло?"
              text="Вы попали на страницу, которой не существует"
            />
            <TextBox
              title="Почему это произошло?"
              text="В большинстве ситуаций ошибка 404 отображается, если связь с сервером установлена, но информации по заданному запросу нет. Возможно, в адресе опечатка — такое случается при ручном наборе. Или страница была удалена, но сохранилась в закладках вашего браузера"
            />
            <TextBox
              title="Что делать?"
              text="Поскольку мы не знаем, как и откуда вы попали на эту страницу, то рекомендуем начать с главной страницы"
              link={{ url: "/", text: "Вернуться на главную страницу" }}
            />
            <TextBox
              text="А еще можно написать нам в поддержку. Если проблема случилась по нашей вине — например, из-за неправильного редиректа на страницу с изменённым адресом — мы всё поправим в кратчайшие сроки"
              link={{ url: "/contacts", text: "Написать в поддержку" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              className={cn("img")}
              src="/static/images/img-page-404.svg"
              alt="Page not found"
            />
          </Grid>
        </Grid>
      </Container>
    </article>
  );
};
