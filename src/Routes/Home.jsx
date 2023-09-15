
import Card from '../Components/Card'
import { useRecipeStates } from '../Components/utils/global.context'


const Home = () => {
  const {state} = useRecipeStates()
  const {dentists} = state

  return (
    <main className="" >
      
      <div className='card-grid' >
        
          {dentists.length ? dentists.map(dentist =>(<Card key={dentist.id} dentist={dentist}/> )): null}
      </div>
    </main>
  )
}

export default Home