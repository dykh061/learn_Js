export async function sortMiddleware(req, res, next) {
  res.locals._sort = {
    enable: false,
    type: "default",
  };
  if ("_sort" in req.query) {
    Object.assign(res.locals._sort, {
      enable: true,
      column: req.query.column,
      type: req.query.type,
    });
  }
  next();
}
