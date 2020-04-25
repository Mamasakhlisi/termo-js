import React, { useState, useEffect } from "react"
import { data } from "../../fixed-data/data"
import { dropData } from "../../fixed-data/dropdown"
import Ace from "../Ace/Ace"
import style from "./style.module.scss"
import { CheckOutlined, DownOutlined } from "@ant-design/icons"
import giphy from "./giphy.gif"

const Item = () => {
  const [state, setState] = useState({
    correct: 0,
    store: [],
  })
  const [active, setActive] = useState(1)
  const [dropActive, setDropActive] = useState(0);
  const [aceValue, setAceValue] = useState("")
  const onChange = (newValue) => {
    setAceValue(newValue)
  }
  const submit = async (result, topic) => {
    if (result === aceValue.replace(/\n/g, "")) {
      await localStorage.setItem(`${topic}`, [aceValue])
      setAceValue("")
    } else {
      alert("შეცდომა!")
    }
  }
  useEffect(() => {
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
          description:item.description,
          title:item.title
        })),
      })
    }, 3000)
  }, [state.store])
  return (
    <div className={style.container}>
      <nav className={style.navigation}>
        {dropData.map((drop) => {
          return (
            <ul className={style.ul}>
              <li className={style.nav_li}>
                <button onClick={() => setDropActive(drop.id)}>
                  <span>თემა: {drop.topic}</span>
                  <DownOutlined />
                </button>
              </li>
              {drop.id === dropActive && state.store.map(
                (item) =>
                  drop.topic === item.topic && (
                    <li key={item.id} className={`${style.nav_li} ${style.dropdown_li}`}>
                      <button onClick={() => setActive(item.id)}>
                        <span className={`${item.title.length > 30 && style.title}`}>{item.title}</span>
                        {item.storageResult !== null && (
                          <span className={style.check}><CheckOutlined style={{ color: "rgb(6, 170, 47)" }} /></span>
                        )}
                      </button>
                    </li>
                  )
              )}
            </ul>
          )
        })}
      </nav>
      {state.store.map((item) => {
        const topic = `${item.id}-${item.topic}`
        return (
          item.id === active && (
            <div className={style.constructor} key={item.id}>
              <div className={style.example}>
                <h3>მითითება: {item.label}</h3>
                <p>{item.description}</p>
                <h4>მაგალითი: {item.example}</h4>
                {item.example2 && <h4>მაგალითი: {item.example2}</h4>}
                {item.example3 && <h4>მაგალითი: {item.example3}</h4>}
              </div>
              <Ace
                onChange={onChange}
                aceValue={
                  localStorage.getItem(topic)
                    ? localStorage.getItem(topic)
                    : aceValue
                }
              />
              <div className={style.result}>
                <span>
                  შედეგი: {localStorage.getItem(topic) && item.codeResult}
                </span>
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
      <div className={style.logo}>
        <img src={giphy} alt="" />
      </div>
    </div>
  )
}

export default Item
