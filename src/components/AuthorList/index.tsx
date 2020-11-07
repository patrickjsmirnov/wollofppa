import React, { FC, memo } from 'react';
import styles from './styles.module.css'

const AuthorList: FC<{authors: string[]}> = ({ authors }) => (
  <div className={ styles.container }>
    <h1 className={ styles.title }>Authors</h1>
    <ul className={ styles.list }>
      {authors.map((author, idx) => (
        <li key={ idx } className={ styles.author }>{author}</li>
      ))}
    </ul>
  </div>
)

export default memo(AuthorList)