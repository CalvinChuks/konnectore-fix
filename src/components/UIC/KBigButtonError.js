import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createMuiTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Button } from '@material-ui/core';

const theme = createMuiTheme({
  spacing: 10,
});
const styles = {
  kbutton: {
    margin: theme.spacing.unit * .8,
    paddingTop: theme.spacing.unit * .8,
    paddingBottom: theme.spacing.unit * .8,
    paddingRight: `${theme.spacing.unit * 5}px !important`,
    paddingLeft: `${theme.spacing.unit * 5}px !important`,
    boxShadow: 'none',
    borderRadius: 20,
    height: 38,
    backgroundColor: '#CD5A5A',
    color: 'white',
  },
  upper: {
    textTransform: 'uppercase',
  },
  normal: {
    textTransform: 'none',
  }
};

function KBigButtonError(props) {
  const { classes, color, upper } = props;
  const d = {disabled: props.disabled === true? true: false};
  //const d = props.disabled === true? 'disabled': ''
  return (
        <Button
          elevation={0}
          variant="extendedFab"
          size={props.size}
          color={color? color: "primary"}
          aria-label={props.label}
          className={classNames(classes.kbutton, upper === true? classes.upper: classes.normal)}
          onClick={props.onClick}
          {...d}
        >
          {props.label}
        </Button>
  );
}

KBigButtonError.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KBigButtonError);
