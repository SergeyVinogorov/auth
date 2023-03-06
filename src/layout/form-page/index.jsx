import React, { useContext, useEffect } from 'react'

import { StoreContext } from 'context'
import { BaseLayout } from 'layout'
import { ErrorBoundary } from 'view'

export const FormPage = ({ children, isMounted }) => {
  const { loading } = useContext(StoreContext)

  useEffect(() => {
    if (loading && isMounted()) {
      const firstAnimate = document.querySelector('#first-animate')
      const secondAnimate = document.querySelector('#second-animate')
      if (firstAnimate && secondAnimate) {
        firstAnimate.setAttribute('begin', '0s')
        secondAnimate.setAttribute('begin', '0s')
      }
    }
  }, [loading])

  return (
    <ErrorBoundary>
      <BaseLayout>
        {children}
      </BaseLayout>
    </ErrorBoundary>
  )
}
