import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, optionsKnob, boolean } from "@storybook/addon-knobs";
import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
  PropTypes,
} from "@material-ui/core";
import StartIcon from "@material-ui/icons/AccessTime";
import EndIcon from "@material-ui/icons/AssignmentRounded";
import AlarmIcon from "@material-ui/icons/AlarmOn";

export default {
  title: "Buttons",
  decorators: [withKnobs],
};

const actions = { onClick: action("clicked") };
const buttonSize = () =>
  optionsKnob<ButtonProps["size"]>(
    "size",
    { large: "large", medium: "medium", small: "small" },
    "medium",
    { display: "inline-radio" }
  );
const color = () =>
  optionsKnob<PropTypes.Color>(
    "color",
    {
      default: "default",
      inherit: "inherit",
      primary: "primary",
      secondary: "secondary",
    },
    "default",
    { display: "inline-radio" }
  );
const disabled = () => boolean("disabled", false);
const disableElevation = () => boolean("disableElevation", false);
const disableRipple = () => boolean("disableRipple", false);
const endIcon = () => boolean("endIcon", false);
const fullWidth = () => boolean("fullWidth", false);
const iconButtonSize = () =>
  optionsKnob<IconButtonProps["size"]>(
    "size",
    { medium: "medium", small: "small" },
    "medium",
    { display: "inline-radio" }
  );
const startIcon = () => boolean("startIcon", false);
const variant = () =>
  optionsKnob<ButtonProps["variant"]>(
    "variant",
    { contained: "contained", outlined: "outlined", text: "text" },
    "contained",
    { display: "inline-radio" }
  );

export const Buttons = () => (
  <Button
    color={color()}
    disabled={disabled()}
    disableElevation={disableElevation()}
    disableRipple={disableRipple()}
    endIcon={endIcon() && <EndIcon />}
    fullWidth={fullWidth()}
    size={buttonSize()}
    startIcon={startIcon() && <StartIcon />}
    variant={variant()}
    {...actions}
  >
    Button
  </Button>
);

export const IconButtons = () => (
  <IconButton
    color={color()}
    disabled={disabled()}
    disableRipple={disableRipple()}
    size={iconButtonSize()}
  >
    <AlarmIcon />
  </IconButton>
);
