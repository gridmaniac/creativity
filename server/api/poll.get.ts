export default defineEventHandler(async () => {
  let poll = await Poll.findOne({});
  if (poll === null) {
    poll = await Poll.create({
      yes: 0,
      no: 0,
    });
  }

  return poll;
});
