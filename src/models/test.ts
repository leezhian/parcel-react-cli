export type StateType = {
  value?: string
};

export type TestModelType = {
  namespace: string;
  state: StateType;
  effects: {};
  reducers: {};
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
