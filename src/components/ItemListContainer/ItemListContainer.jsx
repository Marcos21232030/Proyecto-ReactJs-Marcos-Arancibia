const ItemListContainer = ({greeting}) => {
    const grretingStyles = {
     fontSize: '3rem',
     fontWeight: '700',
     textAlign: 'center',
    } 
     return (
 
         <div style={grretingStyles} >
             {greeting}
         </div>
     )
 }
 
 export default ItemListContainer;