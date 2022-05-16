import { app } from '../../firebaseConfig'
import { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const registerUserWithEmailAndPassword = async (auth, email, password) => {
  // basic client side auth // firebase sign up functionality
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    console.log(res)
    alert('User created') // add alert for success // add ui functionalities on successful sign up
  } catch (error) {
    console.log(error) // add alert for error
  }
}

const Register = () => {
  const auth = getAuth()
  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
  })

  const { email, password } = inputValues

  const handleChange = e => {
    const { name, value } = e.target
    setInputValues({ ...inputValues, [name]: value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    registerUserWithEmailAndPassword(auth, email, password)
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool{' '}
            <Text as="span" color={'blue.400'}>
              features{' '}
            </Text>{' '}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4} as="form" onSubmit={handleSubmit}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                onChange={handleChange}
                value={email}
                autoComplete="false"
                name="email"
                placeholder="Email"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={handleChange}
                value={password}
                autoComplete="false"
                name="password"
                placeholder="Password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link to="/auth/login">I have an account</Link>
              </Stack>
              <Button
                type="submit"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
              >
                Sign Up
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}

export default Register
