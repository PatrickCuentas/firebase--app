import {
  GridItem,
  Box,
  Badge,
  Image,
  HStack,
  Text,
  VStack,
  Flex,
  createIcon,
} from '@chakra-ui/react'

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const displayStats = (stats) => {
  return stats.map(stat => {
    return (
      <Flex key={stat.stat.name} justifyContent="center" alignItems="center">
        <Text fontSize="sm">{capitalize(stat.stat.name)}</Text>
        <Badge>{stat.base_stat}</Badge>
      </Flex>
    )
  })
}

export const UpDownIcon = createIcon({
  displayName: 'UpDownIcon',
  viewBox: '0 0 200 200',
  d: 'M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0',
})

const Pokemon = pokemon => {
  const { stats } = pokemon

  return (
    <GridItem w="100%">
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
        <HStack spacing="5rem">
          <Image
            src={pokemon.sprites.other.dream_world.front_default}
            alt={pokemon.name}
            width="300px"
            height="300px"
            ml="1rem"
          />

          <VStack p="6">
            <HStack>
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  New
                </Badge>
              </Box>
              <Box
                mt="1"
                fontSize="lg"
                fontWeight="semibold"
                as="h3"
                lineHeight="tight"
                noOfLines={1}
              >
                {capitalize(pokemon.name)}
              </Box>
            </HStack>
            <VStack>{displayStats(stats)}</VStack>
          </VStack>
        </HStack>
      </Box>
    </GridItem>
  )
}

export default Pokemon
