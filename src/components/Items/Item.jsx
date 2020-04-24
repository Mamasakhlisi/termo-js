import React, { useState, useEffect } from "react"
import { data } from "../../fixed-data/data"
import Ace from "../Ace/Ace"
import style from "./style.module.scss"
import { CheckOutlined } from "@ant-design/icons"
const Item = () => {
  const [state, setState] = useState({
    correct: 0,
    store: [],
  })
  const [active, setActive] = useState(1);
  const [aceValue, setAceValue] = useState('')
  const onChange = (newValue) => {
    setAceValue(newValue);
  }
  const submit = async (result, topic) => {
    if (result === aceValue.replace(/\n/g, '')) {
      await localStorage.setItem(`${topic}`, [aceValue])
      setAceValue('');
    } else {
      alert(false)
    }
    console.log(aceValue.replace('\n', ''))
  }
  useEffect(() => {
    // const storage = localStorage.getItem(`${item.id}-${item.topic}`);
    const timer = setTimeout(() => {
      setState({
        ...state,
        store: data.map((item) => ({
          id: item.id,
          label: item.label,
          topic: item.topic,
          example: item.example,
          example2: item.example2,
          example3: item.example3,
          codeResult: item.codeResult,
          result: item.result,
          storageResult: localStorage.getItem(`${item.id}-${item.topic}`),
        })),
      })
    }, 3000);
  }, [state.store])
  return (
    <div className={style.container}>
      <nav className={style.navigation}>
        <ul className={style.ul}>
          {state.store.map((item) => (
            <li key={item.id} className={style.nav_li}>
              <button
                onClick={() =>
                  setActive(item.id)
                }
              >
                <span>თემა: {item.topic}</span>
                {item.storageResult !== null && (
                  <CheckOutlined style={{ color: "rgb(6, 170, 47)" }} />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {state.store.map((item) => {
        const topic = `${item.id}-${item.topic}`
        return (
          item.id === active && (
            <div className={style.constructor} key={item.id}>
              <div className={style.example}>
                <h4>მითითება: {item.label}</h4>
                <h5>მაგალითი: {item.example}</h5>
                {item.example2 && <h5>მაგალითი: {item.example2}</h5>}
                {item.example3 && <h5>მაგალითი: {item.example3}</h5>}
              </div>
              <Ace onChange={onChange} aceValue={localStorage.getItem(topic) ? localStorage.getItem(topic) : aceValue} />
              <div className={style.result}>
                <span>შედეგი: {localStorage.getItem(topic) && item.codeResult}</span>
              </div>
              <button
                onClick={() => submit(item.result, topic)}
                className={style.onSubmit}
              >
                დადასტურება
              </button>
            </div>
          )
        )
      })}
    </div>
  )
}

export default Item
