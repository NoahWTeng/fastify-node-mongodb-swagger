const { deepParseJson } = require('deep-parse-json');
const { search } = require('../../../config');
const { ProductModel } = require('../models');
const { objectToDotNotation } = require('../utils');

const ProductsService = {
  search: async ({
    select,
    populate,
    page,
    limit,
    sortField,
    sortDirection,
    querySearch,
    queryParams
  }) => {
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
    return ProductModel.paginate({ ...queryObject }, options);
  },
  get: async id => {
    const obtained = await ProductModel.findOne({ _id: id });
    return obtained;
  },
  create: async data => {
    const created = await ProductModel.create(data);
    return created;
  },
  delete: async id => {
    const deleted = await ProductModel.deleteOne({ _id: id });

    return { _id: id, deleted: deleted.n > 0 };
  },
  update: async (id, data) => {
    const updated = await ProductModel.findOneAndUpdate(
      { _id: id },
      { $set: objectToDotNotation({ updatedAt: Date.now(), ...data }) },
      { new: true }
    ).catch(e => {
      throw e;
    });

    return updated;
  }
};
module.exports = ProductsService;
