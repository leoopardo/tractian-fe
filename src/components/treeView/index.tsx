import { BoltIcon } from "@heroicons/react/20/solid";
import {
  ChevronDownIcon,
  CubeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useDebounce from "../../hooks/useDebounce";
import { Asset } from "../../services/assets/listAssetsPerCompany.service";
import { Location } from "../../services/locations/listLocationsPerCompany.service";
import { defaultTheme } from "../../styles/themes/default";
import { LocationList, LocationListLabel } from "./styles";

interface TreeViewProps {
  locations?: Location[] | null;
  assets?: Asset[] | null;
  search?: string;
  filters?: {
    energy: boolean;
    critical: boolean;
  };
}

export const TreeView = ({
  assets,
  locations,
  search,
  filters,
}: TreeViewProps) => {
  const [openTrees, setOpenTrees] = useState<string[]>([]);
  const { assetId } = useParams();
  const navigate = useNavigate();
  const [filteredItems, setFilteredItems] = useState<any[]>();
  const [searchValue, setSearchValue] = useState("");

  const debouncedSearch = useDebounce((value) => {
    setSearchValue(value);
  }, 1000);

  useEffect(() => {
    debouncedSearch(search);
  }, [search]);

  useEffect(() => {
    let combinedItems = [
      ...(assets?.map((asset) => ({
        ...asset,
        parentId: asset.locationId,
      })) || []),
      ...(locations || []),
    ];

    const findParentIds = (itemId: string, items: any[]): string[] => {
      const parentIds: string[] = [];
      let currentParentId = items.find((item) => item.id === itemId)?.parentId;

      while (currentParentId) {
        parentIds.push(currentParentId);
        currentParentId = items.find(
          (item) => item.id === currentParentId
        )?.parentId;
      }

      return parentIds;
    };

    const matchingItems = new Set<string>();

    if (filters?.energy && filters?.critical) {
      combinedItems.forEach((item: any) => {
        if (item.sensorType === "energy" && item.status === "alert") {
          matchingItems.add(item.id);
          findParentIds(item.id, combinedItems).forEach((parentId) =>
            matchingItems.add(parentId)
          );
        }
      });
    } else if (filters?.energy) {
      combinedItems.forEach((item: any) => {
        if (item.sensorType === "energy") {
          matchingItems.add(item.id);
          findParentIds(item.id, combinedItems).forEach((parentId) =>
            matchingItems.add(parentId)
          );
        }
      });
    } else if (filters?.critical) {
      combinedItems.forEach((item: any) => {
        if (item.status === "alert") {
          matchingItems.add(item.id);
          findParentIds(item.id, combinedItems).forEach((parentId) =>
            matchingItems.add(parentId)
          );
        }
      });
    }

    let itemsToShow = combinedItems;
    if (matchingItems.size > 0) {
      itemsToShow = combinedItems.filter((item: any) =>
        matchingItems.has(item.id)
      );
    }

    if (searchValue) {
      const lowerCaseSearch = searchValue.toLowerCase();

      const searchMatchingItems = combinedItems.filter((item) =>
        item?.name?.toLowerCase().includes(lowerCaseSearch)
      );

      const searchParentIdsToShow = new Set<string>();
      searchMatchingItems.forEach((item: any) => {
        findParentIds(item.id, combinedItems).forEach((parentId) =>
          searchParentIdsToShow.add(parentId)
        );
      });

      itemsToShow = combinedItems.filter(
        (item: any) =>
          searchMatchingItems.includes(item) ||
          searchParentIdsToShow.has(item.id)
      );

      setOpenTrees([...searchParentIdsToShow]);
    } else {
      setOpenTrees(Array.from(matchingItems));
    }

    setFilteredItems(itemsToShow);
  }, [assets, locations, searchValue, filters]);

  const toggleTree = (id: string) => {
    setOpenTrees((prev) =>
      prev.includes(id) ? prev.filter((treeId) => treeId !== id) : [...prev, id]
    );
  };

  const renderTree = (
    items?: any[],
    parentId: string | null = null,
    level = 0
  ) => {
    return items
      ?.filter((item) => item.parentId === parentId)
      ?.sort((a, b) => (a.name > b.name ? 1 : -1))
      ?.map((item) => {
        const isOpen = openTrees.includes(item.id);
        const hasChildren = items.some((child) => child.parentId === item.id);
        const Icon = item.sensorType ? CubeIcon : MapPinIcon;

        return (
          <LocationList
            key={item.id}
            open={isOpen}
            style={{ marginLeft: level > 2 ? level * 8 : level * 16 }}
          >
            <LocationListLabel
              onClick={() => toggleTree(item.id)}
              active={item.id === assetId}
              onClickCapture={() =>
                !hasChildren && item.sensorType && navigate(`assets/${item.id}`)
              }
            >
              {hasChildren && (
                <ChevronDownIcon
                  width={12}
                  style={{
                    transform: isOpen ? "rotate(180deg)" : "none",
                    transition: "all 0.3s",
                  }}
                />
              )}
              <Icon
                width={18}
                style={{
                  marginLeft: hasChildren ? 0 : 20,
                  color:
                    assetId === item.id
                      ? defaultTheme.colors.light
                      : defaultTheme.colors.secondary,
                }}
              />
              {item.name}
              {item.sensorType === "energy" && (
                <BoltIcon width={12} color={defaultTheme.colors.success} />
              )}

              {item.status === "alert" && (
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: defaultTheme.colors.error,
                  }}
                />
              )}
            </LocationListLabel>
            {isOpen && renderTree(items, item.id, level + 1)}
          </LocationList>
        );
      });
  };

  return (
    <ul
      style={{
        gap: 8,
        display: "flex",
        flexDirection: "column",
        maxHeight: "500px",
        overflow: "auto",
      }}
    >
      {renderTree(filteredItems)}
    </ul>
  );
};
