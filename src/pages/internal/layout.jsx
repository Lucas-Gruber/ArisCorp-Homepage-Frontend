import { ApolloProvider } from '@apollo/client'
import client from 'apollo/clients'
import Footer from 'components/Footer'
import AMSLogo from 'components/icons/AMSLogo'
import Sidebar from 'components/internal/InternalSidebar'
import { AnimatePresence } from 'framer-motion'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { MdOutlineLiveHelp } from 'react-icons/md'
import { motion } from 'framer-motion'

/*
  add the requireAuth property to the page component
  to protect the page from unauthenticated users
  e.g.:
  OrderDetail.requireAuth = true;
  export default OrderDetail;
 */

export const ProtectedLayout = ({ children, changes, helpAction }) => {
  const router = useRouter()
  const { status: sessionStatus, data: sessionData } = useSession()
  const authorized = sessionStatus === 'authenticated'
  const unAuthorized = sessionStatus === 'unauthenticated'
  const loading = sessionStatus === 'loading'
  const pageKey = router.asPath

  useEffect(() => {
    // check if the session is loading or the router is not ready
    if (loading || !router.isReady) return

    // if the user is not authorized, redirect to the login page
    // with a return url to the current page
    if (unAuthorized) {
      console.log('not authorized')
      router.push({
        pathname: '/login',
        query: { callbackUrl: router.asPath },
      })
    }
  }, [loading, unAuthorized, sessionStatus, router])

  // if the user refreshed the page or somehow navigated to the protected page
  if (loading) {
    return <>Loading app...</>
  }

  // if the user is authorized, render the page
  // otherwise, render nothing while the router redirects him to the login page
  // children

  return authorized ? (
    <>
      <div className="flex min-h-screen">
        <Sidebar changes={changes} />
        <div
          className="flex flex-col justify-between flex-1 max-w-full pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] lg:pt-0 lg:pr-0 lg:pl-0"
          style={{ transition: 'left .5s ease,right .5s ease' }}
        >
          <div>
            <div className="flex px-4">
              <div className="w-1/4 -mb-2">
                <AMSLogo />
              </div>
              {helpAction && (
                <div
                  className="relative mt-auto ml-auto group"
                  onClick={helpAction}
                >
                  <motion.div whileTap={{ scale: 0.97 }}>
                    <MdOutlineLiveHelp className="transition-all duration-200 cursor-pointer w-14 h-14 text-white/75 hover:text-white hover:duration-300" />
                  </motion.div>
                  <div className="absolute right-0 justify-center hidden mt-2 text-center w-14 group-hover:flex">
                    Hilfe
                  </div>
                </div>
              )}
            </div>
            <hr className="my-2" />
          </div>
          <main
            className="block w-full px-[15px] mx-auto relative h-full"
            style={{ transition: 'left .5s ease,right .5s ease' }}
          >
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <></>
  )
}

export default ProtectedLayout
