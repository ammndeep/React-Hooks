export const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return (state = state + 1);
  }
  if (action.type === "DECREMENT") {
    let newNum = 0;
    state >= 1 ? (newNum = state - 1) : (newNum = 0);
    return newNum;
  }
  return state;
};
