import React, { FC } from "react";
import Info from "../../../Info.json"
import "./Client.scss";
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

const Client: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "90px",
        alignItems: "start",
        minWidth: "95vw",
        justifyContent: "center"
      }}
    >
      <div className="client">
        {Info.map((item: InfoItem, id: number) => (
          <div key={id} className="client_blocks">
                <div style={{ display: 'flex', height: "100%", position: 'relative', justifyContent:"space-around"}}>
                <img
                    className="client_blocks_titel_img"
                    src="./img/UserPhoto.svg"
                    alt="img"
                />
                <div style={{width:'80%'}}>
                    <div className="client_blocks_titel">

                  <h2 className="client_blocks_titel_name">{item.name}</h2>
                        </div>
                    <div className="client_blocks_blocksFirst">
                  <p className="client_blocks_blocksFirst_info">{item.email}</p>
                  <p className="client_blocks_blocksFirst_info">{item.phone}</p>
                    </div>
                    <div className="client_blocks_blocksSecond">
                        <p className="client_blocks_blocksSecond_info">
                    Посещение: {item.invite}
                        </p>
                        <p className="client_blocks_blocksSecond_info">
                    Общей чек: {item.resit}
                        </p>
                    </div>
                </div>
               
            </div>
          </div>
        ))}
      </div>
      <InfoClient />
    </div>
  );
};
export {Client};
