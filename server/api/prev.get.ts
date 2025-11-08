export default defineEventHandler(async () => {
  const slide = await Slide.findOne({});

  if (!slide) return null;

  const slides = [
    "index",
    "rule-society",
    "cooperation",
    "egg",
    "teamwork",
    "team-creativity",
    "kaizen",
    "poll",
    "framework",
    "personality",
  ];

  const name = slide.name;
  const key = slides.indexOf(name as string);
  if (key - 1 >= 0) {
    slide.name = slides[key - 1] === "index" ? "index" : slides[key - 1];
  }

  await slide.save();

  return slide;
});
