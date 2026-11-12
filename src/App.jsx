import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import FormPage from "./pages/FormPage";
import ResultPage from "./pages/ResultPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <FormPage/>
    },
    {
        path: "/result",
        element: <ResultPage/>
    }
])

export default function App() {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
}
