import {
  BoltIcon,
  InformationCircleIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { TreeView } from "../../components/treeView";
import { Typography } from "../../components/typography";
import { useListAssetsPerCompany } from "../../services/assets/listAssetsPerCompany.service";
import { Company } from "../../services/companies/listCompanies.service";
import { useListLocationsPerCompany } from "../../services/locations/listLocationsPerCompany.service";
import { queryClient } from "../../services/queryClient";
import { defaultTheme } from "../../styles/themes/default";
import {
  LocationBreadcrumb,
  LocationContent,
  LocationHeader,
  LocationsContentContainer,
  LocationsTreeViewContainer,
  LocationsTreeViewFullBox,
  ButtonsHeader,
  Icon,
  RootContainer,
} from "./styles";

export const Locations = () => {
  const { companyId } = useParams();
  const [treeViewSearch, setTreeViewSearch] = useState("");
  const companies: Company[] | undefined =
    queryClient.getQueryData("companies");
  const locations = useListLocationsPerCompany({ companyId });
  const assets = useListAssetsPerCompany({ companyId });
  const [filters, setFilters] = useState<{
    energy: boolean;
    critical: boolean;
  }>({
    energy: false,
    critical: false,
  });

  return (
    <RootContainer>
      <LocationHeader>
        <LocationBreadcrumb>
          <Typography variant="head" size="medium" bold>
            Ativos
          </Typography>
          /
          <Typography variant="content" size="small" style={{ opacity: 0.6 }}>
            {companies?.find((company) => company.id === companyId)?.name}
          </Typography>
        </LocationBreadcrumb>
        <ButtonsHeader>
          <Button
            onClick={() => {
              setFilters({ ...filters, energy: !filters.energy });
            }}
            active={filters.energy}
            size="medium"
            variant="secondary"
            icon={
              <BoltIcon
                width={20}
                color={
                  filters.energy
                    ? defaultTheme.colors.light
                    : defaultTheme.colors.secondary
                }
              />
            }
          >
            Sensor de Energia
          </Button>
          <Button
            onClick={() => {
              setFilters({ ...filters, critical: !filters.critical });
            }}
            active={filters.critical}
            size="medium"
            variant="secondary"
            icon={
              <InformationCircleIcon
                width={20}
                color={
                  filters.critical
                    ? defaultTheme.colors.light
                    : defaultTheme.colors.secondary
                }
              />
            }
          >
            Crítico
          </Button>
        </ButtonsHeader>
      </LocationHeader>
      <LocationsContentContainer>
        <LocationsTreeViewFullBox>
          <Input
            value={treeViewSearch}
            onChange={(e) => setTreeViewSearch(e.target.value)}
            addonAfter={<MagnifyingGlassIcon width={16} />}
            placeholder="Buscar Ativo ou Local"
          />
          <LocationsTreeViewContainer>
            <TreeView
              assets={assets.data}
              locations={locations.data}
              search={treeViewSearch}
              filters={filters}
            />
          </LocationsTreeViewContainer>
        </LocationsTreeViewFullBox>
        <LocationContent>
          <Outlet />
        </LocationContent>
      </LocationsContentContainer>
    </RootContainer>
  );
};
