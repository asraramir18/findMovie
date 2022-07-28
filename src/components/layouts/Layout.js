import ResponsiveAppBar from './navbar/navbar'
import PageWrapper from './pageWrapper/pageWrapper'

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      <PageWrapper>
        <main>{children}</main>
      </PageWrapper>
      {/* <Footer /> */}
    </>
  )
}

export default Layout