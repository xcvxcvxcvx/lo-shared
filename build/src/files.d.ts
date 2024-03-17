import z from "zod";
import { ListDataset } from "./core";
export declare const fileDtoSchema: z.ZodObject<{
    fileId: z.ZodString;
    name: z.ZodString;
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    type: string;
    fileId: string;
}, {
    name: string;
    type: string;
    fileId: string;
}>;
export type FileDto = z.infer<typeof fileDtoSchema>;
export type FilesListDto = ListDataset<FileDto>;
export type UploadedFile = {
    fileId: string;
    name: string;
    type: string;
};
export type UploadedFilesList = (UploadedFile | undefined)[];
export type RemoveFileDto = {
    fileId: string;
};
