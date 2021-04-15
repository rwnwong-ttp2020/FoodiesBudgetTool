
//import BudgetInterface from "../src/UserStory1/budgetInterface";  // Change:   budgetInterface --> BudgetInterface
import LoginModule from "../src/components/LoginModule_JL/LoginModule";

//import MapModule from "../src/components/Map_JL/MapModule";
import APP_BM from "../src/components/HomePage_BM/App_BM";
import HeroSection from "./components/HomePage_BM/HeroSection";
import CalBudget from "../src/components/Calculator/CalBudget";
function App() {
  return (
    <div>

      <APP_BM />
      <CalBudget/>

    </div>
  );
}

export default App;
