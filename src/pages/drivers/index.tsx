import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import axios from 'axios'
import DriversList from '@/components/drivers-list'
import { Positions } from '@/types'

export const getServerSideProps = (async () => {
  const { data: positions } = await axios(`https://ergast.com/api/f1/current/driverStandings.json?limit=50`)
  return { props: { positions } }
}) satisfies GetServerSideProps<{ positions: Positions }>

export default function DriversPage({ positions }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return(
    <main className='content'>
      <Link
        className='go-back'
        href={'/'}>
        ❮ Voltar
      </Link>
      <h2>F1 {positions.MRData.StandingsTable.StandingsLists[0].season} actual classification</h2>
      <DriversList
        positions={positions.MRData.StandingsTable.StandingsLists[0].DriverStandings}
      />
    </main>
  )
}
