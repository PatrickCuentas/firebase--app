import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import Pokemons from "../pokemon/Pokemons.jsx"
const Dashboard = () => {

  // updatePassword(user,newPassword).then(()=> {
  //   console.log('password updated')
  // })

  return (
    <Box> 
      <Pokemons />
    </Box>
  )
}

export default Dashboard
