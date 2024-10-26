import { Outlet, useNavigate, useParams } from "react-router-dom";
import {
  ButtonContainer,
  LayoutBody,
  LayoutContainer,
  LayoutHeader,
} from "./styles";
import { Button } from "../button";
import { Square3Stack3DIcon } from "@heroicons/react/16/solid";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/queryClient";
import { useListCompanies } from "../../services/companies/listCompanies.service";
import { useEffect } from "react";

export const Layout = () => {
  const { data, isLoading } = useListCompanies();
  const navigate = useNavigate();
  const { companyId } = useParams();

  useEffect(() => {
    if (data && !companyId) {
      navigate(`/locations/${data[0].id}`);
    }
  }, [data]);

  return (
    <QueryClientProvider client={queryClient}>
      <LayoutContainer>
        <LayoutHeader>
          <img src="/LOGO-TRACTIAN.svg" alt="logo" />
          <ButtonContainer>
            {data?.map((company) => (
              <Button
                onClick={() => {
                  navigate(`/locations/${company.id}`);
                }}
                icon={<Square3Stack3DIcon width={14} />}
                active={company.id === companyId}
                key={company.id}
              >
                {company.name} Unit
              </Button>
            ))}
          </ButtonContainer>
        </LayoutHeader>
        <LayoutBody>{isLoading ? <h1>LOADING</h1> : <Outlet />}</LayoutBody>
      </LayoutContainer>
    </QueryClientProvider>
  );
};
