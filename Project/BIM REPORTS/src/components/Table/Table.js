import React from "react";

function Table({ data }) {
  return (
    <div>
      <table>
        <thead>
          <th>Дата</th>
          <th>Задачи</th>
          <th>Корпус</th>
          <th>Раздел документации</th>
          <th>Заказчик</th>
          <th>Трудозатраты</th>
          <th>Площадь</th>
          <th>Готовность по разделу</th>
          <th></th>
        </thead>
        <tbody>
          {data.map((el) => {
            return (
              <tr>
                <td>{el.Дата}</td>
                <td>{el.Задачи}</td>
                <td>{el.Корпус}</td>
                <td>{el.РазделДокументации}</td>
                <td>{el.Заказчик}</td>
                <td>{el.Трудозатраты}</td>
                <td>{el.Площадь}</td>
                <td>{el.ГотовностьПоРазделу}</td>
                <td>
                  <button>edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
