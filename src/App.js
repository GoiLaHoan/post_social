import {
    BrowserRouter as Router,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import { Homepage } from "./Homepage/Homepage";
import Login from "./Login/Login";
import "./App.css";
import AuthProvider from "./context/RequiredAuth/authContext";
import RequiredAuth from "./context/RequiredAuth/requiredAuth";

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path={"/"}
                        element={
                            <RequiredAuth>
                                <Homepage />
                            </RequiredAuth>
                        }
                    />
                </Routes>
                <Outlet />
            </Router>
        </AuthProvider>
    );
}

export default App;
