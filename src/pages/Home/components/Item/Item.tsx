import React, { FC } from "react";
import cl from "./index.module.css";

type Props = {
  title: string;
  description: string;
};

const Item: FC<Props> = ({ title, description }) => {
  return (
    <div className={cl.Wrapper}>
      <div className={cl.Content}>
        <div className={cl.Title}>{title}</div>
        <div className={cl.Description}>{description}</div>
      </div>

      <div className={cl.Icon}></div>
    </div>
  );
};

export default Item;
