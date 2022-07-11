import React from "react";

import styles from "./styles.module.scss";

import FeatureIcon1 from "@/images/welcome/beautiful.png"
import FeatureIcon2 from "@/images/welcome/easy-to-use.png"
import FeatureIcon3 from "@/images/welcome/open-source.png"
import FeatureEffect from "@/images/welcome/effect.png"

const Feature: React.FC = () => {
  let list = [
    {
      icon: FeatureIcon1,
      title: "Beautiful",
      link: "https://twitter.com/revolicon",
    },
    {
      icon: FeatureIcon2,
      title: "Easy to Use",
      link: "https://revolicon.com",
    },
    {
      icon: FeatureIcon3,
      title: "Open Source",
      link: "https://github.com/revolicon",
    },
  ]

  return (
    <div className={styles.feature}>
      {list.map((item, index) => (
        <a
          target="_blank"
          href={item.link}
          className={styles.feature__item}
          key={index}
        >
          <img src={item.icon} alt={item.title} draggable={false} />
          <span>{item.title}</span>
        </a>
      ))}
      <img
        className={styles.feature__effect}
        src={FeatureEffect}
        alt="Effect"
      />
    </div>
  )
}

export default Feature
