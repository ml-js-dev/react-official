import React, { Component } from "react";
import ReactDOM from "react-dom";
import Clock from "./stateAndLifeCycle/Clock";
import Toggle from "./eventHanding/Toggle";
import LoginControl from "./conditionalRendering/LoginControl";
import { Mailbox, messages } from "./conditionalRendering/Mailbox";
import { formatDate, Avatar, UserInfo, Comment, comment } from "./componentsAndProps/Welcome";
import { Page } from "./conditionalRendering/Page";
import { NumberList } from "./listsAndKeys/NumberList";
import { Blog } from "./listsAndKeys/Blog";
import { NameForm } from "./forms/NameForm";
import { EssayForm } from "./forms/EssayForm";
import { FlavourForm } from "./forms/FlavourForm";
import { Reservation } from "./forms/Reservation";
import { Calculator } from "./liftingState/Calculator";

const root = document.getElementById("root");
const posts = [
    { id: 1, title: "Привет, мир", content: "Добро пожаловать в документацию React!" },
    { id: 2, title: "Установка", content: "React можно установить из npm." },
];
const numbers = [1, 2, 3, 4, 5];

ReactDOM.render(<Calculator />, root);
