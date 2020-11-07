import React, { FC } from 'react';
import { CommentType } from '../../types/index'
import styles from './styles.module.css'
import classNames from 'classnames';

type CommentProps = {
  comment: CommentType,
  idx: string,
  level: number,
  activeUser: number,
  setActiveUser: (user_id: number) => void
}

const Comment: FC<CommentProps> = ({ comment, idx, level, activeUser, setActiveUser }) => {

  function hanlerActiveUser():void {
    setActiveUser(comment.user_id)
  }

  return (
    <li 
      key={ idx }
      data-level={ level }
      className={ classNames(styles.comment, { [styles.active]: activeUser === comment.user_id }) }
      style={{ marginLeft: `${level * 30}px` }}
      onClick={ hanlerActiveUser }
      >
        <p className={ styles.author }>{comment.author}</p>
        <p className={ styles.message }>{comment.message}</p>
    </li>
  )
}

export default Comment