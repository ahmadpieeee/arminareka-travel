import { STRAPI_URL, STRAPI_TOKEN } from './constants'
import { StatusMessages, commonError, statusMessages } from './messages'
import qs from 'qs'

export async function getAboutData(populate = 'deep') {
  const query = qs.stringify(
    {
      populate: populate,
    },
    {
      encodeValuesOnly: true, // prettify URL
    },
  )

  const res = await fetch(`${STRAPI_URL}/about-arm?${query}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
    next: { tags: ['about'], revalidate: 5 },
  })

  if (!res.ok) {
    const errorStatus = res.status
    const errorMessage =
      (statusMessages as StatusMessages)[errorStatus] || commonError
    throw new Error(errorMessage)
  } else {
    return res.json()
  }
}
