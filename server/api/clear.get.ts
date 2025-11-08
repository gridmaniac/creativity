export default defineEventHandler(async () => {
  const poll = await Poll.findOne({});

  if (!poll) return null;

  poll.yes = 0;
  poll.no = 0;
  await poll.save();

  return poll;
});
