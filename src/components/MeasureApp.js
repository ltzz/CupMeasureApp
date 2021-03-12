import React from 'react'

class InputText extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(event) {
    this.props.onValChange(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="InputText"
        value={this.props.value}
        onChange={(e) => this.handleChange(e)}
      />);
  }
}

const calcVolume = (diameter, depth) => {
  return diameter * diameter * depth * Math.PI / 4 / 1000
}

class MeasureApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { innerDiameter: 0.0, depth: 0.0, volume: 0.0 };
  }

  handleChangeInnerDiameter(value) {
    this.setState({
      innerDiameter: value,
      depth: this.state.depth,
      volume: calcVolume(value, this.state.depth)
    });
  }

  handleChangeDepth(value) {
    this.setState({
      innerDiameter: this.state.innerDiameter,
      depth: value,
      volume: calcVolume(this.state.innerDiameter, value)
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.volume.toFixed(0)} ml</div>
        <br />
        内側の直径<br />
        <InputText
          value={this.state.innerDiameter}
          onValChange={(e) => this.handleChangeInnerDiameter(e)} /> mm<br />
        深さ<br />
        <InputText
          value={this.state.depth}
          onValChange={(e) => this.handleChangeDepth(e)}/> mm<br />
      </div>);
  }
}

export default MeasureApp;