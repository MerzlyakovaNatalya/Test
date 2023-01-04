export const Error = () => (
    <div>
      Упс! Что-то пошло не так!
      <button onClick={() => window.location.reload()}>Перезапустить страницу</button>
    </div>
  );