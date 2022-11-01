import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  sectionContainer: `flex flex-col h-[90vh] bg-gray-100 shadow-xl mt-10 border relative`,
};
function App() {
  const [user] = useAuthState(auth);
  // console.log(user);
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
        {/* nav */}
        <Navbar />
        {/* chat component */}
        <Chat />
      </section>
    </div>
  );
}

export default App;
