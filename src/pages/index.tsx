import Link from 'next/link'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import axios from 'axios'
import { differenceInDays } from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { RacesSchedule, Race } from '@/types'

export const getServerSideProps = (async () => {
  const { data } = await axios(`https://ergast.com/api/f1/current.json`)
  return { props: { data } }
}) satisfies GetServerSideProps<{ data: RacesSchedule }>

const thirtyYearsFromNow = ['current']
const date = new Date()
const lastYear = date.getFullYear() - 1

for (let i = lastYear; i >= (lastYear - 29); i--) {
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
  const qualifyingDate = new Date(`${nextRace.Qualifying.date} ${nextRace.Qualifying.time}`);
  const raceDate = new Date(`${nextRace.date} ${nextRace.time}`);
  return (
    <>
      <h1>F1</h1>
      <h2>Next race</h2>
      <p>
        <strong>{nextRace.raceName}</strong><br/>
        {nextRace.Circuit.circuitName}<br/>
        Location: {nextRace.Circuit.Location.locality} / {nextRace.Circuit.Location.country}
      </p>
      <ul>
        <li>Qualifying: {formatInTimeZone(qualifyingDate, 'America/Sao_Paulo', 'yyyy-MM-dd HH:mm:ss zzz')}</li>
        <li>Race: {formatInTimeZone(raceDate, 'America/Sao_Paulo', 'yyyy-MM-dd HH:mm:ss zzz')}</li>
      </ul>
      <h2>Drivers</h2>
      <p>Select the year bellow to see the list of drivers</p>
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
    </>
  )
}
