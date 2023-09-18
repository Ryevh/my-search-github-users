import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </AuthWrapper>
  );
}

export default App;

// ..............................
// ALTERNATIVE SYNTAX WAY TO SETUP ROUTES
// ..............................
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <PrivateRoute>
//         <Dashboard />
//       </PrivateRoute>
//     ),
//   },
//   {
//     path: "login",
//     element: <Login />,
//   },
//   {
//     path: "*",
//     element: <Error />,
//   },
// ]);

// const App = () => {
//   return (
//     <AuthWrapper>
//       <RouterProvider router={router} />;
//     </AuthWrapper>
//   );
// };

// export default App;
