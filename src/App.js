import "./App.css";
import Item from "./components/Item";
import Header from "./components/Header";
import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarentee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        />

        <Item
          title="Model S"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />


<Item
          title="Model 3"
          desc="$69,420"
          descLink=""
          backgroundImg={Model3}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />


<Item
          title="Model X"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelX}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />


<Item
          title="Model Y"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelY}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />

<Item
          title="Solar for New Roof"
          desc="$69,420"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        />


<Item
          title="Accessories"
          desc="$69,420"
          descLink=""
          backgroundImg={Accessories}
          leftBtnText="SHOP NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""

        />
      </div>
    </div>
  );
}

export default App;
