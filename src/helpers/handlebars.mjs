import handlebars from "handlebars";

const handlebarsHelper = {
  addOne: (a, b) => a + b,
  sortable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : "default";
    const icons = {
      default: "cil-elevator",
      asc: "bi bi-sort-up",
      desc: "bi bi-sort-up-alt",
    };
    const types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };
    const type = types[sortType];
    const icon = icons[sortType];
    const address = handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`
    );

    const output = `<a href="${address}">
            <i class="${icon}"></i>
          </a>`;
    return new handlebars.SafeString(output);
  },
};
export default handlebarsHelper;
