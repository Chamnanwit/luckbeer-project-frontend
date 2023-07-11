import React, { useState, useEffect } from "react";
import cover4 from "../assets/cover4.jpg";
import { LikeIcon, SetIcon } from "../icons";
import {
  addCommentBeer,
  getCommentBeer,
  updateCommentByCommentId,
} from "../api/comment-api";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../contexts/Auth-context";
import Comment from "../component/Comment";

export default function BeerData() {
  const { beerById, fetchBeerById, user } = useAuth();
  const [comment, setComment] = useState([]);
  const [input, setInput] = useState({ text: "" });
  const { beerId } = useParams();
  const [boxComment, setBoxComment] = useState(false);
  const [commentId, setCommentId] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const fetchComment = async (beerId) => {
    const res = await getCommentBeer(beerId);

    setComment(res.data);
  };
  useEffect(() => {
    fetchComment(beerId);
  }, []);

  useEffect(() => {
    // console.log(beerId)
    fetchBeerById(beerId);
  }, []);

  const hdlChangeInput = (e) => {
    setInput(e.target.value);
  };

  const hdlSubmit = async (e) => {
    e.preventDefault();
    if (!isEdit) {
      await addCommentBeer(beerId, { message: input });
      await fetchComment(beerId);
    } else {
      await handleSubmitEditComment();
      await fetchComment(beerId);
    }
    setBoxComment(false);
    setIsEdit(false);
  };

  const handleClickAdd = () => {
    setIsEdit(false);
    setBoxComment(!boxComment);
  };

  const hdlClickEdit = (commentId) => {
    setIsEdit(true);
    setBoxComment(!boxComment);
    setCommentId(commentId);
  };

  const handleSubmitEditComment = async () => {
    await updateCommentByCommentId(beerId, commentId, { message: input });
  };

  return (
    <div>
      {/* head */}
      <div>
        <div className="w-[90vw] mx-auto">
          <img src={cover4} alt="" className="object-fill w-full h-[15vw]" />
        </div>
        <div className="flex w-[90vw] justify-center items-center mx-auto">
          <div className="bg-mainc w-full h-12 flex justify-center items-center">
            <p className="font-semibold">เบียร์</p>
          </div>
        </div>
      </div>

      {/* body */}
      <div className="flex justify-around items-center w-[90vw] mx-auto pt-4">
        <div className="flex flex-col w-[35%] gap-6">
          {user?.isAdmin ? (
            <Link to="/addbeer">
              <SetIcon className={"w-2"} />
            </Link>
          ) : (
            <></>
          )}
          <img
            src={beerById?.Brewery?.logo}
            alt=""
            className="h-[10rem] w-[10rem] mx-auto"
          />
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold py-4">{beerById?.name}</h1>
            <div className="flex flex-col items-center">
              {/* <LikeIcon className={"w-8"} />
              <p className="text-sm">1,245</p> */}
            </div>
          </div>
          <div>
            <hr />
            <div className="flex gap-8 items-center my-2">
              <h1 className="font-semibold">ประเภท</h1>
              <span>{beerById?.Type?.type}</span>
            </div>
            <hr />
            <div className="flex gap-8 items-center my-2">
              <h1 className="font-semibold">ปริมาณแอลกอฮอลล์</h1>
              <span>{beerById?.percentAlcohol} %</span>
            </div>
          </div>
        </div>
        <div className="h-[20rem] w-[18rem]">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img src={beerById?.ImageBeer?.image1} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img src={beerById?.ImageBeer?.image2} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img src={beerById?.ImageBeer?.image3} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img src={beerById?.ImageBeer?.image4} className="w-full" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80vw] mx-auto mt-5">
        <h1 className="text-lg font-semibold">เรื่องราว และแรงบรรดาใจ</h1>
        <p className="w-[90%] my-4 mx-auto">{beerById?.text}</p>
        <hr />
      </div>
      <div>
        <div className="flex justify-between w-[60vw] mx-auto mt-5 items-center">
          <h1 className="text-xl font-semibold">ความเห็นผู้บริโภค</h1>
          { user ? (<button
            class="inline-block rounded-full border border-mainr px-8 py-2 text-sm font-medium text-mainr hover:bg-mainr hover:text-white focus:outline-none focus:ring active:bg-mainr"
            onClick={handleClickAdd}
          >
            แสดงความเห็น
          </button>) : (<></>)}
        </div>
        <div>
          <div>
            {comment.map((el, idx) => {
              return (
                <Comment
                  key={idx}
                  id={el.id}
                  message={el.message}
                  name={el.User.name}
                  hdlClickEdit={hdlClickEdit}
                  beerId={beerId}
                  fetchComment={fetchComment}
                />
              );
            })}
          </div>
          {boxComment && (
            <form onSubmit={hdlSubmit}>
              <label
                htmlFor="text"
                className="relative w-[50vw] h-[10vh] block overflow-hidden rounded-3xl border border-gray-200 px-3 pt-3 mt-10 mx-auto shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
              >
                <input
                  type="text"
                  name="text"
                  id="message"
                  placeholder="ความเห็นของคุณ"
                  onChange={hdlChangeInput}
                  className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                />

                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                  ความเห็นของคุณ
                </span>
              </label>
              <button
                class="inline-block rounded-full border border-mainr px-3 py-2 text-sm font-medium text-mainr hover:bg-mainr hover:text-white focus:outline-none focus:ring active:bg-mainr ml-[67%] mt-4"
                type="submit"
              >
                ส่งความเห็น
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
