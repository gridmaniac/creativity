export default defineEventHandler(async () => {
  const poll = await Poll.findOne({});

  if (!poll) return null;

  poll.yes++;
  await poll.save();

  return poll;
});
