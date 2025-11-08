export default defineEventHandler(async () => {
  const poll = await Poll.findOne({});

  if (!poll) return null;

  poll.no++;
  await poll.save();

  return poll;
});
