import Link from 'next/link'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import axios from 'axios'
import { differenceInDays } from 'date-fns'
import NextRace from '@/components/next-race'
import { RacesSchedule, Race } from '@/types'

export const getServerSideProps = (async () => {
  const { data } = await axios(`https://ergast.com/api/f1/current.json`)
  return { props: { data } }
}) satisfies GetServerSideProps<{ data: RacesSchedule }>

const thirtyYearsFromNow = ['current']
const date = new Date()
const lastYear = date.getFullYear() - 1

for (let i = lastYear; i >= (lastYear - 34); i--) {
  thirtyYearsFromNow.push(i.toString())
}

export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const nextRace = data.MRData.RaceTable.Races.reduce((acc: any, item: Race) => {
    const raceDate = new Date(item.date)
    const diff = differenceInDays(raceDate, date);
    if (diff >= 0) {
      return [
        ...acc,
        item
      ]
    } else {
      return [...acc]
    }
  }, [])[0] as Race;
  return (
    <div className='content'>
      <NextRace nextRace={nextRace} />
      <h2>Classification</h2>
      <p>Select the year bellow to see the entire classification</p>
      <nav>
        <ul>
          {thirtyYearsFromNow.map((item: string) => {
            let url = '/drivers/'
            if (item !== 'current') {
              url += item
            }
            return (
              <li key={item}>
                <Link href={url}>{item !== 'current' ? item : 'This year'}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}
