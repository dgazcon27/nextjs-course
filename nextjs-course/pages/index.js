import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [greetings, setGreet] = useState("Daniel")

  const changeGreet = () => {
    setGreet("Danielito")
  }
  return (
    <>
      <h1>hello next {greetings}</h1>
      <button onClick={changeGreet}>Change you name</button>
    </>
  )
}
