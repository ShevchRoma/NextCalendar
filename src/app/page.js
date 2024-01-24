import { notFound } from 'next/navigation';
import styles from './page.module.css'
import EventBlock from './components/EventBlock/EventBlock';




export default async function Home({ }) {

  const events = await getData();

  async function getData() {
    const res = await fetch("http://localhost:3000/api/get", { cache: "no-store" });
    if (!res.ok) return notFound()
    return res.json()
  }

  const hours = ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', "11:30", '12:00', '12:30', '01:00', '01:30', '02:00', '02:30', '03:00', '03:30', '04:00', '04:30']

  const cells = ['0', '30', '60', '90', '120', '150', '180', '210', '240', '270', '300', '330', '360', '390', '420', '450', '480', '510'].map((v, i) => {
    let temp = []
    events.forEach(event => {
      if (event.start === v) {
        temp.push(event)
      }
    })
    return temp
  })

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.calendar}>
          <div className={styles.column}>
            {cells.map((events, i) => (
              <div style={{ display: 'flex' }}>
                <div className={styles.columnBlock}>
                  <div className={styles.time}>
                    <div className={i % 2 !== 0 ? styles.secondTime : styles.mainTime}>{hours[i]}</div>
                  </div>
                </div>
                <div className={styles.columnBlock}>
                  <div className={styles.eventBlock}>
                    {events.map(ev => (
                      <EventBlock id={ev._id} title={ev.title} height={ev.duration} key={ev.id} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
