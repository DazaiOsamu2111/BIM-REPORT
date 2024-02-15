import React, { useEffect, useState } from "react";
import { Button, Modal } from "antd";
const ModalWindow = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [text, setText] = useState({
    ГотовностьПоРазделу: "",
    Дата: "",
    Задачи: "",
    Заказчик: "",
    Корпус: "",
    Площадь: "",
    РазделДокументации: "",
    Трудозатраты: "",
  });
  useEffect(() => {
    console.log(text);
  }, [text]);
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Добавить
      </Button>
      <Modal
        title="Добавлление новых данных в таблицу"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <select
          placeholder="Добавьте новый список"
          value={text.ГотовностьПоРазделу}
          onChange={(e) =>
            setText({ ...text, ГотовностьПоРазделу: e.target.value })
          }
        >
          <option value="Сканирование">Сканирование</option>
          <option value="Визуализация">Визуализация</option>
          <option value="Моделирование">Моделирование</option>
          <option value="Корректировка по области точек">
            Корректировка по области точек{" "}
          </option>
        </select>

        <select
          placeholder="Добавьте новый список"
          value={text.Дата}
          onChange={(e) => setText({ ...text, Дата: e.target.value })}
        >
          <option value="1k">1k</option>
          <option value="2k">2k</option>
          <option value="3k">3k</option>
          <option value="4k">4k</option>
        </select>
        <select
          placeholder="Добавьте новый список"
          value={text.Задачи}
          onChange={(e) => setText({ ...text, Задачи: e.target.value })}
        >
          <option value="23">23</option>
          <option value="512">512</option>
          <option value="666">666</option>
          <option value="БЛОК">БЛОК</option>
        </select>

        <select
          placeholder="Добавьте новый список"
          value={text.Заказчик}
          onChange={(e) => setText({ ...text, Заказчик: e.target.value })}
        >
          <option value="ОАО">ОАО</option>
          <option value="ГУУД">ГУУД</option>
          <option value="HERY">HERY</option>
          <option value="UPI">UPI</option>
        </select>

        <input
          placeholder="Добавьте новый список"
          value={text.Корпус}
          onChange={(e) => setText({ ...text, Корпус: e.target.value })}
        />

        <input
          placeholder="Добавьте новый список"
          value={text.Площадь}
          onChange={(e) => setText({ ...text, Площадь: e.target.value })}
        />

        <input
          placeholder="Добавьте новый список"
          value={text.РазделДокументации}
          onChange={(e) =>
            setText({ ...text, РазделДокументации: e.target.value })
          }
        />

        <input
          placeholder="Добавьте новый список"
          value={text.Трудозатраты}
          onChange={(e) => setText({ ...text, Трудозатраты: e.target.value })}
        />
      </Modal>
    </>
  );
};
export default ModalWindow;
