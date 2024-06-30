// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
//import Snowfall from 'react-snowfall'

export function Providers({ children = React.ReactNode}) {
  return (
    <CacheProvider>
      <ChakraProvider>
        {/*<Snowfall snowflakeCount={39} style={{zIndex:"10"}}/>*/}
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
