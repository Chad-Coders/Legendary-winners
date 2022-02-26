import MovieSource from "./api/MovieSource";


function getById(id) {
    var item = MovieSource.get('/entertainment?id=' + id).then((response) => {

        return response.data
    }).catch(error => console.error(`Error: ${error}`))
}

function Entertainment({ }) {

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');







    console.log(getById(id))





    return <div style={{
        display: 'flex', justifyContent:
            'center', alignItems: 'center', height: '90vh'
    }}>
        <h1> test </h1>

        <div className='stream'>


            <div className='movieDetails'>



            </div>
        </div>


    </div>;
};

export default Entertainment;