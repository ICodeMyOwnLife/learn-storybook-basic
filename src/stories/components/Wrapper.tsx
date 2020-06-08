import React, { FC, memo, ReactNode } from "react";
import classes from "./Wrapper.module.css";

export const WrapperComponent: FC<WrapperProps> = ({ children }) => (
  <div className={classes.wrapper}>{children}</div>
);

const Wrapper = memo(WrapperComponent);
Wrapper.displayName = "Wrapper";
export default Wrapper;

export interface WrapperProps {
  children?: ReactNode;
}
