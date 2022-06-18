import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

import React from 'react'

const ConstumeLink = ({ChakraComponents, href, children, ...props}) => {
  return (
      <NextLink href={href} passHref>
         <Link>
         <ChakraComponents {...props}>
             {children}
         </ChakraComponents>
         </Link> 
      </NextLink>
  )
}

export default ConstumeLink