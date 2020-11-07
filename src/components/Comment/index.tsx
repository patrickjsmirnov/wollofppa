import React, { FC } from 'react';
import { CommentType } from '../../types/index'
import styles from './styles.module.css'
import classNames from 'classnames';

const Comment: FC<{comment: CommentType, idx: string, level: number, activeUser: number, setActiveUser: (user_id: number) => void}> = ({ comment, idx, level, activeUser, setActiveUser }) => {

  function hanlerActiveUser():any {
    setActiveUser(comment.user_id)
  }
  
  return (
    <li 
      key={ idx }
      data-level={ level }
      className={ classNames(styles.comment, { [styles.commentActive]: activeUser === comment.user_id }) }
      style={{ marginLeft: `${level * 30}px` }}
      onClick={ hanlerActiveUser }
      >
        <p className={ styles.commentAuthor }>{comment.author}</p>
        <p className={ styles.commentMessage }>{comment.message}</p>
    </li>
  )
}

export default Comment