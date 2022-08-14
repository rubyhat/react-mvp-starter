import { Container, Grid, Typography } from "@mui/material";
import classNames from "classnames/bind";

import { TextBox } from "../../../components/_pages/Common/TextBox";

import styles from "./styles.module.scss";

export const Page401 = () => {
  const cn = classNames.bind(styles);
  return (
    <article>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Ошибка 401</Typography>
            <TextBox
              title="Что произошло?"
              text="Вы попали на страницу, доступ к которой имеют не все пользователи"
            />
            <TextBox
              title="Почему это произошло?"
              text="Вероятнее всего, вы не авторизовались на сайте и пытаетесть просмотреть защищенную страницу"
            />
            <TextBox
              title="Что делать?"
              text="Авторизуйтесь на сайте и откройте страницу повторно"
              link={{ url: "/login", text: "Авторизоваться" }}
            />
            <TextBox
              text="А еще можно написать нам в поддержку. Если проблема случилась по нашей вине — например, из-за неправильного редиректа на страницу с изменённым адресом — мы всё поправим в кратчайшие сроки"
              link={{ url: "/contacts", text: "Написать в поддержку" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              className={cn("img")}
              src="/static/images/img-page-401.svg"
              alt="Page not found"
            />
          </Grid>
        </Grid>
      </Container>
    </article>
  );
};
