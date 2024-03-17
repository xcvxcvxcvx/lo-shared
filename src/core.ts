export type ListDataset<T> = { content: T[]; total: number };
export type RequestListParams = {
  page?: number;
  size?: number;
  search?: string;
};
