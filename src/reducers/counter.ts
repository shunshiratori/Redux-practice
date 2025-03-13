interface Myaction {
  count: number;
  type: string;
}

const initialState = {
  count: 1,
};

const counter = (state = initialState, action: Myaction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
