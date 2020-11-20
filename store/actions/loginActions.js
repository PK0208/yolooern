export const TOOGLE_USERID = 'TOOGLE_USERID';

export const toogleUser = (id,name) => {
  return {type: TOOGLE_USERID, userId: id,userName:name};
};
