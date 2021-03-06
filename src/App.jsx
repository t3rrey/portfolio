import { useState, useContext, useEffect } from "react";
import Taskbar from "./components/Taskbar/Taskbar";
import WeatherApp from "./components/WeatherApp/WeatherApp";
import "./styles/App.css";
import StickyNote from "./components/StickyNotesApp/StickyNote.jsx";
import NewPDF from "./components/PDFViewer/NewPDF";
import Dropzone from "./components/PDFViewer/Dropzone";
import Window from "./components/Window";
import Calculator from "./components/Calculator";
import Context from "./context/OpenApplicationsContext";
import applications from "./lib";
import MyEditor from "./components/Editor";
function App() {
  const { openApplications, setOpenApplications } = useContext(Context);
  const [pdf, setPdf] = useState();

  useEffect(() => {
    console.log("UseEffect", openApplications);

    console.log("io", openApplications.indexOf("stickyNotes"));
  }, [openApplications]);
  return (
    <div className="App">
      {openApplications.includes(applications["stickyNotes"]) && <StickyNote />}

      {openApplications.includes(applications["calculator"]) && (
        <Window component={<Calculator />} height={500} width={300} />
      )}

      {openApplications.includes(applications["weather"]) && (
        <Window component={<WeatherApp />} height={500} width={700} />
      )}
      {pdf && <NewPDF pdf={pdf} />}
      <Dropzone onDrop={setPdf} />
      <Taskbar
        openedApps={openApplications}
        setOpenedApps={setOpenApplications}
      />
    </div>
  );
}

export default App;
