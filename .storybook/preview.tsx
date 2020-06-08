import React from "react";
import { addDecorator } from "@storybook/react";
import { CssBaseline } from "@material-ui/core";
import useStyles from "./preview.styles";

addDecorator((story) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      {story()}
    </div>
  );
});
