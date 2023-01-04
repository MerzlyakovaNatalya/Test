import React from "react";
import style from "./UsersCard.module.scss";
import likeImg from "../../img/like.png";
import noLikeImg from "../../img/noLike.png";
import { useUsersCard } from "../../hooks/useUsersCard";
import { FiTrash } from "react-icons/fi";

export const UsersCard = (props) => {
  const { id, avatar, first_name, last_name, like } = props;
  const [getLike, removeUser] = useUsersCard(id, like);

  return (
    <div className={style.wrap}>
      <img src={avatar} alt="photo" className={style.img_avatar} />
      <p className={style.text}>
        {first_name} {last_name}{" "}
      </p>
      <button className={style.button} onClick={() => getLike()}>
        {like ? (
          <img src={likeImg} alt="like" />
        ) : (
          <img src={noLikeImg} alt="like" />
        )}
      </button>
      <button className={style.button_delete} onClick={() => removeUser(id)}>
        <FiTrash />
      </button>
    </div>
  );
};
