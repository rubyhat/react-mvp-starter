import classNames from "classnames/bind";

import styles from "./styles.module.scss";

export const Register = () => {
  const cn = classNames.bind(styles);
  return <article className={cn(["article"])}>Register page</article>;
};
