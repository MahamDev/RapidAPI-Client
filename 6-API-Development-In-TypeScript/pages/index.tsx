import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export interface RootObject {
  author: string;
  category: string;
  id: number;
  text: string;
}

const Home: NextPage = () => {
  async function getResponse() {
    try {
      const response = await fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=2", {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '19f6d070d4msh76af06e0a034039p16393ajsn6740f60e85e9',
          'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
        }
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
      }
    } catch (err) {
      console.error(err);
    }

  }

  return (
    <div className={styles.container}>
      <button onClick={getResponse}>
        Click Me!
      </button>
    </div>
  )
}

export default Home
