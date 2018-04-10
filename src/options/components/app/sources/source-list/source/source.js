import React, { Component } from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Menu,
  MenuItem
} from 'material-ui';
import { CircularProgress } from 'material-ui/Progress';
import CodeIcon from 'material-ui-icons/Code';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import DeleteForeverIcon from 'material-ui-icons/DeleteForever';
import RefreshIcon from 'material-ui-icons/Refresh';
import EditIcon from 'material-ui-icons/Edit';

class Source extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    this.handleMenuOpen = this.handleMenuOpen.bind(this);
    this.handleMenuClose = this.handleMenuClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleMenuOpen(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  closeMenu() {
    this.setState({ anchorEl: null });
  }

  handleMenuClose() {
    this.closeMenu();
  }

  handleDelete() {
    this.props.onDelete();
    this.closeMenu();
  }

  handleRefresh() {
    this.props.onRefresh();
    this.closeMenu();
  }

  render() {
    const { id, name, api, owner, repo, path, meta: { status } } = this.props;
    const { anchorEl } = this.state;
    return (
      <ListItem>
        <ListItemIcon>
          {status === 'READING' ? <CircularProgress size={24} /> : <CodeIcon />}
        </ListItemIcon>
        <ListItemText
          primary={name}
          secondary={`${api}/${owner}/${repo}/${path}`}
        />
        <ListItemSecondaryAction onClick={this.handleMenuOpen}>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <Menu
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={this.handleMenuClose}
          PaperProps={{
            style: {
              minWidth: 200
            }
          }}
        >
          <MenuItem key="refresh" onClick={this.handleRefresh}>
            <ListItemIcon>
              <RefreshIcon />
            </ListItemIcon>
            Refresh
          </MenuItem>
          {/* TODO: Edit feature. */}
          {/*<MenuItem key="edit" onClick={this.handleMenuClose}>
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            Edit
          </MenuItem>*/}
          <MenuItem key="delete" onClick={this.handleDelete}>
            <ListItemIcon>
              <DeleteForeverIcon />
            </ListItemIcon>
            Delete
          </MenuItem>
        </Menu>
      </ListItem>
    );
  }
}

export default Source;
