import React, {Component} from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import styles from './index.css';

class ChatList extends Component {

    render() {

        return (
            <Paper className={styles.chatListContainer}>
                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <SendIcon fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">Привет, React.js</Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <EmailIcon  fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit">HTML Chat</Typography>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <EmailIcon  fontSize="small" />
                        </ListItemIcon>
                        <Typography variant="inherit" noWrap>
                            MYSQL Chat
                        </Typography>
                    </MenuItem>
                </MenuList>
            </Paper>
        );
    }
}
export default ChatList;