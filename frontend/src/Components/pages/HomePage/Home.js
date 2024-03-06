import React from 'react';
import classes from './Home.module.css';
import MailEditor from '../Editor/MailEditor';



export default function homePage() {
  return (
    <div>
      <h1>"Welcome to your mail box"</h1>
      <MailEditor />
    </div>
  )
}
