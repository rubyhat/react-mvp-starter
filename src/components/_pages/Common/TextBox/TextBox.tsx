import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";

import { ITextBox } from "./interfaces";
import styles from "./styles.module.scss";

export const TextBox = (props: ITextBox) => {
  const { title, text, link } = props;
  const cn = classNames.bind(styles);
  return (
    <Box>
      {title && (
        <Typography className={cn("title")} variant="h6">
          {title}
        </Typography>
      )}
      {text && (
        <Typography className={cn("text")} variant="body1">
          {text}
        </Typography>
      )}
      {link && (
        <Link className={cn("link")} to={link.url}>
          {link.text}
        </Link>
      )}
    </Box>
  );
};
