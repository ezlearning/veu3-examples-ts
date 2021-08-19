import { AccountTitle, QueryParam } from "../models";

import Level1Data from "./level1";
import Level2Data from "./level2";
import Level3Data from "./level3";

const data: AccountTitle[] = [...Level1Data, ...Level2Data, ...Level3Data];

function sleep(milliseconds: number): Promise<boolean> {
  const startTime = new Date().getTime();
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      const currentTime = new Date().getTime();
      if (startTime + milliseconds < currentTime) {
        clearInterval(timer);
        resolve(true);
      }
    }, 50);
  });
}

export async function fetch_data(param: QueryParam): Promise<AccountTitle[]> {
  console.log("query param", param);
  await sleep(100);

  const parentSbjCode = param.sbjCode
    .split("-")
    .slice(0, param.sbjLv - 1)
    .join("-");

  return data
    .filter((item) => item.sbjLv === param.sbjLv)
    .filter((item) => item.sbjCode.startsWith(parentSbjCode))
    .filter((item) => {
      return (
        item.showCode.includes(param.showCode) ||
        item.showName.includes(param.showCode)
      );
    });
}
