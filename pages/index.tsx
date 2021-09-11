import Head from 'next/head'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'
import { GetStaticProps } from 'next'
import { Stack, Heading, Text, List, ListItem , Link , HStack, VStack} from "@chakra-ui/react";

const Home = ({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <Layout home>
      <Head>
        <title>home</title>
      </Head>
      <Stack spacing={8}>
        <Stack bg="gray.700" color="white" w={900} mr="auto" ml="auto" pb={4}>
          <Heading as="h2" p={4}>About</Heading>
          <Stack>
            <Text pl={4}>所属：豊田工業高等専門学校 情報科学専攻 2年</Text>
            <Text pl={4}>趣味：旅行、キャンプ、TCG、読書</Text>
            <Text pl={4}>興味：音楽、恐竜、プログラミング、経済</Text>
          </Stack>
        </Stack>
      
        <Stack bg="gray.700" color="white" w={900} mr="auto" ml="auto" pb={4}>
          <Heading as="h2" p={4}>Works</Heading>  
            <List pl={4} spacing={8}>
              {allPostsData.map(({ id, date, title }) => (
                <ListItem key={id}>
                  <Link color="teal.500" href={`/posts/${id}`}>
                    <Text>{title}</Text>
                  </Link>
                  <Text as="sub" color="gray.500">
                    <Date dateString={date} />
                  </Text>
                </ListItem>
              ))}
            </List>
        </Stack>
      </Stack>
    </Layout>
  )
}
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
