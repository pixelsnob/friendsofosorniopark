
import mongoMiddleware from '../../middleware/db';

export default mongoMiddleware(async (req, res, connection, models) => {
  const events = await models.Event.find();
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.json(events);
});