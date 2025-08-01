export function mutipleMongooseToObject(mongooseArrays) {
  return mongooseArrays.map((mongooseArrays) => mongooseArrays.toObject());
}
export function mongooseToObject(mongooseObject) {
  return mongooseObject ? mongooseObject.toObject() : mongooseObject;
}
