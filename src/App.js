import "./styles.css";

import Feed from "./components/Feed";
import NewsFeed from "./components/NewsFeed";

function App() {
  return (
    <div className="layout">
      <NewsFeed>
        <Feed
          title="Tesla Shanghai Capacity Will Exceed 1 Million Cars In 2022, BYD Blade Batteries Coming"
          link="https://cleantechnica.com/2022/02/14/tesla-shanghai-capacity-will-exceed-1-million-cars-in-2022-byd-blade-batteries-coming/"
          creator="Steve Hanley"
          img="https://cleantechnica.com/files/2021/10/Tesla-China-Sales-e1642076454693.jpeg"
          desc="According to reports from CnEVPost , the manufacturing capacity of the Tesla Gigafactory in Shanghai is expected to increase to more than 1 million cars a year in the near"
        />

        <Feed
          title="Elon Musk asegura que la 'verdadera' deuda de EU es de al menos 60 billones de dólares"
          link="https://www.milenio.com/negocios/elon-musk-deuda-eu-60-billones-dolares"
          creator="Milenio Digital"
          img="https://images.milenio.com/rEKBz9gvm8RL-BRlZBe7Eajux40=/942x532/uploads/media/2022/02/13/elon-musk-estimo-deuda-unidos.jpeg"
          desc="El director ejecutivo de Tesla y SpaceX, Elon Musk, estimó que la deuda de Estados Unidos en tres veces mayor a su economía. ?La verdadera deuda nacional, incluidos los..."
        />
        <Feed
          title="Tesla recall for heater and defroster systems issued by Transport Canada"
          link="https://www.teslarati.com/tesla-recall-heater-defroster-system-transport-canada/"
          creator="Maria Merano"
          img="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/M3AGBXFXZJN4XBRAGW5B64T6KI.jpg"
          desc="According to reports from CnEVPost , the manufacturing capacity of the Tesla Gigafactory in Shanghai is expected to increase to more than 1 million cars a year in the near"
        />
      </NewsFeed>
    </div>
  );
}
export default App;
