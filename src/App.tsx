import Moonner from "./Moonner";
import style from './App.module.scss'

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <Moonner />
    </div>
  );
};

export default App;