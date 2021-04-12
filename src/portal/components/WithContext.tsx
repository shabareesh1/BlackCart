import { Container, Subscribe } from 'unstated';
import * as React from 'react';

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
type Subtract<T, K> = Omit<T, keyof K>;

export interface InjectedCounterProps<TState extends object> {
  container: Container<TState>;
}

const withContext = <TState extends object>(InjectedContainer: new () => Container<TState>) =>
  <P extends InjectedCounterProps<TState>>(Component: React.ComponentType<P>) => {
    return class MakeContext extends React.Component<Subtract<P, InjectedCounterProps<TState>>> {
      render() {
        return <Subscribe to={[InjectedContainer]}>{(container: Container<TState>) =>
          <Component container={container} {...this.props as any} />}</Subscribe>;
      }
    };
  };

export { withContext };
