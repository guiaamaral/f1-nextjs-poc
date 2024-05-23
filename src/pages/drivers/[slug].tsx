import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import axios from 'axios'
import DriversList from '@/components/drivers-list'
import { Positions } from '@/types'

export const getServerSideProps = (async context => {
  const { data: positions } = await axios(`https://ergast.com/api/f1/${context.query.slug}/driverStandings.json?limit=50`)
  return { props: { positions } }
}) satisfies GetServerSideProps<{ positions: Positions }>

export default function DriversPage({ positions }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return(
    <main className='content'>
      <Link
        className='go-back'
        href={'/'}>
        ❮ Go back
      </Link>
      <h2>F1 {positions.MRData.StandingsTable.StandingsLists[0].season} classification</h2>
      <DriversList
        positions={positions.MRData.StandingsTable.StandingsLists[0].DriverStandings}
      />
    </main>
  )
}
