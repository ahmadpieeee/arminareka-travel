'use client'

import { useGetAboutDataQuery } from '@/store/slices/about-us'
import AppContainer from '@/components/layout/AppContainer'
import AppPaper from '@/components/data-display/Miscellaneous/AppPaper'
import AppText from '@/components/data-display/typography/AppText'
import AppMarkDown from '@/components/data-display/typography/AppMarkDown'

const AboutUsPage: React.FC = () => {
  const { isLoading, error, data } = useGetAboutDataQuery()
  console.log('ABOUT: ', data)
  console.log(error)

  return (
    <AppContainer>
      <AppPaper my="xl">
        <AppText variant="gradient" fw="bold" size={26} ta={'center'}>
          {data?.data?.attributes?.title}
        </AppText>
        <AppMarkDown markdown={data?.data?.attributes?.content} />
      </AppPaper>
    </AppContainer>
  )
}

export default AboutUsPage
