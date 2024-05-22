import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import axios from 'axios'
import DriversList from '@/components/drivers-list'
import { Drivers } from '@/types'

export const getServerSideProps = (async context => {
  const { data } = await axios(`http://ergast.com/api/f1/${context.query.slug}/drivers.json?limit=50`)
  return { props: { data } }
}) satisfies GetServerSideProps<{ data: Drivers }>

export default function DriversPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return(
    <main>
      <h1>F1 {data.MRData.DriverTable.season} drivers</h1>
      <DriversList drivers={data.MRData.DriverTable.Drivers} />
    </main>
  )
}
