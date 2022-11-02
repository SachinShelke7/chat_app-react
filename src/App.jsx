import Navbar from "./components/Navbar";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Chat from "./components/Chat";

const style = {
  parentContainer: `bg-zinc-800`,
  appContainer: `max-w-md mx-auto text-center shadow-2xl shadow-zinc-300`,
  sectionContainer: `flex flex-col h-screen bg-gray-100 shadow-xl border relative`,
};
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={style.parentContainer}>
      <div className={style.appContainer}>
        <section className={style.sectionContainer}>
          {/* nav */}
          <Navbar />
          {/* chat component */}
          {user ? <Chat /> : null}
        </section>
      </div>
    </div>
  );
}

export default App;
