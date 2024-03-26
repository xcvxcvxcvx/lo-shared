"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAttributeReqBodyDtoShema = exports.createAttributeReqBodyDtoShema = exports.getAttributeResponseSchema = exports.attributeDataSchema = exports.attributeDataItemSchema = exports.attributeTypeSchema = exports.getAttributeRequestSchema = exports.getProductReqDtoShema = exports.updateProductReqBodyDtoShema = exports.createProductReqBodyDtoShema = void 0;
const zod_1 = __importDefault(require("zod"));
const attributeSchema = zod_1.default.object({
    attributeId: zod_1.default.string(),
    name: zod_1.default.string(),
});
const filesSchema = zod_1.default.object({
    fileId: zod_1.default.string(),
    url: zod_1.default.string(),
});
exports.createProductReqBodyDtoShema = zod_1.default.object({
    published: zod_1.default.boolean(),
    name: zod_1.default.string(),
    description: zod_1.default.string(),
    basePrice: zod_1.default.number(),
    attributes: zod_1.default.array(attributeSchema),
    files: zod_1.default.array(filesSchema),
});
exports.updateProductReqBodyDtoShema = zod_1.default.object({
    productId: zod_1.default.string(),
    published: zod_1.default.boolean(),
    name: zod_1.default.string(),
    description: zod_1.default.string(),
    basePrice: zod_1.default.number(),
    attributes: zod_1.default.array(attributeSchema),
    files: zod_1.default.array(filesSchema),
});
exports.getProductReqDtoShema = {
    params: zod_1.default.object({
        productId: zod_1.default.string(),
    }),
};
exports.getAttributeRequestSchema = {
    params: zod_1.default.object({
        attributeId: zod_1.default.string(),
    }),
};
exports.attributeTypeSchema = zod_1.default.enum(["radio", "checkbox"]);
exports.attributeDataItemSchema = zod_1.default.object({
    label: zod_1.default.string().min(1),
    value: zod_1.default.string().min(1),
});
exports.attributeDataSchema = zod_1.default.array(exports.attributeDataItemSchema);
exports.getAttributeResponseSchema = zod_1.default.object({
    attributeId: zod_1.default.string(),
    name: zod_1.default.string(),
    type: exports.attributeTypeSchema,
    data: exports.attributeDataSchema,
});
exports.createAttributeReqBodyDtoShema = zod_1.default.object({
    name: zod_1.default.string(),
    type: exports.attributeTypeSchema,
    data: exports.attributeDataSchema,
});
exports.updateAttributeReqBodyDtoShema = zod_1.default.object({
    attributeId: zod_1.default.string(),
    name: zod_1.default.string(),
    type: exports.attributeTypeSchema,
    data: exports.attributeDataSchema,
});
