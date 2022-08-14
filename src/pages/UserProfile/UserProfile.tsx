import classNames from "classnames/bind";

import styles from "./styles.module.scss";

export const UserProfile = () => {
  const cn = classNames.bind(styles);
  return <article className={cn(["article"])}>User profile page</article>;
};
