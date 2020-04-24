import React, { useState } from "react"
import { data } from "../../fixed-data/data"
import Ace from "../Ace/Ace"
import style from "./style.module.scss"
import {CheckOutlined} from '@ant-design/icons'
const Item = () => {
  const [state, setState] = useState({
    AceValue: "",
    active: 1,
    correct: 0,
  })
  const onChange = (newValue) => {
    setState({ ...state, AceValue: newValue })
  }
  const submit = (result, topic) => {
    if (result === state.AceValue) {
      alert(true)
      localStorage.setItem(`${topic}`, [state.AceValue])
    } else {
      alert(false)
    }
    console.log(state.AceValue + result)
  }
  return (
    <div className={style.container}>
      <nav className={style.navigation}>
        <ul>
          {data.map((item) => (
            <li key={item.id} className={style.nav_li}>
              <button
                onClick={() =>
                  setState({ ...state, active: item.id, AceValue: "" })
                }
              >
                <span>თემა: {item.topic}</span>
                {localStorage.getItem(`${item.id}-${item.topic}`) !== null && (
                  <CheckOutlined style={{color: "rgb(6, 170, 47)"}} />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {data.map((item) => {
        const topic = `${item.id}-${item.topic}`
        return (
          item.id === state.active && (
            <div className={style.constructor} key={item.id}>
              <div className={style.example}>
                <h4>მითითება: {item.label}</h4>
                <h4>მაგალითი: {item.example}</h4>
              </div>
              <Ace onChange={onChange} aceValue={state.AceValue} />
              <button onClick={() => submit(item.result, topic)} className={style.onSubmit}>
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
