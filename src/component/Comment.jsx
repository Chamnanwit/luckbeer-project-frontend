import { deleteCommentByCommentIdByAdmin } from "../api/comment-api";
import { DeleteIcon, SetIcon } from "../icons";
import { useAuth } from "../contexts/Auth-context";

export default function Comment({
  message,
  name,
  hdlClickEdit,
  id,
  beerId,
  fetchComment,
}) {
  const { user } = useAuth();
  // console.log("id", id)
  // console.log("beerId", beerId)
  const hdlDelete = async () => {
    const shouldDelete = confirm("คุณต้องการลบหรือไม่");
    if (shouldDelete) {
      await deleteCommentByCommentIdByAdmin(beerId, id);
      fetchComment(beerId);
    }
  };

  return (
    <div>
      <div className="bg-gray-200 w-[70vw] mx-auto p-4 rounded-md mt-4">
        <div className="flex items-center gap-4">
          <h1 className="inline-block rounded-full bg-subg px-4 py-2 text-xl font-medium text-white">
            { user.name[0] }
          </h1>
          <h2 className="text-xl font-semibold">{name}</h2>

          {user ? (
            <div className="flex items-center gap-4">
              {name === user?.name ? (
                <SetIcon className={"w-3"} onClick={() => hdlClickEdit(id)} />
              ) : (
                <SetIcon
                  className={"w-3"}
                  onClick={() => alert("ไม่ใช่ความเห็นคุณ")}
                />
              )}
              <DeleteIcon className={"w-3"} onClick={() => hdlDelete()} />
            </div>
          ) : (
            <></>
          )}
        </div>
        <p className="px-5 pt-3">{message}</p>
      </div>
    </div>
  );
}
