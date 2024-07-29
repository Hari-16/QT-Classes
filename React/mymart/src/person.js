function Person(persondata)
{
    return(
        <table>
            <tbody>
                <tr>
                    <td>Name</td>
                    <td>{persondata.name}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{persondata.age}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{persondata.country}</td>
                </tr>
            </tbody>
        </table>
    );
}
export default Person;
