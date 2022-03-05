const initial_state = {
  test: {},
  test_arr: [1, 2, 3],
};

export const chat_reducer = (state = initial_state, action) => {
  switch (action.type) {
    case "PROCESS":
      return { ...action.payload };
    default:
      return state;
  }
};
