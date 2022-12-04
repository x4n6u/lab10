import Header from './Header.js';
import WorkExperienceCard from './WorkExperienceCard.js';
import EducationCard from './EducationCard.js';
import TechnologySummaryCard from './TechnologySummaryCard.js';
import './App.css';

function App() {
  return (
    <div classNameName="App">
        <Header />
    <main className="container">
        <div className="row mt-3">
            <WorkExperienceCard />
            <EducationCard />
            <TechnologySummaryCard/>
        </div>
        
    </main>
    
    </div>
  );
}

export default App;
