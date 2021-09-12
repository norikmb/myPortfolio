import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import { GetStaticProps, GetStaticPaths } from 'next'
import { Heading, Text, Divider, Stack, Tag, HStack } from "@chakra-ui/react";

const tagname= "日記";
export default function Post({
  postData
}: {
  postData: {
    title: string
    date: string
    tag: string
    contentHtml: string
  }
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
      <Stack pl={4}>
        <Heading as = "h1">{postData.title}</Heading>
        <Text color="gray.500">
          <Date dateString={postData.date} />
        </Text>
        <HStack>
      　  <Tag>{postData.tag}</Tag>
        </HStack>
      
      <Divider/>
        <Text pl={8}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Text>
      </Stack>
      </article>
      <Divider p={4}/>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}