import { Navigate, Route, Routes } from "react-router-dom"
import Layouts from "./layouts/Layouts.tsx";
import HomePage from "./pages/HomePage.tsx"
import AuthCallbackPage from "./pages/AuthCallbackPage.tsx";
import UserProfilePage from "./pages/UserProfilePage.tsx";
import ProtectedRoute from "./auth/ProtectedRoute.tsx";
import ManageRestaurantPage from "./pages/ManageRestaurantPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import DetailPage from "./pages/DetailPage.tsx";


const AppRoutes = () => {
    return (
      <Routes>
        <Route
          path="/"
          element={
            <Layouts showHero={true}>
              <HomePage />
            </Layouts>
          }
        />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route
          path="/search/:city"
          element={
            <Layouts showHero={false}>
              <SearchPage />
            </Layouts>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/user-profile"
            element={
              <Layouts>
                <UserProfilePage />
              </Layouts>
            }
          />
          <Route
            path="/manage-restaurant"
            element={
              <Layouts>
                <ManageRestaurantPage />
              </Layouts>
            }
          />
          <Route
            path="/detail/:restaurantId"
            element={
              <Layouts showHero={false}>
                <DetailPage />
              </Layouts>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    );
}

export default AppRoutes