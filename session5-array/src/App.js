
import FilterData from './Components/FilterData';
import ListDisplay from './Components/ListDisplay';

import SortingData from "./Components/SortingData";


function App() {
  return (
    <div className="container">
      <h3 className='mt-3 text-center p-2 text-bg-warning'>Data Components in app JS</h3>
      <ListDisplay />
      <FilterData />
      <SortingData />
    </div>
  );
}

export default App;
