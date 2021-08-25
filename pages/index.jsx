import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '../src/components/Header'
import styled from '@emotion/styled'
import { useState } from 'react'
import Sidebar from '../src/components/Sidebar'

const Wrapper = styled.div`
  display: flex;

  width: 100%;
`

const Home = () => {
  const [actualLocation, setActualLocation] = useState(null)
  
  const Map = dynamic(
    () => import('../src/components/Map'),
    {
        // eslint-disable-next-line react/display-name
        loading: () => <p>A map is loading</p>,
        ssr: false
    }
  )

  return (
    <Wrapper>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map actualLocation={actualLocation}/>
      <Sidebar setActualLocation={setActualLocation}/>
    </Wrapper>
  )
}

export default Home
