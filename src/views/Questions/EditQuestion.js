import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const useStyles = theme => ({
  root: {
    height: '200vh',
    width:'100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: theme.spacing(2)
  },

})
class EditQuestion extends React.Component {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        <h4>Edit Question</h4><br />
        
      </div>
    );
  }
}

export default (withStyles(useStyles)(EditQuestion));
