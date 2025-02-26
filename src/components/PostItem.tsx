"use client"

import { useState } from "react"
import { CSSTransition } from "react-transition-group"
import MyButton from "./UI/button/MyButton"
import type { SinglePost } from "../Interfaces"
import { useNavigate } from "react-router-dom"

export default function PostItem({ post, remove }: SinglePost) {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(true)

  const handleDelete = () => {
    setIsVisible(false)
  }
  return (
    <CSSTransition in={isVisible} timeout={300} classNames="post" unmountOnExit onExited={() => remove(post.id)}>
      <div className="post">
        <div className="post_content">
          <strong>
            {post.id}. {post.title}
          </strong>
          <div>{post.body}</div>
        </div>
        <div className="post_btns">
          <div>
            <MyButton onClick={handleDelete}>Delete</MyButton>
          </div>
          <div>
            <MyButton onClick={() => navigate(`/posts/${post.id}`)}>Open</MyButton>
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

