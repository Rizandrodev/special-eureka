async function gameScene(BABYLON, engine, currentScene) {
    const { Vector3, Scene, MeshBuilder, FreeCamera, HemisphericLight } = BABYLON;

    // Criar uma nova cena
    const scene = new Scene(engine);

    // Configurar câmera
    const cam = new FreeCamera("camera", new Vector3(0, 0, -10), scene);
    cam.attachControl(); // Habilitar controles de câmera

    // Configurar luz
    const light = new HemisphericLight("light", new Vector3(0, 10, 0), scene);

    // Criar uma caixa
    const box = MeshBuilder.CreateBox("box", { size: 1.5 }, scene);

    // Aguarde a cena estar pronta
    await scene.whenReadyAsync();

    // Dispose da cena anterior, se válida
    if (currentScene && typeof currentScene.dispose === "function") {
        currentScene.dispose();
    }

    return scene;
}

export default gameScene;
