import Layout from './layout'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import client from 'apollo/clients'
import { GET_VERSEEXKURS_FIRMEN_DIENSTLEISTER } from 'graphql/queries'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import CardDisplay from 'components/VerseExkursCardDisplay'
import Link from 'next/link'
import Head from 'next/head'

export async function getServerSideProps () {
  const { data } = await client.query({
    query: GET_VERSEEXKURS_FIRMEN_DIENSTLEISTER,
  })

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: await data.firmen,
    },
  }
}

export default function Dienstleister ({ data }) {

  const siteTitle = "Dienstleister - Astro Research and Industrial Service Corporation"
  return (
    <div className="items-center max-w-6xl pt-10 mx-auto">
      <Head>
        <title>
          {siteTitle}
        </title>

        <meta
          property="twitter:title"
          content={siteTitle}
        />
        <meta
          property="og:title"
          content={siteTitle}
        />
        <meta
          name="title"
          content={siteTitle}
        />
      </Head>
      <div className="flex flex-wrap">
        <div className="mx-auto text-primary">
          <h1 className="text-base uppercase text-primary sm:text-lg md:text-xl lg:text-3xl text-inherit">
            Dienstleister
          </h1>
        </div>
        <hr />
        <div className="flex px-4 space-x-4">
          <Link legacyBehavior href={'/VerseExkurs/hersteller'}>
            <a>
              <p>Hersteller,</p>
            </a>
          </Link>
          <Link legacyBehavior href={'/VerseExkurs/geschafte'}>
            <a>
              <p>Geschäfte,</p>
            </a>
          </Link>
          <Link legacyBehavior href={'/VerseExkurs/organisationen'}>
            <a>
              <p>Organisationen,</p>
            </a>
          </Link>
          <Link legacyBehavior href={'/VerseExkurs/verschiedene'}>
            <a>
              <p>Verschiedene</p>
            </a>
          </Link>
        </div>
      </div>
      <div className="grid justify-between grid-cols-4 gap-x-10 gap-y-8">
        {data.map((data) => (
          <>
            <CardDisplay image={data.firmen_trans_logo.id} link={'/VerseExkurs/firmen/' + data.firmen_name} alt={data.firmen_name} />
          </>
        ))}
      </div>
    </div>
  )
}

Dienstleister.getLayout = function getLayout (page) {
  return <Layout>{page}</Layout>
}
