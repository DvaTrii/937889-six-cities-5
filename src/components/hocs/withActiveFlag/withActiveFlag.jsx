import React from "react";

export const withActiveFlag = (Component) => {
  return class Toggle extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false
      };

      this._handleActiveChange = this._handleActiveChange.bind(this);
    }

    _handleActiveChange() {
      this.setState(
          (prevState) => ({isActive: !prevState.isActive})
      );
    }

    render() {
      return <Component
        {...this.props}
        isActive={this.state.isActive}
        onActiveChange={this._handleActiveChange}
      />;
    }
  };
};
