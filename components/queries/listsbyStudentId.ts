import { Prisma } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

export default function useListsByStudentsQuery(studentId: number | undefined | null) {
  return useQuery<
    Prisma.ListGetPayload<{
      include: {
        activations: true;
      };
    }>[]
  >({
    queryKey: ["students", studentId, "lists"],
    queryFn: () =>
      fetch("/api/students/" + studentId + "/lists")
        .then((res) => res.json())
        .then((data) => data.data),
    enabled: !!studentId,
  });
}
