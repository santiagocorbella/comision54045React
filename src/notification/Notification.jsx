const Notification = ({notificacionData }) => {

  const colors = {
     success: 'blue',
     error: 'red',
     warning: 'darkOrange',
     info: 'grey'
  } 

  const title= {
    success: 'Correcto',
    error: 'Error',
    warning: 'Advertencia',
    info: 'Información'
 } 

    const notificationStyle = {
      position: 'absolute',
      top: 100,
      right: 30,
      backgroundColor: colors[notificacionData.type],
      color: 'white',
      padding: 20,
      borderRadius: 10
    }
  
    return (
      <article style={notificationStyle}>
        <h3>{ title[notificacionData.type] }</h3>
        { notificacionData.text }
      </article>
    )
}

export default Notification
