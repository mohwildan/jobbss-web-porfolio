import { Center, Spinner } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import React from 'react'

const Loding = ({children}) => {

    const {status} = useSession()
    if(status === "loading") {
        return(
            <Center h="100vh">
                <Spinner size="xl"/>
            </Center>
        )
    }
  return (
    <>
    {children}
    </>
  )
}

export default Loding