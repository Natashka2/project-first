export type WithDataTest = Readonly<{
  dataTestId: string;
}>;

export type WithOptionalDataTest = Readonly<{
  dataTestId?: string;
}>;

export type JsonDataItem = Record<string, any>;
export type JsonData = JsonDataItem[];
