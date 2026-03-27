import Item from "./Item";
import style from "./Lista.module.scss";

function Lista() {
  const tarefas = [
    {
      tarefa: "React Native Study",
      tempo: "00:30:00",
    },
    {
      tarefa: "SQL Query Optimization",
      tempo: "00:45:00",
    },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
