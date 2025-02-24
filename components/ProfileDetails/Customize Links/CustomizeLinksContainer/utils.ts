type Platform = {
  value: string;
  label: string;
  icon: string;
};

type InputData = Record<string, string | Platform>;

type TransformedData = {
  url: string;
  platform: string;
  user_id: string;
};

export function transformData(
  data: InputData,
  userId: string
): TransformedData[] {
  const result: TransformedData[] = [];

  Object.keys(data).forEach((key) => {
    if (key.startsWith("link-")) {
      const index = key.split("-")[1]; // Extract the number after "link-"
      const url = data[key] as string;
      const platform = (data[`select-${index}`] as Platform)?.value;

      if (url && platform) {
        result.push({ url, platform, user_id: userId });
      }
    }
  });

  return result;
}
