import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import SearchAndPreview from '../components/SearchAndPreview'

let obj = {
  url: "https://www.youtube.com/",
  Imgurl: "https://www.youtube.com/img/desktop/yt_1200.png",
  description:"Enjoy the videos and music that you love, upload original content and share it all with friends, family and the world on YouTube.",
  title:"youtube",
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Link preview maker</title>
        <meta name="description" content="this is nextjs application which creates a previes of any link" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav><NavBar /></nav>
      <main>
        <h1 className="text-center text-4xl font-extrabold mb-10 mt-16">
          Link Previewer Maker
        </h1>
        <SearchAndPreview />
      </main>



      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
