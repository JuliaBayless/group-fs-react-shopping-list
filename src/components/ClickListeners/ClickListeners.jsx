import axios from 'axios';
import swal from '@sweetalert/with-react';

function HandleButton({ fetchGroceries }) {

    const alertUpdate = () => {

        swal({
            title: "Are you sure you want to reset your purchased items?",
            text: "Once reset, all purchases will return to their unpurchased state!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! You need to buy your groceries again!", {
                        icon: "success",
                    })
                    updateGroceries();
                } else {
                    swal("Your list stayed the same!");
                }
            });

    }

    const alertDelete = () => {

        swal({
            title: "Are you sure you want to reset your cart?",
            text: "Once reset, you'll lose your grocery list!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("Poof! Your groceries are gone!", {
                        icon: "success",
                    })
                    deleteGroceries();
                } else {
                    swal("Your groceries are safe!");
                }
            });

    }

    const updateGroceries = () => {

        axios({
            method: 'PUT',
            url: '/groceries'
        })
            .then((response) => {
                fetchGroceries();
                console.log('in the UPDATE', response)
            }).catch((error) => {
                console.log('Error in UPDATE', error)
            })
    }


    const deleteGroceries = () => {
        axios({
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
                <button onClick={alertUpdate}>Reset</button>
                <button onClick={alertDelete}>Empty</button>
            </div>

        </>
    )
}


export default HandleButton;