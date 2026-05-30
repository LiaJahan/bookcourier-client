import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./routes/Router";
import toast from "react-hot-toast";

toast.success("Working");
function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  );
}

export default App;