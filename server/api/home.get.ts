export default defineEventHandler(async () => {
  const slide = await Slide.findOne({});

  if (!slide) return null;

  slide.name = "index";
  await slide.save();

  return slide;
});
