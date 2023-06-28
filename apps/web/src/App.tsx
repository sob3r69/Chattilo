import ChatsField from './components/ChatsField';
import SideBar from './components/SideBar';

function App() {
  return (
    <div>
      <div className="flex flex-row h-screen w-screen">
        <SideBar />
        <ChatsField />
      </div>
    </div>
  );
}
export default App;
