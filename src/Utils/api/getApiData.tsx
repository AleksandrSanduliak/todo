export const getApiData = async (year: number, month: string | number) => {
  try {
    const response = await fetch(
      `https://isdayoff.ru/api/getdata?year=${year}&month=${month}`
    );

    return await response.text();
  } catch (e) {
    console.log(e);
  }
};
