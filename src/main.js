import * as BABYLON from "@babylonjs/core";
import './style.css';
import main from "../scenes/main.js";

// Selecionando o canvas do DOM
const canvas = document.querySelector('canvas');

if (!canvas) {
    throw new Error("Canvas element not found. Ensure there's a <canvas> element in your HTML.");
}

// Criando o engine do Babylon.js
const engine = new BABYLON.Engine(canvas, true);

// Criando uma cena inicial (placeholder)
const currentScene = new BABYLON.Scene(engine);

// Função assíncrona para iniciar o jogo
async function init() {
    await main(BABYLON, engine, currentScene);
}

// Iniciando a aplicação
init();

// Ajustar o tamanho do canvas ao redimensionar a janela
window.addEventListener("resize", () => {
    engine.resize();
});
