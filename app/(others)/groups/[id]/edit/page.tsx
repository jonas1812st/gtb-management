import NotAllowed from "@/components/navigation/not-allowed";
import GroupForm from "../../_components/form";
import { getAccessRights } from "@/utils/accessRights";
import { getGroupById, getLists, getStudents } from "@/utils/db";
import { ListsContextWrapper, StudentsContextWrapper } from "../../_components/contextWrapper";
import Error from "@/components/navigation/error";
import { editGroup } from "../../_methods/editGroup";
import { BackNavigation } from "@/components/ui/back-navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const groupId = parseInt(id) || 0;

  // check if user id is valid
  if (id === "" || groupId === 0) return <Error error="Id not valid." url="/groups" btnLabel="Zur Übersicht" />;

  const rights = await getAccessRights();
  if (!rights.updateGroup) return <NotAllowed url={"/group/" + groupId} label="Zur Gruppe" />;

  // fetch group by id
  const group = await getGroupById(groupId);

  // show error if not found
  if (!group) return <Error error="Group not found." url="/groups" btnLabel="Zur Übersicht" />;

  // fetch additional data
  const lists = await getLists();
  const students = await getStudents();

  return (
    <div className="flex flex-col space-y-4">
      <BackNavigation href={`/groups/${group.id}`} title="Gruppe bearbeiten" />
      <ListsContextWrapper value={lists}>
        <StudentsContextWrapper value={students}>
          <GroupForm
            action="edit"
            values={{
              name: group.name,
              listId: group.listId,
              color: group.color ?? undefined,
              studentIds: group.GroupsOnStudents.map((group) => group.studentId),
            }}
            id={groupId}
            actionMethod={editGroup}
          />
        </StudentsContextWrapper>
      </ListsContextWrapper>
    </div>
  );
}
