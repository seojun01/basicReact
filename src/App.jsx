import { useState } from "react";
import "./App.css";

const Modal = (props) => {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>{" "}
      <button
        onClick={() => {
          let copy = [...props.title];
          copy[0] = "여자 코트 추천";
          props.setTitle(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
};

function App() {
  let post = "우동 맛집";
  let [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [good, setGood] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>React Blog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...title];
          copy.sort();
          setTitle(copy);
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          let copy = [...title];
          copy[0] = "여자 코트 추천";
          setTitle(copy);
        }}
      >
        글수정
      </button>

      {title.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
              }}
            >
              {a}{" "}
              <span
                onClick={() => {
                  let copyGood = [...good];
                  copyGood[i] = copyGood[i] + 1;
                  setGood(copyGood);
                }}
              >
                👍 {good[i]}
              </span>
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}
      {modal ? (
        <Modal title={title} setTitle={setTitle} color={"skyblue"} />
      ) : null}
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
