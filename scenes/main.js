import gameScene from "./gameScene.js";

async function main(BABYLON, engine, currentScene) {
    // Carrega a cena do jogo
    const scene = await gameScene(BABYLON, engine, currentScene);

    // Loop de renderização
    engine.runRenderLoop(() => {
        scene.render();
    });
}

export default main;
