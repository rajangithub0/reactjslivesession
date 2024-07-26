
import './App.css';

function App() {
  const Card=()=>{
    return(
        <div className="card">
            <img src="https://c8.alamy.com/comp/DG58CD/soccer-sport-grass-playground-football-field-or-pitch-or-stadium-top-DG58CD.jpg" alt="image" />
            <div className="Card-body">
                <h2>Football ground</h2>
                <p>A football ground, also known as a soccer stadium, is a venue designed for playing and watching football matches. It typically features a pitch with natural grass or artificial turf, surrounded by seating areas for spectators. Key components include goals at each end, stands or bleachers, dugouts for team staff, and facilities like locker rooms and restrooms. Famous football grounds like Wembley Stadium, Camp Nou, and Maracanã Stadium host significant events and matches. The atmosphere at a football ground is electrifying, with passionate fans cheering for their teams, creating an unforgettable experience for everyone present.</p>
                <h4>Author Name:Rajan</h4>
            </div>
        </div>
    )
}
  return (
      <div className="App">
            <div className="Header">
                <h1>React Card Components</h1>
            </div>
            <div className="cards">
                <Card />
            </div>
        </div>
  );
}

export default App;
