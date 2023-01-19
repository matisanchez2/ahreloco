import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [mensaje, setMensaje] = useState("")
  const [resultado, setResultado] = useState("")


  const Galpe = () => {
    let url = ""
    if (resultado === "si") {
      url = "https://fam.bo/wp-content/uploads/2022/03/galperin-1024x683.jpg"
    }
    else if (resultado === "no") {
      url = "https://www.clarin.com/img/2019/03/26/Ng7jC4r07_720x0__1.jpg"
    }
    else {
      url = "https://statics.forbesargentina.com/2021/11/6194258b448c6.jpg"
    }
    return (
      <img width={600} height={600} src={url} alt="" />
    )
  }


  const onClick = (boton: string) => {
    if (boton === "si") {
      setResultado("si")
      setMensaje("VAMOS TE QUIERO")
    }
    else {
      setResultado("no")
      setMensaje("MORITE GATO")
    }
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className='text-4xl '>Me merezco un aumento?</h1>
        <p className='text-xl mt-2 text-white'>{mensaje}</p>
        <div className='flex space-x-3 my-10'>
          <button onClick={() => onClick("si")} className='hover:bg-red-400 bg-red-200 text-white px-4 py-1 text-lg'> si </button>
          <button onClick={() => onClick("no")}  >no</button>
        </div>
        <Galpe />
      </main>
    </>
  )
}
