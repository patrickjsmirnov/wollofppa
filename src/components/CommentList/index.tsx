import React, { FC, useState } from 'react';
import { CommentType } from '../../types/index'
import Comment from '../Comment'
import styles from './styles.module.css'
import { COMMENTS } from '../../data/simpleSample'
import AuthorList from '../AuthorList'

const CommentList: FC = () => {
  const [activeUser, setActiveUser] = useState(0)

  function renderComment(comment:CommentType, key: string, level: number) {
    return (
      <Comment 
        comment={ comment } 
        idx={ key }
        level={ level }
        activeUser={ activeUser }
        setActiveUser={ setActiveUser }
      />
    )
  }

  const listOfComments:any[] = []
  const authors: string[] = []

  function renderComments(comments: CommentType[], level: number = 1) {
    if (!comments.length) return null
    
    comments.forEach((comment, idx) => {

      if (!authors.some(author => author === comment.author)) {
        authors.push(comment.author)
      }

      const key: string = `${level}${idx}`      
      listOfComments.push(renderComment(comment, key, level))

      if (comment.comments && comment.comments.length) {
        const recLevel: number = level + 1
        return renderComments(comment.comments, recLevel)
      }
    })

    return listOfComments
  }

  return (
    <div className={ styles.container }>
      <AuthorList authors={ authors } />

      <h2 className={ styles.title }>Comments</h2>
      <ul className={ styles.list }>
        {renderComments(COMMENTS)}
      </ul>
    </div>
  )
}

export default CommentList