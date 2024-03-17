import z from "zod";
import { ListDataset } from "./core";

export const fileDtoSchema = z.object({
  fileId: z.string(),
  name: z.string(),
  type: z.string(),
});

export type FileDto = z.infer<typeof fileDtoSchema>;

export type FilesListDto = ListDataset<FileDto>;

export type UploadedFile = {
  fileId: string;
  name: string;
  type: string;
};

export type UploadedFilesList = (UploadedFile | undefined)[];

export type RemoveFileDto = { fileId: string }
