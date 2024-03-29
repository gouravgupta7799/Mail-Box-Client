import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userAction } from '../Store/User-Slice'

const Deletebutton = (props) => {
  const userData = useSelector(state => state.user)
  const dispatch = useDispatch()
  const deleteHandler = async () => {
    await fetch(`https://mailboxclient-dc189-default-rtdb.firebaseio.com/${userData.localId}/mailRecived/${props.item}.json`, {
      method: 'DELETE'
    }).then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        return res.json().then((data) => window.alert(data.error.message))
      }
    })
      .then(res => dispatch(userAction.toggleUpdater()))
      .catch(err => console.log(err))
  }

  return (
    <button className='btn' onClick={deleteHandler}><i className="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
    </svg></i>
    </button>
  )
}

export default Deletebutton