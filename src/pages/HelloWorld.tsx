import React, { FC } from 'react'
import { connect, Dispatch } from 'dva'
import type { StateType } from '../models/test'
import type { ConnectState } from '../models/connext'

export type TestProps = {
  dispatch: Dispatch;
  test: StateType;
};

const HelloWorld: FC<TestProps> = props => {
  const { test } = props

  return (
    <div>
      {test}
    </div>
  )
}

export default connect(({ testModel }: ConnectState) => ({
  test: testModel.value,
}))(HelloWorld)
