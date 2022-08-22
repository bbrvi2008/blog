import { Post } from '@features/posts/types'
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Link,
  Chip,
} from '@mui/material'
import React from 'react'
import { PostsCardProps } from './types'

const PostsCard: React.FC<PostsCardProps> = ({ id, attributes }) => {
  return (
    <Card sx={{ width: '100%' }} variant="outlined">
      <CardActionArea
        component={Link}
        href={`/${encodeURIComponent(id)}`}
        sx={{ display: 'flex', alignItems: 'unset', justifyContent: 'unset' }}
      >
        <CardMedia
          component="img"
          sx={{ width: 200 }}
          image={attributes.image.data.attributes.url}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1 0 auto',
              gap: 2,
            }}
          >
            <Box sx={{ display: 'flex', gap: 1 }}>
              {attributes?.category?.data && (
                <Chip
                  label={attributes.category.data.attributes.title}
                  size="small"
                  color="primary"
                />
              )}
              {attributes?.createdAt && (
                <Typography
                  component="div"
                  variant="subtitle1"
                  color="text.secondary"
                >
                  {new Date(attributes.createdAt).toLocaleDateString()}
                </Typography>
              )}
            </Box>
            <Box>
              <Typography component="div" variant="h5">
                {attributes.title}
              </Typography>
              <Typography
                component="div"
                variant="subtitle1"
                color="text.secondary"
              >
                {attributes.description}
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  )
}

export { PostsCard }
