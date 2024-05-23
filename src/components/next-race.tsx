import { Race } from "@/types"
import { formatInTimeZone } from 'date-fns-tz'

export default function NextRace(props: {
  nextRace: Race,
}) {
  const qualifyingDate = new Date(`${props.nextRace.Qualifying.date} ${props.nextRace.Qualifying.time}`);
  const raceDate = new Date(`${props.nextRace.date} ${props.nextRace.time}`);
  return(
    <>
      <h2>Next race</h2>
      <p>
        <strong>{props.nextRace.raceName}</strong><br/>
        {props.nextRace.Circuit.circuitName}<br/>
        Location: {props.nextRace.Circuit.Location.locality} / {props.nextRace.Circuit.Location.country}
      </p>
      <ul>
        <li>Qualifying: {formatInTimeZone(qualifyingDate, 'America/Sao_Paulo', 'yyyy-MM-dd HH:mm:ss zzz')}</li>
        <li>Race: {formatInTimeZone(raceDate, 'America/Sao_Paulo', 'yyyy-MM-dd HH:mm:ss zzz')}</li>
      </ul>
    </>
  )
}
