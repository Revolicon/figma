import React from "react";
import "../scss/App.scss";
import styles from "../scss/Welcome.module.scss";

import FeatureIcon1 from "../assets/feature/beautiful.png";
import FeatureIcon2 from "../assets/feature/easy-to-use.png";
import FeatureIcon3 from "../assets/feature/open-source.png";
import FeatureEffect from "../assets/feature/effect.png";

function Logo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 0C17.1046 0 18 0.89543 18 2V6C18 7.10457 17.1046 8 16 8C14.8954 8 14 7.10457 14 6V2C14 0.89543 14.8954 0 16 0Z"
        fill="#FF8000"
      />
      <path
        d="M24 16C24 14.8954 24.8954 14 26 14H30C31.1046 14 32 14.8954 32 16C32 17.1046 31.1046 18 30 18H26C24.8954 18 24 17.1046 24 16Z"
        fill="#5648FF"
      />
      <path
        d="M8 16C8 14.8954 7.10457 14 6 14H2C0.895431 14 0 14.8954 0 16C0 17.1046 0.895431 18 2 18H6C7.10457 18 8 17.1046 8 16Z"
        fill="#FFC700"
      />
      <path
        d="M16 24C17.1046 24 18 24.8954 18 26V30C18 31.1046 17.1046 32 16 32C14.8954 32 14 31.1046 14 30V26C14 24.8954 14.8954 24 16 24Z"
        fill="#00B2FF"
      />
      <path
        d="M4.68735 4.68628C5.46839 3.90523 6.73472 3.90523 7.51577 4.68628L10.3442 7.51471C11.1252 8.29576 11.1252 9.56209 10.3442 10.3431C9.56315 11.1242 8.29682 11.1242 7.51577 10.3431L4.68735 7.51471C3.9063 6.73366 3.9063 5.46733 4.68735 4.68628Z"
        fill="#FFA800"
      />
      <path
        d="M21.6561 10.3431C20.875 9.56209 20.875 8.29576 21.6561 7.51471L24.4845 4.68628C25.2656 3.90523 26.5319 3.90523 27.313 4.68628C28.094 5.46733 28.094 6.73366 27.313 7.51471L24.4845 10.3431C23.7035 11.1242 22.4371 11.1242 21.6561 10.3431Z"
        fill="#FF2F64"
      />
      <path
        d="M10.3439 21.6569C9.56285 20.8758 8.29652 20.8758 7.51547 21.6569L4.68705 24.4853C3.906 25.2663 3.906 26.5327 4.68705 27.3137C5.4681 28.0948 6.73443 28.0948 7.51547 27.3137L10.3439 24.4853C11.1249 23.7042 11.1249 22.4379 10.3439 21.6569Z"
        fill="#00CC64"
      />
      <path
        d="M21.6561 21.6569C22.4371 20.8758 23.7035 20.8758 24.4845 21.6569L27.313 24.4853C28.094 25.2663 28.094 26.5327 27.313 27.3137C26.5319 28.0948 25.2656 28.0948 24.4845 27.3137L21.6561 24.4853C20.875 23.7042 20.875 22.4379 21.6561 21.6569Z"
        fill="#1696FF"
      />
    </svg>
  );
}

function Feature() {
  let list = [
    {
      icon: FeatureIcon1,
      title: "Beautiful",
      link: "https://twitter.com/revolicon",
    },
    {
      icon: FeatureIcon2,
      title: "Easy to use",
      link: "https://revolicon.com",
    },
    {
      icon: FeatureIcon3,
      title: "Open Source",
      link: "https://github.com/revolicon",
    },
  ];
  return (
    <div className={styles.feature}>
      {list.map((item, index) => (
        <a
          target="_blank"
          href={item.link}
          className={styles.feature__item}
          key={index}
        >
          <img src={item.icon} alt={item.title} />
          <span>{item.title}</span>
        </a>
      ))}
      <img
        className={styles.feature__effect}
        src={FeatureEffect}
        alt="Effect"
      />
    </div>
  );
}

export default function Welcome() {
  return (
    <div className={styles.welcome}>
      <div className={styles.content}>
        <Logo />
      </div>
      <Feature />
    </div>
  );
}
