import React from 'react'

const SetOutput = ({set,number}) => {
  return (
    <div className='box output' ><h4 className='text'>{number}{')'}</h4><h4 className='text'>{`{${set}}`}</h4></div>
  )
}

export default SetOutput