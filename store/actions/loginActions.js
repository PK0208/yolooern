export const TOOGLE_USERID = 'TOOGLE_USERID';

/* export const toogleUser = (id,name) => {
  return {type: TOOGLE_USERID, userId: id,userName:name};
}; */

export const toogleUser = (email, first_name, id) => {
  console.log('loginActions', email, first_name, id);
  return { type: TOOGLE_USERID, email: email, first_name: first_name, id: id };
};

