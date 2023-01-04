import React from "react";
import style from "./UserList.module.scss";
import { Loader } from "../loader";
import { Error } from "../error";
import { UsersCard } from "../usersCard";
import { useUsersList } from "../../hooks/useUsersList";

export const UserList = () => {
  const [loading, error, users, usersWithLike, statusLike, getStatusLike] = useUsersList();
  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <h1 className={style.title}>Наша команда</h1>
        <p className={style.text}>
          Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
          ложатся на их плечи, и умеющие находить выход из любых, даже самых
          сложных ситуаций.{" "}
        </p>
      </div>
      <button
        className={statusLike ? style.button_like : style.button_no_like}
        onMouseDown={() => getStatusLike(true)}
        onMouseUp={() => getStatusLike(false)}
      >
        Нравятся
      </button>
      {error && <Error />}
      {loading && <Loader />}
      <div className={style.content}>
        {statusLike
          ? usersWithLike.map((item) => <UsersCard {...item} key={item.id} />)
          : users.map((item) => <UsersCard {...item} key={item.id} />)}
      </div>
    </div>
  );
};
