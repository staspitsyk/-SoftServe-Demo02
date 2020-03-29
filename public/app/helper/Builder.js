export class QueryBuilder {
  constructor() {
    this.query = "";
    this.parameters = {};
  }

  addParam(paramName, paramValue) {
    this.parameters[paramName] = paramValue;
  }

  addParamStr(param) {
    return `&${param}`;
  }

  build() {
    Object.entries(this.parameters).forEach(([paramName, paramValue]) => {
      if (paramValue) {
        this.query += `&${paramName}=${paramValue}`;
      }
    });

    this.query = this.query.replace("&", "?");
    const tempQuery = this.query;
    this.query = "";

    return tempQuery;
  }
}
