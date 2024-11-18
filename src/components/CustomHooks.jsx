import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

function CustomHooks() {

  const [name, setName] = useLocalStorage('username', '')
  const [id, setId] = useLocalStorage('id', '')

  return (
    <>
    <input type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
    <h2>Hello, {name}!</h2>
    <input type="text" placeholder='Enter your id' value={id} onChange={(e) => setId(e.target.value)} />
    <h2>Hello {name} your ID is, {id}!</h2>
    </>
  )
}

export default CustomHooks;