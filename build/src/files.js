"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileDtoSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.fileDtoSchema = zod_1.default.object({
    fileId: zod_1.default.string(),
    name: zod_1.default.string(),
    type: zod_1.default.string(),
});
