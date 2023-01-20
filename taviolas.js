const Jimp = require("jimp");
const readline = require('readline-sync');

// Recebe a mensagem como input
const message = readline.question("Insira a mensagem para ser inserida na imagem: ");


// Abre a imagem
Jimp.read("TaviolaModel.jpg").then(image => {
    // Define a fonte e o tamanho
    Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
        const width = image.bitmap.width;
    const height = image.bitmap.height;
    // Insere a mensagem como citação na parte esquerda e um pouco acima da metade da imagem
    const text_x = 50;
    const text_y = height / 2 - 30;
    image.print(font, text_x, text_y, `"${message}"`, width)
    // Salva a imagem gerada na pasta "output"
    .write("output/image_with_quote.jpg", (err) => {
        if (err) throw err;
        console.log("Image saved!");
    });
    });
    
}).catch(err => {
    console.error(err);
});