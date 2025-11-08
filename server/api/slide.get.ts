export default defineEventHandler(async () => {
  let slide = await Slide.findOne({});
  if (slide === null) {
    slide = await Slide.create({
      name: "index",
    });
  }

  return slide;
});
