import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string.isRequired,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

class Notifications extends React.PureComponent {
  handleButtonClick = () => {
    console.log('Close button has been clicked');
  };

  // This is the corrected handleDisplayDrawer function
  handleDisplayDrawer = () => {
    // Implement logic to show the drawer
  };

  handleHideDrawer = () => {
    // Implement logic to hide the drawer
  };

  render() {
    const { displayDrawer, listNotifications, markNotificationAsRead } = this.props;

    const buttonStyle = {
      padding: '0',
      float: 'right',
      backgroundColor: 'white',
      border: 'none',
      cursor: 'pointer',
    };

    return (
      
        Your notifications
        {displayDrawer && (
          
            
            Here is the list of notifications
            
              {listNotifications.length === 0 && (
                
                  No new notification for now
                
              )}
              {listNotifications.map((notification) => (
                
          
        )}
      
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markNotificationAsRead: PropTypes.func.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired, // Add prop type for handleDisplayDrawer
  handleHideDrawer: PropTypes.func.isRequired, // Add prop type for handleHideDrawer
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
