import { app } from '../firebaseConfig'
import { doc, getDocs, collection, query, where } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { Badge, Box, Image, SimpleGrid, Grid, GridItem } from '@chakra-ui/react'

import Pokemon from './Pokemon'

const getPokemons = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
  const data = await response.json()
  return data.results
}

const getPokemonByUrl = async url => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const loadPokemons = async pokemons => {
  const pokemonsData = await pokemons.map(async pokemon => {
    return getPokemonByUrl(pokemon.url).then(pokemon => {
      return pokemon
    })
  })
  const data = await Promise.all(pokemonsData)
  // console.log(data)
  return data
}

function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons().then(loadPokemons).then(setPokemons)
  }, [])

  useEffect(() => {
    console.log(pokemons[0])
  }, [])

  return (
    <Box py="16">
      <Grid templateColumns="repeat(1,1fr)" gap={6} maxW="700px" mx="auto">
        {pokemons.map(pokemon => (
          <Pokemon key={pokemon.id} {...pokemon} />
        ))}
      </Grid>
    </Box>
  )
}

export default App
