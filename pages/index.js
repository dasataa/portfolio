import { Hero } from '@components/Hero';
import { Projects } from '@components/Projects';
import Head from 'next/head';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Portfolio</title>
        <link
          rel='icon'
          href='https://pngimg.com/uploads/folder/small/folder_PNG8767.png'
        />
      </Head>

      {/* hero */}
      <Hero />

      {/* projects */}
      <Projects />
    </div>
  );
}
