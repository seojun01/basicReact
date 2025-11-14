import { useState } from "react";
import "./App.css";

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.postTitle[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>{" "}
      <button
        onClick={() => {
          let copy = [...props.postTitle];
          copy[0] = "여자 코트 추천";
          props.setPostTitle(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
};

function App() {
  let post = "우동 맛집";
  let [postTitle, setPostTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [inputValue, setInputValue] = useState("");

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      {postTitle.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {a}{" "}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  let copyGood = [...good];
                  copyGood[i] = copyGood[i] + 1;
                  setGood(copyGood);
                }}
              >
                👍 {good[i]}
              </span>
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...postTitle];
                copy.splice(i, 1);
                setPostTitle(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          let copy = [...postTitle];
          copy.unshift(inputValue);
          setPostTitle(copy);
          setGood([...good, 0]); // 좋아요 state 추가
        }}
      >
        글 발행
      </button>

      {modal ? (
        <Modal
          title={title}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          color={"skyblue"}
        />
      ) : null}
      {/* <button
          onClick={() => {
            let copy = [...postTitle];
            copy.sort();
            setPostTitle(copy);
          }}
        >
          가나다순 정렬
        </button>
  
        <button
          onClick={() => {
            let copy = [...postTitle];
            copy[0] = "여자 코트 추천";
            setPostTitle(copy);
          }}
        >
          글수정
        </button> */}
      {/* <div className="list">
        <h4>
          {title[0]}
          <span
            onClick={() => {
              setGood(good + 1);
            }}
          >
            👍
          </span>
          {good}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            //modal ? setModal(false) : setModal(true);
            setModal(!modal);
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      {modal ? <Modal /> : null} */}
    </div>
  );
}

export default App;
