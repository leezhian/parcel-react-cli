import { Effect, Reducer } from 'dva'

export type StateType = {
  value?: string
};

export type TestModelType = {
  namespace: string;
  state: StateType;
  effects: {
    [propName: string]: Effect;
  };
  reducers: {
    [propName: string]: Reducer<StateType>;
  };
};

const TestModel: TestModelType = {
  namespace: 'testModel',
  state: {
    value: 'Hello World!'
  },
  effects: {},
  reducers: {}
}

export default TestModel
