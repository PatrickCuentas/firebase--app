import {
  query,
  where,
  collection,
  doc,
  setDoc,
  getDocs,
} from 'firebase/firestore'
import { app, db } from '../firebaseConfig'
import { useEffect, useState } from 'react'

interface City {
  id: string
  capital: string
  country: string
  name: string
  population: number
  regions: string[]
  state?: string
}

const getCitiesFromDatabase = async () => {
  const citiesRef = collection(db, 'cities')
  const q = query(citiesRef, where('population', '>', 100000))
  const cities = await getDocs(q)
  const querySnapshot = cities.docs.map((doc: any) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })
  return querySnapshot
}

const Cities = () => {
  const [cities, setCities] = useState<City[]>([])

  useEffect(() => {
    getCitiesFromDatabase().then(setCities)
  }, [])

  return (
    <div>
      {cities.map((city: City) => {
        return (
          <div key={city.id}>
            <h1>{city.name}</h1>
            <p>{city.capital}</p>
            <p>{city.country}</p>
            <p>{city.population}</p>
            <p>{city.state}</p>
            <p>{city.regions.join(', ')}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Cities
