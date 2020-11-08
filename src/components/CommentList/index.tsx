import React, { FC, useState, ReactNode } from 'react';
import { CommentType } from '../../types/index'
import Comment from '../Comment'
import styles from './styles.module.css'
import { COMMENTS } from '../../data/simpleSample'
import AuthorList from '../AuthorList'

const CommentList: FC = () => {
  const [activeUser, setActiveUser] = useState<number>(0)
  const listOfComments:ReactNode[] = []
  const authors: string[] = []

  function renderComments(comments: CommentType[], level: number = 1) {
    if (!comments.length) return null
    
    comments.forEach((comment, idx) => {

      // todo use something like Set
      if (!authors.some(author => author === comment.author)) {
        authors.push(comment.author)
      }

      const key: string = `${level}${idx}`

      const CommentComponent:ReactNode = (
        <Comment
          comment={ comment }
          key={ key }
          level={ level }
          activeUser={ activeUser }
          setActiveUser={ setActiveUser }
        />
      )

      listOfComments.push(CommentComponent)

      if (comment.comments.length) {
        const recursionLevel: number = level + 1
        return renderComments(comment.comments, recursionLevel)
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