import { Effect, Reducer } from 'dva'

export type StateType = {
  value?: string,
}

export type DemoModelType = {
  namespace: string;
  state: StateType;
  effects: {
    [propName: string]: Effect;
  };
  reducers: {
    [propName: string]: Reducer<StateType>;
  };
}

const DemoModel: DemoModelType = {
  namespace: 'demoModel',
  state: {
    value: 'Hello World!',
  },
  effects: {},
  reducers: {},
}

export default DemoModel
