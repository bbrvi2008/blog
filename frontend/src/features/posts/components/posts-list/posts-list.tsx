import { PostList } from '@features/posts/types'
import React from 'react'
import { PostsCard } from '../posts-card'

import { List, ListItem } from '@mui/material'
import { PostsListProps } from './types'

const PostsList: React.FC<PostsListProps> = ({ data }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {data.map((post) => {
        return (
          <ListItem key={post.id} alignItems="flex-start">
            <PostsCard {...post} />
          </ListItem>
        )
      })}
    </List>
  )
}

export { PostsList }
