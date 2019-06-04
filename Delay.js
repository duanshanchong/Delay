import { Component } from 'react';
import PropTypes from 'prop-types';
/**
 * Deferred Rendering 延迟渲染
 */
class Delay extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    wait: PropTypes.number
  };

  static defaultProps = {
    wait: 250
  };

  state = {
    waiting: true
  };

  componentDidMount() {
    const { wait } = this.props;
    this.timer = setTimeout(() => {
      this.setState({
        waiting: false
      });
    }, wait);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    const { waiting } = this.state;
    const { children } = this.props;
    if (!waiting) {
      return children;
    }

    return null;
  }
}

export default Delay;
