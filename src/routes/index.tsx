import { Routes as AppRoutes, Route } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Asset } from "../pages/asset";
import { Locations } from "../pages/locations";

export const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<Layout />}>
        <Route path="/locations/:companyId" element={<Locations />}>
          <Route path="assets/:assetId" element={<Asset />} />
        </Route>
      </Route>
    </AppRoutes>
  );
};
