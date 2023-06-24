'use client'

import style from '@/styles/ScrollToTop.module.css'
import { useState, useEffect } from 'react'
import { BiArrowToTop } from 'react-icons/bi'
import { Button } from '@mantine/core'

/**
 * A button component that is displayed when the user scrolls down the page,
 * and clicking on it scrolls the user back to the top of the page.
 * @returns {JSX.Element} - Rendered `Button` component with the arrow icon.
 */

const ScrollToTop: React.FC = (): JSX.Element => {
  const [showScroll, setShowScroll] = useState<Boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      onClick={scrollTop}
      className={style.scrollToTop}
      sx={{
        display: showScroll ? 'flex' : 'none',
        position: 'fixed',
        borderRadius: '100px',
      }}
      size="md"
      h="30px"
      p={3}
    >
      <BiArrowToTop size={22} />
    </Button>
  )
}

export default ScrollToTop
