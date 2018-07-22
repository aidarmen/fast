import React, {Component} from 'react';

    
class Checkbox extends Component {
    
    static defaultProps = {
      checked: false,
      disabled: false,
    };
    constructor(props) {
      super(props);
      this.state = {
        checked: props.checked,
      };
    };
  
    _handleChange = () => {
      this.setState({
        checked: !this.state.checked,
      });
    };
  
    render() {
      const { disabled } = this.props;
      const { checked } = this.state;
      return (
          <td>
        <div className="React__checkbox" >
          <label >
            <input 
              type="checkbox"
              className="React__checkbox--input"
              checked={checked}
              disabled={disabled}
              onChange={this._handleChange}
              
            />
            <span 
              className="React__checkbox--span"
              style={this.props.checked===false ?  {background: 'red'} : {background: '#ffffff'}   }
            />
          </label>
        </div>
        </td>
      );
    }
  }
  
 
        


export default Checkbox