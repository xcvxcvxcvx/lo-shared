import z from "zod";
import { ListDataset } from "./core";
export declare const createProductReqBodyDtoShema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodString;
    basePrice: z.ZodNumber;
    attributes: z.ZodArray<z.ZodObject<{
        attributeId: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        attributeId: string;
        name: string;
    }, {
        attributeId: string;
        name: string;
    }>, "many">;
    files: z.ZodArray<z.ZodObject<{
        fileId: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        fileId: string;
        url: string;
    }, {
        fileId: string;
        url: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    basePrice: number;
    attributes: {
        attributeId: string;
        name: string;
    }[];
    files: {
        fileId: string;
        url: string;
    }[];
}, {
    name: string;
    description: string;
    basePrice: number;
    attributes: {
        attributeId: string;
        name: string;
    }[];
    files: {
        fileId: string;
        url: string;
    }[];
}>;
export declare const updateProductReqBodyDtoShema: z.ZodObject<{
    productId: z.ZodString;
    name: z.ZodString;
    description: z.ZodString;
    basePrice: z.ZodNumber;
    attributes: z.ZodArray<z.ZodObject<{
        attributeId: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        attributeId: string;
        name: string;
    }, {
        attributeId: string;
        name: string;
    }>, "many">;
    files: z.ZodArray<z.ZodObject<{
        fileId: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        fileId: string;
        url: string;
    }, {
        fileId: string;
        url: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    description: string;
    basePrice: number;
    attributes: {
        attributeId: string;
        name: string;
    }[];
    files: {
        fileId: string;
        url: string;
    }[];
    productId: string;
}, {
    name: string;
    description: string;
    basePrice: number;
    attributes: {
        attributeId: string;
        name: string;
    }[];
    files: {
        fileId: string;
        url: string;
    }[];
    productId: string;
}>;
export declare const getProductReqDtoShema: {
    params: z.ZodObject<{
        productId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        productId: string;
    }, {
        productId: string;
    }>;
};
export type CreateProductDto = z.infer<typeof createProductReqBodyDtoShema>;
export type UpdateProductDto = z.infer<typeof updateProductReqBodyDtoShema>;
export type GetProductDto = {
    productId: string;
    name: string;
    description: string;
    basePrice: number;
    files: {
        fileId: string;
        url: string;
    }[];
    attributes: {
        attributeId: string;
        name: string;
    }[];
};
export type GetProductsDto = ListDataset<GetProductDto>;
export declare const getAttributeRequestSchema: {
    params: z.ZodObject<{
        attributeId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        attributeId: string;
    }, {
        attributeId: string;
    }>;
};
export declare const attributeTypeSchema: z.ZodEnum<["radio", "checkbox"]>;
export type AttributeType = z.infer<typeof attributeTypeSchema>;
export declare const attributeDataItemSchema: z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: string;
}, {
    value: string;
    label: string;
}>;
export declare const attributeDataSchema: z.ZodArray<z.ZodObject<{
    label: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: string;
}, {
    value: string;
    label: string;
}>, "many">;
export type AttributeData = z.infer<typeof attributeDataSchema>;
export declare const getAttributeResponseSchema: z.ZodObject<{
    attributeId: z.ZodString;
    name: z.ZodString;
    type: z.ZodEnum<["radio", "checkbox"]>;
    data: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    attributeId: string;
    name: string;
    type: "radio" | "checkbox";
    data: {
        value: string;
        label: string;
    }[];
}, {
    attributeId: string;
    name: string;
    type: "radio" | "checkbox";
    data: {
        value: string;
        label: string;
    }[];
}>;
export type GetAttributeResponseDto = z.infer<typeof getAttributeResponseSchema>;
export type GetAttributesResponseDto = ListDataset<GetAttributeResponseDto>;
export declare const createAttributeReqBodyDtoShema: z.ZodObject<{
    name: z.ZodString;
    type: z.ZodEnum<["radio", "checkbox"]>;
    data: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: "radio" | "checkbox";
    data: {
        value: string;
        label: string;
    }[];
}, {
    name: string;
    type: "radio" | "checkbox";
    data: {
        value: string;
        label: string;
    }[];
}>;
export declare const updateAttributeReqBodyDtoShema: z.ZodObject<{
    attributeId: z.ZodString;
    name: z.ZodString;
    type: z.ZodEnum<["radio", "checkbox"]>;
    data: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: string;
    }, {
        value: string;
        label: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    attributeId: string;
    name: string;
    type: "radio" | "checkbox";
    data: {
        value: string;
        label: string;
    }[];
}, {
    attributeId: string;
    name: string;
    type: "radio" | "checkbox";
    data: {
        value: string;
        label: string;
    }[];
}>;
export type CreateAttributeReqBodyDto = z.infer<typeof createAttributeReqBodyDtoShema>;
export type UpdateAttributeReqBodyDto = z.infer<typeof updateAttributeReqBodyDtoShema>;
