// import { ComponentClass } from 'react';
import Taro, { Component, Config } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { EffectType } from './model';
import './index.scss';

interface PageStateProps {
  count: number;
}
interface PageOwnProps {}
interface PageStateProps {}
interface PageDispatchProps {
  dispatchAsyncDemo: () => void;
  dispatchAdd: () => void;
  dispatchMinus: () => void;
  dispatchQueryDemo: () => void;
}

type IProps = PageOwnProps & PageStateProps & PageDispatchProps;

interface demoPageState {}

@connect(
  ({ demo }) => ({
    ...demo
  }),
  (dispatch) => ({
    dispatchAsyncDemo() {
      dispatch({ type: EffectType.asyncDemo });
    },
    dispatchAdd() {
      dispatch({ type: EffectType.add });
    },
    dispatchMinus() {
      dispatch({ type: EffectType.minus });
    },
    dispatchQueryDemo() {
      dispatch({ type: EffectType.queryDemo });
    }
  })
)
export default class DemoView extends Component<IProps, demoPageState> {
  public config: Config = {
    navigationBarTitleText: 'Demo'
  }

  public componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  public componentWillUnmount() { }

  public componentDidShow() { }

  public componentDidHide() { }

  public render(): JSX.Element {
    return (
      <View className="index">
        <Button className="add_btn" onClick={() => { this.props.dispatchAdd(); }}>+</Button>
        <Button className="dec_btn" onClick={() => { this.props.dispatchMinus(); }}>-</Button>
        <Button
          className="add_btn"
          onClick={() => {
            this.props.dispatchAsyncDemo();
          }}
        >
            async Add
        </Button>
        <Button
          className="add_btn"
          onClick={() => {
            // this.props.dispatch({ type: 'demo/queryLoginStatus' });
            this.props.dispatchQueryDemo();
          }}
        >
            demo request
        </Button>
        <View><Text>{this.props.count}</Text></View>
        <View><Text>Hello, World</Text></View>
      </View>
    );
  }
}
