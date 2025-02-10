import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { people, hiredPeople} = props
  
  //const {people} = props
  // const [people, setPeople] = useState([])
  //console.log(...people)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople}/>
      </section>
    </main>
  )
}

export default Dashboard

/*
 return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
*/
