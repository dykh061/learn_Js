const ALLOWED_COLUMNS = [
  "name",
  "createdAt",
  "updatedAt",
  "description",
  "deletedAt",
];
const ALLOWED_TYPES = ["asc", "desc"];

export async function sortMiddleware(req, res, next) {
  res.locals._sort = {
    enable: false,
    column: null,
    type: "default",
  };
  if ("_sort" in req.query) {
    let { column, type } = req.query;
    if (!ALLOWED_COLUMNS.includes(column)) {
      column = ALLOWED_COLUMNS[0];
    }

    if (!ALLOWED_TYPES.includes(type)) {
      type = "desc";
    }
    Object.assign(res.locals._sort, {
      enable: true,
      column,
      type,
    });
  }
  next();
}
