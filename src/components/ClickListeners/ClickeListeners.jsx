import axios from axios;

function HandleButton() {

    const updateGroceries = () => {
        axios.put({
            method: 'UPDATE',
            url: '/groceries'
        })
        .then((response) => {
            fetchGroceries();
            console.log('in the UPDATE',response)
        }).catch((error) =>{
            console.log('Error in UPDATE', error)
        })
    }

    
    const deleteGroceries = () => {
        axios.delete({
            method: 'DELETE',
            url: '/groceries'
        })
            .then((response) => {
                fetchGroceries();
                console.log('In the delete', response)
            }).catch((error) => {
                console.log('error in the Delete route', error)
            })
    }

    return (
        <>
        <h2>Shopping List</h2>
        <div>
         <button onClick={updateGroceries}>Reset</button>
         <button onClick={deleteGroceries}>Empty</button>
         </div>

        </>
    )
}


export default ClickListener;