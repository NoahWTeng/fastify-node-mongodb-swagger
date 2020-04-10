const { deepParseJson } = require('deep-parse-json');
const { search } = require('../../../config');
const { objectToDotNotation } = require('../utils');

class ProductService {
  constructor(db) {
    this.Model = db.models.product;
  }

  async search({
    select,
    populate,
    page,
    limit,
    sortField,
    sortDirection,
    querySearch,
    queryParams
  }) {
    const options = {
      select: select || '',
      populate: populate || [],
      page: Number(page) || search.pageOptions.page,
      limit: Number(limit) || search.pageOptions.limit,
      sort: sortField
        ? { [sortField]: sortDirection || search.pageOptions.sort.key }
        : search.pageOptions.sort
    };
    const queryObject = querySearch
      ? deepParseJson(querySearch)
      : deepParseJson(queryParams);
    return this.Model.paginate({ ...queryObject }, options);
  }

  async get(id) {
    const obtained = await this.Model.findOne({ _id: id });
    return obtained;
  }

  async create(data) {
    const created = await this.Model.create(data);
    return created;
  }

  async delete(id) {
    const deleted = await this.Model.deleteOne({ _id: id });

    return { _id: id, deleted: deleted.n > 0 };
  }

  async update(id, data) {
    const updated = await this.Model.findOneAndUpdate(
      { _id: id },
      { $set: objectToDotNotation({ updatedAt: Date.now(), ...data }) },
      { new: true }
    ).catch(e => {
      throw e;
    });

    return updated;
  }
}

module.exports = ProductService;
