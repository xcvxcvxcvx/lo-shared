import z from "zod";
import { ListDataset } from "./core";

const attributeSchema = z.object({
  attributeId: z.string(),
  name: z.string(),
});

const filesSchema = z.object({
  fileId: z.string(),
  url: z.string(),
});

export const createProductReqBodyDtoShema = z.object({
  published: z.boolean(),
  name: z.string(),
  description: z.string(),
  basePrice: z.number(),

  attributes: z.array(attributeSchema),
  files: z.array(filesSchema),
});

export const updateProductReqBodyDtoShema = z.object({
  productId: z.string(),
  published: z.boolean(),
  name: z.string(),
  description: z.string(),
  basePrice: z.number(),

  attributes: z.array(attributeSchema),
  files: z.array(filesSchema),
});

export const getProductReqDtoShema = {
  params: z.object({
    productId: z.string(),
  }),
};

export type CreateProductDto = z.infer<typeof createProductReqBodyDtoShema>;

export type UpdateProductDto = z.infer<typeof updateProductReqBodyDtoShema>;

export type GetProductDto = {
  productId: string;
  published: boolean,
  name: string;
  description: string;
  basePrice: number;
  files: { fileId: string; url: string }[];
  attributes: { attributeId: string; name: string }[];
};

export type GetProductsDto = ListDataset<GetProductDto>;

export const getAttributeRequestSchema = {
  params: z.object({
    attributeId: z.string(),
  }),
};

export const attributeTypeSchema = z.enum(["radio", "checkbox"]);
export type AttributeType = z.infer<typeof attributeTypeSchema>;

export const attributeDataItemSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
});

export const attributeDataSchema = z.array(attributeDataItemSchema);
export type AttributeData = z.infer<typeof attributeDataSchema>;

export const getAttributeResponseSchema = z.object({
  attributeId: z.string(),
  name: z.string(),
  type: attributeTypeSchema,
  data: attributeDataSchema,
});

export type GetAttributeResponseDto = z.infer<
  typeof getAttributeResponseSchema
>;
export type GetAttributesResponseDto = ListDataset<GetAttributeResponseDto>;

export const createAttributeReqBodyDtoShema = z.object({
  name: z.string(),
  type: attributeTypeSchema,
  data: attributeDataSchema,
});

export const updateAttributeReqBodyDtoShema = z.object({
  attributeId: z.string(),
  name: z.string(),
  type: attributeTypeSchema,
  data: attributeDataSchema,
});

export type CreateAttributeReqBodyDto = z.infer<
  typeof createAttributeReqBodyDtoShema
>;

export type UpdateAttributeReqBodyDto = z.infer<
  typeof updateAttributeReqBodyDtoShema
>;
