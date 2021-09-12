import Head from 'next/head'
import { Link ,Image, Text, HStack, VStack, Box, Center } from "@chakra-ui/react";

const name = 'Kambe Norihito'
export const siteTitle = 'home'

export default function Layout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="This is a portfolio site of Norihito Kambe using Nextjs and chakura UI."
        />
      </Head>
        <Center h="100%" p={10}>
          {home ? (
            <>
            <VStack>
              <Image
                borderRadius="full"
                boxSize={{ base: "150px", md: "200px" }}
                src="/images/profile.jpg"
                alt={name}
              />
              <HStack >
                <Text as="cite" fontSize={{ base: "2xl", md: "5xl" }}>{name}</Text>
                <Link href="https://www.facebook.com/profile.php?id=100012667274761" isExternal>
                  <Image
                    boxSize="36px"
                    src="/images/f_logo_RGB-Black_58.png"
                    alt="facebook"
                    />
                </Link>
              </HStack>
            </VStack>
            </>
          ) : (
            <>
            <VStack>
              <Link href="/">
                  <Image
                    borderRadius="full"
                    boxSize="100px"
                    src="/images/profile.jpg"
                    alt={name}
                  />
              </Link>
                <Link href="/">
                  <Text as="cite" fontSize="3xl">{name}</Text>
                </Link>
            </VStack>
            </>
          )}
        </Center>
      <main>{children}</main>
 
      {!home && (
        <Box py="12">
          <Link color="teal.500" href="/">
            <Text fontSize="2xl" pb={10}>← Back to home</Text>
          </Link>
        </Box>
      )}

      <Box as="footer" role="contentinfo" py="12" px={{ base: '4', md: '8' }}/>
      
    </div>
  )
}