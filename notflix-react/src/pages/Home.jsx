import Mainpage from '../components/Mainpage'
import Row from '../components/Row'
import requests from '../requests'

const Home = () => {
  return (
    <>
      <Mainpage />
      <Row title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="TopRated" fetchURL={requests.requestTopRated} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
    </>
  )
}

export default Home