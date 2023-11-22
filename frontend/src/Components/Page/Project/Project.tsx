import React, { FC } from "react";
import Info from "../../../Info.json";
import "./Project.scss";
import InfoClient from "../Model/InfoClient";

interface InfoItem {
  _id: number;
  index: number;
  name: string;
  email: string;
  phone: string;
  invite: string;
  resit: string;
}
const Project: React.FC = () => {
  return (
    <div style={{ display: "flex", gap: "80px" }}>
      <div className="project_body">
        {Info.map((item: InfoItem, id: number) => (
          <div className="project">
            <div className="project_photo">
              <img src="./img/ProjectImg.svg" style={{width:'80px'}}/>
              <h2 className="project_text">Поминки-доставка</h2>
            </div>
            <div className="project_info">
              <p>Использований: 1</p>
              <p>Клиентов: 2 </p>
              <p>Общий чек: 1</p>
              <p>Средний чек: 2</p>
            </div>
          </div>
        ))}
      </div>
      <InfoClient />
    </div>
  );
};

export { Project };
