// функция для получения текущего времени в gmt + необходимый формат [дата месяц год минуты]

export const currentGmt = () => {
  var currentUniGmt = [];
  var Now = new Date();
  currentUniGmt[0] = Now.getUTCDate();
  currentUniGmt[1] = Now.getUTCMonth() + 1;
  currentUniGmt[2] = Now.getUTCFullYear();
  currentUniGmt[3] = Now.getUTCHours() * 60 + Now.getUTCMinutes();
  return currentUniGmt;
};
