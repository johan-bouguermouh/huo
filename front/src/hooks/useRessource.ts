import {
  CloudinaryResource,
  CloudinaryUploadWidgetResults,
} from "@cloudinary-util/types";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface UseResources {
  initialResources?: CloudinaryResource[];
  disablefetch?: boolean;
  tags?: string[];
}

export function useRessources(options?: UseResources) {
  const queryClient = useQueryClient();
  const { disablefetch = false } = options ?? {};

  const { data: resources } = useQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      const { data } = await fetch("/api/resources").then((res) => res.json());
      return data;
    },
    initialData: options?.initialResources,
    enabled: !disablefetch,
  });

  function addResource(resutlts: CloudinaryResource[]) {
    queryClient.setQueryData<CloudinaryResource[]>(["resources"], (old) => {
      return [...resutlts, ...(old ?? [])];
    });

    queryClient.invalidateQueries({
      queryKey: ["resources"],
    });
  }

  return {
    resources,
    addResource,
  };
}
