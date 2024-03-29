import imagemin from "imagemin-keep-folder";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import imageminMozjpeg from "imagemin-mozjpeg";

const srcDir = "./src/img/**/*.{jpg,jpeg,png}";
const outDir = "./dist/img/**/*";

const convertWebp = (targetFiles) => {
  imagemin([targetFiles], {
    use: [imageminWebp({ quality: 50 })], // qualityを指定しないと稀にwebpが走らない場合があるので注意する。（{ quality: 50 }）で指定すれば大体いけそう
  });
};

imagemin([srcDir], {
  plugins: [imageminMozjpeg(), imageminPngquant()],
  replaceOutputDir: (output) => {
    return output.replace(/img\//, "../dist/img/");
  },
}).then(() => {
  convertWebp(outDir);
  console.log("Images optimized!");
});
