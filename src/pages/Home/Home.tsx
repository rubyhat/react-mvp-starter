import classNames from "classnames/bind";

import styles from "./styles.module.scss";

export const Home = () => {
  const cn = classNames.bind(styles);
  return <article className={cn(["article"])}>Home page</article>;
};
