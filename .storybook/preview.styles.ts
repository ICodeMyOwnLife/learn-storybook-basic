import { makeStyles, createStyles, Theme } from "@material-ui/core";

const styles = ({ spacing }: Theme) =>
  createStyles({
    root: { padding: spacing(2) },
  });

const useStyles = makeStyles(styles, { name: "preview" });

export default useStyles;
