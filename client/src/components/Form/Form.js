import React, { useState } from 'react';
import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';

const Form = () => {
    const classes = useStyles();
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });

    const handleSubmit =  () => {
        
      };

    const clear = () => {

    };

  return (
  <Paper className={classes.paper}>
    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">Creating a Memory</Typography>
            <TextField name="user" variant="outlined" label="User" fullWidth value={postData.user} onChange={(e) => setPostData({ ...postData, user: e.target.value })}/>
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
            <TextField name="comment" variant="outlined" label="Comment" fullWidth value={postData.comment} onChange={(e) => setPostData({ ...postData, comment: e.target.value })}/>
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
            <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="large" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="success" size="medium" onClick={clear} fullWidth>Clear</Button>
    </form>
  </Paper>
  );
}

export default Form;