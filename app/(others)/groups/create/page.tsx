import NotAllowed from "@/components/navigation/not-allowed";
import GroupForm from "../_components/form";
import { createGroup } from "../_methods/createGroup";
import { getAccessRights } from "@/utils/accessRights";
import { getLists, getStudents } from "@/utils/db";
import { ListsContextWrapper, StudentsContextWrapper } from "../_components/contextWrapper";

export default async function Page() {
  const rights = await getAccessRights();

  if (!rights.createGroup) return <NotAllowed label="Zur Verwaltung" url="/manage" />;

  const lists = await getLists();
  const students = await getStudents();

  return (
    <ListsContextWrapper value={lists}>
      <StudentsContextWrapper value={students}>
        <GroupForm action="create" actionMethod={createGroup} />
      </StudentsContextWrapper>
    </ListsContextWrapper>
  );
}
