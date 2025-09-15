// generate-favicon.js
import favicons from "favicons";
import fs from "fs";

const source = "./public/profile.jpg";
 // 👉 immagine di partenza (mettila nella root)
const configuration = {
  path: "/", // percorso base
  appName: "Gianluca Lazzarin",
  appShortName: "GL",
  appDescription: "Portfolio e presentazione",
  developerName: "Gianluca Lazzarin",
  developerURL: "https://gianlucalazzar.in",
  background: "#000000",
  theme_color: "#000000",
  icons: {
    android: true,
    appleIcon: true,
    favicons: true,
    windows: true,
    yandex: false,
  },
};

favicons(source, configuration)
  .then(response => {
    // Salva immagini
    response.images.forEach(image => {
      fs.writeFileSync(`./public/${image.name}`, image.contents);
    });

    // Salva file extra (manifest, browserconfig, ecc.)
    response.files.forEach(file => {
      fs.writeFileSync(`./public/${file.name}`, file.contents);
    });

    // Salva frammento HTML con i <link>
    fs.writeFileSync("./public/favicon.html", response.html.join("\n"));

    console.log("✅ Favicon generate in /public");
  })
  .catch(console.error);
