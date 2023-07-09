import { deleteCommentByCommentIdByAdmin } from "../api/comment-api";
import { DeleteIcon, SetIcon } from '../icons'

export default function Comment({message, name, hdlClickEdit,id,beerId,fetchComment}) {

  // console.log("id", id)
  // console.log("beerId", beerId)
  const hdlDelete = async () => {
    await deleteCommentByCommentIdByAdmin(beerId, id)
     fetchComment(beerId);
  }
  
  return (
    <div>
         <div className="bg-gray-200 w-[70vw] mx-auto p-4 rounded-md mt-4">
              <div className="flex items-center gap-4">
                <h1 className="inline-block rounded-full bg-subg px-4 py-2 text-sm font-medium text-white">
                  U
                </h1>
                <h2 className="text-xl font-semibold">{name}</h2>
                <SetIcon className={"w-3"} onClick={() => hdlClickEdit(id)}/>
                <DeleteIcon className={"w-3"} onClick={() =>hdlDelete()}/>
              </div>
              <p className="px-5 pt-3">
                {message}
              </p>
            </div>
    </div>
  )
}
