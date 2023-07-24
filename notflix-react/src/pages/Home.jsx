import Mainpage from '../components/Mainpage'
import Row from '../components/Row'
import requests from '../requests'

const Home = () => {
  return (
    <>
      <Mainpage />
      <Row rowID='1' title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID='2' title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID='3' title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID='4' title="Popular" fetchURL={requests.requestPopular} />
    </>
  )
}

export default Home