import { useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { FaRegCommentAlt } from 'react-icons/fa'
import PropTypes from 'prop-types';
const Post = ({ postedBy, title, description, date, likes }) => {
  const [liked, setLiked] = useState()
  const [commented, setCommented] = useState()
  return (
    <div className='flex flex-col items gap-2 p-4 md:w-[30rem] w-full'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center gap-2'>
          <img
            src={postedBy.avatar}
            className='md:h-12 h-8 rounded-full border-2 border-red-500'
            alt='Profile.pic'
          />
          <div>
            <h1 className='font-semibold'>{postedBy.username}</h1>
            <p className='text-sm'>{date}</p>
          </div>
        </div>
        <div className='text-2xl'>
          <ion-icon name='ellipsis-horizontal-outline'></ion-icon>
        </div>
      </div>
      <h1 className='text-sm font-semibold'>{title}</h1>
      <h2 className='text-[12px] text-justify'>{description}</h2>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[10px] text-neutral-800'>Liked By {likes}People</h1>
        <div className='flex gap-4 items-center justify-evenly'>
          <div className='flex items-center justify-center w-full bg-red-200'>
            <button
            onClick={() => {setLiked(prev => !prev)}}
              id='like'
              className={`flex py-2 px-8 w-full items-center justify-center text-2xl gap-2 ${
                liked ? 'text-red-500' : ''
              }`}
            >
              <AiFillLike />
            </button>
          </div>
          <div className='flex items-center justify-center w-full bg-red-200'>
            <button
            onClick={() => {setCommented(prev => !prev)}}
              id='comment'
              className={`flex items-center py-2 px-8 w-full justify-center text-2xl gap-2 ${
                commented ? 'text-red-500' : ''
              }`}
            >
              <FaRegCommentAlt />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
Post.propTypes = {
  postedBy: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  }).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
}
export default Post

