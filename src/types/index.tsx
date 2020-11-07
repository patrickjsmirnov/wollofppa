export type CommentType = {
  author: string,
  message: string,
  user_id: number,
  comments: CommentType[]
}