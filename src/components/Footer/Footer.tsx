import { Container } from "@mui/material";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

export const Footer = () => {
  const cn = classNames.bind(styles);
  return (
    <footer className={cn(["footer"])}>
      <Container>Footer component</Container>
    </footer>
  );
};
