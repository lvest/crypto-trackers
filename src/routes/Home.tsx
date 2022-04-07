import Landing from "../components/Landing";
import Page from "../components/Page";
import Coins from "./Coins";

function Home() {
  return (
    <>
      <Page component={<Landing />}></Page>
      <Page component={<Coins />}></Page>
    </>
  );
}

export default Home;
