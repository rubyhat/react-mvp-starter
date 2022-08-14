import classNames from "classnames/bind";

import styles from "./styles.module.scss";

export const Login = () => {
  const cn = classNames.bind(styles);
  return <article className={cn(["article"])}>Login page</article>;
};
