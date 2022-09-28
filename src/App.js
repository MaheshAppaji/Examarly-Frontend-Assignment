import ProgressBar from './components/ProgressBar';
import StatusBar from './components/StatusBar';
import StrengthBar from './components/StrengthBar';
import SubjectName from './components/SubjectName';

import './App.css';

function App() {
  return(
    <>
    <SubjectName/>
    <div>
      <ProgressBar/>
      <StatusBar/>
      <StatusBar/>
    </div>
    <div className="vt-line"></div>
    <StrengthBar/>
    </>
    
  )
  
}

export default App;
