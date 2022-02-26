import Box from "./box";

function BoxList({ results }) {
    let data = [];
    if (results.data) {
        data = results.data || [];
    }
    console.log(data);
    return (
        <div className="result">
            {data.map((item) => (
                <Box key={item.id} movie={item} />
            ))}
        </div>
    );
}

export default BoxList;