import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentFilter from 'material-ui/svg-icons/content/filter-list';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';

export default class MenuClickBg extends React.Component {

  state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleOpenMenu = () => {
    if(!document.querySelector('.slides').style.backgroundImage
      || !document.querySelector('.slides').style.backgroundImage.includes(this.props.src)) {
      this.setState({
        openMenu: true,
      });
    }
  }

  changeColor = () => {
    document.querySelector('.slides').style.backgroundImage = "url('"+this.props.src+"')"
    this.setState({
      openMenu: false,
    });
}

 
  render() {
    return (
	<div>
        <IconMenu className='menu-button-icon'
          iconButtonElement={        
      	<FlatButton onClick={this.handleOpenMenu} className='menu-button-text' label=" " />
		}
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          <MenuItem onClick={this.changeColor}  value="1" primaryText="Set As Background" />
        </IconMenu>
      </div>

    );
  }
}
