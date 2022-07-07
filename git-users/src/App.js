import { Fragment, useRef, useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Image from './components/Image/Image';
import Input from './components/Input/Input';
import List from './components/List/List';
import Listitem from './components/Listitem/Listitem';
import Text from './components/Text/Text';
import Card from './ui/Card/Card';
import classes from './ui/Global.module.css'



const App = () => {
  const [users,setUsers] = useState([]);
  const searchRef = useRef('');
  
  const findHandler = () => {
    fetch(`https://api.github.com/search/users?q=${searchRef.current.value}&page=${1}&per_page=20`)
    .then(data => data.json())
    .then(users => setUsers(users.items))
     searchRef.current.value = ''
  }

  return (
    <Fragment>
        <Card>
          <Input propsRef={searchRef}  />
          <Button onClick={findHandler}>search user</Button>
        </Card>
       <List className={classes.list}>
         {users?.map(user => {
          return (
            <Listitem className={classes['list-item']}>
              <Card>
                <Text> login: {user.login} </Text>
                <Text> id: {user.id}</Text>
                <Text> node_id: {user.node_id}</Text>
              </Card>
                <Image width='200px' height='200px' src={user.avatar_url} />
            </Listitem>
          )
         })}
       </List>
    </Fragment>
  )
}

export default App