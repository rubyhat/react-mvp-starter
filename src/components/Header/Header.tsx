import { Container } from "@mui/material";
import classNames from "classnames/bind";

import styles from "./styles.module.scss";

export const Header = () => {
  const cn = classNames.bind(styles);
  return (
    <header className={cn(["header"])}>
      <Container>header component</Container>
    </header>
  );
};
