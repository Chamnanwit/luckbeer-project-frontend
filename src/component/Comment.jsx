import React from 'react'
import { DeleteIcon, SetIcon } from '../icons'

export default function Comment({message, name}) {
  return (
    <div>
         <div className="bg-gray-200 w-[70vw] mx-auto p-4 rounded-md mt-4">
              <div className="flex items-center gap-4">
                <h1 className="inline-block rounded-full bg-subg px-4 py-2 text-sm font-medium text-white">
                  U
                </h1>
                <h2 className="text-xl font-semibold">{name}</h2>
                <SetIcon className={"w-3"} />
                <DeleteIcon className={"w-3"} />
              </div>
              <p className="px-5 pt-3">
                {message}
              </p>
            </div>
    </div>
  )
}
